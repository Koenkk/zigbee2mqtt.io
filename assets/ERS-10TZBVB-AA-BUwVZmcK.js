import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/ERS-10TZBVB-AA.md
var _pageData = JSON.parse("{\"path\":\"/devices/ERS-10TZBVB-AA.html\",\"title\":\"Moes ERS-10TZBVB-AA control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Moes ERS-10TZBVB-AA control via MQTT\",\"description\":\"Integrate your Moes ERS-10TZBVB-AA via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2022-06-01T15:08:55.000Z\"},\"filePathRelative\":\"devices/ERS-10TZBVB-AA.md\"}");
var _sfc_main = { name: "ERS-10TZBVB-AA.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "moes-ers-10tzbvb-aa",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#moes-ers-10tzbvb-aa"
		}, [createBaseVNode("span", null, "Moes ERS-10TZBVB-AA")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ERS-10TZBVB-AA")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Moes" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Moes", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Smart button")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, operation_mode, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ERS-10TZBVB-AA.png",
				alt: "Moes ERS-10TZBVB-AA"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><p>A triple click of the button switches operation modes. This is indicated by the received payload <code>{&quot;action&quot;: null, &quot;operation_mode&quot;: NEW_VALUE}</code> with values rotating between the modes listed in the respective section below. Depending on mode, the actions emitted by single click, double click and hold differ.</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Open the backcover with a screwdriver. Hold the reset button for 6s until the green LED starts flashing.</p><h2 id=\"options\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options\"><span>Options</span></a></h2>", 5)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"operation-mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#operation-mode-enum\"><span>Operation mode (enum)</span></a></h3><p>Operation mode: &quot;command&quot; - for group control, &quot;event&quot; - for clicks. Value can be found in the published state on the <code>operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>command</code>, <code>event</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>hold</code>, <code>brightness_move_to_level</code>, <code>color_temperature_move</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>on</code>, <code>off</code>.</p>", 9))
	]);
}
var ERS_10TZBVB_AA_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ERS_10TZBVB_AA_default as default };
