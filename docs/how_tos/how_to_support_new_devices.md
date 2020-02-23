---
---
# How to support new devices
Zigbee2mqtt uses [zigbee-herdsman-converters](https://github.com/Koenkk/zigbee-herdsman-converters) to parse messages to and from devices.

This page will guide you through the process of adding support for new devices to [zigbee-herdsman-converters](https://github.com/Koenkk/zigbee-herdsman-converters).

In case you require any help feel free to create an [issue](https://github.com/Koenkk/zigbee2mqtt/issues).

**Before** starting, first check if you devices is not already supported in the Zigbee2mqtt dev branch! This can done by checking [devices.js](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices.js). Search for example on the Zigbee model from step 1 below.

## Instructions
### 1. Pairing the device with Zigbee2mqtt
The first step is to pair the device with zigbee2mqtt. It should be possible to pair your unsupported device out of the box because Zigbee2mqtt can pair with any zigbee device. You need to find out how to bring your device into pairing mode, most of the time via a factory reset.

Once you successfully paired the device you will see something like:
```
zigbee2mqtt:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired
zigbee2mqtt:warn  2019-11-09T12:19:56: Device '0x00158d0001dc126a' with Zigbee model 'lumi.sens' is NOT supported, please follow https://www.zigbee2mqtt.io/how_tos/how_to_support_new_devices.html
```

*NOTE: Make sure that `permit_join: true` is set in `configuration.yaml` otherwise new devices cannot join the network.*

### 2. Adding your device
The next step is the to add an entry of your device to `node_modules/zigbee-herdsman-converters/devices.js`. In order to provide support for E.G. the `lumi.sens` from step 1 you would add:

*NOTE: For Hass.io and Docker users this process is a little bit different, see below*

```js
{
    zigbeeModel: ['lumi.sens'], // The model ID from: Device with modelID 'lumi.sens' is not supported.
    model: 'WSDCGQ01LM', // Vendor model number, look on the device for a model number
    vendor: 'Xiaomi', // Vendor of the device (only used for documentation and startup logging)
    description: 'MiJia temperature & humidity sensor ', // Description of the device, copy from vendor site. (only used for documentation and startup logging)
    supports: 'temperature and humidity', // Actions this device supports (only used for documentation)
    fromZigbee: [], // We will add this later
    toZigbee: [], // Should be empty, unless device can be controlled (e.g. lights, switches).
},
```

Now set the Zigbee2mqtt `log_level` to `debug` by adding the following to your Zigbee2mqtt `configuration.yaml`.

```yaml
advanced:
  log_level: debug
```

Once finished, restart Zigbee2mqtt and trigger some actions on the device. You will see messages like:
```
zigbee2mqtt:debug  2019-11-09T12:24:22: No converter available for 'WSDCGQ01LM' with cluster 'msTemperatureMeasurement' and type 'attributeReport' and data '{"measuredValue":2512}'
```

In case your device is not reporting anything, it could be that this device requires additional configuration. This can be done by adding a `configure:` section ([examples here](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices.js)). It can help to look at similar devices.

### 3. Adding converter(s) for your device
In order to parse the messages of your zigbee device we need to add converter(s) to `node_modules/zigbee-herdsman-converters/converters/fromZigbee.js`.

Before adding new converters, please check if you can reuse any existing one.

For E.G. the following message
```
zigbee2mqtt:debug  2019-11-09T12:24:22: No converter available for 'WSDCGQ01LM' with cluster 'msTemperatureMeasurement' and type 'attributeReport' and data '{"measuredValue":2512}'
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

### 4. (Optional) Add device to zigbee2mqtt.io documentation
This step is optional and can be skipped as the device page will automatically be generated on the next Zigbee2mqtt release. Only do it when you e.g. want to a specific pairing instructions for this device.

1. Clone [zigbee2mqtt.io](https://github.com/Koenkk/zigbee2mqtt.io)
2. Add a markdown file for your device to `docs/devices`, use the `model` property of the `devices.js` file as the filename.
3. Add a picture (`.jpg`, 150x150) to `docs/images/devices` and link it in file of the previous step.
4. Create a Pull Request to [zigbee2mqtt.io](https://github.com/Koenkk/zigbee2mqtt.io).

On the next release of Zigbee2mqtt, the documentation will be updated and your device file will be linked in `docs/information/supported_devices.md` automatically.

### 5. (Optional) Add home assistant configuration for your device
In order to automatically discover this device in home assistant your device needs to be added to `mapping` in `lib/extension/homeassistant.js`.

### 6. Done!
Now it's time to submit a pull request to [zigbee-herdsman-converters](https://github.com/Koenkk/zigbee-herdsman-converters) so this device is supported out of the box by Zigbee2mqtt. :smiley:

## Docker
To setup a local copy of zigbee-herdsman-converters so that you can modify e.g. `devices.js` and `fromZigbee.js`; use the following instructions:

```bash
cd /opt
git clone https://github.com/Koenkk/zigbee-herdsman-converters.git
# If you also want to add Home Assistant integration for this devices
wget https://raw.githubusercontent.com/Koenkk/zigbee2mqtt/master/lib/extension/homeassistant.js
```

Now add the volumes to the Docker container by adding the following to your `docker run` command.:

```bash
-v /opt/zigbee-herdsman-converters:/app/node_modules/zigbee-herdsman-converters -v /opt/homeassistant.js:/app/lib/extension/homeassistant.js
```

Now you can start modifying e.g. `/opt/zigbee-herdsman-converters/devices.js`. Note that after each modification you need to restart the container for the changes to take effect.

## Hass.io addon
1. Enable access to your Hass.io host following these instructions
https://developers.home-assistant.io/docs/en/hassio_debugging.html

2. Connect to your Hass.io host:
```bash
ssh root@hassio.local -p 22222
login
```

3. Identify the container ID of zigbee2mqtt using `docker ps`. Look for IMAGE dwelch2101/zigbee2mqtt-armhf and its corresponding CONTAINER ID example: **622baa375aa1**

4. Enter the running container (replace the below container id with yours)
```bash
docker exec -it 622baa375aa1 bash
```

5. You are now inside the Zigbee2mqtt container, examples for opening relevant files:
```bash
vi /app/node_modules/zigbee-herdsman-converters/devices.js
vi /app/node_modules/zigbee-herdsman-converters/converters/fromZigbee.js
vi /app/node_modules/zigbee-herdsman-converters/converters/toZigbee.js
vi /app/lib/extension/homeassistant.js
```

6.  The VI editor is installed on the image, if you are not familiar with VI you may want take a look here:
 [https://www.guru99.com/the-vi-editor.html](https://www.guru99.com/the-vi-editor.html)

7. After making required modifications restart the container for the changes to take effect:
```bash
exit
docker restart 622baa375aa1
```

Be aware that changes are not persistent, any changes that recreate the Docker container will result in the changes being lost, so make sure your modifications are provided back to the project for out-of-the-box support. Also using the *Restart* button from the web interface will remove your changes.
