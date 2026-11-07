import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/devices/SNZB-01M.md
var _pageData = JSON.parse("{\"path\":\"/devices/SNZB-01M.html\",\"title\":\"SONOFF SNZB-01M control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"SONOFF SNZB-01M control via MQTT\",\"description\":\"Integrate your SONOFF SNZB-01M via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-10-31T19:12:27.000Z\"},\"filePathRelative\":\"devices/SNZB-01M.md\"}");
var _sfc_main = { name: "SNZB-01M.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[18] || (_cache[18] = createBaseVNode("h1", {
			id: "sonoff-snzb-01m",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#sonoff-snzb-01m"
		}, [createBaseVNode("span", null, "SONOFF SNZB-01M")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "SNZB-01M")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=SONOFF" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("SONOFF", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Four-way wireless button")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "battery, action")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/SNZB-01M.png",
				alt: "SONOFF SNZB-01M"
			})])], -1))
		])]),
		_cache[19] || (_cache[19] = createStaticVNode("<h2 id=\"notes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#notes\"><span>Notes</span></a></h2><p><strong>All information is taken from the SONOFF website. It needs confirmation!</strong></p><h3 id=\"battery\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery\"><span>Battery</span></a></h3><p>Uses 1 x CR2477 battery</p><p><strong>This device <em>sleeps</em> to preserve energy when it&#39;s not actively used.</strong><br> When sleeping, it will not respond to any Z2M commands.<br> Press its buttons to keep it awake and allow interactions.</p><h3 id=\"pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pairing\"><span>Pairing</span></a></h3><p><strong>Press and hold the reset button for 5s</strong>. An LED indicator should slowly flash until it connects.<br> The button is found under the back cover, next to the battery.</p><h3 id=\"binding\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#binding\"><span>Binding</span></a></h3><p><strong>This remote can directly control individual devices and/or groups.</strong></p>", 9)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [
			_cache[8] || (_cache[8] = createTextVNode("Pairing inside the network is possible by ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/binding.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("binding", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(": ", -1)),
			_cache[10] || (_cache[10] = createBaseVNode("ul", null, [
				createBaseVNode("li", null, [createBaseVNode("code", null, "OnOff"), createTextVNode(" cluster for toggling")]),
				createBaseVNode("li", null, [createBaseVNode("code", null, "LevelCtrl"), createTextVNode(" cluster for dimming")]),
				createBaseVNode("li", null, [createBaseVNode("code", null, "Scenes"), createTextVNode(" cluster for changing scenes")])
			], -1))
		]), createBaseVNode("li", null, [
			_cache[12] || (_cache[12] = createTextVNode("Pairing outside the network is possible through ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/touchlink.html" }, {
				default: withCtx(() => [..._cache[11] || (_cache[11] = [createTextVNode("Touchlink", -1)])]),
				_: 1
			}),
			_cache[13] || (_cache[13] = createTextVNode(". ", -1)),
			_cache[14] || (_cache[14] = createBaseVNode("ul", null, [createBaseVNode("li", null, [
				createTextVNode("Activate by keeping it very close to the target device and holding "),
				createBaseVNode("strong", null, "Button 1"),
				createTextVNode(" 'until the indicator stays solid for about 3 seconds, then release'.")
			]), createBaseVNode("li", null, [createTextVNode("No information about "), createBaseVNode("em", null, "cloning")])], -1))
		])]),
		_cache[20] || (_cache[20] = createStaticVNode("<h3 id=\"action-mapping\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-mapping\"><span>Action mapping</span></a></h3><table><thead><tr><th>Real Action</th><th style=\"text-align:right;\">Z2M Action</th><th style=\"text-align:right;\">Bind Action</th></tr></thead><tbody><tr><td>Button 1 single</td><td style=\"text-align:right;\"><code>single_button_1</code></td><td style=\"text-align:right;\">&#39;On/Off&#39; ?</td></tr><tr><td>Button 1 double</td><td style=\"text-align:right;\"><code>double_button_1</code></td><td style=\"text-align:right;\">?</td></tr><tr><td>Button 1 triple</td><td style=\"text-align:right;\"><code>triple_button_1</code></td><td style=\"text-align:right;\">?</td></tr><tr><td>Button 1 long</td><td style=\"text-align:right;\"><code>long_button_1</code></td><td style=\"text-align:right;\">?</td></tr><tr><td>Button 2 single</td><td style=\"text-align:right;\"><code>single_button_2</code></td><td style=\"text-align:right;\">?</td></tr><tr><td>Button 2 double</td><td style=\"text-align:right;\"><code>double_button_2</code></td><td style=\"text-align:right;\">?</td></tr><tr><td>Button 2 triple</td><td style=\"text-align:right;\"><code>triple_button_2</code></td><td style=\"text-align:right;\">?</td></tr><tr><td>Button 2 long</td><td style=\"text-align:right;\"><code>long_button_2</code></td><td style=\"text-align:right;\">&#39;Brighten&#39; ?</td></tr><tr><td>Button 3 single</td><td style=\"text-align:right;\"><code>single_button_3</code></td><td style=\"text-align:right;\">?</td></tr><tr><td>Button 3 double</td><td style=\"text-align:right;\"><code>double_button_3</code></td><td style=\"text-align:right;\">?</td></tr><tr><td>Button 3 triple</td><td style=\"text-align:right;\"><code>triple_button_3</code></td><td style=\"text-align:right;\">?</td></tr><tr><td>Button 3 long</td><td style=\"text-align:right;\"><code>long_button_3</code></td><td style=\"text-align:right;\">&#39;Dim&#39; ?</td></tr><tr><td>Button 4 single</td><td style=\"text-align:right;\"><code>single_button_4</code></td><td style=\"text-align:right;\">&#39;Switch Scenes&#39; ?</td></tr><tr><td>Button 4 double</td><td style=\"text-align:right;\"><code>double_button_4</code></td><td style=\"text-align:right;\">?</td></tr><tr><td>Button 4 triple</td><td style=\"text-align:right;\"><code>triple_button_4</code></td><td style=\"text-align:right;\">?</td></tr><tr><td>Button 4 long</td><td style=\"text-align:right;\"><code>long_button_4</code></td><td style=\"text-align:right;\">?</td></tr></tbody></table><p><strong>The following information was obtained directly from SONOFF support.</strong></p><p>Starting with firmware 1.1.0, all four buttons can be bound to a switch or dimming device:</p><ul><li>Single click — toggles the switch (On/Off)</li><li>Long press — alternates between increasing and decreasing brightness</li></ul><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 6)),
		createBaseVNode("p", null, [
			_cache[16] || (_cache[16] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[15] || (_cache[15] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[17] || (_cache[17] = createTextVNode(".", -1))
		]),
		_cache[21] || (_cache[21] = createStaticVNode("<h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"battery-numeric\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#battery-numeric\"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id=\"action-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#action-enum\"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single_button_1</code>, <code>double_button_1</code>, <code>long_button_1</code>, <code>triple_button_1</code>, <code>single_button_2</code>, <code>double_button_2</code>, <code>long_button_2</code>, <code>triple_button_2</code>, <code>single_button_3</code>, <code>double_button_3</code>, <code>long_button_3</code>, <code>triple_button_3</code>, <code>single_button_4</code>, <code>double_button_4</code>, <code>long_button_4</code>, <code>triple_button_4</code>.</p>", 5))
	]);
}
var SNZB_01M_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, SNZB_01M_default as default };
