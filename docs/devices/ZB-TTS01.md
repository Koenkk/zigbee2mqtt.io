---
title: "easyiot ZB-TTS01 control via MQTT"
description: "Integrate your easyiot ZB-TTS01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2024-01-11T16:23:11Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# easyiot ZB-TTS01

|     |     |
|-----|-----|
| Model | ZB-TTS01  |
| Vendor  | [easyiot](/supported-devices/#v=easyiot)  |
| Description | This is a Simplified Chinese (GB2312) TTS converter that can convert GB2312 encoded text to speech |
| Exposes | last_received_status, send_tts, linkquality |
| Picture | ![easyiot ZB-TTS01](https://www.zigbee2mqtt.io/images/devices/ZB-TTS01.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->
## Notes

### 输入内容

|              | 格式                                         | 备注                                                         |
| ------------ | -------------------------------------------- | ------------------------------------------------------------ |
| 普通文本     | 中文-GB2312编码  英文-26个英文字母  数字-0~9 | 例：“谢谢使用”|
| 调节音量     | [v*]                                         | *代表数字0~9，比如设置音量为5发送内容为：[v5]，下发必须包含小写方括号 |
| 调节语速     | [s*]                                         | 参考调节音量                                                 |
| 调节语调     | [t*]                                         | 参考调节音量                                                 |
| 播放内置铃声 | ring_*                                       | *代表数字1-5，比如ring_1                                     |
| 信息提示音   | message_*                                    | *代表数字1-5，比如message _1                                 |
| 警示音       | alert_*                                      | *代表数字1-5，比如alert _1                                   |

 

### 1.1 文本标记功能

智能解析常见标点符号，常见多音字、数字。支持常用英文单位（需小写）、特殊数字发音。单句无停顿标点符号句子长度超过50 字将自动切断。

### 1.2 文本分析功能

支持文本标记，可标记多音字发音、数字发音、短停顿。 

#### 1.2.1 多音字标记方式

[=*] 标记前一汉字的拼音

例：空调[=tiao2]调[=tiao2]到三十度 

汉字拼音解析为：kong1 tiao2 tiao2 dao4 san1 shi2 du4 

其中，拼音格式为拼音+声调，声调数值范围1-5，分别代表（1:阴平2:阳平3:上声4:去声5:轻声）。拼音中ü用字母v 代替，字母均为小写

#### 1.2.2 数字标记方式

[n*]，指定该标记后的数字发音方式，*为1时按数字发音，*为2时按数值发音，*为3时按电话号码格式发音。该标记后必须跟数字才能有效转换

| 标记文本                | 播放效果                       |
| ----------------------- | ------------------------------ |
| 共消费[n2]100元         | 共消费一百元                   |
| 请拨打电话[n1]95511     | 请拨打电话九五五一一           |
| 手机号码[n3]18812341121 | 手机号码幺八八幺二三四幺幺二幺 |

#### 1.2.3 短停标记方式

[w0]，指定该位置做短暂停顿。 

例：欢迎使用[w0]深圳市知易科技有限公司的语音喇叭。


If you have additional technical problems, please email Technical support at support@easyiot.tech
<!-- Notes END: Do not edit below this line -->




## Exposes

### Last received status (text)
status.
Value can be found in the published state on the `last_received_status` property.
It's not possible to read (`/get`) or write (`/set`) this value.

### Send tts (text)
Please enter text.
Value will **not** be published in the state.
It's not possible to read (`/get`) this value.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"send_tts": NEW_VALUE}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

