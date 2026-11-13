import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/MLI-404011_MLI-404049.md
var _pageData = JSON.parse("{\"path\":\"/devices/MLI-404011_MLI-404049.html\",\"title\":\"Müller Licht MLI-404011/MLI-404049 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Müller Licht MLI-404011/MLI-404049 control via MQTT\",\"description\":\"Integrate your Müller Licht MLI-404011/MLI-404049 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2022-06-01T15:08:55.000Z\"},\"filePathRelative\":\"devices/MLI-404011_MLI-404049.md\"}");
var _sfc_main = { name: "MLI-404011_MLI-404049.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[20] || (_cache[20] = createBaseVNode("h1", {
			id: "muller-licht-mli-404011-mli-404049",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#muller-licht-mli-404011-mli-404049"
		}, [createBaseVNode("span", null, "Müller Licht MLI-404011/MLI-404049")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "MLI-404011/MLI-404049")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=M%C3%BCller%20Licht" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Müller Licht", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Tint remote control")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action, action_group")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/MLI-404011-MLI-404049.png",
				alt: "Müller Licht MLI-404011/MLI-404049"
			})])], -1))
		])]),
		_cache[21] || (_cache[21] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Remove the battery cover and use the cover to press the button above the batteries. Press and hold this button for 10-20 seconds and release the button. After that the remote should show up as a paired device.</p><h3 id=\"groups-binding\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#groups-binding\"><span>Groups binding</span></a></h3><p>This remote is able to deal with 4 Zigbee groups:</p><ul><li>group0 = All three leds lit (no support for <code>on</code>/<code>off</code> actions and scene activation)</li><li>group1 = first led lit</li><li>group2 = second led lit</li><li>group3 = third let lit</li></ul>", 6)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("You can direct bind each remote group with a different Zigbee group, however there is a caveat: the four Zigbee groups have to use ", -1)),
			_cache[9] || (_cache[9] = createBaseVNode("strong", null, "consecutive group ids", -1)),
			_cache[10] || (_cache[10] = createTextVNode(". When setting up the binding you will only need to bind group0 to the remote (using the frontend or ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/binding.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("MQTT command", -1)])]),
				_: 1
			}),
			_cache[11] || (_cache[11] = createTextVNode("). The 3 consecutive groups will be bound to group1 to group3 automagically. Only the binding for group0 will be listed for the device within Zigbee2MQTT (", -1)),
			_cache[12] || (_cache[12] = createBaseVNode("code", null, "genLevelCtrl", -1)),
			_cache[13] || (_cache[13] = createTextVNode(" and ", -1)),
			_cache[14] || (_cache[14] = createBaseVNode("code", null, "lightingColorCtrl", -1)),
			_cache[15] || (_cache[15] = createTextVNode(" clusters).", -1))
		]),
		createBaseVNode("p", null, [
			_cache[17] || (_cache[17] = createTextVNode("This means that you probably should carefully ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-group-add" }, {
				default: withCtx(() => [..._cache[16] || (_cache[16] = [createTextVNode("define your groups id", -1)])]),
				_: 1
			}),
			_cache[18] || (_cache[18] = createTextVNode(" when creating them. When creating the binding you need to wake up the device. The most reliable way is to pull the battery, press any button to drain remaining power and insert it back right when sending the binding request to the remote. You do not need to bother with the default tint action groups (16388/16389/16390), they will be overwritten as soon as the binding was successful.", -1))
		]),
		_cache[22] || (_cache[22] = createBaseVNode("p", null, "It is possible to bind to a device instead of a group. The device will be bound to group0. In this case, group0 to group3 will not be usable.", -1)),
		_cache[23] || (_cache[23] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[19] || (_cache[19] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[24] || (_cache[24] = createStaticVNode("<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>color_temperature_move</code>, <code>color_move</code>, <code>scene_1</code>, <code>scene_2</code>, <code>scene_3</code>, <code>scene_4</code>, <code>scene_5</code>, <code>scene_6</code>.</p><h3 id=\"action-group-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-group-numeric\"><span>Action group (numeric)</span></a></h3><p>Group where the action was triggered on. Value can be found in the published state on the <code>action_group</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>", 7))
	]);
}
var MLI_404011_MLI_404049_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, MLI_404011_MLI_404049_default as default };
