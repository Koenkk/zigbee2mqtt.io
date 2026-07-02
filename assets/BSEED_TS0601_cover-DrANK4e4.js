import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/BSEED_TS0601_cover.md
var _pageData = JSON.parse("{\"path\":\"/devices/BSEED_TS0601_cover.html\",\"title\":\"BSEED BSEED_TS0601_cover control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"BSEED BSEED_TS0601_cover control via MQTT\",\"description\":\"Integrate your BSEED BSEED_TS0601_cover via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2022-06-20T12:58:50.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Daniel D\",\"username\":\"\",\"email\":\"danieldelnaaij@gmail.com\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":6},{\"name\":\"rbenhass\",\"username\":\"rbenhass\",\"email\":\"71922981+rbenhass@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/rbenhass\"},{\"name\":\"Rotzbua\",\"username\":\"Rotzbua\",\"email\":\"Rotzbua@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Rotzbua\"},{\"name\":\"koenkk\",\"username\":\"koenkk\",\"email\":\"koenkanters94@gmail.com\",\"commits\":1,\"url\":\"https://github.com/koenkk\"}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"707d7e54d6545ef4745398da456aeb2977174d54\",\"time\":1738441259000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc 21.27.1\"},{\"hash\":\"e41c3889eb10d18e610e33d6a064e0ff0a08b3c9\",\"time\":1707249617000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update zhc to 18.28.3\"},{\"hash\":\"bf045b577104032dc4141f4d898f8bb40d9aeb81\",\"time\":1699214753000,\"email\":\"Rotzbua@users.noreply.github.com\",\"author\":\"Rotzbua\",\"message\":\"fix(typo): correct misspell (#2306)\"},{\"hash\":\"231d94d1da6c274f385dc0a286a574e3a3c43605\",\"time\":1684960025000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Generate some device notes (#2054)\"},{\"hash\":\"c142abdf3c5317f50b268dff51faa50d4dff89fb\",\"time\":1668967366000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Run docgen\"},{\"hash\":\"a1c55b5a97808c1211d1a69e4bfb2a36b0af034c\",\"time\":1656686197000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 14.0.559\"},{\"hash\":\"70eafe212c83622cca608d68fca46a9216e48b95\",\"time\":1655821416000,\"email\":\"71922981+rbenhass@users.noreply.github.com\",\"author\":\"rbenhass\",\"message\":\"Add Image and doc for BSEED curtain switch (#1443)\"},{\"hash\":\"f402ed8d8faf1daa7382ea4cf5e665b713977408\",\"time\":1654097612000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 14.0.533\"},{\"hash\":\"ac2e7fb89a457c228f065522669429aa7836a857\",\"time\":1653401422000,\"email\":\"danieldelnaaij@gmail.com\",\"author\":\"Daniel D\",\"message\":\"Add Somgoms SM-1CTW-EU switch cover (#1386)\"}]},\"filePathRelative\":\"devices/BSEED_TS0601_cover.md\"}");
var _sfc_main = { name: "BSEED_TS0601_cover.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "bseed-bseed-ts0601-cover",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#bseed-bseed-ts0601-cover"
		}, [createBaseVNode("span", null, "BSEED BSEED_TS0601_cover")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "BSEED_TS0601_cover")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=BSEED" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("BSEED", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Zigbee curtain switch")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "cover (state, position)")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/BSEED_TS0601_cover.png",
				alt: "BSEED BSEED_TS0601_cover"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>Press down and set simultaneously until LED flashes red.</p><h3 id=\"calibration\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#calibration\"><span>Calibration</span></a></h3><p>Calibration can be done manually by pressing and holding pause button until it start blinking then press open and wait the time needed then press open again.</p><h2 id=\"options\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#options\"><span>Options</span></a></h2>", 6)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"cover\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cover\"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p>", 4))
	]);
}
var BSEED_TS0601_cover_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, BSEED_TS0601_cover_default as default };
