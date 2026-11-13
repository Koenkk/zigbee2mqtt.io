import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/S093TH-ZG.md
var _pageData = JSON.parse("{\"path\":\"/devices/S093TH-ZG.html\",\"title\":\"HZC Electric S093TH-ZG control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"HZC Electric S093TH-ZG control via MQTT\",\"description\":\"Integrate your HZC Electric S093TH-ZG via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2022-10-10T21:00:00.000Z\"},\"filePathRelative\":\"devices/S093TH-ZG.md\"}");
var _sfc_main = { name: "S093TH-ZG.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "hzc-electric-s093th-zg",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#hzc-electric-s093th-zg"
		}, [createBaseVNode("span", null, "HZC Electric S093TH-ZG")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "S093TH-ZG")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=HZC%20Electric" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("HZC Electric", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Temperature and humidity sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "temperature, humidity")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/S093TH-ZG.png",
				alt: "HZC Electric S093TH-ZG"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><p>The device has an indicator LED (red/orange/green) on the front and a button on the back.</p><p>Device supports Zigbee 3.0, is powered by a CR2450 battery, has a temperature accuracy of plus minus 1.5 K and a humidity accuracy of 5 percent. The stated battery life is two years and the operating temperature is from -10C to +45C. The physical dimensions are 45 x 45 x 17.1 mm.</p><h3 id=\"factory-reset\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#factory-reset\"><span>Factory Reset</span></a></h3><p>Push the button three short and one long time. After about 10 seconds, the LED will blink quickly in red. Then release the button. The LED will stay solid red for three seconds and reset.</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Push the button three times.</p><p>If the device is not paired, the LED will blink slowly in orange and the device will attempt to pair.</p><p>If the device is paired but can&#39;t connect, the LED will blink quickly in orange for three seconds.</p><p>If the device is paired, the LED will blink slowly in green for five seconds.</p><h3 id=\"led-indicators\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#led-indicators\"><span>LED indicators</span></a></h3><p>The LED blinks slowly 7 times when powered on.</p><p>When pairing, the LED will blink slowly in orange while searching for a network. The search will timeout after two minutes.</p><p>When pairing is in progress, the LED will stay on in green. The official documentation is very unclear on what this actually means.</p><p>After successfuly pairing, the LED will turn off.</p><p>If pairing failed, the LED will stay solidly orange for three seconds.</p><p>If the battery is below 10 % the LED will blink orange once a minute.</p><h2 id=\"options\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options\"><span>Options</span></a></h2>", 18)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"temperature-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#temperature-numeric\"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id=\"humidity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#humidity-numeric\"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p>", 6))
	]);
}
var S093TH_ZG_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, S093TH_ZG_default as default };
