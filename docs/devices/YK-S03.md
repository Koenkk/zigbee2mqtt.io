---
title: "Tuya YK-S03 control via MQTT"
description: "Integrate your Tuya YK-S03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-06-08T00
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Tuya YK-S03

|     |     |
|-----|-----|
| Model | YK-S03  |
| Vendor  | [Tuya](/supported-devices/#v=Tuya)  |
| Description | Smart pH and Chlorine Tester for Swimming Pool |
| Exposes | tds, temperature, battery, ph, ec, orp, free_chlorine, ph_max, ph_min, ec_max, ec_min, orp_max, orp_min, free_chlorine_max, free_chlorine_min, salinity, linkquality |
| Picture | ![Tuya YK-S03](https://www.zigbee2mqtt.io/images/devices/YK-S03.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->



## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

* `temperature_calibration`: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.

* `temperature_precision`: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of `0` and with a with a maximum value of `3`


## Exposes

### Tds (numeric)
Total Dissolved Solids.
Value can be found in the published state on the `tds` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

### Temperature (numeric)
Measured temperature value.
Value can be found in the published state on the `temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Ph (numeric)
pH value, if the pH value is lower than 6.5, it means that the water quality is too acidic and has impurities, and it is necessary to add disinfectant water for disinfection.
Value can be found in the published state on the `ph` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `pH`.

### Ec (numeric)
Electrical conductivity.
Value can be found in the published state on the `ec` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `µS/cm`.

### Orp (numeric)
Oxidation Reduction Potential value. If the ORP value is above 850mv, it means that the disinfectant has been added too much, and it is necessary to add water or change the water for neutralization. If the ORP value is below 487mv, it means that too little disinfectant has been added and the pool needs to be disinfected again.
Value can be found in the published state on the `orp` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mV`.

### Free chlorine (numeric)
Free chlorine value. The water in the swimming pool should be between 6.5-8ph and ORP should be between 487-840mv, and the chlorine value will be displayed normally. Chlorine will not be displayed if either value is out of range.
Value can be found in the published state on the `free_chlorine` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `mg/L`.

### Ph max (numeric)
pH maximal value.
Value can be found in the published state on the `ph_max` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ph_max": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `20`.
The unit of this value is `pH`.

### Ph min (numeric)
pH minimal value.
Value can be found in the published state on the `ph_min` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ph_min": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `20`.
The unit of this value is `pH`.

### Ec max (numeric)
Electrical Conductivity maximal value.
Value can be found in the published state on the `ec_max` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ec_max": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `20000`.
The unit of this value is `µS/cm`.

### Ec min (numeric)
Electrical Conductivity minimal value.
Value can be found in the published state on the `ec_min` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"ec_min": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `µS/cm`.

### Orp max (numeric)
Oxidation Reduction Potential maximal value.
Value can be found in the published state on the `orp_max` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"orp_max": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `mV`.

### Orp min (numeric)
Oxidation Reduction Potential minimal value.
Value can be found in the published state on the `orp_min` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"orp_min": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `1000`.
The unit of this value is `mV`.

### Free chlorine max (numeric)
Free Chlorine maximal value.
Value can be found in the published state on the `free_chlorine_max` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"free_chlorine_max": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `15`.
The unit of this value is `mg/L`.

### Free chlorine min (numeric)
Free Chlorine minimal value.
Value can be found in the published state on the `free_chlorine_min` property.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"free_chlorine_min": NEW_VALUE}`.
The minimal value is `0` and the maximum value is `15`.
The unit of this value is `mg/L`.

### Salinity (numeric)
Salt value.
Value can be found in the published state on the `salinity` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `ppm`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

