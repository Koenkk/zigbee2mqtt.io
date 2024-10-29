# ZBOSS adapters

::: warning ATTENTION

Support for this adapter is **experimental**, not recommended yet for production setups

:::

The adapter for the ZBOSS protocol is based on the example of ZBOSS NCP Host [Zigbee NCP (Network Co-Processor)](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/zigbee/ncp/README.html) for Nordic Semiconductor chips, such as nRF5340, nRF52840, nRF52833, nRF21540.

Also, thanks to the special firmware https://github.com/andryblack/esp-coordinator, ZBOSS protocol can be used to interact with the Espressif ESP32-C6/H2 chips.

The interaction between the chip and the host occurs according to [ZBOSS NCP Serial Protocol](https://cloud.dsr-corporation.com/index.php/s/BAn4LtRWbJjFiAm).

The adapter code is based on the [zigpy-zboss library](https://github.com/kardia-as/zigpy-zboss).

::: warning ATTENTION
Currently, this adapter does not support various functions, so if you depend on these functions, consider using a different adapter.

-   [Changing the channel](../configuration/zigbee-network.md#changing-the-zigbee-channel), changing requires re-pairing all devices.
-   Adding [install codes](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestinstall_codeadd), which is required to pair some devices.
-   [Backups](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestbackup)
-   Inter-PAN, which is required for [touchlink](../../guide/usage/touchlink.md)

:::

### Configuration

```yaml
serial:
    adapter: zboss
```

Other supported settings are: `adapter_concurrent` and `transmit_power` ([docs](../configuration/adapter-settings.md)).

## Hardware

Currently tested on nRF52840 Dongle and ESP32-C6/H2 devboards.

-   [Pre build coordinator firmware for Nordic Semiconductor with nRF52840 SoC](https://github.com/kardia-as/nrf-zboss-ncp)

<img src="https://docs-be.nordicsemi.com/bundle/ncs-latest/page/nrf/_images/zigbee_ncp_sample_overview.svg" width="500" />

-   [Experimental ESP32-C6 firmware](https://github.com/andryblack/esp-coordinator)

<img src="https://docs.espressif.com/projects/esp-dev-kits/en/latest/_images/esp32-c6-devkitc-1-isometric_v1.2.png" width="200" />
