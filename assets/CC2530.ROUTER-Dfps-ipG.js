import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/CC2530.ROUTER.md
var _pageData = JSON.parse("{\"path\":\"/devices/CC2530.ROUTER.html\",\"title\":\"Custom devices (DiY) CC2530.ROUTER control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Custom devices (DiY) CC2530.ROUTER control via MQTT\",\"description\":\"Integrate your Custom devices (DiY) CC2530.ROUTER via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2019-07-22T20:08:17.000Z\"},\"filePathRelative\":\"devices/CC2530.ROUTER.md\"}");
var _sfc_main = { name: "CC2530.ROUTER.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "custom-devices-diy-cc2530-router",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#custom-devices-diy-cc2530-router"
		}, [createBaseVNode("span", null, "Custom devices (DiY) CC2530.ROUTER")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "CC2530.ROUTER")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Custom%20devices%20(DiY)" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Custom devices (DiY)", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "CC2530 router")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "led")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/CC2530.ROUTER.png",
				alt: "Custom devices (DiY) CC2530.ROUTER"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><p><a href=\"http://ptvo.info/cc2530-based-zigbee-coordinator-and-router-112/\" target=\"_blank\" rel=\"noopener noreferrer\">CC2530 router</a></p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>At first boot it will automatically be in pairing mode and join your network. To reset it into pairing mode power-cycle it three times as follows:</p><ol><li>power on</li><li>wait 2sec</li><li>power off</li><li>repeat above steps 2 further times</li><li>power on and wait for it to join your network</li></ol><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"led-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#led-binary\"><span>Led (binary)</span></a></h3><p>Value can be found in the published state on the <code>led</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> led is ON, if <code>false</code> OFF.</p>", 8))
	]);
}
var CC2530_ROUTER_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, CC2530_ROUTER_default as default };
