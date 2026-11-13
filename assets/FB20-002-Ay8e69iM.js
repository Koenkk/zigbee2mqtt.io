import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/FB20-002.md
var _pageData = JSON.parse("{\"path\":\"/devices/FB20-002.html\",\"title\":\"Lidl FB20-002 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Lidl FB20-002 control via MQTT\",\"description\":\"Integrate your Lidl FB20-002 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2020-12-01T19:02:25.000Z\"},\"filePathRelative\":\"devices/FB20-002.md\"}");
var _sfc_main = { name: "FB20-002.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "lidl-fb20-002",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#lidl-fb20-002"
		}, [createBaseVNode("span", null, "Lidl FB20-002")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "FB20-002")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Lidl" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Lidl", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Livarno Lux switch and dimming light remote control")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/FB20-002.png",
				alt: "Lidl FB20-002"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Hold the top 2 buttons (on and off) for about 5 seconds until the LED goes from solid green to blinking, then let go.</p><p>For more information, refer to the <a href=\"https://www.lidl-service.com/static/5027306530/334437_Zigbee_OS_DE_EN%20_FR_NL_PL_CS_SK.PDF\" target=\"_blank\" rel=\"noopener noreferrer\">LIDL manual</a>.</p><h3 id=\"direct-pairing-with-end-device-like-livarno-lux-ceiling-light-14147206l\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#direct-pairing-with-end-device-like-livarno-lux-ceiling-light-14147206l\"><span>Direct Pairing with end device (like Livarno Lux ceiling light 14147206L)</span></a></h3><p>If you have successfully paired the remote and compatible end device like Livarno Lux ceiling light, you can make direct pairing (binding)</p><ol><li>Turn on end device (light)</li><li>Get close with the remote to the light max 30cm</li><li>Press and hold the ON button (or OFF to remove the direct pairing) on the remote and release it when the LED on the remote starts blinking</li><li>After a few seconds, the remote&#39;s LED stays on and the light starts to pulse. The pairing is done.</li></ol><p>Note: Be sure to make a direct pairing after you pair both devices with Z2M.</p><h3 id=\"on-button\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#on-button\"><span>On Button</span></a></h3><p>The &quot;On&quot; button sends the event only once. The remote remembers the last pressed button and ignores all consequent button presses. More info on the <a href=\"https://github.com/Koenkk/zigbee2mqtt/issues/6509\" target=\"_blank\" rel=\"noopener noreferrer\">issue</a>.</p><h2 id=\"options\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options\"><span>Options</span></a></h2>", 11)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_stop</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>.</p>", 5))
	]);
}
var FB20_002_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, FB20_002_default as default };
