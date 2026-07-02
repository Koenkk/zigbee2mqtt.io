import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/ROB_200-081-0.md
var _pageData = JSON.parse("{\"path\":\"/devices/ROB_200-081-0.html\",\"title\":\"ROBB ROB_200-081-0 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"ROBB ROB_200-081-0 control via MQTT\",\"description\":\"Integrate your ROBB ROB_200-081-0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-01-03T20:04:59.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"azogtoth\",\"username\":\"azogtoth\",\"email\":\"96195687+azogtoth@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/azogtoth\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"707d7e54d6545ef4745398da456aeb2977174d54\",\"time\":1738441259000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc 21.27.1\"},{\"hash\":\"7cd6444db68c875630de4fdfa814a6d8d77c6974\",\"time\":1735936090000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc to 21.12.0\"},{\"hash\":\"660edb34b2afcebc5ca0995838b54c29d93a86ea\",\"time\":1735588637000,\"email\":\"96195687+azogtoth@users.noreply.github.com\",\"author\":\"azogtoth\",\"message\":\"Add files for ROBB Smarrt ROB_200-081-0 device (#3366)\"}]},\"filePathRelative\":\"devices/ROB_200-081-0.md\"}");
var _sfc_main = { name: "ROB_200-081-0.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "robb-rob-200-081-0",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#robb-rob-200-081-0"
		}, [createBaseVNode("span", null, "ROBB ROB_200-081-0")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ROB_200-081-0")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=ROBB" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("ROBB", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "4-button wireless Zigbee switch")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ROB_200-081-0.png",
				alt: "ROBB ROB_200-081-0"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">simulated_brightness</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">delta</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token comment\"># delta per interval, default = 20</span></span>\n<span class=\"line\">  <span class=\"token key atrule\">interval</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token comment\"># interval in milliseconds, default = 200</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_1</code>, <code>on_2</code>, <code>on_3</code>, <code>on_4</code>, <code>off_1</code>, <code>off_2</code>, <code>off_3</code>, <code>off_4</code>, <code>toggle_1</code>, <code>toggle_2</code>, <code>toggle_3</code>, <code>toggle_4</code>, <code>brightness_move_to_level_1</code>, <code>brightness_move_to_level_2</code>, <code>brightness_move_to_level_3</code>, <code>brightness_move_to_level_4</code>, <code>brightness_move_up_1</code>, <code>brightness_move_up_2</code>, <code>brightness_move_up_3</code>, <code>brightness_move_up_4</code>, <code>brightness_move_down_1</code>, <code>brightness_move_down_2</code>, <code>brightness_move_down_3</code>, <code>brightness_move_down_4</code>, <code>brightness_step_up_1</code>, <code>brightness_step_up_2</code>, <code>brightness_step_up_3</code>, <code>brightness_step_up_4</code>, <code>brightness_step_down_1</code>, <code>brightness_step_down_2</code>, <code>brightness_step_down_3</code>, <code>brightness_step_down_4</code>, <code>brightness_stop_1</code>, <code>brightness_stop_2</code>, <code>brightness_stop_3</code>, <code>brightness_stop_4</code>.</p>", 7))
	]);
}
var ROB_200_081_0_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, ROB_200_081_0_default as default };
