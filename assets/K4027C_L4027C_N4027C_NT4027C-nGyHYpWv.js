import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/K4027C_L4027C_N4027C_NT4027C.md
var _pageData = JSON.parse("{\"path\":\"/devices/K4027C_L4027C_N4027C_NT4027C.html\",\"title\":\"BTicino K4027C/L4027C/N4027C/NT4027C control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"BTicino K4027C/L4027C/N4027C/NT4027C control via MQTT\",\"description\":\"Integrate your BTicino K4027C/L4027C/N4027C/NT4027C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2021-02-28T13:58:01.000Z\"},\"filePathRelative\":\"devices/K4027C_L4027C_N4027C_NT4027C.md\"}");
var _sfc_main = { name: "K4027C_L4027C_N4027C_NT4027C.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "bticino-k4027c-l4027c-n4027c-nt4027c",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#bticino-k4027c-l4027c-n4027c-nt4027c"
		}, [createBaseVNode("span", null, "BTicino K4027C/L4027C/N4027C/NT4027C")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "K4027C/L4027C/N4027C/NT4027C")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=BTicino" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("BTicino", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Shutter SW with level control")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "cover (state, position), action, moving, identify, led_in_dark, led_if_on, calibration_mode")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/K4027C-L4027C-N4027C-NT4027C.png",
				alt: "BTicino K4027C/L4027C/N4027C/NT4027C"
			})])], -1))
		])]),
		_cache[12] || (_cache[12] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		_cache[13] || (_cache[13] = createBaseVNode("p", null, "You can calibrate your device (to enable position support) by closing the shutter (or opening it if your cover position is inverted) and pressing both the up and down buttons for about 5 seconds until you see a blinking yellow light. The shutter will begin calibrating itself and will open and close a few times (this process takes a few minutes to complete).", -1)),
		_cache[14] || (_cache[14] = createBaseVNode("h2", {
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
		_cache[15] || (_cache[15] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[16] || (_cache[16] = createStaticVNode("<ul><li><code>identity_effect</code>: Defines the identification effect to simplify the device identification. Example:</li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">identity_effect</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">effect</span><span class=\"token punctuation\">:</span> blink 3 <span class=\"token comment\"># allowed: &#39;blink 3&#39;, &#39;fixed&#39;, &#39;blink green&#39;, &#39;blink blue&#39;</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">color</span><span class=\"token punctuation\">:</span> red <span class=\"token comment\"># allowed: &#39;default&#39;, &#39;red&#39;, &#39;green&#39;, &#39;blue&#39;, &#39;lightblue&#39;, &#39;yellow&#39;, &#39;pink&#39;, &#39;white&#39;</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><ul><li><code>invert_cover</code>: Inverts the reported cover position and the state derived from it, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"cover\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cover\"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>opening</code>, <code>closing</code>, <code>stopped</code>.</p><h3 id=\"moving-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#moving-binary\"><span>Moving (binary)</span></a></h3><p>Indicates if the cover is currently moving. Value can be found in the published state on the <code>moving</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;moving&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> moving is ON, if <code>false</code> OFF.</p><h3 id=\"identify-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#identify-enum\"><span>Identify (enum)</span></a></h3><p>Blinks the built-in LED to make it easier to identify the device. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>identify</code>.</p><h3 id=\"led-in-dark-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#led-in-dark-binary\"><span>Led in dark (binary)</span></a></h3><p>Enables the built-in LED allowing to see the switch in the dark. Value can be found in the published state on the <code>led_in_dark</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_in_dark&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_in_dark&quot;: &quot;VALUE&quot;}</code>. If value equals <code>ON</code> led in dark is ON, if <code>OFF</code> OFF.</p><h3 id=\"led-if-on-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#led-if-on-binary\"><span>Led if on (binary)</span></a></h3><p>Enables the LED on activity. Value can be found in the published state on the <code>led_if_on</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_if_on&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_if_on&quot;: &quot;VALUE&quot;}</code>. If value equals <code>ON</code> led if on is ON, if <code>OFF</code> OFF.</p><h3 id=\"calibration-mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#calibration-mode-enum\"><span>Calibration mode (enum)</span></a></h3><p>Defines the calibration mode of the switch. (Caution: Changing modes requires a recalibration of the shutter switch!). Value can be found in the published state on the <code>calibration_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_mode&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>classic_nllv</code>, <code>specific_nllv</code>, <code>up_down_stop</code>, <code>temporal</code>, <code>venetian_bso</code>.</p>", 18))
	]);
}
var K4027C_L4027C_N4027C_NT4027C_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, K4027C_L4027C_N4027C_NT4027C_default as default };
