import { P as openBlock, m as createStaticVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/images/cc2538-jtag-2.jpg
var cc2538_jtag_2_default = "/assets/cc2538-jtag-2-CQQzw6gp.jpg";
// docs/images/cc2538-jtag-3.jpg
var cc2538_jtag_3_default = "/assets/cc2538-jtag-3-pVR_5KQ-.jpg";
// docs/images/cc2538-jtag-1.jpg
var cc2538_jtag_1_default = "/assets/cc2538-jtag-1-DL9b2CBd.jpg";
// docs/images/cc2538-jtag-4.jpg
var cc2538_jtag_4_default = "/assets/cc2538-jtag-4-CaEn-Scz.jpg";
// docs/images/cc2538-jtag-5.jpg
var cc2538_jtag_5_default = "/assets/cc2538-jtag-5-C2A7DSbo.jpg";
// docs/images/cc2538-jtag-6.jpg
var cc2538_jtag_6_default = "/assets/cc2538-jtag-6-qDTPQs90.jpg";
// docs/images/cc2538-jtag-7.jpg
var cc2538_jtag_7_default = "/assets/cc2538-jtag-7-D0DNvPgL.jpg";
// docs/guide/adapters/flashing/flashing_the_cc2538.md
var _pageData = JSON.parse("{\"path\":\"/guide/adapters/flashing/flashing_the_cc2538.html\",\"title\":\"Flashing the firmware on the CC2538 MODULE\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"redirectFrom\":\"/information/flashing_the_cc2538.md\"},\"filePathRelative\":\"guide/adapters/flashing/flashing_the_cc2538.md\"}");
var _sfc_main = { name: "flashing_the_cc2538.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [createStaticVNode("<h1 id=\"flashing-the-firmware-on-the-cc2538-module\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#flashing-the-firmware-on-the-cc2538-module\"><span>Flashing the firmware on the CC2538 MODULE</span></a></h1><p>The CC2538 module needs to be flashed with a custom firmware. This firmware can be flashed with a JTAG programmer. The programmer can be found on <a href=\"https://www.aliexpress.com/wholesale?catId=0&amp;initiative_id=SB_20191108075039&amp;SearchText=jlink+V8+jtag\" target=\"_blank\" rel=\"noopener noreferrer\">Aliexpress</a></p><h2 id=\"windows\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#windows\"><span>Windows</span></a></h2><ol><li>Install SEGGER <a href=\"https://www.segger.com/downloads/jlink/\" target=\"_blank\" rel=\"noopener noreferrer\">J-Link Software</a><img src=\"" + cc2538_jtag_2_default + "\" alt=\"\"></li><li>Open SEGGER J-Link Configurator and ensure your JTAG has the latest firmware (upgrade it if this is not your case) <img src=\"" + cc2538_jtag_3_default + "\" alt=\"\"></li><li>Connect JTAG programmer to CC2538 module following below diagram: <img src=\"" + cc2538_jtag_1_default + "\" alt=\"\"></li><li>Download <a href=\"https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592\" target=\"_blank\" rel=\"noopener noreferrer\">latest firmware</a></li><li>Open SEGGER J-Link Flash and select &quot;Create a New Project&quot; <img src=\"" + cc2538_jtag_4_default + "\" alt=\"\"></li><li>Make sure you select the right module [TI CC2538SF53] and [JTAG] as Target Interface <img src=\"" + cc2538_jtag_5_default + "\" alt=\"\"></li><li>Now select &quot;Open Data File...&quot; and select the right firmware [MODKAMRU_V3_USB.hex] <img src=\"" + cc2538_jtag_6_default + "\" alt=\"\"></li><li>Now as a final step in order to successfully program the module select first [Target/Manual Programming/Erase Chip] (or press F4) and then [Target/Manual Programming/Program &amp; Verify] (or press F6) <img src=\"" + cc2538_jtag_7_default + "\" alt=\"\"></li></ol><h1 id=\"how-to-check-the-installed-firmware-version\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#how-to-check-the-installed-firmware-version\"><span>How-to check the installed firmware version</span></a></h1><p>Zigbee2MQTT will output the installed firmware version to the Zigbee2MQTT log on startup:</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">Zigbee2MQTT:info  2019-11-09T13:01:14: Coordinator firmware version: &#39;{&quot;type&quot;:&quot;zStack30x&quot;,&quot;meta&quot;:{&quot;transportrev&quot;:2,&quot;product&quot;:2,&quot;majorrel&quot;:2,&quot;minorrel&quot;:7,&quot;maintrel&quot;:2,&quot;revision&quot;:20190425}}&#39;</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div></div></div><p>In the above example the version is <code>20190425</code>.</p>", 8)])]);
}
var flashing_the_cc2538_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, flashing_the_cc2538_default as default };
