---
sidebarDepth: 0
---

# Watchdog

Zigbee2MQTT supports a simple watchdog for "soft failures" (failures that Zigbee2MQTT can handle properly without crashing, like "adapter disconnected"). The normal operation is to have to restart the Zigbee2MQTT process, or reset the container (for a containerized installation). This watchdog allows Zigbee2MQTT to try restarting internally without exiting the process. This is optional, and only enabled if the `env` variable is set and valid.

```bash
Z2M_WATCHDOG=default
```

Start Zigbee2MQTT with the watchdog's default retry delays (1min, 5min, 15min, 30min, 60min).

The number of configured delays is the de facto number of times the watchdog will retry, past that, the node process will be stopped (to avoid endlessly retrying when clearly, something's requiring the user's attention).
The watchdog will retry after 1min on first failure, then after 5min on second failure, then after 15min on third failure, then after 30min on fourth failure, then after 60min on fifth failure, then exit if sixth start fails. Any successful start resets that to the beginning.

In addition, the following behaviors always apply:

-   The watchdog will only trigger on failure after the initial (manual) start is successful.
-   A problem with settings will always ignore the watchdog and stop Z2M.
-   A manual stop/restart (like `CTRL+C`) will ignore the watchdog to comply with user intent.

::: tip TIP
In non-containerized environments, to handle NodeJS crashes, you will need a dedicated watchdog program on your operating system to allow restarting the Zigbee2MQTT process automatically.
:::

## Customized delays

```bash
Z2M_WATCHDOG=minutes_csv
```

Start Zigbee2MQTT with the watchdog's retry delays of your choosing.
`minutes_csv` is expected to be a list of comma-separated numbers representing minutes (or fractions of minutes, with decimal point `.`). Other values/formats will prevent Z2M from starting.

Examples:

```bash
Z2M_WATCHDOG=5,10,30
```

Start Zigbee2MQTT with the watchdog's retry delays as: 5min, 10min, 30min. This will result in 3 retry attempts.

```bash
Z2M_WATCHDOG=0.5,3,6,15
```

Start Zigbee2MQTT with the watchdog's retry delays as: 30sec, 3min, 6min, 15min. This will result in 4 retry attempts.

```bash
Z2M_WATCHDOG=1
```

Start Zigbee2MQTT with the watchdog's retry delays as: 1min. This will result in 1 retry attempt.
