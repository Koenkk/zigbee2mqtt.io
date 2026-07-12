# 获取 Tuya 和 Xiaomi OTA 地址

::: warning
在 x86 电脑上，Android Studio 已不能再模拟 ARM 架构来运行 Tuya 应用
:::

::: warning
此方法不适用于高于 v3.12.6 版本（约 2020 年）的 Tuya 应用
:::

本指南介绍如何获取你的设备对应的 TuYa 或 Xiaomi OTA 文件。获取该文件后，即可通过 Zigbee2MQTT 更新你的 TuYa/Xiaomi 设备。

前提条件：

- Docker
- TuYa 网关或 Xiaomi 网关
- [Android Studio](https://developer.android.com/studio)

## 步骤 1：运行代理

执行以下命令：`docker run --rm -it -p 8080:8080 mitmproxy/mitmproxy`

## 步骤 2：设置 Android 模拟器

启动 Android Studio 并新建一个空项目：

1. File -> New -> New Project...
1. Phone and Tablet -> Empty Activity -> Next
1. Finish
1. 点击模拟器（下方示例中为 "Pixel*3a*..."）-> Device Manager <br/> ![](/images/android_studio_run.png)
1. 点击设备的铅笔图标，在 "Show Advanced Settings" 下将 "Internal Storage" 改为 "2000"，然后点击 "Finish"。
1. 点击播放图标启动模拟器。 <br/> ![](/images/android_studio_adv.png)
1. 在模拟器中，依次进入 Settings -> Network & internet -> Internet -> AndroidWifi -> Edit（右上角的铅笔图标）-> Advanced options -> Proxy -> Manual。在代理主机名中填入你电脑的 IP 地址（例如 192.168.2.145），端口填 8080，然后保存。
1. 在模拟器中打开 Chrome，访问 http://mitm.it，点击 Android 下的 "Get mitmproxy-ca-cert.cer"。
1. 再次进入设置，依次点击 Security -> Encryption & credentials -> Install a certificate -> CA certificate -> Install anyway -> 抽屉图标 -> Downloads -> 点击已下载的证书。

## 步骤 3a：获取 TuYa OTA 地址

1. 从[此链接](https://www.apkmirror.com/apk/volcano-technology-limited/smart-life-smart-living/smart-life-smart-living-3-12-6-release/smart-life-smart-living-3-12-6-android-apk-download/)下载 TuYa 应用的 apk（重要提示：更新版本无法使用，已在 3.12.6 版本测试通过）。将下载好的 apk 拖到模拟器上即可完成安装。
1. 在模拟器中打开 TuYa Smart Life 应用，使用你的账号登录
1. 确保要获取 OTA 的 TuYa 网关和目标设备已绑定到你的账号，这一步无法在模拟器中完成，请使用手机操作。请务必在手机上使用同一款应用，否则设备不会显示（例如 iOS 请使用[这个应用](https://apps.apple.com/nl/app/smart-life-smart-living/id1115101477)，[**而不是这个**](https://apps.apple.com/nl/app/tuya-smart/id1034649547)）。
1. 点击设备 -> 编辑（右上角铅笔图标），然后点击 "Check for Firmware Upgrade"。
1. 如果有可用的固件升级，请立即切回 mitm 的输出界面（步骤 1），点击最新的一条请求（没错，控制台窗口里是可以点击的）。这里会显示 OTA 地址（见下方红框）。
    - 提示：按键盘上的 `Q` 键可返回请求列表概览。

![](/images/tuya_ota.png)

## 步骤 3b：获取 Xiaomi OTA 地址

注意：此方法仅适用于可连接到 Aqara Home 应用（而非 Xiaomi Home 应用！）的原生 Aqara 网关

- 支持：ZHWG16LM/HE1-G0、ZHWG15LM、ZHWG12LM
- 不支持：ZNDMWG03LM、DGNWG02LM

1. 从[此链接](https://apkpure.com/nl/aqara-home/com.lumiunited.aqarahome)下载 Aqara Home 应用的 apk，已在 2.2.5 版本测试通过。将下载好的 apk 拖到模拟器上即可完成安装。
1. 在模拟器中打开 Aqara Home 应用，使用你的账号登录
1. 确保要获取 OTA 的 Aqara 网关和目标设备已绑定到你的账号，这一步无法在模拟器中完成，请使用手机操作。
1. 点击你的设备并检查固件升级。
1. 如果有可用的固件升级，请立即切回 mitm 的输出界面（步骤 1），点击最新的一条请求（没错，控制台窗口里是可以点击的）。这里会显示 OTA 地址（参见步骤 3a 的截图）。

## 步骤 4：将 OTA 添加到 zigbee-ota

1. 按照[此指南](https://github.com/koenkk/zigbee-ota#adding-new-and-updating-existing-ota-files)将 OTA 添加到 [zigbee-OTA](https://github.com/koenkk/zigbee-ota) 仓库。
1. 在设备定义中添加 `ota: ota.zigbeeOTA` 以启用 OTA（[示例](https://github.com/Koenkk/zigbee-herdsman-converters/blob/3e45f8f13b419ea8ce33fb3d30b11f5ac1bdec08/devices/tuya.js#L1172)）。
