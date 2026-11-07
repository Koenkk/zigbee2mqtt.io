import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/images/zigate_usb_ttl.png
var zigate_usb_ttl_default = "/assets/zigate_usb_ttl-DN1YW54P.png";
// docs/guide/adapters/zigate.md
var _pageData = JSON.parse("{\"path\":\"/guide/adapters/zigate.html\",\"title\":\"ZiGate adapters\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\"},\"filePathRelative\":\"guide/adapters/zigate.md\"}");
var _sfc_main = { name: "zigate.md" };
var _hoisted_1 = { class: "hint-container warning" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[17] || (_cache[17] = createBaseVNode("h1", {
			id: "zigate-adapters",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#zigate-adapters"
		}, [createBaseVNode("span", null, "ZiGate adapters")])], -1)),
		_cache[18] || (_cache[18] = createBaseVNode("div", { class: "hint-container warning" }, [createBaseVNode("p", { class: "hint-container-title" }, "Warning"), createBaseVNode("p", null, [
			createTextVNode("The implementation of this adapter is "),
			createBaseVNode("strong", null, "not maintained"),
			createTextVNode(" anymore. Consider buying one of the recommended adapters instead.")
		])], -1)),
		createBaseVNode("div", _hoisted_1, [
			_cache[8] || (_cache[8] = createBaseVNode("p", { class: "hint-container-title" }, "Warning", -1)),
			_cache[9] || (_cache[9] = createBaseVNode("p", null, "Various features are not supported by this adapter, in case you depend on these features, consider a different adapter.", -1)),
			createBaseVNode("ul", null, [
				createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/zigbee-network.html#changing-the-zigbee-channel" }, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Changing the channel", -1)])]),
					_: 1
				}), _cache[1] || (_cache[1] = createTextVNode(", changing requires re-pairing all devices.", -1))]),
				createBaseVNode("li", null, [
					_cache[3] || (_cache[3] = createTextVNode("Adding ", -1)),
					createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-install-code-add" }, {
						default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("install codes", -1)])]),
						_: 1
					}),
					_cache[4] || (_cache[4] = createTextVNode(", which is required to pair some devices.", -1))
				]),
				createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-backup" }, {
					default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("Backups", -1)])]),
					_: 1
				})]),
				createBaseVNode("li", null, [_cache[7] || (_cache[7] = createTextVNode("Inter-PAN, which is required for ", -1)), createVNode(_component_RouteLink, { to: "/guide/usage/touchlink.html" }, {
					default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode("touchlink", -1)])]),
					_: 1
				})])
			])
		]),
		_cache[19] || (_cache[19] = createStaticVNode("<p>Initial development started on experimental (alpha stage) support for various ZigGate adapters. This includes all ZiGate compatible hardware adapters which are currently based on NXP Zigbee MCU chips like JN5168 and JN5169 with ZigGate 3.1d firmware or later.</p><h3 id=\"configuration\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#configuration\"><span>Configuration</span></a></h3><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">serial</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">adapter</span><span class=\"token punctuation\">:</span> zigate</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>", 3)),
		createBaseVNode("p", null, [
			_cache[11] || (_cache[11] = createTextVNode("Other supported settings are: ", -1)),
			_cache[12] || (_cache[12] = createBaseVNode("code", null, "adapter_concurrent", -1)),
			_cache[13] || (_cache[13] = createTextVNode(" and ", -1)),
			_cache[14] || (_cache[14] = createBaseVNode("code", null, "transmit_power", -1)),
			_cache[15] || (_cache[15] = createTextVNode(" (", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/adapter-settings.html" }, {
				default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("docs", -1)])]),
				_: 1
			}),
			_cache[16] || (_cache[16] = createTextVNode(").", -1))
		]),
		_cache[20] || (_cache[20] = createStaticVNode("<h2 id=\"hardware\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#hardware\"><span>Hardware</span></a></h2><ul><li><a href=\"https://zigate.fr/tag/firmware/\" target=\"_blank\" rel=\"noopener noreferrer\">Coordinator firmware</a></li><li><a href=\"https://github.com/Koenkk/zigbee-herdsman/issues/242\" target=\"_blank\" rel=\"noopener noreferrer\">Discussion</a></li><li><a href=\"https://zigate.fr/boutique/?orderby=date_desc\" target=\"_blank\" rel=\"noopener noreferrer\">Buy</a></li></ul><img src=\"" + zigate_usb_ttl_default + "\" width=\"200\">", 3))
	]);
}
var zigate_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, zigate_default as default };
