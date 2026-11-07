import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/929002398602.md
var _pageData = JSON.parse("{\"path\":\"/devices/929002398602.html\",\"title\":\"Philips 929002398602 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Philips 929002398602 control via MQTT\",\"description\":\"Integrate your Philips 929002398602 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2021-02-28T13:58:01.000Z\"},\"filePathRelative\":\"devices/929002398602.md\"}");
var _sfc_main = { name: "929002398602.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[12] || (_cache[12] = createBaseVNode("h1", {
			id: "philips-929002398602",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#philips-929002398602"
		}, [createBaseVNode("span", null, "Philips 929002398602")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "929002398602")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Philips" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Philips", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Hue dimmer switch gen 2")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/929002398602.png",
				alt: "Philips 929002398602"
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
		createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/devices/324131092621.html" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("Hue dimmer switch gen 1", -1)])]),
			_: 1
		})])]),
		_cache[15] || (_cache[15] = createStaticVNode("<h3 id=\"battery-type\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-type\"><span>Battery Type</span></a></h3><p>Uses a CR2032 battery.</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Factory reset the Hue dimmer switch by removing the battery cover and pressing and holding the setup button for 10 seconds. The LED on the front will blink red and the device is ready to pair.</p><p>Restart the Hue dimmer switch by holding all 4 buttons of the Hue dimmer switch. You can let go when the light on the front flashes red/green briefly.</p><h4 id=\"using-the-dimmer-to-reset-a-hue-light-bulb\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#using-the-dimmer-to-reset-a-hue-light-bulb\"><span>Using the dimmer to reset a Hue light bulb</span></a></h4><p>To use the Hue dimmer switch to factory reset a Hue light bulb see <a href=\"https://www.youtube.com/watch?v=qvlEAELiJKs\" target=\"_blank\" rel=\"noopener noreferrer\">HOWTO: Factory reset a Hue bulb</a>. After resetting the bulb will automatically connect. This method also works for Philips Hue Lightstrips. Hue dimmer switch can also be used to factory reset Ikea Trådfri light bulbs using the same method described above.</p><h3 id=\"binding\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#binding\"><span>Binding</span></a></h3><p>By default, the device is bound to the coordinator, but it can also be used to directly control other lights and switches in the network (see <a href=\"https://www.zigbee2mqtt.io/guide/usage/binding.html\" target=\"_blank\" rel=\"noopener noreferrer\">guide on binding</a>).</p><p>As the device is sleeping by default, you will need to wake it up after sending the bind/unbind command by pressing any button.</p><p>When endpoint <code>1</code> is bound to a light or a group of lights, the behavior is as follows:</p><table><thead><tr><th>Click</th><th>Button</th><th>Command</th></tr></thead><tbody><tr><td>Single</td><td>Power</td><td>Alternating¹ <em>On</em> / <em>OffWithEffect\xA0(0,0)</em></td></tr><tr><td>Single</td><td>Up</td><td><em>Step (Up, 30\xA0points, 0.9s\xA0transition)</em></td></tr><tr><td>Long</td><td>Up</td><td><em>Step (Up, 63\xA0points, 0.9s\xA0transition)</em> +\xA0<em>Stop</em></td></tr><tr><td>Single</td><td>Down</td><td><em>Step (Down, 30\xA0points, 0.9s\xA0transition)</em></td></tr><tr><td>Long</td><td>Down</td><td><em>Step (Down, 63\xA0points, 0.9s\xA0transition)</em> +\xA0<em>Stop</em></td></tr><tr><td>Single</td><td>Hue</td><td><em>RecallScene²\xA0(G,\xA0S)</em></td></tr></tbody></table><p>¹ The remote tries to determine the correct command. Behavior depends on the firmware version:</p><ul><li>v2.77.39: Remote reads onOff state from <strong>the coordinator</strong> -&gt; This fails in Zigbee2MQTT -&gt; Remote stores the state and falls-back to simple alternation</li><li>v2.85.1: Remote reads onOff state from <strong>the parent</strong> (~nearest router) -&gt; It replies with on/off -&gt; Remote sends the opposite command (<em>Off</em>/<em>On</em>). This is an issue if the parent and the target are different devices!</li></ul><p>² The device alternates between two scenes (1 and 2) in a predetermined group, specific to the particular remote. To obtain the groupID and set up the binding, follow these steps:</p><ul><li>turn on debug level logging in Zigbee2MQTT</li><li>make sure dimmer is paired</li><li>in Bind settings for the dimmer, unbind everything not <code>Scenes</code> and bind <code>Scenes</code> cluster between dimmer and coordinator</li><li>in logs filter for <code>scene</code> as the amount of debug messages is very high</li><li>press the <code>Hue</code> button on the remote</li><li>you will see a debug level message looking like <code>debug 2025-03-11 11:00:52z2m: Received Zigbee message from &#39;Dimmer - Bathroom&#39;, type &#39;commandRecall&#39;, cluster &#39;genScenes&#39;, data &#39;{&quot;groupid&quot;:14719,&quot;sceneid&quot;:0}&#39; from endpoint 1 with groupID 14719</code></li><li>this will be slightly different for your device, read your <code>groupID</code></li><li>create a group with this <code>groupID</code> and add the lights you want to bind to the dimmer to this group</li><li>save two scenes in this group with sceneIDs <code>0</code> and <code>1</code></li><li>bind the dimmer to the newly created group with matching <code>groupID</code> making sure <code>Scenes</code> cluster is also bound</li><li>the <code>Hue</code> button should now alternate between the two stored scenes on repeat presses, and also recall one of the predetermined scenes even when the group is turned off</li></ul><h3 id=\"troubleshooting\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#troubleshooting\"><span>Troubleshooting</span></a></h3><h4 id=\"resetting-the-device\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#resetting-the-device\"><span>Resetting the device</span></a></h4><ul><li>Method 1: Press all four buttons for 4 seconds. When the light turns green, release the buttons. The device will flash green and red alternatively after which it will reconnect to the network.</li><li>Method 2: Use a needle or paperclip to press the reset button on the back for 10 seconds. The behavior is similar to method 1</li></ul><h4 id=\"device-refuses-actions\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#device-refuses-actions\"><span>Device refuses actions</span></a></h4><p>If actions (e.g. applying zigbee2mqtt/bridge/request/device/remove to a dimmer) result in timeouts, perform a reset (see above) and apply the action right after the device announced itself in the network.</p><h4 id=\"device-announces-itself-but-the-buttons-don-t-work\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#device-announces-itself-but-the-buttons-don-t-work\"><span>Device announces itself but the buttons don&#39;t work</span></a></h4><p>The dimmer appears to be working normally and the logs in Zigbee2MQTT look good. However, nothing happens when a button is pressed (no light, no log message in Zigbee2MQTT). In this case:</p><ul><li>Reset the device</li><li>Use zigbee2mqtt/bridge/request/device/remove to remove the device from the network (this should result in a &quot;left the network&quot; log message)</li><li>Allow joining of new devices in Zigbee2MQTT</li><li>Reset the device again</li><li>Wait for it to pair again. The device should now be operational.</li></ul><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 25)),
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
		_cache[17] || (_cache[17] = createStaticVNode("<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_press</code>, <code>on_hold</code>, <code>on_press_release</code>, <code>on_hold_release</code>, <code>off_press</code>, <code>off_hold</code>, <code>off_press_release</code>, <code>off_hold_release</code>, <code>up_press</code>, <code>up_hold</code>, <code>up_press_release</code>, <code>up_hold_release</code>, <code>down_press</code>, <code>down_hold</code>, <code>down_press_release</code>, <code>down_hold_release</code>, <code>recall_0</code>, <code>recall_1</code>.</p>", 7))
	]);
}
var _929002398602_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, _929002398602_default as default };
