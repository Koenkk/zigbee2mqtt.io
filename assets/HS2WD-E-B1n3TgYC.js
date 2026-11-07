import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/HS2WD-E.md
var _pageData = JSON.parse("{\"path\":\"/devices/HS2WD-E.html\",\"title\":\"Heiman HS2WD-E control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Heiman HS2WD-E control via MQTT\",\"description\":\"Integrate your Heiman HS2WD-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2019-07-22T20:08:17.000Z\"},\"filePathRelative\":\"devices/HS2WD-E.md\"}");
var _sfc_main = { name: "HS2WD-E.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "heiman-hs2wd-e",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#heiman-hs2wd-e"
		}, [createBaseVNode("span", null, "Heiman HS2WD-E")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "HS2WD-E")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Heiman" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Heiman", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Smart siren")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, max_duration, warning")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/HS2WD-E.png",
				alt: "Heiman HS2WD-E"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Push the included pin in the small hole on the case of the device and hold for ~5 seconds until the LED starts flashing.</p><h3 id=\"triggering-the-alarm\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#triggering-the-alarm\"><span>Triggering the alarm</span></a></h3><p>The alarm can be trigged by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> message <code>{&quot;warning&quot;: {&quot;duration&quot;: 10, &quot;mode&quot;: &quot;emergency&quot;, &quot;strobe&quot;: false}}</code>.</p><p>Where:</p><ul><li><code>duration</code>: the number of seconds the alarm will be on (max is 1800 seconds)</li><li><code>mode</code>: <code>stop</code> or <code>emergency</code></li><li><code>strobe</code>: <code>true</code> or <code>false</code> will let the strobe flash once during the alarm</li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"max-duration-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#max-duration-numeric\"><span>Max duration (numeric)</span></a></h3><p>Max duration of Siren. Value can be found in the published state on the <code>max_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;max_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_duration&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65534</code>. The unit of this value is <code>s</code>.</p><h3 id=\"warning-composite\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#warning-composite\"><span>Warning (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;strobe&quot;: VALUE, &quot;strobe_duty_cycle&quot;: VALUE, &quot;duration&quot;: VALUE, &quot;mode&quot;: &quot;VALUE&quot;}}</code></p><ul><li><code>strobe</code> (binary): Turn on/off the strobe (light) during warning allowed values: <code>true</code> or <code>false</code></li><li><code>strobe_duty_cycle</code> (numeric): Length of the flash cycle max value is 10</li><li><code>duration</code> (numeric): Duration in seconds of the alarm unit is s</li><li><code>mode</code> (enum): Mode of the warning (sound effect) allowed values: <code>stop</code>, <code>emergency</code></li></ul>", 15))
	]);
}
var HS2WD_E_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, HS2WD_E_default as default };
