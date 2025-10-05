<!-- Notes BEGIN -->
## What works / what doesn't?
- Trigger works to open/close the garage door
- Contact shows the door position
- Properly shows up in Home Assistant with trigger and status

This device uses state for both the door position switch and the trigger.  It reports the door status, but changing it triggers the relay to open/close the garage door.  The state doesn't update as expected - for example, if the door is open and you trigger the state change, but the door never closes, the state will turn to OFF and not provide the actual door position.  There's a small filter in the js (if (Date.now() - lastTriggerTime < 500) ) that filters the trigger events from the contact state changes, allowing this device to properly report door position.
<!-- Notes END -->