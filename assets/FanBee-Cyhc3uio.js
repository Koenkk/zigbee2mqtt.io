import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/FanBee.md
var _pageData = JSON.parse("{\"path\":\"/devices/FanBee.html\",\"title\":\"Lorenz Brun FanBee control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Lorenz Brun FanBee control via MQTT\",\"description\":\"Integrate your Lorenz Brun FanBee via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-03-01T20:31:41.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3},{\"name\":\"Lorenz Brun\",\"username\":\"\",\"email\":\"lorenz@brun.one\",\"commits\":1}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"7e8e5c269c3198e10e5be1ee9a0b138873967e30\",\"time\":1754062598000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 24.11.0\"},{\"hash\":\"2c838e29b24095f79bca2cb3d7e3f22a9e90e617\",\"time\":1753984445000,\"email\":\"lorenz@brun.one\",\"author\":\"Lorenz Brun\",\"message\":\"Update FanBee.md (#3986)\"},{\"hash\":\"6f506cd18543bb842a6c3fcd0e5cb468a8d40d6f\",\"time\":1740861182000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.2.0\"}]},\"filePathRelative\":\"devices/FanBee.md\"}");
var _sfc_main = { name: "FanBee.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "lorenz-brun-fanbee",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#lorenz-brun-fanbee"
		}, [createBaseVNode("span", null, "Lorenz Brun FanBee")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "FanBee")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Lorenz%20Brun" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Lorenz Brun", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Fan with valve")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "fan (state, speed)")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/FanBee.png",
				alt: "Lorenz Brun FanBee"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		_cache[10] || (_cache[10] = createBaseVNode("p", null, "The design is open-source, docs for building and using this can be found at https://github.com/lorenz/fanbee.", -1)),
		_cache[11] || (_cache[11] = createBaseVNode("h2", {
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
		_cache[12] || (_cache[12] = createStaticVNode("<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"fan\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#fan\"><span>Fan</span></a></h3><p>The current state of this fan is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code> or <code>{&quot;state&quot;: &quot;OFF&quot;}</code>. To read the current state of this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p>", 4))
	]);
}
var FanBee_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, FanBee_default as default };
