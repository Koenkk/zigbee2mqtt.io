# How to test your development inside the Home Assistant Addon

When you want to check the impact of developing work, e.g. adjusting devices in [zigbee-herdsman-converters](https://github.com/Koenkk/zigbee-herdsman-converters), you need access to the add-on container in Home Assistant. Here's how:

🚨 Following these directions will make your Home Assistant system more prone to misconfiguration (by yourself) to the extent of rendering it completely useless, so only touch what you're confident to and "know what you do".

🚨 For these reasons it is recommended to carry out your work using a testing Home Assistance installation and not your main one.

1. Install the [Portainer addon](https://github.com/hassio-addons/addon-portainer) from the Add-on store
2. Make sure to disable its `Protection mode`:
   ![image](https://user-images.githubusercontent.com/1125168/118788032-aa316800-b893-11eb-8567-f2122159f64c.png)
3. Start Portainer and `Open Web UI`
4. On the left hand side menu:
    1. Head to `Settings` > section *Hidden Containers* and remove `io.hass.type`: `addon`
    2. Go to `Containers`, `addon_[…]_zigbee2mqtt`, `Console`, `Connect`
5. ℹ️ the location of zigbee-herdsman-converters for example is `/app/node_modules/zigbee-herdsman-converters`
6. Make your adjustments by copying or by using a text editor such as `vi`
7. Once done, in Portainer, navigate to the addon's container and press the `Restart` button

⚠️ Do not restart the add-on via Supervisor or further down the stack as this will revert the container to its original state, thus losing your changes.

After work is done, don't forget to clean up and reintroduce the safety measures:
1. Re-add the filter `io.hass.type`: `addon` for *Hidden Containers*
2. Re-activate the "Protection mode" of the Portainer
