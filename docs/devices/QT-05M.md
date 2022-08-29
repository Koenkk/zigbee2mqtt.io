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
 | Description | Solar power garden waterering timer |
 | Exposes | state, used, remaining, manual, timer, automatic, battery, linkquality |
 | Picture | ![QOTO QT-05M ](https://www.zigbee2mqtt.io/images/devices/QT-05M.jpg) |


 ## Exposes

 ### State
 Current water flow (Opening of the valve in %). 

 ### Used (numeric)
 Duration of the last watering (in seconds).

 ### Remaining (numeric)
 How long more will the valve remain open (during auto shutdown). Updates every minute, and every 10s in the last minute.

 ### Manual (numeric)
 Set valve to %. Will stay open until manually set back to 0.

 ### Timer (numeric)
 Set duration of the automatic shutdown (in seconds).

 ### automatic (numeric)
 Set valve to %. Will automatically shutdown based on the value set for "Timer".

