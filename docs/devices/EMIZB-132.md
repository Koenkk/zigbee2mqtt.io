---
title: "Develco EMIZB-132 control via MQTT"
description: "Integrate your Develco EMIZB-132 via Zigbee2mqtt with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/EMIZB-132.md)*

# Develco EMIZB-132

| Model | EMIZB-132  |
| Vendor  | Develco  |
| Description | Wattle AMS HAN power-meter sensor |
| Supports | power measurements |
| Picture | ![Develco EMIZB-132](../images/devices/EMIZB-132.jpg) |

## Notes

### Configuring interface mode
In order to get measurements, after pairing the device you need to configure the interface mode.

To do this send to `zigbee2mqtt/FRIENDLY_NAME/set` payload `{"interface_mode": "INTERFACE_MODE"}`.

Possible values for `INTERFACE_MODE` are:

| Value | Description |
| - | - |
| `norwegian_han` | Norwegian HAN  |
| `norwegian_han_extra_load` | Norwegian HAN – Enable extra load. This is need to enable Adion meter
communication |
| `aidon_meter` | Aidon Meter supporting Norwegian HAN HW interface.
SW protocol is Aidon Manufacture Specific |
| `kaifa_and_kamstrup` | Kaifa meter and Kamstrup meters running old firmware |

Example of payload: `{"interface_mode": "norwegian_han_extra_load"}`

### Not getting measurements
In case you are not getting any measurements, it could be that your firmware is too old. You can ask Wattle for a replacement.

Related issues:
- https://github.com/Koenkk/zigbee-herdsman-converters/issues/974#issuecomment-590450035
- https://github.com/dresden-elektronik/deconz-rest-plugin/issues/2127#issuecomment-587949747