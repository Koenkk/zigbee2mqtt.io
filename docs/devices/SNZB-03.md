---
title: "SONOFF SNZB-03 control via MQTT"
description: "Integrate your SONOFF SNZB-03 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/SNZB-03.md)*

# SONOFF SNZB-03

| Model | SNZB-03  |
| Vendor  | SONOFF  |
| Description | Zigbee motion sensor |
| Supports | occupancy |
| Picture | ![SONOFF SNZB-03](../images/devices/SNZB-03.jpg) |

## Notes


### Pairing
If brand new, when powered on it will attempt to pair to Zigbee2mqtt automatically. If not (or if has been paired before and needs to be re-paired) - press and hold the  button on the top for about 5 seconds until the light flashes several times. The device will then go into pairing mode  It should then be connected to Zigbee2mqtt. Pressing the button should activate the relay on/off as normal, and the red LED will be on/off.


## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
None yet
{% endraw %}

