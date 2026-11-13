import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/GWRJN5169.md
var _pageData = JSON.parse("{\"path\":\"/devices/GWRJN5169.html\",\"title\":\"OpenLumi GWRJN5169 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"OpenLumi GWRJN5169 control via MQTT\",\"description\":\"Integrate your OpenLumi GWRJN5169 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2021-01-26T20:08:21.000Z\"},\"filePathRelative\":\"devices/GWRJN5169.md\"}");
var _sfc_main = { name: "GWRJN5169.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[12] || (_cache[12] = createBaseVNode("h1", {
			id: "openlumi-gwrjn5169",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#openlumi-gwrjn5169"
		}, [createBaseVNode("span", null, "OpenLumi GWRJN5169")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "GWRJN5169")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=OpenLumi" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("OpenLumi", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Lumi Router (outdated firmware, update required)")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "device_temperature")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/GWRJN5169.png",
				alt: "OpenLumi GWRJN5169"
			})])], -1))
		])]),
		_cache[13] || (_cache[13] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		_cache[14] || (_cache[14] = createBaseVNode("h3", {
			id: "firmware",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#firmware"
		}, [createBaseVNode("span", null, "Firmware")])], -1)),
		_cache[15] || (_cache[15] = createBaseVNode("p", null, [
			createTextVNode("This legacy firmware used a single build for both the "),
			createBaseVNode("strong", null, "Xiaomi DGNWG05LM"),
			createTextVNode(" and "),
			createBaseVNode("strong", null, "Aqara ZHWG11LM"),
			createTextVNode(" gateways. It has been replaced by two separate, substantially revised firmware variants, each designed specifically for one gateway model. Update to the appropriate version:")
		], -1)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/devices/LR-DGNWG05LM.html" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("LR-DGNWG05LM", -1)])]),
			_: 1
		}), _cache[8] || (_cache[8] = createTextVNode(" for the Xiaomi DGNWG05LM", -1))]), createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/devices/LR-ZHWG11LM.html" }, {
			default: withCtx(() => [..._cache[9] || (_cache[9] = [createTextVNode("LR-ZHWG11LM", -1)])]),
			_: 1
		}), _cache[10] || (_cache[10] = createTextVNode(" for the Aqara ZHWG11LM", -1))])]),
		_cache[16] || (_cache[16] = createBaseVNode("p", null, [
			createTextVNode("Open source firmware and flashing instructions can be found on "),
			createBaseVNode("a", {
				href: "https://github.com/igorlistopad/Lumi-Router-JN5169",
				target: "_blank",
				rel: "noopener noreferrer"
			}, "GitHub"),
			createTextVNode(".")
		], -1)),
		_cache[17] || (_cache[17] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[11] || (_cache[11] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[18] || (_cache[18] = createStaticVNode("<ul><li><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"device-temperature-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#device-temperature-numeric\"><span>Device temperature (numeric)</span></a></h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;device_temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p>", 4))
	]);
}
var GWRJN5169_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, GWRJN5169_default as default };
