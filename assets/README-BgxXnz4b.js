import { P as openBlock, h as createTextVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/README.md
var _pageData = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"home\":true,\"title\":\"Home\",\"heroImage\":\"/logo.png\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/guide/getting-started/\",\"type\":\"primary\"},{\"text\":\"Supported Devices\",\"link\":\"/supported-devices/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"Compatible\",\"details\":\"Zigbee2MQTT supports various Zigbee adapters and a big bunch of devices.\"},{\"title\":\"Integrations\",\"details\":\"Zigbee2MQTT integrates well with most home automation solutions because it uses MQTT.\"},{\"title\":\"Open Source\",\"details\":\"Zigbee2MQTT is licenced under the free GNU General Public License 3.\"}],\"footer\":\"zigbee2mqtt.io is maintained by @Koenkk.\"},\"filePathRelative\":\"README.md\"}");
var _sfc_main = { name: "README.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [createBaseVNode("hr", null, null, -1), createBaseVNode("p", null, [
		createTextVNode("Welcome to the Zigbee2MQTT documentation! Besides the documentation, you can also get support and ask questions on the "),
		createBaseVNode("a", {
			href: "https://github.com/Koenkk/zigbee2mqtt/discussions",
			target: "_blank",
			rel: "noopener noreferrer"
		}, "Forum"),
		createTextVNode(" and "),
		createBaseVNode("a", {
			href: "https://discord.gg/NyseBeK",
			target: "_blank",
			rel: "noopener noreferrer"
		}, "Discord channel"),
		createTextVNode(". In case you want to donate click the 'Sponsor' button "),
		createBaseVNode("a", {
			href: "https://github.com/Koenkk/zigbee2mqtt",
			target: "_blank",
			rel: "noopener noreferrer"
		}, "here"),
		createTextVNode(".")
	], -1)])]);
}
var README_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, README_default as default };
