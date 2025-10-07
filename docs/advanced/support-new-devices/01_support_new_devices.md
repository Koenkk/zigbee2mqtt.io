# Support New Devices

This guide will walk you through adding support for new devices using [external converters](../../advanced/more/external_converters.md).

## Prerequisites

Before you begin:
- Check if your device is already supported in the [dev branch changelog](https://gist.github.com/Koenkk/bfd4c3d1725a2cccacc11d6ba51008ba#new-supported-devices)
- Set `log_level: debug` in your Zigbee2MQTT configuration
- Ensure joining is enabled on your network
- Have access to the Zigbee2MQTT web interface

::: tip
If you need help, open a [discussion](https://github.com/Koenkk/zigbee2mqtt/discussions) on GitHub.
:::

## Step 1: Pair the Device

Zigbee2MQTT can pair with any Zigbee device, even if not yet supported. Put your device into pairing mode (usually via factory reset).

Once successfully paired, you will see:

```
Zigbee2MQTT:info  2025-10-07T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired
Zigbee2MQTT:warn  2025-10-07T12:19:56: Device '0x00158d0001dc126a' with Zigbee model 'lumi.sens' and manufacturer name 'LUMI' is NOT supported, please follow https://www.zigbee2mqtt.io/how-tos/support_new_devices.html
```

The device will now appear in your web interface.

## Step 2: Generate and Test the External Definition

### 2.1. Generate the Definition

* Navigate to your device in the web interface
* Go to the **Exposes** tab to see auto-discovered features
* Go to the **Dev console** tab
* Click **Generate external definition**
* Copy the generated code

<img src="../../images/generate_external_definition.gif" height="300"/>

### 2.2. Create the External Converters Directory

The `external_converters` directory does not exist by default:

```bash
# Navigate to your Zigbee2MQTT data directory
cd /path/to/zigbee2mqtt/data

# Create the directory
mkdir -p external_converters
```

Common locations:
- **Docker**: `/app/data/external_converters`
- **Standalone**: `./data/external_converters`
- **Home Assistant OS (HAOS)**: `/config/zigbee2mqtt/external_converters`

### 2.3. Save and Test

* Save the code in `external_converters/your_device.mjs` (use `.mjs` extension)
* Restart Zigbee2MQTT
* Check the logs to verify the converter was loaded:

  **Success:**
  ```
  [YYYY-MM-DD HH:MM:SS] info: z2m: Loaded external converter 'your_device.mjs'.
  ```

  **Error (not loaded):**
  ```
  [YYYY-MM-DD HH:MM:SS] error: z2m: Invalid external extension 'your_device.mjs' was ignored and renamed to prevent interference with Zigbee2MQTT. (Unexpected end of input)
  ```

  If you see an error, check your file syntax (missing brackets, commas, etc.).

* Check the device's **About** tab - it should show `Supported: external`
* Test all features (on/off, readings, etc.)

::: tip
Feature discovery is still WIP. Some features may not be discovered, especially on non-standard devices (common with Tuya devices).
:::

If all features work, skip to Step 4. Otherwise, continue to Step 3.

## Step 3: Extend the Definition (If Needed)

If some features are missing or not working, you need to extend the definition. Edit your `.mjs` file and add the appropriate [modern extends](../../advanced/more/external_converters.md).

### 3.1. Add Missing Modern Extends

Example:

```js
import * as m from 'zigbee-herdsman-converters/lib/modernExtend';

export default {
    zigbeeModel: ['PLUG-01'],
    model: 'PLUG-01',
    vendor: 'Vendor',
    description: 'Smart plug',
    extend: [
        m.onOff(),
        m.electricityMeter(),
        m.temperature(),  // Add missing features
    ],
};
```

Restart Zigbee2MQTT and test the new features.

### 3.2. Handle Special Cases

**Tuya devices**: If your device reports `manuSpecificTuya` in the logs, follow the [Tuya-specific guide](./02_support_new_tuya_devices.md).

**Non-reporting devices**: If the device doesn't report values, add a `configure:` section. Check similar [device definitions](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/devices) for examples.

**Custom converters**: If you see messages like:

```
Zigbee2MQTT:debug  2025-10-07T12:24:22: No converter available for 'WSDCGQ01LM' with cluster 'msTemperatureMeasurement' and type 'attributeReport' and data '{"measuredValue":2512}'
```

You may need to add specific [fromZigbee converters](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/converters/fromZigbee.ts):

```js
import fz from 'zigbee-herdsman-converters/converters/fromZigbee';

export default {
    // ... other properties
    fromZigbee: [fz.temperature, fz.humidity],
};
```

::: tip
Check the **Clusters** tab in the web interface to see supported clusters. You can also use the MQTT API to reload converters without restarting.
:::

## Step 4: Add Device Picture

Once your device is working, add a picture for the documentation:

### 4.1. Prepare the Image

* Fork the [zigbee2mqtt.io repository](https://github.com/Koenkk/zigbee2mqtt.io) on GitHub
* Create a new branch (e.g., `add-device-YOUR_MODEL`)
* Add your device picture to `public/images/devices/`:
  * Filename: Must match the `zigbeeModel` from your definition (e.g., `PLUG-01.png`)
  * Format: `.png`
  * Size: 512x512 pixels
  * Background: transparent
* Commit your changes

### 4.2. Optional: Add Device Notes

Create `docs/devices/YOUR_MODEL.md` (use your device's `model` property):

```markdown
<!-- Notes BEGIN -->
## Notes

Your custom notes here (no h1/h2 headings).

<!-- Notes END -->
```

Most content is auto-generated. Only add this file if you have specific notes.

### 4.3. Submit

Create a pull request to [zigbee2mqtt.io](https://github.com/Koenkk/zigbee2mqtt.io) from your fork. Your device will appear in the documentation on the next Zigbee2MQTT release.

::: tip
Use the [Adobe Express Remove Background tool](https://new.express.adobe.com/tools/remove-background) to make the background transparent.
:::

## Step 5: Add Device Definition

Once your device is fully working, submit it for official support:

* Fork [zigbee-herdsman-converters](https://github.com/Koenkk/zigbee-herdsman-converters) on GitHub
* Create a new branch (e.g., `add-device-YOUR_MODEL`)
* Add your definition to the appropriate [vendor file](https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices) in `src/devices/`
* Commit your changes
* Create a pull request from your fork

Your device will be supported out of the box in the next Zigbee2MQTT release!

::: tip
Test your device thoroughly before submitting. Make sure all features work and no error messages appear in the logs.
:::
