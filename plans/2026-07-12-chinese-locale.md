# zigbee2mqtt.io 简体中文 locale 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 为 zigbee2mqtt.io 增加简体中文版本：VuePress 2 i18n 配置 + 将约 71 个核心文档翻译到 `docs/zh/`。

**Architecture:** 采用 VuePress 内置 locales 机制。英文站保持原路径不动，中文内容镜像到 `docs/zh/`（guide + advanced + 首页），导航栏出现语言切换。设备页（`docs/devices/`，自动生成）不翻译，中文站相关链接指向英文设备页。

**Tech Stack:** VuePress 2 (rc.30) + @vuepress/theme-default，TypeScript 配置文件，pnpm，Prettier（pre-commit 钩子强制）。

## Global Constraints

- 设计文档：`specs/2026-07-12-chinese-locale-design.md`（术语表与翻译规则的唯一权威来源）。
- **绝不修改**英文文档内容（`docs/README.md`、`docs/guide/`、`docs/advanced/` 保持原样；`navbar.ts`/`sidebar.ts`/`vuepress.config.ts` 只做"增加中文配置"性质的改动）。
- **绝不触碰** `docs/devices/`、`docs/supported-devices/`。
- pre-commit 钩子运行 `prettier --check .`，每次提交前必须先 `pnpm pretty:write`（或对新增文件跑 `pnpm prettier --write <路径>`）。
- 平台为 Windows；shell 命令用 Git Bash（POSIX）语法。
- 分支：`zh-locale`（已存在，当前分支）。

### 翻译规则（每个翻译步骤都必须遵守）

1. 只翻译散文正文和标题。**保持不动**：代码块内容、行内代码、配置键名/值、MQTT topic、CLI 命令、URL、HTML 标签、frontmatter 功能字段（`sidebarDepth`、`pageClass` 等）。frontmatter 的 `title`/`description`（若有）需要翻译。
2. Markdown 结构必须与原文一一对应：标题层级、列表结构、表格列数、代码围栏（```）数量、`::: tip` / `::: warning` 等容器语法。
3. 图片引用改为绝对路径：`../../images/x.png` → `/images/x.png`（任意层级 `../` 同理）。
4. 指向 guide/advanced 内部的相对 `.md` 链接**保持原样**（zh 镜像目录下天然指向中文版）；指向 `/devices/`、`/supported-devices/` 的链接保持英文绝对路径。
5. 术语表（每篇文档首次出现时括注英文原词）：pairing=配对、adapter=适配器、coordinator=协调器、router=路由器、end device=终端设备、binding=绑定、group=组、exposes=暴露项、scene=场景、availability=可用性、frontend=前端界面、network map=网络拓扑图。专有名词 Zigbee、MQTT、Home Assistant、OTA、Touchlink、Z-Stack、EmberZNet 等不译。
6. 语气自然、技术准确，不逐字硬译。

### 翻译子代理提示词模板（各翻译任务复用）

```text
把 <绝对仓库路径>/docs/<相对路径>.md 翻译成简体中文，写入 <绝对仓库路径>/docs/zh/<相对路径>.md（用 Write 工具创建，目录不存在时直接写即可）。

规则：
1. 只翻译散文正文和标题；保持不动：代码块内容、行内代码、配置键名/值、MQTT topic、CLI 命令、URL、HTML 标签、frontmatter 功能字段（sidebarDepth 等）。frontmatter 的 title/description 若存在则翻译。
2. Markdown 结构（标题层级、列表、表格列数、代码围栏数量、::: tip/warning 容器语法）必须与原文一一对应。
3. 图片引用改为绝对路径：任意层级的 ../…/images/x.png 一律改写为 /images/x.png。
4. 指向 guide/advanced 内部的相对 .md 链接保持原样；指向 /devices/、/supported-devices/ 的链接保持英文绝对路径不动。
5. 术语表（每篇首次出现括注英文）：pairing=配对、adapter=适配器、coordinator=协调器、router=路由器、end device=终端设备、binding=绑定、group=组、exposes=暴露项、scene=场景、availability=可用性、frontend=前端界面、network map=网络拓扑图。Zigbee、MQTT、Home Assistant、OTA、Touchlink、Z-Stack、EmberZNet 等专有名词不译。
6. 语气自然、技术准确，不逐字硬译。

