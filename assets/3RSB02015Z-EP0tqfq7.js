import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/3RSB02015Z.md
var _pageData = JSON.parse("{\"path\":\"/devices/3RSB02015Z.html\",\"title\":\"Third Reality 3RSB02015Z control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Third Reality 3RSB02015Z control via MQTT\",\"description\":\"Integrate your Third Reality 3RSB02015Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-05-01T17:59:09.000Z\"},\"filePathRelative\":\"devices/3RSB02015Z.md\"}");
var _sfc_main = { name: "3RSB02015Z.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "third-reality-3rsb02015z",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#third-reality-3rsb02015z"
		}, [createBaseVNode("span", null, "Third Reality 3RSB02015Z")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "3RSB02015Z")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Third%20Reality" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Third Reality", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Third Reality Blind Gen2")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, cover (state, position), ir_remote, bottom_balance_adjustment, preset_bottom_position, estimated_usable_curtain_cycles, battery_level_at_last_power_off, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/3RSB02015Z.png",
				alt: "Third Reality 3RSB02015Z"
			})])], -1))
		])]),
		_cache[12] || (_cache[12] = createBaseVNode("h2", {
			id: "ota-updates",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ota-updates"
		}, [createBaseVNode("span", null, "OTA updates")])], -1)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(".", -1))
		]),
		_cache[13] || (_cache[13] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[14] || (_cache[14] = createStaticVNode("<ul><li><p><code>invert_cover</code>: Inverts the reported cover position and the state derived from it, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"cover\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cover\"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id=\"ir-remote-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ir-remote-binary\"><span>Ir remote (binary)</span></a></h3><p>IR Remote Function Enable/Disable. Value can be found in the published state on the <code>ir_remote</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ir_remote&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ir_remote&quot;: &quot;VALUE&quot;}</code>. If value equals <code>ON</code> ir remote is ON, if <code>OFF</code> OFF.</p><h3 id=\"bottom-balance-adjustment-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#bottom-balance-adjustment-numeric\"><span>Bottom balance adjustment (numeric)</span></a></h3><p>Adjusts the left-right balance of the shade&#39;s bottom bar(turns -100 ~ 100).. Value can be found in the published state on the <code>bottom_balance_adjustment</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;bottom_balance_adjustment&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;bottom_balance_adjustment&quot;: VALUE}</code>. The minimal value is <code>-100</code> and the maximum value is <code>100</code>.</p><h3 id=\"preset-bottom-position-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#preset-bottom-position-numeric\"><span>Preset bottom position (numeric)</span></a></h3><p>Preset the bottom limit position of the blind. Value can be found in the published state on the <code>preset_bottom_position</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;preset_bottom_position&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset_bottom_position&quot;: VALUE}</code>. The minimal value is <code>50</code> and the maximum value is <code>4100</code>.</p><h3 id=\"estimated-usable-curtain-cycles-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#estimated-usable-curtain-cycles-numeric\"><span>Estimated usable curtain cycles (numeric)</span></a></h3><p>Indicates the estimated number of remaining curtain cycles, used to gauge the battery charge level(based on battery level).. Value can be found in the published state on the <code>estimated_usable_curtain_cycles</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;estimated_usable_curtain_cycles&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;estimated_usable_curtain_cycles&quot;: VALUE}</code>. The minimal value is <code>200</code> and the maximum value is <code>334</code>.</p><h3 id=\"battery-level-at-last-power-off-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-level-at-last-power-off-numeric\"><span>Battery level at last power off (numeric)</span></a></h3><p>Stores the battery level recorded at the moment of the last power-off, used to help estimate the current battery capacity.. Value can be found in the published state on the <code>battery_level_at_last_power_off</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery_level_at_last_power_off&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>open</code>, <code>close</code>, <code>stop</code>.</p>", 18))
	]);
}
var _3RSB02015Z_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, _3RSB02015Z_default as default };
