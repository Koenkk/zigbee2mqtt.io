import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/Espressif-ZigbeeRangeExtender.md
var _pageData = JSON.parse("{\"path\":\"/devices/Espressif-ZigbeeRangeExtender.html\",\"title\":\"Espressif Espressif-ZigbeeRangeExtender control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Espressif Espressif-ZigbeeRangeExtender control via MQTT\",\"description\":\"Integrate your Espressif Espressif-ZigbeeRangeExtender via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-09-08T20:08:17.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"ashp8i\",\"username\":\"ashp8i\",\"email\":\"ashp8@hotmail.com\",\"commits\":1,\"url\":\"https://github.com/ashp8i\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"e5b8a5c972a08f7fb34dc1e589eb704a1e4ede88\",\"time\":1759262180000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 25.35.1\"},{\"hash\":\"04485fd5c1e6e7347fe14f8ea8ef3e2b55ab3727\",\"time\":1757702989000,\"email\":\"ashp8@hotmail.com\",\"author\":\"ashp8i\",\"message\":\"Add Espressif Router Support (#4131)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]}]},\"filePathRelative\":\"devices/Espressif-ZigbeeRangeExtender.md\"}");
var _sfc_main = { name: "Espressif-ZigbeeRangeExtender.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "espressif-espressif-zigbeerangeextender",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#espressif-espressif-zigbeerangeextender"
		}, [createBaseVNode("span", null, "Espressif Espressif-ZigbeeRangeExtender")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "Espressif-ZigbeeRangeExtender")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Espressif" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Espressif", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "ESP32-C6/H2 router")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/Espressif-ZigbeeRangeExtender.png",
				alt: "Espressif Espressif-ZigbeeRangeExtender"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h2 id=\"readme-from-arduino-ide\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#readme-from-arduino-ide\"><span>Readme from Arduino IDE</span></a></h2><p><a href=\"https://github.com/espressif/arduino-esp32/blob/master/libraries/Zigbee/examples/Zigbee_Range_Extender/README.md\" target=\"_blank\" rel=\"noopener noreferrer\">Link to Arduino-ESP32 Zigbee Range Extender (Router) Example</a></p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>power on device via USB and permit join in zigbee2mqtt.</p><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2>", 6))
	]);
}
var Espressif_ZigbeeRangeExtender_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, Espressif_ZigbeeRangeExtender_default as default };
