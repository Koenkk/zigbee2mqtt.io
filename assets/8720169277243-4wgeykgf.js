import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/devices/8720169277243.md
var _pageData = JSON.parse("{\"path\":\"/devices/8720169277243.html\",\"title\":\"Philips 8720169277243 control via MQTT\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"device-page\",\"title\":\"Philips 8720169277243 control via MQTT\",\"description\":\"Integrate your Philips 8720169277243 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.\",\"addedAt\":\"2025-11-30T20:06:49.000Z\"},\"git\":{\"updatedTime\":1780255998000,\"contributors\":[{\"name\":\"Tediore\",\"username\":\"Tediore\",\"email\":\"49540618+Tediore@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/Tediore\"},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"418544c6755785747a937feb1d71964b20cc22d2\",\"time\":1780255998000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"baf96fd627fdb9aff88e8efcb6bbbb2c5e76033b\",\"time\":1767274772000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Bump zhc\"},{\"hash\":\"6eb24d25736fb5a367f98d8e6906d6006de27b3e\",\"time\":1766757493000,\"email\":\"49540618+Tediore@users.noreply.github.com\",\"author\":\"M.J. Wydra\",\"message\":\"Fix formatting of device commands section (#4608)\"},{\"hash\":\"5601702380faea1b054a52e27b48361f4148af28\",\"time\":1764534871000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zhc\"},{\"hash\":\"3b87045468b90cb83f80df47a10720f0303207d8\",\"time\":1763315567000,\"email\":\"49540618+Tediore@users.noreply.github.com\",\"author\":\"M.J. Wydra\",\"message\":\"Add image and notes for 8720169277243 (#4430)\"}]},\"filePathRelative\":\"devices/8720169277243.md\"}");
var _sfc_main = { name: "8720169277243.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "philips-8720169277243",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#philips-8720169277243"
		}, [createBaseVNode("span", null, "Philips 8720169277243")])], -1)),
		createBaseVNode("table", null, [_cache[6] || (_cache[6] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th"), createBaseVNode("th")])], -1)), createBaseVNode("tbody", null, [
			_cache[2] || (_cache[2] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Model"), createBaseVNode("td", null, "8720169277243")], -1)),
			createBaseVNode("tr", null, [_cache[1] || (_cache[1] = createBaseVNode("td", null, "Vendor", -1)), createBaseVNode("td", null, [createVNode(_component_RouteLink, { to: "/supported-devices/#v=Philips" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Philips", -1)])]),
				_: 1
			})])]),
			_cache[3] || (_cache[3] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Description"), createBaseVNode("td", null, "Hue Secure siren and chime")], -1)),
			_cache[4] || (_cache[4] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Exposes"), createBaseVNode("td", null, "switch (state), play_sound, trigger_siren, identify")], -1)),
			_cache[5] || (_cache[5] = createBaseVNode("tr", null, [createBaseVNode("td", null, "Picture"), createBaseVNode("td", null, [createBaseVNode("img", {
				src: "https://www.zigbee2mqtt.io/images/devices/8720169277243.png",
				alt: "Philips 8720169277243"
			})])], -1))
		])]),
		_cache[12] || (_cache[12] = createStaticVNode("<h2 id=\"device-commands\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#device-commands\"><span>Device commands</span></a></h2><p>All of these commands should be published to <code>zigbee2mqtt/DEVICE NAME/set</code>.</p><h3 id=\"mute-unmute-the-device\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#mute-unmute-the-device\"><span>Mute/unmute the device</span></a></h3><p><code>{&quot;state&quot;: &quot;x&quot;}</code> where <code>x</code> is ON for unmute or OFF for mute.</p><h3 id=\"trigger-the-siren\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#trigger-the-siren\"><span>Trigger the siren</span></a></h3><p><code>{&quot;trigger_siren&quot;: {&quot;duration&quot;: x}}</code> where <code>x</code> is the time in seconds (1-16777) to sound the siren.</p><h3 id=\"stop-the-siren\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#stop-the-siren\"><span>Stop the siren</span></a></h3><p><code>{&quot;trigger_siren&quot;: {&quot;duration&quot;: 0}}</code> (a duration of zero stops the siren).</p><h3 id=\"play-a-built-in-chime-sound\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#play-a-built-in-chime-sound\"><span>Play a built-in chime sound</span></a></h3><p><code>{&quot;play_sound&quot;: {&quot;sound&quot;: &quot;sound_name&quot;, &quot;volume&quot;: x}}</code> where <code>sound_name</code> is the sound you want to play (list below) and <code>x</code> is the volume (1-100).</p><p><strong>Available sounds (sounds with an asterisk are only available on firmware version &gt;= 1.123.13):</strong></p><ul><li>bleep</li><li>bounce *</li><li>bright</li><li>bright_modern *</li><li>ding_dong_classic</li><li>ding_dong_modern</li><li>ding_dong_xylo</li><li>echo *</li><li>fairy *</li><li>galaxy *</li><li>glow *</li><li>hue_default</li><li>reveal *</li><li>rise</li><li>sonar</li><li>swing</li><li>triple_beep</li><li>welcome *</li><li>westminster_classic</li><li>westminster_modern</li></ul><h2 id=\"ota-updates\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ota-updates\"><span>OTA updates</span></a></h2>", 13)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("This device supports OTA updates, for more information see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(".", -1))
		]),
		_cache[13] || (_cache[13] = createBaseVNode("h2", {
			id: "options",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#options"
		}, [createBaseVNode("span", null, "Options")])], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [createVNode(_component_RouteLink, { to: "/guide/configuration/devices-groups.html#specific-device-options" }, {
			default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("How to use device type specific configuration", -1)])]),
			_: 1
		})])]),
		_cache[14] || (_cache[14] = createStaticVNode("<ul><li><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a maximum value of <code>30</code></li></ul><h2 id=\"exposes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#exposes\"><span>Exposes</span></a></h2><h3 id=\"switch\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#switch\"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;undefined&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id=\"play-sound-composite\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#play-sound-composite\"><span>Play sound (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;play_sound&quot;: {&quot;sound&quot;: VALUE, &quot;volume&quot;: VALUE}}</code></p><ul><li><code>sound</code> (enum) allowed values: <code>bleep</code>, <code>bounce</code>, <code>bright</code>, <code>bright_modern</code>, <code>ding_dong_classic</code>, <code>ding_dong_modern</code>, <code>ding_dong_xylo</code>, <code>echo</code>, <code>fairy</code>, <code>galaxy</code>, <code>glow</code>, <code>hue_default</code>, <code>reveal</code>, <code>rise</code>, <code>sonar</code>, <code>swing</code>, <code>triple_beep</code>, <code>welcome</code>, <code>westminster_classic</code>, <code>westminster_modern</code></li><li><code>volume</code> (numeric): Volume 0-100 max value is 100</li></ul><h3 id=\"trigger-siren-composite\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#trigger-siren-composite\"><span>Trigger siren (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trigger_siren&quot;: {&quot;duration&quot;: VALUE}}</code></p><ul><li><code>duration</code> (numeric) max value is 600, unit is seconds</li></ul><h3 id=\"identify-enum\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#identify-enum\"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p>", 12))
	]);
}
var _8720169277243_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, _8720169277243_default as default };