完成后返回所写文件的路径列表，不要返回文件内容。
```

### 机械校验脚本（各翻译任务复用，Bash 工具运行）

对刚翻译完的目录 `DIR`（如 `guide/installation`）运行：

````bash
cd <仓库根目录>
fail=0
for zh in $(find docs/zh/$DIR -name '*.md'); do
  en="docs/${zh#docs/zh/}"
  if [ ! -f "$en" ]; then echo "多余文件: $zh"; fail=1; continue; fi
  a=$(grep -c '^```' "$en"); b=$(grep -c '^```' "$zh")
  [ "$a" != "$b" ] && { echo "代码围栏数不一致: $zh ($b vs $a)"; fail=1; }
  bad=$(grep -nE '\]\([^)]*images/' "$zh" | grep -vE '\]\((/images/|https?://)' || true)
  [ -n "$bad" ] && { echo "相对图片路径未改写: $zh"; echo "$bad"; fail=1; }
done
for en in $(find docs/$DIR -name '*.md'); do
  zh="docs/zh/${en#docs/}"
  [ ! -f "$zh" ] && { echo "缺少翻译: $en"; fail=1; }
done
[ $fail -eq 0 ] && echo "OK: $DIR"
````

预期输出：`OK: <目录>`。任何其他输出都要先修复再继续。

---

### Task 1: VuePress i18n 配置 + 中文首页

**Files:**

- Modify: `navbar.ts`（getFiles 容错 + 新增 navbarZh）
- Modify: `sidebar.ts`（新增 sidebarZh）
- Modify: `vuepress.config.ts`（站点/主题/docsearch locales）
- Create: `docs/zh/README.md`（中文首页）

**Interfaces:**

- Produces: `navbar.ts` 导出 `navbarZh: NavbarOptions`；`sidebar.ts` 导出 `sidebarZh: SidebarOptions`；`getFiles(dir)` 在目录不存在时返回 `[]`（后续翻译任务落盘后菜单自动出现，无需再改配置）。

- [ ] **Step 1: 修改 `navbar.ts` — getFiles 容错并新增 navbarZh**

在现有 `getFiles` 中加入目录存在性检查（zh 目录逐步创建，缺失时返回空数组），并在文件末尾新增 `navbarZh`：

```ts
import type {NavbarOptions} from '@vuepress/theme-default';
import {resolve} from 'path';
import {existsSync, readdirSync} from 'fs';

