---
redirectFrom: /information/flashing_via_uniflash.md
---

# 通过 UNIFLASH 刷写

UNIFLASH 可用于刷写某些 Texas Instruments MCU（例如 CC26X2R1 和 CC1352P-2）。它可在 Windows、macOS 和 Linux 上运行。

**注意：** UNIFLASH 有时需要更新编程器固件，如果设备连接在 USB 3 接口上，此操作可能会失败。如果出现这种情况，请改用 USB 2 接口。

**在 Linux 上刷写的注意事项：** Uniflash 在某些发行版上运行不太好，特别是 Fedora 31 可能会出现问题。已验证可行的组合有：

- _Ubuntu 18.4 (LTS)_：
    - 全新安装
    - `# sudo apt install libgconf-2-4`
    - `# sudo apt install libusb-0.1-4`
    - ……然后按照下面的说明操作

## 操作步骤

1. 下载并安装 UNIFLASH：[下载链接](http://www.ti.com/tool/download/UNIFLASH)
2. 插入你的设备
3. 启动 UNIFLASH，你的设备会被自动检测到，点击 _Start_
   ![Start](/images/uniflash/start.png)
4. 进入 _Settings & Utilities_ -> _Manual Erase_，点击 _Erase Entire Flash_
   ![Erase](/images/uniflash/erase.png)
5. 进入 _Settings & Utilities_ -> _Program Load_，选择 _All Unprotected Sectors_，点击 _Perform Blank Check_
   ![Load](/images/uniflash/sectors.png)
6. 进入 _Program_ -> _Flash Image(s)_，点击 _Browse_ 选择固件。请确保路径和文件名中不含空格（否则刷写可能会失败，并提示 "Error! Unable to open file ..."）。
7. 现在点击 _Load image_ 上传固件
   ![Load](/images/uniflash/load.png)
8. 完成！
