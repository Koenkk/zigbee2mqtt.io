import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/067774.md
var _pageData = JSON.parse("{\"path\":\"/devices/067774.html\",\"title\":\"Legrand 067774 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Legrand 067774 control via MQTT\",\"description\":\"Integrate your Legrand 067774 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2020-06-29T17:33:31.000Z\"},\"filePathRelative\":\"devices/067774.md\"}");
var _sfc_main = { name: "067774.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[14] || (_cache[14] = createBaseVNode("h1", {
			id: "legrand-067774",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#legrand-067774"
		}, [createBaseVNode("span", null, "Legrand 067774")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "067774")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Legrand" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Legrand", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Wireless double remote switch")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/067774.png",
				alt: "Legrand 067774"
			})])], -1))
		])]),
		_cache[15] || (_cache[15] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"model-numbers\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#model-numbers\"><span>Model numbers</span></a></h3><p>Model number depends on the country and the colour of the devices. For example:</p><ul><li>French models are branded as Céliane with Netatmo, and models for this device depends on the colour, with the following numbers: &quot;0 677 24&quot;, &quot;0 677 74&quot;, and &quot;0 677 94&quot;.</li><li>Spanish models are branded as Legrand Valena Next, and models for this device depends on the colour, with the following numbers: &quot;7 418 12&quot;, &quot;7 418 42&quot; and &quot;7 418 72&quot;.</li></ul><h3 id=\"binding\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#binding\"><span>Binding</span></a></h3>", 5)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("The remote supports ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/binding.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("binding", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(" on each endpoint, so you can bind each button to a different device/group. As part of its configuration, the remote expects to have a \"group\" binding configured for each of its button. Otherwise, it will consider itself not fully configured and send unnecessary commands on the zigbee network resulting in noticeable delay when controlling your device(s). In a nutshell:", -1))
		]),
		_cache[16] || (_cache[16] = createBaseVNode("ul", null, [createBaseVNode("li", null, "When using devices bindings directly in Zigbee2MQTT, create groups with your target devices for each button and bind related groups accordingly."), createBaseVNode("li", null, "When using automations to control your devices (e.g. homeassistant), create a virtual group (empty) and bind it to the buttons. Beware that having both the coordinator and group bound to a remote's button will publish 2 MQTT messages")], -1)),
		_cache[17] || (_cache[17] = createBaseVNode("h2", {
			id: "ota-updates",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ota-updates"
		}, [createBaseVNode("span", null, "OTA updates")])], -1)),
		createBaseVNode("p", null, [
			_cache[11] || (_cache[11] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[12] || (_cache[12] = createTextVNode(".", -1))
		]),
		_cache[18] || (_cache[18] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[13] || (_cache[13] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[19] || (_cache[19] = createStaticVNode("<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>identify</code>, <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>.</p>", 7))
	]);
}
var _067774_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, _067774_default as default };
