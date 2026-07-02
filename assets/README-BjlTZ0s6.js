import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/guide/faq/README.md
var _pageData = JSON.parse("{\"path\":\"/guide/faq/\",\"title\":\"FAQ\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"sidebarDepth\":0,\"redirectFrom\":\"/information/FAQ.md\"},\"git\":{\"updatedTime\":1779391962000,\"contributors\":[{\"name\":\"Christoph Wiechert\",\"username\":\"\",\"email\":\"wio@psitrax.de\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":27},{\"name\":\"github-actions[bot]\",\"username\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/github-actions[bot]\"},{\"name\":\"Robin Kolk\",\"username\":\"\",\"email\":\"robinkolk@msn.com\",\"commits\":1},{\"name\":\"Burkhard Kneiseler\",\"username\":\"\",\"email\":\"burkhard@kneiseler.de\",\"commits\":1},{\"name\":\"Aleks\",\"username\":\"Aleks\",\"email\":\"nitro88@yandex.ru\",\"commits\":1,\"url\":\"https://github.com/Aleks\"},{\"name\":\"danieledwardgeorgehitchcock\",\"username\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\",\"commits\":1,\"url\":\"https://github.com/danieledwardgeorgehitchcock\"},{\"name\":\"Dirk van Donkelaar\",\"username\":\"\",\"email\":\"dirk@vdde.nl\",\"commits\":1},{\"name\":\"rodriguezst\",\"username\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/rodriguezst\"},{\"name\":\"wizbowes\",\"username\":\"wizbowes\",\"email\":\"wizbowes@gmail.com\",\"commits\":1,\"url\":\"https://github.com/wizbowes\"},{\"name\":\"Or Bin\",\"username\":\"\",\"email\":\"orbin50@gmail.com\",\"commits\":1},{\"name\":\"Artur Sena\",\"username\":\"\",\"email\":\"algoz098@gmail.com\",\"commits\":1},{\"name\":\"Hedda\",\"username\":\"Hedda\",\"email\":\"rockerc.harley@gmail.com\",\"commits\":3,\"url\":\"https://github.com/Hedda\"},{\"name\":\"Daniel Lo Nigro\",\"username\":\"\",\"email\":\"daniel@dan.cx\",\"commits\":1},{\"name\":\"Rotzbua\",\"username\":\"Rotzbua\",\"email\":\"Rotzbua@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Rotzbua\"},{\"name\":\"N3rdix\",\"username\":\"N3rdix\",\"email\":\"70015952+N3rdix@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/N3rdix\"},{\"name\":\"Tony Air\",\"username\":\"\",\"email\":\"tony@twma.pro\",\"commits\":1},{\"name\":\"Márton Maráz\",\"username\":\"\",\"email\":\"marazmarci@gmail.com\",\"commits\":5},{\"name\":\"Patricide\",\"username\":\"Patricide\",\"email\":\"bjschuit@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Patricide\"},{\"name\":\"Antoine Libert\",\"username\":\"\",\"email\":\"antoine@a-l.fr\",\"commits\":1},{\"name\":\"dependabot[bot]\",\"username\":\"dependabot[bot]\",\"email\":\"49699333+dependabot[bot]@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/dependabot[bot]\"},{\"name\":\"Peter Wake\",\"username\":\"\",\"email\":\"peter_wake@hotmail.com\",\"commits\":1},{\"name\":\"Nerivec\",\"username\":\"Nerivec\",\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/Nerivec\"},{\"name\":\"BarryShaffer\",\"username\":\"BarryShaffer\",\"email\":\"barry.shaffer@gmail.com\",\"commits\":1,\"url\":\"https://github.com/BarryShaffer\"},{\"name\":\"Copilot\",\"username\":\"Copilot\",\"email\":\"175728472+Copilot@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Copilot\"}],\"changelog\":[{\"hash\":\"aecbaec9d0269849f36de9f51b68443014d9c592\",\"time\":1779391962000,\"email\":\"barry.shaffer@gmail.com\",\"author\":\"BarryShaffer\",\"message\":\"Clarify baud rate update when changing adapters (#5148)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Copilot Autofix powered by AI\",\"email\":\"175728472+Copilot@users.noreply.github.com\"}]},{\"hash\":\"aa4299706eb2a81313ccdf59057ab009d858dd7c\",\"time\":1779131202000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"feat: add redirect plugin (#5130)\"},{\"hash\":\"bd53f19bd445198d88cea3d31d2bba697b486f43\",\"time\":1771694140000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"fix: install code details (#4847)\"},{\"hash\":\"9aacf66387d6df6d00700ed2c69e729e058bd3c2\",\"time\":1763929254000,\"email\":\"peter_wake@hotmail.com\",\"author\":\"Peter Wake\",\"message\":\"Update external converter directory references in docs (#4445)\"},{\"hash\":\"6544a2009a5c2df057f26460738547199b3991e3\",\"time\":1751392268000,\"email\":\"49699333+dependabot[bot]@users.noreply.github.com\",\"author\":\"dependabot[bot]\",\"message\":\"fix(ignore): bump the all group with 5 updates (#3906)\",\"coAuthors\":[{\"name\":\"dependabot[bot]\",\"email\":\"49699333+dependabot[bot]@users.noreply.github.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"6196d57afb907073eea6a4390688a6804cfab0d7\",\"time\":1742022232000,\"email\":\"antoine@a-l.fr\",\"author\":\"Antoine Libert\",\"message\":\"Add guide to migrate adapter including unsupported ones (#3586)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"a79a26930daf1671f900189edcf8e543f5e44781\",\"time\":1737314183000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update switching adapers faq (#3428)\"},{\"hash\":\"daac7e599b6ed09079ad722c2d5cdd787c806a2e\",\"time\":1734179441000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"HA legacy action sensor docs (#3325)\"},{\"hash\":\"9689c982a9f8a435e2dff69174918629198be752\",\"time\":1733947694000,\"email\":\"bjschuit@gmail.com\",\"author\":\"Patricide\",\"message\":\"Update README.md (#3292)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"9206d99fdedbcad4f91c18b172ecee5ae69560b9\",\"time\":1733245245000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Lint\"},{\"hash\":\"34edd09bd58cd87208039a84e9b0c6a214bff8e4\",\"time\":1730642112000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Remove deprecated Home Assistant integration features (#3143)\"},{\"hash\":\"f89e65dec7c1cbf82a5a0e1587e849cc98530e94\",\"time\":1722278811000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Implement prettier (automatic changes)\"},{\"hash\":\"af7c3f95317324710d00f1030c30f59d06825179\",\"time\":1721160165000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Channel change docs (#2893)\"},{\"hash\":\"b7cf8dbec9bbeb7e2afa2091eab32face05af8f2\",\"time\":1719660228000,\"email\":\"rockerc.harley@gmail.com\",\"author\":\"Hedda\",\"message\":\"Mention some general Zigbee imitations in FAQ (#2849)\",\"coAuthors\":[{\"name\":\"Márton Maráz\",\"email\":\"marazmarci@gmail.com\"},{\"name\":\"Márton Maráz\",\"email\":\"marazmarci@gmail.com\"}]},{\"hash\":\"0d732b3bf5d6baf97df80a72df10c5d2c2111740\",\"time\":1719607091000,\"email\":\"rockerc.harley@gmail.com\",\"author\":\"Hedda\",\"message\":\"FAQ on how to interpret RSSI and LQI values (#2850)\",\"coAuthors\":[{\"name\":\"Márton Maráz\",\"email\":\"marazmarci@gmail.com\"},{\"name\":\"Márton Maráz\",\"email\":\"marazmarci@gmail.com\"},{\"name\":\"Márton Maráz\",\"email\":\"marazmarci@gmail.com\"}]},{\"hash\":\"600efd27a41c23682430bfb327ab35fa26f5068b\",\"time\":1716126478000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Add <code>log_namespaced_levels</code> docs (#2750)\"},{\"hash\":\"5b9f2d3c7227b278a2ef1fb98ae3cc3d05c0d75e\",\"time\":1710965783000,\"email\":\"tony@twma.pro\",\"author\":\"Tony Air\",\"message\":\"Update README.md (#2642)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"94172db3b089a0e8d6aef9f0399663f8a6c94ce7\",\"time\":1704443858000,\"email\":\"70015952+N3rdix@users.noreply.github.com\",\"author\":\"Nerdix\",\"message\":\"Correct link to \\\"coordinator check\\\" (#2463)\"},{\"hash\":\"62ed2515e5957348e74de94159a79e0532bfd518\",\"time\":1696255413000,\"email\":\"Rotzbua@users.noreply.github.com\",\"author\":\"Rotzbua\",\"message\":\"fix(typo): docs/guide (#2239)\"},{\"hash\":\"7168dfbc987fb1c50f23a0b2bee66371e0ec36a4\",\"time\":1692037767000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Add coordinator check docs (#2169)\"},{\"hash\":\"d2fd864b2d070cf3ff12b8486194ecbb8998b875\",\"time\":1678381393000,\"email\":\"daniel@dan.cx\",\"author\":\"Daniel Lo Nigro\",\"message\":\"Add details about how to disable USB autosuspend on Raspberry Pi (#1941)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"acc73872415d5f905425f3e1601ca412a34e6265\",\"time\":1676488212000,\"email\":\"rockerc.harley@gmail.com\",\"author\":\"Hedda\",\"message\":\"Add FAQ note that deconz, ezsp, and zigate not yet supporting adapter migration (#1892)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"1a983627f5e3f226b8ec9e115579c34bd6947dec\",\"time\":1674294904000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Improve bad network stability/range notes.\"},{\"hash\":\"b3103041f11e10c9c096142c281e6704d0a8ddde\",\"time\":1672995909000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"FAQ: add poor performance tip. https://github.com/Koenkk/zigbee2mqtt/issues/2437\"},{\"hash\":\"07e1c18d0616b46b2891609a4a5bd0f6f204a45d\",\"time\":1669744896000,\"email\":\"algoz098@gmail.com\",\"author\":\"Artur Sena\",\"message\":\"Update FAQ (#1730)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"10125201c129f229b486d3af4eb0d576a6702264\",\"time\":1664983740000,\"email\":\"orbin50@gmail.com\",\"author\":\"Or Bin\",\"message\":\"Typo fixes (#1620)\"},{\"hash\":\"5e054139c56d42e1582ebb5120b31692a50bf194\",\"time\":1662453023000,\"email\":\"wizbowes@gmail.com\",\"author\":\"wizbowes\",\"message\":\"Update README.md (#1551)\"},{\"hash\":\"60525d635129a3530d44b988bfc6c91d5aec8712\",\"time\":1640514826000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update FAQ\"},{\"hash\":\"80833b5ee6d3cea2e36f027b571d72655f1e8f49\",\"time\":1640371033000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Clarify adapter migration and what requires repairing\"},{\"hash\":\"a64c2a88c286cb5e1472fc79f3c8c84cad7c142a\",\"time\":1640366575000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Write docs on how to copy the coordinator ieee address\"},{\"hash\":\"44982138319682e37fabc866f6497c1c9e7aa4e7\",\"time\":1638706084000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Add Zigbee2MQTT crashes after some time to FAQ. https://github.com/Koenkk/zigbee2mqtt/issues/2308\"},{\"hash\":\"47e728ee1572f36315d90b643fcadf276882ea6b\",\"time\":1637001417000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Add copy ieee address instructions.\"},{\"hash\":\"00c0af2cc2a86ed9d271dc530265e0e9d8dc327a\",\"time\":1635697046000,\"email\":\"wio@psitrax.de\",\"author\":\"Christoph Wiechert\",\"message\":\"Newww Docu 😉 (#967)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Robin Kolk\",\"email\":\"robinkolk@msn.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koen.kanters@tno.nl\"},{\"name\":\"Burkhard Kneiseler\",\"email\":\"burkhard@kneiseler.de\"},{\"name\":\"Aleks\",\"email\":\"nitro88@yandex.ru\"},{\"name\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\"},{\"name\":\"Dirk van Donkelaar\",\"email\":\"dirk@vdde.nl\"},{\"name\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\"}]}]},\"filePathRelative\":\"guide/faq/README.md\"}");
var _sfc_main = { name: "README.md" };
var _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_router_link = resolveComponent("router-link");
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[94] || (_cache[94] = createBaseVNode("h1", {
			id: "faq",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#faq"
		}, [createBaseVNode("span", null, "FAQ")])], -1)),
		createBaseVNode("nav", _hoisted_1, [createBaseVNode("ul", null, [
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#general-limitations-that-apply-to-all-zigbee-implementations" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("General limitations that apply to all Zigbee implementations", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#my-network-is-unstable-and-or-performs-poorly-what-can-i-do" }, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("My network is unstable and/or performs poorly, what can I do?", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#why-does-my-device-not-or-fail-to-pair" }, {
				default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("Why does my device not or fail to pair?", -1)])]),
				_: 1
			}), createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#no-logging-is-shown-at-all" }, {
				default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("No logging is shown at all", -1)])]),
				_: 1
			})]), createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#interview-fails" }, {
				default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Interview fails", -1)])]),
				_: 1
			})])])]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#how-do-i-migrate-from-one-adapter-to-another" }, {
				default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("How do I migrate from one adapter to another?", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#how-do-i-move-my-zigbee2mqtt-instance-to-a-different-environment" }, {
				default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode("How do I move my Zigbee2MQTT instance to a different environment?", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#what-does-and-does-not-require-re-pairing-of-all-devices" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("What does and does not require re-pairing of all devices?", -1)])]),
				_: 1
			}), createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#requires-re-pairing" }, {
				default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("Requires re-pairing", -1)])]),
				_: 1
			})]), createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#doesn-t-require-re-pairing" }, {
				default: withCtx(() => [..._cache[9] || (_cache[9] = [createTextVNode("Doesn't require re-pairing", -1)])]),
				_: 1
			})])])]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#why-are-some-links-missing-from-my-networkmap" }, {
				default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("Why are some links missing from my networkmap?", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#how-to-interpret-rssi-and-lqi-values" }, {
				default: withCtx(() => [..._cache[11] || (_cache[11] = [createTextVNode("How to interpret RSSI and LQI values?", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#why-is-the-action-property-always-empty" }, {
				default: withCtx(() => [..._cache[12] || (_cache[12] = [createTextVNode("Why is the action property always empty?", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#i-read-that-zigbee2mqtt-has-a-limit-of-20-devices-when-using-a-cc2530-cc2531-adapter-is-this-true" }, {
				default: withCtx(() => [..._cache[13] || (_cache[13] = [createTextVNode("I read that Zigbee2MQTT has a limit of 20 devices (when using a CC2530/CC2531 adapter), is this true?", -1)])]),
				_: 1
			}), createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#example" }, {
				default: withCtx(() => [..._cache[14] || (_cache[14] = [createTextVNode("Example", -1)])]),
				_: 1
			})])])]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#common-error-codes" }, {
				default: withCtx(() => [..._cache[15] || (_cache[15] = [createTextVNode("Common error codes", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#how-do-i-run-multiple-instances-of-zigbee2mqtt" }, {
				default: withCtx(() => [..._cache[16] || (_cache[16] = [createTextVNode("How do I run multiple instances of Zigbee2MQTT?", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#zigbee2mqtt-crashes-after-some-time" }, {
				default: withCtx(() => [..._cache[17] || (_cache[17] = [createTextVNode("Zigbee2MQTT crashes after some time", -1)])]),
				_: 1
			})])
		])]),
		_cache[95] || (_cache[95] = createStaticVNode("<h2 id=\"general-limitations-that-apply-to-all-zigbee-implementations\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#general-limitations-that-apply-to-all-zigbee-implementations\"><span>General limitations that apply to all Zigbee implementations</span></a></h2><p>Note that each Zigbee2MQTT installation instance only supports connecting a single dedicated Zigbee Coordinator radio adapter or module with a single Zigbee network and that the Zigbee Coordinator cannot already be connected or used by any other application. Any devices that are or have previously been connected to another Zigbee implementation will also need to first be reset to their factory default settings before they can be paired/joined to Zigbee2MQTT, please see each device manufacturer&#39;s documentation.</p><p>Any Zigbee device is limited to only be paired/joined to one Zigbee Coordinator and only be part of one Zigbee network, meaning that Zigbee devices can only be connected to a single Zigbee gateway. If you want to move a Zigbee device to a different Zigbee network then you need to factory reset that Zigbee device and re-pair/re-join it to the other Zigbee Gateway. This is a limitation in the current (as well as previous) Zigbee protocol specifications, governed by the <a href=\"https://csa-iot.org/all-solutions/zigbee/\" target=\"_blank\" rel=\"noopener noreferrer\">CSA (Connectivity Standards Alliance)</a>, and as such, that limitation applies to all Zigbee implementations, not just the Zigbee2MQTT implementation.</p><p>Another limitation that applies to all Zigbee implementations is that there is no such thing as &quot;Zigbee over IP&quot; or &quot;Zigbee over LAN/WAN&quot; in the Zigbee protocol specifications. It is therefore not possible to extend the same Zigbee network to two separate locations or sites that can not be reached directly via Zigbee radio signals within the Zigbee network mesh. That means that there is no way to use a so-called &quot;Zigbee network adapter&quot; or similar solutions to convert and bridge a single Zigbee network communication over a different medium such as Ethernet or VPN. As such there are no network-attached remote Zigbee adapters that can span a Zigbee network to remote sites, regardless if the marketing material of such products makes it sound like they can do in &quot;Zigbee Router&quot; mode. The fact is that the &quot;Zigbee Router&quot; feature of such &quot;Zigbee network adapter&quot; products puts their Zigbee radio chip into stand-alone mode so it works like any Zigbee Router device, disconnected from the Ethernet network part in those products.</p><p>Support for commissioning Zigbee 3.0 devices via &quot;Install Code&quot; or &quot;QR Code&quot; has so far only been implemented for &#39;zstack&#39; (Texas Instruments ZNP), &#39;ember&#39; (Silicon Labs EmberZNet) and &#39;deconz&#39; (Dresden Elektronik deCONZ, requires recent coordinator firmware) adapter type radios in Zigbee2MQTT. Other radio adapter types are either missing support in their respective adapter/driver for <a href=\"https://github.com/Koenkk/zigbee-herdsman\" target=\"_blank\" rel=\"noopener noreferrer\">zigbee-herdsman</a> or more likely missing in the manufacturer&#39;s firmware commands/APIs and documentation.</p><p>Zigbee2MQTT does not currently support devices that can only use the ZSE (&quot;Zigbee Smart Energy&quot;) profile, that is however due to the &quot;Zigbee SE&quot; specification not being part of the standard Zigbee 3.0 specification that includes the more common Zigbee Home Automation + Zigbee lighting and thus not implemented in most of the Zigbee Coordinator firmware that is commonly available for Zigbee Coordinator radio adapters and modules, usually because the manufacturer offers separate Zigbee protocol stack SDK for Zigbee Smart Energy.</p><h2 id=\"my-network-is-unstable-and-or-performs-poorly-what-can-i-do\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#my-network-is-unstable-and-or-performs-poorly-what-can-i-do\"><span>My network is unstable and/or performs poorly, what can I do?</span></a></h2>", 7)),
		createBaseVNode("ul", null, [_cache[20] || (_cache[20] = createBaseVNode("li", null, "Try to restart the Zigbee device with poor/unstable connection. The route could be lost because of moving the coordinator to an other place at home.", -1)), createBaseVNode("li", null, [_cache[19] || (_cache[19] = createTextVNode("Read ", -1)), createVNode(_component_RouteLink, { to: "/advanced/zigbee/02_improve_network_range_and_stability.html" }, {
			default: withCtx(() => [..._cache[18] || (_cache[18] = [createTextVNode("Improve network range and stability", -1)])]),
			_: 1
		})])]),
		_cache[96] || (_cache[96] = createBaseVNode("h2", {
			id: "why-does-my-device-not-or-fail-to-pair",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#why-does-my-device-not-or-fail-to-pair"
		}, [createBaseVNode("span", null, "Why does my device not or fail to pair?")])], -1)),
		_cache[97] || (_cache[97] = createBaseVNode("p", null, "This problem can be divided in 2 categories; no logging is shown at all OR interview fails.", -1)),
		_cache[98] || (_cache[98] = createBaseVNode("h3", {
			id: "no-logging-is-shown-at-all",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#no-logging-is-shown-at-all"
		}, [createBaseVNode("span", null, "No logging is shown at all")])], -1)),
		createBaseVNode("ul", null, [
			createBaseVNode("li", null, [
				_cache[22] || (_cache[22] = createTextVNode("Make sure ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/usage/pairing_devices.html" }, {
					default: withCtx(() => [..._cache[21] || (_cache[21] = [createTextVNode("joining is enabled", -1)])]),
					_: 1
				}),
				_cache[23] || (_cache[23] = createTextVNode(".", -1))
			]),
			_cache[27] || (_cache[27] = createBaseVNode("li", null, "There can be too much interference, try connecting the coordinator USB through an USB extension cable. This problem occurs a lot when used in combination with a Raspberry Pi 3 and 4.", -1)),
			createBaseVNode("li", null, [
				_cache[25] || (_cache[25] = createTextVNode("If you are using a Texas Instruments CC2652 or CC1352 based adapter, routers might be missing from the coordinator memory. Do a ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-coordinator-check" }, {
					default: withCtx(() => [..._cache[24] || (_cache[24] = [createTextVNode("coordinator check", -1)])]),
					_: 1
				}),
				_cache[26] || (_cache[26] = createTextVNode(" and re-pair the missing routers.", -1))
			]),
			_cache[28] || (_cache[28] = createBaseVNode("li", null, "If you are using a Raspberry Pi, try disconnecting any other USB devices. If after that pairing works, try connecting the USB devices via a powered USB hub.", -1)),
			_cache[29] || (_cache[29] = createBaseVNode("li", null, "Make sure that any other Zigbee networks/hubs are powered down. When you e.g. want to pair an IKEA bulb which was first paired to the IKEA gateway make sure to power down the IKEA gateway. If that doesn't help also try powering down all devices that are connected to the IKEA hub.", -1)),
			_cache[30] || (_cache[30] = createBaseVNode("li", null, "If it's a battery powered device, try replacing the battery.", -1)),
			_cache[31] || (_cache[31] = createBaseVNode("li", null, "You've hit the device limit of the coordinator, especially occurs when using the CC2531 or CC2530 in combination with the source routing firmware. Try reflashing the coordinator and immediately pair the device after starting Zigbee2MQTT.", -1)),
			_cache[32] || (_cache[32] = createBaseVNode("li", null, "Try pairing the device closer to the coordinator.", -1)),
			_cache[33] || (_cache[33] = createBaseVNode("li", null, [createTextVNode("CC2531/CC2530 coordinator only: "), createBaseVNode("ul", null, [createBaseVNode("li", null, "Stop Zigbee2MQTT, unplug the coordinator, wait 10 seconds, plug the coordinator, start Zigbee2MQTT and try to pair the device again."), createBaseVNode("li", null, "If none of the above helps, try to reflash the coordinator (does not require re-pairing of already paired devices).")])], -1))
		]),
		_cache[99] || (_cache[99] = createBaseVNode("h3", {
			id: "interview-fails",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#interview-fails"
		}, [createBaseVNode("span", null, "Interview fails")])], -1)),
		createBaseVNode("ul", null, [
			_cache[41] || (_cache[41] = createBaseVNode("li", null, "Try pairing the device closer to the coordinator.", -1)),
			_cache[42] || (_cache[42] = createBaseVNode("li", null, "There can be too much interference, try connecting the coordinator USB through an USB extension cable. This problem occurs a lot when used in combination with a Raspberry Pi 4.", -1)),
			_cache[43] || (_cache[43] = createBaseVNode("li", null, "If it’s a battery powered device, try replacing the battery. Try to keep the device awake by pressing the button of the device (if any) every 3 seconds.", -1)),
			_cache[44] || (_cache[44] = createBaseVNode("li", null, "Try re-pairing the device again for 2 or 3 times.", -1)),
			createBaseVNode("li", null, [
				_cache[35] || (_cache[35] = createTextVNode("This might be a Zigbee2MQTT bug, ", -1)),
				_cache[36] || (_cache[36] = createBaseVNode("a", {
					href: "https://github.com/Koenkk/zigbee2mqtt/issues/new",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Create a new issue", -1)),
				_cache[37] || (_cache[37] = createTextVNode(" with the debug logging attached to it. ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/configuration/logging.html#debugging" }, {
					default: withCtx(() => [..._cache[34] || (_cache[34] = [createTextVNode("How to enable debug logging", -1)])]),
					_: 1
				}),
				_cache[38] || (_cache[38] = createTextVNode(".", -1))
			]),
			_cache[45] || (_cache[45] = createBaseVNode("li", null, [
				createTextVNode("If device joins with "),
				createBaseVNode("code", null, "0x000000000000000"),
				createTextVNode(" as "),
				createBaseVNode("code", null, "ieeeAddress"),
				createTextVNode(" (you will see: "),
				createBaseVNode("code", null, "Starting interview of '0x0000000000000000'"),
				createTextVNode(" in the Zigbee2MQTT log) your CC253X might be broken. "),
				createBaseVNode("a", {
					href: "https://github.com/Koenkk/zigbee2mqtt/issues/2761",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "See issue #2761"),
				createTextVNode(".")
			], -1)),
			createBaseVNode("li", null, [_cache[40] || (_cache[40] = createTextVNode("In case the device is a bulb, try resetting it through ", -1)), createVNode(_component_RouteLink, { to: "/guide/usage/touchlink.html" }, {
				default: withCtx(() => [..._cache[39] || (_cache[39] = [createTextVNode("Touchlink", -1)])]),
				_: 1
			})]),
			_cache[46] || (_cache[46] = createBaseVNode("li", null, "Try pairing close to a bulb (light) router instead of the coordinator.", -1))
		]),
		_cache[100] || (_cache[100] = createStaticVNode("<h2 id=\"how-do-i-migrate-from-one-adapter-to-another\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#how-do-i-migrate-from-one-adapter-to-another\"><span>How do I migrate from one adapter to another?</span></a></h2><p>Want to migrate from e.g. a CC2530/CC2531 to a more powerful adapter (e.g. CC2652/CC1352)? Then follow these instructions below:</p><div class=\"hint-container warning\"><p class=\"hint-container-title\">Warning</p><p>Migration from one adapter to another requires backup and restore support which is so far only implemented for the <code>zstack</code> (Texas Instrument) and <code>ember</code> adapters. Backup and restore is <strong>not supported</strong> for any other adapters (<code>conbee</code>, <code>ezsp</code>, <code>zboss</code> and <code>zigate</code>). However you might have success using <a href=\"https://github.com/Koenkk/zigbee2mqtt/discussions/26716\" target=\"_blank\" rel=\"noopener noreferrer\">this method</a>.</p><p>Note that when switching from <code>zstack</code> -&gt; <code>ember</code> or <code>ember</code> -&gt; <code>zstack</code> re-pairing <strong>might not</strong> be required, however results might vary as this is not officially supported. After switching, check if all devices are working and re-pair the ones that are not. In case pairing new devices is not working, re-pair some routers close to the coordinator while only permitting joining via the coordinator. Pairing should then work via routers that have been re-paired.</p></div>", 3)),
		createBaseVNode("ol", null, [
			_cache[54] || (_cache[54] = createBaseVNode("li", null, "First make sure you are running the latest version of Zigbee2MQTT", -1)),
			_cache[55] || (_cache[55] = createBaseVNode("li", null, "Stop Zigbee2MQTT", -1)),
			createBaseVNode("li", null, [
				_cache[52] || (_cache[52] = createTextVNode("Determine whether migrating ", -1)),
				_cache[53] || (_cache[53] = createBaseVNode("a", { href: "#what-does-and-does-not-require-re-pairing-of-all-devices" }, "requires re-pairing of your devices", -1)),
				createBaseVNode("ul", null, [_cache[51] || (_cache[51] = createBaseVNode("li", null, [
					createTextVNode("If re-pairing is required: remove "),
					createBaseVNode("code", null, "data/coordinator_backup.json"),
					createTextVNode(" (if it exists) and "),
					createBaseVNode("code", null, "data/database.db"),
					createTextVNode(" (if running as a Home Assistant addon, "),
					createBaseVNode("code", null, "data/"),
					createTextVNode(" is renamed "),
					createBaseVNode("code", null, "zigbee2mqtt/"),
					createTextVNode(")")
				], -1)), createBaseVNode("li", null, [
					_cache[48] || (_cache[48] = createTextVNode("If re-pairing is ", -1)),
					_cache[49] || (_cache[49] = createBaseVNode("strong", null, "not", -1)),
					_cache[50] || (_cache[50] = createTextVNode(" required: ", -1)),
					createVNode(_component_RouteLink, { to: "/guide/adapters/flashing/copy_ieeaddr.html" }, {
						default: withCtx(() => [..._cache[47] || (_cache[47] = [createTextVNode("copy the ieee address of the old adapter into the new one", -1)])]),
						_: 1
					})
				])])
			]),
			_cache[56] || (_cache[56] = createBaseVNode("li", null, [
				createTextVNode("Update the "),
				createBaseVNode("code", null, "serial"),
				createTextVNode(" -> "),
				createBaseVNode("code", null, "port"),
				createTextVNode(" in your "),
				createBaseVNode("code", null, "configuration.yaml"),
				createBaseVNode("ul", null, [createBaseVNode("li", null, [
					createTextVNode("Note in some cases you may also need to update the "),
					createBaseVNode("code", null, "baud"),
					createTextVNode(" if coming from an older adapter (i.e. zbt-1 -> zbt2)")
				])])
			], -1)),
			_cache[57] || (_cache[57] = createBaseVNode("li", null, "Start Zigbee2MQTT", -1))
		]),
		_cache[101] || (_cache[101] = createStaticVNode("<ul><li>If re-pairing was required: <ol><li>Disconnect power of all mains powered devices</li><li>Start re-pairing devices 1 by 1</li></ol></li><li>If re-pairing was <strong>not</strong> required and your devices do not respond; restart some routers by removing them from the mains power for a few seconds.</li></ul><h2 id=\"how-do-i-move-my-zigbee2mqtt-instance-to-a-different-environment\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#how-do-i-move-my-zigbee2mqtt-instance-to-a-different-environment\"><span>How do I move my Zigbee2MQTT instance to a different environment?</span></a></h2><p>Details about your network are stored in both the coordinator and files under the <code>data/</code> directory (if running as a Home Assistant addon, <code>data/</code> is renamed <code>zigbee2mqtt/</code>). To move your instance to another environment move the contents of the <code>data</code> directory and update the path to your coordinator in your <code>configuration.yaml</code>. Now you can start Zigbee2MQTT.</p><h2 id=\"what-does-and-does-not-require-re-pairing-of-all-devices\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#what-does-and-does-not-require-re-pairing-of-all-devices\"><span>What does and does not require re-pairing of all devices?</span></a></h2><h3 id=\"requires-re-pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#requires-re-pairing\"><span>Requires re-pairing</span></a></h3><p>You need to re-pair all you devices when:</p>", 6)),
		createBaseVNode("ul", null, [
			_cache[67] || (_cache[67] = createBaseVNode("li", null, [
				createTextVNode("Changing the network key ("),
				createBaseVNode("code", null, "network_key"),
				createTextVNode(") or panID ("),
				createBaseVNode("code", null, "pan_id"),
				createTextVNode(") in "),
				createBaseVNode("code", null, "configuration.yaml"),
				createTextVNode(".")
			], -1)),
			createBaseVNode("li", null, [
				_cache[59] || (_cache[59] = createTextVNode("Changing the Zigbee channel (", -1)),
				_cache[60] || (_cache[60] = createBaseVNode("code", null, "channel", -1)),
				_cache[61] || (_cache[61] = createTextVNode(") in the ", -1)),
				_cache[62] || (_cache[62] = createBaseVNode("code", null, "configuration.yaml", -1)),
				_cache[63] || (_cache[63] = createTextVNode(" might require re-pairing ", -1)),
				_cache[64] || (_cache[64] = createBaseVNode("strong", null, "some", -1)),
				_cache[65] || (_cache[65] = createTextVNode(" devices, read the ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/configuration/zigbee-network.html#changing-the-zigbee-channel" }, {
					default: withCtx(() => [..._cache[58] || (_cache[58] = [createTextVNode("documentation for more info", -1)])]),
					_: 1
				}),
				_cache[66] || (_cache[66] = createTextVNode(".", -1))
			]),
			_cache[68] || (_cache[68] = createStaticVNode("<li>Switching between adapters requires re-pairing, <strong>except when</strong>: <ul><li>When the <code>serial.adapter</code> in the <code>configuration.yaml</code> is <code>zstack</code> or <code>ember</code> and the <code>serial.adapter</code> stays the same; e.g. <code>zstack</code> -&gt; <code>zstack</code> re-pairing is <strong>not</strong> required. <ul><li>There is one exception, when switching from a CC2531 or CC2530 (Z-Stack 1.2) to a CC2652/CC1352 (Z-Stack 3) re-pairing <strong>is</strong> required.</li></ul></li><li>When switching from <code>zstack</code> -&gt; <code>ember</code> or <code>ember</code> -&gt; <code>zstack</code> re-pairing <strong>might not</strong> be required, however results might vary as this is not officially supported. <ul><li>After switching, check if all devices are working and re-pair the ones that are not. In case pairing new devices is not working, re-pair some routers close to the coordinator while only permitting joining via the coordinator. Pairing should then work via routers that have been re-paired.</li></ul></li></ul></li>", 1))
		]),
		_cache[102] || (_cache[102] = createStaticVNode("<h3 id=\"doesn-t-require-re-pairing\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#doesn-t-require-re-pairing\"><span>Doesn&#39;t require re-pairing</span></a></h3><p>You <strong>don&#39;t</strong> need to re-pair your devices when:</p><ul><li>Updating or downgrading Zigbee2MQTT to a different version.</li><li>Updating the coordinator firmware. <ul><li>If after flashing you fail to control your devices it helps to: <ul><li>Wait a few minutes so that the Zigbee network can settle.</li><li>Send Zigbee commands (e.g. turn on/off) to the device.</li><li>Reboot the device (unplug and plug power).</li></ul></li></ul></li><li>Switching the system running Zigbee2MQTT. <ul><li>When doing this, make sure to copy over the contents of the <code>data</code> directory.</li></ul></li></ul><h2 id=\"why-are-some-links-missing-from-my-networkmap\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#why-are-some-links-missing-from-my-networkmap\"><span>Why are some links missing from my networkmap?</span></a></h2><p>No worry, in case it happens with end devices (battery powered) it most of the times <strong>does not</strong> mean the devices aren&#39;t connected to the network map anymore. Some end devices (e.g. Xiaomi door sensor) sleep for a too long time which causes the parent (router child ageing) to remove it from it from its child table. This is what causes the missing link. Even while its not in the child table anymore, the end device can still communicate via the router. This does not always happen since not all routers use child ageing (this is a Zigbee 3.0 feature).</p><h2 id=\"how-to-interpret-rssi-and-lqi-values\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#how-to-interpret-rssi-and-lqi-values\"><span>How to interpret RSSI and LQI values?</span></a></h2><p>The network map shows multi-hop connections between your paired devices and their reported cumulative values of Received Signal Strength Indicator (RSSI) and Link Quality Indication (LQI). The exact method these values are reported depends on the Zigbee network stack used on each device. LQI values can be modified at each step as the message propagates through the mesh networking matrix.</p><p>Interpreting RSSI and LQI values is complex. Unless you are a Zigbee specialist yourself or are guided by one, please ignore those values. They can be misleading. If you delve into this, it is important to understand not to judge RSSI or LQI values on their own. When troubleshooting Zigbee messages that are being dropped, you must interpret the combination of both RSSI and LQI.</p><p>RSSI (Received Signal Strength Indicator) values are an indicator value of the raw signal strength between two devices. RSSI values are negative numbers in -dBm format (0 to -100 power ratio in decibels of the measured power referenced to one milliwatt). Lower negative values indicate less interference and a good signal. RSSI information is only between the endpoint device and the first hop from that device. As such, it may not necessarily show signal strength to the Zigbee Coordinator but instead could be showing signal strength to the nearest Zigbee Router device.</p><ul><li>Generally, anything -60 and above (meaning -50, -40, etc.) in RSSI should be considered a strong signal (not losing messages).</li><li>Anything at -80 and below (meaning -85, -90, etc.) in RSSI should be considered a noisy environment and you risk losing messages.</li></ul><p>LQI (Link Quality Index) values can be hard to interpret for Zigbee. This is because the Zigbee specifications and the (IEEE 802.15.4 specification) do not standardize how to perform LQI measurements. LQI values are shown as positive numbers on a scale. But because the value provided by the Zigbee devices is not measured using unified standards from all device manufacturers and Zigbee stacks, the values can not always be trusted. For example, Zigbee devices based on Silicon Labs EmberZNet stack use positive display numbers for LQI, where higher is better and lower is worse. The Texas Instruments Z-Stack computes LQI for each received packet from the raw “received signal strength index” (RSSI) by linearly scaling it between the minimum and maximum defined RF power levels for the radio that more or less just provides an LQI value that, based on the strength of the received signal. This can be misleading in case the user has a noisy environment with interference within the same frequency range (as the RSSI value may be shown as increased even though the true link quality decreases). Other manufacturers and Zigbee stacks measure and calculate LQI values in another way.</p><ul><li>In theory, an LQI value of 255 means a zero error rate, meaning it indicates absolute perfect link quality.</li><li>In general, a positive high LQI value is better and a lower LQI value is worse. However, depending on your devices, that might not be the reality.</li><li>Usually, if a device stays at an LQI value of 40+ or above then that link can usually be considered acceptable for normal operational conditions.</li></ul><h2 id=\"why-is-the-action-property-always-empty\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#why-is-the-action-property-always-empty\"><span>Why is the <code>action</code> property always empty?</span></a></h2><p>When the Home Assistant legacy action sensor is enabled (<code>homeassistant.legacy_action_sensor: true</code> in your <code>configuration.yaml</code>) the <code>action</code> property of your e.g. buttons will almost always be empty. Whenever an <code>action</code> is published e.g. <code>{&quot;action&quot;: &quot;single&quot;}</code> it will be immediately followed up by a <code>{&quot;action&quot;: &quot;&quot;}</code>. This is to trigger a state change in the Home Assistant action sensor (so that it can be used in e.g. automations).</p><h2 id=\"i-read-that-zigbee2mqtt-has-a-limit-of-20-devices-when-using-a-cc2530-cc2531-adapter-is-this-true\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#i-read-that-zigbee2mqtt-has-a-limit-of-20-devices-when-using-a-cc2530-cc2531-adapter-is-this-true\"><span>I read that Zigbee2MQTT has a limit of 20 devices (when using a CC2530/CC2531 adapter), is this true?</span></a></h2>", 15)),
		createBaseVNode("p", null, [
			_cache[70] || (_cache[70] = createTextVNode("Definitely not! Example given: the default Zigbee2MQTT CC2531 firmware indeed supports 20 devices connected ", -1)),
			_cache[71] || (_cache[71] = createBaseVNode("strong", null, "directly", -1)),
			_cache[72] || (_cache[72] = createTextVNode(" to the coordinator. However, by having routers in your network the network size can be extended. Probably all AC powered devices e.g. bulbs serve as a router, you can even use another ", -1)),
			createVNode(_component_RouteLink, { to: "/advanced/zigbee/05_create_a_cc2530_router.html" }, {
				default: withCtx(() => [..._cache[69] || (_cache[69] = [createTextVNode("CC2530/CC2531 as a router", -1)])]),
				_: 1
			}),
			_cache[73] || (_cache[73] = createTextVNode(" (which has a limit of 21 devices).", -1))
		]),
		_cache[103] || (_cache[103] = createStaticVNode("<h3 id=\"example\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#example\"><span>Example</span></a></h3><p>When using the default Zigbee2MQTT CC2531 coordinator firmware + 2 CC2531 routers your device limit will be:</p><ul><li>Coordinator: 15 - 2 routers = 13</li><li>Router 1: 21</li><li>Router 2: 21</li><li><strong>Device limit of 55 devices</strong></li></ul><h2 id=\"common-error-codes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#common-error-codes\"><span>Common error codes</span></a></h2><p>A list of common error codes and what to do in case of them:</p>", 5)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [
			_cache[75] || (_cache[75] = createBaseVNode("code", null, "MAC_CHANNEL_ACCESS_FAILURE", -1)),
			_cache[76] || (_cache[76] = createTextVNode(": this happens when the wireless spectrum is too occupied. Mostly happens when a microwave is on or when there are WiFi networks on the same channel. See ", -1)),
			createVNode(_component_RouteLink, { to: "/advanced/zigbee/02_improve_network_range_and_stability.html#reduce-wifi-interference-by-changing-the-zigbee-channel" }, {
				default: withCtx(() => [..._cache[74] || (_cache[74] = [createTextVNode("Reduce Wifi interference by changing the Zigbee channel", -1)])]),
				_: 1
			}),
			_cache[77] || (_cache[77] = createTextVNode(" how to fix this.", -1))
		]), _cache[78] || (_cache[78] = createBaseVNode("li", null, [
			createBaseVNode("code", null, "NWK_TABLE_FULL"),
			createTextVNode(": "),
			createBaseVNode("a", {
				href: "https://github.com/Koenkk/zigbee2mqtt/issues/4964#issuecomment-757022560",
				target: "_blank",
				rel: "noopener noreferrer"
			}, "reported"),
			createTextVNode(" to have same root cause as the above "),
			createBaseVNode("code", null, "MAC_CHANNEL_ACCESS_FAILURE")
		], -1))]),
		_cache[104] || (_cache[104] = createBaseVNode("h2", {
			id: "how-do-i-run-multiple-instances-of-zigbee2mqtt",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#how-do-i-run-multiple-instances-of-zigbee2mqtt"
		}, [createBaseVNode("span", null, "How do I run multiple instances of Zigbee2MQTT?")])], -1)),
		createBaseVNode("p", null, [
			_cache[80] || (_cache[80] = createTextVNode("In case you setup multiple instances of Zigbee2MQTT it's important to use a different ", -1)),
			_cache[81] || (_cache[81] = createBaseVNode("code", null, "base_topic", -1)),
			_cache[82] || (_cache[82] = createTextVNode(" and ", -1)),
			_cache[83] || (_cache[83] = createBaseVNode("code", null, "channel", -1)),
			_cache[84] || (_cache[84] = createTextVNode(". This can be configured in the ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/" }, {
				default: withCtx(() => [..._cache[79] || (_cache[79] = [createBaseVNode("code", null, "configuration.yaml", -1)])]),
				_: 1
			}),
			_cache[85] || (_cache[85] = createTextVNode(".", -1))
		]),
		_cache[105] || (_cache[105] = createBaseVNode("h2", {
			id: "zigbee2mqtt-crashes-after-some-time",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#zigbee2mqtt-crashes-after-some-time"
		}, [createBaseVNode("span", null, "Zigbee2MQTT crashes after some time")])], -1)),
		_cache[106] || (_cache[106] = createBaseVNode("p", null, [
			createTextVNode("If after some uptime Zigbee2MQTT crashes with errors like: "),
			createBaseVNode("code", null, "SRSP - AF - dataRequest after 6000ms"),
			createTextVNode(" or "),
			createBaseVNode("code", null, "SRSP - ZDO - mgmtPermitJoinReq after 6000ms"),
			createTextVNode(" it means the adapter has crashed.")
		], -1)),
		createBaseVNode("ul", null, [
			_cache[92] || (_cache[92] = createBaseVNode("li", null, [createBaseVNode("p", null, "Normally this can be fixed by replugging the adapter and restarting Zigbee2MQTT")], -1)),
			createBaseVNode("li", null, [createBaseVNode("p", null, [
				_cache[87] || (_cache[87] = createTextVNode("If you are using a CC2530 or CC2531 adapter consider upgrading to one of the ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/adapters/" }, {
					default: withCtx(() => [..._cache[86] || (_cache[86] = [createTextVNode("recommended adapters", -1)])]),
					_: 1
				}),
				_cache[88] || (_cache[88] = createTextVNode(". The CC2530/CC2531 is considered legacy hardware and runs into memory corruption easily.", -1))
			])]),
			createBaseVNode("li", null, [createBaseVNode("p", null, [
				_cache[90] || (_cache[90] = createTextVNode("Make sure you are using the latest firmware on your adapter, see the ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/adapters/" }, {
					default: withCtx(() => [..._cache[89] || (_cache[89] = [createTextVNode("adapter page", -1)])]),
					_: 1
				}),
				_cache[91] || (_cache[91] = createTextVNode(" for a link to the latest firmware.", -1))
			])]),
			_cache[93] || (_cache[93] = createStaticVNode("<li><p>If using a Raspberry Pi; this problem can occur if you are using a bad power supply or when other USB devices are connected directly to the Pi (especially occurs with external SSD), try connecting other USB devices through a powered USB hub.</p></li><li><p>Disable the USB autosuspend feature, if <code>cat /sys/module/usbcore/parameters/autosuspend</code> returns <code>1</code> or <code>2</code> it is enabled; to disable execute:</p><div class=\"language-bash line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"sh\"><pre><code class=\"language-bash\"><span class=\"line\"><span class=\"token function\">sed</span> <span class=\"token parameter variable\">-i</span> <span class=\"token string\">&#39;s/GRUB_CMDLINE_LINUX_DEFAULT=&quot;/&amp;usbcore.autosuspend=-1 /&#39;</span> /etc/default/grub</span>\n<span class=\"line\"><span class=\"token function\">update-grub</span></span>\n<span class=\"line\">systemctl <span class=\"token function\">reboot</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><ul><li>On a Raspberry Pi, you will need to instead edit <code>/boot/cmdline.txt</code> and add <code>usbcore.autosuspend=-1</code> to the end of the line.</li></ul></li>", 2))
		])
	]);
}
var README_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, README_default as default };
