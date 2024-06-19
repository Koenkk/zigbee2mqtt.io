---
title: "Mumubiz TYZGTH4CH-D1RF"
description: "4CH Zigbee Temp.Humi Smart Switch"
model: "TYZGTH4CH-D1RF"
manufacturer: "Mumubiz"
supports: "on/off, temperature measurement"
model_id: "TS000F"
manufacturer_id: "_TZ3218_ya5d6wth"
---

## Mumubiz TYZGTH4CH-D1RF

The Mumubiz TYZGTH4CH-D1RF is a 4 channel Zigbee smart switch that supports temperature measurement.

![Mumubiz TYZGTH4CH-D1RF](../../images/devices/Mumubiz_TYZGTH4CH-D1RF.jpg)

### Supported Features

- On/Off control for 4 channels
- Temperature measurement

### Configuration

To use this device with Zigbee2MQTT, you need to add the following external converter:

```javascript
const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const e = exposes.presets;

module.exports = {
    fingerprint: [
        {modelID: 'TS000F', manufacturerName: '_TZ3218_ya5d6wth'}
    ],
    model: 'TYZGTH4CH-D1RF',
    vendor: 'Mumubiz',
    description: '4CH Zigbee Temp.Humi Smart Switch',
    fromZigbee: [fz.on_off, fz.temperature],
    toZigbee: [tz.on_off],
    exposes: [e.switch().withEndpoint('l1'), e.switch().withEndpoint('l2'), e.switch().withEndpoint('l3'), e.switch().withEndpoint('l4'), e.temperature()],
    endpoint: (device) => {
        return {'l1': 1, 'l2': 2, 'l3': 3, 'l4': 4};
    },
};
