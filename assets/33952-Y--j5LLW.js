import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/33952.md
var _pageData = JSON.parse("{\"path\":\"/devices/33952.html\",\"title\":\"AwoX 33952 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"AwoX 33952 control via MQTT\",\"description\":\"Integrate your AwoX 33952 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2022-03-01T08:48:44.000Z\"},\"filePathRelative\":\"devices/33952.md\"}");
var _sfc_main = { name: "33952.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "awox-33952",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#awox-33952"
		}, [createBaseVNode("span", null, "AwoX 33952")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "33952")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=AwoX" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("AwoX", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Remote controller")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/33952.png",
				alt: "AwoX 33952"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"upgrading-firmware\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#upgrading-firmware\"><span>Upgrading firmware</span></a></h3><p>Before pairing with Zigbee2MQTT, it is to good update the firmware of the remote controller via Bluetooth. To do this, install the &quot;AwoX HomeControl&quot; app on your smartphone, pair the device by holding for 3s power on and blue button and according to the instruction in the app to update the firmware.</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Enable Zigbee2MQTT pairing and push power on and the coloured wheel on the remote controller. The red LED indication in the middle of the device should flash 3 times (this clears the memory of the remote controller). After that hold the power button for 3 seconds.</p><p>ℹ️If that is not working try the same pairing process as for the app by holding for 3s power on and blue button.</p><h2 id=\"warning-degrades-network-performance\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#warning-degrades-network-performance\"><span>Warning: degrades network performance</span></a></h2><p>AwoX devices are known to cause network instability. If your Zigbee network has poor performance or you are seeing errors like <code>NO_NETWORK_ROUTE</code> you should remove this device from the network. It <a href=\"https://github.com/Koenkk/zigbee2mqtt/discussions/18366\" target=\"_blank\" rel=\"noopener noreferrer\">may help</a> to OTA update your device via the &quot;AwoX HomeControl&quot; app over Bluetooth.</p><h2 id=\"options\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options\"><span>Options</span></a></h2>", 9)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>red</code>, <code>refresh</code>, <code>refresh_colored</code>, <code>blue</code>, <code>yellow</code>, <code>green</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>recall_1</code>, <code>color_temperature_step_up</code>, <code>color_temperature_step_down</code>, <code>color_blue</code>, <code>color_green</code>, <code>color_yellow</code>, <code>color_red</code>, <code>light_movement</code>, <code>refresh</code>, <code>recall_1</code>, <code>recall_2</code>.</p>", 5))
	]);
}
var _33952_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, _33952_default as default };
