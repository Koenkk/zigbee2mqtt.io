import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/GL-SD-001.md
var _pageData = JSON.parse("{\"path\":\"/devices/GL-SD-001.html\",\"title\":\"Gledopto GL-SD-001 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Gledopto GL-SD-001 control via MQTT\",\"description\":\"Integrate your Gledopto GL-SD-001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2021-08-01T20:41:55.000Z\"},\"filePathRelative\":\"devices/GL-SD-001.md\"}");
var _sfc_main = { name: "GL-SD-001.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "gledopto-gl-sd-001",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#gledopto-gl-sd-001"
		}, [createBaseVNode("span", null, "Gledopto GL-SD-001")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "GL-SD-001")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Gledopto" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Gledopto", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee triac AC dimmer")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "light (state, brightness), effect")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/GL-SD-001.png",
				alt: "Gledopto GL-SD-001"
			})])], -1))
		])]),
		_cache[12] || (_cache[12] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><ol><li>Switch on your device.</li><li>Now switch off and on within 2 seconds.</li><li>Repeat off/on four times.</li><li>Reset is done when the device is switched on in the fifth time and the light stays on after blinking 4 times</li></ol><h3 id=\"binding\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#binding\"><span>Binding</span></a></h3>", 4)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("The device allows zigbee ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/binding.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("binding", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(".", -1))
		]),
		_cache[13] || (_cache[13] = createBaseVNode("h2", {
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
		_cache[14] || (_cache[14] = createStaticVNode("<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"light\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#light\"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><p><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p></li><li><p><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</p></li></ul><h4 id=\"transition\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#transition\"><span>Transition</span></a></h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id=\"moving-stepping\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#moving-stepping\"><span>Moving/stepping</span></a></h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class=\"language-javascript line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"js\"><pre><code class=\"language-javascript\"><span class=\"line\"><span class=\"token punctuation\">{</span></span>\n<span class=\"line\">  <span class=\"token string-property property\">&quot;brightness_move&quot;</span><span class=\"token operator\">:</span> <span class=\"token operator\">-</span><span class=\"token number\">40</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// Starts moving brightness down at 40 units per second</span></span>\n<span class=\"line\">  <span class=\"token string-property property\">&quot;brightness_move&quot;</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// Stop moving brightness</span></span>\n<span class=\"line\">  <span class=\"token string-property property\">&quot;brightness_step&quot;</span><span class=\"token operator\">:</span> <span class=\"token number\">40</span> <span class=\"token comment\">// Increases brightness by 40</span></span>\n<span class=\"line\"><span class=\"token punctuation\">}</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h3 id=\"effect-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#effect-enum\"><span>Effect (enum)</span></a></h3><p>Triggers an effect on the light (e.g. make light blink for a few seconds). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;effect&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>blink</code>, <code>breathe</code>, <code>okay</code>, <code>channel_change</code>, <code>finish_effect</code>, <code>stop_effect</code>.</p>", 15))
	]);
}
var GL_SD_001_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, GL_SD_001_default as default };
