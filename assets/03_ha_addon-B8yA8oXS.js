import { P as openBlock, m as createStaticVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/guide/installation/03_ha_addon.md
var _pageData = JSON.parse("{\"path\":\"/guide/installation/03_ha_addon.html\",\"title\":\"Home Assistant addon\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"next\":\"14_securing.md\"},\"filePathRelative\":\"guide/installation/03_ha_addon.md\"}");
var _sfc_main = { name: "03_ha_addon.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [createStaticVNode("<h1 id=\"home-assistant-addon\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#home-assistant-addon\"><span>Home Assistant addon</span></a></h1><div class=\"hint-container important\"><p class=\"hint-container-title\">Important</p><p>Only 64-bit architectures (aarch64 and amd64) are supported by Home Assistant. That means hardware like the Sonoff iHost (32-bit) or old Raspberry Pi (armv7) cannot be used.</p></div><div class=\"hint-container warning\"><p class=\"hint-container-title\">Warning</p><p>If you&#39;re using a Raspberry Pi, ensure you have at least a Raspberry Pi 4, as running it on a Raspberry Pi 3 may cause instability due to its limited resources.</p></div><p>If you are running Home Assistant OS or a Supervised Home Assistant instance the easiest way to install Zigbee2MQTT is via the addon. Instructions on how to install it can be found <a href=\"https://github.com/zigbee2mqtt/hassio-zigbee2mqtt#installation\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.</p>", 4)])]);
}
var _03_ha_addon_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, _03_ha_addon_default as default };
