<!-- Notes BEGIN -->
>> ## Notes
## Description
Adds support for ACW02 HVAC Thermostat - a custom DIY Zigbee device based on ESP32-C6.

ACW02-ZB is an open-source Zigbee-enabled HVAC controller for the Airton series and compatible units (to replace ACW02 WiFi module).

## Device Details
- **Model:** ACW02-ZB
- **Vendor:** Custom devices (DiY)
- **Zigbee Model ID:** acw02-z
- **Manufacturer Name:** Custom devices (DiY)
- **Device Type:** Router
- **Chip:** ESP32-C6 with ESP-Zigbee SDK 5.5.1

## Features
- **Climate Control:**
  - Temperature setpoint: 16-31°C (single setpoint for both heating/cooling)
  - Local temperature reading
  - System modes: off, auto, cool, heat, dry, fan_only
  - Running state: idle, heat, cool, fan_only

- **Fan Control:**
  - Custom fan speeds: quiet, low, low-med, medium, med-high, high, auto
  - Maps to ACW02 protocol values (SILENT, P20, P40, P60, P80, P100, AUTO)

- **Switches (9 endpoints total):**
  - Eco mode (endpoint 2)
  - Swing mode (endpoint 3)
  - Display control (endpoint 4)
  - Night/sleep mode (endpoint 5)
  - Air purifier/ionizer (endpoint 6)
  - Mute beep sounds (endpoint 8)

- **Read-only Sensors:**
  - Filter cleaning status (endpoint 7)
  - Error status indicator (endpoint 9)
  - Error text messages (via locationDesc attribute)

- **Additional:**
  - OTA firmware updates supported
  - Optimized reporting (most attributes auto-report via REPORTING flag)
  - Minimal polling for unreportable attributes (runningMode, fanMode, error_text)


### Device Pairing
1. Power on the device
2. It will automatically enter pairing mode (factory new)
3. Permit joining in Zigbee2MQTT
4. To force pairing, hold the boot button for more than 5 seconds.

### Configuration Options
- `acw02_poll_interval`: Polling interval for unreportable attributes (default: 60s, set to -1 to disable)
>>
<!-- Notes END -->
