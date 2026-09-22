import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-D6Jmich1.js";
import { t as _plugin_vue_export_helper_default } from "./app-DRb3XOJL.js";
//#region docs/devices/81823.md
var _pageData = JSON.parse("{\"path\":\"/devices/81823.html\",\"title\":\"AduroSmart 81823 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"AduroSmart 81823 control via MQTT\",\"description\":\"Integrate your AduroSmart 81823 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-09-18T02:26:16.000Z\"},\"git\":{\"updatedTime\":1789883968000,\"contributors\":[{\"name\":\"Rich Hemke\",\"username\":\"\",\"email\":\"rjh@homeseer.com\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3},{\"name\":\"Aduro-PokerS\",\"username\":\"Aduro-PokerS\",\"email\":\"pokers.fang@adurosmart.com\",\"commits\":1,\"url\":\"https://github.com/Aduro-PokerS\"}],\"changelog\":[{\"hash\":\"c1bbce2c20ecfa563951418a520c8c3a006eb167\",\"time\":1789883968000,\"email\":\"pokers.fang@adurosmart.com\",\"author\":\"Aduro-PokerS\",\"message\":\"feat(add): AduroSmart ERIA device images and documentation (#5533)\"},{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"e5b8a5c972a08f7fb34dc1e589eb704a1e4ede88\",\"time\":1759262180000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 25.35.1\"},{\"hash\":\"a5f6e7e1ea21a8b16e513abb3cb588e04af2a26f\",\"time\":1756751284000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 25.14.0\"},{\"hash\":\"794bc380f86f374e1bcd08b5c3fe78a637cd8081\",\"time\":1755872191000,\"email\":\"rjh@homeseer.com\",\"author\":\"Rich Hemke\",\"message\":\"Add doc and image for product DS150ZB (#4054)\"}]},\"filePathRelative\":\"devices/81823.md\"}");
var _sfc_main = { name: "81823.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "adurosmart-81823",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#adurosmart-81823"
		}, [createBaseVNode("span", null, "AduroSmart 81823")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "81823")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=AduroSmart" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("AduroSmart", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "ERIA Wireless Motion Sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, occupancy, battery_low")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/81823.png",
				alt: "AduroSmart 81823"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"occupancy-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#occupancy-binary\"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id=\"battery-low-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-low-binary\"><span>Battery low (binary)</span></a></h3><p>Indicates whether the battery of the device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p>", 7))
	]);
}
var _81823_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, _81823_default as default };
