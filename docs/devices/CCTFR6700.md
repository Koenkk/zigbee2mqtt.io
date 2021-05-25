---
title: "Schneider Electric CCTFR6700  heater controler"
---

# CCTFR6700
| Model | CCTFR6700  |
| Vendor  | Schneider Electric  |
| Description | Electric heater thermostat |
| Exposes | Climate, Pilot Mode, Energy  |
| Picture | ![CCTFR6700](../images/devices/CCTFR6700.jpg) |

## Notes
This device is a thermostat to drive an electric heater.
It supports two modes:
- Contactor mode, that switches the heater power supply on and off
- Pilot mode, for compatible heaters

### Pairing and configuring
After pairing the device requires: 
- the pilot mode to be configured (Contactor/Pilot)
- an external temperature measurment, either through a bind from a sensor, or report from the coordinator trhough automation. The temperature must be refreshed at least every 10mn
- the target thermostat set point

