import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/KL08RF.md
var _pageData = JSON.parse("{\"path\":\"/devices/KL08RF.html\",\"title\":\"Salus Controls KL08RF control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Salus Controls KL08RF control via MQTT\",\"description\":\"Integrate your Salus Controls KL08RF via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-10-17T16:44:18.326Z\"},\"filePathRelative\":\"devices/KL08RF.md\"}");
var _sfc_main = { name: "KL08RF.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[20] || (_cache[20] = createBaseVNode("h1", {
			id: "salus-controls-kl08rf",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#salus-controls-kl08rf"
		}, [createBaseVNode("span", null, "Salus Controls KL08RF")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "KL08RF")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Salus%20Controls" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Salus Controls", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "iT600 8-zone wiring centre")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/KL08RF.png",
				alt: "Salus Controls KL08RF"
			})])], -1))
		])]),
		_cache[21] || (_cache[21] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		_cache[22] || (_cache[22] = createBaseVNode("p", null, "This device is also sold under the Neotherm brand in Denmark.", -1)),
		_cache[23] || (_cache[23] = createBaseVNode("h3", {
			id: "pairing",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#pairing"
		}, [createBaseVNode("span", null, "Pairing")])], -1)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("The wiring centre sends the same Salus specific greeting as the ", -1)),
			createVNode(_component_RouteLink, { to: "/devices/SQ610RFNH.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("SQ610RFNH", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(" thermostat when it joins, and leaves again if nobody answers it. This converter answers it, and gives the wiring centre device number 1. Only one wiring centre per Zigbee network is supported.", -1))
		]),
		_cache[24] || (_cache[24] = createStaticVNode("<ol><li>Factory reset the wiring centre: hold Pair for 15 s until G1 and G2 turn red and go off. Its paired thermostats leave the network too, so they have to join and be paired again.</li><li>Cut its mains power and wait until the network LED has gone dark. A short cut is not enough: the radio keeps running, and after a reset the wiring centre does not look for a network by itself.</li><li>Permit join on the whole network: publish <code>{&quot;time&quot;: 254}</code> to <code>zigbee2mqtt/bridge/request/permit_join</code>. Do not limit it to the wiring centre when you join thermostats.</li><li>Switch the wiring centre on. It joins at once and is recognised as a KL08RF.</li></ol><h3 id=\"zones\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zones\"><span>Zones</span></a></h3><p>The wiring centre reports which thermostat holds which zone. <code>zone_1</code> to <code>zone_8</code> show the IEEE address of the thermostat in each zone, or its short address when no device has it (a thermostat that rejoined under a new one), and null while the zone is free. It reports the table by itself after each pairing and at boot, and a get on any zone asks for it again.</p>", 3)),
		createBaseVNode("p", null, [
			_cache[11] || (_cache[11] = createTextVNode("A zone is paired from the thermostat, not from the wiring centre: set ", -1)),
			_cache[12] || (_cache[12] = createBaseVNode("code", null, "wiring_centre_zones", -1)),
			_cache[13] || (_cache[13] = createTextVNode(" on the thermostat, see ", -1)),
			createVNode(_component_RouteLink, { to: "/devices/SQ610RFNH.html#wiring-centre-zones" }, {
				default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("Wiring centre zones", -1)])]),
				_: 1
			}),
			_cache[14] || (_cache[14] = createTextVNode(". The thermostat leaves \"go to the Smart Home app\" when its zone is paired. A zone that another thermostat holds is refused unless the command has the replace flag, and the wiring centre then reports the thermostat it replaced as ", -1)),
			_cache[15] || (_cache[15] = createBaseVNode("code", null, "replaced_thermostat", -1)),
			_cache[16] || (_cache[16] = createTextVNode(".", -1))
		]),
		_cache[25] || (_cache[25] = createBaseVNode("p", null, "From then on the thermostats send their demand to the wiring centre, which switches the zone relays and the pump and boiler outputs.", -1)),
		_cache[26] || (_cache[26] = createBaseVNode("h3", {
			id: "firmware-updates",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#firmware-updates"
		}, [createBaseVNode("span", null, "Firmware updates")])], -1)),
		_cache[27] || (_cache[27] = createBaseVNode("p", null, "The wiring centre lists the OTA client cluster (0x0019), and Salus ships its firmware as standard Zigbee OTA files. The OTA index has the image of the version it runs (20230222) under the manufacturer name SalusControls, which the definition uses, and Zigbee2MQTT matches the wiring centre to it. No newer image exists yet, so a transfer has not been tried.", -1)),
		_cache[28] || (_cache[28] = createBaseVNode("h2", {
			id: "ota-updates",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ota-updates"
		}, [createBaseVNode("span", null, "OTA updates")])], -1)),
		createBaseVNode("p", null, [
			_cache[18] || (_cache[18] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[17] || (_cache[17] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[19] || (_cache[19] = createTextVNode(".", -1))
		]),
		_cache[29] || (_cache[29] = createBaseVNode("h2", {
			id: "exposes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#exposes"
		}, [createBaseVNode("span", null, "Exposes")])], -1))
	]);
}
var KL08RF_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, KL08RF_default as default };
