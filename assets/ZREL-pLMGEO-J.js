import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/ZREL.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZREL.html\",\"title\":\"SMLIGHT ZREL control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"SMLIGHT ZREL control via MQTT\",\"description\":\"Integrate your SMLIGHT ZREL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-11-05T09:47:25.188Z\"},\"filePathRelative\":\"devices/ZREL.md\"}");
var _sfc_main = { name: "ZREL.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "smlight-zrel",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#smlight-zrel"
		}, [createBaseVNode("span", null, "SMLIGHT ZREL")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZREL")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=SMLIGHT" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("SMLIGHT", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee-Ethernet router")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "identify")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZREL.png",
				alt: "SMLIGHT ZREL"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"how-it-works\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#how-it-works\"><span>How it works</span></a></h3><p>ZREL is a Zigbee-Ethernet router: it carries one Zigbee network over Ethernet. A ZREL Master is placed within radio range of the Zigbee coordinator, and a ZREL Remote anywhere the same LAN reaches, for example another floor or a detached building; Zigbee traffic travels between them over the Ethernet link. Both join the network as routers and appear in Zigbee2MQTT as <code>ZREL-MG24</code>, and devices near the Remote join and talk through it like through any other router. A ZREL is powered by PoE or USB-C.</p><h3 id=\"firmware\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#firmware\"><span>Firmware</span></a></h3><p>Zigbee2MQTT supports ZREL with firmware 1.0.1 or later. A ZREL running older firmware, for example 1.0.0, must be updated first; ZREL-config updates it in one click.</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>ZREL units are set up with the ZREL-config app, which finds them on the local network.</p><ol><li>Connect both ZRELs first: power them and connect them to the LAN. In ZREL-config, check that one unit has the Master role and the other the Remote role (set the roles there if needed), and that the Remote&#39;s <em>Link to master via Ethernet</em> shows <em>Linked</em>.</li><li>Enable <em>Permit join</em> in Zigbee2MQTT. Both ZRELs join as routers by themselves.</li><li>If one of them has not joined, select it in ZREL-config, open <em>Zigbee &amp; RF Diagnostics</em> and choose <em>Search &amp; Join Zigbee Network</em>. The Remote joins over the Ethernet link, without being moved near the Zigbee coordinator.</li><li>Once both ZRELs have joined, disable <em>Permit join</em>.</li><li>Now pair the Zigbee devices at the remote location through the ZREL Remote with the standard procedure: enable <em>Permit join</em> in Zigbee2MQTT and put each device into pairing mode.</li></ol><h3 id=\"transmit-power\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#transmit-power\"><span>Transmit power</span></a></h3><p>The radio&#39;s transmit power (0 to 20 dBm) is set per unit in ZREL-config under <em>Zigbee &amp; RF Diagnostics</em>, <em>RF Transmit Power</em>.</p><h2 id=\"options\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options\"><span>Options</span></a></h2>", 11)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>30</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"identify-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#identify-enum\"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p>", 4))
	]);
}
var ZREL_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ZREL_default as default };
