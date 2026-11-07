import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/Z3-1BRL.md
var _pageData = JSON.parse("{\"path\":\"/devices/Z3-1BRL.html\",\"title\":\"Lutron Z3-1BRL control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Lutron Z3-1BRL control via MQTT\",\"description\":\"Integrate your Lutron Z3-1BRL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2019-09-08T21:16:00.000Z\"},\"filePathRelative\":\"devices/Z3-1BRL.md\"}");
var _sfc_main = { name: "Z3-1BRL.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "lutron-z3-1brl",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#lutron-z3-1brl"
		}, [createBaseVNode("span", null, "Lutron Z3-1BRL")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "Z3-1BRL")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Lutron" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Lutron", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Aurora smart bulb dimmer")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "brightness, battery, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/Z3-1BRL.png",
				alt: "Lutron Z3-1BRL"
			})])], -1))
		])]),
		_cache[12] || (_cache[12] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"enter-pairing-mode\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#enter-pairing-mode\"><span>Enter pairing mode</span></a></h3><p>For new devices:</p><ul><li>Quickly double tap the dimmer button.</li></ul><p>For previously paired devices:</p><ol><li>Quickly tap the dimmer button 4x.</li><li>On the fourth tap, hold until the LED begins to blink.</li><li>Immediately, quickly tap the dimmer button 3 more times.</li></ol><p>See this <a href=\"https://www.lutron.com/TechnicalDocumentLibrary/0301916_Aurora_Advanced_Install_Guide.pdf#page=7\" target=\"_blank\" rel=\"noopener noreferrer\">configuration guide</a> for more information.</p><p>If a red light flashes, the battery is low and must be replaced before pairing.</p><h3 id=\"device-binding\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#device-binding\"><span>Device Binding</span></a></h3><p>When binding this device to a device, the dimmer creates a group and associates the targeted device with the group. This dimmer cannot directly control devices that do not support groups. The dimmer also cannot be bound to a group through the Binding tab in Zigbee2MQTT, even though it uses groups under the hood.</p><p>The dial has been observed creating groups with id <code>0x2fed</code> / <code>12269</code>. Consider creating that group in Zigbee2MQTT to avoid accidentally creating a conflicting group. If a device is having difficulty with the binding procedure, this can also be used as a workaround to enable direct control of the device.</p><p>If you suspect your dial is using a different group ID, you can find it by following these steps:</p><ol><li>Enable debug logging and restarting Zigbee2MQTT.</li><li>Open the <code>Clusters</code> tab in the Zigbee2MQTT web interface for a device that has been bound to the dimmer.</li><li>Find the endpoint number that contains the <code>genGroups</code> cluster.</li><li>Open the dev console tab, and enter the number from step 3 under <code>Execute Command</code>.</li><li>Enter <code>2</code> for the command (which corresponds to <code>Get Group Membership</code>).</li><li>Enter <code>{&quot;groupcount&quot;: 0, &quot;grouplist&quot;: []}</code> for the <code>Payload</code> and click <code>Execute</code>.</li><li>In the debug logs, you will see a line with <code>commandGetMembershipRsp</code> and the array of group IDs as <code>grouplist</code>, in decimal format.</li><li>You can now turn off debug logging and restart Zigbee2MQTT.</li></ol><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 14)),
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
		_cache[14] || (_cache[14] = createStaticVNode("<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"brightness-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#brightness-numeric\"><span>Brightness (numeric)</span></a></h3><p>Value can be found in the published state on the <code>brightness</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>brightness</code>.</p>", 9))
	]);
}
var Z3_1BRL_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, Z3_1BRL_default as default };
