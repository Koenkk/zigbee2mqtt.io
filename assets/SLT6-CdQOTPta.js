import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/SLT6.md
var _pageData = JSON.parse("{\"path\":\"/devices/SLT6.html\",\"title\":\"Hive SLT6 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Hive SLT6 control via MQTT\",\"description\":\"Integrate your Hive SLT6 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2022-02-16T14:30:02.000Z\"},\"filePathRelative\":\"devices/SLT6.md\"}");
var _sfc_main = { name: "SLT6.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "hive-slt6",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#hive-slt6"
		}, [createBaseVNode("span", null, "Hive SLT6")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "SLT6")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Hive" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Hive", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Heating thermostat remote control")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/SLT6.png",
				alt: "Hive SLT6"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><ol><li>Remove the thermostat (SLT) from the wall and remove a battery to turn it off.</li><li>Turn boiler off at the mains in order to turn off the hive receiver (SLR).</li><li>Turn the boiler on and receiver.</li><li>Hold down the central heating button for 10 seconds on the Hive receiver until light turns pink, then release.</li><li>Hold down the central heating button again until the light turns amber with double flashing.</li><li>Pair with Zigbee2mqtt using &quot;Permit Join (all)&quot;.</li><li>The amber double flash may change to a single flash.</li><li>The receiver will be added to zigbee2mqtt. Rename it to something like &quot;Hive Receiver&quot;.</li><li>Replace the battery in the thermostat and allow to boot.</li><li>Press and hold the menu and back buttons to factory reset the device. Allow the countdown to finish and release when you see the device information display followed by the &#39;Hive&#39; logo, it will now enter pairing mode.</li><li>In Zigbee2Mqtt use the dropdown arrow next to &quot;Permit Join&quot; to select the Hive receiver device you added earlier.</li><li>Start pairing with the newly labelled &quot;Permit join (Hive Receiver)&quot; button.</li><li>Wait around 30 seconds</li><li>The thermostat should now pair to the boiler receiver. The amber light should turn green, and the thermostat will go through the getting started wizard.</li></ol><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>", 6))
	]);
}
var SLT6_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, SLT6_default as default };
