import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/324131092621.md
var _pageData = JSON.parse("{\"path\":\"/devices/324131092621.html\",\"title\":\"Philips 324131092621 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Philips 324131092621 control via MQTT\",\"description\":\"Integrate your Philips 324131092621 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2019-07-22T20:08:17.000Z\"},\"filePathRelative\":\"devices/324131092621.md\"}");
var _sfc_main = { name: "324131092621.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[12] || (_cache[12] = createBaseVNode("h1", {
			id: "philips-324131092621",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#philips-324131092621"
		}, [createBaseVNode("span", null, "Philips 324131092621")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "324131092621")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Philips" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Philips", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Hue dimmer switch gen 1")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, action_duration, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/324131092621.png",
				alt: "Philips 324131092621"
			})])], -1))
		])]),
		_cache[13] || (_cache[13] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		_cache[14] || (_cache[14] = createBaseVNode("h3", {
			id: "related",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#related"
		}, [createBaseVNode("span", null, "Related")])], -1)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/devices/929002398602.html" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("Hue dimmer switch gen 2", -1)])]),
			_: 1
		})])]),
		_cache[15] || (_cache[15] = createStaticVNode("<h3 id=\"battery-type\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-type\"><span>Battery Type</span></a></h3><p>Uses a CR2450 battery.</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Factory reset the Hue dimmer switch by pressing and holding the setup button on the back for 10 seconds.</p><p>Restart the Hue dimmer switch by holding all 4 buttons of the Hue dimmer switch. You can let go when the light on the front flashes red/green briefly.</p><h4 id=\"using-the-dimmer-to-reset-other-zigbee-devices\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#using-the-dimmer-to-reset-other-zigbee-devices\"><span>Using the dimmer to reset other Zigbee devices</span></a></h4><p>Many devices can be factory reset / re-paired with a help of Hue dimmer switch:</p><ol><li>Make sure your device is powered on.</li><li>Take the dimmer and hold the ON and OFF buttons close to your device for approximately 10 seconds.</li><li>After about 10 seconds both your Zigbee device and the Hue dimmer should flash.</li><li>Hold it down for a further one second.</li><li>Your device should now be discoverable by your network.</li></ol><p>To use the Hue dimmer switch to factory reset a Hue light bulb see <a href=\"https://www.youtube.com/watch?v=qvlEAELiJKs\" target=\"_blank\" rel=\"noopener noreferrer\">HOWTO: Factory reset a Hue bulb</a>.</p><p>This method also works for Philips Hue Lightstrips, IKEA Trådfri, Sonoff ZBMINI, and Tuya light bulbs.</p><h3 id=\"binding\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#binding\"><span>Binding</span></a></h3><p>By default, the device is bound to the coordinator, but it can also be used to directly control other lights and switches in the network (see <a href=\"https://www.zigbee2mqtt.io/guide/usage/binding.html\" target=\"_blank\" rel=\"noopener noreferrer\">guide on binding</a>).</p><p>As the device is sleeping by default, you will need to wake it up after sending the bind/unbind command by pressing any button.</p><p>When endpoint <code>1</code> is bound to a light or a group of lights, the behavior is as follows:</p><table><thead><tr><th>Button</th><th>Click</th><th>Action</th><th>Comment</th></tr></thead><tbody><tr><td>On</td><td>Single, Long</td><td>Turn on</td><td>Using the <code>commandOn</code> command.</td></tr><tr><td>Brightness up</td><td>Single</td><td>Step up the brightness</td><td>In steps of 30 points (around 12%), using the <code>commandStep</code> command with <code>{&quot;stepmode&quot;:0,&quot;stepsize&quot;:30,&quot;transtime&quot;:9}</code> payload.</td></tr><tr><td>Brightness up</td><td>Long</td><td>Smoothly increase the brightness</td><td>In steps of 56 points (around 22%), using the <code>commandStep</code> command with <code>{&quot;stepmode&quot;:0,&quot;stepsize&quot;:56,&quot;transtime&quot;:9}</code> payload. Sends the <code>commandStop</code> command, on button release.</td></tr><tr><td>Brightness down</td><td>Single</td><td>Step down the brightness</td><td>In steps of 30 points (around 12%), using the <code>commandStep</code> command with <code>{&quot;stepmode&quot;:1,&quot;stepsize&quot;:30,&quot;transtime&quot;:9}</code> payload.</td></tr><tr><td>Brightness down</td><td>Long</td><td>Smoothly decrease the brightness</td><td>In steps of 56 points (around 22%), using the <code>commandStep</code> command with <code>{&quot;stepmode&quot;:1,&quot;stepsize&quot;:56,&quot;transtime&quot;:9}</code> payload. Sends the <code>commandStop</code> command, on button release.</td></tr><tr><td>Off</td><td>Single, Long</td><td>Turn off</td><td>Using the <code>commandOffWithEffect</code> command with <code>{&quot;effectid&quot;:0,&quot;effectvariant&quot;:0}</code> payload.</td></tr></tbody></table><h3 id=\"troubleshooting\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#troubleshooting\"><span>Troubleshooting</span></a></h3><h4 id=\"resetting-the-device\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#resetting-the-device\"><span>Resetting the device</span></a></h4><ul><li>Method 1: Press all four buttons for 4 seconds. When the light turns green, release the buttons. The device will flash green and red alternatively after which it will reconnect to the network.</li><li>Method 2: Use a needle or paperclip to press the reset button on the back for 10 seconds. The behavior is similar to method 1</li></ul><h4 id=\"device-refuses-actions\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#device-refuses-actions\"><span>Device refuses actions</span></a></h4><p>If actions (e.g. applying zigbee2mqtt/bridge/request/device/remove to a dimmer) result in timeouts, perform a reset (see above) and apply the action right after the device announced itself in the network.</p><h4 id=\"device-announces-itself-but-the-buttons-don-t-work\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#device-announces-itself-but-the-buttons-don-t-work\"><span>Device announces itself but the buttons don&#39;t work</span></a></h4><p>The dimmer appears to be working normally and the logs in Zigbee2MQTT look good. However, nothing happens when a button is pressed (no light, no log message in Zigbee2MQTT). In this case:</p><ul><li>Reset the device</li><li>Use zigbee2mqtt/bridge/request/device/remove to remove the device from the network (this should result in a &quot;left the network&quot; log message)</li><li>Allow joining of new devices in Zigbee2MQTT</li><li>Reset the device again</li><li>Wait for it to pair again. The device should now be operational.</li></ul><p>Alternatively:</p><ul><li>Reset the device by pressing all 4 buttons for 4 seconds</li><li>Click &#39;Reconfigure&#39; for the device in Zigbee2MQTT</li></ul><h4 id=\"device-cannot-be-updated\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#device-cannot-be-updated\"><span>Device cannot be updated</span></a></h4><p>Sometimes you need to &quot;wake up&quot; the device as you hit the update. Especially with battery-powered devices. Just press a button before pressing the update button.</p><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 28)),
		createBaseVNode("p", null, [
			_cache[9] || (_cache[9] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[10] || (_cache[10] = createTextVNode(".", -1))
		]),
		_cache[16] || (_cache[16] = createBaseVNode("h2", {
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
		_cache[17] || (_cache[17] = createStaticVNode("<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"action-duration-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-duration-numeric\"><span>Action duration (numeric)</span></a></h3><p>Triggered action duration in seconds. Value can be found in the published state on the <code>action_duration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>s</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_press</code>, <code>on_press_release</code>, <code>on_hold</code>, <code>on_hold_release</code>, <code>up_press</code>, <code>up_press_release</code>, <code>up_hold</code>, <code>up_hold_release</code>, <code>down_press</code>, <code>down_press_release</code>, <code>down_hold</code>, <code>down_hold_release</code>, <code>off_press</code>, <code>off_press_release</code>, <code>off_hold</code>, <code>off_hold_release</code>.</p>", 9))
	]);
}
var _324131092621_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, _324131092621_default as default };
