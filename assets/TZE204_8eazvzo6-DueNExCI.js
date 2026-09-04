import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-D6Jmich1.js";
import { t as _plugin_vue_export_helper_default } from "./app-BG4Tt9eu.js";
//#region docs/devices/_TZE204_8eazvzo6.md
var _pageData = JSON.parse("{\"path\":\"/devices/TZE204_8eazvzo6.html\",\"title\":\"Tuya _TZE204_8eazvzo6 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Tuya _TZE204_8eazvzo6 control via MQTT\",\"description\":\"Integrate your Tuya _TZE204_8eazvzo6 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-08-30T18:06:52.000Z\"},\"git\":{\"updatedTime\":1788114020000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"029056389b989133936323c6e894744b0ad8d048\",\"time\":1788114020000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"}]},\"filePathRelative\":\"devices/_TZE204_8eazvzo6.md\"}");
var _sfc_main = { name: "_TZE204_8eazvzo6.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "tuya-tze204-8eazvzo6",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#tuya-tze204-8eazvzo6"
		}, [createBaseVNode("span", null, "Tuya _TZE204_8eazvzo6")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "_TZE204_8eazvzo6")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Tuya" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Tuya", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Semicom touch panel: 6 switches")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "switch (state)")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/_TZE204_8eazvzo6.png",
				alt: "Tuya _TZE204_8eazvzo6"
			})])], -1))
		])]),
		_cache[9] || (_cache[9] = createBaseVNode("h2", {
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>time_start</code>: Reply to Tuya-specific time synchronization requests: &quot;1970&quot; - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), &quot;2000&quot; - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), &quot;off&quot; - Don&#39;t reply (use if replying causes too much traffic). Default for this device: &quot;off&quot;. The value must be one of <code>1970</code>, <code>2000</code>, <code>off</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"switch-s1-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-s1-endpoint\"><span>Switch (s1 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_s1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_s1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_s1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_s1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_s1&quot;: &quot;&quot;}</code>.</p><h3 id=\"switch-s2-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-s2-endpoint\"><span>Switch (s2 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_s2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_s2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_s2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_s2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_s2&quot;: &quot;&quot;}</code>.</p><h3 id=\"switch-s3-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-s3-endpoint\"><span>Switch (s3 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_s3</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_s3&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_s3&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_s3&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_s3&quot;: &quot;&quot;}</code>.</p><h3 id=\"switch-s4-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-s4-endpoint\"><span>Switch (s4 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_s4</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_s4&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_s4&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_s4&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_s4&quot;: &quot;&quot;}</code>.</p><h3 id=\"switch-s5-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-s5-endpoint\"><span>Switch (s5 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_s5</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_s5&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_s5&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_s5&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_s5&quot;: &quot;&quot;}</code>.</p><h3 id=\"switch-s6-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch-s6-endpoint\"><span>Switch (s6 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_s6</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_s6&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_s6&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_s6&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_s6&quot;: &quot;&quot;}</code>.</p>", 14))
	]);
}
var _TZE204_8eazvzo6_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, _TZE204_8eazvzo6_default as default };
