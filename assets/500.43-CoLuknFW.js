import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/500.43.md
var _pageData = JSON.parse("{\"path\":\"/devices/500.43.html\",\"title\":\"Paulmann 500.43 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Paulmann 500.43 control via MQTT\",\"description\":\"Integrate your Paulmann 500.43 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-04-01T18:29:09.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"SkyBeam\",\"username\":\"SkyBeam\",\"email\":\"rainer.meier@gmail.com\",\"commits\":1,\"url\":\"https://github.com/SkyBeam\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"7fecb4295cc84ff50f35d4450bad1d971ff8644f\",\"time\":1746123337000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.36.0\"},{\"hash\":\"d39247b979aab27a5f9d13c111e06babe2904610\",\"time\":1743532928000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 23.18.0\"},{\"hash\":\"63ae4b5cad5220018f306609fffd5c4b9025a884\",\"time\":1740949903000,\"email\":\"rainer.meier@gmail.com\",\"author\":\"SkyBeam\",\"message\":\"feat: add Paulmann 500.43 Zigbee 3.0 relay. (#3560)\"}]},\"filePathRelative\":\"devices/500.43.md\"}");
var _sfc_main = { name: "500.43.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "paulmann-500-43",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#paulmann-500-43"
		}, [createBaseVNode("span", null, "Paulmann 500.43")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "500.43")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Paulmann" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Paulmann", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "SmartHome controller (Relay)")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "switch (state)")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/500.43.png",
				alt: "Paulmann 500.43"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createBaseVNode("p", null, [
			createTextVNode("Paulmann Zigbee 3.0 Controller (relay). Manufacturer web page "),
			createBaseVNode("a", {
				href: "https://ch.paulmann.com/de/p/controller-smart-home-zigbee-3.0-cephei-230v-max.-400w-weiss-grau/50044",
				target: "_blank",
				rel: "noopener noreferrer"
			}, "here"),
			createTextVNode(".")
		], -1)),
		_cache[10] || (_cache[10] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[11] || (_cache[11] = createStaticVNode("<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"switch\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch\"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id=\"on-with-timed-off\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#on-with-timed-off\"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p>", 6))
	]);
}
var _500_43_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, _500_43_default as default };
