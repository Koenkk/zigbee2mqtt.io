const notes = [
    {
        model: ['SMSZB-120'],
        note: `
### Warning usage
Warning only support a single mode, \`burglar\`

Duration of using \`warning\` can be shorter than \`max_duration\` but not longer. If \`max_duration\` are set to 60 seconds, and you try to set \`warning\` with \`duration\` of 90 seconds, the warning will only apply for 60 seconds. Default value of \`max_duration\` are 240 seconds

This device do not support the \`strobe\` and \`strobe_duty_cycle\` functionality


### Triggering alarm (using old style \`warning\`)
This smoke alarm can be triggered manually by publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` with the payloads:

To start :
* \`{"warning":{"duration":60,"level":"low","mode":"burglar","strobe":false,"strobe_duty_cycle":0}}\`
Where:
- \`duration\`: the number of seconds the alarm will be on
- \`level\`: \`low\`, \`medium\`, \`high\`, \`very_high\`
- \`mode\`: \`stop\`, \`burglar\`
- \`strobe\`: not supported
- \`strobe_duty_cycle\`: not supported

To stop:
* \`{"warning":{"duration":60,"level":"low","mode":"stop","strobe":false,"strobe_duty_cycle":0}}\`

### Triggering alarm, Simple
Can be set by publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"alarm": "START"}\` and \`{"alarm": "OFF"}\`
Set \`max_duration\` from the Zigbee2MQTT UI or by publishing \`{"max_duration": NEW_VALUE}\`
This alarm are preset to highest volume
`,
    },
    {
        model: ['SRAC-23B-ZBSR'],
        note: `
### Warning usage
Warning only support a single mode, \`burglar\`

Duration of using \`warning\` can be shorter than \`max_duration\` but not longer. If \`max_duration\` are set to 60 seconds, and you try to set \`warning\` with \`duration\` of 90 seconds, the warning will only apply for 60 seconds. Default value of \`max_duration\` are 300 seconds

This device do not support the \`strobe_duty_cycle\` functionality


### Triggering alarm, Advanced
This siren can be triggered manually by publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` with the payloads:

To start :
* \`{"warning":{"duration":60,"level":"low","mode":"burglar","strobe":false,"strobe_duty_cycle":0}}\`
Where:
- \`duration\`: the number of seconds the alarm will be on
- \`level\`: \`low\`, \`medium\`, \`high\`, \`very_high\`
- \`mode\`: \`stop\`, \`burglar\`
- \`strobe\`: \`true\`, \`false\`
- \`strobe_duty_cycle\`: not supported

To stop:
* \`{"warning":{"duration":60,"level":"low","mode":"stop","strobe":false,"strobe_duty_cycle":0}}\`

### Triggering alarm, Simple
Can be set by publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"alarm": "START"}\` and \`{"alarm": "OFF"}\`
Set \`max_duration\` from the Zigbee2MQTT UI or by publishing \`{"max_duration": NEW_VALUE}\`
This alarm are preset to highest volume
`,
    },
    {
        model: ['SIRZB-110'],
        note: `
### Warning usage

Duration of using \`warning\` can be shorter than \`max_duration\` but not longer. If \`max_duration\` are set to 60 seconds, and you try to set \`warning\` with \`duration\` of 90 seconds, the warning will only apply for 60 seconds. Default value of \`max_duration\` are 900 seconds

This device do not support the \`strobe\` and \`strobe_duty_cycle\` functionality


### Triggering the alarm, Advanced
This siren can be triggered manually by publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` with the payloads:

To start :
* \`{"warning":{"duration":60,"level":"low","mode":"burglar","strobe":false,"strobe_duty_cycle":0}}\`
Where:
- \`duration\`: the number of seconds the alarm will be on
- \`level\`: \`low\`, \`medium\`, \`high\`, \`very_high\`
- \`mode\`: \`stop\`, \`burglar\`, \`fire\`, \`emergency\`, \`police_panic\`, \`fire_panic\`, \`emergency_panic\`
- \`strobe\`: not supported
- \`strobe_duty_cycle\`: not supported

To stop:
* \`{"warning":{"duration":60,"level":"low","mode":"stop","strobe":false,"strobe_duty_cycle":0}}\`


### Triggering alarm, Simple
Can be set by publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"alarm": "START"}\` and \`{"alarm": "OFF"}\`
Set \`max_duration\` from the Zigbee2MQTT UI or by publishing \`{"max_duration": NEW_VALUE}\`
This alarm are preset to highest volume and using the mode \`police_panic\`

### Squawk
Squawk are normally used to indicate activation and deactivation of an alarm system

Examples:
\`{"squawk":{"level":"low","mode":"system_is_sarmed","strobe":false}}\`
\`{"squawk":{"level":"low","mode":"system_is_disarmed","strobe":false}}\`
`,
    },
    {
        model: ['ROB_200-017-0'],
        note: `
### Pairing
Factory reset by press & hold the power button for 3 seconds. The LED is then starting to blink during pairing process.
`,
    },
    {
        model: ['MCCGQ12LM'],
        note: `
### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join. If this doesn't work, try with a single short button press.


### Recommendation
If the contact is being made via a horizontal slide (e.g. the sensor is placed at the top of a sliding door), the sensor may provide three or more messages with conflicting states. To get around this issue, consider using the \`debounce\` option in your device specific configuration.

E.g. (devices.yaml)

{% raw %}
\`\`\`yaml
'0xabc457fffe679xyz':
    friendly_name: my_sensor
    debounce: 1
\`\`\`
{% endraw %}
`,
    },
    {
        model: ['NCZ-3043-HA'],
        note: `
### Pairing
Press the button on the bottom of the sensor 10 times to reset.
After this the device will automatically join.
`,
    },
    {
        model: ['TS0121_plug'],
        note: `
### Pairing
Pair this device with a long press on the on/off button. The button will flash to indicate it's in pairing mode. When the flashing stops it should be paired.
`,
    },
    {
        model: ['TS0601_switch_2_gang'],
        note: `
### Pairing
To pair press any button 5 times and on the 6th time hold it untill you hear beep, then release button and wait for pairing process.
`,
    },
    {
        model: ['SR-ZG9001K12-DIM-Z4'],
        note: `
### Pairing
Press and hold the All On button on the Remote until the Status LED turns on. Then immediately press the All Off button. The Status LED will blink 5 times quickly to indicate a successful pairing.

### Resetting
Press and hold the All On button on the Remote until the Status LED turns on. Then immediately press 5 times the All On button. The Status LED will blink 3 times to indicate successful reset.
`,
    },
    {
        model: ['VOCKQJK11LM'],
        note: `
### Pairing
Press and hold button on top of device until connection symbol appears
`,
    },
    {
        model: ['HG06463A'],
        note: `
### Pairing
Factory reset the light bulb. After resetting the bulb will automatically connect.

Factory reset the light bulb.
After resetting the bulb will automatically connect.

One option that might work is to use (very) short “on’s” and a little bit longer “off’s”, where you kill the light as soon as the bulb shows signs of turning on.
Start with bulb on, then off, and then 3 “on’s”, wait in the 3rd ON state.
Alternatively, start with the bulb on, and then repeat the off on sequence as above, but wait 2-3 seconds in each state (on and off).
When in pairing state, the bulb will flash.
`,
    },
    {
        model: ['AV2010/22'],
        note: `
## Pairing
Pair the Bitron AV2010/22 sensor to Zigbee2MQTT by holding it close to the coordinator and pressing the indicator light/button at the front for about 10 seconds. The indicator light/button will flash red once to indicate it is in pairing mode. The Bitron AV2010/22 sensor should now be visible in the Zigbee2MQTT Devices overview.
`,
    },
    {
        model: ['IM6001-MTP01'],
        note: `
### Pairing

Hold down reset button (behind the device) about 5 seconds, release once light front of device will starts to blink ([youtube](https://www.youtube.com/watch?v=4useLYFLJiw)).
`,
    },
    {
        model: ['IM6001-WLP01'],
        note: `
### Pairing

Hold down reset button (behind the device) for about 5 seconds, release button when led starts to blink ([youtube](https://www.youtube.com/watch?v=PgswcrEw-YE)).
`,
    },
    {
        model: ['TS0503B'],
        note: `
### Pairing

Long press the button on the device for about 5 seconds, wait few seconds until lights turn on ([offical docs](https://support.tuya.com/en/help/_detail/K9mch3ca38pvz)).
`,
    },
    {
        model: ['E2001/E2002'],
        note: `
### Pairing

Pair the switch to Zigbee2MQTT by pressing the pair button (found under the back cover next to the battery) 4 times in a row within 5 seconds. The red light on the side should flash a few times and then turn off. After a few seconds it turns back on and pulsate. When connected, the light turns off.
`,
    },
    {
        model: ['AV2010/34'],
        note: `
## Troubleshooting

### Not receiving any actions

In order to receive the \`recall_*\` action events, the device must be added to a group. There does not need to be any other members of the group.
To do this read the [groups documentation](/information/groups.html).
`,
    },
    {
        model: ['929002240401'],
        note: `
### Pairing

Hold down power button (side of the switch) about 10 seconds, release once it blinks and then turns green.
`,
    },
    {
        model: ['902010/128'],
        note: `
## Pairing
Pair the Bitron 902010/128 Smart Plug to Zigbee2MQTT by plugging it into a power outlet close to the coordinator and pressing the indicator light/button at the front for about 10 seconds. The indicator light/button will flash red once to indicate it is in pairing mode. The Bitron 902010/128 Smart Plug now be visible in the Zigbee2MQTT Devices overview.
`,
    },
    {
        model: ['902010/24'],
        note: `
## Pairing
Pair the Bitron 902010/24 Smoke Detector to Zigbee2MQTT by holding it close to the coordinator and pressing the button for about 10 seconds. The indicator light will flash red once and/or the alarm will beep twice to indicate it is in pairing mode. The Bitron 902010/24 Smoke Detector should now be visible in the Zigbee2MQTT Devices overview.
`,
    },
    {
        model: ['902010/23'],
        note: `
## Pairing
Pair the Bitron 902010/23 control to Zigbee2MQTT by holding it close to the coordinator and pressing the third button (calculated from the key chain hole) for about 10 seconds. The indicator light will flash red once to indicate it is in pairing mode. The Bitron 902010/23 control should now be visible in the Zigbee2MQTT Devices overview.
`,
    },
    {
        model: ['44435'],
        note: `
### Pairing

* Put the Zigbee coordinator in join mode
* Turn on the LED strip
* Turn it off and on within 2 seconds
* Now turn it off and on 4 more times

On the last turn on operation, the lights will blink 4 times to indicate that the LED strip has been reset and will start the pairing process.
`,
    },
    {
        model: ['LXN56-SS27LX1.1'],
        note: `
## 2 distinct devices
This switch was 2 distinct Zigbee chips, so it's seen as 2 separate devices.
`,
    },
    {
        model: ['R7049'],
        note: `
### Pairing
Hold the Test button pressed for 5 seconds (until the red LED blinks).
After this the device will reset and try to join a network.
`,
    },
    {
        model: ['3RSS009Z'],
        note: `
### Pairing
To put the device in pairing mode, hold the switch's button for 30 seconds until LED starts blinking fast (2 blinks per second)

### Swap ON/OFF
To reverse the On/Off direction of the switch, hold the button for more than 10 seconds until the LED turns on and then release
`,
    },
    {
        model: ['S31ZB'],
        note: `
### Pairing
After first power on, it should enter pairing mode. To pair to a new network, long press reset button for 5s until the Wi-Fi LED indicator changes to a cycle of two short flashes and one long flash, then release.
`,
    },
    {
        model: ['LS12128'],
        note: `
## Pairing/runtime calibration
1. Open shutter completely
1. Make sure none of the physical button of the corresponding wall switch is left pressed down
1. Press the LUPUS relay connection button 3-10s
1. LED will start to blink
1. At a certain point the LS12128 will reconnect to the zigbee coordinator (you hear a "click") but it will still blink = it expects to learn closing time and opening time
1. Press down button
1. Just when the shutter is fully closed press "up" button (sometimes twice necessary).
1. Just when the shutter is fully opened press "down" button (or release up button)
1. Relay will now have learned how long it takes to travel top-bottom and vice-et-versa (youhear a "click" telling relay circuit is open)
`,
    },
    {
        model: ['EER42000', 'EER50000', 'EER51000', 'EER53000'],
        note: `
### Pairing
This device by default only pairs to Wiser Gateways when the set button is pressed, to let it join normal HA gateways (like what Zigbee2MQTT uses) hold the set button down for 5 seconds, and release.
`,
    },
    {
        model: ['EER40030'],
        note: `
### Channels
Due to limitations on this devices firmware, it will only join to zigbee networks on channels 11, 15, 20 and 25.
`,
    },
    {
        model: ['A6121'],
        note: `
### Remote unlock
Be aware that this smart does not offer remote unlock. Users will need the special keys it provides. You can then disable access for these keys, but this requires the app. In essence Zigbee2MQTT only provides the ability to know when a key was inserted.
`,
    },
    {
        model: ['14148906L'],
        note: `
### Binding
To reset the moodlight, turn it on. Then follow the following pattern:
* off 1 sec
* on 1 sec
* off 1 sec
* on 1 sec
* off 1 sec
* on

The moodlight should now be reset and turned to pairing mode. It should start blinking to indicate this.
`,
    },
    {
        model: ['0402946'],
        note: `
### Pairing
If pairing failed, try the followings:
- Make sure door are in open state
- Press and hold manual lock button and wait for 3 beeps
- Keypad in front lights up
- Type inn the Master PIN, then *, then 2, then *, then 0
Lock will now reset the Zigbee module and go to pairing mode

### PIN Code Usage
To retrieve the state, send a \`get\` message to the device topic (\`zigbee2mqtt/DEVICE_FRIENDLY_NAME/get\`) with the body \`{"pin_code":{"user":1}}\`. To set, send a \`set\` message to the device topic (\`zigbee2mqtt/DEVICE_FRIENDLY_NAME/set\`) with the body \`{"pin_code":{"user":1,"pin_code":1234}}\`. To clear a code, send a \`set\` message with the body \`{"pin_code":{"user":1}}\`

### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* \`expose_pin\`: Allows to retrieve the \`pin_code\` value, rather than just user status (\`available\`/\`enabled\`), for \`pin_code\` endpoints (default: \`false\`) in \`devices.yaml\`.

Example:
{% raw %}
\`\`\`yaml
'0x680ae2fffe6bb522':
  friendly_name: '0x680ae2fffe6bb522'
  expose_pin: true
\`\`\`
{% endraw %}

### Manual
[ID LOCK 150 user manual](https://idlock.no/wp-content/uploads/2018/03/20180123-001-IDL150-UserManual.pdf)
[Zigbee module user manual](https://idlock.no/wp-content/uploads/2020/11/User-Manual-Zigbee-module_EN_v0.4.pdf)

### Where do I find this product
[Product page](https://shop.evasmart.no/produkt/smarthus/id-lock-dorlaspakke)
`,
    },
    {
        model: ['ZNCZ04LM'],
        note: `
### Pairing
Press and hold the button on the device until the blue light starts blinking, release it and and the device will automatically join.
`,
    },
    {
        model: ['CCTFR6400'],
        note: `
### Device info
This device is a
- thermostat UI for displaying/adjusting target set point.
- temperature sensor
- hygrometry sensor
It can display the heating status of associated climate by setting \`pi_heating_demand\`

It requires a Z-Stack controller (Firmware version > TBD). It is currently not working with zigate and conbee II (maybe supported in further firmware).
`,
    },
    {
        model: ['CCTFR6700'],
        note: `
### Device info
This device is a thermostat to drive an electric heater.
It supports two modes:
- Contactor mode, that switches the heater power supply on and off
- Pilot mode, for compatible heaters

### Pairing and configuring
After pairing the device requires:
- the pilot mode to be configured (Contactor/Pilot)
- an external temperature measurment, either through a bind from a sensor, or report from the coordinator trhough automation. The temperature must be refreshed at least every 10mn
- the target thermostat set point
`,
    },
    {
        model: ['ZBMINI'],
        note: `
### Device stuck
In case of switching the coordinators a device may stuck in error state which is indicated by slowly blinking light (about 1 flash per second).
To switch a device to a pairing mode power it off for 10 sec. After power on it enters pairing mode automatically.
`,
    },
    {
        model: ['ICZB-RM11S'],
        note: `
### Pairing
Press and hold the All Off and All On button on the Remote until the Status LED turns on.
Then immediately press the All Off button.
The Status LED will blink 5 times quickly to indicate a successful pairing.

### Resetting
Press and hold the All Off and All On button on the Remote until the Status LED turns on.
Then immediately press 5 times the All On button.
`,
    },
    {
        model: ['ZS130000178'],
        note: `
### Pairing
Pairing instructions: hold the upper right (arm home) and lower left (disarm) buttons until the green LED at the top blinks rapidly, then release. Key fob should now be in pairing mode.
`,
    },
    {
        model: ['FB20-002'],
        note: `
### Pairing

Hold the top 2 buttons (on and off) for about 5 seconds until the LED goes from solid green to blinking, then let go.

For more information, refer to the [LIDL manual](https://www.lidl-service.com/static/5027306530/334437_Zigbee_OS_DE_EN%20_FR_NL_PL_CS_SK.PDF).
`,
    },
    {
        model: ['4052899926110'],
        note: `
### Pairing
Turn ON the bulb for 5 seconds.
Turn OFF the bulb for 5 seconds.
Repeat the step above four more times for a total of five OFF/ON cycles.
After the fifth cycle, turn the light ON and wait for 10 seconds.
The bulb will then blink 3 times to indicate it has been reset.

Repeat the above steps if the light doesn’t blink.
`,
    },
    {
        model: ['14147206L'],
        note: `
### Pairing
To factory reset the LivarnoLux Ceiling Light proceed with the following order: 10s off, 1s on, 3s off, 1s on, 3s off, on
`,
    },
    {
        model: ['6735/6736/6737'],
        note: `
### Pairing

1. If there are blinking LEDs wait until they don’t blink anymore — the device is in some mode we don’t want it to be.
2. Press both buttons of the top row (or sole row for Model 6735) until the LEDs gleam permanently. They will blink alternately at first but keep the buttons pressed until really both lights are constantly illuminated. Then release the buttons. The LEDs should still glow.
3. Now press both buttons again briefly. After about 1..2 seconds they will fade-glow; and your bridge should now instantly find it.

### Known issues

#### Bottom row of 4-gang device not bound

It may occur that the bottom row of the 4-gang device 6737 does not work like the other ones, i.e. does not emit the actions (see related discussion [#7009](https://github.com/Koenkk/zigbee2mqtt/discussions/7009)). The reason is not fully understood yet, however it can be worked around by unbinding all four endpoints and re-binding them manually one after another:

| Source EP   | Destination   | Destination EP   | Clusters                                              |
|-------------|---------------|------------------|-------------------------------------------------------|
| \`10\`        | \`Coordinator\` | \`1\`              | 6710&nbsp;U: \`LevelCtrl\`<br>6711&nbsp;U: \`OnOff\` [^1] |
| \`11\`        | \`Coordinator\` | \`1\`              | \`LevelCtrl\`                                           |
| \`12\`        | \`Coordinator\` | \`1\`              | \`LevelCtrl\`                                           |
| \`13\`        | \`Coordinator\` | \`1\`              | \`LevelCtrl\`                                           |

*[EP]: Endpoint
[^1]: Depending on whether the control panel sits on a 6710&nbsp;U (power supply) or 6711&nbsp;U (relay), \`OnOff\` respectively \`LevelCtrl\` shall be used.

### Action values
This device send the following \`action\` values in its payload:

| Left buttons                | (long-hold-release) | Right buttons            |
|-----------------------------|---------------------|--------------------------|
| \`row_1_off\`<br>\`row_1_down\` | \`row_1_stop\`        | \`row_1_on\`<br>\`row_1_up\` |
| \`row_2_off\`<br>\`row_2_down\` | \`row_2_stop\`        | \`row_2_on\`<br>\`row_2_up\` |
| \`row_3_off\`<br>\`row_3_down\` | \`row_3_stop\`        | \`row_3_on\`<br>\`row_3_up\` |
| \`row_4_off\`<br>\`row_4_down\` | \`row_4_stop\`        | \`row_4_on\`<br>\`row_4_up\` |

Briefly pressing and releasing a button triggers the \`off\` resp. \`on\` actions for the given row, long-pressing triggers the \`down\`/\`up\` state respectively (after about one second). When releasing then, a \`stop\` will be issued with no distinction between the left or right button.
`,
    },
    {
        model: ['AV2010/29A'],
        deviceTypeSpecificConfiguration: true,
        note: `
### Controlling
Trigger the siren sound and lights, duration can be indicated in seconds. The strobe parameter must always be false
\`\`\`json
topic: 'zigbee2mqtt/friendly name/set'
payload: '{"warning": {"duration": 3, "strobe": false}}'
\`\`\`

5 short beeps. If the alarm is on, it stops:
\`\`\`json
topic: 'zigbee2mqtt/friendly name/set'
payload: '{"warning": {"level": "medium"}}'
\`\`\`
5 long beeps. If the alarm is on, it stops:
\`\`\`json
topic: 'zigbee2mqtt/friendly name/set'
payload:
'{"warning": {"level": "high"}}'
\`\`\`

1 short beeps. If the alarm is on, it stops:
\`\`\`json
topic: 'zigbee2mqtt/friendly name/set'
payload: '{"warning": {"level": "very_high"}}'
\`\`\`
`,
    },
    {
        model: ['WXKG11LM'],
        note: `
### Actions
The \`triple\`, \`quadruple\`, \`hold\` and \`release\` is not supported by all versions of this device.
`,
    },
    {
        model: ['ti.router'],
        note: `
### Firmware
This is a Texas Instruments CC1352P-2, CC2652RB or CC2652R flashed with the following firmware: https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_3.x.0/bin
`,
    },
    {
        model: ['L122FF63H11A5.0W', 'L122CB63H11A9.0W', 'L122AA63H11A6.5W', 'C422AC14D41H140.0W', 'C422AC11D41H140.0W'],
        note: `
### Pairing
Factory reset the light.
After resetting the light it will automatically connect.

The light should be turned off for at least 10 seconds. After that, the on- and off-phases should last around 2 to 5 seconds.
Start with light on, then off, and then 3 “on’s”, wait in the 3rd ON state.
`,
    },
    {
        model: ['F122SB62H22A4.5W'],
        note: `
### Pairing
Factory reset the light bulb.
After resetting the bulb will automatically connect.

The bulb should be turned off for at least 10 seconds. After that, the on- and off-phases should last around 2 to 5 seconds.
Start with bulb on, then off, and then 3 “on’s”, wait in the 3rd ON state.
`,
    },
    {
        model: ['RL460WHZHA69'],
        note: `
### Pairing
The bulb automatically pairs after coming out of the box.

To factory reset the bulb; turn on and off the power 6 times within a few seconds. After resetting the bulb will automatically connect.
`,
    },
    {
        model: ['TI0001-switch', 'TI0001-switch-2gang', 'TI0001-socket', 'TI0001-dimmer'],
        note: `
After pairing device will be shown as "TI0001" device. Need to manually trigger a re-configure of the device either using web-frontend
of Zigbee2MQTT or using [MQTT message](../information/mqtt_topics_and_message_structure.html#zigbee2mqttbridgerequestdeviceconfigure) right after pairing.
In case of problems it's recommended to remove device and than retry pairing and re-configuring device.

### Important
These devices can only be used on channel 26.
These devices are locked to the manufacturer's network key (ext_pan_id).
Your configuration file [data/configuration.yaml](../information/configuration) must contain the following:

\`\`\`yaml
advanced:
  ext_pan_id: [33,117,141,25,0,75,18,0]
  channel: 26
\`\`\`

Therefore these devices may not co-existence with other Zigbee devices.
Maybe, you need to add a dedicated coordinator and create a new network for Livolo.
If you decided to create a new network, you should specify another 'pan_id'.

\`\`\`yaml
advanced:
  pan_id: 6756
\`\`\`
`,
    },
    {
        model: ['Z6'],
        note: `
### About the 4th bottom switch
This button acts as a master switch -- toggles the full on and off of the other three switches
This button exposes NO endpoint
Long-press this button 2s --> pair mode (all light(s) blink 2 times), if the light(s) stay on, it means the pairing is successful
Long-press this button 10s --> unpair mode, all light(s) will blink 4 times
`,
    },
    {
        model: ['WXKG01LM', 'WXKG11LM', 'WXKG12LM', 'WXKG03LM_rev1', 'WXKG03LM_rev2', 'WXKG06LM', 'WXKG02LM_rev1', 'WXKG02LM_rev2', 'QBKG04LM', 'QBKG11LM', 'QBKG03LM', 'QBKG12LM', 'WXKG07LM', 'QBKG21LM', 'QBKG22LM', 'E1743', 'E1766', 'ptvo.switch', 'DIYRuZ_R8_8', 'HGZB-1S', 'HGZB-02S', 'HGZB-045', 'IM6001-BTP01', 'AV2010/34', 'HS1EB/HS1EB-E', 'AIRAM-CTR.U', 'ICZB-KPD14S', 'ICZB-KPD18S', 'N2G-SP', 'SR-ZG9001K12-DIM-Z4', '6ARCZABZH', 'MEAZON_BIZY_PLUG', 'MEAZON_DINRAIL', '2AJZ4KPKEY', 'TERNCY-PP01', 'TERNCY-SD01'],
        note: `
### Deprecated click event
By default this device exposes a deprecated \`click\` event. It's recommended to use the \`action\` event instead.

To disable the \`click\` event, set \`legacy: false\` for this device in \`configuration.yaml\`. Example:

\`\`\`yaml
devices:
  '0x12345678':
    friendly_name: my_device
    legacy: false
\`\`\`
`,
    },
    {
        model: ['81825'],
        note: `
### Pairing
To pair the remote you will first need to factory reset the remote then pair it to the controller.

1. Reset the remote by holding down the two middle (arrow) buttons, if reset successfully the LED on the remote should blink once.
2. Then pair the remote to the controller by placing it in proximity to the controller whilst it is searching. Hold down the off (circle) button for 10 seconds until it blinks green 3 times. If it does, then the remote is paired to the controller.
`,
    },
    {
        model: ['HR-C99C-Z-C045'],
        note: `
### Pairing
Hold small reset button pressed (located on the backside of remote) for 3
seconds (until the front LED blinks) and device will reset and will attempt to join network.
`,
    },
    {
        model: ['L4531C'],
        note: `
### Pairing
Try few times with reset for pairing.
`,
    },
    {
        model: ['4655BC0-R'],
        note: `
### Pairing

To pair this device, remove the top cover from the main sensor and remove the battery.  Hold
the small tamper switch down for at least three seconds.  Continue holding down while you reinsert
the battery.  Once you release the tamper switch, the led next to it should come on and start blinking,
indicating that the device is ready to pair.
`,
    },
    {
        model: ['404002'],
        note: `
### Pairing

Press the small reset button (at backside of the remote at the lower part of the battery lid) e.g. with a pin for about 4 seconds. The device will reset and try to join a network. The LED is switched on during the pairing process. If pairing fails it might work after repeating this procedure and lowering the distance to your Zigbee adapter.

Pairing directly to a nearby (distance ca. 5 cm) Müller Licht Tint bulb is possible by holding down the "power" and "dim down" buttons until the LED starts blinking.
`,
    },
    {
        model: ['4000116784070'],
        note: `
### Pairing
Press and hold the power button on the device for +- 5 seconds (until a blue light starts blinking).
After this the device will automatically join.
`,
    },
    {
        model: ['4058075816459'],
        note: `
### Pairing
For the OSRAM Smart+ Switch (4058075816459) hold the lower left and upper right buttons for 3 seconds
to enter pairing mode. The LED will blink blue and the device will join the network.
`,
    },
    {
        model: ['HLU2909K'],
        note: `
### Protection
ZigBee 3.0, monitoring and cuts power if too high temperature or if overloaded.

### Pairing
Factory reset by press & hold the power button for 12 seconds. The LED is then starting to blink 3 times RED in intervals during pairing process.

### Specs
- Rating: 220-240VAC, 16A, 50Hz
- Standby Power: <= 0.5W

### Manual
[Supplier's manual](http://www.nonline.no/wp-content/uploads/2020/03/Apex_Smart_Plug_UserManual.pdf)
`,
    },
    {
        model: ['HSE2905E'],
        note: `
### Pairing
Factory reset by removing the plastic cover and press & hold the power button for 10 seconds. The LED is then
starting to blink Red/Blue to indicate in pairing mode.

### Should automatically support (only tested Kamstrup)
- Aidon
- Kaifa
- Kamstrup

### Configuring interface mode
There should be no need to configure into any interface mode as the Eva HAN should autodetect the correct mode.

### Not getting measurements
In case you are not getting any measurements, it could be that your firmware is too old. If firmware are < 0.4
either update fw via Eva Smart HUB or ask Datek for a replacement with min fw 0.4. Tested on 0.4.

### Where do I find this product
[Product page](https://shop.evasmart.no/produkt/smarthus/maleravleser#product-tabs1)
`,
    },
    {
        model: ['BHT-002-GCLZB'],
        note: `
### Pairing
Switch the thermostat off. Press and hold the temperature down button for +- 8 seconds to enable the pairing mode (display lights up and a WiFi-like icon is blinking). After successful interview turn the thermostat on again.

### Stop message flooding
This unit has a bug that makes it send multiple messages when updating. To stop this from flooding your MQTT Queues, please add the following to your \`configuration.yaml\` file:

{% raw %}
devices:
  '0x12345678':
    friendly_name: thermostat
    debounce: 1
{% endraw %}
`,
    },
    {
        model: ['MEG5113-0300/MEG5165-0000'],
        note: `
### Pairing
To get the device into pairing mode, press the up button 3 times briefly and then hold it for a long time (almost 20s). After about 10s the LED starts blinking slowly, continue to hold until it starts blinking rapidly. Now you can release it. Pairing will take a while to complete. The LED will blink and change color during this process.

### Control
The shutter control uses a simple timer to control the duration to open/close the shutter. Unfortunately the Zigbee command to set the timer is not known yet. Even if you set the timer via Bluetooth, it will be reset to the default 2 minutes every time you bring it back to Zigbee mode.
The consequence is, that if your shutter is faster than 2 minutes, the position information will not match with the shutter position (since the transition from 0% to 100% takes 120s).
Example: If your shutter motor needs 20 seconds to move from open to closed, it will already be closed at 1/6 of the time, i.e. at position 85. It will still take 120s for the position information to go from 100 down to 0.

If you use a shutter motor with positional switches, that stops at the Open or closed position, this will not be an issue. If you rely on the control to shut of the motor, the current implementation will keep the motor pulling until the timer has elapsed, that might not be a good idea.
If your shutter motor needs more than 2 minutes, I suppose it will stop before reaching the final position.
`,
    },
    {
        model: ['404021'],
        note: `
### Pairing
Press the reset button (or connected switch) 5 times.

### External switch
Device only supports momentary switches, not tumble switches.
`,
    },
    {
        model: ['DM A60F'],
        note: `
### Pairing
Factory reset the light bulb by turning the bulb on/off seven times.
After resetting the bulb will go into pairing mode for 20 seconds.

While pairing, keep the bulb close to the adapter.
`,
    },
    {
        model: ['ICTC-G-1'],
        note: `
### Pairing
To factory reset the TRADFRI wireless dimmer (ICTC-G-1) press the button
4 times (so the red lights starts blinking).
After the blinks you might be willing to rotate the dimmer
like you are trying to control your lights. It will prevent the device
from going to sleep and ensure successful pairing. In case the dimmer was
recognized but no actions seems to be detected, try to restart Zigbee2MQTT.
See [IKEA TRADFRI wireless dimmer (ICTC-G-1) not pairing](https://github.com/Koenkk/zigbee2mqtt/issues/620).
`,
    },
    {
        model: 'TH1300ZB',
        note: `
### Pairing
Press the two buttons simultaneously for 3 seconds. The wireless icon will blink when searching
for the Zigbee network and stay steady when paired to it. Repeat if unsuccessful.

### Unpairing
Press the two buttons simultaneously for 10 seconds and release.
The device will restart. The wireless icon will disappear from the display.

### The following thermostats parameters can be changed trough MQTT

#### Occupancy / Unoccupancy
The thermostat can be instructed to use the occupancy or unoccupancy setpoints by
publishing to \`zigbee2mqtt/FRIENDLY_NAME/set {"thermostat_occupancy": "OCCUPANCY"}\`
where \`OCCUPANCY\` is one of the following values: \`occupied\`, \`unoccupied\`.
The factory default value is \`occupied\`.

#### Floor control mode
The sensor used by the thermostat for temperature regulation can be changed by publishing
to \`zigbee2mqtt/FRIENDLY_NAME/set {"floor_control_mode": "SENSOR"}\`
where \`SENSOR\` is one of the following values: \`ambiant\`, \`floor\`.
The factory default value is \`floor\`.

#### Ambient maximum heating setpoint
The maximum ambient temperature setpoint of the thermostat can be changed by publishing
to \`zigbee2mqtt/FRIENDLY_NAME/set {"ambiant_max_heat_setpoint": "TEMPERATURE"}\`
where \`TEMPERATURE\` is the desired value (between 5 and 36 Celcius).
This feature is disabled by default.

#### Floor minimum heating setpoint
The minimum floor temperature setpoint of the thermostat can be changed by publishing
to \`zigbee2mqtt/FRIENDLY_NAME/set {"floor_min_heat_setpoint": "TEMPERATURE"}\`
where \`TEMPERATURE\` is the desired value (between 5 and 36 Celcius).
This feature is disabled by default.

#### Floor maximum heating setpoint
The maximum floor temperature setpoint of the thermostat can be changed by publishing
to \`zigbee2mqtt/FRIENDLY_NAME/set {"floor_max_heat_setpoint": "TEMPERATURE"}\`
where \`TEMPERATURE\` is the desired value (between 5 and 36 Celcius).
This feature is disabled by default.

#### Floor temperature sensor
The floor thermistor temperature sensor value connected to the thermostat can be changed by
publishing to \`zigbee2mqtt/FRIENDLY_NAME/set {"temperature_sensor": "SENSOR"}\`
where \`SENSOR\` is one of the following values: \`10k\`, \`12k\`.
The factory default value is \`10k\`.

#### Display backlight
The thermostat display can be set to turn on only when a button is pressed or stay on and auto dim by
publishing to \`zigbee2mqtt/FRIENDLY_NAME/set {"backlight_auto_dim": "BACKLIGHT"}\`
where \`BACKLIGHT\` is one of the following values: \`on demand\`, \`sensing\`.
The factory default value is \`sensing\`.

#### Time to display
The time clock value to display on the thermostat can be set by
publishing to \`zigbee2mqtt/FRIENDLY_NAME/set {"thermostat_time": "TIME"}\`
where \`TIME\` is the number of seconds since 2000-01-01 or empty.
The Zigbee gateway local time will be used when publishing an empty value.
By default, the time clock is not displayed.

#### Time format displayed
The time clock format on the thermostat display can be changed by
publishing to \`zigbee2mqtt/FRIENDLY_NAME/set {"time_format": "FORMAT"}\`
where \`FORMAT\` is one of the following values: \`12h\`, \`24h\`.
The factory default value is \`24h\`.

#### Enable outdoor temperature display
The display of outdoor temperature on the thermostat can be enabled / disabled by
publishing to \`zigbee2mqtt/FRIENDLY_NAME/set {"enable_outdoor_temperature": "ENABLE"}\`
where \`ENABLE\` is one of the following values: \`on\`, \`off\`.
\`on\` value will set the outdoor temperature refresh timeout to 3 hours.
\`off\` value will set the outdoor temperature refresh timeout to 30 seconds.
When the refresh timeout is expired the thermostat setpoint temperature will be displayed.
The outdoor temperature is not displayed by default.

#### Outdoor temperature to display
The outdoor temperature to display on the thermostat can be changed by
publishing to \`zigbee2mqtt/FRIENDLY_NAME/set {"thermostat_outdoor_temperature": "TEMPERATURE"}\`
where \`TEMPERATURE\` is between -100 to +100.

### The following status are reported by the thermostat

#### Groud fault circuit indicator status (GFCi)
Turns \`on\` when the thermostat GFCi detects a ground fault. The status is reported
to the device state as \`gfci_status\` every hour or when it changes.
\`gfci_status\` has one of the following values: \`on\`, \`off\`.
The default value is \`off\`.

#### Floor limit status
This status is \`on\` when the floor temperature exceeds the maximum floor heating setpoint.
It is reported to the device state as \`floor_limit_status\` every hour or when it changes.
\`floor_limit_status\` has one of the following values: \`on\`, \`off\`.
The default value is \`off\`.
`,
    },
    {
        model: 'TH1123ZB',
        note: `
### Setting outdoor temperature
To set _outdoor temperature_, you need to send the value to the following MQTT topic:
\`\`\`
zigbee2mqtt/<FRIENDLY_NAME>/set/thermostat_outdoor_temperature
\`\`\`

If you want to automate the publishing of the outdoor temperature using Home Assistant, you may create an automation like this:

\`\`\` yaml
- id: 'Auto_Publish_Outdoor_Temprature'
  alias: Auto_Publish_Outdoor_Temprature
  description: Automatically Publish the outdoor temperature to thermostats
  trigger:
  - entity_id: sensor.outdoor_temprature_sensor
    platform: state
  condition: []
  action:
  - data:
      payload_template: '{{ states(''sensor.outdoor_temprature_sensor'') | string }}'
      topic: zigbee2mqtt/<FRIENDLY_NAME>/set/thermostat_outdoor_temperature
    service: mqtt.publish
\`\`\`

### Enabling time
To enable _time_ you need to send a _blank_ message to the following MQTT topic:
\`\`\`
zigbee2mqtt/<FRIENDLY_NAME>/set/thermostat_time
\`\`\`
Every time the above message is sent, Zigbee2MQTT will calculate the current time and send it to the thermostat.
`,
    },
    {
        model: 'ZYCT-202',
        note: `
### Binding
This device does not support binding.
`,
    },
    {
        model: 'XDD12LM',
        note: `
### Pairing
Switch the lamp on five times until the lamp blinks several times.
`,
    },
    {
        model: ['X711A', 'X712A', 'X713A'],
        note: `
### Pairing
Press and hold the button on the device for more then 10 seconds (until the led light starts blinking), release and wait.
`,
    },
    {
        model: ['ZNCLDJ11LM'],
        note: `
### Pairing
Hold button for about 5 seconds until blue light turn on.

If you need to reset device first, hold button longer until red light turn on.
`,
    },
    {
        model: 'V3-BTZB/V3-BTZBE',
        note: `
### Pairing
If pairing failed, try the followings:
- Pairing it closer to the coordinator
- Connecting the CC2531 via an USB extension cable (to avoid interference)
- Replacing the batteries of the danalock.

### App
This device also come with an iOS app (Android as well but not tested). It is recommended to do the setups via the app for better control of the lock.
`,
    },
    {
        model: '07008L',
        note: `
### How to reset device
Turn power on/off five times.
`,
    },
    {
        model: '43080',
        note: `
### LED status indicator
To change the LED status indicator press the top of rocker 3 times and then the bottom of the rocker 1 time. This will cycle between these modes:
1. LED is ON when the load if OFF (Default)
2. LED is ON when the load if ON
3. LED is always OFF

### Pairing
Factory reset the dimmer by pressing the top of the rocker 10 times quickly.
`,
    },
    {
        model: 'DIYRuZ_RT',
        note: `
# Firmware
This firmware can be used to flash any CC2530 device to support Zigbee 3.0
For example the Sonoff BasicZBR3
Firmware download: https://github.com/diyruz/diyruz_rt
Blog about supporting Zigbee 3.0 to CC2530: https://habr.com/ru/company/iobroker/blog/495926/
`,
    },
    {
        model: ['TS0121_plug', 'HS2SK_nxp'],
        deviceTypeSpecificConfiguration: true,
        note: `
* \`measurement_poll_interval\`: This device does not support reporting electric measurements so it is polled instead. The default poll interval is 60 seconds.`,
    },
    {
        model: '3RSS007Z',
        note: `
### Pairing mode
To put the device in pairing mode, hold the switch's button for 30 seconds until LED starts blinking fast (2 blinks per second)

### Swap ON/OFF
If the switch is showing off when it is actually on, hold the button till the LED comes on then release, it will change the switch position while keeping the current state.

`,
    },
    {
        model: 'DL15S-1BZ',
        note: `
### Pairing
To pair this device, hold the ON for few seconds until the red light is blinking. After that, simple tap once on the ON again to start the pairing process.

Note: This device doesn't support Zigbee channels 25 & 26.
`,
    },
    {
        model: ['SNZB-01'],
        note: `
### Pairing
Long press reset button for 5s until the LED indicator flashes three times, which means the device has entered pairing mode.
The reset button can be found by removing the back cover.
`,
    },
    {
        model: ['SNZB-02'],
        note: `
### Pairing
Long press reset button for 5s until the LED indicator flashes three times, which means the device has entered pairing mode

### Reporting intervals
It has been reported, that the sensor reports humidity changes quite frequently (changes on 2nd digit level), but temperature changes are reported only once per hour or when temperature has changed > ~0.6°C. This results in a *staircase* development in recorded temperatures and inhibits fine-granular climate control. No resolution is known so far. See also [Homeassistant Community Forums](https://community.home-assistant.io/t/sonoff-snzb-02-temp-sensor-reporting-interval/216315/7)
`,
    },
    {
        model: ['TS0216'],
        note: `
### Pairing
1. Power on the device
2. Press both the volume + and volume - buttons for more than 5 seconds
`,
    },
    {
        model: ['ZL1000100-CCT-US-V1A02'],
        note: `
### Pairing
Turn the bulb on and off consecutively 6 times, then on again, at which point it should blink twice.
`,
    },
    {
        model: ['SNZB-03'],
        note: `
### Pairing
If brand new, when powered on it will attempt to pair to Zigbee2MQTT automatically. If not (or if has been paired before and needs to be re-paired) - press and hold the reset button through the small hole at the top for about 5 seconds until the light flashes several times. The device will then go into pairing mode. It should then be connected to Zigbee2MQTT. Pressing the button should activate the relay on/off as normal, and the red LED will be on/off.
`,
    },
    {
        model: ['SNZB-04'],
        note: `
### Pairing
Long press reset button for 5s until the LED indicator flashes three times, which means the device has entered pairing mode
`,
    },
    {
        model: ['TS130F'],
        note: `
### Calibration

* Open curtains completely
* Send calibration command to the switch: mosquitto_pub -d -m 'on' -t 'zigbee2mqtt/Living_Room_Sunblind_Switch/set/calibration'
* Press on close button on the switch, wait until curtains are fully closed
* Send calibration command to the switch: mosquitto_pub -d -m 'off' -t 'zigbee2mqtt/Living_Room_Sunblind_Switch/set/calibration'
`,
    },
    {
        model: ['AU-A1ZB2WDM'],
        note: `
### Pairing
To pair the dimmer, press and hold the knob for 6 seconds.
The connected load, and the red LED indicator behind the dimmer knob will flash twice to indicate it has entered pairing mode.
The connected load, and the red LED indicator behind the dimmer knob will flash a third time to indicate that it has paired successfully.
`,
    },
    {
        model: ['HG06467'],
        note: `
### Pairing
Factory reset the LED string by holding the "F" button for 5 seconds.
When you let go of the button the LED string should blink slowly
After resetting the LED string will automatically connect.

While pairing, keep the string close to the adapter.


### Trigger effects
Controls the 16 build-in effects of the LED string. An effect expects 3 parameters: \`speed\`, \`colors\` and \`effect\`. To trigger an effect send a message to \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"effect": {"effect": EFFECT, "speed": SPEED, "colors": COLORS}}\`. Description:
 * \`SPEED\` should be a number between 1 and 100.
 * \`COLORS\` is an array of JSON objects containing \`r\`, \`g\`, \`b\`. Note: some effects support multiple colors
 * \`EFFECT\` is a string, below is a list of possible values and the amount of colors it supports
\`\`\`
|     effect             |     # colors    |
|------------------------|-----------------|
|     steady             |     1           |
|     snow               |     1           |
|     rainbow            |     0           |
|     snake              |     6           |
|     twinkle            |     2           |
|     firework           |     2           |
|     horizontal_flag    |     3           |
|     waves              |     3           |
|     updown             |     2           |
|     vintage            |     1           |
|     fading             |     1           |
|     collide            |     1           |
|     strobe             |     5           |
|     sparkles           |     3           |
|     carnaval           |     6           |
|     glow               |     6           |
\`\`\`
#### Example message payload
\`\`\`json
{
    "effect": {
        "effect": "snake",
        "speed": 100,
        "colors": [
            {
                "r": 255,
                "g": 0,
                "b": 0
            },
            {
                "r": 0,
                "g": 255,
                "b": 0
            },
            {
                "r": 0,
                "g": 0,
                "b": 255
            }
        ]
    }
}
\`\`\`
`,
    },
    {
        model: ['YSR-MINI-01_rgbcct', 'YSR-MINI-01_wwcw', 'YSR-MINI-01_dimmer'],
        note: `
### Pairing
1. Hold button until LED start flashing (about 6 seconds), then release.
2. Pairing is done when LED stop flashing.
`,
    },
    {
        model: 'C4',
        note: `
### General
The ubisys C4 remote control unit seems to be primarily targeted to be directly bound to other ZigBee devices to control them. Therefore it does not emit plain "click" events or similar but can be configured to send ZigBee commands like on, off, toggle, cover up, cover down etc. from up to 6 endpoints (4 with on/off, level and scene clusters for lights and another 2 to control window covering devices).
When used with Zigbee2MQTT all endpoints get bound to the coordinator automatically. Therefore all actions will be sent to the coordinator and forwarded to MQTT in addition to being sent directly via ZigBee to other devices that have potentially been bound manually (see [Binding](../information/binding.html) for more information).
In its factory reset configuration an ubisys C4 just sends a toggle command (originating from endpoints 1 to 4 respectively) for each input. Therefore basic keypresses on attached momentary switches can be processed through Zigbee2MQTT even without further input configuration.


### Configuring Inputs
The inputs of most ubisys devices can be configured in a very flexible way to map state transitions (e.g. 'released' to
'pressed') to Zigbee commands (e.g. 'toggle'). This even applies to the way in which these inputs control a local load (for ubisys devices other than the C4).

#### Templates
By publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` using the JSON properties \`configure_device_setup\` and \`input_action_templates\` the inputs can be configured using templates. This allows to configure some common use cases without having to fully dive into the details of \`input_actions\` (see [Raw Configuration](#raw-configuration) below).

Valid template types are:
* \`toggle\`: Use one push button input to toggle the state of a light (or a similar actuator). A 'toggle' command will be sent on every push of the button.
* \`toggle_switch\`: Use one stationary switch to toggle. A 'toggle' command will be sent when the switch is turned on as well as when the switch is turned off.
* \`on_off_switch\`: Use one stationary switch to turn on and off. An 'on' command will be sent when the switch is turned on and an 'off' command when it is turned off. Helpful to ensure that lights stay synchronised when controlling a group.
* \`on\`: Only send an 'on' command on every push of a button. Helpful to e.g. use a C4 as a more direct interface to some other physical device with a relay, e.g. to turn on all lights when the (physical) alarm system signals an intrusion.
* \`off\`: Only send an 'off' command on every push of a button (also see \`on\`).
* \`dimmer_single\`: Use one push button to toggle the state of a light and also to control its level. A short press will send a 'toggle' command and long presses will move the level up and down alternately.
* \`dimmer_double\`: Use two push buttons to switch a light on and off and also to control its level. On the first input, a short press will send an 'on' command and a long press a 'move level up' command. On the second input, a short press will send an 'off' command and a long press a 'move level down' command.
* \`cover\`: Use two push buttons to control a cover. A press on the first input will send a 'move up' command and if released within 1 second, it will send a 'stop' command. The same applies for the second input with 'move down' and 'stop' commands. This allows to use short presses to e.g. control the tilt of lift & tilt blinds whereas long presses will move up or down completely.
* \`cover_switch\`: Use two stationary switches to control a cover. Similar to \`cover\`, but the 'stop' command will always be sent when a switch is turned off.
* \`cover_up\`: Only send a 'move up' command on every push of a button (also see \`on\`).
* \`cover_down\`: Only send a 'move down' command on every push of a button (also see \`on\`).
* \`scene\`: Use a push button to select a scene (using its id). A short press will send a 'recall scene' command using \`scene_id\` and if \`scene_id_2\` is present a long press will do the same using \`scene_id_2\`.
* \`scene_switch\`: Use a stationary switch to select a scene. Very similar to \`scene\`: turning the switch on will send \`scene_id\` and turning it off will send \`scene_id_2\` (if configured).

General attributes:
* \`input\`: Optional, selects the input(s) to use for a template. If not specified, the first template will use input 0 and then it will be incremented automatically for every further template. In case a templates uses two inputs, \`input\` and \`input+1\` will be used and following template will use \`input+2\`.
* \`inputs\`: Optional, selects both inputs separately for templates using two inputs. Allows to e.g. switch up and down inputs in case they are wired differently. The following template will use \`Math.max(...inputs)+1\`.
* \`endpoint\`: Optional, selects the _outbound_ endpoint to use for sending the commands. The C4 only contains _outbound_ endpoints starting with endpoint 1 (see above). For the other ubisys devices endpoint 1 usually is an _inbound_ endpoint controlling the load, but starting at 2 or 3 they also contain _outbound_ endpoints that are per default bound to their respective load controlling endpoint but can also be changed (e.g. from switch to push button) or unbound and rebound to e.g. control a different light using the second input of a S1-R or D1. If not specified, the first template will use the first available _outbound_ endpoint on the specific device and then it will be incremented automatically for every further template. For a C4, cover templates will start at endpoint 5 (since endpoints 1-4 do not host a window covering cluster and can therefore only be used for lights etc).

The input(s) and endpoint used will also be output to the Zigbee2MQTT log (flagged as warnings but only to make sure they do not get suppressed).

Attributes only used with dimmer templates:
* \`no_onoff_down\`: Optional, changes the commands sent to not automatically turn the light off when moving the level fully down. Useful to be able to dim a light down completely without turning it off.
* \`no_onoff_up\`: Optional, changes the commands sent to not automatically turn the light on when moving the level up.
* \`no_onoff\`: Optional, combination of \`no_onoff_up\` and \`no_onoff_down\`.
* \`rate\`: Optional (default is 50), specifies the rate in steps per second when moving the level up or down.

Attributes only used with scene templates
* \`scene_id\`: Mandatory, specifies the scene id to send for the primary function of the template (i.e. short button press or switch turned on).
* \`group_id\`: Specifies the group id to send the 'recall scene' to (needs to be identical to the one used in the group definition in \`configuration.yaml\` / \`groups\` and to the one used when storing the scene. Can be omitted on subsequent scene templates.
* \`scene_id_2\`: Optional, if present it specifies the scene id to send for the secondary function of the template (i.e. long button press or switch turned off).
* \`group_id_2\`: Optional, specifies the group id to send with \`scene_id_2\`. Only needed if different from \`group_id\`.

**On the C4, the respective _outbound_ endpoint also needs to be bound to one or more target devices (see [Binding](#binding) below) for most of the template types (besides scene control).**

Please also note that there seems to be a size limit on the amount of data that can successfully be written using \`input_action_templates\`, so not all combinations theoretically possible will work in reality.


#### Template Examples
\`"//_comment"\` fields are really just comments only, will be ignored (as any other additional JSON properties) and can certainly be omitted. They are just used here since normal JavaScript comments (\`//\`) would not be considered valid JSON and therefore Zigbee2MQTT would throw an error.

C4 Default Configuration
\`\`\`json
{
    "configure_device_setup": {
        "input_action_templates": [
            {
                "//_comment": "will automatically use input 0 and endpoint 1",
                "type": "toggle"
            },
            {
                "//_comment": "will automatically use input 1 and endpoint 2",
                "type": "toggle"
            },
            {
                "//_comment": "will automatically use input 2 and endpoint 3",
                "type": "toggle"
            },
            {
                "//_comment": "will automatically use input 4 and endpoint 4",
                "type": "toggle"
            }
        ]
    }
}
\`\`\`

Control a dimming light with inputs 1 (up) and 0 (down) and use input 3 to toggle a different light
\`\`\`json
{
    "configure_device_setup": {
        "input_action_templates": [
            {
                "//_comment": "will automatically use endpoint 1",
                "type": "dimmer_double",
                "inputs": [1, 0]
            },
            {
                "//_comment": "will automatically use endpoint 2",
                "type": "toggle",
                "input": 3
            }
        ]
    }
}
\`\`\`

Use separate up and down push buttons with a D1
\`\`\`json
{
    "configure_device_setup": {
        "input_action_templates": [
            {
                "//_comment": "will automatically use inputs 0 and 1 and endpoint 2 (first outbound endpoint on a D1)",
                "type": "dimmer_double"
            }
        ]
    }
}
\`\`\`

Use stationary switches instead of push buttons with a J1
\`\`\`json
{
    "configure_device_setup": {
        "input_action_templates": [
            {
                "//_comment": "will automatically use inputs 0 and 1 and endpoint 2 (first outbound endpoint on a J1)",
                "type": "cover_switch"
            }
        ]
    }
}
\`\`\`


Control a dimming light with inputs 0 and 1 and recall scenes with 3 and 4
\`\`\`json
{
    "configure_device_setup": {
        "input_action_templates": [
            {
                "//_comment": "will automatically use inputs 0 and 1 and endpoint 1",
                "type": "dimmer_double"
            },
            {
                "//_comment": "will automatically use input 3 (endpoint does not really matter for scenes)",
                "type": "scene",
                "group_id": 1000,
                "scene_id": 10
            },
            {
                "//_comment": "will automatically use input 4 and group id 1000",
                "type": "scene",
                "scene_id": 11
            }
        ]
    }
}
\`\`\`

#### Raw Configuration

By publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` the following device attributes can be set to rawly configure inputs:
\`\`\`json
{
    "configure_device_setup": {
        "input_configurations": [0, 0, 0, 0],
        "input_actions": [
            [0, 13, 1, 6, 0, 2],
            [1, 13, 2, 6, 0, 2],
            [2, 13, 3, 6, 0, 2],
            [3, 13, 4, 6, 0, 2]
        ]
    }
}
\`\`\`
For further details on these attributes please take a look at the
[ubisys C4 Technical Reference Manual](https://www.ubisys.de/wp-content/uploads/ubisys-c4-technical-reference.pdf),
chapter "7.8.5. Device Setup Cluster (Server)" (or the respective ubisys reference manual of the device in use in case it's not a C4) and the "ZigBee Device Physical Input Configurations Integrator's Guide" (which can be obtained directly from ubisys upon request).

Please note that there seems to be a size limit on the amount of data that can successfully be written to \`input_actions\`, so not all configurations theoretically possbile might work in reality.

By publishing to \`zigbee2mqtt/FRIENDLY_NAME/get/configure_device_setup\` the values of the configuration attributes can
also be read back from the device and be printed to the normal Zigbee2MQTT log.

### Binding
Most of the \`input_actions\` and \`input_action_templates\` (besides scene control) do not reference a target device directly but make use of the binding table of a specific _outbound_ endpoint (for C4 see [General](#general) above, for other ubisys devices take a look at the respective ubisys reference manual). For the C4, Zigbee2MQTT will always bind all endpoints to the coordinator automatically (so Zigbee2MQTT will be able to forward button presses to MQTT), but to control any other ZigBee device or group directly, it is necessary to bind the _outbound_ endpoints used to the target (device or group).

When binding (or unbinding), it is important to explicitly specify the _outbound_ endpoint as the source, e.g. \`zigbee2mqtt/bridge/request/device/bind\` payload \`{"from": "SOURCE_DEVICE_FRIENDLY_NAME/2", "to": "TARGET"}\` (also see [Binding specific endpoint](../information/binding.html#binding-specific-endpoint)). Endpoints can be specified in numeric form and it is usually not necessary to specify an endpoint for the target device.

For ubisys devices other than the C4 this also allows to use the secondary input to control a different device. Example: Use the secondary input on a D1 (uses _outbound_ endpoint 3 in the factory configuration) to control a separate ZigBee bulb:
\`\`\`
mosquitto_pub -t zigbee2mqtt/bridge/request/device/bind -m '{"from": "DIMMER_FRIENDLY_NAME/3", "to": "ANOTHER_BULB_FRIENDLY_NAME"}'
\`\`\`

### Decoupling
For ubisys devices other than the C4 this even allows to completely decouple the local input from the local output. Example: Unbind the switch input from the local load and use it to instead control a group of lights without cutting the power to the bulbs (the switch output can still be controlled via ZigBee, e.g. via MQTT through Zigbee2MQTT):
\`\`\`
mosquitto_pub -t zigbee2mqtt/bridge/request/device/unbind -m '{"from": "SWITCH_FRIENDLY_NAME/2", "to": "SWITCH_FRIENDLY_NAME"}'
mosquitto_pub -t zigbee2mqtt/bridge/request/device/bind -m '{"from": "SWITCH_FRIENDLY_NAME/2", "to": "GROUP_NAME"}'
\`\`\`

To restore the original behavior you unbind the group and rebind the device:
\`\`\`
mosquitto_pub -t zigbee2mqtt/bridge/request/device/unbind -m '{"from": "SWITCH_FRIENDLY_NAME/2", "to": "GROUP_NAME"}'
mosquitto_pub -t zigbee2mqtt/bridge/request/device/bind -m '{"from": "SWITCH_FRIENDLY_NAME/2", "to": "SWITCH_FRIENDLY_NAME"}'
\`\`\`
`,
    },
    {
        model: ['D1'],
        note: `
### Configuring Inputs
In case the inputs need to be reconfigured (e.g. to use stationary switches instead of momentary ones or vice versa) this can be done in the same way as [it is being done for the ubisys C4](C4.html#configuring-inputs).

### (Re-)Binding and/or Decoupling
Also see [the ubisys C4 documentation](C4.html#binding), example use cases:
* Use the second input to control a different ZigBee device.
* Completely decouple the input(s) from the local load.

### Ballast Configuration
By publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` the dimmer's ballast configuration attributes (\`min_level\` and \`max_level\`) can be set.
Example:
\`\`\`json
{
    "ballast_config": {
        "min_level": 3
    }
}
\`\`\`

By publishing to \`zigbee2mqtt/FRIENDLY_NAME/get/ballast_config\` the values of the ballast configuration attributes can
also be read back from the device and be printed to the normal Zigbee2MQTT log (flagged as warnings but only to make sure they do not get suppressed).
To account for errors due to missing optional attributes (since this is a general function), every cluster attribute will be queried separately and the complete process can therefore take a moment.

### Dimmer strategy configuration
The dimmer phase control mode can be changed by publishing \`{ "mode_phase_control": "MODE" }\` to \`zigbee2mqtt/FRIENDLY_NAME/set\` where \`MODE\` is one of the following values: \`automatic\` (default), \`forward\` or \`reverse\`.

A word of caution is in order: configuring the wrong dimmer phase control mode could destroy the device or the attached load!

More information can be found in the [ubisys D1 technical reference manual](https://www.smarthome-store.de/media/documents/ubisys-d1-technical-reference.pdf), chapter "7.2.8. Dimmer Setup Cluster (Server)".
`,
    },
    {
        model: ['S1', 'S2'],
        note: `
### Configuring Inputs
In case the input(s) need to be reconfigured (e.g. to use stationary switches instead of momentary ones or vice versa) this can be done in the same way as [it is being done for the ubisys C4](C4.html#configuring-inputs).

### (Re-)Binding and/or Decoupling
Also see [the ubisys C4 documentation](C4.html#binding), example use cases:
* Use the second input to control a different Zigbee device (S1-R only, S1 only has one input)
* Completely decouple the input(s) from the local load

When decoupled, 'action' will be published when pressing the attached switch button.
`,
    },
    {
        model: 'InstaRemote',
        note: `
### Transmitters Loosing Connection in ZigBee 3 Networks
With their factory firmware, the transmitters loose network connection after a few hours when ZigBee 3 devices are present in the network (which is a pretty much standard nowadays). For the Jung wall and handheld transmitters there is a firmware update available that fixes this problem (see [OTA updates](#ota-updates) below), but in turn decreases battery lifetime down to a few months.

Unfortunately Gira seems to have dropped support for their ZigBee transmitters completely and does not offer any firmware updates at all. For the Gira handheld transmitter the Jung update seems to work (and to fix the problem), but for the Gira wall transmitter this is not the case (it only has 6 buttons instead of 8 on the Jung wall transmitter and would therefore need a different firmware). There does not seem to be real solution for this problem rendering the Gira wall transmitters pretty much useless nowadays.

### Factory Reset (8-Button Devices)
* Press and hold buttons \`3\` and \`4\` simultaneously for about 10 seconds until the green LEDs start to flash.
* Release buttons \`3\` and \`4\` and then briefly press button \`O\` within 10 seconds.
* The LEDs should light up green for 3 seconds and the transmitter has been reset.
![Reset](../images/InstaRemote-reset.jpg)

### Join Network (8-Button Devices)
* Press and hold buttons \`5\` and \`I\` simultaneously until the green LEDs start to flash. Then release the buttons again.
* After 10 more seconds the transmitter will start to search for an open network in order to join it.
* If the transmitter was able to join a network, the LEDs will light up green for 3 seconds (otherwise the LEDs will flash red quickly for 3 seconds).
![Join Network](../images/InstaRemote-join-network.jpg)

### OTA
For the device to ask for/accept OTA updates, it needs to be in "programming mode" (same mode as for joining a network, see above).
In case the device does still not accept updates or seems to be stuck somehow, it may help to do a factory reset, join the network again and then again enter programming mode before starting the OTA update again.
`,
    },
    {
        model: 'HS2IRC',
        note: `
Device can learn up to 15 devices and up to 30 keycodes for each device.

### Configuring
By publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` various device attributes can be configured:

#### Create device

Request:
\`\`\`json
{
    "create": {
        "model_type": 55
    }
}
\`\`\`

- **model_type**: User-defined model ID. Used just for reference. Can be \`1..255\`.

Response:
\`\`\`json
{
    "action": "create",
    "action_result": "success",
    "action_model_type": 55,
    "action_id": 1
}
\`\`\`

- **action_result**: (\`success\`/\`error\`). Action result.
- **action_model_type**: User-defined model ID. \`1..255\`
- **action_id**: Internal device slot ID. Total IR transmitter can store up to 15 devices with ID \`1..15\`

NOTE: You should call \`get_list\` manually to refresh \`devices\` topic.

#### Learn key

Request:
\`\`\`json
{
    "learn": {
        "id": 1,
        "key_code": 31
    }
}
\`\`\`

- **id**: Internal device slot ID. \`1..15\`.
- **key_code**: Keycode slot ID. \`1..30\` - Store/replace specific key in specified slot ID. \`>=31\` - Create slot ID.

NOTE: You should store keys one-by-one if you specified \`key_code\` by yourself.

Response:
\`\`\`json
{
    "action": "learn",
    "action_result": "success",
    "action_key_code": 1,
    "action_id": 1
}
\`\`\`

- **action_result**: (\`success\`/\`error\`). Action result.
- **action_key_code**: Internal keycode slot ID, where key was stored. \`1...30\`
- **action_id**: Internal device slot ID. \`1..15\`

NOTE: You should call \`get_list\` manually to refresh \`devices\` topic after learning key.

#### Send stored key

Request:
\`\`\`json
{
    "send_key": {
        "id": 1,
        "key_code": 1
    }
}
\`\`\`

- **id**: Internal device slot ID. \`1..15\`.
- **key_code**: Keycode slot ID. \`1..30\`.

#### Get list of the stored devices and keys

Request:
\`\`\`json
{
    "get_list": ""
}
\`\`\`

Response:

\`\`\`json
{
  "devices": [
    {
      "id": 1,
      "key_codes": [
        1,
      ],
      "model_type": 55
    }
  ]
}
\`\`\`


#### Delete device or keycode

Request:
\`\`\`json
{
    "delete":{
        "id": 1,
        "key_code": 31
    }
}
\`\`\`

- **id**: \`1..15\` - Delete specific device with ID. \`>=16\` - Delete all devices.
- **key_code**: \`1..30\` -Delete specific keycode. \`>=31\` - Delete all keycodes for specified device ID.
`,
    },
    {
        model: '3RSS008Z',
        note: `
### Pairing
To put the device in pairing mode, hold the switch's button for 30 seconds until LED starts blinking fast (2 blinks per second)
`,
    },
    {
        model: 'HGZB-41',
        note: `
### Pairing
Reset of device is done by holding button for 20 secs until it starts to flash green. It will now automatically pair.
`,
    },
    {
        model: ['ROB_200-007-0', 'ROB_200-008-0'],
        note: `
### Pairing
First reset. Press and hold the upper two buttons for 5 seconds until led lights up (continuously blue or green). Then press the upper "0" 5 times - depending on the model, or in a pace of 2 times per second or in a pace of 5 times per second. Second pair. Press and hold the upper two buttons for 5 seconds again, until the led turns on. Then press the "0" once. It should now enter pair mode an start blinking - if it does not get connected, just try the second step again.
`,
    },
    {
        model: ['ROB_200-009-0'],
        note: `
### Pairing
First reset. Press and hold the two buttons for 5 seconds until led lights up (continuously blue or green). Then press the "0" 5 times - depending on the model, or in a pace of 2 times per second or in a pace of 5 times per second. Second pair. Press and hold the  two buttons for 5 seconds again, until the led turns on. Then press the "|" once. It should now enter pair mode an start blinking - if it does not get connected, just try the second step again.
`,
    },
    {
        model: 'E1766',
        note: `
### Pairing
Pair the switch to Zigbee2MQTT by pressing the pair button (found under the back cover next to the battery)
4 times in a row. The red light on the front side should flash a few times and then turn off
(it's more visible to see the light from the back). After a few seconds it turns back on and pulsate.
When connected, the light turns off.

### Binding
The E1766 can be bound to groups using [binding](../information/binding).
It can only be bound to 1 group at a time and cannot be bound to a device.

By default this remote is bound to the default bind group which you first have to unbind it from.
This can be done by sending to \`zigbee2mqtt/bridge/request/device/unbind\` payload \`{"from": "DEVICE_FRIENDLY_NAME", "to": "default_bind_group"}\`.
Right before executing the commands make sure to wake up the device by pressing a button on it.
`,
    },
    {
        model: ['E1757', 'E1926'],
        note: `
### Pairing
It's recommend to first pair the included TRADFRI signal repeater in the room where you want to put the blinds.
Now press both buttons on the blind (next to battery lid) for 5 seconds until a white light between both buttons is turned on.
The device is now awake and ready to pair for 2 minutes.
After that pair the blind by holding the blind battery lid very close to the TRADFRI signal repeater until the white light is turned off (this should mean the pairing is successful).

### End Position
The roller blind maximum extension can be set by moving the blind to the desired position and then double pressing the up or down button.
To reset the end position so you can define a newer more extended end position, open the blind fully. Then double press the up or down button. You can now set the blind extension again.
`,
    },
    {
        model: 'ZNLDP12LM',
        note: `
### Pairing
Switch the lamp on five times until the bulb blinks several times.
`,
    },
    {
        model: 'F20T60A',
        note: `
### Force read power
* \`power\`: Asks the device for the current active power.

Example of MQTT message payload to ask for the active power. This should be sent to \`zigbee2mqtt/FRIENDLY_NAME/get\`:

\`\`\`js
{
    "power"
}
\`\`\`


### Power Alarm Configuration
* \`power_alarm\`: enables or disables the power alarm, and sets the value: \`DISABLE\` (default) / \`integer\` (in kWh)

Example of MQTT message payload to disable the power alarm. This should be sent to \`zigbee2mqtt/FRIENDLY_NAME/set\`:

\`\`\`js
{
    "power_alarm": "DISABLE"
}
\`\`\`

Example of MQTT message payload to enable the power alarm at 3.3 kWh. This should be sent to \`zigbee2mqtt/FRIENDLY_NAME/set\`:

\`\`\`js
{
    "power_alarm": "3300"
}
\`\`\`

When it reaches that value, the \`power_alarm_active\` binary_sensor will change to \`true\`.


### Identify
Helps to identify the device using the LED.

* \`identify['effect']\`:  only works for blink3 & fixed in \`effect\`. Values:
    - \`blink3\`
    - \`fixed\`
    - \`blinkgreen\`
    - \`blinkblue\`

* \`identify['color']\`:  only works for blink3 & fixed in \`effect\`. Values:
    - \`default\`
    - \`red\`
    - \`green\`
    - \`blue\`
    - \`lightblue\`
    - \`yellow\`
    - \`pink\`
    - \`white\`

Example of MQTT message payload to Identify the device. This should be sent to \`zigbee2mqtt/FRIENDLY_NAME/set\`:

\`\`\`js
{
    "identify": {
    "effect": "blink3",
    "color": "white"
    }
}
\`\`\`
`,
    },
    {
        model: 'HG06335',
        note: `
### Pairing
Factory reset the motion detector by holding the reset button (little hole on the right side, **not the button on the back**) for 5 seconds.
When you let go of the button an LED should blink.
After resetting the motion detector will automatically connect.
While pairing, keep the motion detector close to the adapter.
Press the tamper button a few times while pairing to keep the sensor a wake.

### Tamper
If the button on the back is pressed (i.e. the device is on the mounting plate), the value of \`tamper\` equals \`true\` otherwise it is \`false\`.
`,
    },
    {
        model: 'HG06338',
        note: `
### Pairing
Factory reset the 3 gang switch by holding the power button for 5 seconds.
When you let go of the button an LED should blink.
After resetting the 3 gang switch will automatically connect.

While pairing, keep the 3 gang switch close to the adapter.

### Node-Red
How to use the connector strip with Node-Red: Use the "command node" of the node-red-contrib-zigbee-package. Drop-down-lists are helping you with the configuration.
`,
    },
    {
        model: 'BAC-002-ALZB',
        note: `
### Pairing
Switch the thermostat off. Press and hold the temperature down button for +- 8 seconds to enable the pairing mode (display lights up and a WiFi-like icon is blinking). After successful interview turn the thermostat on again.

### Stop message flooding
This unit has a bug that makes it send multiple messages when updating. To stop this from flooding your MQTT Queues, please add the following to your \`configuration.yaml\` file:

{% raw %}
devices:
  '0x12345678':
    friendly_name: thermostat
    debounce: 1
{% endraw %}
`,
    },
    {
        model: 'HG06336',
        note: `
### Pairing
Use the pin tool (or any SIM removal tool) to hold down the reset pinhole for 5 seconds.
This is the side with a single hole (other side has 3) When you let go, the led will start flashing green.
After setting pair mode the sensor will automatically connect.
While pairing, keep the sensor close to the adapter.

### Meaning of tamper
The tamper is triggered to \`true\` when a small black button underneath the battery compartment is no longer pressed down by the battery lid.
`,
    },
    {
        model: 'E1525/E1745',
        note: `
### Pairing
Pair the sensor to Zigbee2MQTT by pressing the pair button 4 times in a row.
The red light on the front side should flash a few times and then turn off.
After a few seconds it turns back on and pulsate. When connected, the light turns off.

### Binding
The E1745 can be bound to groups using [binding](../information/binding).

## Detection cooldown (E1745 version)
This device will pause detection of presence for approximately 1 min 37 sec after detection. In other words; with continuous detection, every 1:37 a new publish (occupancy: true) will be done.
Cooldown of detection is 3 min. In other words; 3 min after last published detection (and trigger no longer present) occupancy will be published as false.

The cooldown detection timeout can be overridden by using the following device config option:
* \`occupancy_timeout\`: Timeout (in seconds) after which the \`occupancy: false\` message is sent.

Please note that setting \`occupancy_timeout\` lower than the device re-trigger time (around 1m30s) means \`occupancy: true\` will only be sent again when motion is detected after the re-trigger time.
This allows an external automation system to observe the detection cycles (detection -> idle -> detection -> idle) and implement more complex automation flows.
For simple automations, setting \`occupancy_timeout\` greater than the re-trigger time is probably desired.
`,
    },
    {
        model: 'E1743',
        note: `
### Pairing
Pair the switch to Zigbee2MQTT by pressing the pair button (found under the back cover next to the battery)
4 times in a row. The red light on the front side should flash a few times and then turn off
(it's more visible to see the light from the back). After a few seconds it turns back on and pulsate.
When connected, the light turns off.
`,
    },
    {
        model: 'E1743',
        note: `
### Binding
The E1743 can be bound to groups using [binding](../information/binding).
It can only be bound to 1 group at a time and cannot be bound to a device.

By default this remote is bound to the default bind group which you first have to unbind it from.
This can be done by sending to \`zigbee2mqtt/bridge/request/device/unbind\` payload \`{"from": "DEVICE_FRIENDLY_NAME", "to": "default_bind_group"}\`.
Right before executing the commands make sure to wake up the device by pressing a button on it.
`,
    },
    {
        model: 'E1743',
        note: `
### Battery Replacement
After replacing the battery, reporting of battery % may not work. If you experience this issue, remove the device and join it again.
`,
    },
    {
        model: 'ZYCT-202',
        note: `
### Pairing
Factory reset the remote by holding the 0 (off) button for +-20 seconds.
To establish a connection keep the remote within 2 meters from the hub.
Press and hold the smart group button (button with two bulbs) and wait until the lights, below the channels, flash.
`,
    },
    {
        model: 'ZCTS-808',
        note: `
### Pairing
When pairing the sensor with Zigbee2MQTT,
keep opening and closing the sensor (pull/insert the sensor parts next to each other) for 10 seconds,
otherwise device will fall asleep before it gets fully configured and will not send state changes.
`,
    },
    {
        model: 'PP-WHT-US',
        note: `
### Pairing
Additional steps are required because the Peanut Smart Plug does not provide a \`modelId\` in its database entry,
and thus Zigbee2MQTT cannot identify the product or how to handle it.

Reset the device and initiate pairing mode by holding the pairing button
(the small button next to the on/off button) for ten seconds, releasing the button,
and unplugging the device.
When plugged back in, the front LED will be blinking red and ready to receive a pairing request.
When paired successfully, the red LED on the plug will stop blinking.

After pairing, you must stop Zigbee2MQTT and manually edit the Zigbee2MQTT \`database.db\` file with a
text editor (note that the file may be owned by root).
Find each line where the Peanut Smart Plug is listed (look for "SecuriFi Ltd." in the \`ManufName\` field)
and **add** \`"modelId":"PP-WHT-US",\` between two existing fields.

*For example,* change \`..."manufId":4098,"manufName":"Securifi Ltd....\`
to \`..."manufId":4098,"modelId":"PP-WHT-US","manufName":"Securifi Ltd....\`
on each line for the device.

Save the file and restart Zigbee2MQTT.
`,
    },
    {
        vendor: 'Gledopto',
        note: `
### Pairing
1. Switch on your device.
2. Now switch off and on within 2 seconds.
3. Repeat off/on four times.
4. Reset is done when the device is switched on in the fifth time and the light stays on after blinking 4 times
`,
    },
    {
        model: '07047L',
        note: `
### Pairing
Pair the sensor to Zigbee2MQTT by pressing the pair button 3 seconds.

### Detection cooldown
Cooldown of detection is around 1 min. In other words; 1 min after last published detection (and trigger no longer present) occupancy will be published as false.
`,
    },
    {
        model: 'Z809A',
        note: `
### Pairing
Factory reset by:
- Press and hold the Binding Key for 15 seconds. The network indicator will flash green 3 times
(at the 3rd, the 10th, and the 15th second).
- After releasing the Binding Key, press the Switch Key within 2 seconds. The network indicator
will rapidly flash green.
- After fast flashes, Z809A will reboot, and the restore is completed. The socket will automatically connect now.
`,
    },
    {
        model: ['4713407', '404001'],
        note: `
### Pairing
1. Turn bulb on.
2. Turn power off for 2 seconds.
3. Turn power on for 1 second.
4. Repeat turning off and turning on six times.
5. Bulb will flash and is now reset.
`,
    },
    {
        model: 'EMIZB-132',
        note: `
### Configuring interface mode
In order to get measurements, after pairing the device you need to configure the interface mode.

To do this send to \`zigbee2mqtt/FRIENDLY_NAME/set\` payload \`{"interface_mode": "INTERFACE_MODE"}\`.

Possible values for \`INTERFACE_MODE\` are:

| Value | Description |
| - | - |
| \`norwegian_han\` | Norwegian HAN  |
| \`norwegian_han_extra_load\` | Norwegian HAN – Enable extra load. This is need to enable Adion meter communication |
| \`aidon_meter\` | Aidon Meter supporting Norwegian HAN HW interface. SW protocol is Aidon Manufacture Specific |
| \`kaifa_and_kamstrup\` | Kaifa meter and Kamstrup meters running old firmware |

Example of payload: \`{"interface_mode": "norwegian_han_extra_load"}\`

### Not getting measurements
In case you are not getting any measurements, it could be that your firmware is too old. You can ask Wattle for a replacement.

Related issues:
- https://github.com/Koenkk/zigbee-herdsman-converters/issues/974#issuecomment-590450035
- https://github.com/dresden-elektronik/deconz-rest-plugin/issues/2127#issuecomment-587949747
`,
    },
    {
        model: 'PLUG EDP RE:DY',
        note: `
### Pairing
Factory reset the plug (hold the switch button for >10sec). After resetting the switch will automatically connect.
`,
    },
    {
        model: 'AC0251100NJ/AC0251600NJ/AC0251700NJ',
        note: `
### Pairing
For the OSRAM Smart+ Switch Mini (AC0251100NJ/AC0251600NJ/AC0251700NJ) hold the Middle and Arrow Down Buttons for 10 Seconds
to Reset the Device. Hold the Middle and Arrow Up Buttons for 3 Seconds to connect.
If the Switch is connected hold Middle and Arrow Up Buttons for 3 Seconds to disconnect.
`,
    },
    {
        model: 'AB3257001NJ',
        note: `
### Pairing
For the OSRAM Smart+ plug (AB3257001NJ) hold the on/off button until your hear a click (+- 10 seconds).

### Caveats
Does not pass every attribute when acting as the routing parent for some end devices which send messages right after each other.

See also [#2274](https://github.com/Koenkk/zigbee2mqtt/issues/2274), note that the no occupancy for the Xiaomi RTCGQ11LM has been fixed.
`,
    },
    {
        model: 'R7060',
        note: `
### Pairing
Hold the red off button pressed for 5 seconds (until the blue LED blinks).
After this the device will reset and try to join a network.
`,
    },
    {
        model: ['ZLED-2709'],
        note: `
### Pairing
After a factory reset the bulb will automatically connect.

Power on and off the bulb 5 times (screw/unscrew the bulb if you don't have a physical switch)
to perform a factory reset.
As a reset confirmation the bulb will blink 4 times.
`,
    },
    {
        model: ['LED1623G12'],
        note: `
### Known Issue with sending effects with brightness 1
There is a [known issue](https://github.com/Koenkk/zigbee2mqtt/issues/5237) with the bulb brightness incorrectly returning to max after an effect is sent. This only occurs if \`brightness\` is set to 2> and off, then turned on with \`brightness: 1\`. Once the effect has finished the bulb will report as being \`brightness: 1\` however it outputs max brightness. Workarounds are to use \`brightness: 2\` and above or turn on without \`brightness\` then send the \`brightness: 1\` in another command. This behaviour is confirmed present in the IKEA TRADFRI firmware v1.2.214.
`,
    },
    {
        model: [
            '4058075816718', 'AA69697', 'AC03645', 'AC03642', 'AA70155', 'AA68199', 'AB32840', '4058075816794',
            'AC03641', '4052899926158', 'AB401130055', 'AB35996', 'AC08562', 'AC03648',
        ],
        /* eslint-disable */
        note: `
### Pairing
Follow instruction from [Manual reset](http://belkin.force.com/Articles/articles/en_US/Troubleshooting_and_Tutorials/Resetting-the-OSRAM-LIGHTIFY-Tunable-White-60-Bulb#a).
After resetting the bulb will automatically connect.
`,
        /* eslint-enable */
    },
    {
        model: ['HALIGHTDIMWWE27', 'HALIGHTDIMWWB22'],
        /* eslint-disable */
        note: `
### Pairing
Follow instructions from
[How do I reset my Hive Active Light?](https://www.hivehome.com/ca/support/Help_installing_Hive/HIH_Hive_Active_Light/How-do-I-reset-my-Hive-Active-Light). After resetting the bulb will automatically connect.
`,
        /* eslint-enable */
    },
    {
        model: ['7199960PH', '7299760PH'],
        note: `
### Pairing
Philips LivingColors IRIS and Philips LivingColors Bloom Devices that comes with
Philips (HUE) Remote Gen 2 (Touch Wheel) or Gen 3 (Round Click Wheel) can be paired via Zigbee.
Devices with Gen 1 Remote don't use Zigbee and can not be paired.
The Philips LivingColors Remote can not be paired via Zigbee because it only support ZigBee Light Link (ZLL).

To Pair hold Button ON and Bottom Left Key (Favorite 1) on the Remote in Front of the Device until
the Device Light blinks and lights Orange. If connection was successful the Device Light will light Green.

**WARNING**: If you pair your Device to a Zigbee Network which is not using a ZLL Channel
you can't reset the Device with the Philips LivingColors Remote Gen 3.
The Gen 3 Remote will only try ZLL Channels to find the Device! Maybe it's possible to reset
the Device with a Philips LivingColors Remote Gen 2 as it should try all Zigbee Channels to find the Device.

With IKEA Tradfri Remote Control it can maybe resetted it this case, see [TRADFRI remote control](#tradfri-remote-control)

[Philips LivingColors Bloom Manual](https://www.download.p4c.philips.com/files/7/7099760pu/7099760pu_dfu_eng.pdf)

[Philips LivingColors Iris Manual](https://www.download.p4c.philips.com/files/7/7099930ph/7099930ph_dfu_eng.pdf)
`,
    },
    {
        vendor: 'Philips',
        notModel: ['324131092621', '929002398602', '929002398602'],
        exposes: (exposes) => exposes.find((e) => e.type === 'light' && e.features.find((f) => f.name === 'brightness')),
        note: `
### Pairing
Factory resetting a Hue bulb can be accomplished in 5 ways.
After resetting the bulb will automatically connect.

#### Touchlink factory reset
See [Touchlink](../information/touchlink)

#### Hue bridge
When the bulb is still connected to the Hue bridge, you can simply factory reset the bulb
by removing it from the bridge via the Hue app. Orphaned bulbs (configured to connect to a non-existing Zigbee network) can be adopted by a Hue bridge by entering the 6 character serial number in the Philips Hue app.

#### Hue dimmer switch
With [one](324131092621) of the [two](929002398602) Hue Dimmer switches it is possible to put the bulbs into a factory reset.

1. Power-supply the bulb
2. Bring the dimmer switch next to the bulb, as close as possible
3. Hold the I/On and 0/Off button pressed simultaneously for 10 to 12 seconds until…
4. The bulb flashes a couple of times. Don't release the buttons until the last flash + a safety second
5. Switch the bulb off and on again: it can now be paired again.

See also the [VIDEO: Factory reset a Hue bulb with Hue dimmer switch](https://www.youtube.com/watch?v=qvlEAELiJKs).

#### Bluetooth (if supported by device)
Install the Philips Hue Bluetooth app for [Android](https://play.google.com/store/apps/details?id=com.signify.hue.blue)
or [iOS](https://apps.apple.com/us/app/philips-hue-bluetooth/id1456604186). You can use the app to trigger a factory reset on a paired light. (Note: The light will only be in bluetooth pairing
mode for a couple of minutes after power-on)

#### TRADFRI remote control
This may also be possible with the
[Tradfri Remote Control](https://www.ikea.com/us/en/images/products/tradfri-remote-control__0489469_PE623665_S4.JPG)
by pressing and holding the reset button on the bottom of the remote (next to the battery).
[This may not always work, even if the Hue bulb starts flashing](https://github.com/Koenkk/zigbee2mqtt/issues/296#issuecomment-416923751).
`,
    },
    {
        vendor: 'Philips',
        notModel: ['324131092621', '929002398602'],
        exposes: (exposes) => exposes.find((e) => e.type === 'light' || e.type === 'switch'),
        note: `
### Power-on behavior
This device allows you to set the power-on behavior. Note that this requires at least November/December '18 firmware update of the device.
Send a MQTT command to [\`zigbee2mqtt/FRIENDLY_NAME/set\`](https://www.zigbee2mqtt.io/information/mqtt_topics_and_message_structure.html#zigbee2mqttfriendly_nameset) with the following payload.

\`\`\`js
{
    "hue_power_on_behavior": "on",          // default, on, off, recover
    "hue_power_on_brightness": 125,         // same values as brightness
    "hue_power_on_color_temperature": 280,  // same values as color_temp
    "hue_power_on_color": "#0000FF",        // color in hex notation, e.g. #0000FF = blue

}
\`\`\`

Attribute Value | Description
----------------|-----------------------------------------------
default         | reset to factory default value
on              | bulb on after power loss with configured brightness, color-temperature and color
off             | bulb off after power loss
recover         | last running state after power loss

Rules:
- \`hue_power_on_behavior\` value always has to be provided
- \`hue_power_on_brightness\`, \`hue_power_on_color_temperature\` and \`hue_power_on_color\` can only be provided when \`hue_power_on_behavior\` = \`on\`
- \`hue_power_on_color_temperature\` and \`hue_power_on_color\` cannot be provided together, only one can be set
- When setting \`hue_power_on_behavior\` = \`on\`, any not provided values will be reset to their factory defaults

Note: if \`hue_power_on_behavior\` is set to \`off\`, then the only way to turn the bulb on will be through a paired smart device (see pairing above). You will NOT be able to turn the bulb on by sequentially switching power on and off.
`,
    },
    {
        vendor: ['OSRAM', 'Sylvania', 'LEDVANCE'],
        notModel: [],
        exposes: (exposes) => exposes.find((e) => e.type === 'light' && e.features.find((f) => f.name === 'brightness')),
        note: `
### Set default power on/off transition
Various Osram/Sylvania LED support setting a default transition when turning a light on and off.

**TOPIC**: \`zigbee2mqtt/FRIENDLY_NAME/set\`
\`\`\`js
{
    "set_transition": 1
}
\`\`\`
**INFO**: Value is time in seconds (integer, float values are not supported)

### Remember current light state
Various Osram/Sylvania LED support remembering their current state in case of power loss, or if a light
is manually switched off then on. Lights will remember their respective attributes
(i.e. brightness, color, saturation, etc.).
**NOTE**: This must be executed every time you make changes to a light's attributes for it to then 'remember' it.

**TOPIC**: \`zigbee2mqtt/FRIENDLY_NAME/set\`
\`\`\`js
{
    "remember_state": true
}
\`\`\`
**INFO**: Value is true, false (boolean)
`,
    },
    {
        model: ['AIRAM-CTR.U'],
        note: `
### Pairing
Hold small reset button pressed (located under battery cover on the backside of remote) for 4
seconds and device will reset and will attempt to join network.
Keep clicking any button on the frontside of the device to keep device awake while pairing.
You should be clicking every two seconds until pairing is complete.

Device seems to join network also when it is paired directly to Airam bulb (which is joined to network already)
(https://www.zigbee2mqtt.io/devices/4713407.html) by keeping ON and DIM buttons pressed while holding remote
within 5 centimeters away from Airam bulb.
`,
    },
    {
        model: ['324131092621', '929002398602'],
        note: `
### Pairing
Factory reset the Hue dimmer switch by pressing and holding the setup button on the back for 10 seconds.

Restart the Hue dimmer switch by holding all 4 buttons of the Hue dimmer switch.
You can let go when the light on the front flashes red/green briefly.

#### Using the dimmer to reset a Hue light bulb

To use the Hue dimmer switch to factory reset a Hue light bulb see
[HOWTO: Factory reset a Hue bulb](https://www.youtube.com/watch?v=qvlEAELiJKs).
After resetting the bulb will automatically connect.
This method also works for Philips Hue Lightstrips.
Hue dimmer switch can also be used to factory reset Ikea Trådfri light bulbs using the same method described above.

### Binding
If you want to bind the dimmer to a (Hue) lamp you'll have to *[bind it to the lamp through MQTT](../information/binding.html)* and unbind it from the coordinator. Use the dimmer as source and a literal \`coordinator\` as target for that.

### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* \`multiple_press_timeout\`: Controls how long (in seconds) subsequent key presses may be apart and still count as one event. The default is 250ms (0.25).

### Troubleshooting

#### Resetting the device

- Method 1: Press all four buttons for 4 seconds. When the light turns green, release the buttons. The device will flash green and red alternatively after which it will reconnect to the network.
- Method 2: Use a needle or paperclip to press the reset button on the back for 10 seconds. The behavior is similar to method 1

#### Device refuses actions

If actions (e.g. applying zigbee2mqtt/bridge/request/device/remove to a dimmer) result in timeouts, perform a reset (see above) and apply the action right after the device announced itself in the network.

#### Device announces itself but the buttons don't work

The dimmer appears to be working normally and the logs in Zigbee2MQTT look good. However, nothing happens when a button is pressed (no light, no log message in Zigbee2MQTT). In this case:

- Reset the device
- Use zigbee2mqtt/bridge/request/device/remove to remove the device from the network (this should result in a "left the network" log message)
- Allow joining of new devices in Zigbee2MQTT
- Reset the device again
- Wait for it to pair again. The device should now be operational.
`,
    },
    {
        model: '7146060PH',
        note: `
For the 7146060PH (Philips Hue Go), **the power cord has to be connected**,
after the blinking light (**INSTEAD** of step four in the video),
press and keep holding the button on the bottom until the device is paired (+- 60 seconds).
While holding the button the Hue Go will give you a nice light show :smile:.
`,
    },
    {
        model: ['404000/404005/404012', '404006/404008/404004'],
        note: `
### Pairing
Turn the light bulb five times on and off. After turning it on the sixth time,
it will indicate with colors that the bulb is pairing.
`,
    },
    {
        model: ['MLI-404011'],
        note: `
### Pairing
Remove the battery cover and use the cover to press the button above the batteries.
Press and hold this button for 10-20 seconds and release the button.
After that the remote should show up as a paired device.

### Groups binding

This remote is able to deal with 4 ZigBee groups:

* group0 = All three leds lit (no support for \`on\`/\`off\` actions and scene activation)
* group1 = first led lit
* group2 = second led lit
* group3 = third let lit

You can direct bind each remote group with a different Zigbee group, however there is a caveat: the four Zigbee groups have to use **consecutive group ids**. When setting up the binding you will only need to bind group0 to the remote (using the frontend or [MQTT command](../information/binding.html)). The 3 consecutive groups will be bound to group1 to group3 automagically. Only the binding for group0 will be listed for the device within Zigbee2MQTT (\`genLevelCtrl\` and \`lightingColorCtrl\` clusters).

This means that you probably should carefully [define your groups id](../information/mqtt_topics_and_message_structure.html#zigbee2mqttbridgeconfigadd_group)  when creating them. When creating the binding you need to wake up the device. The most reliable way is to pull the battery, press any button to drain remaining power and insert it back right when sending the binding request to the remote. You do not need to bother with the default tint action groups (16388/16389/16390), they will be overwritten as soon as the binding was successful.

It is possible to bind to a device instead of a group. The device will be bound to group0.
In this case, group0 to group3 will not be usable.
`,
    },
    {
        model: ['E1524/E1810', 'E1812'],
        note: `
### Pairing
Pair the remote to Zigbee2MQTT by holding it close to the coordinator and
pressing the inside button, next to the CR2032 battery, 4 times.
The red light on the (front of the) remote will now flash a few times.

### Troubleshooting: no battery level
It may help to remove the battery for a few seconds and after that reconfigure it via [Configure](../information/mqtt_topics_and_message_structure.md#zigbee2mqttbridgeconfigure). Right before executing the Configure make sure to wake up the device by pressing a button on it.
`,
    },
    {
        model: ['LLKZMK11LM'],
        note: `
### Interlock
This option allows to inter connect the relays which will make sure that only one relay is on at a time. To do this publish to \`zigbee2mqtt/FRIENDLY_NAME/set\` payload \`{"interlock": true}\` or \`{"interlock": false}\`. By default this option is \`false\`.
`,
    },
    {
        model: ['E1744'],
        note: `
### Pairing
Press the button on the device 4 times (until the red light turns on).

### Binding
If you want to [bind](../information/binding.md) this remote directly to a group or light, bind cluster \`LevelCtrl\` only (**not** \`LevelCtrl\` and \`OnOff\`). If both clusters are bound, a click on the remote toggles the bound group or light twice, thus neither turning it on or off. Cluster-specific binding is most easily done in the [frontend](../information/frontend.md).
`,
    },
    {
        model: ['HG06106A', 'HG06106B', 'HG06106C', 'HG06492A', 'HG06492B', 'HG06492C'],
        note: `
### Pairing
Factory reset the light bulb.
After resetting the bulb will automatically connect.

One option that might work is to use (very) short “on’s” and a little bit longer “off’s”, where you kill the light as soon as the bulb shows signs of turning on.
Start with bulb on, then off, and then 3 “on’s”, wait in the 3rd ON state.
Alternatively, start with the bulb on, and then repeat the off on sequence as above, but wait 2-3 seconds in each state (on and off).
When in pairing state, the bulb will flash.
`,
    },
    {
        model: ['HG06337'],
        note: `
### Pairing
Perform a factory reset by holding down the switch on the plug continuously for 5 seconds.
The LED will start blinking and the device will enter pairing mode.
`,
    },
    {
        model: ['LED1624G9'],
        note: `
### Light not turning off
When the light is in a transition (e.g. by sending \`{"brightness": 20, "transition": 5}\`) the bulb may not turn off via \`{"state": "OFF"}\`. You have to wait until the transition completes. This is a [bug](https://github.com/Koenkk/zigbee2mqtt/issues/4963#issuecomment-755456697) in the firmware of the light.
`,
    },
    {
        model: ['SM10ZW'],
        note: `
### Interview fails
Interview fails for \`modelId: 75a4bfe8ef9c4350830a25d13e3ab068\` because
\`ssIasZone:iasCieAddr\` can not be read or written, all messages go to the coordinator
even without proper enrolment. Device correctly reports open or closed status.
`,
    },
    {
        model: ['ICZB-KPD14S', 'ICZB-KPD18S', '067773'],
        note: `
### Legacy integration
By default (for backwards compatibility purposes) the legacy integration is enabled.
For new users it is recommended to **disable** this as it has several fundamental problems.
To disable the legacy integration add the following to your \`configuration.yaml\`:

{% raw %}
\`\`\`yaml
'0xabc457fffe679xyz':
    friendly_name: my_remote
    legacy: false
\`\`\`
{% endraw %}
`,
    },
    {
        model: ['E1744', 'ICTC-G-1'],
        note: `
### Legacy integration
By default (for backwards compatibility purposes) the legacy integration is enabled.
For new users it is recommended to **disable** this as it has several fundamental problems.
To disable the legacy integration add the following to your \`configuration.yaml\`:

{% raw %}
\`\`\`yaml
'0xabc457fffe679xyz':
    friendly_name: my_remote
    legacy: false
\`\`\`
{% endraw %}


The information below only applies to the legacy integration.

### Recommendation
This device sends multiple messages in short time period with the same payload. It's worth setting \`debounce\` option with \`debounce_ignore: - action\` to throttle them without losing unique action payloads.

E.g. (devices.yaml)

{% raw %}
\`\`\`yaml
'0xabc457fffe679xyz':
    friendly_name: my_remote
    debounce: 0.5
    debounce_ignore:
    - action
\`\`\`
{% endraw %}

To find optimal "smoothness" play with debounce time or if you need all unique rotation steps consider adding \`brightness\` to \`debounce_ignore\` option

{% raw %}
\`\`\`yaml
'0xabc457fffe679xyz':
    friendly_name: my_remote
    debounce: 0.1
    debounce_ignore:
    - action
    - brightness
\`\`\`
{% endraw %}
`,
    },
    {
        model: ['E1524/E1810'],
        note: `
### Binding
The remote can be bound to groups using [binding](../information/binding) since firmware 2.3.014.
It can only be bound to 1 group at a time. Use the group name as \`TARGET_DEVICE_FRIENDLY_NAME\`.
By default this remote is bound to the default bind group which you first have to unbind it from.
This can be done by sending to \`zigbee2mqtt/bridge/request/device/unbind\` payload \`{"from": "DEVICE_FRIENDLY_NAME", "to": "default_bind_group"}\`.
Wake up the device right before sending the commands by pressing a button on it.

Once bound to a group/bulb you will notice that the toggle and brightness buttons will work, but scenes/color temperature most likely won't work. This appears to be a missing piece of functionality ([discussion](https://github.com/Koenkk/zigbee2mqtt/issues/1232)), but via a workaround this can be managed;
1. Create a group with ID **65289** (name it ie. Trafri_scenes) and add the device(s) you control with the remote.
2. Add/store [scenes](https://www.zigbee2mqtt.io/information/scenes.html) for the created group
3. Once you click left/right on the remote, the scenes will be called sequentially (should there be a device off sync in scenes, hold the toggle button for 3 sec.).

#### Note
This device with old firmware < 2.3.014 does not support binding (limitation of the device). A workaround is to first
get the group ID where the remote is sending it's commands to and add bulbs to the
same group ([discussion](https://github.com/Koenkk/zigbee2mqtt/issues/782#issuecomment-514526256)).

1. Pair the IKEA TRADFRI remote control to Zigbee2MQTT.
2. Enable debug logging (log_level: debug) ([documentation](../information/configuration.md)).
3. You will get log output like this: \`10/3/2019, 9:28:02 AM - debug: Received Zigbee message from '0x90fd9ffffe90d778'
of type 'commandToggle' with data '{}' from endpoint 1 with groupID 57173\`.
4. Retrieve the group from the log output, which is \`57173\` in the above example.
5. Add this group to \`configuration.yaml\` and add your device (e.g.) bulb to this group.
([documentation](../information/groups.md)).
`,
    },
    {
        model: ['WXCJKG11LM', 'WXCJKG12LM', 'WXCJKG13LM'],
        note: `
### Pairing Instructions
Press and hold the button on the backside of the device until the blue light starts blinking, release it and the pairing should begin.

### Binding
By default the switch is bound to the coordinator but this device can also be used to directly control other lights and switches in the network.

First unbind it from the coordinator, then you can bind it to any other device or group. (see https://www.zigbee2mqtt.io/information/binding.html )

Now change the operation mode of the device, by default it is in \`event\` mode, but when binding we need to change it to \`command\` mode.
To do this send to \`zigbee2mqtt/FRIENDLY_NAME/set\` payload \`{"operation_mode": "command"}\`, right before doing this make sure to wakeup the device.

As the device is sleeping by default, you need to wake it up after sending the bind/unbind command by pressing the reset button once.
`,
    },
    {
        model: ['WXCJKG11LM', 'WXCJKG13LM'],
        note: `
When bound to a lamp, the behavior is as follows (for WXCJKG11LM Aqara Opple switch 1 band):
- left click: turn off
- right click: turn on
- left double click: light dim down (by steps of 33%)
- right double click: light dim up (by steps of 33%)
- long left click: warm white
- long right click: cold white
`,
    },
    {
        model: ['WXCJKG12LM'],
        note: `
Note that the WXCJKG12LM can only be bound to one device at a time.

When bound to a lamp, the behavior is as follows (for WXCJKG12LM Aqara Opple switch 2 band).
- up left click: turn off
- up right click: turn on
- down left click: light dim down (by steps of 33%)
- down right click: light dim up (by steps of 33%)
- down left double click: warm white
- down right double click: cold white

`,
    },
    {
        model: ['E1746'],
        note: `
### Pairing
Push the reset button of the device with a paperclip for 5 seconds.
While pairing the LED is flashing/dimming slowly. Once the pairing is finished, the LED stays on.

## Tips for monitoring this device
The device send a payload exactly 1 hours after the first pairing and a payload each exactly 4 hours after.
You can track the activity of this device by observing the lastseen value. If now () - lastseen > 4 h, then
your equipment has lost its connectivity
`,
    },
    {
        model: ['SP 120'],
        note: `
### Pairing
Factory reset by press & hold the power button for 5 seconds. The LED is then starting to blink during pairing process.

### Specs
- Rating: 220-240VAC, 10A, 50Hz
- Standby Power: <= 0.5W

### Manual
[Supplier's manual](https://www.innr.com/wp-content/uploads/2019/12/Installation-Manual-Smart-Plug-EU-version-SP-120.pdf)
`,
    },
    {
        model: ['TS0001'],
        note: `
### Pairing
Press and hold the button on the device for more then 10 seconds (until the led light starts blinking), release and wait.
`,
    },
    {
        model: ['TS0044'],
        note: `
### Pairing
To enter pairing mode hold bottom left button for 10 seconds until all 4 LEDs start flashing
`,
    },
    {
        model: ['F7C033'],
        note: `
### Pairing
[Resetting or Restoring the Wemo® Smart LED Bulb, F7C033](http://www.belkin.com/us/support-article?articleNum=116178)
`,
    },
    {
        model: ['BASICZBR3'],
        note: `
### Pairing
If brand new, when powered on it will attempt to pair to Zigbee2MQTT automatically. If not (or if has been paired before and needs to be re-paired) - press and hold the (relay) button on the top for about 5 seconds until the relay clicks and the red LED flashes several times. The device will then go into pairing mode and the blue LED will begin to flash. When connected, the blue LED will turn on solid. It should then be connected to Zigbee2MQTT. Pressing the button should activate the relay on/off as normal, and the red LED will be on/off.
`,
    },
    {
        model: ['RC 110'],
        note: `
### Pairing
Press and hold \`PROGRAM\` and \`-\` buttons until device LED blinks
`,
    },
    {
        model: ['ZNCJMB14LM'],
        note: `
### Pairing
On initial boot, the device will display a message "Waiting for accessing the network" permit join and the device will be added.

If the device is already part of a network, swipe down from the top of the screen to access the Settings panel (password may be required), navigate to "Advanced", navigate to "Access New Gateway" and confirm with "Ok".
Once confirmed, proceed as per initial boot.
`,
    },
    {
        model: ['E1603/E1702/E1708'],
        note: `
The TRADFRI control outlet also acts as a Zigbee router.
`,
    },
    {
        model: ['E1603/E1702/E1708'],
        note: `
### Pairing
To factory reset the TRADFRI control outlet, press and hold the reset button
(pinhole underneath the light, located at the top (bottom if UK) of the outlet) with a
paperclip until the white light starts fading. Hold onto the button for a
few more seconds, then release. After this, the outlet will automatically connect.
`,
    },
    {
        model: ['ICPSHC24-10EU-IL-1', 'ICPSHC24-30EU-IL-1'],
        note: `
### Pairing
To factory reset the TRADFRI drivers use a
small pin or paperclip to push the reset button once.
NB: you HAVE to put the device VERY close to the zigbee device, otherwise it won't be able to detect.
`,
    },
    {
        vendor: 'IKEA',
        exposes: (exposes) => exposes.find((e) => e.type === 'light' && e.features.find((f) => f.name === 'brightness')),
        notModel: ['E1524/E1810', 'ICPSHC24-10EU-IL-1', 'ICPSHC24-30EU-IL-1', 'ICTC-G-1', 'E1743'],
        note: `
### Pairing
Factory reset the light bulb ([video](https://www.youtube.com/watch?v=npxOrPxVfe0)).
After resetting the bulb will automatically connect.

While pairing, keep the bulb close to the coordinator (adapter).

What works is to use (very) short “on’s” and a little bit longer “off’s”, where you kill the light as soon as the bulb shows signs of turning on.
Start with bulb on, then off, and then 6 “on’s”, wait in the 6th ON state. (If you try play safe and go for 7 "on's" the reset sometimes fails.)
`,
    },
    {
        model: ['TS011F_socket_module'],
        note: `
### Pairing
Press the black pairing button on the relay module for 5 seconds until the indicator light flashes, then release the pairing button.
`,
    },
    {
        model: ['SSM-U01'],
        note: `
### Pairing
To reset the device and start pairing, press the button on the device for 8 seconds. The led will turn on in red and then start blinking in blue while the pairing process is active.
`,
    },
    {
        model: ['MCCGQ01LM'],
        note: `
### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). The reset button is the small hole in the side of the device - you will need a pin or needle to push into the small hole. After this the device will automatically join.
`,
    },
    {
        model: ['MFKZQ01LM'],
        note: `
### Pairing
Remove the back plate by using the included tool or a wedge to click it off.
Press and hold the reset button inside the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join. If this doesn't work, try with a single short button press.
`,
    },
    {
        model: [
            'WXKG01LM', 'WSDCGQ11LM', 'RTCGQ01LM', 'MCCGQ11LM', 'WXKG11LM', 'WXKG12LM', 'RTCGQ11LM',
            'WSDCGQ12LM',
        ],
        note: `
### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking).
After this the device will automatically join. If this doesn't work, try with a single short button press.
`,
    },
    {
        model: ['WSDCGQ01LM'],
        note: `
### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). The reset button is the small button on the 'top' of the device. After this the device will automatically join.
`,
    },
    {
        model: ['WXKG01LM'],
        note: `
### Binding
This device does **not** support binding.
`,
    },
    {
        model: ['TI0001'],
        note: `
### Important
These devices can only be used on channel 26.
These devices are locked to the manufacturer's network key (ext_pan_id).
Your configuration file [data/configuration.yaml](../information/configuration) must contain the following:

\`\`\`yaml
advanced:
  ext_pan_id: [33,117,141,25,0,75,18,0]
  channel: 26
\`\`\`

Therefore these devices may not co-existence with other Zigbee devices.
Maybe, you need to add a dedicated coordinator and create a new network for Livolo.
If you decided to create a new network, you should specify another 'pan_id'.

\`\`\`yaml
advanced:
  pan_id: 6756
\`\`\`
`,
    },
    {
        model: ['JTQJ-BF-01LM/BW', 'JTYJ-GD-01LM/BW'],
        note: `
### Pairing
Plug the device in and wait for around 5mins, while it performs its self-tests.
A successful self-test is indicated by couple of beeps and a steady green led.
Now the device is ready for pairing. To initiate pairing quickly press the button three times in a row.
`,
    },
    {
        model: ['SZ-ESW01-AU', 'SZ-ESW01'],
        note: `
### Pairing
With the device unplugged (or socket switched off), press and hold the pairing button for ~4 seconds. Continue holding the pairing button while plugging in the device (or switching the socket on) and continue to hold for 2 seconds. If pairing is successful the red LED will switch off for ~2 seconds, then flash.
`,
    },
    {
        model: ['ZBHT-1'],
        note: `
### Similar Devices
This device is older and seems to be similar to the netvox Z711 (and others).

### Pairing

#### Resetting the Device/Restore to Factory Defaults
1. Remove the battery to power off the device.
2. Press and hold the only button.
3. Re-install the batteries to power on the device
4. Release the button.
 * The LED will blink quickly, and the reset/restore is complete

#### Joining the Network
1. Remove battery from device
2. Enable permit-join on Zigbee2MQTT
3. Re-install battery in the device
 * The LED will flash 5 times to indicate success (no flashing means not successful)
4. After successfully joining, press and hold the only button for 3 seconds to broadcast the binding request.
5. The LED will flash once.
6. The LED flashes 5 times after the binding is completed; otherwise, it flashes 10 times.

#### Waking the Device
If the device is asleep (which is most of the time) and you need it to be awake for some reason, tap the only button on the device. The LED will flash 5 times and the device will be awake for a brief period.

### Status of Functions
1. Temperature monitoring - Works
2. Humidity monitoring - Works
3. Battery monitoring - untested.
 * In theory the device LED will flash ONCE if the voltage falls below 2.4V
 * In theory the device will send a low-power report to the ZigBee network if the voltage falls below 2.4V - no other battery reporting.
`,
    },
    {
        model: ['TS0601_cover'],
        note: `
### Configuration of device attributes
By publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` various device attributes can be configured:
\`\`\`json
{
    "options":{
        "reverse_direction": xxx
    }
}
\`\`\`

- **reverse_direction**: (\`true\`/\`false\`, default: \`false\`). Device can be configured to act in an opposite direction.
`,
    },
    {
        model: ['TERNCY-DC01'],
        note: `
### Pairing
Press and hold the reset button on the device for +- 5 seconds (until the green light starts blinking).
After this the device will automatically join.
`,
    },
    {
        model: ['4257050-RZHAC'],
        note: `
### Pairing

To pair the outlet, you need to hold the button as you plug it in. Release the button as soon as the LED light illuminates.
`,
    },
    {
        model: ['014G2461'],
        note: `
### Pairing
* Install the device on the valve. Insert the batteries (and M will display).
* Push the "o" button for 5 seconds to calibrate the valve motor.
* Push the "o" button for briefly to enter Pairing mode (can take upto 60 seconds).

To factory reset:
* Remove one battery.
* Press and hold "o" button.
* Insert battery and hold button pressed for about 3 seconds (display will flash all symbols).
`,
    },
    {
        model: ['421782'],
        note: `
### Pairing instructions

To pair this device follow these steps.

1. reset it, by pressing \`Brightness up\` and \`Off\` for 10 seconds.
2. pair it to Zigbee2MQTT by pressing \`brightness down\` and \`On\` for 3 seconds.

### Touchlink support

Once paired to Zigbee2MQTT, you can also touch link this device to some lights.
Hold it really close (5cm) to a light and press the middle button for 3 seconds.
Repeat for all lights you want to control.
`,
    },
    {
        model: ['500.67'],
        note: `
### Pairing
- Press W-key for 3 seconds
- Press Power On/Off Key for 5 seconds
- Press Power On/Off again for 3 seconds
Now the device should show up.

### Extended hue
The device gives extended hue values. Zigbee2MQTT calculates also the normal hue and provides both via MQTT.
- hue = extendedhue * 360 / 65536 % 360
`,
    },
    {
        model: ['902010/24'],
        note: `
### Activating the alert
Activating the alert is done by sending a JSON

{% raw %}
\`\`\`json
{"warning":{"duration":1,"mode":"burglar","strobe":false,"level":"high"}}
\`\`\`
{% endraw %}

This gives an audible alert with the LED flashing of around 2 seconds duration.

If you set strobe to true it'll not work. Level "low" does not give a sound, the other valid levels don't make a difference in loudness. There doesn't not seem to be a difference between different modes.

The device seems to be a little bit picky about switching off - set both "mode":"none" and "duration":1 - but to another value than before.
`,
    },
    {
        model: ['AC01353010G'],
        note: `
### Pairing
The following steps have to be taken to reset the device:

* remove the battery for at least 6 seconds
* press the button on the device and keep it pressed
* insert the battery
* release the button when the LED turns red
`,
    },
    {
        model: ['GL-C-008-2ID'],
        note: `
### 2ID handling
This device exposes the two specific endpoints \`rgb\` and \`cct\`. The command topics are \`zigbee2mqtt/<FRIENDLY_NAME>/rgb/set\`, and \`zigbee2mqtt/<FRIENDLY_NAME>/cct/set\`. Both [specific endpoints can be added to a group](../information/groups.md#adding-a-specific-endpoint). These endpoints are \`<FRIENDLY_NAME>/rgb\`, and \`<FRIENDLY_NAME>/cct\`.
`,
    },
    {
        model: ['TS0011', 'TS0012', 'TS0013'],
        note: `
### Rebrand
Also branded as Yagusmart in the UK, with a version that does not require a neutral wire.
`,
    },
    {
        model: ['TS0011'],
        note: `
### Binding and groups
Devices with \`manufacturerName\` \`_TYZB01_qeqvmvti\` do not support binding and groups ([link](https://github.com/Koenkk/zigbee2mqtt/issues/5225)).
`,
    },
    {
        model: ['E1E-G7F'],
        note: `
### Pairing
Factory reset the switch by pressing and holding the on and off buttons at the same time for at least 3 seconds. The indicator will start flashing, indicating a successful reset. The device will enter pairing mode for one minute. If the device is not connected in one minute, you must restart the pairing process.

If device won't go in to pairing mode, try installing a fresh battery.

### Long press action
The device will sometimes output a single push in addition to a long press. You can mitigate this by using the Debounce device configuration. Refer to *[How to use device type specific configuration](../information/configuration.md)*.
`,
    },
    {
        model: ['DIYRuZ_FreePad'],
        note: `
### Firmware
Open source firmware can be found here: [Github](https://github.com/diyruz/freepad)

### How to join:
#### If device in FN(factory new) state:
1. Press and hold button (1) for 2-3 seconds, until device start flashing led
2. Wait, in case of successful join, device will flash led 5 times
3. If join failed, device will flash led 3 times

#### If device in a network:
1. Hold button (1) for 10 seconds, this will reset device to FN(factory new) status
2. Go to step 1 for FN device

### How to use touch link
1. Bring you remote near to TL device
2. Hold button (2) for 5 seconds
TL functionality can work without connecting to network
`,
    },
    {
        model: ['2AJZ4KPKEY'],
        note: `
### Pairing
Press and hold the reset button in the side of the device for +- 5 seconds (until the blue light starts blinking).
You will need a needle or a pin to do it. After this the device will automatically join.
`,
    },
    {
        model: ['SWO-MOS1PA'],
        note: `
### Temperature not supported
Device is listed as having temperature detection. This feature is still being investigated.
`,
    },
    {
        model: ['SEA801-Zigbee/SEA802-Zigbee'],
        note: `
### Pairing

* SEA801-Zigbee (LCD display on the front, several buttons): Long hold the "AUTO/MANU" and "+" Button until the LCD display shows "----"
* SEA802-Z01 (white LED display on the side, rotary plate): Turn the rotary plate to decrease the temperature until the LED dots show "OF", then long press until the display changes to "--"
`,
    },
    {
        model: ['DJT11LM'],
        note: `
### Pairing
Press the reset button for about 5 seconds. The LED lights up 3 times.
Then press the button again every 2 seconds (maximum 20 times).

*NOTE: When you fail to pair a device, try replacing the battery, this could solve the problem.*

### Meaning of \`strength\` value
The \`strength\` value, which is reported every 300 seconds after vibration is detected, is the max strength measured during a period of 300 second.
`,
    },
    {
        model: ['WXKG03LM_rev1', 'WXKG03LM_rev2', 'WXKG06LM', 'WXKG02LM_rev1', 'WXKG02LM_rev2', 'QBKG04LM', 'QBKG11LM', 'QBKG03LM', 'QBKG12LM', 'ZNCZ02LM', 'QBKG25LM', 'QBKG22LM', 'QBKG24LM'],
        note: `
### Pairing
Press and hold the button on the device for +- 10 seconds
(until the blue light starts blinking and stops blinking), release and wait.

You may have to unpair the switch from an existing coordinator before the pairing process will start.
If you can't do this, try to remove battery (if it has one), push the button (to completely discharge device), place the battery back and try pairing again.
`,
    },
    {
        model: ['GWRJN5169'],
        note: `
### Firmware
Zigbee Router for __Xiaomi DGNWG05LM__ and __Aqara ZHWG11LM__ gateways.

Open source firmware can be found here: [Github](https://github.com/igo-r/Lumi-Router-JN5169)
`,
    },
    {
        model: ['9290012607', '9290019758'],
        note: `
### Pairing
To initiate setup mode, press and hold the setup button on the rear of the device for +- 5 seconds until the setup light blinks red. Then press and hold the setup button again until the light starts blinking orange. It is now in pairing mode. When paired, the light blinks green.

Please note that the setup light is below the main sensor
(as opposed to the obvious indicator above the main sensor).

This specific device has been reported to have issues repairing to a Zigbee network after upgrading from a CC2531 to a CC2652 controller (Zigbee 1.2 to 3.0). (Re)pairing may only work after pairing the device to another network and channel first (has been tested with a Philips Hue 2.0 hub in this instance) before pairing it back to the Zigbee2MQTT network again.
`,
    },
    {
        model: [
            'WXKG01LM', 'WSDCGQ11LM', 'RTCGQ01LM', 'MCCGQ11LM', 'WXKG11LM', 'WXKG12LM', 'RTCGQ11LM',
            'MFKZQ01LM', 'WSDCGQ12LM', 'MCCGQ01LM', 'DJT11LM', 'WSDCGQ01LM',
        ],
        note: `
### Troubleshooting: device stops sending messages/disconnects from network
Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network.
Most of the times this happens because of the following reasons:
- Device has a weak signal, you can see the signal quality in the published messages as \`linkquality\`. A linkquality < 20 is considered weak.
- Low battery voltage, this can even happen when the battery still appears full. Try a different battery.
- The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, OSRAM, Sylvania, SmartThings, Securifi.

More detailed information about this can be found [here](https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623).
`,
    },
    {
        vendor: 'Innr',
        exposes: (exposes) => exposes.find((e) => e.type === 'light' && e.features.find((f) => f.name === 'brightness')),
        note: `
### Pairing
Factory reset the light bulb ([video](https://www.youtube.com/watch?v=4zkpZSv84H4)).
`,
    },
    {
        model: ['AV2010/22'],
        deviceTypeSpecificConfiguration: true,
        note: `
* \`occupancy_timeout\`: Timeout (in seconds) after which the \`occupancy: false\` message is sent.
If not set, the timeout is \`90\` seconds.
When set to \`0\` no \`occupancy: false\` is sent.
`,
    },
    {
        model: ['WXKG01LM'],
        deviceTypeSpecificConfiguration: true,
        note: `
* \`hold_timeout\`: The WXKG01LM only reports a button press and release.
By default, Zigbee2MQTT publishes a \`hold\` action when there is at
least 1000 ms between both events. It could be that due to
delays in the network the release message is received late. This causes a single
click to be identified as a \`hold\` action. If you are experiencing this you can try
experimenting with this option (e.g. \`hold_timeout: 2000\`).
* \`hold_timeout_expire\`: Sometimes it happens that the button does not send a release. To avoid problems Zigbee2MQTT expires the \`hold\` leading to no \`release\` being send. The default timeout is 4000 ms, you can increase it with this option.
`,
    },
    {
        model: ['TYZS1L'],
        note: `
### Limitations
This device has various limitations:
- Changing brightness is not supported
- On/off and color transition is not supported
- Color can only be set via hue/saturation, example payload \`{"color":{"h": 360, "s": 100}}\`.
`,
    },

    // Device specific configuration
    {
        exposes: (exposes) => exposes.find((e) => e.type === 'cover' && e.features.find((f) => f.name === 'position')),
        notModel: ['SV01', 'SV02'],
        deviceTypeSpecificConfiguration: true,
        note: `
* \`invert_cover\`: By default the position/tilt values mean: open = 100, closed = 0. This can be inverted by setting this option to true (so open = 0, close = 100).
`,
    },
    {
        model: [
            'WXKG01LM', 'WXKG11LM', 'WXKG12LM', 'WXKG03LM_rev1', 'WXKG03LM_rev2', 'WXKG06LM', 'WXKG02LM_rev1', 'WXKG02LM_rev2', 'QBKG04LM', 'QBKG11LM',
            'QBKG03LM', 'QBKG12LM', 'WXKG07LM', 'QBKG21LM', 'QBKG22LM', 'E1743', 'E1766', 'ptvo.switch',
            'DIYRuZ_R8_8', 'HGZB-1S', 'HGZB-02S', 'HGZB-045', 'IM6001-BTP01', 'AV2010/34', 'HS1EB/HS1EB-E',
            'AIRAM-CTR.U', 'ICZB-KPD14S', 'ICZB-KPD18S', 'N2G-SP', 'SR-ZG9001K12-DIM-Z4',
            'MEAZON_BIZY_PLUG', 'MEAZON_DINRAIL', '2AJZ4KPKEY', 'TERNCY-PP01', 'TERNCY-SD01',
            'ICZB-KPD14S', 'ICZB-KPD18S', '067773', 'E1744', 'ICTC-G-1', 'MFKZQ01LM', '07046L', 'SWO-KEF1PA',
            'QBKG25LM', 'TS0218', 'DNCKATSW002', 'DNCKATSW003', 'DNCKATSW004', 'AIRAM-CTR.U', '4058075816459',
            '73743', 'AC0251100NJ/AC0251600NJ/AC0251700NJ', 'WXCJKG13LM', 'WXCJKG12LM', 'WXCJKG11LM', '8718699693985', 'E1524/E1810',
            '6735/6736/6737', 'ZNMS13LM', 'ZNMS12LM', 'ZNMS11LM', 'InstaRemote', 'LZL4BWHL01', 'MLI-404011', 'HS1RC-N', 'HS1RC-EM',
            '81825', 'ZYCT-202', 'STS-PRS-251', 'Z3-1BRL', 'AV2010/32', 'U86KWF-ZPSJ', '1TST-EU', 'UK7004240',
            'RC-2000WH', '3157100', '014G2461', 'ST218', 'STZB402', 'SMT402', 'SMT402AD', 'TH1124ZB', 'TH1300ZB',
            'TH1500ZB', 'Zen-01-W', 'TH1400ZB', 'TH1123ZB', 'ZK03840', 'SPZB0001', 'WV704R0A0902', 'TERNCY-SD01', 'C4', 'HT-08', 'HT-10',
            '07703L', 'SEA801-Zigbee/SEA802-Zigbee', '6ARCZABZH', '324131092621', '929002398602',
        ],
        deviceTypeSpecificConfiguration: true,
        note: `
* \`legacy\`: Set to \`false\` to disable the legacy integration (highly recommended!) (default: true)
`,
    },
    {
        model: ['RTCGQ01LM'],
        note: `
### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*
`,
    },
    {
        exposes: (exposes) => exposes.find((e) => e.type === 'numeric' && e.name === 'illuminance'),
        notModel: ['RTCGQ11LM', 'GZCGQ01LM'],
        deviceTypeSpecificConfiguration: true,
        note: `
* \`illuminance_lux_precision\`: Controls the precision of \`illuminance_lux\` values, e.g. \`0\` or \`1\`; default \`1\`.
To control the precision based on the illuminance_lux value set it to e.g. \`{1000: 0, 100: 1}\`,
when illuminance_lux >= 1000 precision will be 0, when illuminance_lux >= 100 precision will be 1. Precision will take into affect with next report of device.
`,
    },
    {
        exposes: (exposes) => exposes.find((e) => e.type === 'numeric' && e.name === 'illuminance'),
        deviceTypeSpecificConfiguration: true,
        note: `
* \`illuminance_lux_calibration\`: Allows to manually calibrate illuminance values,
e.g. \`95\` would take 95% to the illuminance reported by the device; default \`100\`. Calibration will take into affect with next report of device.
`,
    },
    {
        exposes: (exposes) => exposes.find((e) => e.type === 'numeric' && e.name === 'temperature'),
        deviceTypeSpecificConfiguration: true,
        notModel: ['Zen-01-W'],
        note: `
* \`temperature_precision\`: Controls the precision of \`temperature\` values,
e.g. \`0\`, \`1\` or \`2\`; default \`2\`.
To control the precision based on the temperature value set it to e.g. \`{30: 0, 10: 1}\`,
when temperature >= 30 precision will be 0, when temperature >= 10 precision will be 1. Precision will take into affect with next report of device.
* \`temperature_calibration\`: Allows to manually calibrate temperature values,
e.g. \`1\` would add 1 degree to the temperature reported by the device; default \`0\`. Calibration will take into affect with next report of device.
`,
    },
    {
        model: ['GreenPower_On_Off_Switch', 'GreenPower_7'],
        note: `
### Green Power
This is a Zigbee Green Power device which allows it to be very energy efficient.
Messages from Green Power devices cannot be "understood" by normal Zigbee devices, therefore they need to be "translated" first.
Not all Zigbee devices can do this translation, currently the only devices known to do this are Philips Hue devices. This means that the Green Power device has to be in range of a Philips Hue device in order to use it.

Green Power devices don't support binding and are not included in network scans.

### Pairing Philips Hue Tap
This device requires your Zigbee network to run on channel 11, 15, 20 or 25. In order to pair it hold the corresponding button for that channel 10 seconds.

| Button (dots) | Channel |
|-|-|
| 1 | 11 |
| 2 | 15 |
| 3 | 20 |
| 4 | 25 |

### Pairing Friends of Hue switches (EnOcean PTM 216Z module based)
This device has 4 buttons: A0 (left-top), A1 (left-bottom), B0 (right-top), B1 (right-bottom). In case the module is integrated in a single rocker switch, you need to remove the caps to expose all buttons. A button can be pressed by holding the contact of that button and then push the energy bar.

To pair it hold the corresponding button for that channel for 7 seconds or more.

| Button | Channel |
|-|-|
| A0 | 15 |
| A1 | 20 |
| B0 | 11 |
| B1 | 25 |

Once the device is paired you need to confirm the channel. To do this press A1 and B0 together. Important: don't press any other buttons between this and the pairing.

In case you want to pair it to a different channel you have to factory reset the device. This can be done by pressing all buttons (A0, A1, B0 and B1) simultaneously for at least 7 seconds.

This device can work on any channel, not only 15, 20, 11 or 25. For this refer to the [EnOcean PTM 216Z manual chapter 5.3](https://www.enocean.com/en/products/enocean_modules_24ghz/ptm-216z/user-manual-pdf/)
`,
    },
    {
        exposes: (exposes) => exposes.find((e) => e.type === 'light' && e.features.find((ee) => ee.name.startsWith('color'))),
        deviceTypeSpecificConfiguration: true,
        note: `
* \`color_sync\`: Synchronizes the color values in the state, e.g. if the state contains \`color_temp\` and \`color.xy\` and
the \`color_temp\` is set, \`color.xy\` will be updated to match the \`color_temp\`. (default: \`true\`)
`,
    },
    {
        exposes: (exposes) => exposes.find((e) => e.type === 'numeric' && e.name === 'humidity'),
        notModel: ['SMT402', 'SMT402AD'],
        deviceTypeSpecificConfiguration: true,
        note: `
* \`humidity_precision\`: Controls the precision of \`humidity\` values, e.g. \`0\`, \`1\` or \`2\`; default \`2\`.
To control the precision based on the humidity value set it to e.g. \`{80: 0, 10: 1}\`,
when humidity >= 80 precision will be 0, when humidity >= 10 precision will be 1. Precision will take into affect with next report of device.
`,
    },
    {
        exposes: (exposes) => exposes.find((e) => e.type === 'numeric' && e.name === 'pressure'),
        deviceTypeSpecificConfiguration: true,
        note: `
* \`pressure_precision\`: Controls the precision of \`pressure\` values, e.g. \`0\` or \`1\`; default \`1\`.
To control the precision based on the pressure value set it to e.g. \`{1000: 0, 100: 1}\`,
when pressure >= 1000 precision will be 0, when pressure >= 100 precision will be 1. Precision will take into affect with next report of device.
* \`pressure_calibration\`: Allows to manually calibrate pressure values,
e.g. \`1\` would add 1 to the pressure reported by the device; default \`0\`. Calibration will take into affect with next report of device.
`,
    },
    {
        simulatedBrightness: true,
        deviceTypeSpecificConfiguration: true,
        note: `
* \`simulated_brightness\`: Set to \`true\` to simulate a \`brightness\` value (default: \`false\`).
If this device provides a \`brightness_move_up\` or \`brightness_move_down\` action it is possible to specify the update
interval and delta. This can be done by instead of specifying \`true\`:

\`\`\`yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
\`\`\`
`,
    },
    {
        exposes: (exposes) => exposes.find((e) => e.type === 'light'),
        notModel: ['324131092621', '929002398602', 'ICZB-KPD18S', 'ICZB-KPD14S', 'TYZS1L'],
        deviceTypeSpecificConfiguration: true,
        note: `
* \`transition\`: Controls the transition time (in seconds) of on/off, brightness,
color temperature (if applicable) and color (if applicable) changes. Defaults to \`0\` (no transition).
Note that this value is overridden if a \`transition\` value is present in the MQTT command payload.
`,
    },
    {
        model: ['9GED18000-009'],
        note: `
### Pin code usage
To retrieve the state, send a \`get\` message to the device topic (\`zigbee2mqtt/DEVICE_FRIENDLY_NAME/get\`) with the body \`{"pin_code":{"user":0}}\`. To set, sent a \`set\` message to the device topic (\`zigbee2mqtt/DEVICE_FRIENDLY_NAME/set\`) with the body \`{"pin_code":{"user":0,"pin_code":1234}}\`. To clear a code, call \`set\` but omit the value for \`pin_code\`.

### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* \`expose_pin\`: Allows to retrieve the \`pin_code\` value, rather than just user status (\`available\`/\`enabled\`), for \`pin_code\` endpoints (default: \`false\`)
`,
    },
    {
        model: ['89665'],
        note: `
### Manual
[Supplier's manual](https://www.elektroimportoren.no/docs/lib/89665-Brukerveiledning-5.pdf)

### Pairing
Factory resetting this Namron Lightsrip can be accomplished in several ways.
Please read instructions in attached link for the User Manual.
After resetting the bulb will automatically connect.

#### Touchlink
Please read instructions in attached link for the User Manual.
`,
    },
    {
        exposes: (exposes) => exposes.find((e) => e.type === 'light' && e.features.find((f) => f.name === 'color_hs' || f.name === 'color_xy')),
        note: `
* \`hue_correction\`: (optional) Corrects hue values based on a correction map for matching color
rendition to other lights. Provide a minimum of 2 data sets in the correction map. To build a map:
    * choose one of your other lights to be the color reference
    * send a sample color to both lights (reference and non-reference)
    * modify hue value for non-reference light until it color matches the reference light
    * take note of the in and out values, where
        * \`in\` is the hue value you sent to your reference light
        * \`out\` is the hue value you had to dial your non-reference light to
    * repeat with a few other sample colors (4-5 should suffice)

    **Example correction map:**
    \`\`\`yaml
    hue_correction:
        - in: 28
          out: 45
        - in: 89
          out: 109
        - in: 184
          out: 203
        - in: 334
          out: 318
    \`\`\`
`,
    },
    {
        model: ['JTQJ-BF-01LM/BW', 'JTYJ-GD-01LM/BW'],
        note: `
### Sensitivity
The sensitivity can be changed by publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\`
\`{"sensitivity": "SENSITIVITY"}\` where \`SENSITIVITY\` is one of the following
values: \`low\`, \`medium\`,  \`high\`.

### Self-test
A self-test can be trigged by publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\`
\`{"selftest": ""}\`.
If the selftest is executed successfully you will hear the device beep in 30 seconds.
`,
    },
    {
        model: ['DJT11LM'],
        note: `
### Sensitivity
The sensitivity can be changed by publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\`
\`{"sensitivity": "SENSITIVITY"}\` where \`SENSITIVITY\` is one of the following
values: \`low\`, \`medium\`,  \`high\`.

After setting the sensitivity you immediately have to start pressing the reset button with an interval of 1 second until you see Zigbee2MQTT publishing the new sensitivity to MQTT.
`,
    },
    {
        model: ['9290012607', '9290019758'],
        note: `
### Motion sensitivity
The motion sensitivity can be changed by publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\`
\`{"motion_sensitivity": "SENSITIVITY"}\` where \`SENSITIVITY\` is one of the following
values: \`low\`,  \`medium\`,  \`high\` (default).

### Occupancy timeout
Sets the sensors timeout between last motion detected and sensor reporting occupancy as false
\`\`\`js
{
    // Value >= 0,
    // 0 - 10: 10sec (min possible timeout)
    //   > 10: timeout in sec
    // (must be written to (default) endpoint 2)
    "occupancy_timeout": 0,
}
\`\`\`
`,
    },
    {
        model: ['MCCGQ11LM'],
        note: `
### Recommendation
If the contact is being made via a horizontal slide (e.g. the sensor is placed at the top of a sliding door), the sensor may provide three or more messages with conflicting states. To get around this issue, consider using the \`debounce\` option in your device specific configuration.

E.g. (devices.yaml)

{% raw %}
\`\`\`yaml
'0xabc457fffe679xyz':
    friendly_name: my_sensor
    debounce: 1
\`\`\`
{% endraw %}
`,
    },
    {
        model: ['170-33505'],
        note: `
### Pairing
To pair the socket outlet to your network, press the button at least 3 times within 6 seconds. Then the socket outlet will be in pairing modus for 5 minutes. The led will be blinking blue.
    `,
    },
    {
        model: ['CC2530.ROUTER'],
        note: `
### Pairing
At first boot it will automatically be in pairing mode and join your network.
To reset it into pairing mode power-cycle it three times as follows:

1) power on
2) wait 2sec
3) power off
4) repeat above steps 2 further times
5) power on and wait for it to join your network
    `,
    },
    {
        model: ['IM6001-MPP01'],
        note: `
### Pairing
When pairing, make sure to keep the sensor awake for 20 seconds by opening and closing the contact
every second.
    `,
    },
    {
        model: ['SA-003-Zigbee'],
        note: `
### Pairing
Reset by unplugging any devices plugged into the socket, hold the button down for 10 secs until the light flashes Green/Orange and the Socket switches on and off. pair within 60 secs
    `,
    },
    {
        model: ['SJCGQ11LM', 'SJCGQ12LM'],
        note: `
### Pairing
Press and hold water logo on the device for +- 5 seconds (you have to press quite hard) until the blue light blinks
three times, release the water logo (the blue light will blink once more) and wait.
    `,
    },
    {
        model: 'HS2WD-E',
        note: `
### Triggering the alarm
The alarm can be trigged by publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` message
\`{"warning": {"duration": 10, "mode": "emergency", "strobe": false}}\`.

Where:
- \`duration\`: the number of seconds the alarm will be on (max is 1800 seconds)
- \`mode\`: \`stop\` or \`emergency\`
- \`strobe\`: \`true\` or \`false\` will let the strobe flash once during the alarm
        `,
    },
    {
        model: 'STS-PRS-251',
        note: `
### Let the device beep.
\`\`\`json
{
    "beep": 5
}
\`\`\`
`,
    },
    {
        model: ['E1524/E1810'],
        note: `
### Toggle button
When clicking the middle (center) button on the remote it will send a \`{"click": "toggle"}\`, when holding it
it will **also** send a \`{"click": "toggle_hold"}\`. It is not possible to skip the \`toggle\` when the button is hold.
Also the remote won't send anything when the button is released.
See [link](https://github.com/Koenkk/zigbee2mqtt/issues/2077#issuecomment-538691885) for more details.
`,
    },
    {
        model: ['ZNCZ02LM', 'ZNCZ04LM', 'QBCZ11LM', 'QBKG25LM'],
        note: `
### Power outage memory
This option allows the device to restore the last on/off state when it's reconnected to power.
To set this option publish to \`zigbee2mqtt/FRIENDLY_NAME/set\` payload \`{"power_outage_memory": true}\` (or \`false\`).
Now toggle the plug/switch once with the button on it, from now on it will restore its state when reconnecting to power.
`,
    },
    {
        model: ['ZNCZ02LM'],
        note: `
### Voltage
Some versions of the plug provide voltage. This depends on the firmware on the device. Confirmed working are the ones with \`dateCode\` \`02-28-2017\` (can be checked in \`data/database.db\`). Note that Xiaomi doesn't provide firmware files, so the software cannot be downgraded/upgraded.
`,
    },
    {
        model: ['TS0601_thermostat'],
        note: `
### Pairing

While pairing, keep the valve close to the coordinator.

1. *Turn the display on*: Short press home (🏠).
2. *Enter settings*: Long press home (🏠) for 3sec.
3. *Select WiFi settings*: Press the plus button (➕) button 4 times to see the digital **\`5\`** on the right hand side and the blinking WiFi logo.
4. *Enter WiFi settings*: Press home (🏠) once again. Now only WiFi logo is showing without blinking.
5. *Enable pairing mode*: Long press home (🏠). WiFi logo is now blinking.
6. *Keep display on*: Touch home (🏠) every few seconds.

### Local temperature
If you'd like to force device to send local_temperature you can use this MQTT command:
* \`topic\`: zigbee2mqtt/FRIENDLY_NAME/set/local_temperature_calibration
* \`payload\`: YOUR_CURRENT_CALIBRATION_VALUE

YOUR_CURRENT_CALIBRATION_VALUE can be 0, but if you calibrated temperature for this device send current value.
After this command thermostat responds with two messages. One for calibration change confirmation, and other with current local_temperature.

### Controlling device specific features

- If all you need is to control on and off, you can set "force" with topic \`zigbee2mqtt/FRIENDLY_NAME/set\`. The payload values are:
  open -> fully opens valve and stays there
  close -> fully closes valve and stays there
  normal -> normal valve operation

    \`\`\`json
    {
        "force": "open"
    }
    \`\`\`

- Use topic \`zigbee2mqtt/FRIENDLY_NAME/set/schedule\` to set the schedule of the device with 6 timeslots on workdays or holidays (e.g. weekend). Example payload values are:

    \`\`\`json
    {
        "workdays":[
            {"hour":6,"minute":0,"temperature":19},
            {"hour":8,"minute":0,"temperature":20},
            {"hour":18,"minute":0,"temperature":21},
            {"hour":20,"minute":30,"temperature":20},
            {"hour":22,"minute":0,"temperature":19},
            {"hour":23,"minute":30,"temperature":15}
        ]
    }
    \`\`\`

    \`\`\`json
    {
        "holidays":[
            {"hour":6,"minute":0,"temperature":19},
            {"hour":8,"minute":0,"temperature":20},
            {"hour":18,"minute":0,"temperature":21},
            {"hour":20,"minute":30,"temperature":20},
            {"hour":22,"minute":0,"temperature":19},
            {"hour":23,"minute":30,"temperature":15}
        ]
    }
    \`\`\`
- You can set "week" schedule pattern with topic \`zigbee2mqtt/FRIENDLY_NAME/set\`. The payload values are:
  5+2 -> to be used when workdays for example are monday-friday and saturday & sunday are holidays
  6+1 -> to be used when workdays for example are monday-saturday and sunday is a holiday
  7 -> to be used when workdays schedule will be used for the whole week

    \`\`\`json
    {
        "week": "5+2"
    }
    \`\`\`

- You can set "boost time" with topic \`zigbee2mqtt/FRIENDLY_NAME/set\`. But be aware that it rounds the values down to multiple of 100.

    \`\`\`json
    {
        "boost_time": 200
    }
    \`\`\`
- You can set "comfort temperature" level on the device with topic \`zigbee2mqtt/FRIENDLY_NAME/set\`.

    \`\`\`json
    {
        "comfort_temperature": 21
    }
    \`\`\`
- You can set "eco temperature" level on the device with topic \`zigbee2mqtt/FRIENDLY_NAME/set\`.

    \`\`\`json
    {
        "eco_temperature": 17
    }
    \`\`\`
`,
    },
    {
        model: ['STS-PRS-251', 'STSS-PRES-001', '3450-L'],
        deviceTypeSpecificConfiguration: true,
        note: `
* \`presence_timeout\`: Timeout (in seconds) after which \`presence: false\` will be send when the device has not checked-in. By default 100 seconds, don't go lower then 30 seconds.
`,
    },
    {
        model: ['3400-D', 'XHK1-UE', 'XHK1-TC'],
        note: `
### Arming/Disarming from the server
To set arming mode publish the following payload to \`zigbee2mqtt/FRIENDLY_NAME/set\` topic:

\`\`\`js
{
    "arm_mode": {
        "mode": "arm_all_zones"
    }
}
\`\`\`
Valid \`mode\` values as per ZCL specifications are \`disarm\`, \`arm_day_zones\`, \`arm_night_zones\`, \`arm_all_zones\`, \`exit_delay\`, \`entry_delay\`, \`not_ready\`, \`in_alarm\`, \`arming_stay\`, \`arming_night\`, \`arming_away\`.
### Arming/Disarming from the keypad
When an attempt to set arm mode is done on the keypad, Zigbee2MQTT will publish the following payload to topic \`zigbee2mqtt/FRIENDLY_NAME\`:

\`\`\`js
{
    "action": "arm_all_zones", // This is the example
    "action_code": "123", // The code being entered
    "action_zone": 0, // The zone being armed (always 0)
    "action_transaction": 99 // The transaction number
}
\`\`\`

The automation server must validate the request and send a notification to the keypad, confirming or denying the request.

Do so by sending the following payload to \`zigbee2mqtt/FRIENDLY_NAME/set\`:

\`\`\`js
{
    "arm_mode": {
        "transaction": 99, // Transaction number (this must be the same as the keypad request \`action_transaction\`)
        "mode": "arm_all_zones" // Mode (this must be the same as the keypad request \`action\`)
    }
}
\`\`\`
Valid \`mode\` values are \`disarm\`, \`arm_day_zones\`, \`arm_night_zones\`, \`arm_all_zones\`, \`invalid_code\`, \`not_ready\`, \`already_disarmed\`

The automation server must follow the notification with an actual change to the correct arm mode. For the example above, the server should respond with \`exit_delay\`, count the elapsed time (e.g 30 secs), then change mode again to \`arm_all_zones\` (see "Arming/Disarming from the server" section above)
`,
    },
    {
        model: ['KEYPAD001'],
        note: `
### Arming/Disarming from the server
To set arming mode publish the following payload to \`zigbee2mqtt/FRIENDLY_NAME/set\` topic:

\`\`\`js
{
    "arm_mode": {
        "mode": "arm_all_zones"
    }
}
\`\`\`
Valid \`mode\` values as per ZCL specifications are \`disarm\`, \`arm_day_zones\`, \`arm_night_zones\`, \`arm_all_zones\`, \`exit_delay\`, \`entry_delay\`, \`not_ready\`, \`in_alarm\`, \`arming_stay\`, \`arming_night\`, \`arming_away\`.
### Arming/Disarming from the keypad
When an attempt to set arm mode is done on the keypad, Zigbee2MQTT will publish the following payload to topic \`zigbee2mqtt/FRIENDLY_NAME\`:

\`\`\`js
{
    "action": "arm_all_zones", // This is the example
    "action_code": "123", // The code being entered
    "action_zone": 0, // The zone being armed (always 0)
    "action_transaction": 99 // The transaction number
}
\`\`\`

The automation server must validate the request and send a notification to the keypad, confirming or denying the request.

Do so by sending the following payload to \`zigbee2mqtt/FRIENDLY_NAME/set\`:

\`\`\`js
{
    "arm_mode": {
        "transaction": 99, // Transaction number (this must be the same as the keypad request \`action_transaction\`)
        "mode": "arm_all_zones" // Mode (this must be the same as the keypad request \`action\`)
    }
}
\`\`\`
Valid \`mode\` values are \`disarm\`, \`arm_day_zones\`, \`arm_all_zones\`, \`invalid_code\`, \`not_ready\`, \`already_disarmed\`

The automation server must follow the notification with an actual change to the correct arm mode. For the example above, the server should respond with \`exit_delay\`, count the elapsed time (e.g 30 secs), then change mode again to \`arm_all_zones\` (see "Arming/Disarming from the server" section above)
`,
    },
    {
        model: ['QBKG25LM'],
        note: `
### Do not disturb mode
This option allows to turn off the indicator lights between 21:00 and 09:00.
To set this option publish to \`zigbee2mqtt/FRIENDLY_NAME/set\` payload \`{"do_not_disturb": true}\` (or \`false\`).
`,
    },
    {
        model: ['QBKG23LM'],
        note: `
### Pairing
Press and hold the button on the device for +- 10 seconds
(until the blue light starts blinking and stops blinking), release and wait.
`,
    },
    {
        model: ['067694'],
        note: `
### Binding
The remote supports [binding](../information/binding) for toggle action.
`,
    },
    {
        model: ['GL-G-001P'],
        note: `
### Remark
This devices is similar to GL-G-001Z, except that Zigbee routing should work for this one.
`,
    },
    {
        model: ['067774'],
        note: `
### Model numbers
Model number depends on the country and the colour of the devices. For example:
- French models are branded as Céliane with Netatmo, and models for this device depends on the colour, with the following numbers: "0 677 24", "0 677 74", and "0 677 94".
- Spanish models are branded as Legrand Valena Next, and models for this device depends on the colour, with the following numbers: "7 418 12", "7 418 42" and "7 418 72".

### Binding
The remote supports [binding](../information/binding) on each endpoint, so you can bind each button to a different device/group.
`,
    },
    {
        model: ['ZNCLDJ12LM', 'ZNCLDJ11LM'],
        note: `
### Configuration of device attributes
By publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` various device attributes can be configured:
\`\`\`json
{
    "options":{
        "reverse_direction": xxx,
        "hand_open": xxx,
        "reset_limits": xxx
    }
}
\`\`\`

- **reverse_direction**: (\`true\`/\`false\`, default: \`false\`). Device can be configured to act in an opposite direction.
- **hand_open**: (\`true\`/\`false\`, default: \`true\`). By default motor starts rotating when you pull the curtain by hand. You can disable this behaviour.
- **reset_limits**: (\`true\`/\`false\`, default: \`false\`). Reset the motor. When a path was cleared from obstacles.

You can send a subset of options, all options that won't be specified will be revered to default.

After changing \`reverse_direction\` you will need to fully open and fully close the curtain so the motor will re-detect edges. \`reverse_direction\` will get new state only after this recalibration.

### Lost configuration on long power outage
If motor is used without battery it may lose configuration after long power outage. In that case you need to perform end stops calibration again publishing the following command sequence with topic \`zigbee2mqtt/FRIENDLY_NAME/set\`:
1. \`{ "options": { "reset_limits": true } }\`
2. \`{ "state": "close" }\`
3. Wait here for curtain closure.
4. \`{ "state": "open" }\`

Home Assistant automation example:
\`\`\`yaml
- alias: Calibrate curtain
  trigger:
  - platform: homeassistant
    event: start
  action:
  - service: mqtt.publish
    data:
      topic: zigbee2mqtt/<FRIENDLY_NAME>/set
      payload: "{ 'options': { 'reset_limits': true } }"
  - service: cover.close_cover
    entity_id: cover.<COVER_ID>
  - delay:
      seconds: 13 #wait for closure complete
  - service: cover.open_cover
    entity_id: cover.<COVER_ID>
\`\`\`

Motor leaves calibration mode automatically after it reaches the both open and close curtain position limits. Calibration is mandatory for proper position reporting and ability to set intermediate positions.
`,
    },
    {
        vendor: 'Konke',
        note: `
### Important
Konke devices only work on Zigbee channel 15, 20 and 25.
`,
    },
    {
        model: ['PP-WHT-US'],
        note: `
### Power measurements
This device only support power measurements with an up-to-date firmware on the plug which can only be done
via the original hub. In case of an older firmware you will only see 0 values in the measurements.
Discussion: https://github.com/Koenkk/zigbee2mqtt/issues/809
`,
    },
    {
        model: ['SPZB0001'],
        note: `
### Pairing
If you are having trouble pairing, reset the device.
- Make sure the device is on auto or heat mode (not off). Hold boost, +, and - (a count from 1 to 10 will be on the display, it may be required for the thermostat to be dismounted from the radiator valve for this to work)
- release once 'rES' is displayed
- hit boost once after 'Jin' is displayed to start pairing to the ZigBee network
- once successfully paired 'Ins' should be displayed and the boost button should flash green. Make sure the thermostat is mounted on the radiator valve before pressing the boost button again.
- now the display should read 'Ada' indicating the adapting process is started which should mechanically calibrate the thermostat to the valve.

### Recommendation
This device sends multiple messages in short time period with the same payload. It’s worth setting debounce option to throttle them without losing unique action payloads.

E.g. (devices.yaml)


\`\`\`yaml
'0xabc457fffe679xyz':
    friendly_name: my_device
    debounce: 0.5
\`\`\`

### Controlling
*Current heating setpoint*
\`\`\`json
{
    "current_heating_setpoint": 21.5
}
\`\`\`
Current heating setpoint is also modified when occupied or unoccupied heating setpoint is set.

*System mode*

The system mode will be either \`off\`, \`auto\`, or \`heat\`. When set to \`heat\` the boost host flags will be set, when using \`off\` the window_open host flag will be set (and off will be displayed on the display).

*Eurotronic host flags*

The \`eurotronic_host_flags\` property contains an object with a true/false field for each host option.

\`\`\`json
{
  "eurotronic_host_flags": {
    "mirror_display": false,
    "boost": false,
    "window_open": false,
    "child_protection": true
  }
}
\`\`\`

You can toggle these flags by publishing a message to the \`set\` MQTT topic containing \`eurotronic_host_flags\`. e.g. enabling the display mirroring:
\`\`\`json
{"eurotronic_host_flags": {"mirror_display": true}}
\`\`\`

**Note that \`true\` or \`false\` do not have quotes aroud them!**

*Eurotronic system mode*

**This is deprecated in favor of eurotronic_host_flags, but will still work for now.**

This is a bitmap encoded field to set several device specific features. Please remind it is not possible to set single bits, always the full bitmap is written. Bit 0 doesn't seem to be writeable, it is always reported as set, so expect your written value + 1 to be reported.

Bit | Position
--- | --------
0 | unknown (default 1)
1 | Mirror display
2 | Boost
3 | unknown
4 | disable window open
5 | set window open (is reported as disable window open)
6 | unknown
7 | Child protection

Examples for eurotronic_system_mode:

Mirror display, reported as 3
\`\`\`json
{
    "eurotronic_system_mode": 2
}
\`\`\`
signal external window open, current_heating_setpoint will report "5", device display shows "OFF"
\`\`\`json
{
    "eurotronic_system_mode": 32
}
\`\`\`
signal external window close, will restore last current_heating_setpoint value
\`\`\`json
{
    "eurotronic_system_mode": 16
}
\`\`\`
Mirror display and set child protection.
\`\`\`json
{
    "eurotronic_system_mode": 66
}
\`\`\`

*Eurotronic error status*
\`\`\`json
{
    "eurotronic_error_status": 0
}
\`\`\`
This field is a readonly bitmap

Bit | Position
--- | --------
0 | reserved
1 | reserved
2 | reserved
3 | Valve adaption failed (E1)
4 | Valve movement too slow (E2)
5 | Valve not moving/blocked (E3)
6 | reserved
7 | reserved
`,
    },
    {
        model: ['J1'],
        note: `
### Configuring Inputs
In case the inputs need to be reconfigured (e.g. to use stationary switches instead of momentary ones or vice versa) this can be done in the same way as [it is being done for the ubisys C4](C4.html#configuring-inputs).

### Configuration of device attributes
By publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` various device attributes can be configured:
\`\`\`json
{
    "configure_j1": {
        "windowCoveringType": xxx,
        "configStatus": xxx,
        "installedOpenLimitLiftCm": xxx,
        "installedClosedLimitLiftCm": xxx,
        "installedOpenLimitTiltDdegree": xxx,
        "installedClosedLimitTiltDdegree": xxx,
        "turnaroundGuardTime": xxx,
        "liftToTiltTransitionSteps": xxx,
        "totalSteps": xxx,
        "liftToTiltTransitionSteps2": xxx,
        "totalSteps2": xxx,
        "additionalSteps": xxx,
        "inactivePowerThreshold": xxx,
        "startupSteps": xxx,
        "totalSteps": xxx,
        "totalSteps2": xxx
    }
}
\`\`\`
For further details on these attributes please take a look at the
[ubisys J1 technical reference manual](https://www.ubisys.de/wp-content/uploads/ubisys-j1-technical-reference.pdf),
chapter "7.2.5. Window Covering Cluster (Server)".

As an alternative to the attributes listed above, the following properties may be used for convenience:
* \`open_to_closed_s\`: corresponds to \`totalSteps\`, but takes value in seconds instead of in full AC waves
* \`closed_to_open_s\`: ditto for \`totalSteps2\`,
* \`lift_to_tilt_transition_ms\`: sets both \`liftToTiltTransitionSteps\` and \`liftToTiltTransitionSteps2\`
(they shall both be equal according to ubisys manual), but takes value in *milli*seconds instead of in full AC waves
* \`steps_per_second\`: factor to be used for conversion, defaults to 50 full AC waves per second if not provided

By publishing to \`zigbee2mqtt/FRIENDLY_NAME/get/configure_j1\` the values of the configuration attributes can
also be read back from the device and be printed to the normal Zigbee2MQTT log.

### Calibration
By publishing \`{"configure_j1": {"calibrate": 1}}\` to \`zigbee2mqtt/FRIENDLY_NAME/set\` the device can also be
calibrated after installation to support more advanced positioning features
(i.e. go to lift percentage / go to tilt percentage). This can be combined with setting attributes as shown above,
for example:
\`\`\`json
{
    "configure_j1": {
        "calibrate" : 1,
        "windowCoveringType": 8,
        "lift_to_tilt_transition_ms": 1600
    }
}
\`\`\`
The calibration procedure will move the shutter up and down several times and the current stage of the
calibration process will again be logged to the normal Zigbee2MQTT log for the user to get some feedback.
For details on the calibration procedure please again take a look at
the [ubisys J1 technical reference manual](https://www.ubisys.de/wp-content/uploads/ubisys-j1-technical-reference.pdf),
chapter "7.2.5.1. Calibration".
Please note that tilt transition steps cannot be determined automatically and must therefore be
configured manually for the device to also support "go to tilt percentage". One possibility to determine the
correct value is to take a video of the blinds moving from 0 to 100 percent tilt and then getting the exact timing
from the video by playing it slow motion.

### Home Assistant cover features when using [MQTT discovery](../integration/home_assistant)
The cover will be offered to Home Assistant as supporting lift and tilt by default, but for covers with reduced
functionality this can be passed along to Home Assistant by disabling some of the topics in \`configuration.yaml\`,
for example:
\`\`\`yaml
'0x001fee0000001234':
    friendly_name: cover_not_supporting_tilt
    homeassistant:
        tilt_command_topic: null
        tilt_status_topic: null
        tilt_status_template: null
'0x001fee0000001234':
    friendly_name: cover_supporting_neither_lift_nor_tilt
    homeassistant:
        set_position_topic: null
        set_position_template: null
        position_topic: null
        position_template: null
        tilt_command_topic: null
        tilt_status_topic: null
        tilt_status_template: null
\`\`\`
`,
    },
    {
        model: ['1TST-EU', 'AV2010/32'],
        note: `
### Controlling
Get local temperature in degrees Celsius (in the range 0x954d to 0x7fff, i.e. -273.15°C to 327.67 ºC)
\`\`\`json
{
    "local_temperature": ""
}
\`\`\`

Get or set offset added to/subtracted from the actual displayed room temperature to NUMBER, in steps of 0.1°C
\`\`\`js
{
    "local_temperature_calibration": "NUMBER"       // Possible values: –2.5 to +2.5; leave empty to read
}
\`\`\`

Set temperature display mode
\`\`\`js
{
    "temperature_display_mode": ""      // Possible values: 0 to set °C or 1 so set °F
}
\`\`\`

Get room occupancy. Specifies whether the heated/cooled space is occupied or not. If 1, the space is occupied,
else it is unoccupied.
\`\`\`json
{
    "thermostat_occupancy": ""
}
\`\`\`

Get or set occupied heating setpoint to NUMBER in degrees Celsius.
\`\`\`js
{
    "occupied_heating_setpoint": "NUMBER"       // Possible values: MinHeatSetpointLimit to  MaxHeatSetpointLimit, i.e. 7 to 30 by default; leave empty to read
}
\`\`\`

Get or set unoccupied heating setpoint to NUMBER in degrees Celsius
\`\`\`js
{
    "unoccupied_heating_setpoint": "NUMBER"       // Possible values: MinHeatSetpointLimit to MaxHeatSetpointLimit, i.e. 7 to 30 by default; leave empty to read
}
\`\`\`

Increase or decrease heating setpoint by NUMBER degrees in °C.
\`\`\`js
{
    "setpoint_raise_lower": {
    "mode": "0x00",       // Possible values: see table below
    "amount": "NUMBER"    // Possible values: signed 8-bit integer that specifies the amount the setpoint(s) are to be increased (or decreased) by, in steps of 0.1°C
    }
}
\`\`\`

Attribute Value | Description
----------------|-----------------------------------------------
0x00            | Heat (adjust Heat Setpoint)
0x01            | Cool (adjust Cool Setpoint)
0x02            | Both (adjust Heat Setpoint and Cool Setpoint)

Get or set whether the local temperature, outdoor temperature and occupancy are being sensed by internal sensors or remote networked sensors
\`\`\`js
{
    "remote_sensing": "NUMBER"      // Possible values: see table below; leave empty to read
}
\`\`\`

Bit Number | Description
-----------|-----------------------------------------
0          | 0 – local temperature sensed internally <br> 1 – local temperature sensed remotely
1          | 0 – outdoor temperature sensed internally <br> 1 – outdoor temperature sensed remotely
2          | 0 – occupancy sensed internally <br> 1 – occupancy sensed remotely

Get or set control sequence of operation
\`\`\`js
{
    "control_sequence_of_operation": "VALUE"       // Possible values: see table below; leave empty to read
}
\`\`\`

Values                                    | Possible Values of SystemMode
------------------------------------------|-------------------------------------
\`cooling only\`                            | Heat and Emergency are not possible
\`cooling with reheat\`                     | Heat and Emergency are not possible
\`heating only\`                            | Cool and precooling are not possible
\`heating with reheat\`                     | Cool and precooling are not possible
\`cooling and heating 4-pipes\`             | All modes are possible
\`cooling and heating 4-pipes with reheat\` | All modes are possible

Get or set system mode
\`\`\`js
{
    "system_mode": "VALUE"       // Possible values: see table below; leave empty to read
}
\`\`\`

Values              |
--------------------|
\`off\`               |
\`auto\`              |
\`cool\`              |
\`heat\`              |
\`emergency heating\` |
\`precooling\`        |
\`fan_only\`          |
\`dry\`               |
\`sleep\`             |

Get running state
\`\`\`js
{
    "running_state": ""       // leave empty when reading
}
\`\`\`
Possible values:

Values |
-------|
\`off\`  |
\`cool\` |
\`heat\` |

Valve position / heating demand
\`\`\`
{
    "pi_heating_demand": 0       // leave empty when reading
}
\`\`\`
Will report the valve position or heating amount depending on device. 0=min, 255=max

Get or set weekly schedule
\`\`\`js
{
    "weekly_schedule": {
    "TemperatureSetpointHold": "0x00",                // 0x00 setpoint hold off or 0x01 on
    "TemperatureSetpointHoldDuration": "0xffff",      // 0xffff to 0x05a0
    "ThermostatProgrammingOperationMode": "00xxxxxx"  //see table below
    }                                                   // leave empty to read
}
\`\`\`

Attribute Value | Description
----------------|---------------------------------------------------------------------------
0               | 0 – Simple/setpoint mode. This mode means the thermostat setpoint is altered only by manual up/down changes at the thermostat or remotely, not by internal schedule programming. <br> 1 – Schedule programming mode. This enables or disables any programmed weekly schedule configurations. <br> Note: It does not clear or delete previous weekly schedule programming configurations.
1               | 0 - Auto/recovery mode set to OFF <br> 1 – Auto/recovery mode set to ON
2               | 0 – Economy/EnergyStar mode set to OFF <br> 1 – Economy/EnergyStar mode set to ON

Clear weekly schedule
\`\`\`json
{
    "clear_weekly_schedule": ""
}
\`\`\`
<!--
Coming soon:
Get weekly schedule response
tz.thermostat_weekly_schedule_rsp
Get relay status log
tz.thermostat_relay_status_log
Get relay status log response
tz.thermostat_relay_status_log_rsp
-->
`,
    },
    {
        model: ['PM-S140-ZB', 'PM-S240-ZB', 'PM-S340-ZB'],
        note: `
### Routing functionality
This device does **not** act as a router.
`,
    },
    {
        model: ['LZL4BWHL01'],
        note: `
### Pairing
Factory reset the Lutron Connected Bulb Remote by pressing and holding the remote's top and bottom buttons for approximately 15 seconds. The light on the remote will blink rapidly to indicate that the remote has been reset.

After resetting the remote can be paired to a network by pressing and holding the top button for approximately 2 seconds.

#### Using the Connected Bulb Remote to reset a connected light bulb (Hue, Cree, GE Link)
Connected light bulbs can be reset with the Lutron Connected Bulb Remote by bringing the remote close (~3 inches) to the light bulb and pressing and holding the remote's 2nd and bottom buttons. The light bulb will flash and the remote's LED will turn on. Continue to hold both buttons until the remote's LED turns off.

After resetting the bulb will automatically attempt to join a network.

This method should work for Philips Hue bulbs, IKEA TRADFRI bulbs, GE Link bulbs, Connected Cree bulbs, and EcoSmart SMART bulbs.
`,
    },
    {
        model: 'HS1SA',
        note: `
### Pairing

Press the side button of the device with a paper clip for more than 2 seconds. The main button led will flash rapidly. Then make sure the device is awake during pairing phase or the configuration may fail. To ensure device is awake press the main button every 2 seconds until configuration is done in Zigbee2MQTT logs.

### Reset

If you have trouble pairing, the device can be reset by pressing the side button with a paper clip for 5 seconds. The led will flash (slower than in pairing mode) 6 times to confirm. After that you can retry the normal pairing procedure.

### Important
There are 3 versions of this device: Standalone, Zigbee and Z-wave. These are visually identical. Make sure to get the correct version that will work with Zigbee2MQTT:

Supported:
- **HS1SA-M : Zigbee**
- **HS1SA-N : Zigbee**
- **HS1SA-E : Zigbee 3.0**

Unsupported:
- HS1SA : Standalone
- HS1SA-Z : Z-wave

The product code should end in *-M* for the Zigbee version. The label inside the battery compartment should also show the Zigbee logo.
`,
    },
    {
        model: 'WV704R0A0902',
        note: `
### Device pairing/installation
To put the TRV in installation mode twist and hold the cap in the  **+** direction
until the central LED flashes green.  The device is ready for joining when:

- left/right LEDs flash red/blue
- central LED shows a solid orange

If central light shows a solid green, your TRV has been paired and is connected to the zigbee network.

If blinking with yellow, then your TRV is not paired or can't connect to the zigbee network. If Zigbee2MQTT is running and accepting new devices the valve should join the network. Sometimes you may need to twist and hold the cap in the **+** direction for 3 seconds before it will try to join.

**Note:** Zigbee2MQTT might not be able to correctly configure the TRV until you have [calibrated](#calibrate) it.

If the valve is not recognized, you can turn the boost button to positive and hold it; the red light starts to blink slowly. Release the button once the red light stops blinking.

### Calibrate
After installing the TRV twist the cap in the **-** direction and hold for
2 seconds until the blue LED lights up.

### Device hard reset
If the device fails to pair/join the network (\`red:yellow:blue\` on pairing mode) or you changed the network id/channel, connect to another network, bought the TRV second hand, you can perform a factory reset to start fresh.

1. Make sure that the TRV is NOT in pairing mode.
2. Twist the cap in the **-** direction and hold till blue light turns off and then center light blinks red (about 15 seconds).
3. Release the button, you should see a \`red:green:blue\` short flash; the valve will go into installation mode.

### Controlling

Valve sometimes fails to respond/acknowledge a setting, just send the command again.

- Get local temperature in degrees Celsius.
    \`\`\`json
    {
        "local_temperature": ""
    }
    \`\`\`

- Get or set occupied heating setpoint to *&lt;temperature&gt;* in degrees Celsius. Possible values: 7 to 30 by default; leave empty to read.
    \`\`\`json
    {
        "occupied_heating_setpoint": "<temperature>"
    }
    \`\`\`

- Get or set the keypad lock, i.e. enable/disable twist-top boost. Possible values: "unlock", "lock1". **WARNING** Setting the keypad to lock (i.e. "lock1") disables the twist-top boost button which impedes setting the valve to installation mode or hard-reseting it.
    \`\`\`json
    {
        "keypad_lockout": ""
    }
    \`\`\`

- Get the battery level, in percentage. Possible values 0 to 100 (%). The level corresponds voltages in the range 2.2 V (0%) to 3.0 V (100%). The levels where chosen so a 0% indicates that batteries must be replaced, but the valve will still work.
    \`\`\`json
    {
        "battery": ""
    }
    \`\`\`

- Get the battery voltage. Possible values 0.0 to 3.0 (V). This is a direct measure of the battery voltage.
    \`\`\`json
    {
        "voltage": ""
    }
    \`\`\`

- Get the (latest) twist-top boost state. Possible values:

    | Attribute Value | Description |
    | -----------------|----------------------------------------------- |
    | 1 | Boost up |
    | 0 | No boost |
    | -1 | Boost down |

    Note that the valve will not automatically toggle the value to 0 after some time, i.e. configuration/automation logic is needed to use the value. E.g. in Home Assistant the \`expire_after\` setting can be used to handle this.

- Get the valve position / heating demand. Will report the valve position or heating amount depending. Possible values 0 to 100 (%).
    \`\`\`json
    {
        "pi_heating_demand": ""
    }
    \`\`\`
- Get the valve motor state. Possible values: "Stall", others. String description of the motor state. Seems to change when the motor is moving.
    \`\`\`json
    {
        "MOT": ""
    }
    \`\`\`
- Get the Zigbee link quality. Possible values 0 to 100 (%).
    \`\`\`json
    {
        "linkquality": ""
    }
    \`\`\`
`,
    },
    {
        model: ['SMT402', 'STZB402'],
        note: `
### Setting outdoor temperature
To set _outdoor temperature_, you need to send the value to the following MQTT topic:
\`\`\`
zigbee2mqtt/<FRIENDLY_NAME>/set/thermostat_outdoor_temperature
\`\`\`

If you want to automate the publishing of the outdoor temperature using Home Assistant, you may create an automation like this:

\`\`\` yaml
- id: auto_publish_outdoor_temp
  description: publish the outdoor temperature to Stelpro thermostat
  trigger:
    - platform: state
      entity_id: sensor.outdoor_sensor_temperature
      condition: []
  action:
    - service: mqtt.publish
      data_template:
      payload: '{{ states(trigger.entity_id) }}'
      topic: 'zigbee2mqtt/THERMOSTAT_FRIENDLY_NAME/set/thermostat_outdoor_temperature'
\`\`\`

**IMPORTANT**: The outdoor temperature need to be refreshed at least each 4 hours, or the \`EXT\` display will be cleared on the thermostat.
`,
    },
    {
        model: ['067771'],
        note: `
### Model numbers
Model number depends on the country and the colour of the devices, for instance:

- French models are branded as Céliane with Netatmo, and models for this device depends on the colour, with the following numbers: "0 677 21", "0 677 71" and "0 648 91".

- Spanish models are branded as Legrand Valena Next, and models for this device depends on the colour, with the following numbers: "7 418 10", "7 418 40" and "7 418 70".

Other brand names depending on the country:
- Availability for Céliane™ with Netatmo &#8594;     France and Overseas territories, Greece, Poland, Hungary, Tunisia, Morocco, Ivory Coast, Czech Republic, Russia, Mauritius
- Availability for Dooxie™ with Netatmo &#8594;     France and Overseas territories
- Availability for Mosaic™ with Netatmo &#8594;     France and Overseas territories, Ivory Coast
- Availability for Living Now™ with Netatmo &#8594;     Italy, Belgium, Greece, Portugal, Lebanon, Israel, Chile, Peru, Mexico
- Availability for Valena Allure™ with Netatmo &#8594;     Greece, Germany, Austria, Poland, Slovakia, Bulgaria, Czech Republic, Hungary, Russia
- Availability for Valena Life™ with Netatmo &#8594;    Greece, Germany, Austria, Portugal, Poland, Slovakia, Bulgaria, Czech Republic, Hungary, Lituania, Russia
- Availability for Valena Next™ with Netatmo &#8594;    Spain, Belgium
- Availability for Arteor™ with Netatmo &#8594;    Australia, New Zealand, India, Malaysia, Lebanon, Mauritius, South Africa
- Availability for Plexo™ with Netatmo &#8594;    France and Overseas territories, Spain, Belgium
- Availability for Modul'Up™ with Netatmo &#8594;    France and Overseas territories

### LED configuration
* \`permanent_led\`: enable or disable the permanent blue LED. Values: \`ON\` / \`OFF\` (default)
* \`led_when_on\`: enables the LED when the light is on. Values: \`ON\` / \`OFF\` (default)

Example of MQTT message payload to disable permanent LED and enable LED when the lights are on. This should be sent to \`zigbee2mqtt/FRIENDLY_NAME/set\`:

\`\`\`js
{
    "permanent_led": "OFF",
    "led_when_on": "ON"
}
\`\`\`

### Dimmer
* \`dimmer_enabled\`: enable or disable the dimming functions. Values: \`ON\` / \`OFF\` (default)

Example of MQTT message payload to enable dimming. This should be sent to \`zigbee2mqtt/FRIENDLY_NAME/set\`:

\`\`\`
{
    "dimmer_enabled": "ON"
}
\`\`\`

### Identify
Helps to identify the switch using the LED.

* \`identify['effect']\`:  only works for blink3 & fixed in \`effect\`. Values:
    - \`blink3\`
    - \`fixed\`
    - \`blinkgreen\`
    - \`blinkblue\`

* \`identify['color']\`:  only works for blink3 & fixed in \`effect\`. Values:
    - \`default\`
    - \`red\`
    - \`green\`
    - \`blue\`
    - \`lightblue\`
    - \`yellow\`
    - \`pink\`
    - \`white\`

Example of MQTT message payload to Identify the switch. This should be sent to \`zigbee2mqtt/FRIENDLY_NAME/set\`:

\`\`\`js
{
  "identify": {
    "effect": "blink3",
    "color": "white"
  }
}
\`\`\`
`,
    },
    {
        model: ['067773'],
        note: `
### Model numbers
Model number depends on the country and the colour of the devices.
French models are branded as Céliane with Netatmo, and models for this device depends on the colour, with the following numbers: "0 677 23", "0 677 73", and "0 648 93".
Spanish models are branded as Legrand Valena Next, and models for this device depends on the colour, with the following numbers: "7 418 13", "7 418 43" and "7 418 73".

### Binding
The remote supports [binding](../information/binding).
`,
    },
    {
        model: ['067776'],
        note: `
### Model number
Model number depends on the country and the colour of the devices.
French models are branded as Céliane with Netatmo, and models for this device depends on the colour, with the following numbers: "0 677 26", "0 677 76" and "0 648 96".
Spanish models are branded as Legrand Valena Next, and models for this device depends on the colour, with the following numbers: "7 418 07", "7 418 37" and "7 418 67".
`,
    },
    {
        model: ['E1603/E1702/E1708'],
        note: `
## OpenHAB configuration
You have to enable attribute output. Via configuration.yaml in Zigbee2MQTT.

### Item

{% raw %}
\`\`\`yaml
Switch      GF_NameDevice_Button_Press              "NameDevice"                     <button>            (GF_Room, gButton)     ["Button"]      {channel="mqtt:topic:MQTTBroker:NameDevice:state"}
Number      GF_NameDevice_Button_Link               "Link"                 <link>              (gButton)                       ["link"]        {channel="mqtt:topic:MQTTBroker:NameDevice" }
String      GF_NameDevice_Button_update_available  "Update[%s]"      <icon>            (gButton)              ["update_available"]     {channel="mqtt:topic:MQTTBroker:NameDevice:update_available"}
\`\`\`
{% endraw %}

### Thing

{% raw %}
\`\`\`yaml
    Thing topic NameDevice "NameDevice" {
        Channels:
            Type switch : state "state" [ stateTopic = "zigbee2mqtt/NameDevice/state", commandTopic = "zigbee2mqtt/NameDevice/set/state", on="ON", off="OFF" ]
            Type string : update_available "update_available"     [ stateTopic="zigbee2mqtt/NameDevice/update_available"] //It shows only if an update is available
            Type number : linkquality      "linkquality"     [ stateTopic="zigbee2mqtt/NameDevice/linkquality" ]
\`\`\`
{% endraw %}
`,
    },
    {
        model: ['MCCGQ01LM'],
        note: `
## OpenHAB integration and configuration
In OpenHAB you need the MQTT Binding to be installed. It is possible to add this sensor as a generic MQTT thing, but here it is described how to add the sensor manually via an editor.

To make the following configuration work it is necessary to enable the experimental attribute output in the configuration.yaml.
\`\`\`yaml
experimental:
    output: attribute
\`\`\`

### Thing
To add this Xiaomi MCCGQ01LM MiJia door & window contact sensor as Thing it is necessary to embed the Thing into a bridge definition of a MQTT broker. Please consider that for the door window sensor OPEN is false (no contact) and CLOSED is true (contact). So make sure that on(OPEN) = "false" and off(CLOSED) = "true".

\`\`\`yaml
Bridge mqtt:broker:zigbeeBroker [ host="YourHostname", secure=false, username="your_username", password="your_password" ]
{
    Thing topic MijiaDoorSensor "MiJia door & window contact sensor"  @ "Your room"
    {
        Channels:
            Type contact  : status      "status"      [ stateTopic = "zigbee2mqtt/<FRIENDLY_NAME>/contact", on="false", off="true" ]
            Type number   : voltage     "voltage"     [ stateTopic = "zigbee2mqtt/<FRIENDLY_NAME>/voltage" ]
            Type number   : battery     "battery"     [ stateTopic = "zigbee2mqtt/<FRIENDLY_NAME>/battery" ]
            Type number   : linkquality "linkquality" [ stateTopic = "zigbee2mqtt/<FRIENDLY_NAME>/linkquality" ]
            /****************************************************************************************************
            If you want to know when the sensor has been last changed you can add to your configuration.yaml:
            advanced:
                last_seen: ISO_8601_local

            and add another channel:
            ****************************************************************************************************/
            Type datetime : last_change "last change" [ stateTopic = "zigbee2mqtt/<FRIENDLY_NAME>/last_seen" ]
    }
}
\`\`\`

### Items
\`\`\`yaml
Contact  door_window_sensor_isOpen      "open status" <door>                                {channel="mqtt:topic:zigbeeBroker:MijiaDoorSensor:status"}
Number   door_window_sensor_VOLTAGE     "voltage [%d mV]"                                   {channel="mqtt:topic:zigbeeBroker:MijiaDoorSensor:voltage"}
Number   door_window_sensor_BATTERY     "battery [%.1f %%]" <battery>                       {channel="mqtt:topic:zigbeeBroker:MijiaDoorSensor:battery"}
Number   door_window_sensor_LINKQUALITY "link qualitiy [%d]" <qualityofservice>             {channel="mqtt:topic:zigbeeBroker:MijiaDoorSensor:linkquality"}
/* See comment above */
DateTime door_window_sensor_last_change "last change [%1$td.%1$tm.%1$tY %1$tH:%1$tM:%1$tS]" {channel="mqtt:topic:zigbeeBroker:MijiaDoorSensor:last_change"}
\`\`\`
`,
    },
    {
        model: ['GS361A-H04'],
        note: `
### Installing the TRV
- open battery cover (twist and slide)
- insert batteries (a orange wrench should appear)
- close battery cover (slide and twist)
- press front button until \`F1₁\` is displayed
- install TRV
- press front button until \`F1₂\` is displayed (after 10-30 seconds the TRV should be able to pair)

### Pairing
- press front button 3x to enter pairing mode (LED will flash green)

If you get a warning that the model is undefined, which might happen after removing the device. Try removing it from the network again while in pairing mode.
`,
    },
    {
        model: ['ZK03840'],
        note: `
### Installing the TRV
- install the correct adaptor on the valve
- open cover (push clip on bottom and push front side to slide open)
- insert batteries (\`--\` should be on the display)
- press the button on the top (\`--\` + \`((•))\` should be on the display)
- wait for the device to pair, it took about 2 minutes for me to get the success message in Zigbee2MQTT
- install the TRV on the adaptor (push hard until you feel a click, rotate the TRV until display faces up)
- press the button on the top for 3 seconds (motor will turn, \`21°\` + \`((•))\` should be on the display)
- close the cover
`,
    },
    {
        model: ['412015'],
        note: `
### Model numbers
In Legrand, model number depends on the country and the colour of the devices, for instance:

- French models are branded as Céliane with Netatmo, whereas Spanish models are branded as Legrand Valena Next. However, this device has no colour options, so there is only one model: "412015" or "4 120 15"

Other brand names depending on the country:
- Availability for Céliane™ with Netatmo &#8594;     France and Overseas territories, Greece, Poland, Hungary, Tunisia, Morocco, Ivory Coast, Czech Republic, Russia, Mauritius
- Availability for Dooxie™ with Netatmo &#8594;     France and Overseas territories
- Availability for Mosaic™ with Netatmo &#8594;     France and Overseas territories, Ivory Coast
- Availability for Living Now™ with Netatmo &#8594;     Italy, Belgium, Greece, Portugal, Lebanon, Israel, Chile, Peru, Mexico
- Availability for Valena Allure™ with Netatmo &#8594;     Greece, Germany, Austria, Poland, Slovakia, Bulgaria, Czech Republic, Hungary, Russia
- Availability for Valena Life™ with Netatmo &#8594;    Greece, Germany, Austria, Portugal, Poland, Slovakia, Bulgaria, Czech Republic, Hungary, Lituania, Russia
- Availability for Valena Next™ with Netatmo &#8594;    Spain, Belgium
- Availability for Arteor™ with Netatmo &#8594;    Australia, New Zealand, India, Malaysia, Lebanon, Mauritius, South Africa
- Availability for Plexo™ with Netatmo &#8594;    France and Overseas territories, Spain, Belgium
- Availability for Modul'Up™ with Netatmo &#8594;    France and Overseas territories

### Force read power
* \`power\`: Asks the device for the current active power.

Example of MQTT message payload to ask for the active power. This should be sent to \`zigbee2mqtt/FRIENDLY_NAME/get\`:

\`\`\`js
{
    "power"
}
\`\`\`


### Power Alarm Configuration
* \`power_alarm\`: enables or disables the power alarm, and sets the value: \`DISABLE\` (default) / \`integer\` (in kWh)

Example of MQTT message payload to disable the power alarm. This should be sent to \`zigbee2mqtt/FRIENDLY_NAME/set\`:

\`\`\`js
{
    "power_alarm": "DISABLE"
}
\`\`\`

Example of MQTT message payload to enable the power alarm at 3.3 kWh. This should be sent to \`zigbee2mqtt/FRIENDLY_NAME/set\`:

\`\`\`js
{
    "power_alarm": "3300"
}
\`\`\`

When it reaches that value, the \`power_alarm_active\` binary_sensor will change to \`true\`.


### Identify
Helps to identify the device using the LED.

* \`identify['effect']\`:  only works for blink3 & fixed in \`effect\`. Values:
    - \`blink3\`
    - \`fixed\`
    - \`blinkgreen\`
    - \`blinkblue\`

* \`identify['color']\`:  only works for blink3 & fixed in \`effect\`. Values:
    - \`default\`
    - \`red\`
    - \`green\`
    - \`blue\`
    - \`lightblue\`
    - \`yellow\`
    - \`pink\`
    - \`white\`

Example of MQTT message payload to Identify the device. This should be sent to \`zigbee2mqtt/FRIENDLY_NAME/set\`:

\`\`\`js
{
    "identify": {
    "effect": "blink3",
    "color": "white"
    }
}
\`\`\`
`,
    },
    {
        model: ['RTCGQ01LM', 'RTCGQ11LM'],
        note: `
* \`no_occupancy_since\`: Timeout (in seconds) after which \`no_occupancy_since\` is sent.
This indicates the time since the last occupancy was detected.
For example \`no_occupancy_since: [10, 60]\` will send a \`{"no_occupancy_since": 10}\` after 10 seconds
and a \`{"no_occupancy_since": 60}\` after 60 seconds.
* \`occupancy_timeout\`: Timeout (in seconds) after which the \`occupancy: false\` message is sent.
If not set, the timeout is \`90\` seconds.
When set to \`0\` no \`occupancy: false\` is sent.

**IMPORTANT**: \`occupancy_timeout\` should not be set to lower than 60 seconds.
The reason is this: after detecting a motion the sensor ignores any movements for
exactly 60 seconds. In case there are movements after this 60 seconds, a new message
(\`occupancy: true\`) will be sent and the sensor will go to sleep for another minute, and so on.
Therefore, in order to sustain \`occupancy: true\`, you need a reasonable window after this 60s sleep
to determine continued occupancy.
This is expected behaviour (see [#270](https://github.com/Koenkk/zigbee2mqtt/issues/270#issuecomment-414999973)).
To work around this, a
[hardware modification](https://community.smartthings.com/t/making-xiaomi-motion-sensor-a-super-motion-sensor/139806)
is needed.
`,
    },
    {
        model: ['TS0043'],
        note: `
### Pairing

Pairing may differ per model (TS0043 also comes as white-label device such as the LoraTap SS600ZB).

#### LoraTap SS600ZB:

Open the shell of the remote (remove the screw at the back first).
Press the pairing button on the PCB for 5-10 seconds until the yellow
indicator light flashes, then release it.
While pairing, keep the remote close to the coordinator.
`,
    },
    {
        model: ['GR-ZB01-W'],
        note: `
### AC Power
If you are using the AC wall adapter, the battery level will always stay within the range of 25-35% as it is continually drawing power from the outlet.
The battery level indicator is only relevant to if you are using the solar panel.
`,
    },
    {
        model: ['SLR1', 'SLR1b'],
        note: `
### How to start/edit native boost
The receiver has support for native Boost, which will allow to display the remaining time on a compatible remote.

To start one, or modify an already active one, send the following payload to the topic \`zigbee2mqtt/FRIENDLY_NAME/set\`:

\`\`\`js
{
   "system_mode":"emergency_heating",
   "temperature_setpoint_hold_duration":"30",  // Replace with desired duration in minutes. Max 360. 0 to stop
   "temperature_setpoint_hold":"1",
   "occupied_heating_setpoint":"18"  // Replace with desired temperature. Between 5 and 32 C
}
\`\`\`
Note: For device timing reasons, the payload needs to be sent as one single command. Sending individual commands or settings attributes manually using the Frontend will not work.

Also, the native boost can be used as a method to pause the heating too. To do so, set the temperature to a low value.

### Set heating mode to ON
Send the following payload to the topic \`zigbee2mqtt/FRIENDLY_NAME/set\`:
\`\`\`js
{
   "system_mode":"heat",
   "temperature_setpoint_hold":"1",
   "occupied_heating_setpoint":"20" // Replace with desired temperature. Between 5 and 32 C
}
\`\`\`
Note: You will also notice that \`temperature_setpoint_hold_duration\` automatically changes to \`65535\` which means \`undefined\` (indefinite).

This will also stop any native boosts that are currently active.


### Set heating mode to OFF
Send the following payload to the topic \`zigbee2mqtt/FRIENDLY_NAME/set\`:
\`\`\`js
{
   "system_mode":"off",
   "temperature_setpoint_hold":"0"
}
\`\`\`
Note: You will also notice that \`temperature_setpoint_hold_duration\` automatically changes to \`0\` which means \`not set\`. \`occupied_heating_setpoint\` automatically changes to \`1\` degree C.

This will also stop any native boosts that are currently active.
`,
    },
    {
        model: ['SLR2', 'SLR2b'],
        note: `
### Sending payloads on dual channel receivers
As the receiver makes use of two endpoints, \`water\` and \`heat\` there are two methods of sending payloads, both equally valid. For example, the \`heat\` endpoint:

Topic \`zigbee2mqtt/FRIENDLY_NAME/set\`
\`\`\`js
{
    "system_mode_heat":"heat"
}
\`\`\`

Topic \`zigbee2mqtt/FRIENDLY_NAME/heat/set\`
\`\`\`json
{
    "system_mode":"heat"
}
\`\`\`

Notice that \`heat\` must be part of either the topic or the attribute. With that in mind, adjust the commands in this documentation based on your preferred style.

### How to start/edit native boost (heat endpoint)
The receiver has support for native Boost, which will allow to display the remaining time on a compatible remote.

To start one, or modify an already active one, send the following payload to the topic \`zigbee2mqtt/FRIENDLY_NAME/set\`:

\`\`\`js
{
   "system_mode_heat":"emergency_heating",
   "temperature_setpoint_hold_duration_heat":"30",  // Replace with desired duration in minutes. Max 360. 0 to stop
   "temperature_setpoint_hold_heat":"1",
   "occupied_heating_setpoint_heat":"18"  // Replace with desired temperature. Between 5 and 32 C
}
\`\`\`
Note: For device timing reasons, the payload needs to be sent as one single command. Sending individual commands or settings attributes manually using the Frontend will not work.

Also, the native boost can be used as a method to pause the heating too. To do so, set the temperature to a low value.

### Set heating mode to ON (heat endpoint)
Send the following payload to the topic \`zigbee2mqtt/FRIENDLY_NAME/set\`:
\`\`\`js
{
   "system_mode_heat":"heat",
   "temperature_setpoint_hold_heat":"1",
   "occupied_heating_setpoint_heat":"20" // Replace with desired temperature. Between 5 and 32 C
}
\`\`\`
Note: You will also notice that \`temperature_setpoint_hold_duration_heat\` automatically changes to \`65535\` which means \`undefined\` (indefinite).

This will also stop any native boosts that are currently active.


### Set heating mode to OFF (heat endpoint)
Send the following payload to the topic \`zigbee2mqtt/FRIENDLY_NAME/set\`:
\`\`\`js
{
   "system_mode_heat":"off",
   "temperature_setpoint_hold_heat":"0"
}
\`\`\`
Note: You will also notice that \`temperature_setpoint_hold_duration_heat\` automatically changes to \`0\` which means \`not set\`. \`occupied_heating_setpoint_heat\` automatically changes to \`1\` degree C.

This will also stop any native boosts that are currently active.

### How to start/edit native boost (water endpoint)
The receiver has support for native Boost, which will allow to display the remaining time on a compatible remote.

To start one, or modify an already active one, send the following payload to the topic \`zigbee2mqtt/FRIENDLY_NAME/set\`:

\`\`\`js
{
   "system_mode_water":"emergency_heating",
   "temperature_setpoint_hold_duration_water":"30",  // Replace with desired duration in minutes. Max 360. 0 to stop
   "temperature_setpoint_hold_water":"1"
}
\`\`\`
Note: For device timing reasons, the payload needs to be sent as one single command. Sending individual commands or settings attributes manually using the Frontend will not work.

### Set heating mode to ON (water endpoint)
Send the following payload to the topic \`zigbee2mqtt/FRIENDLY_NAME/set\`:
\`\`\`js
{
   "system_mode_water":"heat",
   "temperature_setpoint_hold_water":"1"
}
\`\`\`
Note: You will also notice that \`temperature_setpoint_hold_duration_heat\` automatically changes to \`65535\` which means \`undefined\` (indefinite).

This will also stop any native boosts that are currently active.


### Set heating mode to OFF (water endpoint)
Send the following payload to the topic \`zigbee2mqtt/FRIENDLY_NAME/set\`:
\`\`\`js
{
   "system_mode_water":"off",
   "temperature_setpoint_hold_water":"0"
}
\`\`\`
Note: You will also notice that \`temperature_setpoint_hold_duration_heat\` automatically changes to \`0\` which means \`not set\`.

This will also stop any native boosts that are currently active.

### Local and occupied temperature (water endpoint)
The water endpoint functions as what could be considered an on/off switch based on \`system_mode_water\`. Because of that, the device uses fixed values for temperature. \`local_temperature_water\` is always 21 and \`occupied_heating_setpoint_water\` is always 22.
`,
    },
];

module.exports = notes;
