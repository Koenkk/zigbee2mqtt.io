import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/SNZB-06P.md
var _pageData = JSON.parse("{\"path\":\"/devices/SNZB-06P.html\",\"title\":\"SONOFF SNZB-06P control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"SONOFF SNZB-06P control via MQTT\",\"description\":\"Integrate your SONOFF SNZB-06P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2023-09-28T10:54:36.000Z\"},\"filePathRelative\":\"devices/SNZB-06P.md\"}");
var _sfc_main = { name: "SNZB-06P.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "sonoff-snzb-06p",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#sonoff-snzb-06p"
		}, [createBaseVNode("span", null, "SONOFF SNZB-06P")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "SNZB-06P")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=SONOFF" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("SONOFF", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee occupancy sensor")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "occupancy, occupancy_timeout, occupancy_sensitivity, illumination")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/SNZB-06P.png",
				alt: "SONOFF SNZB-06P"
			})])], -1))
		])]),
		_cache[12] || (_cache[12] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><p>Firmware 1.0.3 can be misbehaving, as of December 2023 upgrade to 1.0.5 is recommended.</p><p>Additional settings currently not exposed in Z2M can be adjusted via the Dev console:</p><h3 id=\"sensitivity\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#sensitivity\"><span>Sensitivity</span></a></h3><p>Select the msOccupancySensing Cluster, ultrasonicUToOThreshold Attribute is the sensitivity setting.</p><p>1 represents low sensitivity with a detection distance of 2.5m.<br> 2 represents medium sensitivity with a detection distance of 3.5m.<br> 3 represents high sensitivity with a detection distance of 4m.</p><h3 id=\"detection-duration\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#detection-duration\"><span>Detection duration</span></a></h3><p>Select the msOccupancySensing Cluster, ultrasonicOToUDelay is the detection duration setting.</p><p>On firmware versions lower than 1.0.5, the shortest detection duration is 30 (seconds), otherwise, the sensor will stay permanently on detected status.</p><p>Firmware version 1.0.5 and above allows setting the shortest detection duration to 15 (seconds).</p><p><a href=\"https://www.sonoff.in/blog/product-guides-3/snzb-06p-firmware-upgrade-and-home-assistant-operation-guide-111\" target=\"_blank\" rel=\"noopener noreferrer\">Source - Sonoff documentation</a></p><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 12)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(".", -1))
		]),
		_cache[13] || (_cache[13] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[14] || (_cache[14] = createStaticVNode("<ul><li><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be sent after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of numbers.</li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"occupancy-binary\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#occupancy-binary\"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id=\"occupancy-timeout-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#occupancy-timeout-numeric\"><span>Occupancy timeout (numeric)</span></a></h3><p>Occupied to unoccupied delay. Value can be found in the published state on the <code>occupancy_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_timeout&quot;: VALUE}</code>. The minimal value is <code>15</code> and the maximum value is <code>65535</code>.</p><h3 id=\"occupancy-sensitivity-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#occupancy-sensitivity-enum\"><span>Occupancy sensitivity (enum)</span></a></h3><p>Sensitivity of human presence detection. Value can be found in the published state on the <code>occupancy_sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_sensitivity&quot;: &quot;VALUE&quot;}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id=\"illumination-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#illumination-enum\"><span>Illumination (enum)</span></a></h3><p>Only updated when occupancy is detected. Value can be found in the published state on the <code>illumination</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>dim</code>, <code>bright</code>.</p>", 10))
	]);
}
var SNZB_06P_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, SNZB_06P_default as default };
