<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### Keep-alive

The Hejhome Z26 with Zigbee model `TS0505B` and manufacturer `_TZ3210_cnicaghm` requires periodic Basic-cluster reads to prevent it from leaving the network after approximately 8–10 minutes. The device definition reads `genBasic.appVersion` every 120 seconds automatically. No additional automation is required.

This workaround has been tested on two production lots with application version 66. GOQUAL documents a similar workaround using a 30-second interval in its [official Homey app changelog](https://homey.app/en-us/app/com.hejhome.iot/Hejhome/). The 120-second interval is empirical and has not been established as safe for every firmware version. It does not resolve all possible power or routing interruptions. The [case report](https://github.com/mahlernim/hejhome-z26-zigbee2mqtt) includes the test conditions and limitations.

Keep mains power supplied when controlling the bulb through Zigbee. Switching the light off through Zigbee is different from disconnecting its mains power.

### Migrating from the external converter

After installing a Zigbee2MQTT version that includes this device definition, remove any external converter matching `TS0505B` / `_TZ3210_cnicaghm` and restart Zigbee2MQTT. Confirm that the bulb is identified as `GKZ-LB431RGBCW-E26` using the built-in definition. Re-pairing is not required.

Do not apply this keep-alive requirement to other `TS0505B` manufacturer fingerprints.
<!-- Notes END: Do not edit below this line -->
