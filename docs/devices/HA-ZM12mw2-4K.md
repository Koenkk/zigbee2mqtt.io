# Halemeier HA-ZM12mw2-4K

4-kanaals LED-driver van Halemeier. Elk kanaal werkt als een apart Zigbee-licht.

## Features

- 4 onafhankelijke kanalen (endpoint 1 t/m 4)
- Aan/uit, dimmen, kleurtemperatuur
- Ondersteund via `light_onoff_brightness_colortemp` met `multiEndpoint` mapping
- Werkt met Home Assistant via Zigbee2MQTT

## Notes

Voor volledige ondersteuning van kleurtemperatuur per kanaal is Zigbee2MQTT v1.38+ aanbevolen.  
Extra functies zoals `effect`, `color_temp_startup` en `power_on_behavior` zijn niet standaard per kanaal beschikbaar, maar kunnen via MQTT worden gestuurd.
