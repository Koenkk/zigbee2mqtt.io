import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/ZP-301Z.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZP-301Z.html\",\"title\":\"Arteco ZP-301Z control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Arteco ZP-301Z control via MQTT\",\"description\":\"Integrate your Arteco ZP-301Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-11-30T20:32:44.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"5601702380faea1b054a52e27b48361f4148af28\",\"time\":1764534871000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc\"}]},\"filePathRelative\":\"devices/ZP-301Z.md\"}");
var _sfc_main = { name: "ZP-301Z.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "arteco-zp-301z",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#arteco-zp-301z"
		}, [createBaseVNode("span", null, "Arteco ZP-301Z")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZP-301Z")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Arteco" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Arteco", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "PIR motion sensor light with night light function")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "presence, battery_value, illuminance, brightness_value, presence_time, presence_delay, illuminance_trigger, detection_cycle")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZP-301Z.png",
				alt: "Arteco ZP-301Z"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"presence-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#presence-binary\"><span>Presence (binary)</span></a></h3><p>Human presence detected. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id=\"battery-value-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-value-numeric\"><span>Battery value (numeric)</span></a></h3><p>battery value in %. Value can be found in the published state on the <code>battery_value</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id=\"illuminance-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#illuminance-numeric\"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id=\"brightness-value-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#brightness-value-numeric\"><span>Brightness value (numeric)</span></a></h3><p>When the light brightness is activated after the lights are turned on. Value can be found in the published state on the <code>brightness_value</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness_value&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"presence-time-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#presence-time-numeric\"><span>Presence time (numeric)</span></a></h3><p>How long to wait before turning on the lights after detecting a person and meeting the light conditions. Value can be found in the published state on the <code>presence_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>60</code>. The unit of this value is <code>s</code>.</p><h3 id=\"presence-delay-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#presence-delay-numeric\"><span>Presence delay (numeric)</span></a></h3><p>How long after no one is detected will the lights turn off. Value can be found in the published state on the <code>presence_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>120</code>. The unit of this value is <code>s</code>.</p><h3 id=\"illuminance-trigger-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#illuminance-trigger-numeric\"><span>Illuminance trigger (numeric)</span></a></h3><p>Detection is only allowed when the illuminance is less than the current value.. Value can be found in the published state on the <code>illuminance_trigger</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;illuminance_trigger&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10000</code>.</p><h3 id=\"detection-cycle-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#detection-cycle-numeric\"><span>Detection cycle (numeric)</span></a></h3><p>How often is the battery level and illuminance detected. Value can be found in the published state on the <code>detection_cycle</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_cycle&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>1200</code>. The unit of this value is <code>s</code>.</p>", 18))
	]);
}
var ZP_301Z_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, ZP_301Z_default as default };
