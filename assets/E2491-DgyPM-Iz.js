import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/E2491.md
var _pageData = JSON.parse("{\"path\":\"/devices/E2491.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"redirectTo\":\"/devices/E2435_E2491.md\",\"head\":[[\"script\",{},\"{const anchor = window.location.hash.slice(1);window.location.replace(`/devices/E2435_E2491.html${anchor? `#${anchor}`: \\\"\\\"}`);}\"]]},\"filePathRelative\":\"devices/E2491.md\"}");
var _sfc_main = { name: "E2491.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[3] || (_cache[3] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p>You must go through this sequence to pair the plug:</p><ol><li><strong>Hold the button until the LED flashes red and then stops (~10 seconds) to perform a factory reset.</strong><br> The plug is now in Thread pairing mode</li><li><strong>Press the button 4 times</strong></li><li><strong>Press the button 8 times.</strong><br> The plug is now in Zigbee pairing mode</li></ol>", 4)),
		createBaseVNode("p", null, [
			_cache[1] || (_cache[1] = createTextVNode("Alternatively, reset it with ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/touchlink.html" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Touchlink", -1)])]),
				_: 1
			}),
			_cache[2] || (_cache[2] = createTextVNode(".", -1))
		]),
		_cache[4] || (_cache[4] = createStaticVNode("<h3 id=\"firmware\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#firmware\"><span>Firmware</span></a></h3><ul><li>Initial batches come with v1.3.11 (20250827) preinstalled</li><li>Updates are provided over Matter.<br> Move the device to a Thread hub to update</li><li>See the available versions <a href=\"https://webui.dcl.csa-iot.org/models\" target=\"_blank\" rel=\"noopener noreferrer\">here</a> (search <em>GRILLPLATS</em> or <em>4476</em>)</li></ul>", 2))
	]);
}
var E2491_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, E2491_default as default };