export function getFiles(dir: string) {
    const base = resolve(__dirname, 'docs');
    const full = resolve(base, dir);
    if (!existsSync(full)) {
        return [];
    }
    return readdirSync(full)
        .filter((file) => file.endsWith('.md') && file !== 'README.md')
        .map((file) => `/${dir}/${file}`);
}
```

（`navbar` 原有导出保持不变。）文件末尾追加：

```ts
export const navbarZh: NavbarOptions = [
    {
        text: '指南',
        children: [
            '/zh/guide/getting-started/',
            {
                link: '/zh/guide/adapters/',
                text: '支持的适配器',
                activeMatch: '(/zh/guide/adapters/|/zh/guide/supported-hardware)',
            },
            {
                text: '支持的设备',
                link: '/supported-devices/',
            },
            '/zh/guide/installation/',
            '/zh/guide/configuration/',
            {
                text: '使用',
                link: '/zh/guide/usage/pairing_devices.md',
                activeMatch: '/zh/guide/usage/',
            },
            '/zh/guide/faq/',
        ],
    },
    {
        text: '设备',
        link: '/supported-devices/',
        activeMatch: '^/(supported-)?devices/',
    },
    {
        text: '进阶',
        children: [
            {text: 'Zigbee', children: getFiles('zh/advanced/zigbee')},
            {text: '支持新设备', children: getFiles('zh/advanced/support-new-devices')},
            {text: '远程适配器', children: getFiles('zh/advanced/remote-adapter')},
            {text: '更多', children: getFiles('zh/advanced/more')},
        ],
    },
    {
        text: '支持',
        children: [
            {text: '论坛', link: 'https://github.com/Koenkk/zigbee2mqtt/discussions'},
            {text: 'Discord', link: 'https://discord.gg/NyseBeK'},
            {text: '问题反馈', link: 'https://github.com/Koenkk/zigbee2mqtt/issues'},
            {text: '捐赠', link: 'https://github.com/Koenkk/zigbee2mqtt'},
        ],
    },
    {
        text: 'GitHub',
        link: 'https://github.com/Koenkk/zigbee2mqtt',
    },
];
```

- [ ] **Step 2: 修改 `sidebar.ts` — 新增 sidebarZh**

文件末尾追加（`sidebar` 原有导出保持不变）：

```ts
export const sidebarZh: SidebarOptions = {
    '/zh/guide/': [
        '/zh/guide/getting-started/',
        {
            text: '支持的硬件',
            link: '/zh/guide/supported-hardware.md',
            children: [
                {text: '适配器', link: '/zh/guide/adapters/'},
                {text: '设备', link: '/supported-devices/'},
            ],
        },
        {
            text: '安装',
            link: '/zh/guide/installation/',
            children: [...getFiles('zh/guide/installation')],
        },
        {
            text: '配置',
            link: '/zh/guide/configuration/',
            children: [
                '/zh/guide/configuration/adapter-settings.md',
                '/zh/guide/configuration/mqtt.md',
                '/zh/guide/configuration/zigbee-network.md',
                '/zh/guide/configuration/frontend.md',
                '/zh/guide/configuration/devices-groups.md',
                '/zh/guide/configuration/logging.md',
                '/zh/guide/configuration/block-pass-list.md',
                '/zh/guide/configuration/ota-device-updates.md',
                '/zh/guide/configuration/device-availability.md',
                '/zh/guide/configuration/homeassistant.md',
                '/zh/guide/configuration/more-config-options.md',
                '/zh/guide/configuration/configuration-update.md',
                '/zh/guide/configuration/all-settings.md',
            ],
        },
        {
            text: '使用',
            link: '/zh/guide/usage/',
            children: [
                '/zh/guide/usage/pairing_devices.md',
                '/zh/guide/usage/integrations.md',
                '/zh/guide/usage/touchlink.md',
                '/zh/guide/usage/scenes.md',
                '/zh/guide/usage/binding.md',
                '/zh/guide/usage/groups.md',
                '/zh/guide/usage/ota_updates.md',
                '/zh/guide/usage/mqtt_topics_and_messages.md',
                '/zh/guide/usage/exposes.md',
                '/zh/guide/usage/health.md',
            ],
        },
        {
            text: '常见问题',
            link: '/zh/guide/faq/',
        },
    ],

    '/zh/advanced/zigbee/': getFiles('zh/advanced/zigbee'),
    '/zh/advanced/remote-adapter/': getFiles('zh/advanced/remote-adapter'),
    '/zh/advanced/support-new-devices/': getFiles('zh/advanced/support-new-devices'),
};
```

注意：配置/使用两组 children 在 zh 文件尚未创建时会指向不存在的页面。为避免 Task 1 阶段 dev server 报死链，**这些 children 列表照写**——VuePress 对 sidebar 死链只在页面渲染时警告，不阻断构建；Task 1 验证只看首页与语言切换。

- [ ] **Step 3: 修改 `vuepress.config.ts` — 三处 locales**

导入处：`import {navbar, navbarZh} from './navbar';`、`import {sidebar, sidebarZh} from './sidebar';`

`defineUserConfig` 顶层（`title`/`description` 行之后）加入：

```ts
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Zigbee2MQTT' + (isDevelop ? ' develop' : ''),
            description: 'Zigbee to MQTT bridge, get rid of your proprietary Zigbee bridges',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'Zigbee2MQTT' + (isDevelop ? ' develop' : ''),
            description: 'Zigbee 转 MQTT 桥接，摆脱各品牌私有的 Zigbee 网关',
        },
    },
```

`defaultTheme({...})` 内，将 `navbar`、`sidebar`、`editLinkText`、`lastUpdatedText` 移入 locales（保持其余键不变）：

```ts
    theme: defaultTheme({
        repo: 'Koenkk/zigbee2mqtt.io',
        repoLabel: 'GitHub (docs)',
        docsBranch: isDevelop ? 'develop' : 'master',
        logo: '/logo.png',
        docsDir: 'docs',
        sidebarDepth: 2,
        contributors: false,
        themePlugins: {
            git: true,
        },
        locales: {
            '/': {
                selectLanguageName: 'English',
                navbar,
                sidebar,
                editLinkText: 'Help to make the docu better and edit this page on Github ✌',
                lastUpdatedText: 'Page was last updated on',
            },
            '/zh/': {
                selectLanguageName: '简体中文',
                selectLanguageText: '语言',
                selectLanguageAriaLabel: '选择语言',
                navbar: navbarZh,
                sidebar: sidebarZh,
                editLinkText: '帮助改进文档，在 GitHub 上编辑此页 ✌',
                lastUpdatedText: '最后更新于',
                notFound: ['页面不存在'],
                backToHome: '返回首页',
            },
        },
    }),
