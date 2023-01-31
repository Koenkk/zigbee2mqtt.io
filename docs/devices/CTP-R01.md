<!-- Notes BEGIN -->
## Notes 

### Battery
Uses a CR2450 battery

### Pairing
Remove the back plate by using the included tool or a wedge to click it off.
Press and hold the LINK button inside the device for +- 5 seconds (until the blue light blinks three times).
After this the device will automatically join, but the interview process may not finish.
If that happens, keep doing short presses to the LINK button to keep the light flashing, until the interview process finishes successfully.

### Mode Switch 
There are two ways to toggle between scene mode and action mode: 
1. Hard switch: 

    Open lid, and click LINK 5 times in a row. 

2. Soft switch (using Zigbee2MQTT frontend): 

    Toggle `operation_mode` in the Exposes tab of the device in Zigbee2MQTT frontend. 
    Change won't happen right away, the device only responds to mode switch once an hour. 
    But you can shake the device really really HARD, this will force the device to respond. 
    Otherwise you can open lid and click LINK button to have it respond immediately. 

### Supported Actions

- Scene mode: 

  | Action           | additional attributes in payload |
  | ---------------- | -------------------------------- |
  | rotate_left      | action_angle                     |
  | rotate_right     | action_angle                     |
  | shake            | -                                |
  | throw            | -                                |
  | hold             | -                                |
  | side_up          | side                             |
  | 1_min_inactivity | -                                |

- Action mode: 

  | Action           | additional attributes in payload |
  | ---------------- | -------------------------------- |
  | rotate_left      | action_angle                     |
  | rotate_right     | action_angle                     |
  | shake            | -                                |
  | throw            | -                                |
  | slide            | side                             |
  | tap              | side                             |
  | flip90           | side, action_from_side           |
  | flip180          | side, action_from_side           |
  | 1_min_inactivity | -                                |

<!-- Notes END -->
