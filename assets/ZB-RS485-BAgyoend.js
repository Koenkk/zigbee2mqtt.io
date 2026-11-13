import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/ZB-RS485.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZB-RS485.html\",\"title\":\"easyiot ZB-RS485 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"easyiot ZB-RS485 control via MQTT\",\"description\":\"Integrate your easyiot ZB-RS485 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-11-30T20:27:20.000Z\"},\"filePathRelative\":\"devices/ZB-RS485.md\"}");
var _sfc_main = { name: "ZB-RS485.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[10] || (_cache[10] = createBaseVNode("h1", {
			id: "easyiot-zb-rs485",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#easyiot-zb-rs485"
		}, [createBaseVNode("span", null, "easyiot ZB-RS485")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZB-RS485")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=easyiot" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("easyiot", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee to RS485 controller")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "last_received_command, send_command, rs485_config")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZB-RS485.png",
				alt: "easyiot ZB-RS485"
			})])], -1))
		])]),
		_cache[11] || (_cache[11] = createBaseVNode("h2", {
			id: "ota-updates",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ota-updates"
		}, [createBaseVNode("span", null, "OTA updates")])], -1)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(".", -1))
		]),
		_cache[12] || (_cache[12] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"last-received-command-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#last-received-command-text\"><span>Last received command (text)</span></a></h3><p>Received data. Value can be found in the published state on the <code>last_received_command</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id=\"send-command-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#send-command-text\"><span>Send command (text)</span></a></h3><p>Send data. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;send_command&quot;: &quot;VALUE&quot;}</code>.</p><h3 id=\"rs485-config-composite\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#rs485-config-composite\"><span>Rs485 config (composite)</span></a></h3><p>RS485 serial port configuration. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rs485_config&quot;: {&quot;baud_rate&quot;: &quot;VALUE&quot;, &quot;parity&quot;: &quot;VALUE&quot;, &quot;stop_bits&quot;: &quot;VALUE&quot;}}</code></p><ul><li><code>baud_rate</code> (enum): Baud rate (bps) allowed values: <code>1200</code>, <code>2400</code>, <code>4800</code>, <code>9600</code>, <code>19200</code>, <code>38400</code>, <code>57600</code>, <code>115200</code>, <code>230400</code>, <code>460800</code>, <code>921600</code></li><li><code>parity</code> (enum): Parity (none / even / odd) allowed values: <code>none</code>, <code>even</code>, <code>odd</code></li><li><code>stop_bits</code> (enum): Stop bits (1 / 1.5 / 2) allowed values: <code>1</code>, <code>1.5</code>, <code>2</code></li></ul>", 8))
	]);
}
var ZB_RS485_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ZB_RS485_default as default };
