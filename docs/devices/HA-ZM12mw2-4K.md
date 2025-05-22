# Halemeier HA-ZM12mw2-4K

4-channel LED driver from Halemeier. Each channel is exposed as a separate Zigbee light.

## Features

- 4 independent channels (endpoint 1 to 4)
- Supports on/off, brightness, and color temperature
- Uses `light_onoff_brightness_colortemp` with `multiEndpoint` mapping
- Works with Home Assistant via Zigbee2MQTT

## Notes

For full support of per-channel color temperature, Zigbee2MQTT v1.38+ is recommended.  
Advanced features like `effect`, `color_temp_startup`, and `power_on_behavior` are not exposed per endpoint, but can be controlled via MQTT.
