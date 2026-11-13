import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/images/conbee.jpg
var conbee_default = "/assets/conbee-C8X3sHjA.jpg";
// docs/guide/adapters/deconz.md
var _pageData = JSON.parse("{\"path\":\"/guide/adapters/deconz.html\",\"title\":\"deCONZ (Dresden Elektronik)\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\"},\"filePathRelative\":\"guide/adapters/deconz.md\"}");
var _sfc_main = { name: "deconz.md" };
var _hoisted_1 = { class: "hint-container warning" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[14] || (_cache[14] = createBaseVNode("h1", {
			id: "deconz-dresden-elektronik",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#deconz-dresden-elektronik"
		}, [createBaseVNode("span", null, "deCONZ (Dresden Elektronik)")])], -1)),
		createBaseVNode("div", _hoisted_1, [
			_cache[7] || (_cache[7] = createBaseVNode("p", { class: "hint-container-title" }, "Warning", -1)),
			_cache[8] || (_cache[8] = createBaseVNode("p", null, "Various features are not supported by this adapter, in case you depend on these features, consider a different adapter.", -1)),
			createBaseVNode("ul", null, [
				createBaseVNode("li", null, [_cache[1] || (_cache[1] = createTextVNode("Inter-PAN, which is required for ", -1)), createVNode(_component_RouteLink, { to: "/guide/usage/touchlink.html" }, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("touchlink", -1)])]),
					_: 1
				})]),
				createBaseVNode("li", null, [_cache[3] || (_cache[3] = createTextVNode("Lowering the ", -1)), createVNode(_component_RouteLink, { to: "/guide/configuration/adapter-settings.html" }, {
					default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("transmit power", -1)])]),
					_: 1
				})]),
				_cache[6] || (_cache[6] = createBaseVNode("li", null, [createTextVNode("ConBee II (and possibly RaspBee II) "), createBaseVNode("a", {
					href: "https://github.com/Koenkk/zigbee2mqtt/issues/28041",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "may exhibit network connectivity issues (MacNoAck)")], -1)),
				createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-install-code-add" }, {
					default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Install codes", -1)])]),
					_: 1
				}), _cache[5] || (_cache[5] = createTextVNode(" support requires recent coordinator firmware. This is required to pair some devices.", -1))])
			])
		]),
		_cache[15] || (_cache[15] = createStaticVNode("<h3 id=\"configuration\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#configuration\"><span>Configuration</span></a></h3><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">serial</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">adapter</span><span class=\"token punctuation\">:</span> deconz</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>", 2)),
		createBaseVNode("p", null, [
			_cache[10] || (_cache[10] = createTextVNode("Other supported settings are: ", -1)),
			_cache[11] || (_cache[11] = createBaseVNode("code", null, "baudrate", -1)),
			_cache[12] || (_cache[12] = createTextVNode(" (", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/adapter-settings.html" }, {
				default: withCtx(() => [..._cache[9] || (_cache[9] = [createTextVNode("docs", -1)])]),
				_: 1
			}),
			_cache[13] || (_cache[13] = createTextVNode(").", -1))
		]),
		_cache[16] || (_cache[16] = createStaticVNode("<h2 id=\"hardware\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#hardware\"><span>Hardware</span></a></h2><p>ConBee / ConBee II / ConBee III / RaspBee / RaspBee II</p><p>USB connected adapters (ConBee / ConBee II / ConBee III) and Raspberry Pi GPIO modules (RaspBee and RaspBee II).</p><p>Add the correct baudrate to the <code>configuration.yaml</code> into the serial section.</p><ul><li>For ConBee2: specifying the baudrate is not necessary</li><li>For Conbee and RaspBee2 it is 38400</li><li>For ConBee3 it is 115200</li></ul><p>The latest stable firmware versions are recommended and listed in the <a href=\"https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Firmware-Changelog\" target=\"_blank\" rel=\"noopener noreferrer\">firmware changelog</a>.</p><ul><li><a href=\"https://deconz.dresden-elektronik.de/deconz-firmware/\" target=\"_blank\" rel=\"noopener noreferrer\">Coordinator firmware</a></li><li><a href=\"https://phoscon.de/updater/#productselect\" target=\"_blank\" rel=\"noopener noreferrer\">Flashing tool</a> (Only Conbee 3 and FLS-M)</li><li><a href=\"https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/Update-deCONZ-manually\" target=\"_blank\" rel=\"noopener noreferrer\">Flashing</a></li><li><a href=\"https://phoscon.de/conbee2#buy\" target=\"_blank\" rel=\"noopener noreferrer\">Buy</a> (ConBee II)</li><li><a href=\"https://phoscon.de/conbee3#buy\" target=\"_blank\" rel=\"noopener noreferrer\">Buy</a> (ConBee III)</li><li><a href=\"https://phoscon.de/raspbee2#buy\" target=\"_blank\" rel=\"noopener noreferrer\">Buy</a> (RaspBee II)</li></ul><img src=\"" + conbee_default + "\" width=\"200\">", 8))
	]);
}
var deconz_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, deconz_default as default };
