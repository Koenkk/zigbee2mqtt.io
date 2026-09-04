import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-D6Jmich1.js";
import { t as _plugin_vue_export_helper_default } from "./app-BG4Tt9eu.js";
//#region docs/devices/_TZE204_7lb6j8wg.md
var _pageData = JSON.parse("{\"path\":\"/devices/TZE204_7lb6j8wg.html\",\"title\":\"Tuya _TZE204_7lb6j8wg control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Tuya _TZE204_7lb6j8wg control via MQTT\",\"description\":\"Integrate your Tuya _TZE204_7lb6j8wg via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2026-08-30T18:06:52.000Z\"},\"git\":{\"updatedTime\":1788114020000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"029056389b989133936323c6e894744b0ad8d048\",\"time\":1788114020000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"75a51ceeec659c80ef3a2a93e00c135954897eaa\",\"time\":1785438201000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"}]},\"filePathRelative\":\"devices/_TZE204_7lb6j8wg.md\"}");
var _sfc_main = { name: "_TZE204_7lb6j8wg.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "tuya-tze204-7lb6j8wg",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#tuya-tze204-7lb6j8wg"
		}, [createBaseVNode("span", null, "Tuya _TZE204_7lb6j8wg")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "_TZE204_7lb6j8wg")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Tuya" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Tuya", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Semicom touch panel: 3 shutters")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "cover (state, position), state")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/_TZE204_7lb6j8wg.png",
				alt: "Tuya _TZE204_7lb6j8wg"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><p><code>invert_cover</code>: Inverts the cover position and state, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>time_start</code>: Reply to Tuya-specific time synchronization requests: &quot;1970&quot; - Reply with seconds since 1970/01/01 (recommended, should stop the device from asking), &quot;2000&quot; - Reply with seconds since 2000/01/01 (use if the weekday is wrong with 1970), &quot;off&quot; - Don&#39;t reply (use if replying causes too much traffic). Default for this device: &quot;off&quot;. The value must be one of <code>1970</code>, <code>2000</code>, <code>off</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"cover-c1-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cover-c1-endpoint\"><span>Cover (c1 endpoint)</span></a></h3><p>The current state of this cover is in the published state under the <code>state_c1</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_c1&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state_c1&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state_c1&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position_c1&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id=\"cover-c2-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cover-c2-endpoint\"><span>Cover (c2 endpoint)</span></a></h3><p>The current state of this cover is in the published state under the <code>state_c2</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_c2&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state_c2&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state_c2&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position_c2&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id=\"cover-c3-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cover-c3-endpoint\"><span>Cover (c3 endpoint)</span></a></h3><p>The current state of this cover is in the published state under the <code>state_c3</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_c3&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state_c3&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state_c3&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position_c3&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id=\"state-enum-c1-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#state-enum-c1-endpoint\"><span>State (enum, c1 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>state_c1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>OPEN</code>, <code>STOP</code>, <code>CLOSE</code>.</p><h3 id=\"state-enum-c2-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#state-enum-c2-endpoint\"><span>State (enum, c2 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>state_c2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>OPEN</code>, <code>STOP</code>, <code>CLOSE</code>.</p><h3 id=\"state-enum-c3-endpoint\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#state-enum-c3-endpoint\"><span>State (enum, c3 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>state_c3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>OPEN</code>, <code>STOP</code>, <code>CLOSE</code>.</p>", 14))
	]);
}
var _TZE204_7lb6j8wg_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, _TZE204_7lb6j8wg_default as default };
