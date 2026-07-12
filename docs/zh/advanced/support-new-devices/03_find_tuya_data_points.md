---
redirectFrom: /how_tos/how_to_find_tuya_data_points.md
---

# 查找 Tuya 数据点（Data Points）

Tuya 设备使用自定义的 `manuSpecificTuya` 簇（cluster）。在该簇上报的数值中，包含一个 dp（即所谓的“数据点 ID”，Data Point ID），它是 Tuya 设备的核心所在。从设备的角度来看，DPID 就是设备所提供的各项功能。下面的说明将帮助你借助 Tuya 网关，在 Tuya IoT 平台上确定各个数据点所对应的功能，这将有助于后续创建设备转换器（converter）。

## 前提条件与注意事项

1. 你需要一个最新版本的 Google Chrome（其他浏览器也可能可用，但操作步骤可能有所不同）
2. 你需要具备使用 Chrome 及其开发者工具（Dev Tools）的基础知识
3. 你需要注册 Tuya IoT 平台账号并绑定你的账号（详见下文）
4. 你需要一个 Tuya Zigbee 网关
5. 你需要在移动设备上安装 Tuya App（图标为橙色）

## 操作步骤

### 1. 标准设置部分

请确保你已经设置好 Tuya 账号，并将你的 Zigbee 设备绑定到了 Tuya 网关上（以下说明假定这些步骤已经完成）。

### 2. 注册 Tuya IoT 平台

Tuya IoT 平台是联网 Tuya 设备与 Tuya 平台进行通信的核心支撑。它提供了一整套应用程序接口（API），供开发者将 Tuya 的功能嵌入到自己的平台中。

