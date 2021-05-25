---
title: "Schneider Electric CCTFR6400  heater controler"
---

# CCTFR6700
| Model | CCTFR6400  |
| Vendor  | Schneider Electric  |
| Description | Electric heater thermostat |
| Exposes | Climate, Pilot Mode, Energy  |
| Picture | ![CCTFR6400](../images/devices/CCTFR6400.jpg) |

## Notes
This device is a 
- thermostat UI for displaying/adjusting target set point.
- temperature sensor
- hygrometry sensor
It can display the heating status of associated climate by setting `pi_heating_demand`

It requires a Z-Stack controller (Firmware version > TBD). It is currently not working with zigate and conbee II (maybe supported in further firmware).


