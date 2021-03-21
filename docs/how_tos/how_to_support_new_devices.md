---
---
# How to support new devices
Zigbee2MQTT uses [zigbee-herdsman-converters](https://github.com/Koenkk/zigbee-herdsman-converters) to parse messages to and from devices.

This page will guide you through the process of adding support for new devices to [zigbee-herdsman-converters](https://github.com/Koenkk/zigbee-herdsman-converters).

In case you require any help feel free to create an [issue](https://github.com/Koenkk/zigbee2mqtt/issues).

**Before** starting, first check if you devices is not already supported in the Zigbee2MQTT dev branch! This can done by checking [devices.js](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices.js). Search for example on the Zigbee model from step 1 below.

## Instructions
### 1. Pairing the device with Zigbee2MQTT
The first step is to pair the device with Zigbee2MQTT. It should be possible to pair your unsupported device out of the box because Zigbee2MQTT can pair with any zigbee device. You need to find out how to bring your device into pairing mode, most of the time via a factory reset.

Once you successfully paired the device you will see something like:
```
Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired
Zigbee2MQTT:warn  2019-11-09T12:19:56: Device '0x00158d0001dc126a' with Zigbee model 'lumi.sens' and manufacturer name 'some_name' is NOT supported, please follow https://www.zigbee2mqtt.io/how_tos/how_to_support_new_devices.html
```

*NOTE: Make sure that `permit_join: true` is set in `configuration.yaml` otherwise new devices cannot join the network.*

### 2. Adding your device
The next step is the to add an entry of your device to `node_modules/zigbee-herdsman-converters/devices.js`. In order to provide support for E.G. the `lumi.sens` from step 1 you would add:

*NOTE: For installations using the official Hass.io addon and Docker users, devices.js and the other necessary files are accessed differently. This process is explained below for [Home Assistant](https://www.zigbee2mqtt.io/how_tos/how_to_support_new_devices.html#hassio-addon) and [Docker](https://www.zigbee2mqtt.io/how_tos/how_to_support_new_devices.html#docker).*

```js
{
    zigbeeModel: ['lumi.sens'], // The model ID from: Device with modelID 'lumi.sens' is not supported.
    model: 'WSDCGQ01LM', // Vendor model number, look on the device for a model number
    vendor: 'Xiaomi', // Vendor of the device (only used for documentation and startup logging)
    description: 'MiJia temperature & humidity sensor ', // Description of the device, copy from vendor site. (only used for documentation and startup logging)
    supports: 'temperature and humidity', // Actions this device supports (only used for documentation)
    fromZigbee: [], // We will add this later
    toZigbee: [], // Should be empty, unless device can be controlled (e.g. lights, switches).
    exposes: [e.battery(), e.temperature(), e.humidity()], // Defines what this device exposes, used for e.g. Home Assistant discovery
},
```

If your device is advertised as "Tuya compatible" and/or requires Tuya gateway/app to operate look [here](how_to_support_new_tuya_devices.md) for additional info

Now set the Zigbee2MQTT `log_level` to `debug` by adding the following to your Zigbee2MQTT `configuration.yaml`.

```yaml
advanced:
  log_level: debug
```

Once finished, restart Zigbee2MQTT and trigger some actions on the device. You will see messages like:
```
Zigbee2MQTT:debug  2019-11-09T12:24:22: No converter available for 'WSDCGQ01LM' with cluster 'msTemperatureMeasurement' and type 'attributeReport' and data '{"measuredValue":2512}'
```

In case your device is not reporting anything, it could be that this device requires additional configuration. This can be done by adding a `configure:` section ([examples here](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices.js)). It can help to look at similar devices.

If your device reports anything with 'manuSpecificTuya' then it's a "Tuya compatible" device and additional instructions for adding those are [here](how_to_support_new_tuya_devices.md)

### 3. Adding converter(s) for your device
In order to parse the messages of your zigbee device we need to add converter(s) to `node_modules/zigbee-herdsman-converters/converters/fromZigbee.js`.

Before adding new converters, please check if you can reuse any existing one.

For E.G. the following message
```
Zigbee2MQTT:debug  2019-11-09T12:24:22: No converter available for 'WSDCGQ01LM' with cluster 'msTemperatureMeasurement' and type 'attributeReport' and data '{"measuredValue":2512}'
```

You would add to `node_modules/zigbee-herdsman-converters/converters/fromZigbee.js`:
```js
xiaomi_temperature: {
    cluster: 'msTemperatureMeasurement',
    type: 'attributeReport',
    convert: (model, msg, publish, options) => {
        const temperature = parseFloat(msg.data['measuredValue']) / 100.0;
        return {temperature: temperature};
    },
},
```

Now update your device in `node_modules/zigbee-herdsman-converters/devices.js` with the new converter.
```js
{
    zigbeeModel: ['lumi.sens'],
    model: 'WSDCGQ01LM',
    vendor: 'Xiaomi',
    description: 'MiJia temperature & humidity sensor ',
    supports: 'temperature and humidity',
    fromZigbee: [fz.xiaomi_temperature],  # <-- added here
    toZigbee: [],
},
```

Repeat until your device does not produce any more log messages like: `2018-5-1 18:19:41 WARN No converter available for 'WSDCGQ01LM' with....`


#### 3.1 Retrieving color temperature range (only required for lights which support color temperature)
If your device is a light and support color temperature you need to define the color temperature range. This range indicates the minimum and maximum color temperature value the light supports. This can be retrieved from the light by sending to `zigbee2mqtt/DEVICE_FRIENDLY_NAME/set` with payload `{"read": {"cluster": "lightingColorCtrl", "attributes": ["colorTempPhysicalMin", "colorTempPhysicalMax"]}}`

The result will be logged to the Zigbee2MQTT log, e.g.

```
Zigbee2MQTT:info  2021-03-21 21:10:40: Read result of 'lightingColorCtrl': {"colorTempPhysicalMin":153,"colorTempPhysicalMax":500}
```

In the above example set `colorTempRange` to `{colorTempRange: [153, 500]}`, e.g.:

```js
{
    zigbeeModel: ['myZigbeeModel'],
    model: 'myModel',
    vendor: 'myVendor',
    description: 'Super bulb',
    extend: preset.light_onoff_brightness_colortemp({colorTempRange: [153, 500]}), // <---
},
```


### 4. (Optional) Add device to zigbee2mqtt.io documentation
This step is optional and can be skipped as the device page will automatically be generated on the next Zigbee2MQTT release. Only do it when you e.g. want to a specific pairing instructions for this device.

1. Clone [zigbee2mqtt.io](https://github.com/Koenkk/zigbee2mqtt.io)
2. Add a markdown file for your device to `docs/devices`, use the `model` property of the `devices.js` file as the filename.
3. Add a picture (`.jpg`, 150x150) to `docs/images/devices` and link it in file of the previous step.
4. Create a Pull Request to [zigbee2mqtt.io](https://github.com/Koenkk/zigbee2mqtt.io).

On the next release of Zigbee2MQTT, the documentation will be updated and your device file will be linked in `docs/information/supported_devices.md` automatically.

### 5. Done!
Now it's time to submit a pull request to [zigbee-herdsman-converters](https://github.com/Koenkk/zigbee-herdsman-converters) so this device is supported out of the box by Zigbee2MQTT. :smiley:

## Docker
To setup a local copy of zigbee-herdsman-converters so that you can modify e.g. `devices.js` and `fromZigbee.js`; use the following instructions:

```bash
cd /opt
git clone https://github.com/Koenkk/zigbee-herdsman-converters.git
cd zigbee-herdsman-converters
docker run -v "$PWD":/app -w /app --rm node:12 npm ci
```

Now add the volumes to the Docker container by adding the following to your `docker run` command.:

```bash
-v /opt/zigbee-herdsman-converters:/app/node_modules/zigbee-herdsman-converters
```

Now you can start modifying e.g. `/opt/zigbee-herdsman-converters/devices.js`. Note that after each modification you need to restart the container for the changes to take effect.

## Home Assistant Add-on: hassio-zigbee2mqtt
To support a new custom device using `hassio-zigbee2mqtt` add-on in preparation for a Pull Request, please follow these [instructions](https://github.com/zigbee2mqtt/hassio-zigbee2mqtt/blob/master/zigbee2mqtt/DOCS.md#adding-support-for-new-devices).
