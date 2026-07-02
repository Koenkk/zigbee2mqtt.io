import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/4052899930377.md
var _pageData = JSON.parse("{\"path\":\"/devices/4052899930377.html\",\"title\":\"OSRAM 4052899930377 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"OSRAM 4052899930377 control via MQTT\",\"description\":\"Integrate your OSRAM 4052899930377 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2023-01-01T09:10:19.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":4},{\"name\":\"koenkk\",\"username\":\"koenkk\",\"email\":\"koenkanters94@gmail.com\",\"commits\":1,\"url\":\"https://github.com/koenkk\"}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"707d7e54d6545ef4745398da456aeb2977174d54\",\"time\":1738441259000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc 21.27.1\"},{\"hash\":\"e41c3889eb10d18e610e33d6a064e0ff0a08b3c9\",\"time\":1707249617000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update zhc to 18.28.3\"},{\"hash\":\"231d94d1da6c274f385dc0a286a574e3a3c43605\",\"time\":1684960025000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Generate some device notes (#2054)\"},{\"hash\":\"ae35d0278b303868c5ef90d907948f014dbfcc9f\",\"time\":1672565866000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 15.0.12\"}]},\"filePathRelative\":\"devices/4052899930377.md\"}");
var _sfc_main = { name: "4052899930377.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "osram-4052899930377",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#osram-4052899930377"
		}, [createBaseVNode("span", null, "OSRAM 4052899930377")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "4052899930377")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=OSRAM" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("OSRAM", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Lightify pro push button controller (PBC)")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/4052899930377.png",
				alt: "OSRAM 4052899930377"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-enum-l1-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum-l1-endpoint\"><span>Action (enum, l1 endpoint)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>hold</code>, <code>release</code>, <code>toggle</code>.</p><h3 id=\"action-enum-l2-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum-l2-endpoint\"><span>Action (enum, l2 endpoint)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>hold</code>, <code>release</code>, <code>toggle</code>.</p><h3 id=\"action-enum-l3-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum-l3-endpoint\"><span>Action (enum, l3 endpoint)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>hold</code>, <code>release</code>, <code>toggle</code>.</p><h3 id=\"action-enum-l4-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum-l4-endpoint\"><span>Action (enum, l4 endpoint)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action_l4</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>hold</code>, <code>release</code>, <code>toggle</code>.</p>", 9))
	]);
}
var _4052899930377_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, _4052899930377_default as default };
