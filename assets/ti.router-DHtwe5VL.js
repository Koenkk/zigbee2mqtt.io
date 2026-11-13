import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/ti.router.md
var _pageData = JSON.parse("{\"path\":\"/devices/ti.router.html\",\"title\":\"Custom devices (DiY) ti.router control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Custom devices (DiY) ti.router control via MQTT\",\"description\":\"Integrate your Custom devices (DiY) ti.router via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2021-01-31T22:24:43.000Z\"},\"filePathRelative\":\"devices/ti.router.md\"}");
var _sfc_main = { name: "ti.router.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "custom-devices-diy-ti-router",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#custom-devices-diy-ti-router"
		}, [createBaseVNode("span", null, "Custom devices (DiY) ti.router")])], -1)),
		createBaseVNode("table", null, [_cache[7] || (_cache[7] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ti.router")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Custom%20devices%20(DiY)" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Custom devices (DiY)", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Texas Instruments router")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "transmit_power")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ti.router.png",
				alt: "Custom devices (DiY) ti.router"
			})])], -1)),
			_cache[6] || (_cache[6] = createBaseVNode("tr", null, [createBaseVNode("td", null, "White-label"), createBaseVNode("td", null, "SONOFF ZBDongle-P")], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"firmware\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#firmware\"><span>Firmware</span></a></h3><p>This is a Texas Instruments CC1352P, CC1352P7, CC2652P, CC2652R, CC2652RB or CC2652R7 board flashed with the Z-Stack 3.x.0 router firmware from the <a href=\"https://github.com/Koenkk/Z-Stack-firmware/releases\" target=\"_blank\" rel=\"noopener noreferrer\">Z-Stack-firmware releases</a> (<code>Z-Stack_3.x.0_router_*</code>). Pick the build for your adapter from the hardware table in the <a href=\"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0#readme\" target=\"_blank\" rel=\"noopener noreferrer\">coordinator firmware README</a>; the router zips are named the same way. The SONOFF ZBDongle-P (CC2652P) for example uses <code>CC1352P2_CC2652P_launchpad_router_*.zip</code>. Boards flashed with this firmware all report the same Zigbee model <code>ti.router</code>, so Zigbee2MQTT cannot tell them apart. The firmware build is shown as <em>Firmware ID</em> on the device&#39;s <em>About</em> page in Zigbee2MQTT (for example <code>20250403</code>). After flashing a newer build the page keeps showing the old value until you press <em>Interview</em> on that page and reload.</p><h3 id=\"transmit-power\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#transmit-power\"><span>Transmit power</span></a></h3><p><code>transmit_power</code> requires router firmware 20221102 or newer; on older firmware reading it fails with <code>UNSUPPORTED_ATTRIBUTE</code>. The default is 9 dBm on CC1352P/CC2652P boards such as the ZBDongle-P; the maximum is 20 dBm there and 5 dBm on CC2652R/CC2652RB.</p><h3 id=\"led\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#led\"><span>LED</span></a></h3><p>The router firmware provides no LED status indication. If your board&#39;s LED is lit, it is a hardware power indicator, and Zigbee2MQTT cannot switch a router&#39;s LED off (<code>disable_led</code> only applies to the coordinator). On the SONOFF ZBDongle-P the red LED is such a power indicator; the firmware&#39;s LED pin (DIO_7) is not populated on this dongle, per the Z-Stack-firmware hardware table.</p><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"transmit-power-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#transmit-power-numeric\"><span>Transmit power (numeric)</span></a></h3><p>Transmit power, supported from firmware 20221102. The max is 20 dBm for CC1352P/CC2652P (default 9 dBm) and 5 dBm for CC2652R/CC2652RB (any higher value is converted to 5 dBm). Value can be found in the published state on the <code>transmit_power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;transmit_power&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;transmit_power&quot;: VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>20</code>. The unit of this value is <code>dBm</code>.</p>", 10))
	]);
}
var ti_router_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ti_router_default as default };
