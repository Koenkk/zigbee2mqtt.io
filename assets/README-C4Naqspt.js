import { P as openBlock, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/guide/usage/README.md
var _pageData = JSON.parse("{\"path\":\"/guide/usage/\",\"title\":\"Usage\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"next\":\"pairing_devices.md\"},\"filePathRelative\":\"guide/usage/README.md\"}");
var _sfc_main = { name: "README.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
		createBaseVNode("h1", {
			id: "usage",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#usage"
		}, [createBaseVNode("span", null, "Usage")])], -1),
		createBaseVNode("p", null, "This section will guide you through the features and possibilities of Zigbee2MQTT and how to use them.", -1),
		createBaseVNode("p", null, "Almost any function of Zigbee2MQTT and its paired devices can be controlled using MQTT or the integrated frontend. The frontend provides the basic controlling of devices and managing of the features around Zigbee. To integrate with other systems MQTT is the way to go. Applications like HomeAssistant, NodeRED and many others gives you much possibilities to use visualizations and implement custom logics.", -1)
	])]);
}
var README_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, README_default as default };
