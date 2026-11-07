import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/images/InstaRemote-reset.jpg
var InstaRemote_reset_default = "/assets/InstaRemote-reset-KpR5g09L.jpg";
// docs/images/InstaRemote-join-network.jpg
var InstaRemote_join_network_default = "/assets/InstaRemote-join-network-DLvuopKt.jpg";
// docs/devices/InstaRemote.md
var _pageData = JSON.parse("{\"path\":\"/devices/InstaRemote.html\",\"title\":\"Insta InstaRemote control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Insta InstaRemote control via MQTT\",\"description\":\"Integrate your Insta InstaRemote via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2020-04-08T17:49:06.000Z\"},\"filePathRelative\":\"devices/InstaRemote.md\"}");
var _sfc_main = { name: "InstaRemote.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[12] || (_cache[12] = createBaseVNode("h1", {
			id: "insta-instaremote",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#insta-instaremote"
		}, [createBaseVNode("span", null, "Insta InstaRemote")])], -1)),
		createBaseVNode("table", null, [_cache[7] || (_cache[7] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "InstaRemote")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Insta" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Insta", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee Light Link wall/handheld transmitter")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/InstaRemote.png",
				alt: "Insta InstaRemote"
			})])], -1)),
			_cache[6] || (_cache[6] = createBaseVNode("tr", null, [createBaseVNode("td", null, "White-label"), createBaseVNode("td", null, "Gira 2430-100, Gira 2435-10, Jung ZLLCD5004M, Jung ZLLLS5004M, Jung ZLLA5004M, Jung ZLLHS4")], -1))
		])]),
		_cache[13] || (_cache[13] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"transmitters-loosing-connection-in-zigbee-3-networks\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#transmitters-loosing-connection-in-zigbee-3-networks\"><span>Transmitters Loosing Connection in Zigbee 3 Networks</span></a></h3><p>With their factory firmware, the transmitters loose network connection after a few hours when Zigbee 3 devices are present in the network (which is a pretty much standard nowadays). For the Jung wall and handheld transmitters there is a firmware update available that fixes this problem (see <a href=\"#ota-updates\">OTA updates</a> below), but in turn decreases battery lifetime down to a few months.</p><p>Unfortunately Gira seems to have dropped support for their Zigbee transmitters completely and does not offer any firmware updates at all. For the Gira handheld transmitter the Jung update seems to work (and to fix the problem), but for the Gira wall transmitter this is not the case (it only has 6 buttons instead of 8 on the Jung wall transmitter and would therefore need a different firmware). There does not seem to be real solution for this problem rendering the Gira wall transmitters pretty much useless nowadays.</p><h3 id=\"factory-reset-8-button-devices\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#factory-reset-8-button-devices\"><span>Factory Reset (8-Button Devices)</span></a></h3><ul><li>Press and hold buttons <code>3</code> and <code>4</code> simultaneously for about 10 seconds until the green LEDs start to flash.</li><li>Release buttons <code>3</code> and <code>4</code> and then briefly press button <code>O</code> within 10 seconds.</li><li>The LEDs should light up green for 3 seconds and the transmitter has been reset. <img src=\"" + InstaRemote_reset_default + "\" alt=\"Reset\"></li></ul><h3 id=\"join-network-8-button-devices\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#join-network-8-button-devices\"><span>Join Network (8-Button Devices)</span></a></h3><ul><li>Press and hold buttons <code>5</code> and <code>I</code> simultaneously until the green LEDs start to flash. Then release the buttons again.</li><li>After 10 more seconds the transmitter will start to search for an open network in order to join it.</li><li>If the transmitter was able to join a network, the LEDs will light up green for 3 seconds (otherwise the LEDs will flash red quickly for 3 seconds). <img src=\"" + InstaRemote_join_network_default + "\" alt=\"Join Network\"></li></ul><h3 id=\"ota\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota\"><span>OTA</span></a></h3><p>For the device to ask for/accept OTA updates, it needs to be in &quot;programming mode&quot; (same mode as for joining a network, see above). In case the device does still not accept updates or seems to be stuck somehow, it may help to do a factory reset, join the network again and then again enter programming mode before starting the OTA update again.</p><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 11)),
		createBaseVNode("p", null, [
			_cache[9] || (_cache[9] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[10] || (_cache[10] = createTextVNode(".", -1))
		]),
		_cache[14] || (_cache[14] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[11] || (_cache[11] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[15] || (_cache[15] = createStaticVNode("<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>select_0</code>, <code>select_1</code>, <code>select_2</code>, <code>select_3</code>, <code>select_4</code>, <code>select_5</code>, <code>on</code>, <code>off</code>, <code>down</code>, <code>up</code>, <code>stop</code>.</p>", 5))
	]);
}
var InstaRemote_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, InstaRemote_default as default };
