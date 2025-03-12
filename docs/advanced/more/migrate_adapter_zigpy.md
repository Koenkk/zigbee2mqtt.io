---
sidebar: auto
---

# Migrate to another adapter with zigpy

::: warning
Migration from one adapter to another requires backup and restore support which is so far only implemented for the `zstack` (Texas Instrument) and `ember` adapters in Z2M.
Backup and restore is **not officially supported** for any other adapters (`conbee`, `ezsp`, `zboss` and `zigate`).
Please don't open issues about this method, but feel free to [discuss it in the discussions board](https://github.com/Koenkk/zigbee2mqtt/discussions/26716).
:::

::: warning
This is highly experimental and has only been tested on a few occasions. Migrating from, say, a "Conbee" adapter to "Zstack" is possible but not within Z2M. This requires external tools and careful reconfiguration of Z2M to avoid breaking everything. This method is based on a tool used by the native ZHA integration of Home Assistant, which supports migrating between all current adapter brands.

Be aware that this process essentially clones Zigbee network data. You will end up with two adapters with the same network address, and you will not be able to use the old adapter alongside the new one until you reset it and assign it a new network address.

This _should_ work for any combinations, but you might want to wait for more feedback.
:::

::: tip Current successful migration attempted

- Conbee 2 to Sonoff Dongle P (zigpy-cli 1.1.1, z2m 2.1.3)

[A more up to date list might be found in the discussion board.](https://github.com/Koenkk/zigbee2mqtt/discussions/26716)

:::

1. **Backup your Zigbee2MQTT configuration and data.**
2. Make sure you are running the latest version of Zigbee2MQTT.
3. Stop Zigbee2MQTT.
4. Install the latest firmware on both your current adapter **and** future adapter.
    - For Deconz (from or to), you must be using at least version `0x26780700` (latest for Conbee II).
    - Please refer to your adapter's documentation for firmware update instructions.
5. Install [zigpy-cli](https://github.com/zigpy/zigpy-cli/) on a computer. This requires Python 3.
6. Unplug all adapters if any are still connected (just to be sure).
7. Connect your source coordinator (the adapter you are migrating from).
8. Backup your source coordinator with `zigpy radio deconz /dev/ttyUSB0 backup deconz-backup.json`.
    - This is an example using a Deconz adapter; please adjust accordingly. Some adapters may require additional parameters—refer to the zigpy-cli documentation.
    - This command saves the important parts of your Zigbee network configuration, which currently reside inside your Zigbee stick.
    - Some warnings may appear; they can be ignored if you still obtain the backup JSON file at the end.
9. Disconnect the source coordinator and connect the target coordinator.
10. Restore the source coordinator backup to the target coordinator with `zigpy radio znp /dev/ttyUSB1 restore deconz-backup.json`.
    - This is an example using a Zstack adapter; please adjust accordingly. Some adapters may require additional parameters—refer to the zigpy-cli documentation.
    - This command converts and sends your Zigbee network configuration to your new target coordinator.
    - The restore process may take several minutes. **DO NOT INTERRUPT**.
11. Unplug and reconnect the target coordinator to your Z2M computer, even if it's the same computer.
12. Do not start Z2M yet.
13. Open Z2M's `configuration.yaml` file:
    - Update the adapter configuration section so it matches your new adapter.
    - This is located under `serial`. The important fields are `port` and `adapter`. Refer to [Z2M configuration](../../guide/configuration/adapter-settings.html) for details.
    - Double-check the `port`, as this is very likely to change with your new adapter.
    - If you use Docker, don't forget to update your container configuration.
    - If you had other fields configured under `serial` for your previous coordinator, comment them out. You might not need them anymore, and it's better to start with a default configuration for your new coordinator.
14. Start Z2M. Everything should work as before, and you won't need to re-pair devices.