```

`docsearchPlugin` 的 locales 增加：

```ts
            locales: {
                '/': {
                    placeholder: 'Search',
                },
                '/zh/': {
                    placeholder: '搜索',
                },
            },
```

- [ ] **Step 4: 创建中文首页 `docs/zh/README.md`**

```md
---
home: true
title: 首页
heroImage: /logo.png
actions:
    - text: 快速上手
      link: /zh/guide/getting-started/
      type: primary
    - text: 支持的设备
      link: /supported-devices/
      type: primary
features:
    - title: 兼容性强
      details: Zigbee2MQTT 支持多种 Zigbee 适配器（adapter）和数量庞大的设备。
    - title: 集成丰富
      details: Zigbee2MQTT 基于 MQTT，可以很好地与大多数家庭自动化方案集成。
    - title: 开源
      details: Zigbee2MQTT 基于自由的 GNU 通用公共许可证第 3 版（GPL-3.0）发布。
footer: zigbee2mqtt.io 由 @Koenkk 维护。
---

<hr>

欢迎来到 Zigbee2MQTT 文档！除文档外，你还可以在[论坛](https://github.com/Koenkk/zigbee2mqtt/discussions)和 [Discord 频道](https://discord.gg/NyseBeK)获取支持、提出问题。如果想捐赠，请点击[这里](https://github.com/Koenkk/zigbee2mqtt)的 "Sponsor" 按钮。
```

- [ ] **Step 5: 启动 dev server 验证**

Run（后台）: `pnpm dev`（即 `EXCLUDE_DEVICES=yes vuepress dev docs`）
验证（curl 或浏览器）:

- `http://localhost:8080/zh/` 返回 200，页面含"快速上手"；
- `http://localhost:8080/` 英文首页正常；
- 两侧页面 HTML 中都出现语言切换（`选择语言`/`English`/`简体中文` 字样）。
  预期：无编译错误；zh 侧 sidebar 死链警告可接受（后续任务补齐）。

- [ ] **Step 6: 格式化并提交**

```bash
pnpm pretty:write
git add navbar.ts sidebar.ts vuepress.config.ts docs/zh/README.md
git commit -m "feat: add Simplified Chinese locale scaffolding and homepage"
```

---

### Task 2: 翻译 guide 顶层（入门 / 支持的硬件 / FAQ）

**Files:**

- Create: `docs/zh/guide/getting-started/README.md`
- Create: `docs/zh/guide/supported-hardware.md`
- Create: `docs/zh/guide/faq/README.md`

**Interfaces:**

- Consumes: Task 1 的翻译规则、提示词模板、机械校验脚本（见 Global Constraints）。
- Produces: 上述 3 个中文页面（导航栏"入门/常见问题"入口生效）。

- [ ] **Step 1: 并行派发 3 个翻译子代理**

用"翻译子代理提示词模板"，分别针对 `guide/getting-started/README`、`guide/supported-hardware`、`guide/faq/README` 各派发一个子代理（同一消息并行）。

- [ ] **Step 2: 机械校验**

对 `DIR=guide/getting-started`、`DIR=guide/faq` 运行校验脚本；`guide/supported-hardware.md` 单文件手动跑同样三项检查（存在性、围栏数、图片路径）。
预期：全部 OK。

- [ ] **Step 3: 抽查质量**

Read `docs/zh/guide/getting-started/README.md` 全文：术语符合术语表、frontmatter 完整、链接未被误改。发现问题当场修。

- [ ] **Step 4: 格式化并提交**

```bash
pnpm pretty:write
git add docs/zh/guide
git commit -m "docs(zh): translate getting-started, supported-hardware, faq"
```

---

### Task 3: 翻译 guide/installation（13 个文件）

**Files:**

- Create: `docs/zh/guide/installation/` 下与英文一一对应的 13 个文件（README.md、01_linux.md、02_docker.md、03_ha_addon.md、04_openhabian.md、05_windows.md、06_freebsd_jail.md、08_kubernetes.md、14_securing.md、15_watchdog.md、20_zigbee2mqtt-fails-to-start_crashes-runtime.md、docker/docker_stack.md、docker/docker_synology.md）

**Interfaces:**

- Consumes: 翻译规则、提示词模板、校验脚本。
- Produces: `docs/zh/guide/installation/**`（sidebar"安装"children 由 `getFiles('zh/guide/installation')` 自动出现）。

- [ ] **Step 1: 并行派发翻译子代理**

每个文件一个子代理、同一消息并行派发（13 个）。大文件 `20_zigbee2mqtt-fails-to-start_crashes-runtime.md`（约 20KB）单独派发即可，无需拆分。

- [ ] **Step 2: 机械校验**

`DIR=guide/installation` 运行校验脚本。预期 `OK: guide/installation`。

- [ ] **Step 3: 抽查质量**

Read `docs/zh/guide/installation/01_linux.md` 与 `docker/docker_stack.md`：命令与代码块未被翻译、术语一致。

- [ ] **Step 4: 格式化并提交**

```bash
pnpm pretty:write
git add docs/zh/guide/installation
git commit -m "docs(zh): translate installation guide"
```

---

### Task 4: 翻译 guide/configuration（14 个文件）

**Files:**

- Create: `docs/zh/guide/configuration/` 下 14 个文件（README.md、adapter-settings.md、all-settings.md、block-pass-list.md、configuration-update.md、device-availability.md、devices-groups.md、frontend.md、homeassistant.md、logging.md、more-config-options.md、mqtt.md、ota-device-updates.md、zigbee-network.md）

**Interfaces:**

- Consumes: 翻译规则、提示词模板、校验脚本。
- Produces: `docs/zh/guide/configuration/**`。

- [ ] **Step 1: 并行派发 14 个翻译子代理**（`all-settings.md` 约 30KB，单独一个子代理）

- [ ] **Step 2: 机械校验**：`DIR=guide/configuration`，预期 OK。

- [ ] **Step 3: 抽查质量**：Read `docs/zh/guide/configuration/all-settings.md` 前 200 行 + `mqtt.md` 全文，确认 YAML 配置键、示例值未被翻译。

- [ ] **Step 4: 格式化并提交**

```bash
pnpm pretty:write
git add docs/zh/guide/configuration
git commit -m "docs(zh): translate configuration guide"
```

---

### Task 5: 翻译 guide/usage（13 个文件）

**Files:**

- Create: `docs/zh/guide/usage/` 下 13 个文件（README.md、binding.md、exposes.md、groups.md、health.md、integrations.md、integrations/home_assistant.md、integrations/openhab.md、mqtt_topics_and_messages.md、ota_updates.md、pairing_devices.md、scenes.md、touchlink.md）

**Interfaces:**

- Consumes: 翻译规则、提示词模板、校验脚本。
- Produces: `docs/zh/guide/usage/**`。

- [ ] **Step 1: 并行派发 13 个翻译子代理**（`mqtt_topics_and_messages.md` 约 35KB，单独一个子代理；提示词额外强调：MQTT topic 名、JSON payload 键值一律不译）

- [ ] **Step 2: 机械校验**：`DIR=guide/usage`，预期 OK。

- [ ] **Step 3: 抽查质量**：Read `docs/zh/guide/usage/mqtt_topics_and_messages.md` 前 150 行 + `pairing_devices.md` 全文。

- [ ] **Step 4: 格式化并提交**

```bash
pnpm pretty:write
git add docs/zh/guide/usage
git commit -m "docs(zh): translate usage guide"
```

---

### Task 6: 翻译 guide/adapters（13 个文件）

**Files:**

- Create: `docs/zh/guide/adapters/` 下 13 个文件（README.md、deconz.md、emberznet.md、zboss.md、zigate.md、zstack.md、flashing/alternative_flashing_methods.md、flashing/connecting_cc2530.md、flashing/copy_ieeaddr.md、flashing/flashing_the_cc2531.md、flashing/flashing_the_cc2538.md、flashing/flashing_via_cc2538-bsl.md、flashing/flashing_via_uniflash.md）

**Interfaces:**

- Consumes: 翻译规则、提示词模板、校验脚本。
- Produces: `docs/zh/guide/adapters/**`。

- [ ] **Step 1: 并行派发 13 个翻译子代理**（`zstack.md` 约 57KB、`emberznet.md` 约 39KB，为本批最大文件，各自单独一个子代理；提示词额外强调：适配器/固件产品名称、型号、购买链接文字中的品牌名不译）

- [ ] **Step 2: 机械校验**：`DIR=guide/adapters`，预期 OK。

- [ ] **Step 3: 抽查质量**：Read `docs/zh/guide/adapters/zstack.md` 前 150 行 + `flashing/flashing_the_cc2531.md` 全文。

- [ ] **Step 4: 格式化并提交**

```bash
pnpm pretty:write
git add docs/zh/guide/adapters
git commit -m "docs(zh): translate adapters guide"
```

---

### Task 7: 翻译 advanced（14 个文件）

**Files:**

- Create: `docs/zh/advanced/zigbee/`（01_zigbee_network.md、02_improve_network_range_and_stability.md、04_sniff_zigbee_traffic.md、05_create_a_cc2530_router.md）
- Create: `docs/zh/advanced/support-new-devices/`（01_support_new_devices.md、02_support_new_tuya_devices.md、03_find_tuya_data_points.md）
- Create: `docs/zh/advanced/remote-adapter/`（connect_to_a_remote_adapter.md、connect_to_a_remote_sonoff_zbbridge.md）
- Create: `docs/zh/advanced/more/`（3d_cases.md、external_converters.md、external_extensions.md、switch-to-dev-branch.md、tuya_xiaomi_ota_url.md）

**Interfaces:**

- Consumes: 翻译规则、提示词模板、校验脚本。
- Produces: `docs/zh/advanced/**`（导航栏"进阶"四组 children 由 getFiles 自动出现）。

- [ ] **Step 1: 并行派发 14 个翻译子代理**

- [ ] **Step 2: 机械校验**：依次 `DIR=advanced/zigbee`、`advanced/support-new-devices`、`advanced/remote-adapter`、`advanced/more`，预期各自 OK。

- [ ] **Step 3: 抽查质量**：Read `docs/zh/advanced/zigbee/01_zigbee_network.md` 全文 + `docs/zh/advanced/more/external_converters.md` 前 100 行。

- [ ] **Step 4: 格式化并提交**

```bash
pnpm pretty:write
git add docs/zh/advanced
git commit -m "docs(zh): translate advanced docs"
```

---

### Task 8: 最终验证与收尾

**Files:**

- 无新增；只验证。

**Interfaces:**

- Consumes: 前 7 个任务的全部产出。

- [ ] **Step 1: 文件数核对**

```bash
cd <仓库根目录>
en=$(find docs/guide docs/advanced -name '*.md' | wc -l)
zh=$(find docs/zh/guide docs/zh/advanced -name '*.md' | wc -l)
echo "en=$en zh=$zh"
```

预期：两者相等（70）。

- [ ] **Step 2: dev server 全面抽查**

Run（后台）: `pnpm dev`
检查项：

- `/zh/` 首页、语言切换双向可用；
- `/zh/guide/getting-started/`、`/zh/guide/installation/01_linux.html`、`/zh/guide/configuration/mqtt.html`、`/zh/guide/usage/pairing_devices.html`、`/zh/guide/adapters/zstack.html`、`/zh/advanced/zigbee/01_zigbee_network.html` 各返回 200 且正文为中文；
- 上述页面中的图片 URL（/images/…）返回 200；
- 导航栏"进阶"菜单四组条目齐全（说明 getFiles zh 目录生效）；
- dev server 输出无新增死链警告（`/zh/` 范围内）。

- [ ] **Step 3: 全量构建**

Run: `pnpm build`（NODE_OPTIONS 已含 12GB 内存上限，耗时较长）
预期：构建成功，`dist/zh/index.html` 存在。

- [ ] **Step 4: 提交收尾（如有修复）并汇报**

```bash
pnpm pretty:write
git add -A docs/zh
git commit -m "docs(zh): final fixes after verification"  # 仅在有改动时
```

汇报内容：翻译文件数、已知限制（搜索不含中文、设备页英文）、建议用户浏览器自查的入口页。
