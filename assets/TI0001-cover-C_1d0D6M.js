import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/TI0001-cover.md
var _pageData = JSON.parse("{\"path\":\"/devices/TI0001-cover.html\",\"title\":\"Livolo TI0001-cover control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Livolo TI0001-cover control via MQTT\",\"description\":\"Integrate your Livolo TI0001-cover via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2021-03-30T20:29:35.000Z\"},\"filePathRelative\":\"devices/TI0001-cover.md\"}");
var _sfc_main = { name: "TI0001-cover.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[10] || (_cache[10] = createBaseVNode("h1", {
			id: "livolo-ti0001-cover",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#livolo-ti0001-cover"
		}, [createBaseVNode("span", null, "Livolo TI0001-cover")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "TI0001-cover")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Livolo" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Livolo", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee roller blind motor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "cover (state, position), options, moving")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/TI0001-cover.png",
				alt: "Livolo TI0001-cover"
			})])], -1))
		])]),
		_cache[11] || (_cache[11] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		_cache[12] || (_cache[12] = createBaseVNode("h3", {
			id: "important",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#important"
		}, [createBaseVNode("span", null, "Important")])], -1)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("These devices can only be used on channel 26. These devices are locked to the manufacturer's network key (ext_pan_id). Your configuration file ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("data/configuration.yaml", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(" must contain the following:", -1))
		]),
		_cache[13] || (_cache[13] = createStaticVNode("<div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">advanced</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">ext_pan_id</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token number\">33</span><span class=\"token punctuation\">,</span><span class=\"token number\">117</span><span class=\"token punctuation\">,</span><span class=\"token number\">141</span><span class=\"token punctuation\">,</span><span class=\"token number\">25</span><span class=\"token punctuation\">,</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span><span class=\"token number\">75</span><span class=\"token punctuation\">,</span><span class=\"token number\">18</span><span class=\"token punctuation\">,</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">channel</span><span class=\"token punctuation\">:</span> <span class=\"token number\">26</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>Therefore these devices may not co-existence with other Zigbee devices. Maybe, you need to add a dedicated coordinator and create a new network for Livolo. If you decided to create a new network, you should specify another &#39;pan_id&#39;.</p><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">advanced</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">pan_id</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6756</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Press the buttons &quot;down&quot; and &quot;settings&quot; together for 3 seconds and it blinks red and blue in pairing mode.</p><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"cover\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cover\"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id=\"options-composite\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options-composite\"><span>Options (composite)</span></a></h3><p>Motor options. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;options&quot;: {&quot;motor_speed&quot;: VALUE, &quot;motor_direction&quot;: &quot;VALUE&quot;}}</code></p><ul><li><code>motor_speed</code> (numeric): Motor speed min value is 20, max value is 40, unit is rpm</li><li><code>motor_direction</code> (enum): Motor direction allowed values: <code>FORWARD</code>, <code>REVERSE</code></li></ul><h3 id=\"moving-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#moving-binary\"><span>Moving (binary)</span></a></h3><p>Motor is moving. Value can be found in the published state on the <code>moving</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> moving is ON, if <code>false</code> OFF.</p>", 13))
	]);
}
var TI0001_cover_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, TI0001_cover_default as default };
