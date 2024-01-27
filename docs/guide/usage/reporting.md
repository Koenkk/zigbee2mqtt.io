---
---
# Report device attribute changes

Zigbee devices often have various sensors or attributes that can report changes in their state, such as temperature, humidity, battery level, etc. 
Attribute reporting allows these devices to automatically send updates when there is a change in the values of these attributes.
One example is when you change brightness of a bulb with its remote instead of Zigbee2MQTT, the state becomes out of sync.
By setting up reporting for the bulb it will send notifications to Zigbee2MQTT about the brightness change and can update state in Zigbee2MQTT.

It is a good practice to keep a balance between staying updated with relevant information and conserving energy, especially in the case of battery-powered devices.

# Parameters

## Minimum Reporting Interval
In other words: how long after the attribute changes on the device should it send an update.
A value of 0 means: send an update as soon as the attribute (e.g.: temperature) changes.

## Maximum Reporting Interval:
In other words: how frequently shall the device send a report if there is no change in the attribute constantly. 
A value of 60 means: if the bulb is off for 30 minutes, it still sends 30 updates (every 60 seconds) even if there was no any attribute changes(e.g.: it was not turned on or off).

## Minimum Reporting Change:
The Minimum Reporting Change is like telling your device to speak up only when something significant happens. 
If you set a minimum reporting change of 1 degree for a temperature sensor, it means the sensor won't bother you with updates unless the temperature changes by at least 1 degree.
It's a way to filter out minor fluctuations and focus on important changes in the environment.
