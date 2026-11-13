import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/guide/adapters/zboss.md
var _pageData = JSON.parse("{\"path\":\"/guide/adapters/zboss.html\",\"title\":\"ZBOSS adapters\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\"},\"filePathRelative\":\"guide/adapters/zboss.md\"}");
var _sfc_main = { name: "zboss.md" };
var _hoisted_1 = { class: "hint-container warning" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[17] || (_cache[17] = createBaseVNode("h1", {
			id: "zboss-adapters",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#zboss-adapters"
		}, [createBaseVNode("span", null, "ZBOSS adapters")])], -1)),
		_cache[18] || (_cache[18] = createBaseVNode("div", { class: "hint-container warning" }, [createBaseVNode("p", { class: "hint-container-title" }, "Warning"), createBaseVNode("p", null, [
			createTextVNode("Support for this adapter is "),
			createBaseVNode("strong", null, "experimental"),
			createTextVNode(", not yet recommended for production setups")
		])], -1)),
		createBaseVNode("div", _hoisted_1, [
			_cache[8] || (_cache[8] = createBaseVNode("p", { class: "hint-container-title" }, "Warning", -1)),
			_cache[9] || (_cache[9] = createBaseVNode("p", null, "Currently, this adapter does not support various functions, so if you depend on these functions, consider using a different adapter.", -1)),
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
		_cache[19] || (_cache[19] = createStaticVNode("<p>The adapter for the ZBOSS protocol is based on the example of ZBOSS NCP Host <a href=\"https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/zigbee/ncp/README.html\" target=\"_blank\" rel=\"noopener noreferrer\">Zigbee NCP (Network Co-Processor)</a> for Nordic Semiconductor chips, such as nRF5340, nRF52840, nRF52833, nRF21540.</p><p>Also, thanks to the special firmware https://github.com/tostmann/esp-coordinator, ZBOSS protocol can be used to interact with the Espressif ESP32-C6/H2 chips.</p><p>The interaction between the chip and the host occurs according to <a href=\"https://cloud.dsr-corporation.com/index.php/s/BAn4LtRWbJjFiAm\" target=\"_blank\" rel=\"noopener noreferrer\">ZBOSS NCP Serial Protocol</a>.</p><p>The adapter code is based on the <a href=\"https://github.com/kardia-as/zigpy-zboss\" target=\"_blank\" rel=\"noopener noreferrer\">zigpy-zboss library</a>.</p><h3 id=\"configuration\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#configuration\"><span>Configuration</span></a></h3><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">serial</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">adapter</span><span class=\"token punctuation\">:</span> zboss</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>", 6)),
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
		_cache[20] || (_cache[20] = createStaticVNode("<h2 id=\"hardware\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#hardware\"><span>Hardware</span></a></h2><p>Currently tested on nRF52840 Dongle, Nice!Nano v2 (nRF52840) and ESP32-C6/H2 devboards.</p><ul><li><a href=\"https://github.com/kardia-as/nrf-zboss-ncp\" target=\"_blank\" rel=\"noopener noreferrer\">Pre build coordinator firmware for Nordic Semiconductor with nRF52840 SoC</a></li></ul><img src=\"https://docs-be.nordicsemi.com/bundle/ncs-latest/page/nrf/_images/zigbee_ncp_sample_overview.svg\" width=\"500\"><ul><li><a href=\"https://github.com/captainlettuce/zboss_adapter_nice_nano_v2\" target=\"_blank\" rel=\"noopener noreferrer\">Pre build coordinator firmware for Nice!Nano v2 with nRF52840 SoC</a></li></ul><img alt=\"Nice!Nano v2\" src=\"https://github.com/user-attachments/assets/db2f3041-e36c-4921-b078-7cf0236eeae3\" width=\"75\"><ul><li><a href=\"https://github.com/tostmann/esp-coordinator\" target=\"_blank\" rel=\"noopener noreferrer\">ESP32-C6 firmware</a> — actively maintained successor of the original <code>andryblack/esp-coordinator</code> (which is archived and points there); a <a href=\"https://install.busware.de/zboss/\" target=\"_blank\" rel=\"noopener noreferrer\">browser-based web flasher</a> is available</li></ul><img src=\"https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32c6/_images/esp32-c6-devkitc-1-isometric_v1.2.png\" width=\"200\">", 8))
	]);
}
var zboss_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, zboss_default as default };
