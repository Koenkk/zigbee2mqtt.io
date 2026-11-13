import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/TS011F_plug_1.md
var _pageData = JSON.parse("{\"path\":\"/devices/TS011F_plug_1.html\",\"title\":\"Tuya TS011F_plug_1 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Tuya TS011F_plug_1 control via MQTT\",\"description\":\"Integrate your Tuya TS011F_plug_1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2021-10-30T12:58:50.000Z\"},\"filePathRelative\":\"devices/TS011F_plug_1.md\"}");
var _sfc_main = { name: "TS011F_plug_1.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[26] || (_cache[26] = createBaseVNode("h1", {
			id: "tuya-ts011f-plug-1",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#tuya-ts011f-plug-1"
		}, [createBaseVNode("span", null, "Tuya TS011F_plug_1")])], -1)),
		createBaseVNode("table", null, [_cache[7] || (_cache[7] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "TS011F_plug_1")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Tuya" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Tuya", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Smart plug (with power monitoring)")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "switch (state), countdown, power_outage_memory, switch_type_button, indicator_mode, power, current, voltage, energy, child_lock, identify")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/TS011F_plug_1.png",
				alt: "Tuya TS011F_plug_1"
			})])], -1)),
			_cache[6] || (_cache[6] = createBaseVNode("tr", null, [createBaseVNode("td", null, "White-label"), createBaseVNode("td", null, "LELLKI TS011F_plug, BlitzWolf BW-SHP15, BlitzWolf BW-SHP13, MatSee Plus PJ-ZSW01, MODEMIX MOD037, MODEMIX MOD048, Coswall CS-AJ-DE2U-ZG-11, Aubess TS011F_plug_1, NEO Coolcam PLUG-001SPB2, Haozee HT-SP-ZB-01")], -1))
		])]),
		_cache[27] || (_cache[27] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		_cache[28] || (_cache[28] = createBaseVNode("h3", {
			id: "issues-with-device-turning-off",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#issues-with-device-turning-off"
		}, [createBaseVNode("span", null, "Issues with device turning off")])], -1)),
		createBaseVNode("p", null, [
			_cache[9] || (_cache[9] = createBaseVNode("a", {
				href: "https://github.com/Koenkk/zigbee2mqtt/issues/11648",
				target: "_blank",
				rel: "noopener noreferrer"
			}, "It's been reported by several people that this plug turns off randomly", -1)),
			_cache[10] || (_cache[10] = createTextVNode(".", -1)),
			_cache[11] || (_cache[11] = createBaseVNode("br", null, null, -1)),
			_cache[12] || (_cache[12] = createTextVNode(" If you're affected by this, try if it can be solved by ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("installing an OTA update", -1)])]),
				_: 1
			}),
			_cache[13] || (_cache[13] = createTextVNode(".", -1))
		]),
		_cache[29] || (_cache[29] = createBaseVNode("h3", {
			id: "broken-attribute-reporting-functionality",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#broken-attribute-reporting-functionality"
		}, [createBaseVNode("span", null, "Broken attribute reporting functionality")])], -1)),
		_cache[30] || (_cache[30] = createBaseVNode("p", null, [
			createTextVNode("Starting with firmware version 1.0.5 (which comes pre-flashed on plugs produced since Q4 2021) core functionality on this plug is broken. TuYa has disabled the automatic reporting of power, voltage and current values meaning they need to be polled instead. The poll interval can be controlled through the "),
			createBaseVNode("code", null, "measurement_poll_interval"),
			createTextVNode(" option.")
		], -1)),
		createBaseVNode("p", null, [
			_cache[15] || (_cache[15] = createTextVNode("If your plug is affected, it will be detected as ", -1)),
			createVNode(_component_RouteLink, { to: "/devices/TS011F_plug_3.html" }, {
				default: withCtx(() => [..._cache[14] || (_cache[14] = [createTextVNode("TS011F_plug_3", -1)])]),
				_: 1
			}),
			_cache[16] || (_cache[16] = createTextVNode(" instead of ", -1)),
			_cache[17] || (_cache[17] = createBaseVNode("code", null, "TS011F_plug_1", -1)),
			_cache[18] || (_cache[18] = createTextVNode(".", -1))
		]),
		_cache[31] || (_cache[31] = createStaticVNode("<h3 id=\"broken-attribute-reporting-functionality-in-devices-sold-as-bw-shp13\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#broken-attribute-reporting-functionality-in-devices-sold-as-bw-shp13\"><span>Broken attribute reporting functionality in devices sold as BW-SHP13</span></a></h3><p>In 2022, BlitzWolf started to sell BW-SHP13 that identify as <code>_TZ3000_amdymr7l</code>. Those devices report power, current and voltage unreliably: Changes in any of those metrics sometimes take a few minutes before being reported and constant loads are reported as 0 for a few minutes just to return to their expected values a few minutes later. There is no known workaround for that behaviour.</p><h3 id=\"reset-energy\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#reset-energy\"><span>Reset energy</span></a></h3><p>To reset <code>Sum of consumed energy</code>, use the Dev console and execute: <code>Endpoint</code>: <code>1</code><code>Cluster</code>: <code>0x00</code> (<code>genBasic</code>) <code>Command</code>: <code>0</code> (<code>resetFactDefault</code>) <code>Payload</code>: (don&#39;t change this)</p><p>Next time the plug gets polled, <code>Sum of consumed energy</code> will start from zero again.</p><h3 id=\"reset-lock\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#reset-lock\"><span>Reset lock</span></a></h3><p>To reset <code>Child Lock</code> without Z2M, quickly press the physical button 4 times</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Pair this device with a long press (5 seconds) on the on/off button. The button will flash blue to indicate it&#39;s in pairing mode. When the blue flashing stops it should be paired and the led will turn solid red. If the led is solid blue, the device is not paired or paring was not successful.</p><h3 id=\"alternative-firmware\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#alternative-firmware\"><span>Alternative firmware</span></a></h3>", 10)),
		createBaseVNode("p", null, [
			_cache[20] || (_cache[20] = createTextVNode("An alternative firmware version can be installed by creating a custom my_index.json file and setting zigbee_ota_override_index_location as described in the ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html#local-ota-index-and-firmware-files" }, {
				default: withCtx(() => [..._cache[19] || (_cache[19] = [createTextVNode("guide", -1)])]),
				_: 1
			}),
			_cache[21] || (_cache[21] = createTextVNode(". This firmware can be used if the plug automatically turns off indeterminably or when the overvoltage protection from later versions is unwanted. To use v1.0.13 use the following json file:", -1))
		]),
		_cache[32] || (_cache[32] = createStaticVNode("<div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">[</span>\n<span class=\"line\">    {</span>\n<span class=\"line\">        &quot;fileVersion&quot;: 77,</span>\n<span class=\"line\">        &quot;fileSize&quot;: 307682,</span>\n<span class=\"line\">        &quot;manufacturerCode&quot;: 4417,</span>\n<span class=\"line\">        &quot;imageType&quot;: 54179,</span>\n<span class=\"line\">        &quot;sha512&quot;: &quot;97ea8413e8ab662f2bebf3b013b3030754cbc2c0744b91b14741fff17a2d8d99e7088aa22a3b6e43b3595ccd65433f96d32516fc057fddcc13a816c921af8c97&quot;,</span>\n<span class=\"line\">        &quot;url&quot;: &quot;https://github.com/Koenkk/zigbee-OTA/raw/master/not-in-manifest-images/Telink/1654157434-oem_zg_tl8258_plug_OTA_1.0.13.bin&quot;</span>\n<span class=\"line\">    }</span>\n<span class=\"line\">]</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 2)),
		createBaseVNode("p", null, [
			_cache[23] || (_cache[23] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[22] || (_cache[22] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[24] || (_cache[24] = createTextVNode(".", -1))
		]),
		_cache[33] || (_cache[33] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[25] || (_cache[25] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[34] || (_cache[34] = createStaticVNode("<ul><li><p><code>time_start</code>: Reply to Tuya-specific time synchronization requests: &quot;1970&quot; - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), &quot;2000&quot; - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), &quot;off&quot; - Don&#39;t reply (use if replying causes too much traffic). Default for this device: &quot;off&quot;. The value must be one of <code>1970</code>, <code>2000</code>, <code>off</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>30</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"switch\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch\"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id=\"countdown-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#countdown-numeric\"><span>Countdown (numeric)</span></a></h3><p>Toggle the device after a set duration (one time action). Value can be found in the published state on the <code>countdown</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown&quot;: VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id=\"power-outage-memory-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#power-outage-memory-enum\"><span>Power outage memory (enum)</span></a></h3><p>Recover state after power outage. Value can be found in the published state on the <code>power_outage_memory</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>restore</code>.</p><h3 id=\"switch-type-button-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-type-button-enum\"><span>Switch type button (enum)</span></a></h3><p>Determines when the button actuates. Value can be found in the published state on the <code>switch_type_button</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>release</code>, <code>press</code>.</p><h3 id=\"indicator-mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#indicator-mode-enum\"><span>Indicator mode (enum)</span></a></h3><p>LED indicator mode. Value can be found in the published state on the <code>indicator_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_mode&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>off</code>, <code>off/on</code>, <code>on/off</code>, <code>on</code>.</p><h3 id=\"power-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#power-numeric\"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id=\"current-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#current-numeric\"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id=\"voltage-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#voltage-numeric\"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id=\"energy-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#energy-numeric\"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id=\"child-lock-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#child-lock-binary\"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;VALUE&quot;}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id=\"identify-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#identify-enum\"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>identify</code>.</p>", 24))
	]);
}
var TS011F_plug_1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, TS011F_plug_1_default as default };
