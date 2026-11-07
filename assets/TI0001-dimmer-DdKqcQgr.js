import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/TI0001-dimmer.md
var _pageData = JSON.parse("{\"path\":\"/devices/TI0001-dimmer.html\",\"title\":\"Livolo TI0001-dimmer control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Livolo TI0001-dimmer control via MQTT\",\"description\":\"Integrate your Livolo TI0001-dimmer via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2021-02-05T19:15:16.000Z\"},\"filePathRelative\":\"devices/TI0001-dimmer.md\"}");
var _sfc_main = { name: "TI0001-dimmer.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[13] || (_cache[13] = createBaseVNode("h1", {
			id: "livolo-ti0001-dimmer",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#livolo-ti0001-dimmer"
		}, [createBaseVNode("span", null, "Livolo TI0001-dimmer")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "TI0001-dimmer")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Livolo" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Livolo", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee dimmer")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "light (state, brightness)")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/TI0001-dimmer.png",
				alt: "Livolo TI0001-dimmer"
			})])], -1))
		])]),
		_cache[14] || (_cache[14] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("After pairing device will be shown as \"TI0001\" device. Need to manually trigger a re-configure of the device either using web-frontend of Zigbee2MQTT or using ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-device-configure" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("MQTT message", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(" right after pairing. In case of problems it's recommended to remove device and than retry pairing and re-configuring device.", -1))
		]),
		_cache[15] || (_cache[15] = createBaseVNode("h3", {
			id: "important",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#important"
		}, [createBaseVNode("span", null, "Important")])], -1)),
		createBaseVNode("p", null, [
			_cache[11] || (_cache[11] = createTextVNode("These devices can only be used on channel 26. These devices are locked to the manufacturer's network key (ext_pan_id). Your configuration file ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/" }, {
				default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("data/configuration.yaml", -1)])]),
				_: 1
			}),
			_cache[12] || (_cache[12] = createTextVNode(" must contain the following:", -1))
		]),
		_cache[16] || (_cache[16] = createStaticVNode("<div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">advanced</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">ext_pan_id</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token number\">33</span><span class=\"token punctuation\">,</span><span class=\"token number\">117</span><span class=\"token punctuation\">,</span><span class=\"token number\">141</span><span class=\"token punctuation\">,</span><span class=\"token number\">25</span><span class=\"token punctuation\">,</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span><span class=\"token number\">75</span><span class=\"token punctuation\">,</span><span class=\"token number\">18</span><span class=\"token punctuation\">,</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">channel</span><span class=\"token punctuation\">:</span> <span class=\"token number\">26</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>Therefore these devices may not co-existence with other Zigbee devices. Maybe, you need to add a dedicated coordinator and create a new network for Livolo. If you decided to create a new network, you should specify another &#39;pan_id&#39;.</p><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">advanced</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">pan_id</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6756</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"light\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#light\"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><p><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p></li><li><p><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</p></li></ul>", 7))
	]);
}
var TI0001_dimmer_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, TI0001_dimmer_default as default };
