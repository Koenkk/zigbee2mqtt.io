import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/AC0251100NJ_AC0251600NJ_AC0251700NJ.md
var _pageData = JSON.parse("{\"path\":\"/devices/AC0251100NJ_AC0251600NJ_AC0251700NJ.html\",\"title\":\"OSRAM AC0251100NJ/AC0251600NJ/AC0251700NJ control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"OSRAM AC0251100NJ/AC0251600NJ/AC0251700NJ control via MQTT\",\"description\":\"Integrate your OSRAM AC0251100NJ/AC0251600NJ/AC0251700NJ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2021-09-01T18:11:17.000Z\"},\"filePathRelative\":\"devices/AC0251100NJ_AC0251600NJ_AC0251700NJ.md\"}");
var _sfc_main = { name: "AC0251100NJ_AC0251600NJ_AC0251700NJ.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "osram-ac0251100nj-ac0251600nj-ac0251700nj",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#osram-ac0251100nj-ac0251600nj-ac0251700nj"
		}, [createBaseVNode("span", null, "OSRAM AC0251100NJ/AC0251600NJ/AC0251700NJ")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "AC0251100NJ/AC0251600NJ/AC0251700NJ")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=OSRAM" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("OSRAM", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Smart+ switch mini")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/AC0251100NJ-AC0251600NJ-AC0251700NJ.png",
				alt: "OSRAM AC0251100NJ/AC0251600NJ/AC0251700NJ"
			})])], -1))
		])]),
		_cache[12] || (_cache[12] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>For the OSRAM Smart+ Switch Mini (AC0251100NJ/AC0251600NJ/AC0251700NJ) hold the Middle and Arrow Down Buttons for 10 Seconds to Reset the Device. Hold the Middle and Arrow Up Buttons for 3 Seconds to connect. If the Switch is connected hold Middle and Arrow Up Buttons for 3 Seconds to disconnect.</p><h3 id=\"known-issue-pressing-a-button-unexpectedly-switches-other-zigbee-devices\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#known-issue-pressing-a-button-unexpectedly-switches-other-zigbee-devices\"><span>Known issue - pressing a button unexpectedly switches other Zigbee devices</span></a></h3><p>This is referenced in <a href=\"https://github.com/Koenkk/zigbee2mqtt/issues/962\" target=\"_blank\" rel=\"noopener noreferrer\">this issue</a>. Problem occurs because of default bindings to group 0.</p><p>Known workaround is to create an empty group in Z2M with different ID (example: 1111), bind all three buttons to this group and remove default bindings to group 0.<br> Read more on a similar issue and workarounds in <a href=\"https://github.com/Koenkk/zigbee2mqtt/issues/12397\" target=\"_blank\" rel=\"noopener noreferrer\">this issue</a> related to other device.</p><h3 id=\"actions\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#actions\"><span>Actions</span></a></h3><h4 id=\"arrow-up\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#arrow-up\"><span>Arrow up</span></a></h4><p>causes &#39;on&#39; at short pressure; &#39;brightness_move_up&#39; at long pressure (&gt;1 sec); &#39;brightness_stop&#39; at long pressure release</p><h4 id=\"circle\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#circle\"><span>Circle</span></a></h4><p>causes &#39;brightness_move_to_level&#39; at short pressure; &#39;move_to_saturation&#39; at long pressure (&gt;1 sec); &#39;hue_stop&#39; at long pressure release</p><h4 id=\"arrow-down\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#arrow-down\"><span>Arrow down</span></a></h4><p>causes &#39;off&#39; at short pressure; &#39;brightness_move_down&#39; at long pressure (&gt;1 sec); &#39;brightness_stop&#39; at long pressure release</p><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 14)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("OTA updates", -1)])]),
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
		_cache[14] || (_cache[14] = createStaticVNode("<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>color_temperature_move</code>, <code>hue_move</code>, <code>hue_stop</code>, <code>move_to_saturation</code>, <code>off</code>, <code>brightness_move_to_level</code>.</p>", 7))
	]);
}
var AC0251100NJ_AC0251600NJ_AC0251700NJ_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, AC0251100NJ_AC0251600NJ_AC0251700NJ_default as default };
