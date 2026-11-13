import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/guide/usage/pairing_devices.md
var _pageData = JSON.parse("{\"path\":\"/guide/usage/pairing_devices.html\",\"title\":\"Allowing devices to join\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"redirectFrom\":\"/getting_started/pairing_devices.md\"},\"filePathRelative\":\"guide/usage/pairing_devices.md\"}");
var _sfc_main = { name: "pairing_devices.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createStaticVNode("<h1 id=\"allowing-devices-to-join\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#allowing-devices-to-join\"><span>Allowing devices to join</span></a></h1><p>To allow devices to join the network, joining has to be permitted. There are various ways to do this:</p><h3 id=\"frontend\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#frontend\"><span>Frontend</span></a></h3><p>Enabling joining via the frontend will open the network for 254 seconds. The joining button can be found at the top right of the navigation bar, and also be used to close the network manually before the end of the timer.</p><h4 id=\"pairing-via-a-specific-device\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing-via-a-specific-device\"><span>Pairing via a specific device</span></a></h4><p>To the right of <code>Permit join (All)</code> button is an arrow pointing down. This will allow you to pick the coordinator, or any router to join from specifically, instead of letting the device chose on its own. That is not a guarantee the router will be chosen (or remain long-term). However, this can be useful for devices that are awkward in router selection, like Aqara, or when wanting to link a switch to a light bulb.</p><h3 id=\"mqtt\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#mqtt\"><span>MQTT</span></a></h3>", 7)),
		createBaseVNode("p", null, [
			_cache[1] || (_cache[1] = createTextVNode("The ", -1)),
			_cache[2] || (_cache[2] = createBaseVNode("code", null, "zigbee2mqtt/bridge/request/permit_join", -1)),
			_cache[3] || (_cache[3] = createTextVNode(" MQTT topic can be used to enable joining. See ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-permit-join" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("MQTT topic and messages", -1)])]),
				_: 1
			}),
			_cache[4] || (_cache[4] = createTextVNode(" for more information.", -1))
		]),
		_cache[12] || (_cache[12] = createBaseVNode("h2", {
			id: "pairing",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#pairing"
		}, [createBaseVNode("span", null, "Pairing")])], -1)),
		createBaseVNode("p", null, [
			_cache[6] || (_cache[6] = createTextVNode("First check if the device page (", -1)),
			createVNode(_component_RouteLink, { to: "/supported-devices/" }, {
				default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("Supported devices", -1)])]),
				_: 1
			}),
			_cache[7] || (_cache[7] = createTextVNode(", click on the model number) contains instructions on how to pair your device.", -1))
		]),
		_cache[13] || (_cache[13] = createStaticVNode("<p>If no instructions are available, the device can probably be paired by factory resetting it.</p><p>Once you see something similar to below in the log your device is paired.</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed &#39;0x00158d0001dc126a&#39;, device has successfully been paired</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div></div></div>", 3)),
		createBaseVNode("p", null, [
			_cache[9] || (_cache[9] = createTextVNode("In case there are issues when pairing, see the ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/faq/#why-does-my-device-not-or-fail-to-pair" }, {
				default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("FAQ", -1)])]),
				_: 1
			}),
			_cache[10] || (_cache[10] = createTextVNode(" for possible fixes.", -1))
		])
	]);
}
var pairing_devices_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, pairing_devices_default as default };
