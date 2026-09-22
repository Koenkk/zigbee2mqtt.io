import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-D6Jmich1.js";
import { t as _plugin_vue_export_helper_default } from "./app-DRb3XOJL.js";
//#region docs/devices/TS0601_contact_sensor_2.md
var _pageData = JSON.parse("{\"path\":\"/devices/TS0601_contact_sensor_2.html\",\"title\":\"Tuya TS0601_contact_sensor_2 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Tuya TS0601_contact_sensor_2 control via MQTT\",\"description\":\"Integrate your Tuya TS0601_contact_sensor_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-09-22T09:21:02.805Z\"},\"git\":{\"updatedTime\":1790097417000,\"contributors\":[{\"name\":\"Sebastian Chilcott\",\"username\":\"\",\"email\":\"chilcott@outlook.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"faca5d45fc2095c99fdb0a7e51c82c133d630b9f\",\"time\":1790097417000,\"email\":\"chilcott@outlook.com\",\"author\":\"Sebastian Chilcott\",\"message\":\"Add device picture for TS0601_contact_sensor_2 (_TZE284_wpxq7vnb) (#5544)\"}]},\"filePathRelative\":\"devices/TS0601_contact_sensor_2.md\"}");
var _sfc_main = { name: "TS0601_contact_sensor_2.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "tuya-ts0601-contact-sensor-2",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#tuya-ts0601-contact-sensor-2"
		}, [createBaseVNode("span", null, "Tuya TS0601_contact_sensor_2")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "TS0601_contact_sensor_2")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Tuya" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Tuya", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Door/window contact sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "contact, battery")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/TS0601_contact_sensor_2.png",
				alt: "Tuya TS0601_contact_sensor_2"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><p>Sold e.g. as the XNY door/window sensor with beeper (model <code>XNY-B01-ZB-2</code>). Tested on two physical units.</p><p>This device does not report state spontaneously after pairing. It joins the network and responds to standard Zigbee reads normally, but the Tuya datapoint channel stays silent until the coordinator explicitly queries it. Without that query, the device looks paired but never updates <code>contact</code> or <code>battery</code>, even across repeated factory resets and battery swaps. The converter handles this automatically (<code>queryOnConfigure</code>), but if you re-flash or hand-roll a converter for this manufacturer ID, make sure to keep that query in place.</p><p>The product also advertises a built-in siren/alarm with adjustable volume and duration, controllable from the Tuya/Smart Life app. That functionality is intentionally <strong>not</strong> exposed here: two additional datapoints do report live values in sync with the contact, but their actual meaning could not be determined, and no alarm/volume/duration datapoint was found. Multiple user reviews of this product report the same limitation (alarm and full functionality only work through the Tuya app, not over a generic Zigbee coordinator), so it&#39;s possible those controls aren&#39;t reachable outside Tuya&#39;s own ecosystem at all.</p><h2 id=\"options\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options\"><span>Options</span></a></h2>", 5)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>time_start</code>: Reply to Tuya-specific time synchronization requests: &quot;1970&quot; - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), &quot;2000&quot; - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), &quot;off&quot; - Don&#39;t reply (use if replying causes too much traffic). Default for this device: &quot;off&quot;. The value must be one of <code>1970</code>, <code>2000</code>, <code>off</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"contact-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#contact-binary\"><span>Contact (binary)</span></a></h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>", 6))
	]);
}
var TS0601_contact_sensor_2_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, TS0601_contact_sensor_2_default as default };
