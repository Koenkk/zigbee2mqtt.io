import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/GL-C-009P.md
var _pageData = JSON.parse("{\"path\":\"/devices/GL-C-009P.html\",\"title\":\"Gledopto GL-C-009P control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Gledopto GL-C-009P control via MQTT\",\"description\":\"Integrate your Gledopto GL-C-009P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2021-03-30T20:29:35.000Z\"},\"filePathRelative\":\"devices/GL-C-009P.md\"}");
var _sfc_main = { name: "GL-C-009P.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[49] || (_cache[49] = createBaseVNode("h1", {
			id: "gledopto-gl-c-009p",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#gledopto-gl-c-009p"
		}, [createBaseVNode("span", null, "Gledopto GL-C-009P")])], -1)),
		createBaseVNode("table", null, [_cache[7] || (_cache[7] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "GL-C-009P")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Gledopto" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Gledopto", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee LED Controller W (pro)")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "light (state, brightness), effect, power_on_behavior, identify")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/GL-C-009P.png",
				alt: "Gledopto GL-C-009P"
			})])], -1)),
			_cache[6] || (_cache[6] = createBaseVNode("tr", null, [createBaseVNode("td", null, "White-label"), createBaseVNode("td", null, "Gledopto GL-C-009P_mini")], -1))
		])]),
		_cache[50] || (_cache[50] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><ol><li>Switch on your device.</li><li>Now switch off and on within 2 seconds.</li><li>Repeat off/on four times.</li><li>Reset is done when the device is switched on in the fifth time and the light stays on after blinking 4 times</li></ol><h2 id=\"multi-mode-5-in-1-devices\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#multi-mode-5-in-1-devices\"><span>Multi-mode 5-in-1 devices</span></a></h2><p>Gledopto produces devices that allow you to select one of up to 5 different LED Controller types with each mode displaying a different [Indicator Light] <strong>color</strong>.</p>", 5)),
		createBaseVNode("ul", null, [
			createBaseVNode("li", null, [
				_cache[9] || (_cache[9] = createBaseVNode("code", null, "RGB+CCT", -1)),
				_cache[10] || (_cache[10] = createTextVNode()),
				createVNode(_component_RouteLink, { to: "/devices/GL-C-008P.html" }, {
					default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("GL-C-008P", -1)])]),
					_: 1
				}),
				_cache[11] || (_cache[11] = createTextVNode(" [White]", -1))
			]),
			createBaseVNode("li", null, [
				_cache[13] || (_cache[13] = createBaseVNode("code", null, "RGBW", -1)),
				_cache[14] || (_cache[14] = createTextVNode()),
				createVNode(_component_RouteLink, { to: "/devices/GL-C-007P.html" }, {
					default: withCtx(() => [..._cache[12] || (_cache[12] = [createTextVNode("GL-C-007P", -1)])]),
					_: 1
				}),
				_cache[15] || (_cache[15] = createTextVNode(" [Yellow]", -1))
			]),
			createBaseVNode("li", null, [
				_cache[17] || (_cache[17] = createBaseVNode("code", null, "RGB", -1)),
				_cache[18] || (_cache[18] = createTextVNode()),
				createVNode(_component_RouteLink, { to: "/devices/GL-C-003P.html" }, {
					default: withCtx(() => [..._cache[16] || (_cache[16] = [createTextVNode("GL-C-003P", -1)])]),
					_: 1
				}),
				_cache[19] || (_cache[19] = createTextVNode(" [Blue]", -1))
			]),
			createBaseVNode("li", null, [
				_cache[21] || (_cache[21] = createBaseVNode("code", null, "CCT", -1)),
				_cache[22] || (_cache[22] = createTextVNode()),
				createVNode(_component_RouteLink, { to: "/devices/GL-C-006P.html" }, {
					default: withCtx(() => [..._cache[20] || (_cache[20] = [createTextVNode("GL-C-006P", -1)])]),
					_: 1
				}),
				_cache[23] || (_cache[23] = createTextVNode(" [Green]", -1))
			]),
			createBaseVNode("li", null, [
				_cache[25] || (_cache[25] = createBaseVNode("code", null, "Dimmer", -1)),
				_cache[26] || (_cache[26] = createTextVNode()),
				createVNode(_component_RouteLink, { to: "/devices/GL-C-009P.html" }, {
					default: withCtx(() => [..._cache[24] || (_cache[24] = [createTextVNode("GL-C-009P", -1)])]),
					_: 1
				}),
				_cache[27] || (_cache[27] = createTextVNode(" [Red]", -1))
			])
		]),
		_cache[51] || (_cache[51] = createStaticVNode("<p>This <code>GL-C-009P</code> mode is available as a <code>modelId</code> in the following models:</p><ul><li><strong>GL-C-001P</strong> - Zigbee Pro 5 in 1 Smart LED Controller</li><li><strong>GL-C-002P</strong> - Zigbee Pro 5 in 1 LED Controller Mini Ultra Thin</li><li><strong>GL-C-011P</strong> - Zigbee Pro 5 in 1 Smart LED Controller DIN Rail</li><li><strong>GL-C-201P</strong> - Zigbee Pro+ 5 in 1 Smart LED Controller</li><li><strong>GL-C-301P</strong> - Zigbee Pro+ 5 in 1 Smart LED Controller Ultra-Mini</li></ul><p>You can switch to this <code>GL-C-009P</code> mode by short pressing the <code>Opt</code> button on the device until the Indicator Light is <code>Red</code>.</p><p>To pair with, or change modes on, Zigbee2MQTT, press the <code>Reset</code> button 4 times</p><h2 id=\"dual-mode-2-in-1-devices\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#dual-mode-2-in-1-devices\"><span>Dual-mode 2-in-1 devices</span></a></h2><p>Gledopto produces devices that allow you to select one of up to 2 different LED Controller types with each mode displaying a different [Indicator Light] <strong>status</strong>.</p>", 6)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [
			_cache[29] || (_cache[29] = createBaseVNode("code", null, "CCT", -1)),
			_cache[30] || (_cache[30] = createTextVNode()),
			createVNode(_component_RouteLink, { to: "/devices/GL-C-006P.html" }, {
				default: withCtx(() => [..._cache[28] || (_cache[28] = [createTextVNode("GL-C-006P", -1)])]),
				_: 1
			}),
			_cache[31] || (_cache[31] = createTextVNode(" [Indicator Light Off]", -1))
		]), createBaseVNode("li", null, [
			_cache[33] || (_cache[33] = createBaseVNode("code", null, "Dimmer", -1)),
			_cache[34] || (_cache[34] = createTextVNode()),
			createVNode(_component_RouteLink, { to: "/devices/GL-C-009P.html" }, {
				default: withCtx(() => [..._cache[32] || (_cache[32] = [createTextVNode("GL-C-009P", -1)])]),
				_: 1
			}),
			_cache[35] || (_cache[35] = createTextVNode(" [Indicator Light On]", -1))
		])]),
		_cache[52] || (_cache[52] = createStaticVNode("<p>This <code>GL-C-009P</code> mode is available as a <code>modelId</code> in the following models:</p><ul><li><strong>GL-C-003P</strong>† - Zigbee Pro 3-wire/2-wire 2 in 1 CCT/DIM LED Controller</li><li><strong>GL-C-203P</strong> - Zigbee Pro+ 3-wire/2-wire 2 in 1 CCT/DIM LED Controller</li></ul><p>You can switch to this <code>GL-C-009P</code> mode by short pressing the <code>Reset</code> button on the device until the Indicator Light is <code>On</code>.</p><p>To pair with, or change modes on, Zigbee2MQTT, long press the <code>Reset</code> button for more that 2 seconds.</p>", 4)),
		createBaseVNode("p", null, [
			_cache[37] || (_cache[37] = createTextVNode("† Note that this ", -1)),
			_cache[38] || (_cache[38] = createBaseVNode("strong", null, "GL-C-003P", -1)),
			_cache[39] || (_cache[39] = createTextVNode(" Model is not an RGB Controller and not capable of being selected as an ", -1)),
			_cache[40] || (_cache[40] = createBaseVNode("code", null, "RGB", -1)),
			_cache[41] || (_cache[41] = createTextVNode(" controller or sending the ", -1)),
			_cache[42] || (_cache[42] = createBaseVNode("code", null, "GL-C-003P", -1)),
			_cache[43] || (_cache[43] = createTextVNode(" ModelId to Zigbee2MQTT. See ", -1)),
			createVNode(_component_RouteLink, { to: "/devices/GL-C-003P.html" }, {
				default: withCtx(() => [..._cache[36] || (_cache[36] = [createTextVNode("GL-C-003P", -1)])]),
				_: 1
			}),
			_cache[44] || (_cache[44] = createTextVNode(" for devices that can do this.", -1))
		]),
		_cache[53] || (_cache[53] = createBaseVNode("h2", {
			id: "ota-updates",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ota-updates"
		}, [createBaseVNode("span", null, "OTA updates")])], -1)),
		createBaseVNode("p", null, [
			_cache[46] || (_cache[46] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[45] || (_cache[45] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[47] || (_cache[47] = createTextVNode(".", -1))
		]),
		_cache[54] || (_cache[54] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[48] || (_cache[48] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[55] || (_cache[55] = createStaticVNode("<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>30</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"light\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#light\"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><p><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p></li><li><p><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</p></li></ul><h4 id=\"on-with-timed-off\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#on-with-timed-off\"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands. Support depends on the light firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h4 id=\"transition\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#transition\"><span>Transition</span></a></h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id=\"moving-stepping\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#moving-stepping\"><span>Moving/stepping</span></a></h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class=\"language-javascript line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"js\"><pre><code class=\"language-javascript\"><span class=\"line\"><span class=\"token punctuation\">{</span></span>\n<span class=\"line\">  <span class=\"token string-property property\">&quot;brightness_move&quot;</span><span class=\"token operator\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">40</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// Starts moving brightness down at 40 units per second</span></span>\n<span class=\"line\">  <span class=\"token string-property property\">&quot;brightness_move&quot;</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// Stop moving brightness</span></span>\n<span class=\"line\">  <span class=\"token string-property property\">&quot;brightness_step&quot;</span><span class=\"token operator\">:</span> <span class=\"token number\">40</span> <span class=\"token comment\">// Increases brightness by 40</span></span>\n<span class=\"line\"><span class=\"token punctuation\">}</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h3 id=\"effect-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#effect-enum\"><span>Effect (enum)</span></a></h3><p>Triggers an effect on the light (e.g. make light blink for a few seconds). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;effect&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>blink</code>, <code>breathe</code>, <code>okay</code>, <code>channel_change</code>, <code>finish_effect</code>, <code>stop_effect</code>.</p><h3 id=\"power-on-behavior-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#power-on-behavior-enum\"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id=\"identify-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#identify-enum\"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>identify</code>.</p>", 21))
	]);
}
var GL_C_009P_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, GL_C_009P_default as default };
