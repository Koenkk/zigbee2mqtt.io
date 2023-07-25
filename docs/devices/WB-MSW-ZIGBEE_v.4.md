<!-- Notes BEGIN -->
## Notes

### Description
Wiren Board WB-MSW v.4 — hybrid digital sensor of temperature, humidity, illumination, noise, CO2 and VOC level. It is equipped with the IR blaster (and the receiver for learning). Designed for climate control in residential and office premises.

### Configuring IR
The sensor contains 80 banks for storing IR commands. Training takes place through the built-in IR receiver.

By publishing to `zigbee2mqtt/FRIENDLY_NAME/set` various device attributes can be configured.

#### Start learn to ROM
Request:

```json
{
    "learn_start": {
        "rom":0
    }
}
```
* `rom`: Memory cell number (from 0 to 79)

#### Stop learn to ROM
Request:
```json
{
    "learn_stop": {
        "rom":0
    }
}
```
* `rom`: Memory cell number (from 0 to 79)

#### Play from ROM
Request:
```json
{
    "play_store": {
        "rom":0
    }
}
```
* `rom`: Memory cell number (from 0 to 79)

#### Clear all ROM's
Request:

```json
{
    "clear_store": {}
}
```

#### Start learn to RAM
Request:

```json
{
    "learn_start": {
        "rom":0
    }
}
```

#### Stop learn to RAM
Request:
```json
{
    "learn_ram_stop": {}
}
```

#### Play from RAM
Request:
```json
{
    "play_ram": {}
}
```
<!-- Notes END -->
