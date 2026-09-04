import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-D6Jmich1.js";
import { t as _plugin_vue_export_helper_default } from "./app-BG4Tt9eu.js";
//#region docs/guide/usage/troubleshooting.md
var _pageData = JSON.parse("{\"path\":\"/guide/usage/troubleshooting.html\",\"title\":\"Troubleshooting\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"sidebarDepth\":1},\"git\":{\"updatedTime\":1787366709000,\"contributors\":[{\"name\":\"Nerivec\",\"username\":\"Nerivec\",\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/Nerivec\"}],\"changelog\":[{\"hash\":\"36f344142e646f663eb71a1e8a1acc1b5af581d4\",\"time\":1787366709000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"feat: add gfm alert support (#5428)\"},{\"hash\":\"5c2826cf5feb542383b63570f16e2596bc4b84e9\",\"time\":1787080624000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"feat: add usage troubleshooting page (#5418)\"}]},\"filePathRelative\":\"guide/usage/troubleshooting.md\"}");
var _sfc_main = { name: "troubleshooting.md" };
var _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_router_link = resolveComponent("router-link");
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[19] || (_cache[19] = createBaseVNode("h1", {
			id: "troubleshooting",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#troubleshooting"
		}, [createBaseVNode("span", null, "Troubleshooting")])], -1)),
		_cache[20] || (_cache[20] = createBaseVNode("p", null, "Here you may find answers to common issues regarding Zigbee2MQTT usage and Zigbee networks in general.", -1)),
		_cache[21] || (_cache[21] = createBaseVNode("p", null, [createBaseVNode("strong", null, "For device-specific troubles, check the device's own page instead.")], -1)),
		createBaseVNode("nav", _hoisted_1, [createBaseVNode("ul", null, [
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#crash-issues" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Crash issues", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#network-stability-issues" }, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("Network stability issues", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#temporary-disruption-after-heavy-network-operation" }, {
				default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("Temporary disruption after heavy network operation", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#emberznet-coordinators" }, {
				default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("EmberZNet coordinators", -1)])]),
				_: 1
			}), createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#post-ieee-eui64-migration-troubles" }, {
				default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Post-IEEE (EUI64) migration troubles", -1)])]),
				_: 1
			})])])]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#spammy-devices" }, {
				default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("Spammy devices", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#disconnect-with-mqtt-v5" }, {
				default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode("Disconnect with MQTT v5", -1)])]),
				_: 1
			})])
		])]),
		_cache[22] || (_cache[22] = createBaseVNode("h2", {
			id: "crash-issues",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#crash-issues"
		}, [createBaseVNode("span", null, "Crash issues")])], -1)),
		createBaseVNode("p", null, [
			_cache[8] || (_cache[8] = createTextVNode("See ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/installation/20_zigbee2mqtt-fails-to-start_crashes-runtime.html" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("Zigbee2MQTT fails to start/crashes runtime", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(".", -1))
		]),
		_cache[23] || (_cache[23] = createBaseVNode("h2", {
			id: "network-stability-issues",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#network-stability-issues"
		}, [createBaseVNode("span", null, "Network stability issues")])], -1)),
		createBaseVNode("p", null, [
			_cache[11] || (_cache[11] = createTextVNode("See ", -1)),
			createVNode(_component_RouteLink, { to: "/advanced/zigbee/02_improve_network_range_and_stability.html" }, {
				default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("Improve network range and stability", -1)])]),
				_: 1
			}),
			_cache[12] || (_cache[12] = createTextVNode(".", -1))
		]),
		_cache[24] || (_cache[24] = createStaticVNode("<h2 id=\"temporary-disruption-after-heavy-network-operation\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#temporary-disruption-after-heavy-network-operation\"><span>Temporary disruption after heavy network operation</span></a></h2><p>Some operations like moving a router, removing a router, re-pairing a router, migrating the coordinator, can temporarily disrupt the network because of changed routes, tables, etc.. The network will self-heal, but until things settle, you may experience any or all of:</p><ul><li>increase in route errors</li><li>increase in device response time</li><li>device not responding</li></ul><p>The best course of action after such operations is to let the network settle without any further operation. Good networks will usually resolve this in a matter of minutes (seconds even), but it can otherwise take up to a few hours.</p><h2 id=\"emberznet-coordinators\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#emberznet-coordinators\"><span>EmberZNet coordinators</span></a></h2><h3 id=\"post-ieee-eui64-migration-troubles\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#post-ieee-eui64-migration-troubles\"><span>Post-IEEE (EUI64) migration troubles</span></a></h3><p>In some circumstances, after an IEEE migration, the IEEE is not propagated properly by the stack causing issues like:</p><ul><li>unable to pair some devices</li><li>some devices leave a few seconds after pairing (usually with <code>VERIFY_KEY_TIMEOUT</code> in the logs shortly before)</li><li>device seemingly paired but isn&#39;t talking anymore</li></ul><p>First step is to check the IEEE migration was done correctly. Make sure you did not inadvertently reverse the order of bytes (e.g. 3412 instead of 1234). Then re-do the migration for good measure.</p><p>Second step is to check for a known bug in the stack. You can do this with <a href=\"https://github.com/Nerivec/ember-zli/wiki/Stack#check-for-eui64-mismatch\" target=\"_blank\" rel=\"noopener noreferrer\"><code>ember-zli</code></a>.</p><p>Third step is to reset your adapter to factory settings (clear NVM3), and re-do the migration. You can do this with <a href=\"https://github.com/Nerivec/ember-zli/wiki/Bootloader#clear-nvm3\" target=\"_blank\" rel=\"noopener noreferrer\"><code>ember-zli</code></a>. Some TCP adapters also allow you to do that from their own interface. <strong>Make sure you have a <code>coordinator_backup.json</code> and <code>configuration.yaml</code> present in your Zigbee2MQTT data folder before doing this; Zigbee2MQTT will need them to restore the network after the reset.</strong></p><div class=\"hint-container tip\"><p class=\"hint-container-title\">Tips</p><p>Installation details for <code>ember-zli</code> can be found here: <a href=\"https://github.com/Nerivec/ember-zli/wiki#installation\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/Nerivec/ember-zli/wiki#installation</a></p></div><div class=\"hint-container important\"><p class=\"hint-container-title\">Important</p><p>If you have known-good devices in your network, migrating the IEEE is not usually necessary. In most cases, the network will adapt, and you can avoid any of the above completely. <em>You may have to re-pair some devices if not all properly adapt.</em></p></div><div class=\"hint-container tip\"><p class=\"hint-container-title\">Tips</p><p>If you have been fighting against post-migration issues for a while, you may want to do the factory reset step mentioned above, <strong>but</strong> skip the migration after that, to see if your network repairs itself naturally. Be sure to let the network settle for a day after this.</p></div><h2 id=\"spammy-devices\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#spammy-devices\"><span>Spammy devices</span></a></h2><p>Devices that spam data reports can quickly crowd the network and reduce the overall stability. Using several devices like that can even go as far as crashing the network on a regular basis. This is a well known problem of brands like Tuya (and derived). Some mmWave sensors have been known to have that problem as well (especially earlier variants).</p>", 16)),
		createBaseVNode("p", null, [
			_cache[14] || (_cache[14] = createTextVNode("You can disable or decrease the rate of reports of a device (for all or specific states). If possible, configure ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-device-reporting-configure" }, {
				default: withCtx(() => [..._cache[13] || (_cache[13] = [createTextVNode("reporting", -1)])]),
				_: 1
			}),
			_cache[15] || (_cache[15] = createTextVNode(" to better match your need and fit what your network can handle. However, often enough the devices cited above also don't allow proper configuration, in that case, there is no real way to fix them, you can only replace them with better ones.", -1))
		]),
		_cache[25] || (_cache[25] = createStaticVNode("<div class=\"hint-container tip\"><p class=\"hint-container-title\">Tips</p><p>Several Open Source projects offer alternative Tuya OTA update firmware (be sure to read all associated documentation before using these). Examples:</p><ul><li><a href=\"https://github.com/romasku/tuya-zigbee-switch\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/romasku/tuya-zigbee-switch</a></li><li><a href=\"https://github.com/pvvx/ZigbeeTLc\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/pvvx/ZigbeeTLc</a></li><li><a href=\"https://github.com/Andrik45719/ZY-M100\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/Andrik45719/ZY-M100</a></li><li><a href=\"https://github.com/slacky1965\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/slacky1965</a></li></ul></div><h2 id=\"disconnect-with-mqtt-v5\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#disconnect-with-mqtt-v5\"><span>Disconnect with MQTT v5</span></a></h2><p>If you use an MQTT broker with version 5 of the MQTT specification, you may get disconnects when something is misbehaving. This can happen, for example, when &quot;maximum packet size&quot; is exceeded (large networks).</p>", 3)),
		createBaseVNode("p", null, [
			_cache[17] || (_cache[17] = createTextVNode("To remedy that, configure your broker accordingly, and check if Zigbee2MQTT has a corresponding setting to adjust too. See ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/mqtt.html#server-connection" }, {
				default: withCtx(() => [..._cache[16] || (_cache[16] = [createTextVNode("MQTT configuration", -1)])]),
				_: 1
			}),
			_cache[18] || (_cache[18] = createTextVNode(".", -1))
		])
	]);
}
var troubleshooting_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, troubleshooting_default as default };
