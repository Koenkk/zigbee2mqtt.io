import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/EFR32MG21.Router.1.md
var _pageData = JSON.parse("{\"path\":\"/devices/EFR32MG21.Router.1.html\",\"title\":\"Custom devices (DiY) EFR32MG21.Router.1 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Custom devices (DiY) EFR32MG21.Router.1 control via MQTT\",\"description\":\"Integrate your Custom devices (DiY) EFR32MG21.Router.1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-11-30T20:27:20.000Z\"},\"filePathRelative\":\"devices/EFR32MG21.Router.1.md\"}");
var _sfc_main = { name: "EFR32MG21.Router.1.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "custom-devices-diy-efr32mg21-router-1",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#custom-devices-diy-efr32mg21-router-1"
		}, [createBaseVNode("span", null, "Custom devices (DiY) EFR32MG21.Router.1")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "EFR32MG21.Router.1")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Custom%20devices%20(DiY)" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Custom devices (DiY)", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "EFR32MG21 Zigbee bridge router")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/EFR32MG21.Router.1.png",
				alt: "Custom devices (DiY) EFR32MG21.Router.1"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><p>This is a SONOFF ZBBridge (Zigbee Bridge) whose EFR32MG21 radio has been flashed with router firmware, turning the bridge into a mains-powered Zigbee router. The radio reports manufacturer <code>easyiot</code> and model <code>UT-01</code>. The Wi-Fi side keeps running Tasmota, which is used to flash the radio and to trigger pairing. Current Zigbee2MQTT recognises the device natively, the external <code>silabs.js</code> converter from older guides is no longer needed.</p><h3 id=\"firmware\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#firmware\"><span>Firmware</span></a></h3><p>Router firmware for the bridge&#39;s SM-011 radio module: <a href=\"https://github.com/digiblur/Tasmota/tree/development/zigbee_router\" target=\"_blank\" rel=\"noopener noreferrer\">digiblur/Tasmota</a> hosts <code>efr32mg21_zigbee_router_signed-6.7.10.gbl.ota</code>; <a href=\"https://github.com/xsp1989/zigbeeFirmware/tree/master/firmware/ZigbeeBridge_SM-011-signed/Router-Singed\" target=\"_blank\" rel=\"noopener noreferrer\">xsp1989/zigbeeFirmware</a>, where the firmware originates, hosts <code>efr32mg21_zigbee_router_6.7.10.ota</code>. 6.7.10 is the only router build published in either place. The <code>ncp-uart-*</code> files in xsp1989&#39;s <code>ZigbeeBridge_SM-011-signed</code> directory are coordinator (NCP) firmware and would turn the bridge back into a coordinator. To flash, follow <a href=\"https://digiblur.com/2022/02/20/how-to-convert-the-sonoff-zigbee-bridge-into-a-router-repeater/\" target=\"_blank\" rel=\"noopener noreferrer\">digiblur&#39;s guide</a>: with the <code>tasmota-zbbridge</code> build installed, select module <em>Sonoff ZbBridge (75)</em>, upload the <code>.gbl.ota</code> file under <em>Firmware Upgrade</em>, then apply the <em>Sonoff ZigRouter</em> template from the guide.</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Enable permit join in Zigbee2MQTT, then put the bridge into pairing mode: briefly press the reset button next to the USB port (a paper clip fits); the green LED lights up. Wait 5-6 seconds and press it again; the LED goes off and the bridge is in pairing mode. Alternatively, in the Tasmota web UI switch <em>Toggle 1</em> on, wait 5-6 seconds and switch it off again. Once joined, the bridge rejoins its network automatically after a power cycle.</p><h3 id=\"led\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#led\"><span>LED</span></a></h3><p>The LEDs belong to Tasmota, not to the radio: the blue LED is the Wi-Fi/MQTT link indicator and the green LED follows <em>Toggle 1</em>. Neither indicates Zigbee network state. At power-up both flash briefly, then the blue LED stays on and blinks while Tasmota connects to Wi-Fi and MQTT and goes off once connected; in normal operation both are off.</p><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2>", 9))
	]);
}
var EFR32MG21_Router_1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, EFR32MG21_Router_1_default as default };
