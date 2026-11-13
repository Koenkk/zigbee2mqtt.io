import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/E2213.md
var _pageData = JSON.parse("{\"path\":\"/devices/E2213.html\",\"title\":\"IKEA E2213 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"IKEA E2213 control via MQTT\",\"description\":\"Integrate your IKEA E2213 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2023-12-26T18:35:42.000Z\"},\"filePathRelative\":\"devices/E2213.md\"}");
var _sfc_main = { name: "E2213.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[18] || (_cache[18] = createBaseVNode("h1", {
			id: "ikea-e2213",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ikea-e2213"
		}, [createBaseVNode("span", null, "IKEA E2213")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "E2213")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=IKEA" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("IKEA", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "SOMRIG shortcut button")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "identify, battery, voltage, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/E2213.png",
				alt: "IKEA E2213"
			})])], -1))
		])]),
		_cache[19] || (_cache[19] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"printing-template\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#printing-template\"><span>Printing Template</span></a></h3><p>Template to print own covers is provided <a href=\"https://github.com/thatslolo/IKEA-SOMRIG-template\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.</p><h3 id=\"battery\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery\"><span>Battery</span></a></h3><p>Uses 1 x AAA battery (rechargeable recommended)</p><p>This device <em>sleeps</em> to preserve energy when it&#39;s not actively used.<br> When sleeping, it will not respond to any Z2M commands.<br> Press its buttons to keep it awake and allow interactions.</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p><strong>Press the pair button 4 times.</strong> A red light should flash and pulsate until it connects.<br> The button is found under the back cover, next to the battery.</p><h3 id=\"binding\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#binding\"><span>Binding</span></a></h3>", 9)),
		createBaseVNode("p", null, [
			_cache[9] || (_cache[9] = createTextVNode("This remote can ", -1)),
			_cache[10] || (_cache[10] = createBaseVNode("strong", null, "not", -1)),
			_cache[11] || (_cache[11] = createTextVNode(" directly control individual devices or groups through ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/binding.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("binding", -1)])]),
				_: 1
			}),
			_cache[12] || (_cache[12] = createTextVNode(" or ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/touchlink.html" }, {
				default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("Touchlink", -1)])]),
				_: 1
			}),
			_cache[13] || (_cache[13] = createTextVNode(".", -1))
		]),
		_cache[20] || (_cache[20] = createBaseVNode("h2", {
			id: "ota-updates",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ota-updates"
		}, [createBaseVNode("span", null, "OTA updates")])], -1)),
		createBaseVNode("p", null, [
			_cache[15] || (_cache[15] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[14] || (_cache[14] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[16] || (_cache[16] = createTextVNode(".", -1))
		]),
		_cache[21] || (_cache[21] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[17] || (_cache[17] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[22] || (_cache[22] = createStaticVNode("<ul><li><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>30</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"identify-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#identify-enum\"><span>Identify (enum)</span></a></h3><p>Initiate device identification. This device is asleep by default.You may need to wake it up first before sending the identify command.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>identify</code>.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"voltage-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#voltage-numeric\"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>1_initial_press</code>, <code>1_long_press</code>, <code>1_short_release</code>, <code>1_long_release</code>, <code>1_double_press</code>, <code>2_initial_press</code>, <code>2_long_press</code>, <code>2_short_release</code>, <code>2_long_release</code>, <code>2_double_press</code>.</p>", 10))
	]);
}
var E2213_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, E2213_default as default };
