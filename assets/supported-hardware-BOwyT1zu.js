import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/guide/supported-hardware.md
var _pageData = JSON.parse("{\"path\":\"/guide/supported-hardware.html\",\"title\":\"Supported Hardware\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"next\":\"./adapters/\"},\"git\":{\"updatedTime\":1722278811000,\"contributors\":[{\"name\":\"Christoph Wiechert\",\"username\":\"\",\"email\":\"wio@psitrax.de\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":5},{\"name\":\"github-actions[bot]\",\"username\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/github-actions[bot]\"},{\"name\":\"Robin Kolk\",\"username\":\"\",\"email\":\"robinkolk@msn.com\",\"commits\":1},{\"name\":\"Burkhard Kneiseler\",\"username\":\"\",\"email\":\"burkhard@kneiseler.de\",\"commits\":1},{\"name\":\"Aleks\",\"username\":\"Aleks\",\"email\":\"nitro88@yandex.ru\",\"commits\":1,\"url\":\"https://github.com/Aleks\"},{\"name\":\"danieledwardgeorgehitchcock\",\"username\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\",\"commits\":1,\"url\":\"https://github.com/danieledwardgeorgehitchcock\"},{\"name\":\"Dirk van Donkelaar\",\"username\":\"\",\"email\":\"dirk@vdde.nl\",\"commits\":1},{\"name\":\"rodriguezst\",\"username\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/rodriguezst\"},{\"name\":\"mcmarto\",\"username\":\"mcmarto\",\"email\":\"mcmarto@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/mcmarto\"}],\"changelog\":[{\"hash\":\"f89e65dec7c1cbf82a5a0e1587e849cc98530e94\",\"time\":1722278811000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Implement prettier (automatic changes)\"},{\"hash\":\"6f4fb3ea57668a0f95eabb122dd5c2dbd853ca75\",\"time\":1639772414000,\"email\":\"mcmarto@users.noreply.github.com\",\"author\":\"mcmarto\",\"message\":\"Fixed some typos (#1080)\"},{\"hash\":\"00c0af2cc2a86ed9d271dc530265e0e9d8dc327a\",\"time\":1635697046000,\"email\":\"wio@psitrax.de\",\"author\":\"Christoph Wiechert\",\"message\":\"Newww Docu 😉 (#967)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Robin Kolk\",\"email\":\"robinkolk@msn.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koen.kanters@tno.nl\"},{\"name\":\"Burkhard Kneiseler\",\"email\":\"burkhard@kneiseler.de\"},{\"name\":\"Aleks\",\"email\":\"nitro88@yandex.ru\"},{\"name\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\"},{\"name\":\"Dirk van Donkelaar\",\"email\":\"dirk@vdde.nl\"},{\"name\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\"}]}]},\"filePathRelative\":\"guide/supported-hardware.md\"}");
var _sfc_main = { name: "supported-hardware.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[9] || (_cache[9] = createBaseVNode("h1", {
			id: "supported-hardware",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#supported-hardware"
		}, [createBaseVNode("span", null, "Supported Hardware")])], -1)),
		_cache[10] || (_cache[10] = createBaseVNode("h2", {
			id: "zigbee-adapters",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#zigbee-adapters"
		}, [createBaseVNode("span", null, "Zigbee Adapters")])], -1)),
		createBaseVNode("p", null, [
			_cache[2] || (_cache[2] = createTextVNode("Zigbee2MQTT supports a range of Adapters which enable communication with the Zigbee radio network. Most adapters are connected on a USB port but there are options to use GPIO-Pins or ", -1)),
			createVNode(_component_RouteLink, { to: "/advanced/remote-adapter/connect_to_a_remote_adapter.html" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("connect it remotely", -1)])]),
				_: 1
			}),
			_cache[3] || (_cache[3] = createTextVNode(" over TCP using a WIFI or Ethernet network. See the ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/adapters/" }, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("list of supported Zigbee Adapters", -1)])]),
				_: 1
			})
		]),
		_cache[11] || (_cache[11] = createBaseVNode("h2", {
			id: "zigbee-devices",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#zigbee-devices"
		}, [createBaseVNode("span", null, "Zigbee Devices")])], -1)),
		createBaseVNode("p", null, [
			_cache[6] || (_cache[6] = createTextVNode("Currently there are plenty of ", -1)),
			createVNode(_component_RouteLink, { to: "/supported-devices/" }, {
				default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("supported Zigbee Devices", -1)])]),
				_: 1
			}),
			_cache[7] || (_cache[7] = createTextVNode(" with a rising trend. If your device is not supported yet check out ", -1)),
			createVNode(_component_RouteLink, { to: "/advanced/support-new-devices/01_support_new_devices.html" }, {
				default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("how to support new devices", -1)])]),
				_: 1
			}),
			_cache[8] || (_cache[8] = createTextVNode(" and contribute to Zigbee2MQTT.", -1))
		])
	]);
}
var supported_hardware_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, supported_hardware_default as default };
