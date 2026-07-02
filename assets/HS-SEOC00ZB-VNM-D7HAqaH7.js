import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/HS-SEOC00ZB-VNM.md
var _pageData = JSON.parse("{\"path\":\"/devices/HS-SEOC00ZB-VNM.html\",\"title\":\"VSmart HS-SEOC00ZB-VNM control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"VSmart HS-SEOC00ZB-VNM control via MQTT\",\"description\":\"Integrate your VSmart HS-SEOC00ZB-VNM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-10-03T02:16:00.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"howljs\",\"username\":\"howljs\",\"email\":\"33460888+howljs@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/howljs\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":4}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"5601702380faea1b054a52e27b48361f4148af28\",\"time\":1764534871000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc\"},{\"hash\":\"94ddb945fad517abf11cca5a8a8b7b01ab178445\",\"time\":1762114847000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"fix various typos\"},{\"hash\":\"4bcdfb05f5f3ced7c7de977df54ce26b3c67c5a7\",\"time\":1761938408000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 25.58.0\"},{\"hash\":\"a876d8068b4e1e0bddc34bbcf82310cf3fffc84e\",\"time\":1759517713000,\"email\":\"33460888+howljs@users.noreply.github.com\",\"author\":\"Lê Hậu\",\"message\":\"Fix VSmart device documentation (#4217)\"},{\"hash\":\"6a627a16eaa777fefacdac6c291a49f690c9bc60\",\"time\":1759513479000,\"email\":\"33460888+howljs@users.noreply.github.com\",\"author\":\"Lê Hậu\",\"message\":\"Add Vsmart device documentation and images (#4214)\"}]},\"filePathRelative\":\"devices/HS-SEOC00ZB-VNM.md\"}");
var _sfc_main = { name: "HS-SEOC00ZB-VNM.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "vsmart-hs-seoc00zb-vnm",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#vsmart-hs-seoc00zb-vnm"
		}, [createBaseVNode("span", null, "VSmart HS-SEOC00ZB-VNM")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "HS-SEOC00ZB-VNM")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=VSmart" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("VSmart", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Occupancy sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, occupancy")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/HS-SEOC00ZB-VNM.png",
				alt: "VSmart HS-SEOC00ZB-VNM"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Put the device in pairing mode by pressing and holding the button on the device for 3 seconds until the LED indicator flashes rapidly.</p><h3 id=\"reset\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#reset\"><span>Reset</span></a></h3><p>To reset the device, press and hold the button for 10 seconds until the LED indicator flashes 3 times.</p><h3 id=\"installation\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#installation\"><span>Installation</span></a></h3><ul><li>Install the sensor on the ceiling or wall</li><li>Ensure the sensor has a clear view of the area to be monitored</li><li>Recommended mounting height: 2.5-3 meters</li><li>Avoid mounting near air conditioning vents or heating sources</li></ul><h2 id=\"options\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options\"><span>Options</span></a></h2>", 8)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be sent after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of numbers.</li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"occupancy-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#occupancy-binary\"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p>", 6))
	]);
}
var HS_SEOC00ZB_VNM_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, HS_SEOC00ZB_VNM_default as default };
