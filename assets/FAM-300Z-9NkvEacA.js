import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/FAM-300Z.md
var _pageData = JSON.parse("{\"path\":\"/devices/FAM-300Z.html\",\"title\":\"ShinaSystem FAM-300Z control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"ShinaSystem FAM-300Z control via MQTT\",\"description\":\"Integrate your ShinaSystem FAM-300Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-05-01T17:59:09.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"7fecb4295cc84ff50f35d4450bad1d971ff8644f\",\"time\":1746123337000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.36.0\"}]},\"filePathRelative\":\"devices/FAM-300Z.md\"}");
var _sfc_main = { name: "FAM-300Z.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[10] || (_cache[10] = createBaseVNode("h1", {
			id: "shinasystem-fam-300z",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#shinasystem-fam-300z"
		}, [createBaseVNode("span", null, "ShinaSystem FAM-300Z")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "FAM-300Z")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=ShinaSystem" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("ShinaSystem", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "SiHAS Smoke detector")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "remote_control_permission, force_smoke_alarm, smoke_battery, smoke, battery")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/FAM-300Z.png",
				alt: "ShinaSystem FAM-300Z"
			})])], -1))
		])]),
		_cache[11] || (_cache[11] = createBaseVNode("h2", {
			id: "ota-updates",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ota-updates"
		}, [createBaseVNode("span", null, "OTA updates")])], -1)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(".", -1))
		]),
		_cache[12] || (_cache[12] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"remote-control-permission-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#remote-control-permission-binary\"><span>Remote control permission (binary)</span></a></h3><p>Indicate whether remote control is permitted or denied.. Value can be found in the published state on the <code>remote_control_permission</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>True</code> remote control permission is ON, if <code>False</code> OFF.</p><h3 id=\"force-smoke-alarm-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#force-smoke-alarm-binary\"><span>Force smoke alarm (binary)</span></a></h3><p>Forcibly activating/deactivating smoke alarms. This command is only available when Remote control permission is True.. Value can be found in the published state on the <code>force_smoke_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;force_smoke_alarm&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> force smoke alarm is ON, if <code>OFF</code> OFF.</p><h3 id=\"smoke-battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#smoke-battery-numeric\"><span>Smoke battery (numeric)</span></a></h3><p>Remaining battery in % for smoke sensor, For reference, two batteries are used. One is for Smoke sensor, the other is for Zigbee.. Value can be found in the published state on the <code>smoke_battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"smoke-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#smoke-binary\"><span>Smoke (binary)</span></a></h3><p>Indicates whether the device detected smoke. Value can be found in the published state on the <code>smoke</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke is ON, if <code>false</code> OFF.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>", 11))
	]);
}
var FAM_300Z_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, FAM_300Z_default as default };
