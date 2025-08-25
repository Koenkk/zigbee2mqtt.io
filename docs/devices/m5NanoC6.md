/*
* Arduino sketch for the M5NanoC6 
* Before Compile/Verify, select the correct board: `Tools -> Board`.
* Select the End device Zigbee mode: `Tools -> Zigbee mode: Zigbee ED (end device)`
* Select Partition Scheme for Zigbee: `Tools -> Partition Scheme: Zigbee 4MB with spiffs`
* Select the COM port: `Tools -> Port: xxx` where the `xxx` is the detected COM port.
*/


#include "Zigbee.h"
#include <Adafruit_NeoPixel.h>

/* Zigbee color dimmable light configuration */
#define ZIGBEE_RGB_LIGHT_ENDPOINT 10
#define LED_PIN    20  //use 20 for builtin, use 1 or 2 for the grove pins
#define ENABLE_PIN 19
#define NUM_LEDS   1

Adafruit_NeoPixel strip(NUM_LEDS, LED_PIN, NEO_GRB + NEO_KHZ800);
uint8_t button = BOOT_PIN;

ZigbeeColorDimmableLight zbColorLight = ZigbeeColorDimmableLight(ZIGBEE_RGB_LIGHT_ENDPOINT);

/********************* RGB LED functions **************************/
void setRGBLight(bool state, uint8_t red, uint8_t green, uint8_t blue, uint8_t level) {
    if (!state) {
        strip.setPixelColor(0, 0, 0, 0); // Turn LED off
        strip.show();
        return;
    }
    float brightness = (float)level / 255;
    uint8_t bright_red = red * brightness;
    uint8_t bright_green = green * brightness;
    uint8_t bright_blue = blue * brightness;
    
    strip.setPixelColor(0, bright_red, bright_green, bright_blue);
    strip.show();
}

// Create a task on identify call to handle the identify function
void identify(uint16_t time) {
    static uint8_t blink = 1;
    if (time == 0) {
        // If identify time is 0, stop blinking and restore light as it was used for identify
        zbColorLight.restoreLight();
        return;
    }
    strip.setPixelColor(0, 255 * blink, 255 * blink, 255 * blink);
    strip.show();
    blink = !blink;
}

/********************* Arduino functions **************************/
void setup() {
    Serial.begin(115200);

    // Initialize NeoPixel library
    strip.begin();
    strip.setPixelColor(0, 0, 0, 0); // Turn LED off initially
    strip.show();

    // Init button for factory reset
    pinMode(button, INPUT_PULLUP);

    //cam extras
    pinMode(ENABLE_PIN, OUTPUT);
    digitalWrite(ENABLE_PIN, HIGH);

    // Set callback function for light change
    zbColorLight.onLightChange(setRGBLight);

    // Optional: Set callback function for device identify
    zbColorLight.onIdentify(identify);

    // Optional: Set Zigbee device name and model
    zbColorLight.setManufacturerAndModel("Espressif", "ZBColorLightBulb");

    // Add endpoint to Zigbee Core
    Serial.println("Adding ZigbeeLight endpoint to Zigbee Core");
    Zigbee.addEndpoint(&zbColorLight);

    // When all EPs are registered, start Zigbee in End Device mode
    if (!Zigbee.begin()) {
        Serial.println("Zigbee failed to start!");
        Serial.println("Rebooting...");
        ESP.restart();
    }

    //blink the light to make sure its the right pin
    strip.setPixelColor(0, 0, 255, 0); // Set color to green
    strip.show();
    delay(200);
    strip.setPixelColor(0, 0, 0, 0); // Turn LED off
    strip.show();
    delay(200);
    strip.setPixelColor(0, 0, 255, 0); // Set color to green
    strip.show();
    delay(200);
    strip.setPixelColor(0, 0, 0, 0); // Turn LED off
    strip.show();
    delay(200);

    Serial.println("Connecting to network");
    while (!Zigbee.connected()) {
        Serial.print(".");
        delay(100);
    }
    Serial.println();
    Serial.println("Connected to Zigbee Network!");
}

void loop() {
    // Checking button for factory reset
    if (digitalRead(button) == LOW) {   // Push button pressed
        // Key debounce handling
        delay(100);
        int startTime = millis();
        while (digitalRead(button) == LOW) {
            delay(50);
            if ((millis() - startTime) > 3000) {
                // If key pressed for more than 3secs, factory reset Zigbee and reboot
                Serial.println("Resetting Zigbee to factory and rebooting in 1s.");
                delay(1000);
                Zigbee.factoryReset();
            }
        }
        // Increase brightness by 50 every time the button is pressed
        zbColorLight.setLightLevel(zbColorLight.getLightLevel() + 50);
    }
    delay(100);
}