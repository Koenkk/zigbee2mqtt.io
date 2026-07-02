import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/guide/usage/integrations/openhab.md
var _pageData = JSON.parse("{\"path\":\"/guide/usage/integrations/openhab.html\",\"title\":\"openHAB\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"sidebar\":\"auto\"},\"git\":{\"updatedTime\":1722278811000,\"contributors\":[{\"name\":\"Carsten Mogge\",\"username\":\"\",\"email\":\"carsten.mogge@gmail.com\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"f89e65dec7c1cbf82a5a0e1587e849cc98530e94\",\"time\":1722278811000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Implement prettier (automatic changes)\"},{\"hash\":\"a4d20ffb72ebeed3b0bbe33418aec7d2e1ca7255\",\"time\":1650352422000,\"email\":\"carsten.mogge@gmail.com\",\"author\":\"Carsten Mogge\",\"message\":\"Support for Z2M-setup now integrated in openhabian (#1332)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]}]},\"filePathRelative\":\"guide/usage/integrations/openhab.md\"}");
var _sfc_main = { name: "openhab.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[3] || (_cache[3] = createBaseVNode("h1", {
			id: "openhab",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#openhab"
		}, [createBaseVNode("span", null, "openHAB")])], -1)),
		_cache[4] || (_cache[4] = createBaseVNode("p", null, [
			createTextVNode("For examples how to integrate your Zigbee devices see this "),
			createBaseVNode("a", {
				href: "https://community.openhab.org/t/zigbee2mqtt-revisited-no-more-ugly-transformations/86362",
				target: "_blank",
				rel: "noopener noreferrer"
			}, "community thread"),
			createTextVNode(".")
		], -1)),
		createBaseVNode("p", null, [
			_cache[1] || (_cache[1] = createTextVNode("In case you are using openHABian see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/installation/04_openhabian.html" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("this", -1)])]),
				_: 1
			}),
			_cache[2] || (_cache[2] = createTextVNode(" for the recommended way to install.", -1))
		])
	]);
}
var openhab_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, openhab_default as default };
