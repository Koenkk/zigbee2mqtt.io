import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/YK-16.md
var _pageData = JSON.parse("{\"path\":\"/devices/YK-16.html\",\"title\":\"Ledron YK-16 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Ledron YK-16 control via MQTT\",\"description\":\"Integrate your Ledron YK-16 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-05-01T19:17:56.000Z\"},\"filePathRelative\":\"devices/YK-16.md\"}");
var _sfc_main = { name: "YK-16.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "ledron-yk-16",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ledron-yk-16"
		}, [createBaseVNode("span", null, "Ledron YK-16")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "YK-16")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Ledron" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Ledron", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "RGB+CCT Remote")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, voltage, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/YK-16.png",
				alt: "Ledron YK-16"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><p><code>zone_1_group_id</code>: Group ID for zone 1 (default: 101). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>65535</code></p></li><li><p><code>zone_2_group_id</code>: Group ID for zone 2 (default: 102). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>65535</code></p></li><li><p><code>zone_3_group_id</code>: Group ID for zone 3 (default: 103). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>65535</code></p></li><li><p><code>zone_4_group_id</code>: Group ID for zone 4 (default: 104). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>65535</code></p></li><li><p><code>zone_5_group_id</code>: Group ID for zone 5 (default: 105). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>65535</code></p></li><li><p><code>zone_6_group_id</code>: Group ID for zone 6 (default: 106). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>65535</code></p></li><li><p><code>zone_7_group_id</code>: Group ID for zone 7 (default: 107). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>65535</code></p></li><li><p><code>zone_8_group_id</code>: Group ID for zone 8 (default: 108). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>65535</code></p></li><li><p><code>expose_values</code>: Expose additional numeric values for action properties (hue, saturation, level, etc.). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>zone_actions</code>: Publish zone-specific actions with zone IDs (e.g., on_zone_1, off_zone_2). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"voltage-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#voltage-numeric\"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_move_to_level</code>, <code>color_temperature_move</code>, <code>move_to_hue_and_saturation</code>.</p>", 8))
	]);
}
var YK_16_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, YK_16_default as default };
