import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/GDC311ZBQ1.md
var _pageData = JSON.parse("{\"path\":\"/devices/GDC311ZBQ1.html\",\"title\":\"Tuya GDC311ZBQ1 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Tuya GDC311ZBQ1 control via MQTT\",\"description\":\"Integrate your Tuya GDC311ZBQ1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2022-04-03T11:58:11.000Z\"},\"filePathRelative\":\"devices/GDC311ZBQ1.md\"}");
var _sfc_main = { name: "GDC311ZBQ1.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "tuya-gdc311zbq1",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#tuya-gdc311zbq1"
		}, [createBaseVNode("span", null, "Tuya GDC311ZBQ1")])], -1)),
		createBaseVNode("table", null, [_cache[7] || (_cache[7] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "GDC311ZBQ1")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Tuya" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Tuya", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "LoraTap garage door opener with wireless sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "trigger, garage_door_contact")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/GDC311ZBQ1.png",
				alt: "Tuya GDC311ZBQ1"
			})])], -1)),
			_cache[6] || (_cache[6] = createBaseVNode("tr", null, [createBaseVNode("td", null, "White-label"), createBaseVNode("td", null, "LoraTap GDC311ZBQ1")], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"trigger-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#trigger-binary\"><span>Trigger (binary)</span></a></h3><p>Trigger the door movement. Value can be found in the published state on the <code>trigger</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trigger&quot;: VALUE}</code>. If value equals <code>true</code> trigger is ON, if <code>false</code> OFF.</p><h3 id=\"garage-door-contact-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#garage-door-contact-binary\"><span>Garage door contact (binary)</span></a></h3><p>Indicates if the garage door contact is closed (= true) or open (= false). Value can be found in the published state on the <code>garage_door_contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> garage door contact is ON, if <code>true</code> OFF.</p>", 5))
	]);
}
var GDC311ZBQ1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, GDC311ZBQ1_default as default };
