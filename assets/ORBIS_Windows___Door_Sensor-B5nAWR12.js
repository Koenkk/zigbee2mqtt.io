import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-BymFJaQ9.js";
import { t as _plugin_vue_export_helper_default } from "./app-IGTdvNBR.js";
//#region docs/devices/ORBIS_Windows_&_Door_Sensor.md
var _pageData = JSON.parse("{\"path\":\"/devices/ORBIS_Windows___Door_Sensor.html\",\"title\":\"Niceboy ORBIS Windows & Door Sensor control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Niceboy ORBIS Windows & Door Sensor control via MQTT\",\"description\":\"Integrate your Niceboy ORBIS Windows & Door Sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2023-08-01T15:13:29.000Z\"},\"git\":{},\"filePathRelative\":\"devices/ORBIS_Windows_&_Door_Sensor.md\"}");
var _sfc_main = { name: "ORBIS_Windows_&_Door_Sensor.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "niceboy-orbis-windows-door-sensor",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#niceboy-orbis-windows-door-sensor"
		}, [createBaseVNode("span", null, "Niceboy ORBIS Windows & Door Sensor")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ORBIS Windows & Door Sensor")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Niceboy" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Niceboy", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Door sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "contact, battery, voltage, tamper, battery_low")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ORBIS-Windows-&-Door-Sensor.png",
				alt: "Niceboy ORBIS Windows & Door Sensor"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"contact-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#contact-binary\"><span>Contact (binary)</span></a></h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"voltage-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#voltage-numeric\"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id=\"tamper-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#tamper-binary\"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id=\"battery-low-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-low-binary\"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p>", 11))
	]);
}
var ORBIS_Windows___Door_Sensor_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, ORBIS_Windows___Door_Sensor_default as default };
