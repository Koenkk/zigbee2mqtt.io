import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/ZLGP14_ZLGP15_ZLGP16.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZLGP14_ZLGP15_ZLGP16.html\",\"title\":\"Legrand ZLGP14/ZLGP15/ZLGP16 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Legrand ZLGP14/ZLGP15/ZLGP16 control via MQTT\",\"description\":\"Integrate your Legrand ZLGP14/ZLGP15/ZLGP16 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2023-06-01T08:09:29.000Z\"},\"filePathRelative\":\"devices/ZLGP14_ZLGP15_ZLGP16.md\"}");
var _sfc_main = { name: "ZLGP14_ZLGP15_ZLGP16.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "legrand-zlgp14-zlgp15-zlgp16",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#legrand-zlgp14-zlgp15-zlgp16"
		}, [createBaseVNode("span", null, "Legrand ZLGP14/ZLGP15/ZLGP16")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZLGP14/ZLGP15/ZLGP16")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Legrand" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Legrand", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Wireless and batteryless scenario switch (home arrival/departure, 1-4 switches, daytime day/night)")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZLGP14-ZLGP15-ZLGP16.png",
				alt: "Legrand ZLGP14/ZLGP15/ZLGP16"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"green-power\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#green-power\"><span>Green Power</span></a></h3><p>This is a Zigbee Green Power device which allows it to be very energy efficient.<br> The device identification is the same for several models ZLGP14, ZLGP15 and ZLGP16 (so far). Only command IDs differ (from 16 to 23).<br> Current supported models are:</p><ul><li>ZLGP14 (home arrival/home departure)</li><li>ZLGP15 (1 to 4 numbered switches)</li><li>ZLGP16 (daytime day/daytime night)</li></ul><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>To pair this device, hold the configuration button (on the back of the device) and press any of the buttons.<br> For further details, please refer to manufacturer documentation below.</p><h3 id=\"manfacturer-documentations\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#manfacturer-documentations\"><span>Manfacturer documentations</span></a></h3><ul><li>ZLGP14 <a href=\"https://www.admin.legrandoc.com/files/documents/S000113314EN-00.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">EN</a> <a href=\"https://www.admin.legrandoc.com/files/documents/S000113314FR-00.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">FR</a></li><li>ZLGP15 <a href=\"https://www.admin.legrandoc.com/files/documents/S000113321EN-00.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">EN</a> <a href=\"https://www.admin.legrandoc.com/files/documents/S000113321FR-00.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">FR</a></li><li>ZLGP16 <a href=\"https://www.admin.legrandoc.com/files/documents/S000113317EN-00.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">EN</a> <a href=\"https://www.admin.legrandoc.com/files/documents/S000113317FR-00.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">FR</a></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>home_arrival</code>, <code>home_departure</code>, <code>press_1</code>, <code>press_2</code>, <code>press_3</code>, <code>press_4</code>, <code>daytime_day</code>, <code>daytime_night</code>.</p>", 11))
	]);
}
var ZLGP14_ZLGP15_ZLGP16_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ZLGP14_ZLGP15_ZLGP16_default as default };
