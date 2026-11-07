import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/ZLGP17_ZLGP18.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZLGP17_ZLGP18.html\",\"title\":\"Legrand ZLGP17/ZLGP18 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Legrand ZLGP17/ZLGP18 control via MQTT\",\"description\":\"Integrate your Legrand ZLGP17/ZLGP18 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2021-09-02T18:14:38.000Z\"},\"filePathRelative\":\"devices/ZLGP17_ZLGP18.md\"}");
var _sfc_main = { name: "ZLGP17_ZLGP18.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[10] || (_cache[10] = createBaseVNode("h1", {
			id: "legrand-zlgp17-zlgp18",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#legrand-zlgp17-zlgp18"
		}, [createBaseVNode("span", null, "Legrand ZLGP17/ZLGP18")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZLGP17/ZLGP18")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Legrand" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Legrand", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Wireless and batteryless (double) lighting control")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZLGP17-ZLGP18.png",
				alt: "Legrand ZLGP17/ZLGP18"
			})])], -1))
		])]),
		_cache[11] || (_cache[11] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"green-power\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#green-power\"><span>Green Power</span></a></h3><p>This is a Zigbee Green Power device which allows it to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first. Not all Zigbee devices can do this translation, currently the only devices known to do this are Philips Hue devices. This means that the Green Power device has to be in range of a Philips Hue device in order to use it.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p><h3 id=\"pairing-zlgp17\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing-zlgp17\"><span>Pairing ZLGP17</span></a></h3><p>To pair this device on channel 11, hold the configuration button (on the back of the device) and press the main button (up or down).</p><p>This device can work on any channel, not only 11. For this, please refer to the <a href=\"https://www.admin.legrandoc.com/files/documents/S000111963EN-00.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Legrand ZLGP17 manual chapter 6.2</a>.</p><h3 id=\"pairing-zlgp18\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing-zlgp18\"><span>Pairing ZLGP18</span></a></h3><p>To pair this device on channel 11, hold the configuration button (on the back of the device) and press the button (up or down) on the first side, then do the same for the second side.</p><p>Note: each side of the device is treated as a single ZLGP17.</p><p>This device can work on any channel, not only 11. For this, please refer to the <a href=\"https://www.admin.legrandoc.com/files/documents/S000112516EN-00.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Legrand ZLGP18 manual chapter 6.2</a>.</p><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 12)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(".", -1))
		]),
		_cache[12] || (_cache[12] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>press_once</code>, <code>press_twice</code>.</p>", 3))
	]);
}
var ZLGP17_ZLGP18_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ZLGP17_ZLGP18_default as default };
