import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-D6Jmich1.js";
import { t as _plugin_vue_export_helper_default } from "./app-BG4Tt9eu.js";
//#region docs/devices/3RKS030Z.md
var _pageData = JSON.parse("{\"path\":\"/devices/3RKS030Z.html\",\"title\":\"Third Reality 3RKS030Z control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Third Reality 3RKS030Z control via MQTT\",\"description\":\"Integrate your Third Reality 3RKS030Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-08-30T18:06:52.000Z\"},\"git\":{\"updatedTime\":1788114020000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"029056389b989133936323c6e894744b0ad8d048\",\"time\":1788114020000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"}]},\"filePathRelative\":\"devices/3RKS030Z.md\"}");
var _sfc_main = { name: "3RKS030Z.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[10] || (_cache[10] = createBaseVNode("h1", {
			id: "third-reality-3rks030z",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#third-reality-3rks030z"
		}, [createBaseVNode("span", null, "Third Reality 3RKS030Z")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "3RKS030Z")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Third%20Reality" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Third Reality", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Smart Scale")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "weight, weight_pound_ounce, reset_button, start_report_button, stop_report_button, set_weight_button, convert_gram_to_pound_ounce, battery")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/3RKS030Z.png",
				alt: "Third Reality 3RKS030Z"
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
		_cache[12] || (_cache[12] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"weight-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#weight-numeric\"><span>Weight (numeric)</span></a></h3><p>Current weight (gram). Value can be found in the published state on the <code>weight</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>g</code>.</p><h3 id=\"weight-pound-ounce-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#weight-pound-ounce-text\"><span>Weight pound ounce (text)</span></a></h3><p>Weight (pound + ounce). Value can be found in the published state on the <code>weight_pound_ounce</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id=\"reset-button-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#reset-button-enum\"><span>Reset button (enum)</span></a></h3><p>Reset weight (tare). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reset_button&quot;: NEW_VALUE}</code>. The possible values are: <code>RESET</code>.</p><h3 id=\"start-report-button-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#start-report-button-enum\"><span>Start report button (enum)</span></a></h3><p>Start auto weight reporting. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;start_report_button&quot;: NEW_VALUE}</code>. The possible values are: <code>START</code>.</p><h3 id=\"stop-report-button-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#stop-report-button-enum\"><span>Stop report button (enum)</span></a></h3><p>Stop auto weight reporting. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;stop_report_button&quot;: NEW_VALUE}</code>. The possible values are: <code>STOP</code>.</p><h3 id=\"set-weight-button-text\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#set-weight-button-text\"><span>Set weight button (text)</span></a></h3><p>Manually set weight (input number, unit: gram). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;set_weight_button&quot;: NEW_VALUE}</code>.</p><h3 id=\"convert-gram-to-pound-ounce-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#convert-gram-to-pound-ounce-enum\"><span>Convert gram to pound ounce (enum)</span></a></h3><p>Manually trigger gram to pound/ounce conversion. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;convert_gram_to_pound_ounce&quot;: NEW_VALUE}</code>. The possible values are: <code>CONVERT</code>.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>", 17))
	]);
}
var _3RKS030Z_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, _3RKS030Z_default as default };
