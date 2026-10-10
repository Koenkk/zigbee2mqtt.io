import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-BzB4pT90.js";
import { t as _plugin_vue_export_helper_default } from "./app-BtQrO_PE.js";
//#region docs/devices/LR-DGNWG05LM.md
var _pageData = JSON.parse("{\"path\":\"/devices/LR-DGNWG05LM.html\",\"title\":\"OpenLumi LR-DGNWG05LM control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"OpenLumi LR-DGNWG05LM control via MQTT\",\"description\":\"Integrate your OpenLumi LR-DGNWG05LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-09-29T18:28:03.000Z\"},\"git\":{\"updatedTime\":1790707998000,\"contributors\":[{\"name\":\"igorlistopad\",\"username\":\"igorlistopad\",\"email\":\"31544843+igorlistopad@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/igorlistopad\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"3f214b49bae2c8068a6a702f5711e2f46d2e6848\",\"time\":1790707998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"ca3ef220ffe7896c1cc3aac66f24aeeda5aec3fe\",\"time\":1789494558000,\"email\":\"31544843+igorlistopad@users.noreply.github.com\",\"author\":\"Igor Listopad\",\"message\":\"docs: add OpenLumi LR-DGNWG05LM and LR-ZHWG11LM documentation (#5523)\"}]},\"filePathRelative\":\"devices/LR-DGNWG05LM.md\"}");
var _sfc_main = { name: "LR-DGNWG05LM.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "openlumi-lr-dgnwg05lm",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#openlumi-lr-dgnwg05lm"
		}, [createBaseVNode("span", null, "OpenLumi LR-DGNWG05LM")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "LR-DGNWG05LM")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=OpenLumi" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("OpenLumi", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Lumi Router (for Xiaomi DGNWG05LM)")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "device_temperature")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/LR-DGNWG05LM.png",
				alt: "OpenLumi LR-DGNWG05LM"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><p>This device is a <strong>Xiaomi DGNWG05LM</strong> gateway with its JN5169 Zigbee module flashed with Lumi Router firmware, allowing it to operate as a Zigbee router.</p><h3 id=\"firmware\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#firmware\"><span>Firmware</span></a></h3><p>Open source firmware and flashing instructions are available on <a href=\"https://github.com/igorlistopad/Lumi-Router-JN5169\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>See the <a href=\"https://github.com/igorlistopad/Lumi-Router-JN5169#reset-and-pairing\" target=\"_blank\" rel=\"noopener noreferrer\">reset and pairing instructions</a>.</p><h2 id=\"options\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options\"><span>Options</span></a></h2>", 7)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"device-temperature-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#device-temperature-numeric\"><span>Device temperature (numeric)</span></a></h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;device_temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p>", 4))
	]);
}
var LR_DGNWG05LM_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, LR_DGNWG05LM_default as default };
