import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-BymFJaQ9.js";
import { t as _plugin_vue_export_helper_default } from "./app-IGTdvNBR.js";
//#region docs/devices/CK-TLSR8656-SS5-02(7014).md
var _pageData = JSON.parse("{\"path\":\"/devices/CK-TLSR8656-SS5-02(7014).html\",\"title\":\"eWeLink CK-TLSR8656-SS5-02(7014) control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"eWeLink CK-TLSR8656-SS5-02(7014) control via MQTT\",\"description\":\"Integrate your eWeLink CK-TLSR8656-SS5-02(7014) via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-06-30T19:08:31.000Z\"},\"git\":{},\"filePathRelative\":\"devices/CK-TLSR8656-SS5-02(7014).md\"}");
var _sfc_main = { name: "CK-TLSR8656-SS5-02(7014).md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "ewelink-ck-tlsr8656-ss5-02-7014",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ewelink-ck-tlsr8656-ss5-02-7014"
		}, [createBaseVNode("span", null, "eWeLink CK-TLSR8656-SS5-02(7014)")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "CK-TLSR8656-SS5-02(7014)")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=eWeLink" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("eWeLink", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Temperature & humidity sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "temperature, humidity, battery")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/CK-TLSR8656-SS5-02(7014).png",
				alt: "eWeLink CK-TLSR8656-SS5-02(7014)"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"temperature-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#temperature-numeric\"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id=\"humidity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#humidity-numeric\"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>", 8))
	]);
}
var CK_TLSR8656_SS5_02_7014__default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, CK_TLSR8656_SS5_02_7014__default as default };
