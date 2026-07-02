import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/EFR32MG21.Router.2.md
var _pageData = JSON.parse("{\"path\":\"/devices/EFR32MG21.Router.2.html\",\"title\":\"Custom devices (DiY) EFR32MG21.Router.2 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Custom devices (DiY) EFR32MG21.Router.2 control via MQTT\",\"description\":\"Integrate your Custom devices (DiY) EFR32MG21.Router.2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2024-11-30T20:27:20.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"BWFCGUIXT\",\"username\":\"BWFCGUIXT\",\"email\":\"93317663+BWFCGUIXT@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/BWFCGUIXT\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":7},{\"name\":\"koenkk\",\"username\":\"koenkk\",\"email\":\"koenkanters94@gmail.com\",\"commits\":1,\"url\":\"https://github.com/koenkk\"}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"707d7e54d6545ef4745398da456aeb2977174d54\",\"time\":1738441259000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc 21.27.1\"},{\"hash\":\"602f4ec6931c44d3c0eb8482feb4f8bed70883f5\",\"time\":1732999577000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc\"},{\"hash\":\"e41c3889eb10d18e610e33d6a064e0ff0a08b3c9\",\"time\":1707249617000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"koenkk\",\"message\":\"Update zhc to 18.28.3\"},{\"hash\":\"231d94d1da6c274f385dc0a286a574e3a3c43605\",\"time\":1684960025000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Generate some device notes (#2054)\"},{\"hash\":\"c142abdf3c5317f50b268dff51faa50d4dff89fb\",\"time\":1668967366000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Run docgen\"},{\"hash\":\"814c2873d417e7304e03a65fb55e2f3a688ac596\",\"time\":1667328882000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 14.0.657\"},{\"hash\":\"922e664f7f8f599b04c3313588dca4d1e8ca365e\",\"time\":1667028882000,\"email\":\"93317663+BWFCGUIXT@users.noreply.github.com\",\"author\":\"BWFCGUIXT\",\"message\":\"EFR32MG21.Router (#1661)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]}]},\"filePathRelative\":\"devices/EFR32MG21.Router.2.md\"}");
var _sfc_main = { name: "EFR32MG21.Router.2.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[7] || (_cache[7] = createBaseVNode("h1", {
			id: "custom-devices-diy-efr32mg21-router-2",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#custom-devices-diy-efr32mg21-router-2"
		}, [createBaseVNode("span", null, "Custom devices (DiY) EFR32MG21.Router.2")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "EFR32MG21.Router.2")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Custom%20devices%20(DiY)" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Custom devices (DiY)", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "EFR32MG21 router")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/EFR32MG21.Router.2.png",
				alt: "Custom devices (DiY) EFR32MG21.Router.2"
			})])], -1))
		])]),
		_cache[8] || (_cache[8] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"led-status\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#led-status\"><span>LED status</span></a></h3><p>RED LED off = No network RED LED blink = Connecting to the network RED LED on = Joined to the network</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><ol><li>Power on</li><li>Press BOOT for 5 seconds until the RED LED flashes.</li><li>Coordinator allows access to the network.</li><li>If the RED LED is always on, then the router has joined the network successfully.</li></ol><h3 id=\"firmware\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#firmware\"><span>Firmware</span></a></h3><p>Firmware can be used with Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E and easyiot Zigbee 3.0 USB dongle.</p><p>Link: https://github.com/xsp1989/zigbeeFirmware/tree/master/firmware/Zigbee3.0_Dongle-NoSigned/RouterForDongle</p><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2>", 9))
	]);
}
var EFR32MG21_Router_2_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, EFR32MG21_Router_2_default as default };
