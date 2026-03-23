# Support new devices

This page will guide you through the process of adding support for new devices through a temporary [external converter](../../advanced/more/external_converters.md).

In case you require any help feel free to open a [discussion](https://github.com/Koenkk/zigbee2mqtt/discussions).

**Before** starting, first check if your device is not already supported in the Zigbee2MQTT dev branch! This can be done by checking the [changelog](https://gist.github.com/Koenkk/bfd4c3d1725a2cccacc11d6ba51008ba#new-supported-devices) of the dev branch. Also set the Zigbee2MQTT `log_level` to `debug` for easier debugging.

## Instructions

### 1. Pairing the device with Zigbee2MQTT

The first step is to pair the device with Zigbee2MQTT. It should be possible to pair your unsupported device out of the box because Zigbee2MQTT can pair with any Zigbee device. You need to find out how to bring your device into pairing mode, most of the time via a factory reset.

Once you successfully paired the device you will see something like this in the logs:

```
Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed '0x00158d0001dc126a', device has successfully been paired
Zigbee2MQTT:warn  2019-11-09T12:19:56: Device '0x00158d0001dc126a' with Zigbee model 'lumi.sens' and manufacturer name 'some_name' is NOT supported, please follow https://www.zigbee2mqtt.io/how-tos/support_new_devices.html
```

::: tip
Make sure that joining is enabled, otherwise new devices cannot join the network.
:::

### 2. Creating the external definition

When pairing an unsupported device with Zigbee2MQTT, it will attempt to discover features supported by this device. To check what has already been discovered, navigate to the `Exposes` tab of the device in frontend. See if the exposed features work by checking if values are reported and/or states are controllable (in case of e.g. a light).
Note that feature discovery is still WIP, not all features may be discovered, some may not be discoverable at all due to a non-standard implementation on the device (commonly the case for Tuya devices).

Next generate the external definition by navigating to the `Dev console` tab of the device and press `Generate external definition`.

<img src="../../images/generate_external_definition.gif" height="300"/>

By default, the external definition will map exposed Zigbee clusters to features according to the Zigbee ZCL specification. Of course, if the device does not conform to the specification, it may not work properly or at all.
If all features work and all expected features are present, you are lucky and can skip to step 3.
If not, you will have to extend the external definition.

::: tip
Depending on the device, it may be possible to extend the definition using other modern extends.
This is the recommended process as it is generally easier.
:::

### 3. Extending the generated external definition

To extend the generated external definition, you can either save the code in a file manually, and restart Zigbee2MQTT, or you can use the MQTT API to load the converter at runtime. See [external converters](../../advanced/more/external_converters.md) for more details.

Add and/or configure the appropriate modern extends for the device (see previous link).

::: tip
The `Clusters` tab of the device, in frontend, lists supported clusters for further analysis.
:::

Once done, trigger actions on the device.

If your device is not reporting anything, it could be that this device requires additional configuration. This can be done by adding a `configure:` section. _It may help to look at similar [devices](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/devices)._

::: tip
If your device is advertised as Tuya compatible or reports anything with `manuSpecificTuya`, additional instructions for adding your device can be found [here](./02_support_new_tuya_devices.md).
:::

If you still see messages like below after adding and configuring all appropriate modern extends, you may need to add specific converters that modern extends do not provide. Existing converters can probably be reused, those can be found [here](https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/src/converters/fromZigbee.ts).

```
Zigbee2MQTT:debug  2019-11-09T12:24:22: No converter available for 'WSDCGQ01LM' with cluster 'msTemperatureMeasurement' and type 'attributeReport' and data '{"measuredValue":2512}'
```

For the above message, you would use the already existing `fz.temperature` converter:

```js
    fromZigbee: [fz.temperature],
```

_Note: This converter would actually be covered by the appropriate modern extend (`temperature()`), it is just given as an example. See [more examples](../../advanced/more/external_converters.md#more-examples)._

Repeat this last step until your device no longer produces log messages like `No converter available for 'WSDCGQ01LM' with cluster...`

If none of the existing converters fit, you can add custom ones, an example for this can be found [here](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.mjs).

### 4. Create a pull request

To contribute your new device definition to Zigbee2MQTT such that it will be supported out-of-the-box in the next release, follow these steps:

1. Identify the correct [devices file](https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/src/devices) in the zigbee-herdsman-converters repository where your device belongs (usually by brand or vendor).
1. Click on the file and use the edit (pencil) icon to open it for editing directly on GitHub.
1. Add your device definition to the file, following the structure and patterns used for similar devices.
1. Press **Commit changes** -> **Propose changes** -> **Create pull request**.
1. Fill in the PR template and press **Create pull request**.

### 5. Add device picture to zigbee2mqtt.io documentation

To make sure a picture is available for this device on the supported devices page and in the frontend.

First start by creating a photo you want to provide for the device. Ensure:

- File format: `PNG`
- Resolution: `512x512`
- Background: `transparent`.
  _If necessary, use the [Adobe Express Remove Background tool](https://new.express.adobe.com/tools/remove-background) to make the background transparent._
- Filename: unique filename (for instance: `ZY-M100-24GV3.png`)

The easiest way to provide the picture for the device is by uploading it using the GitHub web editor:

1. Navigate with your browser to the [zigbee2mqtt.io repository](https://github.com/Koenkk/zigbee2mqtt.io).
2. Create your fork of the code repository. Or update your existing fork by choosing to **Sync fork**.

  <img width="268" height="58" alt="fork repository" src="https://github.com/user-attachments/assets/b66e3826-9344-41d3-a406-528b2420705c" />

3. In your fork navigate to the folder: `public/images/devices`.

  <img width="370" height="52" alt="public/images/devices" src="https://github.com/user-attachments/assets/128d5431-db17-4154-99b8-c1d423443c93" />

4. Choose to upload the image using the **Add file** button and **Upload file**.

  <img width="289" height="122" alt="upload file" src="https://github.com/user-attachments/assets/941ce038-1855-4175-9352-1adf56239367" />

5. Upload the file and choose to create a new branch for it.

  <img width="685" height="332" alt="new branch" src="https://github.com/user-attachments/assets/0fa3b04e-76a8-432c-a95a-289ca2287f51" />

6. On the next screen you should skip creating a local Pull Request by choosing **Pull requests** from the menu at the top.

  <img width="248" height="63" alt="Pull Requests" src="https://github.com/user-attachments/assets/6c10900d-00be-4c09-afac-a238e34e934d" />

7. Choose **New pull request**.

  <img width="746" height="109" alt="New pull request" src="https://github.com/user-attachments/assets/2c8379a5-c45c-4c17-975e-797d9a7218cf" />

8. Select the feature-branch with changes you want to provide to the [zigbee2mqtt.io GitHub repository](https://github.com/Koenkk/zigbee2mqtt.io).

    The **Create pull request** button should appear afterwards.

      <img width="943" height="264" alt="image" src="https://github.com/user-attachments/assets/e2cd762f-1e85-491b-bd92-9d2f2b82ce64" />

9. Provide information for the PR and choose the **Create pull request** button.

  <img width="990" height="629" alt="image" src="https://github.com/user-attachments/assets/4656cdc6-cea5-49cf-8e29-49a0f7b6be07" />

**_Optional:_** Add a markdown file in the same PR for your device to `docs/devices`, use the `model` property of your definition as the filename. Most of the contents of this file will be auto-generated through docgen but you can add your own notes in a notes section.

Do not use `h1` or `h2` headings within the `## Notes`-Section.

> > \<!-- Notes BEGIN --><br> >> \## Notes<br>
> > ...<br> >> \<!-- Notes END -->
