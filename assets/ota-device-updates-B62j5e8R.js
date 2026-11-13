import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/guide/configuration/ota-device-updates.md
var _pageData = JSON.parse("{\"path\":\"/guide/configuration/ota-device-updates.html\",\"title\":\"OTA device firmware update\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\"},\"filePathRelative\":\"guide/configuration/ota-device-updates.md\"}");
var _sfc_main = { name: "ota-device-updates.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[6] || (_cache[6] = createBaseVNode("h1", {
			id: "ota-device-firmware-update",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#ota-device-firmware-update"
		}, [createBaseVNode("span", null, "OTA device firmware update")])], -1)),
		createBaseVNode("p", null, [
			_cache[1] || (_cache[1] = createTextVNode("Also see the ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("OTA firmware update usage guide", -1)])]),
				_: 1
			}),
			_cache[2] || (_cache[2] = createTextVNode(".", -1))
		]),
		_cache[7] || (_cache[7] = createStaticVNode("<div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token comment\"># Optional: OTA update settings</span></span>\n<span class=\"line\"><span class=\"token comment\"># See https://www.zigbee2mqtt.io/guide/usage/ota_updates.html for more info</span></span>\n<span class=\"line\"><span class=\"token key atrule\">ota</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token comment\"># Optional: Minimum time between OTA update checks</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">update_check_interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1440</span></span>\n<span class=\"line\">    <span class=\"token comment\"># Optional: Disable automatic update checks</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">disable_automatic_update_check</span><span class=\"token punctuation\">:</span> <span class=\"token boolean important\">false</span></span>\n<span class=\"line\">    <span class=\"token comment\"># Optional: Limits the rate of requests (in milliseconds) during OTA updates to reduce network congestion.</span></span>\n<span class=\"line\">    <span class=\"token comment\"># You can increase this value if your network appears unstable during OTA</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">image_block_response_delay</span><span class=\"token punctuation\">:</span> <span class=\"token number\">250</span></span>\n<span class=\"line\">    <span class=\"token comment\"># Optional: The size of file chunks sent during an update (in bytes).</span></span>\n<span class=\"line\">    <span class=\"token comment\"># Note: This value may get ignored for manufacturers that require specific values.</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">default_maximum_data_size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">50</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"ota-index-override-file\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-index-override-file\"><span>OTA Index override file</span></a></h2><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">ota</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">zigbee_ota_override_index_location</span><span class=\"token punctuation\">:</span> my_index.json</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>Value of this key is a file name in the configuration directory (next to <code>configuration.yaml</code>). The file name could be also a full path to the file, taking into account that host file system may not be available when running Zigbee2MQTT inside a docker container.</p><p>Alternatively, Zigbee2MQTT supports index files located on a remote HTTP(s) server. In this case <code>zigbee_ota_override_index_location</code> key should be an URL of the index file.</p>", 5)),
		createBaseVNode("p", null, [
			_cache[4] || (_cache[4] = createTextVNode("Please refer to ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("OTA firmware update usage guide", -1)])]),
				_: 1
			}),
			_cache[5] || (_cache[5] = createTextVNode(" for more details how Zigbee2MQTT fetches OTA images, how to add an image for a DIY device, or how to override official images with other ones.", -1))
		])
	]);
}
var ota_device_updates_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ota_device_updates_default as default };
