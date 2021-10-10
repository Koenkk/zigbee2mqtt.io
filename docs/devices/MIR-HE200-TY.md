---
title: "TuYa Human radar motion/presence sensor"
description: "Integrate your Tuya Human radar motion and presence sensor into zigbee2mqtt."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/MIR-HE200-TY.md)*

# Tuya MIR-HE200-TY

| Model | Tuya MIR-HE200-TY  |
| Vendor  | TuYa  |
| Description | TuYa Human radar motion/presence sensor |
| Exposes | Presence, motion, motion_direction, motion_speed, illuminance,  sensivity, scene |
| Picture |  (zigbee2mqtt.io/docs/images/devices/MIR-HE200-TY.jpg)MIR-HE200-TY |

## Notes


### Pairing
Factory resetting by pushing the "Reset-Button" longer than 5 seconfs.
#### Touchlink factory reset
See [Touchlink](../information/touchlink)



## OTA updates
This device supports OTA updates, for more information see [OTA updates](../information/ota_updates.md).


## Exposes

### presence 
This device recognizes presence by radar, not by IR.

### motion
Recognize, if only presence or the recognized body is moving.

### motion_speed
shows the speed of movement. At the moment not shure about the meaturing-methode and the scale of results. Comming up in an update.

### motion_detection
shows wether the body is moved towards or backwards from the sensor. Also it shows, if the body is standing still.

### sensivity
scalable sensivity of detection (Range 0-9). This expose can be controlled via publish a message to:
`zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"sensivity": "0-9"}`

### scene
the sensor has 6 predefined scenes regarding sensivity of motion and presence. These are: default, area, toilet, bedroom, parlour, office, hotel. Changing is possible via:
`zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"scene": "default or area or toilet, etc"}`


![MIR-HE200-TY](https://user-images.githubusercontent.com/20765982/136711332-47023263-a623-4010-bd66-3eca80e06588.jpg)
