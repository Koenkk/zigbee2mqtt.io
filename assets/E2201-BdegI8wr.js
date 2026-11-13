import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/E2201.md
var _pageData = JSON.parse("{\"path\":\"/devices/E2201.html\",\"title\":\"IKEA E2201 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"IKEA E2201 control via MQTT\",\"description\":\"Integrate your IKEA E2201 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2023-08-01T15:09:09.000Z\"},\"filePathRelative\":\"devices/E2201.md\"}");
var _sfc_main = { name: "E2201.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[19] || (_cache[19] = createBaseVNode("h1", {
			id: "ikea-e2201",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ikea-e2201"
		}, [createBaseVNode("span", null, "IKEA E2201")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "E2201")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=IKEA" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("IKEA", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "RODRET wireless dimmer/power switch")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "identify, battery, voltage, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/E2201.png",
				alt: "IKEA E2201"
			})])], -1))
		])]),
		_cache[20] || (_cache[20] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"battery\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery\"><span>Battery</span></a></h3><p>Uses 1 x AAA battery (rechargeable recommended)</p><p>This device <em>sleeps</em> to preserve energy when it&#39;s not actively used.<br> When sleeping, it will not respond to any Z2M commands.<br> Press its buttons to keep it awake and allow interactions.</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p><strong>Press the pair button 4 times.</strong> A red light should flash and pulsate until it connects.<br> The button is found under the back cover, next to the battery.</p><p>If that doesn&#39;t work , or if it says that the device is not supported, try pressing the on button 6 times before pressing the pair button 4 times.</p><h3 id=\"binding\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#binding\"><span>Binding</span></a></h3><p>This remote can directly control individual devices and/or groups (v1.0.57).</p>", 9)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [
			_cache[8] || (_cache[8] = createTextVNode("Pairing inside the network is possible by ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/binding.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("binding", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(": ", -1)),
			_cache[10] || (_cache[10] = createBaseVNode("ul", null, [createBaseVNode("li", null, [createBaseVNode("code", null, "OnOff"), createTextVNode(" cluster for toggling")]), createBaseVNode("li", null, [createBaseVNode("code", null, "LevelCtrl"), createTextVNode(" cluster for dimming")])], -1))
		]), createBaseVNode("li", null, [
			_cache[12] || (_cache[12] = createTextVNode("Pairing outside the network is possible through ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/touchlink.html" }, {
				default: withCtx(() => [..._cache[11] || (_cache[11] = [createTextVNode("Touchlink", -1)])]),
				_: 1
			}),
			_cache[13] || (_cache[13] = createTextVNode(". ", -1)),
			_cache[14] || (_cache[14] = createBaseVNode("ul", null, [createBaseVNode("li", null, "Keep it very close to the target device and activate by holding the remote's pair button (for ~10s). Release when the light stops flashing."), createBaseVNode("li", null, [createBaseVNode("em", null, "Clone"), createTextVNode(" the paired remote by keeping it close to another one, and holding the pair button on both.")])], -1))
		])]),
		_cache[21] || (_cache[21] = createStaticVNode("<h3 id=\"action-mapping\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-mapping\"><span>Action mapping</span></a></h3><table><thead><tr><th style=\"text-align:right;\">Real Action</th><th style=\"text-align:right;\">Z2M Action</th><th style=\"text-align:right;\">Bind Action</th></tr></thead><tbody><tr><td style=\"text-align:right;\">Single press ON</td><td style=\"text-align:right;\"><code>on</code></td><td style=\"text-align:right;\"><em>On</em></td></tr><tr><td style=\"text-align:right;\">Double press ON</td><td style=\"text-align:right;\">2 x <code>on</code></td><td style=\"text-align:right;\">2 x <em>On</em></td></tr><tr><td style=\"text-align:right;\">Long press ON, <em>(hold + release)</em></td><td style=\"text-align:right;\"><code>brightness_move_up</code> + <code>brightness_stop</code></td><td style=\"text-align:right;\"><em>MoveWithOnOff (Up, 83)</em> + <em>StopWithOnOff</em></td></tr><tr><td style=\"text-align:right;\">Single press OFF</td><td style=\"text-align:right;\"><code>off</code></td><td style=\"text-align:right;\"><em>Off</em></td></tr><tr><td style=\"text-align:right;\">Double press OFF</td><td style=\"text-align:right;\">2 x <code>off</code></td><td style=\"text-align:right;\">2 x <em>Off</em></td></tr><tr><td style=\"text-align:right;\">Long press OFF, <em>(hold + release)</em></td><td style=\"text-align:right;\"><code>brightness_move_down</code> + <code>brightness_stop</code></td><td style=\"text-align:right;\"><em>Move (Down, 83)</em> + <em>StopWithOnOff</em></td></tr></tbody></table><h3 id=\"troubleshooting-device-didn-t-respond-to-ota-request\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#troubleshooting-device-didn-t-respond-to-ota-request\"><span>Troubleshooting: Device didn&#39;t respond to OTA request</span></a></h3><p>To resolve the <code>Device didn&#39;t respond to OTA request</code> error, you can try to push a button on it, shortly before you start the update, to wake up the remote. Sometimes it also helps keeping the device awake, by pushing a button repeatedly until you read the first &quot;Updating... 0.00%&quot; message (about 5s).</p><p>If your main Zigbee coordinator is a SONOFF Zigbee 3.0 USB Dongle Plus, you may experience issues updating the firmware. To work around this, unpair the switch (hit delete, then quickly follow the pairing instructions), re-pair through a router, then re-attempt the OTA update. See <a href=\"https://github.com/Koenkk/zigbee2mqtt/issues/11473\" target=\"_blank\" rel=\"noopener noreferrer\">this issue</a> for more details.</p><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 6)),
		createBaseVNode("p", null, [
			_cache[16] || (_cache[16] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[15] || (_cache[15] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[17] || (_cache[17] = createTextVNode(".", -1))
		]),
		_cache[22] || (_cache[22] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[18] || (_cache[18] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[23] || (_cache[23] = createStaticVNode("<ul><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>30</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</p></li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"identify-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#identify-enum\"><span>Identify (enum)</span></a></h3><p>Initiate device identification. This device is asleep by default.You may need to wake it up first before sending the identify command.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>identify</code>.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"voltage-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#voltage-numeric\"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>.</p>", 11))
	]);
}
var E2201_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, E2201_default as default };
