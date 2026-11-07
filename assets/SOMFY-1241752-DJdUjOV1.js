import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/SOMFY-1241752.md
var _pageData = JSON.parse("{\"path\":\"/devices/SOMFY-1241752.html\",\"title\":\"Somfy SOMFY-1241752 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Somfy SOMFY-1241752 control via MQTT\",\"description\":\"Integrate your Somfy SOMFY-1241752 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2023-08-01T15:09:09.000Z\"},\"filePathRelative\":\"devices/SOMFY-1241752.md\"}");
var _sfc_main = { name: "SOMFY-1241752.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "somfy-somfy-1241752",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#somfy-somfy-1241752"
		}, [createBaseVNode("span", null, "Somfy SOMFY-1241752")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "SOMFY-1241752")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Somfy" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Somfy", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Blinds")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "cover (state, position), battery")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/SOMFY-1241752.png",
				alt: "Somfy SOMFY-1241752"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Use a paperclip to press and hold the programming button until the motor jogs twice.<br> For more information, see <a href=\"https://asset.somfy.com/Document/c2c8f7f2-d075-4af7-9b57-544cc97da65c_5157264_Sonesse%20ULTRA%2030%20WF%20Zigbee%20Li-ion.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">documentation</a> from SOMFY.</p><h3 id=\"setting-limits\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#setting-limits\"><span>Setting limits</span></a></h3><p>Currently not possible over Zigbee. Enable the Bluetooth radio by using a paper clip to press the set button five times. Use the Set &amp; Go <a href=\"https://apps.apple.com/us/app/set-go-connect/id1450506599\" target=\"_blank\" rel=\"noopener noreferrer\">iOS</a> <a href=\"https://play.google.com/store/apps/details?id=com.somfy.setandgo&amp;hl=en_US&amp;gl=US\" target=\"_blank\" rel=\"noopener noreferrer\">Android</a> application to set up and down stop limits.</p><h3 id=\"factory-reset\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#factory-reset\"><span>Factory Reset</span></a></h3><p>Use paperclip to press and hold the programming button until the motor jogs three times.</p><h3 id=\"battery-level\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-level\"><span>Battery level</span></a></h3><p>Battery percentage level is reported, it may take some time for this to come through.</p><h3 id=\"ota-update\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-update\"><span>OTA Update</span></a></h3><p>The devices are claiming Zigbee support for over-the-air updates but I don&#39;t have sufficient information on this to give it a go. If you have any documentation, please get in touch @nonodename.</p><h2 id=\"options\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options\"><span>Options</span></a></h2>", 12)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><p><code>invert_cover</code>: Inverts the reported cover position and the state derived from it, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"cover\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cover\"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>", 6))
	]);
}
var SOMFY_1241752_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, SOMFY_1241752_default as default };
