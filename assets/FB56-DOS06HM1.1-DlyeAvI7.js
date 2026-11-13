import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/FB56-DOS06HM1.1.md
var _pageData = JSON.parse("{\"path\":\"/devices/FB56-DOS06HM1.1.html\",\"title\":\"Feibit FB56-DOS06HM1.1 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Feibit FB56-DOS06HM1.1 control via MQTT\",\"description\":\"Integrate your Feibit FB56-DOS06HM1.1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-02-06T19:24:12.000Z\"},\"filePathRelative\":\"devices/FB56-DOS06HM1.1.md\"}");
var _sfc_main = { name: "FB56-DOS06HM1.1.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "feibit-fb56-dos06hm1-1",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#feibit-fb56-dos06hm1-1"
		}, [createBaseVNode("span", null, "Feibit FB56-DOS06HM1.1")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "FB56-DOS06HM1.1")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Feibit" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Feibit", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "3A / Nue Zigbee door sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "warning, alarm_1, alarm_2, tamper, battery_low")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/FB56-DOS06HM1.1.png",
				alt: "Feibit FB56-DOS06HM1.1"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"warning-composite\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#warning-composite\"><span>Warning (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;mode&quot;: &quot;VALUE&quot;, &quot;level&quot;: &quot;VALUE&quot;, &quot;strobe_level&quot;: &quot;VALUE&quot;, &quot;strobe&quot;: VALUE, &quot;strobe_duty_cycle&quot;: VALUE, &quot;duration&quot;: VALUE}}</code></p><ul><li><code>mode</code> (enum): Mode of the warning (sound effect) allowed values: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li><li><code>level</code> (enum): Sound level allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe_level</code> (enum): Intensity of the strobe allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) during warning allowed values: <code>true</code> or <code>false</code></li><li><code>strobe_duty_cycle</code> (numeric): Length of the flash cycle max value is 10</li><li><code>duration</code> (numeric): Duration in seconds of the alarm unit is s</li></ul><h3 id=\"alarm-1-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#alarm-1-binary\"><span>Alarm 1 (binary)</span></a></h3><p>Indicates whether IAS Zone alarm 1 is active. Value can be found in the published state on the <code>alarm_1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> alarm 1 is ON, if <code>false</code> OFF.</p><h3 id=\"alarm-2-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#alarm-2-binary\"><span>Alarm 2 (binary)</span></a></h3><p>Indicates whether IAS Zone alarm 2 is active. Value can be found in the published state on the <code>alarm_2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> alarm 2 is ON, if <code>false</code> OFF.</p><h3 id=\"tamper-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#tamper-binary\"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id=\"battery-low-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-low-binary\"><span>Battery low (binary)</span></a></h3><p>Indicates whether the battery of the device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p>", 12))
	]);
}
var FB56_DOS06HM1_1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, FB56_DOS06HM1_1_default as default };
