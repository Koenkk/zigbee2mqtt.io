import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/ZM-AM02_cover.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZM-AM02_cover.html\",\"title\":\"Zemismart ZM-AM02_cover control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Zemismart ZM-AM02_cover control via MQTT\",\"description\":\"Integrate your Zemismart ZM-AM02_cover via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-09-01T12:36:27.000Z\"},\"filePathRelative\":\"devices/ZM-AM02_cover.md\"}");
var _sfc_main = { name: "ZM-AM02_cover.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "zemismart-zm-am02-cover",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#zemismart-zm-am02-cover"
		}, [createBaseVNode("span", null, "Zemismart ZM-AM02_cover")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZM-AM02_cover")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Zemismart" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Zemismart", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee/RF curtain converter")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "cover (state, position), options, motor_working_mode, percent_state, mode, motor_direction, border")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZM-AM02_cover.png",
				alt: "Zemismart ZM-AM02_cover"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>invert_cover</code>: Inverts the reported cover position and the state derived from it, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"cover\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cover\"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id=\"options-composite\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options-composite\"><span>Options (composite)</span></a></h3><ul><li><code>motor_speed</code> (numeric): Motor speed max value is 255</li></ul><h3 id=\"motor-working-mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#motor-working-mode-enum\"><span>Motor working mode (enum)</span></a></h3><p>Value can be found in the published state on the <code>motor_working_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_working_mode&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>continuous</code>, <code>intermittently</code>.</p><h3 id=\"percent-state-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#percent-state-numeric\"><span>Percent state (numeric)</span></a></h3><p>Value can be found in the published state on the <code>percent_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#mode-enum\"><span>Mode (enum)</span></a></h3><p>Value can be found in the published state on the <code>mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>morning</code>, <code>night</code>.</p><h3 id=\"motor-direction-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#motor-direction-enum\"><span>Motor direction (enum)</span></a></h3><p>Value can be found in the published state on the <code>motor_direction</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_direction&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>forward</code>, <code>back</code>.</p><h3 id=\"border-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#border-enum\"><span>Border (enum)</span></a></h3><p>Value can be found in the published state on the <code>border</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;border&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>up</code>, <code>down</code>, <code>down_delete</code>.</p>", 16))
	]);
}
var ZM_AM02_cover_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ZM_AM02_cover_default as default };
