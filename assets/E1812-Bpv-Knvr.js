import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/E1812.md
var _pageData = JSON.parse("{\"path\":\"/devices/E1812.html\",\"title\":\"IKEA E1812 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"IKEA E1812 control via MQTT\",\"description\":\"Integrate your IKEA E1812 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2020-11-09T17:45:58.000Z\"},\"filePathRelative\":\"devices/E1812.md\"}");
var _sfc_main = { name: "E1812.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[25] || (_cache[25] = createBaseVNode("h1", {
			id: "ikea-e1812",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ikea-e1812"
		}, [createBaseVNode("span", null, "IKEA E1812")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "E1812")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=IKEA" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("IKEA", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "TRADFRI shortcut button")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "identify, battery, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/E1812.png",
				alt: "IKEA E1812"
			})])], -1))
		])]),
		_cache[26] || (_cache[26] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		_cache[27] || (_cache[27] = createBaseVNode("h3", {
			id: "related",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#related"
		}, [createBaseVNode("span", null, "Related")])], -1)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/devices/E1743.html" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("TRADFRI on/off switch", -1)])]),
			_: 1
		})]), createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/devices/E1766.html" }, {
			default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("TRADFRI open/close remote", -1)])]),
			_: 1
		})])]),
		_cache[28] || (_cache[28] = createStaticVNode("<h3 id=\"information\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#information\"><span>Information</span></a></h3><ul><li><a href=\"https://apps.fcc.gov/oetcf/eas/reports/ViewExhibitReport.cfm?mode=Exhibits&amp;RequestTimeout=500&amp;calledFromFrame=N&amp;application_id=Q%2BnHTQJlVloy5C%2FXAhtK0A%3D%3D&amp;fcc_id=FHO-E1812\" target=\"_blank\" rel=\"noopener noreferrer\">FCC - emissions, teardown, user manual</a></li><li><a href=\"https://csa-iot.org/csa_product/tradfri-shortcut-button/\" target=\"_blank\" rel=\"noopener noreferrer\">CSA IoT - Zigbee compliance</a></li><li>Based on Silabs chipset</li></ul><h3 id=\"battery\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery\"><span>Battery</span></a></h3><p>Uses 1 x CR2032 battery (3V)</p><p>This device <em>sleeps</em> to preserve energy when it&#39;s not actively used.<br> When sleeping, it will not respond to any Z2M commands.<br><strong>Press its buttons repeatedly to keep it awake and allow interactions,</strong> for example when attempting to bind.</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p><strong>Unscrew and remove the bottom cover</strong> to reveal the pair button.<br><strong>Press the pair button 4 times</strong> to factory reset and start pairing.<br> A red light should flash and pulsate until it connects.</p><h3 id=\"touchlink\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#touchlink\"><span>Touchlink</span></a></h3>", 8)),
		createBaseVNode("p", null, [
			_cache[10] || (_cache[10] = createTextVNode("This buttons uses ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/touchlink.html" }, {
				default: withCtx(() => [..._cache[9] || (_cache[9] = [createTextVNode("Touchlink", -1)])]),
				_: 1
			}),
			_cache[11] || (_cache[11] = createTextVNode(" to ", -1)),
			_cache[12] || (_cache[12] = createBaseVNode("strong", null, "set-up", -1)),
			_cache[13] || (_cache[13] = createTextVNode(" binding without a Zigbee network.", -1)),
			_cache[14] || (_cache[14] = createBaseVNode("br", null, null, -1)),
			_cache[15] || (_cache[15] = createTextVNode(" To activate, bring it close to the device you want to control, and ", -1)),
			_cache[16] || (_cache[16] = createBaseVNode("strong", null, "hold the pair button for 10s.", -1)),
			_cache[17] || (_cache[17] = createBaseVNode("br", null, null, -1)),
			_cache[18] || (_cache[18] = createTextVNode(" Unfortunately, this is barely useful on the initial firmware, because it's missing the ", -1)),
			_cache[19] || (_cache[19] = createBaseVNode("em", null, "Off", -1)),
			_cache[20] || (_cache[20] = createTextVNode(" command. Also the firmware update removes this possibility entirely.", -1))
		]),
		_cache[29] || (_cache[29] = createStaticVNode("<h3 id=\"binding\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#binding\"><span>Binding</span></a></h3><p>When connected to a Zigbee network, <strong>this remote can directly control devices or groups</strong>.</p><p><strong>On initial firmware,</strong> it can be bound to multiple devices and multiple groups.<br> Bind a single cluster, e.g. <em>genOnOff</em> to enable all commands. Binding multiple clusters will duplicate (spam) the commands!</p><p><strong>On latest firmware,</strong> it can be bound to multiple devices <em>or</em> one group.<br> To control devices, bind all clusters you need (<em>genOnOff</em> and <em>genLevelCtrl</em>).<br> To control a group, bind only <em>genBasic</em>, and unbind everything else, including the coordinator.</p><p>Note that, when bound to a device, the remote may spam the network and drain the battery if that device goes offline. Bind to group to avoid this.</p><h3 id=\"action-mapping\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-mapping\"><span>Action mapping</span></a></h3><p><strong>Latest firmware enables double-click = off.</strong><br> To accommodate this, a noticeable 0.6s delay is added to single-clicks.</p><table><thead><tr><th style=\"text-align:right;\">Press</th><th style=\"text-align:right;\">Z2M\xA0Action</th><th style=\"text-align:right;\">Bind\xA0Action</th></tr></thead><tbody><tr><td style=\"text-align:right;\">Single</td><td style=\"text-align:right;\"><code>on</code></td><td style=\"text-align:right;\"><em>On</em></td></tr><tr><td style=\"text-align:right;\">Double</td><td style=\"text-align:right;\"><code>off</code></td><td style=\"text-align:right;\"><em>Off</em></td></tr><tr><td style=\"text-align:right;\">Triple+</td><td style=\"text-align:right;\">Multiple <code>off</code>\xA0and\xA0<code>on</code></td><td style=\"text-align:right;\">Multiple <em>Off</em>\xA0and\xA0<em>On</em></td></tr><tr><td style=\"text-align:right;\">Long</td><td style=\"text-align:right;\"><code>brightness_move_up</code> +\xA0<code>brightness_stop</code></td><td style=\"text-align:right;\"><em>MoveWithOnOff\xA0(Up, 83 units/s)</em> +\xA0<em>StopWithOnOff</em></td></tr></tbody></table><p><strong>Older firmware is missing multi-clicks.</strong><br> It&#39;s not even possible to configure them in automations, because this version has a very long 0.4s debounce time.<br> The benefit is that single-clicks are sent immediately.</p><table><thead><tr><th style=\"text-align:right;\">Press</th><th style=\"text-align:right;\">Z2M\xA0Action</th><th style=\"text-align:right;\">Bind\xA0Action</th></tr></thead><tbody><tr><td style=\"text-align:right;\">Single</td><td style=\"text-align:right;\"><code>on</code></td><td style=\"text-align:right;\"><em>On</em></td></tr><tr><td style=\"text-align:right;\">Long</td><td style=\"text-align:right;\"><code>brightness_move_up</code> +\xA0<code>brightness_stop</code></td><td style=\"text-align:right;\"><em>MoveWithOnOff\xA0(Up, 83 units/s)</em> +\xA0<em>StopWithOnOff</em></td></tr></tbody></table><p>Button must be held for ~0.7s until long-press gets detected, on any version.</p><h3 id=\"firmware\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#firmware\"><span>Firmware</span></a></h3><ul><li>v2.3.015, date <code>20190715</code>: initial version, not available as a downgrade</li><li>v24.4.6, date <code>20230308</code>: the latest and only update available <ul><li>adds double-clicks and removes <a href=\"#touchlink\">Touchlink</a></li></ul></li></ul><h3 id=\"troubleshooting\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#troubleshooting\"><span>Troubleshooting</span></a></h3><ol><li>Difficulties pairing, action null <ul><li>Update coordinator</li><li>Power-off &#39;bad&#39; routers (e.g. Telink Tuya, AwoX) and pair again</li><li>Pair directly through the coordinator</li><li>Add USB 2.0 extension to dongle coordinators</li></ul></li><li>Battery null after pairing <ul><li>Power-cycle the remote and refresh percentage</li></ul></li><li>Battery drains too quick, action null, remote offline <ul><li>Reset or unbind it from offline devices</li></ul></li></ol><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 16)),
		createBaseVNode("p", null, [
			_cache[22] || (_cache[22] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[21] || (_cache[21] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[23] || (_cache[23] = createTextVNode(".", -1))
		]),
		_cache[30] || (_cache[30] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[24] || (_cache[24] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[31] || (_cache[31] = createStaticVNode("<ul><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>30</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</p></li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"identify-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#identify-enum\"><span>Identify (enum)</span></a></h3><p>Initiate device identification. This device is asleep by default.You may need to wake it up first before sending the identify command.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>identify</code>.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_move_up</code>, <code>brightness_stop</code>.</p>", 9))
	]);
}
var E1812_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, E1812_default as default };
