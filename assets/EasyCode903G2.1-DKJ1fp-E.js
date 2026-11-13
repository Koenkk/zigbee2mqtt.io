import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/EasyCode903G2.1.md
var _pageData = JSON.parse("{\"path\":\"/devices/EasyCode903G2.1.html\",\"title\":\"EasyAccess EasyCode903G2.1 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"EasyAccess EasyCode903G2.1 control via MQTT\",\"description\":\"Integrate your EasyAccess EasyCode903G2.1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2021-05-01T14:47:09.000Z\"},\"filePathRelative\":\"devices/EasyCode903G2.1.md\"}");
var _sfc_main = { name: "EasyCode903G2.1.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "easyaccess-easycode903g2-1",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#easyaccess-easycode903g2-1"
		}, [createBaseVNode("span", null, "EasyAccess EasyCode903G2.1")])], -1)),
		createBaseVNode("table", null, [_cache[7] || (_cache[7] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "EasyCode903G2.1")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=EasyAccess" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("EasyAccess", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "EasyFinger V2")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "lock (state, lock_state), battery, sound_volume, action, auto_relock")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/EasyCode903G2.1.png",
				alt: "EasyAccess EasyCode903G2.1"
			})])], -1)),
			_cache[6] || (_cache[6] = createBaseVNode("tr", null, [createBaseVNode("td", null, "White-label"), createBaseVNode("td", null, "Datek Wireless EasyCode903G2.1")], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"lock\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#lock\"><span>Lock</span></a></h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"sound-volume-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#sound-volume-enum\"><span>Sound volume (enum)</span></a></h3><p>Sound volume of the lock. Value can be found in the published state on the <code>sound_volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sound_volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sound_volume&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>silent_mode</code>, <code>low_volume</code>, <code>high_volume</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>zigbee_unlock</code>, <code>lock</code>, <code>rfid_unlock</code>, <code>keypad_unlock</code>.</p><h3 id=\"auto-relock-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#auto-relock-binary\"><span>Auto relock (binary)</span></a></h3><p>Auto relock after 7 seconds.. Value can be found in the published state on the <code>auto_relock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_relock&quot;: VALUE}</code>. If value equals <code>true</code> auto relock is ON, if <code>false</code> OFF.</p>", 11))
	]);
}
var EasyCode903G2_1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, EasyCode903G2_1_default as default };
