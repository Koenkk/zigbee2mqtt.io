import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/E1744.md
var _pageData = JSON.parse("{\"path\":\"/devices/E1744.html\",\"title\":\"IKEA E1744 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"IKEA E1744 control via MQTT\",\"description\":\"Integrate your IKEA E1744 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2019-11-09T18:37:38.000Z\"},\"filePathRelative\":\"devices/E1744.md\"}");
var _sfc_main = { name: "E1744.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[24] || (_cache[24] = createBaseVNode("h1", {
			id: "ikea-e1744",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ikea-e1744"
		}, [createBaseVNode("span", null, "IKEA E1744")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "E1744")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=IKEA" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("IKEA", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "SYMFONISK sound remote, gen 1")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "identify, battery, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/E1744.png",
				alt: "IKEA E1744"
			})])], -1))
		])]),
		_cache[25] || (_cache[25] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"information\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#information\"><span>Information</span></a></h3><ul><li><a href=\"https://csa-iot.org/csa_product/symfonisk-sound-controller-3/\" target=\"_blank\" rel=\"noopener noreferrer\">CSA IoT - Zigbee compliance</a></li></ul><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Press the button on the device 4 times (until the red light turns on).</p><h3 id=\"binding\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#binding\"><span>Binding</span></a></h3>", 6)),
		createBaseVNode("p", null, [
			_cache[9] || (_cache[9] = createTextVNode("If you want to ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/binding.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("bind", -1)])]),
				_: 1
			}),
			_cache[10] || (_cache[10] = createTextVNode(" this remote directly to a group or light, bind cluster ", -1)),
			_cache[11] || (_cache[11] = createBaseVNode("code", null, "LevelCtrl", -1)),
			_cache[12] || (_cache[12] = createTextVNode(" only (", -1)),
			_cache[13] || (_cache[13] = createBaseVNode("strong", null, "not", -1)),
			_cache[14] || (_cache[14] = createTextVNode()),
			_cache[15] || (_cache[15] = createBaseVNode("code", null, "LevelCtrl", -1)),
			_cache[16] || (_cache[16] = createTextVNode(" and ", -1)),
			_cache[17] || (_cache[17] = createBaseVNode("code", null, "OnOff", -1)),
			_cache[18] || (_cache[18] = createTextVNode("). If both clusters are bound, a click on the remote toggles the bound group or light twice, thus neither turning it on or off. Cluster-specific binding is most easily done in the ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/frontend.html" }, {
				default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("frontend", -1)])]),
				_: 1
			}),
			_cache[19] || (_cache[19] = createTextVNode(".", -1))
		]),
		_cache[26] || (_cache[26] = createStaticVNode("<h3 id=\"legacy-integration\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#legacy-integration\"><span>Legacy integration</span></a></h3><p>By default (for backwards compatibility purposes) the legacy integration is enabled. For new users it is recommended to <strong>disable</strong> this as it has several fundamental problems. To disable the legacy integration add the following to your <code>configuration.yaml</code>:</p><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">&#39;0xabc457fffe679xyz&#39;</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">friendly_name</span><span class=\"token punctuation\">:</span> my_remote</span>\n<span class=\"line\">    <span class=\"token key atrule\">legacy</span><span class=\"token punctuation\">:</span> <span class=\"token boolean important\">false</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>The information below only applies to the legacy integration.</p><h3 id=\"recommendation\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#recommendation\"><span>Recommendation</span></a></h3><p>This device sends multiple messages in short time period with the same payload. It&#39;s worth setting <code>debounce</code> option with <code>debounce_ignore: - action</code> to throttle them without losing unique action payloads.</p><p>E.g. (devices.yaml)</p><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">&#39;0xabc457fffe679xyz&#39;</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">friendly_name</span><span class=\"token punctuation\">:</span> my_remote</span>\n<span class=\"line\">    <span class=\"token key atrule\">debounce</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0.5</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">debounce_ignore</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token punctuation\">-</span> action</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>To find optimal &quot;smoothness&quot; play with debounce time or if you need all unique rotation steps consider adding <code>brightness</code> to <code>debounce_ignore</code> option</p><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">&#39;0xabc457fffe679xyz&#39;</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">friendly_name</span><span class=\"token punctuation\">:</span> my_remote</span>\n<span class=\"line\">    <span class=\"token key atrule\">debounce</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0.1</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">debounce_ignore</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token punctuation\">-</span> action</span>\n<span class=\"line\">    <span class=\"token punctuation\">-</span> brightness</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 11)),
		createBaseVNode("p", null, [
			_cache[21] || (_cache[21] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[20] || (_cache[20] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[22] || (_cache[22] = createTextVNode(".", -1))
		]),
		_cache[27] || (_cache[27] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[23] || (_cache[23] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[28] || (_cache[28] = createStaticVNode("<ul><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>30</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</p></li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"identify-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#identify-enum\"><span>Identify (enum)</span></a></h3><p>Initiate device identification. This device is asleep by default.You may need to wake it up first before sending the identify command.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>identify</code>.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>toggle</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>.</p>", 9))
	]);
}
var E1744_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, E1744_default as default };
