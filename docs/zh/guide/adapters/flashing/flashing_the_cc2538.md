---
redirectFrom: /information/flashing_the_cc2538.md
---

# 刷写 CC2538 模块的固件

CC2538 模块需要刷写自定义固件，该固件可以通过 JTAG 编程器刷写。
可以在 [Aliexpress](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20191108075039&SearchText=jlink+V8+jtag) 上找到这种编程器。

## Windows

1. 安装 SEGGER [J-Link Software](https://www.segger.com/downloads/jlink/)
   ![](/images/cc2538-jtag-2.jpg)
2. 打开 SEGGER J-Link Configurator，确保你的 JTAG 使用的是最新固件（如果不是，请先升级）
   ![](/images/cc2538-jtag-3.jpg)
3. 按照下方接线图将 JTAG 编程器连接到 CC2538 模块
   ![](/images/cc2538-jtag-1.jpg)
4. 下载[最新固件](https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592)
5. 打开 SEGGER J-Link Flash 并选择“Create a New Project”
   ![](/images/cc2538-jtag-4.jpg)
6. 确保选择正确的模块 [TI CC2538SF53]，并将 [JTAG] 设为 Target Interface
   ![](/images/cc2538-jtag-5.jpg)
7. 选择“Open Data File...”，然后选择正确的固件 [MODKAMRU_V3_USB.hex]
   ![](/images/cc2538-jtag-6.jpg)
8. 最后一步，为成功对模块进行编程，先选择 [Target/Manual Programming/Erase Chip]（或按 F4），然后选择 [Target/Manual Programming/Program & Verify]（或按 F6）
   ![](/images/cc2538-jtag-7.jpg)

# 如何检查已安装的固件版本

Zigbee2MQTT 启动时会将已安装的固件版本输出到 Zigbee2MQTT 日志中：

```
Zigbee2MQTT:info  2019-11-09T13:01:14: Coordinator firmware version: '{"type":"zStack30x","meta":{"transportrev":2,"product":2,"majorrel":2,"minorrel":7,"maintrel":2,"revision":20190425}}'
```

在上面的示例中，版本号是 `20190425`。
