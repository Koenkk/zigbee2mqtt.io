import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-D6Jmich1.js";
import { t as _plugin_vue_export_helper_default } from "./app-BG4Tt9eu.js";
//#region docs/devices/ZB-MIDEA-AC.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZB-MIDEA-AC.html\",\"title\":\"PirogovX ZB-MIDEA-AC control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"PirogovX ZB-MIDEA-AC control via MQTT\",\"description\":\"Integrate your PirogovX ZB-MIDEA-AC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-08-30T18:06:52.000Z\"},\"git\":{\"updatedTime\":1788114020000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"029056389b989133936323c6e894744b0ad8d048\",\"time\":1788114020000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"}]},\"filePathRelative\":\"devices/ZB-MIDEA-AC.md\"}");
var _sfc_main = { name: "ZB-MIDEA-AC.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "pirogovx-zb-midea-ac",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#pirogovx-zb-midea-ac"
		}, [createBaseVNode("span", null, "PirogovX ZB-MIDEA-AC")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZB-MIDEA-AC")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=PirogovX" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("PirogovX", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee air conditioner controller for Midea / Royal Clima / Hommyn / Neoline (ESP32-H2/C6)")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "climate (occupied_heating_setpoint, local_temperature, system_mode), fan_mode, swing_mode, preset, display, outdoor_temperature, firmware_version")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZB-MIDEA-AC.png",
				alt: "PirogovX ZB-MIDEA-AC"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"climate\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#climate\"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>16</code> and <code>30</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>cool</code>, <code>heat</code>, <code>dry</code>, <code>fan_only</code>. Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id=\"fan-mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#fan-mode-enum\"><span>Fan mode (enum)</span></a></h3><p>Fan speed. Value can be found in the published state on the <code>fan_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>auto</code>, <code>low</code>, <code>medium</code>, <code>high</code>, <code>quiet</code>.</p><h3 id=\"swing-mode-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#swing-mode-enum\"><span>Swing mode (enum)</span></a></h3><p>Swing mode. Value can be found in the published state on the <code>swing_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;swing_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>horizontal</code>, <code>vertical</code>, <code>both</code>.</p><h3 id=\"preset-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#preset-enum\"><span>Preset (enum)</span></a></h3><p>Preset mode. Value can be found in the published state on the <code>preset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: NEW_VALUE}</code>. The possible values are: <code>none</code>, <code>sleep</code>, <code>turbo</code>.</p><h3 id=\"display-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#display-binary\"><span>Display (binary)</span></a></h3><p>AC display and beep control. Value can be found in the published state on the <code>display</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> display is ON, if <code>OFF</code> OFF.</p><h3 id=\"outdoor-temperature-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#outdoor-temperature-numeric\"><span>Outdoor temperature (numeric)</span></a></h3><p>Outdoor unit temperature. Value can be found in the published state on the <code>outdoor_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id=\"firmware-version-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#firmware-version-text\"><span>Firmware version (text)</span></a></h3><p>AC controller firmware version. Value can be found in the published state on the <code>firmware_version</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>", 17))
	]);
}
var ZB_MIDEA_AC_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, ZB_MIDEA_AC_default as default };
