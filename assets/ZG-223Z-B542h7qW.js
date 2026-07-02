import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/ZG-223Z.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZG-223Z.html\",\"title\":\"HOBEIAN ZG-223Z control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"HOBEIAN ZG-223Z control via MQTT\",\"description\":\"Integrate your HOBEIAN ZG-223Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2023-06-01T08:16:21.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"13717033460\",\"username\":\"13717033460\",\"email\":\"116949092+13717033460@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/13717033460\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":4}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"934b222f1a779f20231d23c8d061cac3bbfec767\",\"time\":1774984782000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc to 26.27.0\"},{\"hash\":\"7e8e5c269c3198e10e5be1ee9a0b138873967e30\",\"time\":1754062598000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 24.11.0\"},{\"hash\":\"20d3b2e70374e1fe0fa20e6c892def50f32455e5\",\"time\":1748799477000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.52.1\"},{\"hash\":\"17205ad64988383fb0fb54401f56278f491d9e5a\",\"time\":1747071285000,\"email\":\"116949092+13717033460@users.noreply.github.com\",\"author\":\"jomders\",\"message\":\"add ZG-223Z (#3772)\"}]},\"filePathRelative\":\"devices/ZG-223Z.md\"}");
var _sfc_main = { name: "ZG-223Z.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "hobeian-zg-223z",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#hobeian-zg-223z"
		}, [createBaseVNode("span", null, "HOBEIAN ZG-223Z")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZG-223Z")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=HOBEIAN" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("HOBEIAN", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Rainwater detection sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "rainwater, illuminance, sensitivity, illuminance_sampling, battery")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZG-223Z.png",
				alt: "HOBEIAN ZG-223Z"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"rainwater-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#rainwater-enum\"><span>Rainwater (enum)</span></a></h3><p>Sensor rainwater status. Value can be found in the published state on the <code>rainwater</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>raining</code>.</p><h3 id=\"illuminance-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#illuminance-numeric\"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id=\"sensitivity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#sensitivity-numeric\"><span>Sensitivity (numeric)</span></a></h3><p>The larger the value, the more sensitive it is (refresh and update only while active). Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9</code>.</p><h3 id=\"illuminance-sampling-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#illuminance-sampling-numeric\"><span>Illuminance sampling (numeric)</span></a></h3><p>Brightness acquisition interval (refresh and update only while active). Value can be found in the published state on the <code>illuminance_sampling</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;illuminance_sampling&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>480</code>. The unit of this value is <code>minutes</code>.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>", 12))
	]);
}
var ZG_223Z_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, ZG_223Z_default as default };
