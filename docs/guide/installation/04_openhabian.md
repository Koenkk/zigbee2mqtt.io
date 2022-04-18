---
next: ../configuration/
---

# openHABian

If you are using openHABian on a Raspberry Pi then the installation is pretty easy: Launch the configuration utility with "sudo openhabian-config", then in the main-menu choose "optional components".
If you don't have a MQTT-server yet, then first choose Mosquitto and follow the instructions.
After installation of Mosquitto come back to the "optional components" and select "Zigbee2MQTT".
After selecting your zigbee-usb-adapter you have to enter your mqtt-username and if necessary a password.
After about 3 to 4 minutes Zigbee2MQTT should be up and running. You can test if the configuration page is available on port 8081.