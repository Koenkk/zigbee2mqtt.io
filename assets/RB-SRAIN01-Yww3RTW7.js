import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/RB-SRAIN01.md
var _pageData = JSON.parse("{\"path\":\"/devices/RB-SRAIN01.html\",\"title\":\"Tuya RB-SRAIN01 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Tuya RB-SRAIN01 control via MQTT\",\"description\":\"Integrate your Tuya RB-SRAIN01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-09-01T12:39:25.000Z\"},\"filePathRelative\":\"devices/RB-SRAIN01.md\"}");
var _sfc_main = { name: "RB-SRAIN01.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "tuya-rb-srain01",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#tuya-rb-srain01"
		}, [createBaseVNode("span", null, "Tuya RB-SRAIN01")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "RB-SRAIN01")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Tuya" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Tuya", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Solar rain sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "illuminance_raw, illuminance_average_20min, illuminance_maximum_today, cleaning_reminder, rain_intensity, rain, battery")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/RB-SRAIN01.png",
				alt: "Tuya RB-SRAIN01"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"illuminance-raw-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#illuminance-raw-numeric\"><span>Illuminance raw (numeric)</span></a></h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance_raw</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id=\"illuminance-average-20min-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#illuminance-average-20min-numeric\"><span>Illuminance average 20min (numeric)</span></a></h3><p>Illuminance average for the last 20 minutes. Value can be found in the published state on the <code>illuminance_average_20min</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id=\"illuminance-maximum-today-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#illuminance-maximum-today-numeric\"><span>Illuminance maximum today (numeric)</span></a></h3><p>Illuminance maximum for the last 24 hours. Value can be found in the published state on the <code>illuminance_maximum_today</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id=\"cleaning-reminder-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cleaning-reminder-binary\"><span>Cleaning reminder (binary)</span></a></h3><p>Cleaning reminder. Value can be found in the published state on the <code>cleaning_reminder</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> cleaning reminder is ON, if <code>false</code> OFF.</p><h3 id=\"rain-intensity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#rain-intensity-numeric\"><span>Rain intensity (numeric)</span></a></h3><p>Rainfall intensity. Value can be found in the published state on the <code>rain_intensity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id=\"rain-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#rain-binary\"><span>Rain (binary)</span></a></h3><p>Indicates whether the device detected rainfall. Value can be found in the published state on the <code>rain</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> rain is ON, if <code>false</code> OFF.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>", 15))
	]);
}
var RB_SRAIN01_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, RB_SRAIN01_default as default };
