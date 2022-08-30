---
 title: "QT-05M control via MQTT"
 description: "Integrate your QT-05M via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
 addedAt: 2022-08-28T00:05:58
 pageClass: device-page
 ---

 # QOTO QT-05M

 |     |     |
 |-----|-----|
 | Model | QT-05M  |
 | Vendor  | QOTO  |
 | Description | Solar powered garden watering timer |
 | Exposes | water_flow, last_watering_time, remaining_watering_time, valve_state, shutdown_timer, valve_state_auto_shutdown, battery, linkquality |
 | Picture | ![QOTO QT-05M ](https://www.zigbee2mqtt.io/images/devices/QT-05M.jpg) |


 ## Exposes

 ### Water Flow
 Current water flow (Opening of the valve in %). 

 ### Last Watering Time (numeric)
 Duration of the last watering (in seconds).

 ### Remaining Watering Time (numeric)
 Remaning watering time (for auto shutdown). Updates every minute, and every 10s in the last minute.

 ### Valve State (numeric)
 Set valve to %. Will stay open until manually set back to 0.

 ### Shutdown Timer (numeric)
 Set duration of the automatic shutdown (in seconds).

 ### Valve State Auto Shutdown (numeric)
 Set valve to %. Will automatically shutdown based on the value set for "Shutdown Timer".

