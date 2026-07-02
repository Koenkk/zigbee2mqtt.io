import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/SBBT-104CEU.md
var _pageData = JSON.parse("{\"path\":\"/devices/SBBT-104CEU.html\",\"title\":\"Shelly SBBT-104CEU control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Shelly SBBT-104CEU control via MQTT\",\"description\":\"Integrate your Shelly SBBT-104CEU via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-03-31T19:04:19.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Andrei LAZAROV\",\"username\":\"\",\"email\":\"andrei_lazarov@yahoo.com\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"934b222f1a779f20231d23c8d061cac3bbfec767\",\"time\":1774984782000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc to 26.27.0\"},{\"hash\":\"f9f3c90a3557d88e3c7f3c063083aae3f75fbfd2\",\"time\":1773297677000,\"email\":\"andrei_lazarov@yahoo.com\",\"author\":\"Andrei LAZAROV\",\"message\":\"Add info on Shelly remotes (#4898)\"}]},\"filePathRelative\":\"devices/SBBT-104CEU.md\"}");
var _sfc_main = { name: "SBBT-104CEU.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[14] || (_cache[14] = createBaseVNode("h1", {
			id: "shelly-sbbt-104ceu",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#shelly-sbbt-104ceu"
		}, [createBaseVNode("span", null, "Shelly SBBT-104CEU")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "SBBT-104CEU")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Shelly" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Shelly", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "BLU Wall Switch 4 ZB DK")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, identify, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/SBBT-104CEU.png",
				alt: "Shelly SBBT-104CEU"
			})])], -1))
		])]),
		_cache[15] || (_cache[15] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		_cache[16] || (_cache[16] = createBaseVNode("h3", {
			id: "related",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#related"
		}, [createBaseVNode("span", null, "Related")])], -1)),
		createBaseVNode("ul", null, [
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/devices/SBBT-004CEU.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("SBBT-004CEU", -1)])]),
				_: 1
			}), _cache[8] || (_cache[8] = createTextVNode(" - Shelly BLU Wall Switch 4 ZB", -1))]),
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/devices/SBBT-104CUS.html" }, {
				default: withCtx(() => [..._cache[9] || (_cache[9] = [createTextVNode("SBBT-104CUS", -1)])]),
				_: 1
			}), _cache[10] || (_cache[10] = createTextVNode(" - Shelly BLU RC Button 4 ZB", -1))]),
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/devices/SBBT-102C.html" }, {
				default: withCtx(() => [..._cache[11] || (_cache[11] = [createTextVNode("SBBT-102C", -1)])]),
				_: 1
			}), _cache[12] || (_cache[12] = createTextVNode(" - Shelly BLU Button Tough 1 ZB", -1))])
		]),
		_cache[17] || (_cache[17] = createStaticVNode("<h3 id=\"information\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#information\"><span>Information</span></a></h3><p>See all information on <a href=\"https://shelly-api-docs.shelly.cloud/docs-ble/Devices/BLU_ZB/button22_ZB\" target=\"_blank\" rel=\"noopener noreferrer\">Shelly API docs</a> (pairing, modes, bind actions, find&amp;bind).</p><h2 id=\"options\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options\"><span>Options</span></a></h2>", 3)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[13] || (_cache[13] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[18] || (_cache[18] = createStaticVNode("<ul><li><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>30</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"identify-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#identify-enum\"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>1_single</code>, <code>2_single</code>, <code>3_single</code>, <code>4_single</code>, <code>1_double</code>, <code>2_double</code>, <code>3_double</code>, <code>4_double</code>, <code>1_triple</code>, <code>2_triple</code>, <code>3_triple</code>, <code>4_triple</code>, <code>1_single_long</code>, <code>2_single_long</code>, <code>3_single_long</code>, <code>4_single_long</code>, <code>1_double_long</code>, <code>2_double_long</code>, <code>3_double_long</code>, <code>4_double_long</code>, <code>1_triple_long</code>, <code>2_triple_long</code>, <code>3_triple_long</code>, <code>4_triple_long</code>, <code>1_hold</code>, <code>2_hold</code>, <code>3_hold</code>, <code>4_hold</code>.</p>", 8))
	]);
}
var SBBT_104CEU_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, SBBT_104CEU_default as default };
