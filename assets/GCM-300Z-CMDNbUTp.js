import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/GCM-300Z.md
var _pageData = JSON.parse("{\"path\":\"/devices/GCM-300Z.html\",\"title\":\"ShinaSystem GCM-300Z control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"ShinaSystem GCM-300Z control via MQTT\",\"description\":\"Integrate your ShinaSystem GCM-300Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2023-12-26T18:38:16.000Z\"},\"filePathRelative\":\"devices/GCM-300Z.md\"}");
var _sfc_main = { name: "GCM-300Z.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[10] || (_cache[10] = createBaseVNode("h1", {
			id: "shinasystem-gcm-300z",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#shinasystem-gcm-300z"
		}, [createBaseVNode("span", null, "ShinaSystem GCM-300Z")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "GCM-300Z")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=ShinaSystem" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("ShinaSystem", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "SiHAS gas valve")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "gas_valve_state, battery, close_timeout, close_remain_timeout, volume, overheat_mode")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/GCM-300Z.png",
				alt: "ShinaSystem GCM-300Z"
			})])], -1))
		])]),
		_cache[11] || (_cache[11] = createBaseVNode("h2", {
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
		_cache[12] || (_cache[12] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"gas-valve-state-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#gas-valve-state-binary\"><span>Gas valve state (binary)</span></a></h3><p>Valve state if open or closed. Value can be found in the published state on the <code>gas_valve_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;gas_valve_state&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;gas_valve_state&quot;: &quot;VALUE&quot;}</code>. If value equals <code>OPEN</code> gas valve state is ON, if <code>CLOSE</code> OFF.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"close-timeout-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#close-timeout-numeric\"><span>Close timeout (numeric)</span></a></h3><p>Set the default closing time when the gas valve is open.. Value can be found in the published state on the <code>close_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;close_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;close_timeout&quot;: VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>540</code>. The unit of this value is <code>min</code>.</p><h3 id=\"close-remain-timeout-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#close-remain-timeout-numeric\"><span>Close remain timeout (numeric)</span></a></h3><p>Set the time or remaining time until the gas valve closes.. Value can be found in the published state on the <code>close_remain_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;close_remain_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;close_remain_timeout&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>540</code>. The unit of this value is <code>min</code>.</p><h3 id=\"volume-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#volume-enum\"><span>Volume (enum)</span></a></h3><p>Values observed are <code>1</code> (voice), <code>2</code> (high) or <code>3</code> (low).. Value can be found in the published state on the <code>volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;volume&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>voice</code>, <code>high</code>, <code>low</code>.</p><h3 id=\"overheat-mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#overheat-mode-enum\"><span>Overheat mode (enum)</span></a></h3><p>Temperature overheating condition.. Value can be found in the published state on the <code>overheat_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;overheat_mode&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>normal</code>, <code>overheat</code>.</p>", 13))
	]);
}
var GCM_300Z_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, GCM_300Z_default as default };
