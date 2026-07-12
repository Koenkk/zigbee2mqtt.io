# 设计文档：zigbee2mqtt.io 中英双语站（简体中文 locale）

日期：2026-07-12
状态：已由用户确认

## 目标

为 zigbee2mqtt.io 文档站增加简体中文版本，采用 VuePress 2 内置 i18n（locales）机制，
英文站保持原样，中文内容位于 `/zh/` 路径下，导航栏提供语言切换。

## 范围

**翻译**：核心手写文档，约 70 个 Markdown 文件：

- `docs/README.md`（首页）
- `docs/guide/`（getting-started、supported-hardware、adapters、installation、configuration、usage、faq）
- `docs/advanced/`（zigbee、support-new-devices、remote-adapter、more）

**不翻译**：

- `docs/devices/` 下 5117 个自动生成的设备页面（由 docgen 从 zigbee-herdsman-converters 生成，
  翻译会被生成脚本覆盖且构建负担翻倍）。中文站的"支持的设备"入口链接到英文设备页。
- `docs/supported-devices/` 的设备列表组件页（依赖 SupportedDevices Vue 组件，共用英文版）。

## 目录结构

```
docs/
├── README.md                 # 英文首页（不动）
├── guide/、advanced/         # 英文文档（不动）
├── devices/                  # 设备页，仅英文一套（不动）
└── zh/
    ├── README.md             # 中文首页
    ├── guide/                # 中文 guide，镜像英文目录结构
    └── advanced/             # 中文 advanced，镜像英文目录结构
```

## VuePress i18n 配置

1. `vuepress.config.ts` 站点级 `locales`：
    - `'/'`：`lang: 'en-US'`，沿用现有 title/description。
    - `'/zh/'`：`lang: 'zh-CN'`，title `Zigbee2MQTT`，中文 description
      （如"Zigbee 转 MQTT 桥接，摆脱各品牌私有的 Zigbee 网关"）。
2. `defaultTheme` 主题级 `locales`：
    - `'/'`：现有 navbar/sidebar 及英文界面文案。
    - `'/zh/'`：`selectLanguageName: '简体中文'`、中文 navbar/sidebar、
      中文界面文案（editLinkText、lastUpdatedText、404 提示、"回到首页"等）。
    - 英文侧补 `selectLanguageName: 'English'` 以显示语言切换菜单。
3. `navbar.ts` / `sidebar.ts`：新增导出 `navbarZh` / `sidebarZh`：
    - 链接统一加 `/zh/` 前缀；`getFiles()` 需支持 zh 目录（或新增 `getFiles('zh/...')` 调用）。
    - 菜单文字中文化：Guide→指南、Getting started→入门、Supported Adapters→支持的适配器、
      Supported Devices→支持的设备、Installation→安装、Configuration→配置、Usage→使用、
      FAQ→常见问题、Advanced→进阶、Support→支持、Devices→设备。
    - "支持的设备"及设备相关链接保持指向英文路径（`/supported-devices/`、`/devices/`）。
4. `docsearchPlugin` 的 `locales` 增加 `'/zh/'`，placeholder 为"搜索"。
   已知限制：Algolia 索引由官方维护、只含英文页面，中文页面不可搜索，本地无法解决。

## 翻译规则

- 翻译正文散文；以下内容**保持原样**：
    - 代码块、行内代码、配置键名/值、MQTT topic、CLI 命令、URL；
    - frontmatter 中的功能性字段（`sidebarDepth`、`pageClass` 等）；
    - 专有名词：Zigbee、MQTT、Home Assistant、OTA、Touchlink、coordinator 固件名等。
- 统一术语表（首次出现时括注英文原词）：
    | 英文         | 中文       |
    | ------------ | ---------- |
    | pairing      | 配对       |
    | adapter      | 适配器     |
    | coordinator  | 协调器     |
    | router       | 路由器     |
    | end device   | 终端设备   |
    | binding      | 绑定       |
    | group        | 组         |
    | exposes      | 暴露项     |
    | scene        | 场景       |
    | availability | 可用性     |
    | frontend     | 前端界面   |
    | network map  | 网络拓扑图 |
- 链接与图片处理：
    - 图片引用由相对路径（`../../images/x.png`）改写为绝对路径（`/images/x.png`），共用英文站图片；
    - 指向 guide/advanced 内部的相对链接保持不变（zh 镜像目录下天然指向中文版）；
    - 指向设备页、supported-devices 的链接使用英文绝对路径。

## 执行方式

- 按目录分组，用并行子代理批量翻译，统一下发术语表与翻译规则保证一致性。
- 翻译完成后逐目录抽查质量。

## 验证

1. `pnpm dev`（EXCLUDE_DEVICES=yes）启动开发服务器：
    - 中文首页渲染正常，导航栏出现语言切换且双向可切；
    - 中文侧边栏、导航栏文字与链接正确；
    - 抽查若干中文页面：图片显示、内部链接可点、代码块未被翻译破坏。
2. `pnpm build` 全量构建通过。

## 已知限制

- 站内搜索（Algolia DocSearch）不覆盖中文页面。
- 设备页与 supported-devices 列表为英文。
- 上游英文文档更新后，中文版需人工同步（保留英文原文即为此目的）。
