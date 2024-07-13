---
title: "easyiot ZB-IR01 control via MQTT"
description: "Integrate your easyiot ZB-IR01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2023-11-23T16:23:11Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# easyiot ZB-IR01

|     |     |
|-----|-----|
| Model | ZB-IR01  |
| Vendor  | [easyiot](/supported-devices/#v=easyiot)  |
| Description | This is an infrared remote control equipped with a local code library,supporting devices such as air conditioners, televisions, projectors, and more. |
| Exposes | last_received_command, send_command, linkquality |
| Picture | ![easyiot ZB-IR01](https://www.zigbee2mqtt.io/images/devices/ZB-IR01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes
## 1 Protocol Overview


### 1.1 Description of ZCL communication method for accessing your own gateway

Users who develop their own gateway to access smart infrared remote control should refer to the standard cluster of the [07-5123-07-ZigbeeClusterLibrary_Revision_7.pdf](https://csa-iot.org/developer-resource/specifications-download-request/) protocol document to access it.

#### 1.1.1 Cluster identifier

| **Identifier** | **Name**                |
| -------------- | ----------------------- |
| **0x0704**     | Tunneling(Smart Energy) |

Table 1

#### 1.1.2 Agreement process description

In order to simplify the communication process, the creation of transparent transmission channels required by the cluster is omitted, and transparent transmission commands are directly used to send and receive commands. The channel ID is fixed at 0.

##### 1.1.2.1 Send data

Use the [10.6.2.4.3 TransferData Command] command, the key parameters are as follows

Direction: Client->Server

 

| **Description**                      | **Length** | **Value**                       |
| ------------------------------------ | ---------- | ------------------------------- |
| **Cluster Command**                  | 1          | 0x02                            |
| **TunnelID**                         | 2          | 0x0000                          |
| **Transparent transmission of data** | 6          | The protocol shown in Chapter 3 |

Table 2


##### 1.3.2.2 Receive feedback data from infrared remote control

Use the [10.6.2.5.2 TransferData Command] command, the key parameters are as follows

Direction: Server –>Client

 

 

 

| **Description**                      | **Length** | **Value**                       |
| ------------------------------------ | ---------- | ------------------------------- |
| **Cluster Command**                  | 1          | 0x01                            |
| **TunnelID**                         | 2          | 0x0000                          |
| **Transparent transmission of data** | 6          | The protocol shown in Chapter 3 |

Table 3


### 1.2 Introduction to infrared remote control protocol

#### 1.2.1 Request data frame

| Command | Data 1 | Data 2 | Data 3 | Data 4 | XOR check |
| ------- | ------ | ------ | ------ | ------ | --------- |
| 0x##    | 0x##   | 0x##   | 0x##   | 0x##   | 0x##      |

#### 1.2.2 Response data frame

| Command | Data 1 | Data 2 | Data 3 | Data 4 | XOR check |
| ------- | ------ | ------ | ------ | ------ | --------- |
| 0x06    | 0x##   | 0x##   | 0x##   | 0x##   | 0x##      |

Detailed explanation of frame data

Command: The data request frame is 0x80-0x92, with reserved frame data in the middle

The data response frame is fixed at 0x06. Every time a data request frame is sent, a data response frame will be received.

The data reporting frame is fixed at 0x08, which reports the status of the air conditioner after it is remotely controlled.

Data: Data transmitted to the infrared remote control

XOR check: XOR and check

#### 1.2.3 XOR verification algorithm (XOR and verification)

* This is the pseudo code of BCC check

```c
Function CalcXOR(msgPtr, len):
    Initialize xorResult to 0

    For x from 0 to len-1:
        xorResult = xorResult XOR value at msgPtr
        Increment msgPtr to point to the next element

    Return xorResult
```

* Generate a checksum using the BCC calculation tool

[bcc tools download](https://drive.google.com/file/d/1TD01Xk96JKfwNW9OtdslQOVTc1yHSI47/view?usp=drive_link)

![BCC Tool Usage][img1]

## 2 Basic functions

### 2.1 Device type definition

This infrared remote control defines 8 device remote control types (2 of which are custom learning types), which can be switched freely with commands during use.

Among them, the custom learning type can learn 32 buttons each. The button names are saved by the host, and the remote control does not distinguish the button functions.

| **Device Type** | **Type Definition**    |
| --------------- | ---------------------- |
| **0**           | Custom learning type 1 |
| **1**           | Air conditioning       |
| **2**           | TV                     |
| **3**           | Set-top box            |
| **5**           | Electric fan           |
| **7**           | TV box                 |
| **8**           | Projector              |
| **12**          | Custom learning type 2 |

Table 4

## 3 Control command payload

### 3.1 Create a new remote control

| Command | Device type | Kfid_H | Kfid_L | Reserved | XOR check |
| ------- | ----------- | ------ | ------ | -------- | --------- |
| 0x80    | 0x##        | 0x##   | 0x##   | 0x00     | 0x##      |

Function: Create a new remote control. You must create a remote control before using the remote control, otherwise other calls will fail or be incorrect.

Command: 0x80

Device type: For the type of remote control that needs to be created, refer to Table 4.

Kfid: A 16bit remote control ID

Obtain Kfid: a, call the one-click matching interface to obtain

b. Obtained by consulting the brand and model correspondence table(table 11 - table 14).

Return: Success: 0x06,0x89,0x00,0x00,0x00,0x8F

Failure: 0x06,0xE0,0xE1,0x00,0x00,0x07 Error code: 0xE1 The meaning is shown in Table 5

### 3.2 One-click matching

| Command | Device type | Kfid_H | Kfid_L | Reserved | XOR check |
| ------- | ----------- | ------ | ------ | -------- | --------- |
| 0x81    | 0x##        | 0x00   | 0x00   | 0x00     | 0x##      |

Function: Use the original remote control to send the power on button to the Zigbee infrared remote control to search for the ID corresponding to the local code library. After the ZIGBEE infrared remote control receives the matching command, the indicator light flashes, prompting the user to press the power button of the remote control. After the search is successful, a 16-bit value (Kfid_H, Kfid_L) will be returned. If no signal is received for more than 10 seconds, it will Return failure.

Command word: 0x81

Device type: the type of remote control that needs to be matched

Return: Success: 0x06,0x89,kfidH,kfidL,0x00,XOR

Failure: 0x06,0xE0,0xE1,0x00,0x00,0x07 Error code: 0xE1 The meaning is shown in Table 5

Note: One-key matching may not work well when there are duplicate codes (for example, a button of brand A and brand B have almost identical remote control codes). It is recommended to search by brand to match devices.

### 3.3 Transmit Infrared Signal

| Command | Device type | Button ID | Button value | Reserved | XOR check |
| ------- | ----------- | --------- | ------------ | -------- | --------- |
| 0x86    | 0x##        | 0x##      | 0x##         | 0x00     | 0x##      |

Function: Transmit infrared control signal

Command: 0x86

Device type: remote control id

Button ID: Button id. For details, please refer to Table 6-Table 10.

Key value: key parameter value, please refer to Table 6-Table 10 for details. If there is no key value, fill in 0 directly.

Return: Success: 0x06,0x89,0x00,0x00,0x00,0x8F

Failure: 0x06,0xE0,0xE1,0x00,0x00,0x07 Error code: 0xE1 The meaning is shown in Table 5

### 3.4 Infrared learning

| Command | Device Type | Learning Number | Reserved | Reserved | XOR Check |
| ------- | ----------- | --------------- | -------- | -------- | --------- |
| 0x88    | 0x00/0x0C   | 0x##            | 0x00     | 0x00     | 0x##      |

Function: Learn a string of infrared signals and save them to the location specified by the learning number. After the ZIGBEE infrared remote control receives the learning command, the indicator light flashes, prompting the user to press the remote control button.

Command: 0x88

Device type: The type of remote control that needs to be learned (only device type 0 or 12 has the learning function)

Learning number: Learn and store the package number. After successful learning, the data saved by the original number will be overwritten, The value range is 1-32.

Return: Success: 0x06,0x89,0x00,0x00,0x00,0x8F

Failure: 0x06,0xE0,0xE1,0x00,0x00,0x07 Error code: 0xE1 The meaning is shown in Table 5

Note: 1. There is no need to create a new remote control when using this command.

? 2. If it is a matching remote control, please use one-key matching

### 3.5 Emitting infrared learning data

| Command | Device Type | Learning Number | Reserved | Reserved | XOR Check |
| ------- | ----------- | --------------- | -------- | -------- | --------- |
| 0x87    | 0x00/0x0C   | 0x##            | 0x00     | 0x00     | 0x##      |

Function: Send the learned infrared signal (0x88 learned data)

Command: 0x87

Device type: Only device type 0 or 12 has learning function

Learning number: Learning storage packet number, the number corresponding to the infrared data learned by the 0x88 command, The value range is 1-32.

Return: Success: 0x06,0x89,0x00,0x00,0x00,0x8F

Failure: 0x06,0xE0,0xE1,0x00,0x00,0x07 Error code: 0xE1 The meaning is shown in Table 5

### 3.6 Air conditioning status initialization

| Command | Device type | Button ID | Button value | Reserved | XOR check |
| ------- | ----------- | --------- | ------------ | -------- | --------- |
| 0x8F    | 0x01        | 0x##      | 0x##         | 0x00     | 0x##      |

Function: Change the air conditioner status recorded by the chip, create a new air conditioner remote control status as, open-24-cooling-automatic fan speed

Order:
0x8F

Equipment type: Equipment remote control type (refer to Table 4), or use air conditioner 0x01

Button ID: Button ID. For details, please refer to Table 6-Table 10.

Key value: Key parameter value, please refer to Table 6-Table 10 for details.

Return: Success: 0x06,0x89,0x00,0x00,0x00,0x8F

Failure: 0x06,0xE0,0xE1,0x00,0x00,0x07 Error code: 0xE1 The meaning is shown in Table 5



Note: This command has the same parameters as the infrared emission command, except that this command will not emit infrared signals, but only changes the internal state of the chip.

### 3.7 Set air conditioning status feedback

| Command | Feedback | Reserved | Reserved | Reserved | XOR Check |
| ------- | -------- | -------- | -------- | -------- | --------- |
| 0x82    | 0/1      | 0x00     | 0x00     | 0x00     | 0x##      |

Function: Set air conditioner status feedback enable and disable

Command: 0x82

Feedback: 1=enabled 0=disabled

Return: Success: 0x06,0x89,0x00,0x00,0x00,0x8F

Failure: 0x06,0xE0,0xE1,0x00,0x00,0x07 Error code: 0xE1, the meaning is shown in Table 5

### 3.8 Read ZIGBEE infrared remote control version

| Command | Reserve | Reserve | Reserve | Reserve | XOR Check |
| ------- | ------- | ------- | ------- | ------- | --------- |
| 0x92    | 0x00    | 0x00    | 0x00    | 0x00    | 0x##      |

Function: Read the version number of ZIGBEE infrared remote control

Command: 0x92

Return: Success: 0x06,0x89,0x01,0x00,0x00,0x8E The third byte returned, 0x1, is the version number

Failure: 0x06,0xE0,0xE1,0x00,0x00,0x07 Error code: 0xE1 The meaning is shown in Table 5

### 3.9 Execution status return

| Command | Status    | Return Value | Reserved | Reserved | XOR Check |
| ------- | --------- | ------------ | -------- | -------- | --------- |
| 0x06    | 0x89/0xE0 | 0x##         | 0x00     | 0x00     | 0x##      |

Function: Return to execution status

Command: 0x06

Status: Success: 0x89 Failure: 0xE0

Return value: When status = 0x89: the return value is the value that needs to be returned

When status = 0xE0: the return value is an error code

| **Error code** | **Error code meaning**                                       |
| -------------- | ------------------------------------------------------------ |
| 01             | Undefined other exception                                    |
| E0             | No remote control created                                    |
| E1             | The state of this button is not supported                    |
| E2             | The current mode of the air conditioner does not support this button operation |
| E3             | Abnormal loading of data packet                              |
| E4             | Wrong kfid                                                   |
| E5             | rmt.status is incorrect                                      |
| E6             | The current remote control does not have this button         |
| E7             | Non-learning device type, does not support learning          |
| E8             | No learning data for keys                                    |
| E9             | The received length is inconsistent with the specified length of the data packet |
| EA             | Incorrect validation                                         |
| EB             | The packet is too large and cannot be saved                  |
| EE             | One-click code matching and waiting timeout                  |

Table 5

### 3.10 Report air conditioning status parameter feedback

| Command | Switch | Mode | Temperature | Air volume | XOR check |
| ------- | ------ | ---- | ----------- | ---------- | --------- |
| 0x08    | 0      | 1    | 1           | 0          | 0x##      |

Function: When a valid air conditioner remote control signal is received (for example, the user presses the ordinary remote control to control the air conditioner), the air conditioner working status parameters will be fed back in real time. Since the infrared signal is a one-way signal, the air conditioner data controlled by the user pressing the air conditioner panel cannot be fed back.

Command: 0x08

Switch: 0=ON, 1=OFF

Mode: 0=auto, 1=cooling, 2=dehumidification, 3=air supply, 4=heating

Temperature: 0=16℃, 1=17℃,… 14=30℃

Air volume: 0=automatic, 1=low speed wind, 2=medium speed wind, 3=high speed wind

 

## 4 Infrared access flow chart

Note: If you need detailed command explanation, please refer to [6.1 Infrared Data Description]

### 4.1 Match by brand

1. Open the "Infrared Brand Model Correspondence Table.xlsx" and find the device type that needs to be matched.
2. Find the code table corresponding to the corresponding brand
3. Use [3.1 New Remote Control] to create a new remote control
4. Use [3.3 Transmit Infrared Signal] to send key data [Power On], and confirm that the device is powered on.
5. Repeat step 4 1-2 times to test if other button functions are normal.
6. The gateway/server saves the remote control kfid (corresponding remote control number), and the matching ends
7. If it is an air conditioner, you also need to send [3.6 Air Conditioner Status Initialization] to initialize the air conditioner status.

### 4.2 One-click matching

1. Send [3.2 One-click matching] to enter matching mode
2. The user presses the [Power] button on the remote control
3. Parse the kfid in [3.9 Execution Status Return] and save it
4. Use [3.1 New Remote Control] to create a new remote control
5. If it is an air conditioner, you also need to send [3.6 Air Conditioner Status Initialization] to initialize the air conditioner status.

### 4.3 Infrared learning

1. Use [3.4 infrared learning] to learn remote control data
2. Use [3.5 Transmit infrared learning data] to send infrared data

## 5 Button ID and status ID

### 5.1 Air conditioner button ID and status value


| Button ID                                       | Button name          | Button status ID (starting from 0)                           |
| ------------------------------------------- | -------------------- | ------------------------------------------------------ |
| 0                                               | Power                | On [Power], Off                                              |
| 1                                               | Mode                 | Automatic [mode], cooling, dehumidification, air supply, heating, |
| 2                                               | Temperature+         | 16[Temperature+],17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32 |
| 3                                               | Temperature-         | 16[Temperature-],17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32 |
| 4                                               | Wind speed           | Auto [wind speed], low [wind speed -], medium, high [wind speed +], strong wind, hurricane, super hurricane |
| 5                                               | Automatic sweep      | On, off                                                      |
| 6                                               | Manual sweep         | On, off, 1, 2, 3, 4                                          |
| 7                                               | Up and down sweep    | On, off, up, middle, down, up middle, middle down, middle-middle, up-middle, middle-down, automatic, 1, 2, 3, 4, 5 |
| 8                                               | Left and right sweep | On, off, left, center, right, left center, center right, left-right, center-center, automatic, 1, 2, 3, 4, 5, 6, 7 |
| 9                                               | Strong               | On, Off                                                      |
| A                                               | Auxiliary heat       | On, off                                                      |
| B                                               | Sleep                | On, off, sleep 1, sleep 2, sleep 3                           |
| C                                               | Lights               | On, off                                                      |
| D                                               | Mute                 | On, off, mute 1, mute 2                                      |
| E                                               | Energy Saving        | On, Off                                                      |
| F                                               | Ventilation          | On, off                                                      |
| 10                                              | Health               | On, Off                                                      |
| 11                                              | Scheduled opening    | 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21, 22,23,24 |
| 12                                              | Timing off           | 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21, 22,23,24 |
| 13                                              | Custom 1             | Turn on natural wind, turn off natural wind, turn on cleaning, turn off cleaning, turn on formaldehyde removal, turn off formaldehyde removal, turn on purification, turn off purification, turn on drying, turn off drying, turn on mildew prevention, turn off mildew prevention, turn on 3D Wind, turn off 3D wind, turn on negative ions, turn off negative ions |
| 14                                              | Custom 2             | Turn on natural wind, turn off natural wind, turn on cleaning, turn off cleaning, turn on formaldehyde removal, turn off formaldehyde removal, turn on purification, turn off purification, turn on drying, turn off drying, turn on anti-mold, turn off anti-mold, turn on sterilization , off sterilization |

Table 6

### 5.2 TV button ID
| Button ID        | Button name           | Description        |
| ---------------- | --------------------- | ------------------------------------------------------------ |
| 0x00             | Power on              |                                                              |
| 0x01             | Power off             | Generally, power off and power on have the same code, so the power on and off status cannot be accurately distinguished |
| 0x02             | Signal source         |                                                              |
| 0x03             | Home Page             |                                                              |
| 0x04             | Menu                  |                                                              |
| 0x05             | Volume +              |                                                              |
| 0x06             | Volume -              |                                                              |
| 0x07             | Channel+              |                                                              |
| 0x08             | Channel -             |                                                              |
| 0x09             | Return                |                                                              |
| 0x0A             | Mute                  |                                                              |
| 0x0B             | Previous              |                                                              |
| 0x0C             | Next                  |                                                              |
| 0x0D             | Left                  |                                                              |
| 0x0E             | Right                 |                                                              |
| 0x0F             | OK                    |                                                              |
| 0x10             | 1                     |                                                              |
| 0x11             | 2                     |                                                              |
| 0x12             | 3                     |                                                              |
| 0x13             | 4                     |                                                              |
| 0x14             | 5                     |                                                              |
| 0x15             | 6                     |                                                              |
| 0x16             | 7                     |                                                              |
| 0x17             | 8                     |                                                              |
| 0x18             | 9                     |                                                              |
| 0x19             | 0                     |                                                              |
| 0x1A             | -/--                  |                                                              |
| 0x1B             | Review                |                                                              |
| 0x1C             | Alternate             |                                                              |
| 0x1D             | Play/Pause            |                                                              |
| 0x1E             | Pause                 | The pause button often has the same code as "play/pause", so play and pause cannot be accurately distinguished |
| 0x1F             | Stop                  |                                                              |
| 0x20             | Previous song         |                                                              |
| 0x21             | Next song             |                                                              |
| 0x22             | Fast forward          |                                                              |
| 0x23             | Fast rewind           |                                                              |
| 0x24             | Video                 |                                                              |
| 0x25             | TV/Live Broadcast     |                                                              |
| 0x26             | Program List          |                                                              |
| 0x27             | 3D                    |                                                              |
| 0x28             | Favorites/Collections |                                                              |
| 0x29             | HD                    |                                                              |
| 0x2A             | USB                   |                                                              |
| 0x2B             | Screen display        |                                                              |

Table 7

### 5.3 Set-top box button ID

| Button ID                 | Button name           | Description                                                  |
| ------------------------- | --------------------- | ------------------------------------------------------------ |
| 0x00                      | Power on              |                                                              |
| 0x01                      | Power off             | Generally, power off and power on have the same code, so the power on and off status cannot be accurately distinguished |
| 0x02                      | Home Page             |                                                              |
| 0x03                      | Menu                  |                                                              |
| 0x04                      | Volume +              |                                                              |
| 0x05                      | Volume -              |                                                              |
| 0x06                      | Channel+              |                                                              |
| 0x07                      | Channel -             |                                                              |
| 0x08                      | Return                |                                                              |
| 0x09                      | Mute                  |                                                              |
| 0x0A                      | Previous              |                                                              |
| 0x0B                      | Next                  |                                                              |
| 0x0C                      | Left                  |                                                              |
| 0x0D                      | Right                 |                                                              |
| 0x0E                      | OK                    |                                                              |
| 0x0F                      | 1                     |                                                              |
| 0x10                      | 2                     |                                                              |
| 0x11                      | 3                     |                                                              |
| 0x12                      | 4                     |                                                              |
| 0x13                      | 5                     |                                                              |
| 0x14                      | 6                     |                                                              |
| 0x15                      | 7                     |                                                              |
| 0x16                      | 8                     |                                                              |
| 0x17                      | 9                     |                                                              |
| 0x18                      | 0                     |                                                              |
| 0x19                      | -/--                  |                                                              |
| 0x1A                      | Review                |                                                              |
| 0x1B                      | Alternate             |                                                              |
| 0x1C                      | Play/Pause            |                                                              |
| 0x1D                      | Signal source         |                                                              |
| 0x1E                      | Stop                  |                                                              |
| 0x1F                      | Previous song         |                                                              |
| 0x20                      | Next song             |                                                              |
| 0x21                      | Fast forward          |                                                              |
| 0x22                      | Fast rewind           |                                                              |
| 0x23                      | Video                 |                                                              |
| 0x24                      | TV/Live Broadcast     |                                                              |
| 0x25                      | On Demand/Movies      |                                                              |
| 0x26                      | Program List          |                                                              |
| 0x27                      | Favorites/Collections |                                                              |

Table 8

### 5.4 TV box button ID
| Button ID            | Button name   | Description          |
| -------------------- | ------------- | ------------------------------------------------------------ |
| 0x00                 | Power         |                                                              |
| 0x01                 | Power off     | Generally, power off and power on have the same code, so the power on and off status cannot be accurately distinguished |
| 0x02                 | Home Page     |                                                              |
| 0x03                 | Menu          |                                                              |
| 0x04                 | Return        |                                                              |
| 0x05                 | Volume +      |                                                              |
| 0x06                 | Volume -      |                                                              |
| 0x07                 | Mute          |                                                              |
| 0x08                 | Previous      |                                                              |
| 0x09                 | Next          |                                                              |
| 0x0A                 | Left          |                                                              |
| 0x0B                 | Right         |                                                              |
| 0x0C                 | OK            |                                                              |
| 0x0D                 | 1             |                                                              |
| 0x0E                 | 2             |                                                              |
| 0x0F                 | 3             |                                                              |
| 0x10                 | 4             |                                                              |
| 0x11                 | 5             |                                                              |
| 0x12                 | 6             |                                                              |
| 0x13                 | 7             |                                                              |
| 0x14                 | 8             |                                                              |
| 0x15                 | 9             |                                                              |
| 0x16                 | 0             |                                                              |
| 0x17                 | Live TV       |                                                              |
| 0x18                 | On Demand     |                                                              |
| 0x19                 | Channel+      |                                                              |
| 0x1A                 | Channel-      |                                                              |
| 0x1B                 | Play          |                                                              |
| 0x1C                 | Pause         |                                                              |
| 0x1D                 | Video         |                                                              |
| 0x1E                 | Fast forward  |                                                              |
| 0x1F                 | Fast rewind   |                                                              |
| 0x20                 | Stop          |                                                              |
| 0x21                 | Previous song |                                                              |
| 0x22                 | Next song     |                                                              |
| 0x23                 | Review        |                                                              |
| 0x24                 | Settings      |                                                              |
| 0x25                 | APP           |                                                              |
| 0x26                 | Alternate     |                                                              |

Table 9

### 5.5 Fan button ID
| Button ID         | Button name       | Description                                                  |
| ----------------- | ----------------- | ------------------------------------------------------------ |
| 0x00              | Power on          |                                                              |
| 0x01              | Power off         | Generally, power off and power on have the same code, so the power on and off status cannot be accurately distinguished |
| 0x02              | Timing            |                                                              |
| 0x03              | Swinging the Wind |                                                              |
| 0x04              | Wind speed        |                                                              |
| 0x05              | Wind speed +      |                                                              |
| 0x06              | Wind speed -      |                                                              |
| 0x07              | Wind type         |                                                              |
| 0x08              | Negative ions     |                                                              |
| 0x09              | Low speed wind    |                                                              |
| 0x0A              | Wind speed        |                                                              |
| 0x0B              | High wind speed   |                                                              |
| 0x0C              | Wind speed 4      |                                                              |
| 0x0D              | Wind speed 5      |                                                              |
| 0x0E              | Mute              |                                                              |
| 0x0F              | Humidification    |                                                              |
| 0x10              | Heating           |                                                              |
| 0x11              | Refrigeration     |                                                              |
| 0x12              | Timing +          |                                                              |
| 0x13              | Timing-           |                                                              |
| 0x14              | Air purification  |                                                              |
| 0x15              | natural wind      |                                                              |
| 0x16              | Lighting          |                                                              |
| 0x17              | Up and down swing |                                                              |

Table 10

 

## 6 Infrared remote control access routine

### 6.1 Infrared data description

1. Newly built [Midea] air conditioner remote control: 80 01 00 28 00 A9

| **Command** | **Description**                                              |
| ----------- | ------------------------------------------------------------ |
| **0x80**    | Command (create new remote control)                          |
| **0x01**    | Device type, 0x01 means air conditioner                      |
| **0x00**    | High 8 bits of Kfid                                          |
| **0x28**    | Kfid low 8 bits                                              |
| **0x00**    | Reserved bit, fixed to 0                                     |
| **0xA9**    | Checksum (XOR sum calculation based on the previous data) Reference chapter [1.4.3 XOR check algorithm (XOR sum check)] |

Kfid acquisition: Find Table 11, search for [Midea], and learn that Midea's kfid range is decimal [40-59], converted to hexadecimal is [0x28-0x3B]

 

Note: The kfid of infrared remote control has multiple values, 40, 41, 42...59 are all Midea code values. In actual use, there may be situations where a certain button cannot be simulated and other buttons are normal, such as switches, temperature , the wind speed is normal, but the mode cannot be controlled. At this time, you can change other code values for testing.

2. Send boot command 86 01 00 00 00 87

| **Command** | **Description**                                              |
| ----------- | ------------------------------------------------------------ |
| **0x86**    | Command (send infrared data)                                 |
| **0x01**    | Device type, 0x01 means air conditioner                      |
| **0x00**    | Remote control ID, air conditioner corresponding Table 6 |
| **0x00**    | Key value, corresponding to air conditioner Table 6 |
| **0x00**    | Reserved bit, fixed to 0                                     |
| **0x87**    | Checksum (XOR and calculation based on the previous data)    |

3. Send shutdown command: 86 01 00 01 00 86

| **Command** | **Description**                                              |
| ----------- | ------------------------------------------------------------ |
| **0x86**    | Command (send infrared data)                                 |
| **0x01**    | Device type, 0x01 means air conditioner                      |
| **0x00**    | Remote control ID, air conditioner corresponding Table 6 |
| **0x01**    | Key value, corresponding to air conditioner Table 6 |
| **0x00**    | Reserved bit, fixed to 0                                     |
| **0x86**    | Checksum (XOR and calculation based on the previous data)    |

4. Set the temperature to 25℃: 86 01 02 09 00 8C

| **Command** | **Description**                                              |
| ----------- | ------------------------------------------------------------ |
| **0x86**    | Command (send infrared data)                                 |
| **0x01**    | Device type, 0x01 means air conditioner                      |
| **0x02**    | Remote control ID, air conditioner corresponding Table |
| **0x09**    | Key value, corresponding to air conditioner Table 6 (counting from 0, 25℃ corresponds to the 9th one) |
| **0x00**    | Reserved bit, fixed to 0                                     |
| **0x8C**    | Checksum (XOR and calculation based on the previous data)    |


### Air conditioner brand code table (kfid)
| 品牌(brand)                   | 代码(kfid code) | 品牌(brand)                         | 代码(kfid code) | 品牌(brand)          | 代码(kfid code) |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| 格力(Gree)                    | 0000-0019       | 金兴(JINXING)                       | 0900-0904       | 慕森(MUSEEN)         | 1274-1275       |
| 海尔(Haier)                   | 0020-0039       | 弥特斯(MITSEIN)                     | 0905-0909       | 米林客(Millink)      | 1276-1277       |
| 美的(Midea)                   | 0040-0059       | EK(EK)                              | 0910-0914       | 名氏风(Mistral)      | 1278-1279       |
| 长虹(Changhong)               | 0060-0079       | 国祥(KingAir)                       | 0915-0919       | 麦勒(MLJD)           | 1280-1281       |
| 志高(Chigo)                   | 0080-0099       | AQUA(AQUA)                          | 0920-0924       | 波乐(Bole)           | 1282-1285       |
| 奥克斯(AUX)                   | 0100-0119       | Union  aire(Union aire)             | 0925-0929       | 帅康(Sacon)          | 1286-1290       |
| TCL(TCL)                      | 0120-0139       | 韩电(Korechi)                       | 0930-0939       | 威力(Weili)          | 1291-1295       |
| 海信(Hisense)                 | 0140-0159       | Inventor(Inventor)                  | 0940-0944       | 索华(Sova)           | 1296-1297       |
| 科龙(Kelon)                   | 0160-0179       | XINGFEIDQ(XIN  GFEIDQ)              | 0945-0949       | 深宝(ZYMBO)          | 1298-1299       |
| 小米(Xiaomi)                  | 0180-0189       | 新飞飞鸿(XFFH)                      | 0950-0954       | 威特利(Weiteli)      | 1300-1301       |
| 日立(Hitachi)                 | 0190-0209       | 帝智(DIZHI)                         | 0955-0959       | 健伍(Kenwood)        | 1302-1304       |
| 松下(NATPANASONIC)            | 0210-0235       | WINIA(WINIA)                        | 0960-0964       | 弘立(GEE)            | 1305-1306       |
| 东芝(Toshiba)                 | 0236-0245       | 松电(Pascmio)                       | 0965-0969       | 虹立(Hneyrea)        | 1307-1308       |
| 格兰仕(Galanz)                | 0246-0259       | 创野(Chuangye)                      | 0970-0974       | 朗歌(Langge)         | 1309-1313       |
| 三菱重工(MITSUBISHI HEAVY)    | 0260-0279       | 夏科普(Shacopu)                     | 0975-0979       | 欧典(Oudian)         | 1314-1315       |
| 三菱电机(MITSUBISHI ELECTRIC) | 0280-0299       | 正松川(Panwosoci)                   | 0980-0984       | 品格特斯(PGTESS)     | 1316-1317       |
| 三星(Samsung)                 | 0300-0319       | 夏立(SHINELEAF)                     | 0985-0989       | Panwosoci(Panwosoci) | 1318-1319       |
| LG(LG)                        | 0320-0329       | Panatomic(Pana  tomic)              | 0990-0994       | 深圳松下(Partsonic)  | 1320-1321       |
| 惠而浦(Whirlpool)             | 0330-0339       | Paonoca(Paonoca)                    | 0995-0999       | 双凤(TwinSwan)       | 1322-1323       |
| 伊莱克斯(Electrolux)          | 0340-0349       | 歌菱(Geling)                        | 1000-1004       | 深松(Shengsong)      | 1324-1325       |
| 康佳(Konka)                   | 0350-0359       | 夏宝(Sharbo)                        | 1005-1009       | Pamosautc(Pamosautc) | 1326-1327       |
| 大金(Daikin)                  | 0360-0389       | 航天电器(Hangtiandianqi)            | 1010-1014       | 彩星(Caixing)        | 1328-1329       |
| 夏普(Sharp)                   | 0390-0409       | 东宝(Dongbao)                       | 1015-1019       | CMV(CMV)             | 1330-1331       |
| 特灵(TRANE)                   | 0410-0419       | 东洋(Toyo)                          | 1020-1024       | 冬夏(Dongxia)        | 1332-1333       |
| 创维(Skyworth)                | 0420-0429       | 上菱(Shangling)                     | 1025-1029       | 光大(Guangda)        | 1334-1335       |
| 约克(York)                    | 0430-0443       | TECO(TECO)                          | 1030-1034       | 格阳(Geyang)         | 1336-1337       |
| 富士通(Fujitsu)               | 0444-0459       | 欧威尔(Airwell)                     | 1035-1039       | GCHV(GCHV)           | 1338-1339       |
| 新科(Shinco)                  | 0460-0469       | 康拜恩(Combine)                     | 1040-1042       | 华意(HuaYi)          | 1340-1342       |
| 扬子(Yangzi)                  | 0470-0479       | 飞歌(Feige)                         | 1043-1045       | 森宝(Sunburg)        | 1343-1344       |
| 美博(MBO)                     | 0480-0489       | Partsoinc(Partsoi  nc)              | 1046-1049       | 波尔卡(Boerka)       | 1345-1346       |
| 麦克维尔(McQuay)              | 0490-0499       | NiKai(Nikai)                        | 1050-1052       | 爱特(Aite)           | 1347-1348       |
| 新飞(Frestech)                | 0500-0506       | 三菱重工海尔(MITSUBISHIHEAVY-Haier) | 1053-1055       | 艾德龙(Aidelong)     | 1349-1350       |
| 小鸭(Xiaoya)                  | 0507-0509       | 沃顿(Voton)                         | 1056-1059       | 大金星(Dajinxing)    | 1351-1352       |
| TICA(TICA)                    | 0510-0515       | 塔迪兰(Tadiran)                     | 1060-1061       | 多美达(DOMETIC)      | 1353-1354       |
| 先科(SAST)                    | 0516-0519       | 乐新(Lexin)                         | 1062-1063       | 慕森(MUSEEN)         | 1274-1275       |
| 小天鹅(Littleswan)            | 0520-0529       | 诺林(Nuolin)                        | 1064-1066       |                      |                 |
| 三洋(Sanyo)                   | 0530-0559       | 厦门亿林(Xiamenyilin)               | 1067-1069       |                      |                 |
| 荣事达(Royalsta)              | 0560-0565       | 虹声(Horshron)                      | 1070-1071       |                      |                 |
| RCA(RCA)                      | 0566-0569       | LEVANTE(LEVANTE)                    | 1072-1073       |                      |                 |
| 乐京(Lejn)                    | 0570-0573       | 冠远(GuanYuan)                      | 1074-1075       |                      |                 |
| 乐华(Rowa)                    | 0574-0589       | 百合(LilyTech)                      | 1076-1078       |                      |                 |
| 卡萨帝(Casarte)               | 0590-0595       | 阳光(Sunny)                         | 1079-1080       |                      |                 |
| 开利(Carrier)                 | 0596-0619       | 云米(VIOMI)                         | 1081-1082       |                      |                 |
| 积微(Giwee)                   | 0620-0622       | 索伊(Soyea)                         | 1082-1085       |                      |                 |
| 金三洋(Jensany)               | 0623-0629       | 西冷(Serene)                        | 1086-1088       |                      |                 |
| 华凌(Hualing)                 | 0630-0639       | 樱花电器(Cheblo)                    | 1089-1094       |                      |                 |
| 国美(GOME)                    | 0640-0644       | 智米(SmartMi)                       | 1095-1099       |                      |                 |
| 歌林(Gelin)                   | 0645-0655       | 博世(BOSCH)                         | 1100-1104       |                      |                 |
| 春兰(Chunlan)                 | 0656-0666       | 日松(Partmusic)                     | 1105-1109       |                      |                 |
| 奥力(Aoli)                    | 0667-0669       | FUNIKI(funiki)                      | 1110-1114       |                      |                 |
| 澳柯玛(Aucma)                 | 0670-0675       | 雪莱尔(Hilaire)                     | 1115-1116       |                      |                 |
| 双鹿(Shuanglu)                | 0676-0679       | 惠科(HKC)                           | 1117-1119       |                      |                 |
| 苏宁极物(JIWU)                | 0680-0683       | Blue  Star(Blue Star)               | 1120-1125       |                      |                 |
| 统帅(Leader)                  | 0684-0688       | 东元(TECO)                          | 1126-1128       |                      |                 |
| 汤姆森(TOMSEN)                | 0689-0693       | 松川(Paohanic)                      | 1129-1131       |                      |                 |
| 现代(Hyundai)                 | 0694-0699       | 金正(Nintaus)                       | 1132-1136       |                      |                 |
| 熊猫(Panda)                   | 0700-0704       | 欧菱宝(OlimpiaSplendid)             | 1137-1139       |                      |                 |
| 新迎燕(Xyingyan)              | 0705-0709       | 飞利浦(Philips)                     | 1140-1145       |                      |                 |
| 申花(Shenhua)                 | 0710-0712       | 丰泽(Fortress)                      | 1146-1147       |                      |                 |
| 中松(Pascmio)                 | 0713-0714       | MEILIHONGZUAN(MEILIHONGZUAN)        | 1148-1149       |                      |                 |
| 月兔(Yuetu)                   | 0715-0719       | 天加(TICA)                          | 1150-1154       |                      |                 |
| 方米(FZM)                     | 0720-0721       | 骏安达(Junda)                       | 1155-1159       |                      |                 |
| 雪菲特(XFT)                   | 0722-0723       | 以莱特(Electra)                     | 1160-1162       |                      |                 |
| 波音(Boyin)                   | 0724-0725       | 名亿(Mingyi)                        | 1163-1165       |                      |                 |
| 华宝(Huabao)                  | 0726-0729       | IFB(IFB)                            | 1166-1167       |                      |                 |
| 大宇(Daewoo)                  | 0730-0735       | Kingsfin(Kingsfin)                  | 1168-1169       |                      |                 |
| 高路华(Conrowa)               | 0736-0739       | Onida(Onida)                        | 1170-1172       |                      |                 |
| 古桥(Guqiao)                  | 0740-0745       | 鑫源(SUITTC)                        | 1173-1175       |                      |                 |
| 华科(Huake)                   | 0746-0749       | COLMO(COLMO)                        | 1176-1177       |                      |                 |
| 华美(Huamei)                  | 0750-0754       | 多钻花(DuoZuanHua)                  | 1178-1179       |                      |                 |
| 金松(Jinsong)                 | 0755-0759       | 惠康(Huikang)                       | 1180-1181       |                      |                 |
| 日索(Risuo)                   | 0760-0764       | 吉普生(Gibson)                      | 1182-1189       |                      |                 |
| 绅宝(Shenbao)                 | 0765-0769       | FIRST(FIRST)                        | 1190-1191       |                      |                 |
| 万宝(Wanbao)                  | 0770-0774       | 金鸿盛(JHS)                         | 1192-1193       |                      |                 |
| 内田(Neitian)                 | 0775-0779       | 美菱(Meiling)                       | 1194-1197       |                      |                 |
| 凉宇(Electra)                 | 0780-0784       | 万士益(Maxe)                        | 1198-1201       |                      |                 |
| BlueStar(BlueStar)            | 0785-0789       | SKG(SKG)                            | 1202-1203       |                      |                 |
| Voltas(Voltas)                | 0790-0794       | 喜事来(ACL)                         | 1204-1205       |                      |                 |
| 爱家乐(Akira)                 | 0795-0799       | 同益(Tongyi)                        | 1206-1207       |                      |                 |
| Panlisen(Panlisen)            | 0800-0801       | 天元(Tianyuan)                      | 1208-1209       |                      |                 |
| 乐信(Rasonic)                 | 0802-0809       | 天汇集成(TianHui)                   | 1210-1211       |                      |                 |
| 赢松(Palcsicons)              | 0810-0811       | 天津(Tianjin)                       | 1212-1213       |                      |                 |
| 盈田(ITAN)                    | 0812-0814       | Tair(Tair)                          | 1214-1215       |                      |                 |
| WhirciPol(Whirci Pol)         | 0815-0819       | 万家乐(Macro)                       | 1216-1219       |                      |                 |
| 长谷(Changgu)                 | 0820-0824       | 新乐(Xinle)                         | 1220-1223       |                      |                 |
| Funiki(funiki)                | 0825-0829       | 新华宝(Xinhuabao)                   | 1224-1225       |                      |                 |
| 亿瑞特(Yiruite)               | 0830-0834       | 兄弟(Xiongdi)                       | 1226-1227       |                      |                 |
| 三钻(Sanzuan)                 | 0835-0839       | 宾维(BENWIN)                        | 1228-1229       |                      |                 |
| 德澳西(Deroxi)                | 0840-0844       | 山水(Sanshui)                       | 1230-1231       |                      |                 |
| 飞达仕(Fedders)               | 0845-0849       | 飞歌中国(Phlgco)                    | 1232-1233       |                      |                 |
| 韩亚(Paonoca)                 | 0850-0854       | 麟酷(LinkCool)                      | 1234-1235       |                      |                 |
| 五强(WUQ)                     | 0855-0859       | NEC(NEC)                            | 1236-1238       |                      |                 |
| 新菱(Sinro)                   | 0860-0864       | 蓝波(Lanbo)                         | 1239-1249       |                      |                 |
| 影雅(Insignia)                | 0865-0869       | 长岭(Changling)                     | 1250-1259       |                      |                 |
| 宜科(Elco)                    | 0870-0874       | 金立(JinLi)                         | 1260-1261       |                      |                 |
| VICOO(VICOO)                  | 0875-0879       | 汇丰(Huifeng)                       | 1262-1265       |                      |                 |
| GMCC(GMCC)                    | 0880-0884       | 黄河(Huanghe)                       | 1266-1267       |                      |                 |
| 新世纪(Xinshiji)              | 0885-0889       | 海林(HaiLin)                        | 1268-1269       |                      |                 |
| 本岛(BENDAO)                  | 0890-0894       | CIH(CIH)                            | 1270-1271       |                      |                 |
| 东方三星(SUMSAXNG)            | 0895-0899       | 美歌(Meico)                         | 1272-1273       |                      |                 |

Table 11

### TV brand code table (kfid)

| 品牌(brand)               | 代码(kfid code) | 品牌(brand)              | 代码(kfid code) | 品牌(brand)                  | 代码(kfid code) |
| ------------------------- | ------------------ | ------------------------ | ------------------ | ---------------------------- | ------------------ |
| Addsion(Addsion)          | 1          | 海虹(Haihong)            | 0575-0585  | SMVSVNUG(SM  VSVNUG)         | 1013       |
| Ambassador(Am bassador)   | 2          | 瀚丽美(D&Q)              | 586        | SNAPR(SNAPR)                 | 1014       |
| 奥丽维亚(OLEVIA)          | 0003-0005  | 瀚斯宝丽(Hannspree)      | 0587-0588  | Spectricon(Spect  ricon)     | 1015-1018  |
| 奥克斯(AUX)               | 6          | 瀚视奇(Hanns.G)          | 0589-0590  | 三丸(Mitsumaru)              | 1019       |
| 奥图码(Optoma)            | 0007-0008  | 环宇(Huanyu)             | 0591-0595  | 三健(Sanjian)                | 1020       |
| 奥托邮购(Otto Versand)    | 9          | 画佳(Hiplus)             | 0596-0600  | 三元(Sanyuan)                | 1021-1025  |
| 奥林匹亚(Aolinpiya)       | 10         | 皓丽(Horion)             | 601        | 三垦(Sanken)                 | 1026       |
| 奥林匹克(Olympic)         | 0011-0012  | 禾聊硕(Herosonic)        | 602        | 三星(Samsung)                | 1027-1059  |
| 奥林普(Aolinpu)           | 0013-0014  | 禾联(Heran)              | 0603-0609  | 三洋(Sanyo)                  | 1060-1080  |
| 奥特斯(Altus)             | 0015-0016  | 红岩(Hongyan)            | 610        | 三穗(Sansui)                 | 1081       |
| 安华(Anhua)               | 0017-0019  | 红梅(Hongmei)            | 611        | 三羊(SAMYON)                 | 1082       |
| 爱华(Aiwa)                | 0020-0025  | 虹美(Hongmei)            | 0612-0620  | 三菱(Mitsubishi)             | 1083-1085  |
| 爱家乐(Akira)             | 26         | 韩电(Korechi)            | 0621-0622  | 三间(Sanjian)                | 1086       |
| 爱芒果(IMGO)              | 27         | 黄山(Huangshan)          | 0623-0626  | 上广电(SVA)                  | 1087-1092  |
| 爱迪生(Addison)           | 0028-0030  | 黄海美(Huanghaimei)      | 0627-0628  | 上海(Shanghai)               | 1093-1096  |
| 艾默生(Emerson)           | 0031-0035  | 黄龙(Huanglong)          | 629        | 塞河(Seye)                   | 1097       |
| Baysonic(Bayson ic)       | 36         | Inteo(Inteo)             | 630        | 声光(SONIQ)                  | 1098-1100  |
| Beuamark(Beua mark)       | 0037-0040  | 京东方(BOE)              | 0631-0632  | 声宝夏普(Sungpo)             | 1101-1102  |
| 佰乐(Baile)               | 0041-0053  | 佳丽彩(Jialicai)         | 0633-0643  | 山水(Sanshui)                | 1103-1108  |
| 保迪(Protech)             | 54         | 健伍(Kenwood)            | 0644-0645  | 山茶(Camellia)               | 1109-1114  |
| 倍科(Beko)                | 55         | 嘉华(Kawa)               | 0646-0655  | 数源(Soyea)                  | 1115-1124  |
| 北京(Beijing)             | 0056-0065  | 将军(General)            | 0656-0657  | 新视代(Xinshidai)            | 1125       |
| 博一格数码(Boigle)        | 66         | 敬泰(Gintai)             | 0658-0659  | 松下(Panasonic)              | 1126-1132  |
| 宝丽莱(Polaroid)          | 0067-0068  | 景新(Vito)               | 0660-0665  | 松井(Matsui)                 | 1133-1135  |
| 宝华视(Baohuashi)         | 0069-0073  | 杰爱威(JAV)              | 0666-0667  | 松夏(Nashinal)               | 1136       |
| 宝声(Baosheng)            | 0074-0077  | 极米(XGIMI)              | 0668-0672  | 松柏(Evergreen)              | 1137-1138  |
| 宝立创(Polytron)          | 0078-0086  | 精派非木(NONWOOD)        | 673        | 松电(Pascmio)                | 1139-1144  |
| 布什(Bush)                | 0087-0088  | 精英(Elite)              | 674        | 狮龙(Sherwood)               | 1145       |
| 暴风 TV(BaofengTV)        | 89         | 菊花(Juhua)              | 0675-0678  | 生力(Shengli)                | 1146       |
| 步步高(BBK)               | 90         | 金凤(Jinfeng)            | 679        | 神彩(Shencai)                | 1147-1154  |
| 百合花(Baihehua)          | 91         | 金利普(Jinlipu)          | 0680-0683  | 索佳(Sogood)                 | 1155-1158  |
| 百容(BCE)                 | 92         | 金塔(Jinta)              | 684        | 索尼(Sony)                   | 1159-1165  |
| 百花(Baihua)              | 0093-0095  | 金星(Jinxing)            | 0685-0686  | 索映(Suoying)                | 1166       |
| 贝灵巧(Bell & Howell)     | 96         | 金正(Nintaus)            | 0687-0690  | 胜利(JVC)                    | 1167-1181  |
| Carver(Carver)            | 97         | 金鑫板(Jinxinban)        | 691        | 萨基姆(Sagem)                | 1182       |
| Chaparral(Chapa rral)     | 98         | 金雀(Siskin)             | 0692-0697  | 视丽(Seleco)                 | 1183       |
| CHKQ(CHKQ)                | 99         | 金鹊(Jinque)             | 0698-0700  | 赛格(Saige)                  | 1184-1186  |
| Chunghsin(Chunghsin)      | 0100-0104  | 鉴声(Jiansheng)          | 0701-0702  | 赛格三星(SIVNSUNG)           | 1187-1188  |
| Cox(Cox)                  | 105        | 集品(JiPiN)              | 703        | 韶峰(Shaofeng)               | 1189-1193  |
| 创佳(Canca)               | 0106-0113  | Kaisui(Kaisui)           | 704        | TaiWah(TaiWah)               | 1194       |
| 创维(Skyworth)            | 0114-0145  | Kanghua(Kangh  ua)       | 705        | TCL(TCL)                     | 1195-1251  |
| 彩凌(Cailing)             | 0146-0148  | KMC(KMC)                 | 0706-0708  | TCRC(TCRC)                   | 1252       |
| 彩星(Playmates)           | 0149-0153  | 凯壹(Bestwell)           | 709        | TOPCONPro(TO  PCONPro)       | 1253       |
| 彩虹(Rainbow)             | 0154-0155  | 凯擘(Kbro)               | 710        | TVBB(TVBB)                   | 1254       |
| 彩讯(Caixun)              | 156        | 凯歌(Kaige)              | 711        | TVM(TVM)                     | 1255       |
| 彩诗(Caishi)              | 157        | 凯红(Kaihong)            | 712        | 台山(Taishan)                | 1256       |
| 成都(Chengdu)             | 0158-0159  | 凯驰(Karcher)            | 713        | 台林(TaiLin)                 | 1257-1260  |
| 春兰(Chunlan)             | 160        | 孔雀(Kongque)            | 714        | 同光(Tongguang)              | 1261       |
| 春笋(Chunsun)             | 0161-0163  | 库伦旗(Kulunqi)          | 715        | 天庚板(Tiangengban)          | 1262-1266  |
| 春风(Chunfeng)            | 0164-0167  | 康下(Kangxia)            | 716        | 天敏(10Moons)                | 1267       |
| 朝虹(Chaohong)            | 168        | 康佳(konka)              | 0717-0758  | 天科板(Tiankeban)            | 1268-1274  |
| 朝野科技(Asano)           | 169        | 康冠(KTC)                | 759        | 天诚智能(CCL)                | 1275-1276  |
| 长城(Great Wall)          | 0170-0174  | 康力(Kangli)             | 760        | 天鹅(Swan)                   | 1277-1280  |
| 长海(Changhai)            | 175        | 康威(Kangwei)            | 761        | 天龙(Denon)                  | 1281       |
| 长虹(Changhong)           | 0176-0216  | 康宏(Kanghong)           | 762        | 太尹(Taiyin)                 | 1282       |
| 长风(Changfeng)           | 0217-0224  | 康家(KOAIKA)             | 763        | 汤姆逊(Thomson)              | 1283-1287  |
| 长飞(Changfei)            | 0225-0232  | 康维(Comverse)           | 0764-0768  | 突格兰(TUGUAN)               | 1288       |
| Detron(Detron)            | 233        | 康艺(Kanyi)              | 0769-0773  | 统帅(Leader)                 | 1289-1290  |
| DreamVision(Dream Vision) | 0234-0235  | 昆仑(Kunlun)             | 0774-0780  | 腾博(Tanberg)                | 1291       |
| 东元(TECO)                | 0236-0254  | 看尚(CANTV)              | 0781-0782  | 通广(Tongguang)              | 1292       |
| 东凌(Tomico)              | 0255-0262  | 科朗(Kelang)             | 783        | 通用(G.E.)                   | 1293-1296  |
| 东大(Dongda)              | 0263-0266  | 酷开(Coocaa)             | 784        | V  Smart(V Smart)            | 1297       |
| 东宝(Tobo)                | 0267-0274  | LG  乐金(LG)             | 0785-0804  | Vidda(Vidda)                 |            |
| 东帝士(Tuntex)            | 0275-0278  | Lloytron(Lloytron)       | 805        | ViViD(ViViD)                 | 1298       |
| 东杰(Eastkit)             | 0279-0286  | 丽格美(Lgm)              | 806        | 万佳(WanJia)                 | 1299       |
| 东林(Donglin)             | 0287-0295  | 丽讯(Vivitek)            | 807        | 万利达(Malata)               | 1300-1301  |
| 东洋(Toyo)                | 0296-0301  | 乐华(Rowa)               | 0808-0818  | 唯冠(Proview)                | 1302       |
| 东海(Donghai)             | 0302-0304  | 乐富豪(Wharfedale)       | 819        | 威牌(Viagra  Brand)          | 1303-1305  |
| 东芝(Toshiba)             | 0305-0320  | 乐视(LeTV)               | 0820-0822  | 微鲸(Whaley)                 | 1306       |
| 东门子(SAMOS)             | 321        | 利华(Lihua)              | 823        | 沃夫德尔(Wharfedale)         | 1307       |
| 丹尼克斯(Dynex)           | 0322-0323  | 浪潮(Inspur)             | 824        | 沃立方(Woo3)                 | 1308       |
| 丹特声(Dantax)            | 0324-0326  | 理想(Risun)              | 825        | 王牌名典(WANGPAIMINGDIAN)    | 1309       |
| 冬凌(Dongling)            | 327        | 稑威福(Newave)           | 0826-0829  | 王牌百惠(Wangpaibaihui)      | 1310       |
| 大亚(Dare)                | 328        | 联想(Lenvo)              | 0830-0831  | 瓦里(HuaRi)                  | 1311       |
| 大同(Tatung)              | 329        | 联硕(Digisonic)          | 832        | 先科(SAST)                   | 1312-1315  |
| 大宇(Daewoo)              | 0330-0335  | 联通(LT  TV)             | 833        | 先锋(Pioneer)                | 1316-1321  |
| 大崎(Osaki)               | 336        | 蓝星(Lanxing)            | 834        | 厦新(Amoisonic)              | 1322-1323  |
| 德丽珑(Dll)               | 337        | 雷诺(Relon)              | 835        | 喜事来(ACL)                  | 1324       |
| 德加拉(Thakral)           | 338        | 雷鸟(FFALCON)            | 836        | 喜鹊(Xique)                  | 1325       |
| 德国莫顿(Tevion)          | 339        | 龙云(LongWin)            | 837        | 夏华(Prima)                  | 1326-1343  |
| 德基德克(Digitec)         | 0340-0344  | 龙江(LongJiang)          | 838        | 夏新(Amoi)                   | 1344-1352  |
| 德律风根(Telefunken)      | 0345-0347  | Matsushita(Mats  ushita) | 839        | 夏普(Sharp)                  | 1353-1375  |
| 戴尔(DELL)                | 348        | 墨肯(MoreKen)            | 840        | 夏浦(SAHPR)                  | 1376       |
| 电城(Denstar)             | 349        | 明基(BenQ)               | 0841-0849  | 夏讯(AJVXI)                  | 1377       |
| 蒂雅克(Teac)              | 350        | 明彩(MC  TV)             | 850        | 小度(Xiaodu)                 | 1378       |
| 鼎科(Dingke)              | 351        | 梦寐(Meng  Mei)          | 851        | 小米(Xiaomi)                 | 1379       |
| Elta(Elta)                | 352        | 梦派(Menpad)             | 852        | 希沃(Seewo)                  | 1380       |
| Futuretech(Futur etech)   | 353        | 梦美(Mengmei)            | 853        | 幸福(Xingfu)                 | 1381-1383  |
| 丰泽(Fortress)            | 354        | 满天星(Mantianxing)      | 854        | 新思达(NewStar)              | 1384-1393  |
| 富丽(Wealthy)             | 355        | 牡丹(Mudan)              | 0855-0862  | 新抚(Xinfu)                  | 1394       |
| 富及第(Frigidaire)        | 0356-0358  | 美丽加(HomeBeauty)       | 863        | 新日松(Xinrisong)            | 1395-1397  |
| 富可视(Infocus)           | 0359-0361  | 美乐(Melody)             | 0864-0869  | 新科(Shinco)                 | 1398-1399  |
| 富士康(Foxconn)           | 0362-0364  | 美乐华纳(Melodl)         | 870        | 新视代(Xinshidai)            | 1400       |
| 富士通(Fujitsu)           | 0365-0371  | 美齐(Jean)               | 0871-0878  | 新飞(Frestec)                | 1401       |
| 富士通先端科技(Frontech)  | 372        | 麦凯龙(Makena)           | 879        | 旭景(Sunview)                | 1402       |
| 富里(Fuli)                | 0373-0374  | NEC(NEC)                 | 0880-0884  | 星海(Xinghai)                | 1403-1406  |
| 福日(Furi)                | 0375-0378  | Nesco(Nesco)             | 885        | 熊猫(Panda)                  | 1407-1455  |
| 锋派(HPP)                 | 379        | New  Sonic(New Sonic)    | 886        | 现代(Hyundai)                | 1456-1458  |
| 风行 TV(Fun TV)           | 380        | NPC(NPC)                 | 887        | 翔宇(xiangyu)                | 1459       |
| 飞利浦(Philips)           | 0381-0395  | 南声(Nansheng)           | 0888-0892  | 西凡尼亚(Sylvania)           | 1460-1461  |
| 飞歌(Phlgco)              | 396        | 南宝(South  Po)          | 0893-0900  | 西屋(Westinghouse)           | 1462-1475  |
| 飞浪(Feilang)             | 0397-0400  | 尼康(Nikon)              | 0901-0906  | 西湖(Xihu)                   | 1476-1485  |
| 飞燕(Feiyan)              | 0401-0405  | 诺基亚(Nokia)            | 0907-0908  | 西门子(Siemens)              | 1486-1487  |
| 飞跃(Feiyue)              | 0406-0407  | OPPO(OPPO)               | 909        | 鑫萌(Xinmeng)                | 1488-1495  |
| 飞鹿(Feilu)               | 0408-0412  | 奥丽维亚(OLEVIA)         | 0910-0915  | 雪莲(Xuelian)                | 1496-1499  |
| Go Video(Go Video)        | 413        | 欧凌(Ouling)             | 0916-0920  | 一加(OnePlus)                | 1500       |
| Grunpy(Grunpy)            | 0414-0415  | 欧宝丽(Oboni)            | 921        | 亿硕(Esonic)                 | 1501-1503  |
| 冠捷(AOC)                 | 0416-0420  | 欧琳(Oulin)              | 922        | 优拉纳斯(Excellent  Lana Si) | 1504-1507  |
| 根德(Grundig)             | 0421-0424  | 欧迪福斯(Audiovox)       | 0923-0926  | 优派(Viewsonic)              | 1508-1515  |
| 歌林(Kolin)               | 0425-0433  | 讴歌(Akura)              | 927        | 优盟(U-Men)                  | 1516       |
| 港泰(Gangtai)             | 0434-0438  | PBI(PBI)                 | 928        | 优视达(Ustar)                | 1517-1522  |
| 赣新(Ganxin)              | 0439-0442  | PH  王牌(PHWangpai)      | 929        | 宇瑟(Ether)                  | 1523-1525  |
| 高士达(Goldstar)          | 0443-0459  | Polestar(Polestar)       | 930        | 宇航(Yuhang)                 | 1526-1531  |
| 高路华(Conrowa)           | 0460-0468  | Porland(Porland)         | 0931-0939  | 影雅(Insignia)               | 1532       |
| 高飞(Coby)                | 0469-0470  | PPTV(PPTV)               | 0940-0941  | 易美逊(Envision)             | 1533-1534  |
| Hallmark(Hallma rk)       | 471        | Praxis(Praxis)           | 942        | 杨子(Yangzi)                 | 1535-1537  |
| HKC(HKC)                  | 0472-0473  | 普腾(Proton)             | 0943-0945  | 永固(Yonggu)                 | 1538       |
| 华发(Huafa)               | 0474-0475  | 盘古(Pangoo)             | 946        | 永宝(Yongbao)                | 1539-1544  |
| 华强(Huaqiang)            | 476        | 鹏程(Pengcheng)          | 947        | 永弘王牌(Yonghongwangpai)    | 1545       |
| 华润(HuaTun)              | 477        | 启客(ChiQ)               | 0948-0950  | 英可(Inkel)                  | 1546       |
| 华硕(ASUS)                | 0478-0480  | 奇美(Chimei)             | 0951-0957  | 莺歌(Yingge)                 | 1547       |
| 华美(Huamei)              | 481        | 清华同方(THTF)           | 0958-0965  | 雅佳(Akai)                   | 1548-1553  |
| 华融(Kll)                 | 482        | 青云电器(Monivision)     | 0966-0967  | 雅马哈(Yamaha)               | 1554       |
| 华顿(Warton)              | 483        | 青云科技(Albatron)       | 968        | 中恒(DEC)                    | 1555       |
| 好人士(Goodmans)          | 484        | 青岛(Qingdao)            | 969        | 中松(Pascmio)                | 1556-1557  |
| 宏碁(Acer)                | 0485-0486  | Royalster(Royals  ter)   | 970        | 中韩(Chiko)                  | 1558-1559  |
| 幻象(Monix)               | 487        | 人鱼数码(Mermaid)        | 971        | 兆赫(Zinwell)                | 1560-1561  |
| 惠佳捷(Waycon)            | 488        | 如意(RUYI)               | 0972-0974  | 卓异(Zhouyi)                 | 1562       |
| 惠普(HP)                  | 489        | 日松(Partmusic)          | 975        | 志高(Chigo)                  | 1563       |
| 惠浦(HPC)                 | 490        | 日派(Ripai)              | 976        |                              |            |
| 惠科(HKC)                 | 0491-0492  | 日电(NEC)                | 0977-0982  |                              |            |
| 惠鑫(HUIXIN)              | 493        | 日立(Hitachi)            | 0983-0999  |                              |            |
| 慧浦神望(Across)          | 494        | 日红(Rihong)             | 1000       |                              |            |
| 慧蒲(Huipu)               | 495        | 日芝(Rizhi)              | 1001       |                              |            |
| 汇佳板(Huijiaban)         | 496        | 日高(Nikko)              | 1002       |                              |            |
| 海乐(Haile)               | 0497-0501  | 瑞轩(Vizio)              | 1003-1008  |                              |            |
| 海信(Hisense)             | 0502-0538  | 睿侠(RadioShack)         | 1009       |                              |            |
| 海尔(Haier)               | 0539-0570  | Scimitsu(Scimitsu)       | 1010       |                              |            |
| 海得曼(Advante)           | 0571-0572  | Semivox(Semivox)         | 1011       |                              |            |
| 海燕(Haiyan)              | 0573-0574  | SET(SET)                 | 1012       |                              |            |
Table 12

### projector brand code table (kfid)

| 品牌(brand)               | 代码 (kfid code) | 品牌(brand)                      | 代码 (kfid code) | 品牌(brand)                             | 代码 (kfid code) |
| ------------------------- | ------------------ | -------------------------------- | -------------------- | --------------------------------------- | -------------------- |
| 3M(3M)                    | 0001-0005        | 鸿合(Honghe)                     | 152              | ROLY(ROLY)                              | 260              |
| Alfawise(Alfawise)        | 6                | Igood(Igood)                     | 153              | 日电(NEC)                               | 0261-0266        |
| AMOOWA(AMO OWA)           | 7                | 久量(DP)                         | 154              | 日立(Hitachi)                           | 0267-0273        |
| Ampro(Ampro)              | 0008-0009        | 今台(KingBright)                 | 155              | 瑞格尔(Rigal)                           | 274              |
| Artograph(Artog raph)     | 10               | 佳可视(Jiakeshi)                 | 0156-0157        | 瑞视达(Ruishida)                        | 275              |
| ASKProxima(ASK Proxima)   | 0011-0013        | 佳能(Canon)                      | 0158-0161        | 瑞诚(RuiCheng)                          | 0276-0280        |
| 奥图码(Optoma)            | 0014-0020        | 坚果(JmGo)                       | 0162-0164        | 锐影(Ruiying)                           | 0281-0282        |
| 爱其(Eiki)                | 0021-0025        | 极投(Jitou)                      | 165              | ScreenInnovations(Scre  en Innovations) | 283              |
| 爱普生(Epson)             | 0026-0034        | 极米(XGIMI)                      | 0166-0168        | SIM2(SIM2)                              | 0284-0287        |
| 艾路摩(ELMO)              | 35               | 激眠(Jimian)                     | 169              | 三星(Samsung)                           | 0288-0290        |
| 博思尼(Bosini)            | 0036-0037        | 金麦克(K-MIC)                    | 170              | 三洋(Sanyo)                             | 0291-0296        |
| 宝丽莱(Polaroid)          | 0038-0042        | 凯阅(Kaiyue)                     | 0171-0172        | 三浦(Sanpu)                             | 297              |
| 宝利通(Polycom)           | 43               | 卡兹特(Kazite)                   | 173              | 三菱(Mitsubishi)                        | 0298-0302        |
| 宝施玛(Proxima)           | 44               | 卡西欧(Casio)                    | 0174-0175        | 山水(Sansui)                            | 0303-0305        |
| 宝莱特(Boxlight)          | 45               | 开心(KIXIN)                      | 176              | 松下(Panasonic)                         | 0306-0310        |
| 巴可(Barco)               | 46               | 柯达(Kodak)                      | 177              | 索尼(Sony)                              | 0311-0315        |
| 百度(Baidu)               | 0047-0052        | 科若(Keruo)                      | 178              | 索诺克(Sonnoc)                          | 316              |
| Cinego(Cinego)            | 53               | 科视(Christie  Digital)          | 179              | 胜利(JVC)                               | 0317-0318        |
| CTX(CTX)                  | 54               | 酷乐视(Coolux)                   | 0180-0181        | 视丽(Seleco)                            | 0319-0320        |
| 创维(Skyworth)            | 55               | 酷佰特(CoBoT)                    | 182              | 视美乐(SEEMILE)                         | 321              |
| 创荣(CRE)                 | 0056-0058        | 酷道(Kudao)                      | 183              | 诗威(Cineversum)                        | 322              |
| 彩虹(Rainbow)             | 0059-0061        | LG  乐金(LG)                     | 0184-0188        | 赛科(Saike)                             | 0323-0324        |
| 晨星(Daystar)             | 0062-0066        | 丽讯(Vivitek)                    | 0189-0191        | 闪道(Shandao)                           | 325              |
| 长虹(ChangHong)           | 67               | 乐佳达(Lejiada)                  | 0192-0193        | Telex(Telex)                            | 0326-0327        |
| DreamVision(DreamVision)  | 0068-0069        | 乐曼(LMIX)                       | 194              | Tenker(Tenker)                          | 328              |
| Dukane(Dukane)            | 0070-0074        | 乐盼达(Lepanda)                  | 195              | 图美时代(Tumetimes)                     | 0329-0331        |
| Dwin(Dwin)                | 0075-0076        | 兰科(Runco)                      | 0196-0197        | 天猫魔屏(TMall)                         | 332              |
| 东方中原(Donview)         | 77               | 利景(Liesegang)                  | 198              | 天诚智能(CCL)                           | 0333-0334        |
| 东芝(Toshiba)             | 0078-0082        | 恋投(Liantou)                    | 0199-0200        | 投美(Toumei)                            | 335              |
| 戴尔(DELL)                | 0083-0087        | 朗视(Lanshi)                     | 201              | 统帅(Leader)                            | 336              |
| 打令(Darling)             | 88               | 理光(Ricoh)                      | 202              | WolfVision(Wolf  Vision)                | 337              |
| 蒂彤(DITONG)              | 89               | 立影(Liying)                     | 203              | 万利达(Malata)                          | 0338-0339        |
| Electrohome(Ele ctrohome) | 90               | 联想(Lenovo)                     | 204              | 万德成(Wangdecheng)                     | 340              |
| Excelvan(Excelvan)        | 0091-0092        | 郎曼(Langman)                    | 0205-0206        | 万播(Wanbo)                             | 341              |
| E 家乐(E jiale)           | 93               | 雷克赛恩(Luxciine)               | 0207-0209        | 威得光(Vidikron)                        | 0342-0343        |
| 富可视(Infocus)           | 0094-0099        | MondeVue(MondeVue)               | 210              | 先奇(XianQi)                            | 0344-0345        |
| 富士通(Fujitsu)           | 0100-0104        | 明基(BenQ)                       | 0211-0217        | 先科(SAST)                              | 0346-0350        |
| 方正(Founder)             | 0105-0109        | 美迪(MDI)                        | 0218-0220        | 先锋(Pioneer)                           | 0351-0355        |
| 梵斯(Fuss)                | 110              | 马兰士(Marantz)                  | 221              | 喜瑞(XERUN)                             | 356              |
| 福满门(Fumanmen)          | 0111-0112        | 魅乐士(Meileshi)                 | 222              | 夏新(Amoi)                              | 0357-0359        |
| 飞兰(Phylina)             | 113              | 魔影(MOV)                        | 223              | 夏普(Sharp)                             | 0360-0364        |
| 飞利浦(PHILIPS)           | 0114-0117        | 麦景图(Mclntosh)                 | 224              | 小帅(Xiaoshuai)                         | 365              |
| 光峰(Appotronics)         | 118              | NAD(NAD)                         | 225              | 小蜗(Xiaowo)                            | 366              |
| 光米(Guangmi)             | 119              | NEC(NEC)                         | 0226-0233        | 亿科(Yike)                              | 367              |
| 光趣(Guangqu)             | 120              | 纳西迪(Nextar)                   | 234              | 优丽可(UNIC)                            | 368              |
| Hughes(Hughes)            | 121              | 纽曼(Newsmy)                     | 0235-0236        | 优可晟(UKCSIS)                          | 369              |
| 华录(Hualu)               | 122              | 诺尔系统(Knoll  Systems)         | 237              | 优派(Viewsonic)                         | 0370-0376        |
| 华柏(Huabai)              | 0123-0124        | Oson(Oson)                       | 238              | 寓影(Yuyin)                             | 377              |
| 华硕(ASUS)                | 0125-0126        | 欧擎(Ouqing)                     | 0239-0241        | 扬子(Yangzi)                            | 378              |
| 华阳(Huayang)             | 127              | 欧艾斯(Oais)                     | 242              | 雅图(ACTO)                              | 379              |
| 哈曼卡顿(Harman Kardon)   | 128              | Plusvision(Plusvi  sion)         | 243              | 雅马哈(Yamaha)                          | 0380-0387        |
| 宏碁(Acer)                | 0129-0136        | Projectavision(Pr  ojectavision) | 244              | Zenith(Zenith)                          | 388              |
| 惠普(HP)                  | 0137-0141        | 平达(Planar)                     | 245              | 中光学(Costar)                          | 389              |
| 欢乐投(Huanletou)         | 0142-0143        | 拍得丽(Premier)                  | 0246-0250        | 中宝(ZhongBao)                          | 0390-0394        |
| 海尔(Haier)               | 0144-0145        | 普乐士(Plus)                     | 251              | 智歌(ZECO)                              | 0395-0396        |
| 火乐(Holatek)             | 146              | Quasar(Quasar)                   | 252              | 大眼橙(ODE)                             | 0397-0398        |
| 火辣椒(Huolajiao)         | 147              | 奇立(Cheerlux)                   | 253              |                                         |                  |
| 环影(Huanying)            | 148              | 清华美讯(Unismaison)             | 0254-0255        |                                         |                  |
| 荟影(Huyin)               | 149              | RCA(RCA)                         | 256              |                                         |                  |
| 轰天炮(Poner Saund)       | 0150-0151        | Rigae(Rigae)                     | 0257-0259        |                                         |                  |

Table 13

### fan brand code table (kfid)



| 品牌(brand)             | 代码(kfid code) | 品牌(brand)       | 代码(kfid code) | 品牌(brand)          | 代码(kfid code) |
| ----------------------- | ------------------- | ----------------- | ------------------- | -------------------- | ------------------- |
| 3M(3M)                  | 1               | 卡帝亚(Kadder)    | 137             | 夏普(Sharp)          | 0290-0291       |
| AAF(AAF)                | 0002-0003       | 康佳(Konka)       | 0138-0141       | 小天鹅(Littleswan)   | 0292-0298       |
| Alpha(Alpha)            | 4               | 科龙(Kelon)       | 0142-0149       | 小行星(Xiaoxingxing) | 0299-0308       |
| Atomberg(Atomberg)      | 5               | 丽精(Lijing)      | 150             | 小象(Xiaoxiang)      | 0309-0310       |
| 奥丽思(Aonice)          | 6               | 乐声(National)    | 151             | 小鸭(Littleduck)     | 311             |
| 奥克斯(AUX)             | 0007-0015       | 拉斯科(Lasko)     | 152             | 新的(Xinde)          | 0312-0316       |
| 奥德尔(Odor)            | 0016-0017       | 联创(Lianchuang)  | 0153-0165       | 新飞(Frestec)        | 0317-0318       |
| 澳柯玛(Aucma)           | 0018-0021       | 骆驼(Camel)       | 0166-0175       | 欣禾(Xinhe)          | 319             |
| 艾美特(Airmate)         | 0022-0039       | 龙昇(Longsheng)   | 176             | 现代(Hyundai)        | 0320-0322       |
| 白朗(Bairan)            | 0040-0041       | MILUX(MILUX)      | 177             | 西屋(Westinghouse)   | 323             |
| 百立(Baili)             | 0042-0043       | 美的(Midea)       | 0178-0188       | 亚摩斯(Amos)         | 0324-0327       |
| 百花(Baihua)            | 44              | 美菱(Meiling)     | 0189-0190       | 亚都(Yadu)           | 328             |
| 蝙蝠(Bianfu)            | 45              | 美蒂思(Medis)     | 0191-0192       | 伊莱克斯(Electrolux) | 0329-0330       |
| 贝丽(Beili)             | 0046-0047       | 马丽(Mali)        | 193             | 扬子(Yair)           | 331             |
| 灿坤(Tkec)              | 0048-0052       | Origo(Origo)      | 194             | 杨子(Yangzi)         | 0332-0333       |
| 长城(Great Wall)        | 0053-0059       | 品诺(Pinoh)       | 0195-0196       | 樱花(Sakura)         | 334             |
| 长虹(Changhong)         | 0060-0064       | 启华(Qihua)       | 197             | 永生(Eosn)           | 0335-0340       |
| 东元(TECO)              | 65              | 奇美(CHIMEI)      | 198             | 远东(Yuandong)       | 341             |
| 东宝(Tobo)              | 0066-0067       | 容声(Rongsheng)   | 199             | 中联(Zolee)          | 0342-0346       |
| 东芝(Toshiba)           | 68              | 日光(Nikko)       | 200             | 志高(Chigo)          | 0347-0349       |
| 多丽(Duoli)             | 69              | 日彩(Ricai)       | 0201-0202       | 钻石(Diamond)        | 0350-0352       |
| 大同(Tatung)            | 0070-0073       | 日本(Japan)       | 203             | 夏普(Sharp)          | 0290-0291       |
| 大松(Tosot)             | 74              | 荣事达(Royalsta)  | 0204-0212       | 小天鹅(Littleswan)   | 0292-0298       |
| 德律风根(Telefunken)    | 0075-0076       | SKG(SKG)          | 0213-0214       | 小行星(Xiaoxingxing) | 0299-0308       |
| 戴森(Dyson)             | 0077-0083       | 三洋(Sanyo)       | 215             | 小象(Xiaoxiang)      | 0309-0310       |
| 谛尔(Dier)              | 0084-0085       | 三菱(Mitsubishi)  | 0216-0217       | 小鸭(Littleduck)     | 311             |
| EuropAce(Europ Ace)     | 0086-0088       | 丝雨(Siyu)        | 0218-0222       | 新的(Xinde)          | 0312-0316       |
| 富士宝(Fushibao)        | 89              | 史密斯(A.O.Smith) | 0223-0224       | 新飞(Frestec)        | 0317-0318       |
| 飞利浦(Philips)         | 90              | 声宝(Sampo)       | 0225-0229       | 欣禾(Xinhe)          | 319             |
| 飞碟(Feidie)            | 91              | 山湖(Shanhu)      | 230             | 现代(Hyundai)        | 0320-0322       |
| 格力(Gree)              | 0092-0096       | 时丰(Shifeng)     | 0231-0240       | 西屋(Westinghouse)   | 323             |
| 歌林(Kolin)             | 0097-0100       | 松下(Panasonic)   | 0241-0243       | 亚摩斯(Amos)         | 0324-0327       |
| 华宝(Huabao)            | 101             | 桑普(Sampux)      | 0244-0248       | 亚都(Yadu)           | 328             |
| 华格立(Richland)        | 102             | 赛亿(Shinee)      | 249             | 伊莱克斯(Electrolux) | 0329-0330       |
| 华生(Wahson)            | 0103-0110       | 顺发(Sunfar)      | 250             | 扬子(Yair)           | 331             |
| 惠康(Hicon)             | 111             | TCL(TCL)          | 0251-0253       | 杨子(Yangzi)         | 0332-0333       |
| 惠普(HP)                | 0112-0113       | 天敏(10moons)     | 0254-0255       | 樱花(Sakura)         | 334             |
| 惠而浦(Whirlpool)       | 0114-0115       | 天马(Tianma)      | 256             | 永生(Eosn)           | 0335-0340       |
| 汇成(Huicheng)          | 116             | 汤姆逊(Thomson)   | 0257-0258       | 远东(Yuandong)       | 341             |
| 海尔(Haier)             | 0117-0120       | 泰瑞(TERA)        | 0259-0260       | 中联(Zolee)          | 0342-0346       |
| 霍尼韦尔(Honeywell)     | 121             | 万信宝(Wanxinbao) | 261             | 志高(Chigo)          | 0347-0349       |
| 九和宏盛(Juhehongsheng) | 122             | 万宝(Wanbao)      | 262             | 钻石(Diamond)        | 0350-0352       |
| 捷宝(Jyeproud)          | 123             | 万怡(Wanyi)       | 263             |                      |                 |
| 机灵(Jiling)            | 124             | 华生(Wahson)      | 0264-0271       |                      |                 |
| 菊花(Juhua)             | 0125-0128       | 威利(Welly)       | 0272-0274       |                      |                 |
| 金世康(Jinshikang)      | 0129-0130       | 威力(Weili)       | 275             |                      |                 |
| 金松(Jinsong)           | 0131-0132       | 沃尔顿(Walton)    | 0276-0277       |                      |                 |
| 金羚(Jinling)           | 133             | 网易智造(NetEase) | 278             |                      |                 |
| 金龙(Jinlong)           | 134             | 先科(SAST)        | 279             |                      |                 |
| KDK(KDK)                | 0135-0136       | 先锋(Pioneer)     | 0280-0289       |                      |                 |

Table 14

# Notes

* If you have additional technical problems, please email Technical support at [support@easyiot.tech](mailto:support@easyiot.tech)


* This is a UI interface of ZB-IR01 in HA. Thank you very much @shing6326
[https://github.com/shing6326/hacs-zb-ir01-to-climate/tree/master](https://github.com/shing6326/hacs-zb-ir01-to-climate/tree/master)
<!-- Notes END: Do not edit below this line -->




## Exposes

### Last received command (text)
Received infrared control command.
Value can be found in the published state on the `last_received_command` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Send command (text)
Send infrared control command.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"send_command": NEW_VALUE}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

