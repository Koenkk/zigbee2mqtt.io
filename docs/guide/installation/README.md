---
redirectFrom: /getting_started/running_zigbee2mqtt.md
---

# Installation

Zigbee2MQTT was written in Node.js and runs almost on every platform with affordable memory footprint.

> [!WARNING]
> **32-bit platforms are deprecated, support ends April 2027.** When Node.js 22 reaches end-of-life (April 2027), the minimum supported Node.js version becomes v24, which no longer ships official builds for any 32-bit platform. This affects every installation method, not only Docker. If you run Zigbee2MQTT on 32-bit hardware or a 32-bit OS (e.g. Raspberry Pi 1/Zero, older Raspberry Pi OS 32-bit installs), plan to move to a 64-bit OS or hardware (`amd64`/`x86_64`, `arm64`/`aarch64`) before then. See [#33552](https://github.com/Koenkk/zigbee2mqtt/issues/33552).

- [Linux](./01_linux.md)
- [Docker](./02_docker.md)
- [Home Assistant addon](./03_ha_addon.md)
- [openHABian](./04_openhabian.md)
- [Windows](./05_windows.md)
- [FreeBSD jail](./06_freebsd_jail.md)
- [Kubernetes](./08_kubernetes.md)

## Optional

- [Watchdog](./15_watchdog.md)

## Troubleshooting

- [Zigbee2MQTT fails to start/crashes runtime](./20_zigbee2mqtt-fails-to-start_crashes-runtime.md)
