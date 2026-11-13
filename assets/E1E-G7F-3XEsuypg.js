import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/E1E-G7F.md
var _pageData = JSON.parse("{\"path\":\"/devices/E1E-G7F.html\",\"title\":\"Sengled E1E-G7F control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Sengled E1E-G7F control via MQTT\",\"description\":\"Integrate your Sengled E1E-G7F via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2020-05-29T19:41:16.000Z\"},\"filePathRelative\":\"devices/E1E-G7F.md\"}");
var _sfc_main = { name: "E1E-G7F.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[13] || (_cache[13] = createBaseVNode("h1", {
			id: "sengled-e1e-g7f",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#sengled-e1e-g7f"
		}, [createBaseVNode("span", null, "Sengled E1E-G7F")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "E1E-G7F")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Sengled" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Sengled", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Smart switch")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/E1E-G7F.png",
				alt: "Sengled E1E-G7F"
			})])], -1))
		])]),
		_cache[14] || (_cache[14] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Factory reset the switch by pressing and holding the on and off buttons at the same time for at least 3 seconds. The indicator will start flashing, indicating a successful reset. The device will enter pairing mode for one minute. If the device is not connected in one minute, you must restart the pairing process.</p><p>If device won&#39;t go in to pairing mode, try installing a fresh battery.</p><h3 id=\"long-press-action\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#long-press-action\"><span>Long press action</span></a></h3>", 5)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("The device will sometimes output a single push in addition to a long press. You can mitigate this by using the Debounce device configuration. Refer to ", -1)),
			createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
				_: 1
			})]),
			_cache[9] || (_cache[9] = createTextVNode(".", -1))
		]),
		_cache[15] || (_cache[15] = createBaseVNode("p", null, [
			createTextVNode("For the "),
			createBaseVNode("code", null, "up"),
			createTextVNode(" and "),
			createBaseVNode("code", null, "down"),
			createTextVNode(" buttons, they will first output the action, and then output "),
			createBaseVNode("code", null, "{action}_long"),
			createTextVNode(" every approximately 1 second, repeating until the button is released.")
		], -1)),
		_cache[16] || (_cache[16] = createBaseVNode("h2", {
			id: "ota-updates",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ota-updates"
		}, [createBaseVNode("span", null, "OTA updates")])], -1)),
		createBaseVNode("p", null, [
			_cache[11] || (_cache[11] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[12] || (_cache[12] = createTextVNode(".", -1))
		]),
		_cache[17] || (_cache[17] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>up</code>, <code>down</code>, <code>off</code>, <code>on_double</code>, <code>on_long</code>, <code>off_double</code>, <code>off_long</code>.</p>", 3))
	]);
}
var E1E_G7F_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, E1E_G7F_default as default };
