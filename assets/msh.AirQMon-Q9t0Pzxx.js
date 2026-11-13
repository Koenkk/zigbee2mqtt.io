import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/msh.AirQMon.md
var _pageData = JSON.parse("{\"path\":\"/devices/msh.AirQMon.html\",\"title\":\"MySmartHouse msh.AirQMon control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"MySmartHouse msh.AirQMon control via MQTT\",\"description\":\"Integrate your MySmartHouse msh.AirQMon via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-03-31T19:04:19.000Z\"},\"filePathRelative\":\"devices/msh.AirQMon.md\"}");
var _sfc_main = { name: "msh.AirQMon.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "mysmarthouse-msh-airqmon",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#mysmarthouse-msh-airqmon"
		}, [createBaseVNode("span", null, "MySmartHouse msh.AirQMon")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "msh.AirQMon")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=MySmartHouse" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("MySmartHouse", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "MSH Air quality sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action, calibrate, co2, l2, cpu_temperature, l4")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/msh.AirQMon.png",
				alt: "MySmartHouse msh.AirQMon"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><p><a href=\"https://www.facebook.com/my.smart.house.in.ua\" target=\"_blank\" rel=\"noopener noreferrer\">MSH Air quality sensor</a></p><h2 id=\"options\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options\"><span>Options</span></a></h2>", 3)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>co2_calibration</code>: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-text\"><span>Action (text)</span></a></h3><p>button clicks or data from/to UART. Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;action&quot;: &quot;VALUE&quot;}</code>.</p><h3 id=\"calibrate-enum-l2-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#calibrate-enum-l2-endpoint\"><span>Calibrate (enum, l2 endpoint)</span></a></h3><p>Calibration. Value can be found in the published state on the <code>calibrate_l2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibrate_l2&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>ZERO</code>, <code>SPAN</code>.</p><h3 id=\"co2-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#co2-numeric\"><span>CO2 (numeric)</span></a></h3><p>The measured CO2 (carbon dioxide) value. Value can be found in the published state on the <code>co2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id=\"l2-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#l2-numeric\"><span>L2 (numeric)</span></a></h3><p>Error. Value can be found in the published state on the <code>l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id=\"cpu-temperature-numeric-l3-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cpu-temperature-numeric-l3-endpoint\"><span>CPU temperature (numeric, l3 endpoint)</span></a></h3><p>Temperature of the CPU. Value can be found in the published state on the <code>temperature_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id=\"l4-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#l4-numeric\"><span>L4 (numeric)</span></a></h3><p>Uptime (seconds). Value can be found in the published state on the <code>l4</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>", 14))
	]);
}
var msh_AirQMon_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, msh_AirQMon_default as default };
