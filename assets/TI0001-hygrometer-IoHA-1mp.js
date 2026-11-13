import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/TI0001-hygrometer.md
var _pageData = JSON.parse("{\"path\":\"/devices/TI0001-hygrometer.html\",\"title\":\"Livolo TI0001-hygrometer control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Livolo TI0001-hygrometer control via MQTT\",\"description\":\"Integrate your Livolo TI0001-hygrometer via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-06-30T19:11:08.000Z\"},\"filePathRelative\":\"devices/TI0001-hygrometer.md\"}");
var _sfc_main = { name: "TI0001-hygrometer.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[14] || (_cache[14] = createBaseVNode("h1", {
			id: "livolo-ti0001-hygrometer",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#livolo-ti0001-hygrometer"
		}, [createBaseVNode("span", null, "Livolo TI0001-hygrometer")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "TI0001-hygrometer")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Livolo" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Livolo", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee Digital Humidity and Temperature Sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "humidity, temperature")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/TI0001-hygrometer.png",
				alt: "Livolo TI0001-hygrometer"
			})])], -1))
		])]),
		_cache[15] || (_cache[15] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("After pairing device will be shown as \"TI0001\" device. Need to manually trigger a re-configure of the device either using web-frontend of Zigbee2MQTT or using ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-device-configure" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("MQTT message", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(" right after pairing. In case of problems it's recommended to remove device and than retry pairing and re-configuring device.", -1))
		]),
		_cache[16] || (_cache[16] = createBaseVNode("h3", {
			id: "important",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#important"
		}, [createBaseVNode("span", null, "Important")])], -1)),
		createBaseVNode("p", null, [
			_cache[11] || (_cache[11] = createTextVNode("These devices can only be used on channel 26. These devices are locked to the manufacturer's network key (ext_pan_id). Your configuration file ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/" }, {
				default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("data/configuration.yaml", -1)])]),
				_: 1
			}),
			_cache[12] || (_cache[12] = createTextVNode(" must contain the following:", -1))
		]),
		_cache[17] || (_cache[17] = createStaticVNode("<div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">advanced</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">ext_pan_id</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token number\">33</span><span class=\"token punctuation\">,</span><span class=\"token number\">117</span><span class=\"token punctuation\">,</span><span class=\"token number\">141</span><span class=\"token punctuation\">,</span><span class=\"token number\">25</span><span class=\"token punctuation\">,</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span><span class=\"token number\">75</span><span class=\"token punctuation\">,</span><span class=\"token number\">18</span><span class=\"token punctuation\">,</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">channel</span><span class=\"token punctuation\">:</span> <span class=\"token number\">26</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>These devices may not co-exist with other Zigbee devices on the same network. You may need to add a dedicated coordinator and create a new network for Livolo. The Deconz adapter may not work as a coordinator. Pairing with the Deconz dongle needs to take place immediately after pairing the device with the Livolo hub, but status messages from the device are not then reflected in Zigbee2MQTT (so you can&#39;t see when the button has been pressed on the device). The Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-P does seem to work once reflashed. To allow the device to complete its interview, re-pairing needs to be initiated on the device before the device exits pairing mode (ie before the rapid flashing sequence finishes and as soon as the device appears for the first time in Zigbee2MQTT). If you decided to create a new network, you should specify another &#39;pan_id&#39;.</p><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">advanced</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">pan_id</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6756</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"options\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options\"><span>Options</span></a></h2>", 4)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[13] || (_cache[13] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[18] || (_cache[18] = createStaticVNode("<ul><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a maximum value of <code>3</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"humidity-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#humidity-numeric\"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id=\"temperature-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#temperature-numeric\"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p>", 6))
	]);
}
var TI0001_hygrometer_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, TI0001_hygrometer_default as default };