访问 [Tuya IoT 平台](https://iot.tuya.com/)，注册一个新账号（如果你还没有账号的话）：

![01_sign_up](/images/how_tos/tuya_dp/01_sign_up.png)

### 3. 登录

使用你的新账号登录 Tuya IoT 平台。系统会为你展示一个首次使用的新手教程，介绍平台的各项功能。教程结束时，选择 `Individual Developer`（个人开发者）。如果错过了这一步，可以点击右上角的 `person`（人形）图标 -> `Account`（账号），将 `Account Type`（账号类型）设置为 `Individual Developer`。

### 4. 创建云项目

点击侧边菜单中的 `Cloud`（云），再点击子菜单中的 `Development`（开发），然后点击 `Create Cloud Project`（创建云项目）。

![04_create_cloud_project](/images/how_tos/tuya_dp/04_create_cloud_project.png)

在弹出的对话框中，按要求填写相关信息，确保 Development Method（开发方式）选择的是 Smart Home（智能家居），Data Center（数据中心）与你的 Tuya 账号所在地区相对应。

![05_project_creation](/images/how_tos/tuya_dp/05_project_creation.png)

确认后会弹出一个新对话框。在 `Select API Services`（选择 API 服务）旁边点击 `All`（全部），再点击 `Authorize`（授权）。

### 5. 将你的 Tuya 账号与新建的 Tuya 项目关联

确认后，你会被带到新建的 Tuya 项目页面。依次点击 `Devices`（设备）、`Link Tuya App Account`（关联 Tuya App 账号），然后点击 `Add App Account`（添加 App 账号）。

![07_link_tuya_account](/images/how_tos/tuya_dp/07_link_tuya_account.png)

此时会弹出一个二维码。打开你移动设备上的 Tuya App，点击 `[+]`（就像添加新设备一样）。在屏幕顶部，你会看到一个扫码按钮 `[-]`。点击 `[-]` 按钮，如有提示则授予摄像头使用权限。用移动设备扫描二维码，然后点击 `Confirm login`（确认登录）。此时电脑上会弹出一个 `Link Tuya App Account` 弹窗。将 `Device Linking Method`（设备关联方式）设置为 `Automatic Link`（自动关联），`Device Permission`（设备权限）设置为 `Read, write, and Manage`（读、写与管理），然后点击 `Ok`。随后会弹出一个提示，显示已添加的设备数量，关闭该提示即可。

### 6. 查找你的设备

点击 `All Devices`（全部设备），找到你想要查找数据点的设备，点击 `Debug Device`（调试设备）。如果在列表中找不到你的设备，或者列表为空，请检查你项目所在的地区设置。

![08_devices](/images/how_tos/tuya_dp/08_devices.png)

### 7. 显示设备日志

点击 `Device Logs`（设备日志）标签页，你会看到该设备发送给 Tuya 平台的所有事件列表。请忽略 Event Details（事件详情）部分，因为其内容似乎没有参考意义。

![09_device_logs](/images/how_tos/tuya_dp/09_device_logs.png)

### 8. 找到你的数据点（Data Point）！

#### **自动方式**

在 `Device Logs`（设备日志）标签页中，按下键盘上的 `ctrl` + `shift` + `i`（Windows）或 `cmd` + `alt` + `i`（macOS）打开开发者工具（Dev Tools），或者点击 Chrome 窗口右上角的 `3-dot menu`（三点菜单）->`More Tools`（更多工具）->`Dev Tools`（开发者工具）。打开开发者工具后，点击 `Console`（控制台）标签页，将[下面的代码](#自动脚本)粘贴到控制台中，然后按键盘上的 `Enter` 键。接着，展开 `DP ID` 下拉列表，依次将鼠标悬停在每一项上。运行中的代码会自动获取每一项对应的数据点 ID。完成后，在控制台中运行 `export_codes()`。这将输出数据点 ID 与名称的对应关系。

![11_automatic_data_points_fetch](/images/how_tos/tuya_dp/11_automatic_data_points_fetch.gif)

##### _自动脚本_

> 警告：切勿运行你不理解的代码。在运行代码之前，请自行确保你理解该代码的作用，这是你的责任。

下拉列表中当前选中/悬停的数据点 ID，连同其前一个和后一个 ID，都会存储在 DOM 中的 `<div id="code_list">` 下。下面的代码会在该 div 每次更新时获取这三个代码，并将它们存入字典 `codes` 中。

```javascript
function waitForElm(selector) {
    /** Wait for an HTML element to appear in the DOM.
     *
     * Answer of Yong Wang (https://stackoverflow.com/users/4556536/yong-wang) to
     * https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
     */
    return new Promise((resolve) => {
        if (document.querySelector(selector)) return resolve(document.querySelector(selector));

        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {childList: true, subtree: true});
    });
}

let codes_selector = '#code_list';
let codes = {};

// Wait for the code list to appear in the DOM.
waitForElm(codes_selector).then((elm) => {
    // Create an observer to watch for changes and update the codes dictionary.
    var observer = new MutationObserver((mutations) => {
        let code_items = document.getElementById('code_list').getElementsByTagName('div');
        for (const code_item of code_items) {
            codes[code_item.textContent] = code_item.getAttribute('aria-label');
        }
    });

    observer.observe(document.querySelector(codes_selector), {childList: true});
});

function export_codes() {
    /** Export the codes dictionary to the console in a copy-friendly format. */
    let codes_str = JSON.stringify(codes);
    console.log(codes_str);
}
```

#### **手动方式**

在事件表格上方的下拉列表中，选择你想要查找 ID 的数据点。按下键盘上的 `ctrl` + `shift` + `i`（Windows）或 `cmd` + `alt` + `i`（macOS）打开开发者工具（Dev Tools），或者点击 Chrome 窗口右上角的 `3-dot menu`（三点菜单）->`More Tools`（更多工具）->`Dev Tools`（开发者工具）。打开开发者工具后，点击 `Network`（网络）标签页，然后点击 Tuya IoT 平台窗口中的 `Search`（搜索）按钮。

![10_dev_tools](/images/how_tos/tuya_dp/10_dev_tools.png)

此时你应该会在开发者工具的 `Name`（名称）栏看到若干条请求记录。我们关心的是名为 `list` 的那条请求。点击它，然后在右侧面板中向下滚动，直到看到 `Request Payload` 部分。其中有一个 json 编码的对象，包含了搜索功能发送的全部数据。其中一个键名为 `code`。这个 `code`，例如 112，就是你要找的数据点 ID！

### 9. 反复迭代！

现在你应该对下拉列表中可用的每一个数据点重复上述步骤。完成后，请参照其他 How-To 指南，将这些数据点映射到转换器（converter）中。
