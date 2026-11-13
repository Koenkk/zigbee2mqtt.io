import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/devices/ZFP-1A-CH.md
var _pageData = JSON.parse("{\"path\":\"/devices/ZFP-1A-CH.html\",\"title\":\"Siglis ZFP-1A-CH control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Siglis ZFP-1A-CH control via MQTT\",\"description\":\"Integrate your Siglis ZFP-1A-CH via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2022-06-01T15:08:55.000Z\"},\"filePathRelative\":\"devices/ZFP-1A-CH.md\"}");
var _sfc_main = { name: "ZFP-1A-CH.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[8] || (_cache[8] = createBaseVNode("h1", {
			id: "siglis-zfp-1a-ch",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#siglis-zfp-1a-ch"
		}, [createBaseVNode("span", null, "Siglis ZFP-1A-CH")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "ZFP-1A-CH")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Siglis" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Siglis", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "zigfred plus smart in-wall switch")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/ZFP-1A-CH.png",
				alt: "Siglis ZFP-1A-CH"
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
		_cache[10] || (_cache[10] = createStaticVNode("<ul><li><p><code>front_surface_enabled</code>: Front Surface LED enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_1_enabled</code>: Dimmer 1 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_1_dimming_enabled</code>: Dimmer 1 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_2_enabled</code>: Dimmer 2 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_2_dimming_enabled</code>: Dimmer 2 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_3_enabled</code>: Dimmer 3 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_3_dimming_enabled</code>: Dimmer 3 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_4_enabled</code>: Dimmer 4 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>dimmer_4_dimming_enabled</code>: Dimmer 4 dimmable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_1_enabled</code>: Cover 1 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_1_tilt_enabled</code>: Cover 1 tiltable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_2_enabled</code>: Cover 2 enabled. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>cover_2_tilt_enabled</code>: Cover 2 tiltable. The value must be one of <code>auto</code>, <code>true</code>, <code>false</code></p></li><li><p><code>color_sync</code>: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>invert_cover</code>: Inverts the reported cover position and the state derived from it, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>button_1_single</code>, <code>button_1_double</code>, <code>button_1_hold</code>, <code>button_1_release</code>, <code>button_2_single</code>, <code>button_2_double</code>, <code>button_2_hold</code>, <code>button_2_release</code>, <code>button_3_single</code>, <code>button_3_double</code>, <code>button_3_hold</code>, <code>button_3_release</code>, <code>button_4_single</code>, <code>button_4_double</code>, <code>button_4_hold</code>, <code>button_4_release</code>.</p>", 4))
	]);
}
var ZFP_1A_CH_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, ZFP_1A_CH_default as default };
