import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/ZG-302ZL.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZG-302ZL.html\",\"title\":\"HOBEIAN ZG-302ZL control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"HOBEIAN ZG-302ZL control via MQTT\",\"description\":\"Integrate your HOBEIAN ZG-302ZL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-01-24T19:08:17.000Z\"},\"filePathRelative\":\"devices/ZG-302ZL.md\"}");
var _sfc_main = { name: "ZG-302ZL.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "hobeian-zg-302zl",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#hobeian-zg-302zl"
		}, [createBaseVNode("span", null, "HOBEIAN ZG-302ZL")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZG-302ZL")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=HOBEIAN" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("HOBEIAN", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Motion sensing switch")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "presence, switch_1, switch_2, switch_3, sensitivity, backlight, trigger_hold, power_outage_memory, auto_on, auto_off")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZG-302ZL.png",
				alt: "HOBEIAN ZG-302ZL"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		_cache[10] || (_cache[10] = createBaseVNode("p", null, "The power must be disconnected during installation", -1)),
		_cache[11] || (_cache[11] = createBaseVNode("h2", {
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
		_cache[12] || (_cache[12] = createStaticVNode("<ul><li><code>time_start</code>: Reply to Tuya-specific time synchronization requests: &quot;1970&quot; - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), &quot;2000&quot; - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), &quot;off&quot; - Don&#39;t reply (use if replying causes too much traffic). Default for this device: &quot;off&quot;. The value must be one of <code>1970</code>, <code>2000</code>, <code>off</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"presence-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#presence-binary\"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id=\"switch-1-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-1-binary\"><span>Switch 1 (binary)</span></a></h3><p>Switch2. Value can be found in the published state on the <code>switch_1</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_1&quot;: &quot;VALUE&quot;}</code>. If value equals <code>ON</code> switch 1 is ON, if <code>OFF</code> OFF.</p><h3 id=\"switch-2-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-2-binary\"><span>Switch 2 (binary)</span></a></h3><p>Switch2. Value can be found in the published state on the <code>switch_2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_2&quot;: &quot;VALUE&quot;}</code>. If value equals <code>ON</code> switch 2 is ON, if <code>OFF</code> OFF.</p><h3 id=\"switch-3-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-3-binary\"><span>Switch 3 (binary)</span></a></h3><p>Switch3. Value can be found in the published state on the <code>switch_3</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_3&quot;: &quot;VALUE&quot;}</code>. If value equals <code>ON</code> switch 3 is ON, if <code>OFF</code> OFF.</p><h3 id=\"sensitivity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#sensitivity-numeric\"><span>Sensitivity (numeric)</span></a></h3><p>detection sensitivity. Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>19</code>.</p><h3 id=\"backlight-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#backlight-binary\"><span>Backlight (binary)</span></a></h3><p>backlight. Value can be found in the published state on the <code>backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight&quot;: &quot;VALUE&quot;}</code>. If value equals <code>ON</code> backlight is ON, if <code>OFF</code> OFF.</p><h3 id=\"trigger-hold-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#trigger-hold-numeric\"><span>Trigger hold (numeric)</span></a></h3><p>Trigger hold(second). Value can be found in the published state on the <code>trigger_hold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trigger_hold&quot;: VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>28800</code>. The unit of this value is <code>s</code>.</p><h3 id=\"power-outage-memory-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#power-outage-memory-enum\"><span>Power outage memory (enum)</span></a></h3><p>Recover state after power outage. Value can be found in the published state on the <code>power_outage_memory</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>restore</code>.</p><h3 id=\"auto-on-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#auto-on-enum\"><span>Auto on (enum)</span></a></h3><p>When somebody passes in front of their sensors, the lights turn. Value can be found in the published state on the <code>auto_on</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_on&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>off</code>, <code>all</code>, <code>ch1</code>, <code>ch2</code>, <code>ch3</code>, <code>ch1_and_ch2</code>, <code>ch2_and_ch3</code>, <code>ch1_and_ch3</code>.</p><h3 id=\"auto-off-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#auto-off-enum\"><span>Auto off (enum)</span></a></h3><p>No one turns off the lights. Value can be found in the published state on the <code>auto_off</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_off&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>off</code>, <code>all</code>, <code>ch1</code>, <code>ch2</code>, <code>ch3</code>, <code>ch1_and_ch2</code>, <code>ch2_and_ch3</code>, <code>ch1_and_ch3</code>.</p>", 22))
	]);
}
var ZG_302ZL_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ZG_302ZL_default as default };
