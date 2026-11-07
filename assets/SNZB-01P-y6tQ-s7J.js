import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/SNZB-01P.md
var _pageData = JSON.parse("{\"path\":\"/devices/SNZB-01P.html\",\"title\":\"SONOFF SNZB-01P control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"SONOFF SNZB-01P control via MQTT\",\"description\":\"Integrate your SONOFF SNZB-01P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2023-06-01T08:16:21.000Z\"},\"filePathRelative\":\"devices/SNZB-01P.md\"}");
var _sfc_main = { name: "SNZB-01P.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[21] || (_cache[21] = createBaseVNode("h1", {
			id: "sonoff-snzb-01p",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#sonoff-snzb-01p"
		}, [createBaseVNode("span", null, "SONOFF SNZB-01P")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "SNZB-01P")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=SONOFF" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("SONOFF", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Wireless button")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, voltage, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/SNZB-01P.png",
				alt: "SONOFF SNZB-01P"
			})])], -1))
		])]),
		_cache[22] || (_cache[22] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"battery\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery\"><span>Battery</span></a></h3><p>Uses 1 x CR2477</p><p><strong>This device <em>sleeps</em> to preserve energy when it&#39;s not actively used.</strong><br> When sleeping, it will not respond to any Z2M commands.<br> Press its button to keep it awake and allow interactions.</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p><strong>Press and hold the reset button for 5s</strong> to put device into pairing mode.<br> The reset button can be found by removing the back cover.</p><h3 id=\"binding\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#binding\"><span>Binding</span></a></h3><p>This button can <strong>not</strong> directly control individual devices or groups (v2.2.0).</p>", 8)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [
			_cache[8] || (_cache[8] = createTextVNode("Pairing inside the network is successful by ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/binding.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("binding", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(" the ", -1)),
			_cache[10] || (_cache[10] = createBaseVNode("code", null, "OnOff", -1)),
			_cache[11] || (_cache[11] = createTextVNode(" cluster, but ", -1)),
			_cache[12] || (_cache[12] = createBaseVNode("strong", null, "clicks perform no action.", -1))
		]), createBaseVNode("li", null, [
			_cache[14] || (_cache[14] = createTextVNode("Pairing outside the network through ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/touchlink.html" }, {
				default: withCtx(() => [..._cache[13] || (_cache[13] = [createTextVNode("Touchlink", -1)])]),
				_: 1
			}),
			_cache[15] || (_cache[15] = createTextVNode(" is ", -1)),
			_cache[16] || (_cache[16] = createBaseVNode("strong", null, "not", -1)),
			_cache[17] || (_cache[17] = createTextVNode(" supported.", -1))
		])]),
		_cache[23] || (_cache[23] = createStaticVNode("<h3 id=\"action-mapping\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-mapping\"><span>Action mapping</span></a></h3><table><thead><tr><th style=\"text-align:right;\">Real Action</th><th>Z2M Action</th><th>Bind Action</th></tr></thead><tbody><tr><td style=\"text-align:right;\">Single press</td><td>single</td><td>nothing</td></tr><tr><td style=\"text-align:right;\">Double press</td><td>double</td><td>nothing</td></tr><tr><td style=\"text-align:right;\">Long press</td><td>long</td><td>nothing</td></tr></tbody></table><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 3)),
		createBaseVNode("p", null, [
			_cache[19] || (_cache[19] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[18] || (_cache[18] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[20] || (_cache[20] = createTextVNode(".", -1))
		]),
		_cache[24] || (_cache[24] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"voltage-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#voltage-numeric\"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>long</code>.</p>", 7))
	]);
}
var SNZB_01P_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, SNZB_01P_default as default };
