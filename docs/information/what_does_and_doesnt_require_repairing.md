---
---
# What does and does not require repairing of all devices?

## Requires repairing
You need to re-pair all you devices when:
- Changing the network key (`network_key`) in `configuration.yaml`.
- Changing the Zigbee channel (`channel`) in `configuration.yaml`.

## Doesn't require repairing
You **don't** need to re-pair your devices when:
- Updating or downgrading Zigbee2mqtt to a different version.
- Updating the coordinator (CC2530/CC2531 stick) firmware.
  - This is only applicable when flashing firmware version `20190215` or later. It doesn't matter from which firmware version you come from.
  - If after flashing you fail to control your devices it helps to:
    - Wait a few minutes so that the Zigbee network can settle.
    - Send Zigbee commands (e.g. turn on/off) to the device.
    - Reboot the device (unplug and plug power).
    - If all of the above doens't work, and you previously re-flashed a firmware older then `20190215` it could be that the `pan_id` has silently been changed. To fix this add to your `configuration.yaml`:
    ```js
    advanced:
        pan_id: 0x1a63
    ```
- Switching from CC2530/CC2531 device (physically).
- Switching the system running Zigbee2mqtt.
    - When doing this, make sure to copy over the contents of the `data` directory.