import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/advanced/zigbee/01_zigbee_network.md
var _pageData = JSON.parse("{\"path\":\"/advanced/zigbee/01_zigbee_network.html\",\"title\":\"Zigbee network\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"redirectFrom\":\"/information/zigbee_network.md\"},\"git\":{\"updatedTime\":1779131202000,\"contributors\":[{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":22},{\"name\":\"VivantSenior\",\"username\":\"VivantSenior\",\"email\":\"49829548+VivantSenior@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/VivantSenior\"},{\"name\":\"mr G1K\",\"username\":\"\",\"email\":\"G1K@users.noreply.github.com\",\"commits\":2},{\"name\":\"nateww\",\"username\":\"nateww\",\"email\":\"8377844+nateww@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/nateww\"},{\"name\":\"Will Uther\",\"username\":\"\",\"email\":\"will@uther.id.au\",\"commits\":1},{\"name\":\"Christoph Wiechert\",\"username\":\"\",\"email\":\"wio@psitrax.de\",\"commits\":1},{\"name\":\"github-actions[bot]\",\"username\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/github-actions[bot]\"},{\"name\":\"Robin Kolk\",\"username\":\"\",\"email\":\"robinkolk@msn.com\",\"commits\":1},{\"name\":\"Burkhard Kneiseler\",\"username\":\"\",\"email\":\"burkhard@kneiseler.de\",\"commits\":1},{\"name\":\"Aleks\",\"username\":\"Aleks\",\"email\":\"nitro88@yandex.ru\",\"commits\":1,\"url\":\"https://github.com/Aleks\"},{\"name\":\"danieledwardgeorgehitchcock\",\"username\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\",\"commits\":1,\"url\":\"https://github.com/danieledwardgeorgehitchcock\"},{\"name\":\"Dirk van Donkelaar\",\"username\":\"\",\"email\":\"dirk@vdde.nl\",\"commits\":1},{\"name\":\"rodriguezst\",\"username\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/rodriguezst\"},{\"name\":\"G3RB3N\",\"username\":\"G3RB3N\",\"email\":\"gerbenvaneerten@gmail.com\",\"commits\":1,\"url\":\"https://github.com/G3RB3N\"},{\"name\":\"Ernst\",\"username\":\"Ernst\",\"email\":\"ernst.kloppenburg@gmx.de\",\"commits\":1,\"url\":\"https://github.com/Ernst\"},{\"name\":\"Mattheus\",\"username\":\"Mattheus\",\"email\":\"mail@tioan.org\",\"commits\":1,\"url\":\"https://github.com/Mattheus\"},{\"name\":\"papcik\",\"username\":\"papcik\",\"email\":\"33007019+papcik@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/papcik\"},{\"name\":\"Tom Tonic\",\"username\":\"\",\"email\":\"tom@tomtonic.de\",\"commits\":1},{\"name\":\"tausen\",\"username\":\"tausen\",\"email\":\"mathias.tausen@gmail.com\",\"commits\":1,\"url\":\"https://github.com/tausen\"},{\"name\":\"burmistrzak\",\"username\":\"burmistrzak\",\"email\":\"61958704+burmistrzak@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/burmistrzak\"},{\"name\":\"chris-1243\",\"username\":\"chris-1243\",\"email\":\"142902565+chris-1243@users.noreply.github.com\",\"commits\":8,\"url\":\"https://github.com/chris-1243\"},{\"name\":\"Nerivec\",\"username\":\"Nerivec\",\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Nerivec\"}],\"changelog\":[{\"hash\":\"aa4299706eb2a81313ccdf59057ab009d858dd7c\",\"time\":1779131202000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"feat: add redirect plugin (#5130)\"},{\"hash\":\"bb828540982fbbe22de285c472d48eef0dc97d5b\",\"time\":1760647413000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Rename <code>ZigBee</code> -> <code>Zigbee</code> (#4293)\"},{\"hash\":\"d43307084f822b65e6232d2a15a50a08751bc618\",\"time\":1746338438000,\"email\":\"142902565+chris-1243@users.noreply.github.com\",\"author\":\"chris-1243\",\"message\":\"Update GP Proxies &#x26; Sinks (#3758)\"},{\"hash\":\"04118d93a8c620e67bbb75c3b8ae28733bc15125\",\"time\":1744914195000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Update zcl links\"},{\"hash\":\"ee638aae2fe0c44bc7c43610f8b23a0848167b52\",\"time\":1744832589000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Fix ZCL links\"},{\"hash\":\"a4c845233c741a22803f6a5ab654028daaf837bd\",\"time\":1741280630000,\"email\":\"142902565+chris-1243@users.noreply.github.com\",\"author\":\"chris-1243\",\"message\":\"Update 01_zigbee_network.md (#3575)\"},{\"hash\":\"314d11b4e1bbbfb3d41e76329ff5a7d25b8d19bc\",\"time\":1739893146000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Fix links\"},{\"hash\":\"8ca7ad6854693ba413517ccde5bda75f17451ce7\",\"time\":1735739428000,\"email\":\"142902565+chris-1243@users.noreply.github.com\",\"author\":\"chris-1243\",\"message\":\"Update 01_zigbee_network.md (#3379)\"},{\"hash\":\"ca50f6f17a7b69be84e6e40ae1e3749b86d2147e\",\"time\":1735588649000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Revert \\\"Update 01_zigbee_network.md\\\" (#3371)\"},{\"hash\":\"28d85d648d5d3e45c8d75bc4634bb8bd4f40efdf\",\"time\":1735565637000,\"email\":\"142902565+chris-1243@users.noreply.github.com\",\"author\":\"chris-1243\",\"message\":\"Update 01_zigbee_network.md (#3368)\"},{\"hash\":\"6bb18909d630f975e754eeebd9695c0f22232c06\",\"time\":1733947639000,\"email\":\"142902565+chris-1243@users.noreply.github.com\",\"author\":\"chris-1243\",\"message\":\"Update 01_zigbee_network.md (#3318)\"},{\"hash\":\"77e931a60ed646c78129a2c3044e17f0088922fa\",\"time\":1727901033000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Fix link\"},{\"hash\":\"06ef3facdd457a73ec884b23ac565009131e10be\",\"time\":1727033107000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"lint\"},{\"hash\":\"7506629e31b91beb06fbc9d29152e31888a23635\",\"time\":1726226564000,\"email\":\"142902565+chris-1243@users.noreply.github.com\",\"author\":\"chris-1243\",\"message\":\"Update 01_zigbee_network.md (#3020)\"},{\"hash\":\"8c2cf20fe7d7c953806f3401dabb06e8fad9130e\",\"time\":1724870236000,\"email\":\"142902565+chris-1243@users.noreply.github.com\",\"author\":\"chris-1243\",\"message\":\"Update 01_zigbee_network.md (#2976)\"},{\"hash\":\"f57ed8cd07b50e42980165d6cc5967d7f983197f\",\"time\":1723570680000,\"email\":\"142902565+chris-1243@users.noreply.github.com\",\"author\":\"chris-1243\",\"message\":\"Update 01_zigbee_network.md (#2948)\"},{\"hash\":\"f89e65dec7c1cbf82a5a0e1587e849cc98530e94\",\"time\":1722278811000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Implement prettier (automatic changes)\"},{\"hash\":\"33253ddab1dbf7b53996dbca530c7e57696881bb\",\"time\":1718881204000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Fix gp table\"},{\"hash\":\"7eb7a4137dc9007cbba2a81da48dd1b91e60a9ab\",\"time\":1718822951000,\"email\":\"61958704+burmistrzak@users.noreply.github.com\",\"author\":\"burmistrzak\",\"message\":\"Updated table of known ZGP proxies (#2824)\"},{\"hash\":\"ff9c87a7f9ea2aea2f7bf3bd5c47601f2fa2bcac\",\"time\":1718552178000,\"email\":\"61958704+burmistrzak@users.noreply.github.com\",\"author\":\"burmistrzak\",\"message\":\"Add table of known ZGP routers (#2811)\"},{\"hash\":\"9fa03e73995df006928359e9a9630ec83ae4e947\",\"time\":1681228996000,\"email\":\"mathias.tausen@gmail.com\",\"author\":\"tausen\",\"message\":\"Green power, broadcasts and congestion (#1993)\"},{\"hash\":\"e5654a472e51ac156b247d8d3f5ab6d8595fb943\",\"time\":1674985871000,\"email\":\"tom@tomtonic.de\",\"author\":\"Tom Tonic\",\"message\":\"added another <em>dedicated</em> router option (#1850)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"4f9a4e2ec7dc32710d81730c18ddb625e33e98b2\",\"time\":1665512464000,\"email\":\"33007019+papcik@users.noreply.github.com\",\"author\":\"papcik\",\"message\":\"Update obsolete link (#1632)\"},{\"hash\":\"656a1dfa5a5292141cb7f0179ef9c7db23790b3f\",\"time\":1639069191000,\"email\":\"mail@tioan.org\",\"author\":\"Mattheus\",\"message\":\"Fix broken link for Cluster Library (#1061)\"},{\"hash\":\"f3dcf0fdcb44982ed9feb9024879c6bb7e60c162\",\"time\":1637412006000,\"email\":\"ernst.kloppenburg@gmx.de\",\"author\":\"Ernst\",\"message\":\"language fixes to the advanced zigbee documentation (trivial) (#1026)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"a77172e92d02c6f62cc68d252dc32e88e0b3a273\",\"time\":1636657377000,\"email\":\"gerbenvaneerten@gmail.com\",\"author\":\"G3RB3N\",\"message\":\"Update 01_zigbee_network.md (#1005)\"},{\"hash\":\"00c0af2cc2a86ed9d271dc530265e0e9d8dc327a\",\"time\":1635697046000,\"email\":\"wio@psitrax.de\",\"author\":\"Christoph Wiechert\",\"message\":\"Newww Docu 😉 (#967)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Robin Kolk\",\"email\":\"robinkolk@msn.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koen.kanters@tno.nl\"},{\"name\":\"Burkhard Kneiseler\",\"email\":\"burkhard@kneiseler.de\"},{\"name\":\"Aleks\",\"email\":\"nitro88@yandex.ru\"},{\"name\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\"},{\"name\":\"Dirk van Donkelaar\",\"email\":\"dirk@vdde.nl\"},{\"name\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\"}]},{\"hash\":\"cee7d5adf4db478d8a1333a025de190cfacca512\",\"time\":1600756729000,\"email\":\"will@uther.id.au\",\"author\":\"Will Uther\",\"message\":\"Add a description of Zigbee Networking and the Zigbee Cluster Library, and how Zigbee2MQTT fits. (#399)\"},{\"hash\":\"3ec9600061a285674d1effeb8074ed39c3c516f9\",\"time\":1596270153000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Make Zigbee2MQTT naming consistent\"},{\"hash\":\"6538e1c067b76f7fb0809832f916ddd40bd891b4\",\"time\":1575920638000,\"email\":\"8377844+nateww@users.noreply.github.com\",\"author\":\"Nate\",\"message\":\"Devices are markdown files (#172)\"},{\"hash\":\"e2852ad580e509003fc65ac40918513f443a266c\",\"time\":1573304827000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Refactors docs.\"},{\"hash\":\"ec92e31c14715120ce323dbefb4b0befa2c1bed5\",\"time\":1563818897000,\"email\":\"G1K@users.noreply.github.com\",\"author\":\"mr G1K\",\"message\":\"Reorganizing files #91 (#92)\"},{\"hash\":\"bced6854e32583bae2b0f2e3c1ecfdfe9c675a65\",\"time\":1563712444000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Revert \\\"reorganizing files (#91)\\\"\"},{\"hash\":\"d9aa666705f39d10158116de70774b1de698bef9\",\"time\":1563711268000,\"email\":\"G1K@users.noreply.github.com\",\"author\":\"mr G1K\",\"message\":\"reorganizing files (#91)\"},{\"hash\":\"351c2b0af9d3a26ad44f89e5e466efae1d264213\",\"time\":1561567596000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Point to new firmwares.\"},{\"hash\":\"3fa888ac203a2e686b4690f81128abd2fb2f5cf8\",\"time\":1559667659000,\"email\":\"49829548+VivantSenior@users.noreply.github.com\",\"author\":\"VivantSenior\",\"message\":\"Additional info about Xiaomi Wall Switches (#71)\"},{\"hash\":\"3ccfc49d2ec89f1c5edb56ae91571bd34e835f09\",\"time\":1557689279000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Point to new firmware.\"},{\"hash\":\"4bf34393d5e275b0801e4c80e0cc34c294fac5e5\",\"time\":1554651346000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"1.3.0 docs.\"},{\"hash\":\"853a889b18cdce30b7f96ed18b7ba36660984e63\",\"time\":1549997402000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Initial commit.\"}]},\"filePathRelative\":\"advanced/zigbee/01_zigbee_network.md\"}");
var _sfc_main = { name: "01_zigbee_network.md" };
var _hoisted_1 = { style: { "text-align": "left" } };
var _hoisted_2 = { style: { "text-align": "left" } };
var _hoisted_3 = { style: { "text-align": "left" } };
var _hoisted_4 = { style: { "text-align": "left" } };
var _hoisted_5 = { style: { "text-align": "left" } };
var _hoisted_6 = { style: { "text-align": "left" } };
var _hoisted_7 = { style: { "text-align": "left" } };
var _hoisted_8 = { style: { "text-align": "left" } };
var _hoisted_9 = { style: { "text-align": "left" } };
var _hoisted_10 = { style: { "text-align": "left" } };
var _hoisted_11 = { style: { "text-align": "left" } };
var _hoisted_12 = { style: { "text-align": "left" } };
var _hoisted_13 = { style: { "text-align": "left" } };
var _hoisted_14 = { style: { "text-align": "left" } };
var _hoisted_15 = { style: { "text-align": "left" } };
var _hoisted_16 = { style: { "text-align": "left" } };
var _hoisted_17 = { style: { "text-align": "left" } };
var _hoisted_18 = { style: { "text-align": "left" } };
var _hoisted_19 = { style: { "text-align": "left" } };
var _hoisted_20 = { style: { "text-align": "left" } };
var _hoisted_21 = { style: { "text-align": "left" } };
var _hoisted_22 = { style: { "text-align": "left" } };
var _hoisted_23 = { style: { "text-align": "left" } };
var _hoisted_24 = { style: { "text-align": "left" } };
var _hoisted_25 = { style: { "text-align": "left" } };
var _hoisted_26 = { style: { "text-align": "left" } };
var _hoisted_27 = { style: { "text-align": "left" } };
var _hoisted_28 = { style: { "text-align": "left" } };
var _hoisted_29 = { style: { "text-align": "left" } };
var _hoisted_30 = { style: { "text-align": "left" } };
var _hoisted_31 = { style: { "text-align": "left" } };
var _hoisted_32 = { style: { "text-align": "left" } };
var _hoisted_33 = { style: { "text-align": "left" } };
var _hoisted_34 = { style: { "text-align": "left" } };
var _hoisted_35 = { style: { "text-align": "left" } };
var _hoisted_36 = { style: { "text-align": "left" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[154] || (_cache[154] = createStaticVNode("<h1 id=\"zigbee-network\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zigbee-network\"><span>Zigbee network</span></a></h1><h2 id=\"device-types\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#device-types\"><span>Device types</span></a></h2><p>In Zigbee, there are three different types of devices: end device, router, and coordinator. A Zigbee network always has <strong>one</strong> (and no more) coordinator, and can have multiple routers and end devices. In the case of Zigbee2MQTT, the coordinator is your CC2531 USB stick.</p><h3 id=\"end-device\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#end-device\"><span>End Device</span></a></h3><p>End devices do not route traffic. They may also sleep, which makes end devices a suitable choice for battery operated devices. An end device only has one parent, either the coordinator or a router, generally the closest device when it was paired. All communications to and from the end device is via their parent. If a parent router goes offline all traffic to its children will cease until those end devices time out and attempt to find a new parent. Some models of end device, notably Xiaomi, don&#39;t attempt to find a new parent so will remain isolated until re-paired with the network.</p><p><em>Examples: WXKG01LM, RTCGQ01LM, MCCGQ11LM</em></p><h3 id=\"router\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#router\"><span>Router</span></a></h3><p>Routers are responsible for routing traffic between different nodes. Routers may not sleep. As such, routers are not a suitable choice for battery operated devices. Routers are also responsible for receiving and storing messages intended for their children. In addition to this, routers are the gate keepers to the network. They are responsible for allowing new nodes to join the network.</p><p><em>Examples: LED1545G12, 7146060PH, ZNCZ02LM, <a href=\"https://github.com/Koenkk/Z-Stack-firmware/tree/master/router/Z-Stack_Home_1.2/bin\" target=\"_blank\" rel=\"noopener noreferrer\">CC2531 USB sniffer flashed with the router firmware</a>, <a href=\"https://www.zigbee2mqtt.io/devices/ZBDongle-E.html\" target=\"_blank\" rel=\"noopener noreferrer\">SONOFF ZBDongle-E-based router</a></em></p><p><em>Note: Some devices advertising router functionality in a Zigbee network perform poorly and can thus effectively lower the stability of your Zigbee network.</em></p><h3 id=\"coordinator\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#coordinator\"><span>Coordinator</span></a></h3><p>A coordinator is a special router. In addition to all of the router capabilities, the coordinator is responsible for forming the network. To do that, it must select the appropriate channel, PAN ID, and extended network address. It is also responsible for selecting the security mode of the network.</p><p><em>Examples: <a href=\"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/default\" target=\"_blank\" rel=\"noopener noreferrer\">CC2531 USB sniffer flashed with the coordinator firmware</a></em></p><h3 id=\"finding-out-the-type-of-your-device\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#finding-out-the-type-of-your-device\"><span>Finding out the type of your device</span></a></h3><p>Zigbee2MQTT logs the device type of your devices on startup, e.g.:</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">2018-5-28 20:39:46 INFO 0x00158d00018255df (0x00158d00018255df): ZNCZ02LM - Xiaomi Mi power plug Zigbee (Router)</span>\n<span class=\"line\">2018-5-28 20:39:46 INFO 0x00158d0001b79111 (0x00158d0001b79111): WSDCGQ01LM - Xiaomi MiJia temperature &amp; humidity sensor (EndDevice)</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h3 id=\"green-power-devices\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#green-power-devices\"><span>Green Power devices</span></a></h3><p>Zigbee Green Power devices are special end devices that are designed to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first by a Green Power &quot;proxy&quot;. This means the Green Power device must be in range of a regular Zigbee device that supports the Green Power proxy role. Examples are Philips Hue and (at least some) Ikea Tradfri bulbs.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p>", 19)),
		createBaseVNode("p", null, [
			_cache[1] || (_cache[1] = createTextVNode("When pairing a Green Power device, you must choose whether translated messages should be re-transmitted by unicast or broadcast. Only ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/pairing_devices.html" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("enable join", -1)])]),
				_: 1
			}),
			_cache[2] || (_cache[2] = createTextVNode(" on a specific device to use unicast for this Green Power device. Enable join on all devices to use broadcast. Do note that each proxy will generate a unique broadcast for each Green Power event, and a single keypress may generate more than one event (e.g. \"key down\" then \"key up\"). If there are multiple proxies paired with a Green Power device, this may generate ", -1)),
			_cache[3] || (_cache[3] = createBaseVNode("em", null, "a lot", -1)),
			_cache[4] || (_cache[4] = createTextVNode(" of traffic.", -1))
		]),
		_cache[155] || (_cache[155] = createBaseVNode("p", null, [createBaseVNode("em", null, "Example Green Power devices: PTM 215Z, SR-ZGP2801K-5C, SR-ZGP2801K2-DIM, SR-ZGP2801K4-DIM")], -1)),
		createBaseVNode("p", null, [createBaseVNode("em", null, [
			_cache[6] || (_cache[6] = createTextVNode("Note: Heavy use of broadcasts can negatively impact performance of your network (See ", -1)),
			createVNode(_component_RouteLink, { to: "/advanced/zigbee/02_improve_network_range_and_stability.html" }, {
				default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("Broadcasts", -1)])]),
				_: 1
			}),
			_cache[7] || (_cache[7] = createTextVNode(").", -1))
		])]),
		_cache[156] || (_cache[156] = createBaseVNode("h4", {
			id: "gp-proxies-sinks",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#gp-proxies-sinks"
		}, [createBaseVNode("span", null, "GP Proxies & Sinks")])], -1)),
		_cache[157] || (_cache[157] = createBaseVNode("p", null, "The following Zigbee routers have already been confirmed to support (at least some) ZGP features. Other devices very likely also work without issues, they just haven't been added to this table yet.", -1)),
		createBaseVNode("table", null, [_cache[153] || (_cache[153] = createBaseVNode("thead", null, [createBaseVNode("tr", null, [
			createBaseVNode("th", { style: { "text-align": "left" } }, "Zigbee Router"),
			createBaseVNode("th", { style: { "text-align": "center" } }, "GP Proxy"),
			createBaseVNode("th", { style: { "text-align": "center" } }, "GP Sink"),
			createBaseVNode("th", { style: { "text-align": "center" } }, "Unicast")
		])], -1)), createBaseVNode("tbody", null, [
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_1, [createVNode(_component_RouteLink, { to: "/devices/ti.router.html" }, {
					default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("Custom devices (DiY) TI Router", -1)])]),
					_: 1
				})]),
				_cache[9] || (_cache[9] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[10] || (_cache[10] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[11] || (_cache[11] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_2, [createVNode(_component_RouteLink, { to: "/devices/E160x_E170x_E190x.html" }, {
					default: withCtx(() => [..._cache[12] || (_cache[12] = [createTextVNode("IKEA E160x/E170x/E190x", -1)])]),
					_: 1
				})]),
				_cache[13] || (_cache[13] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[14] || (_cache[14] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[15] || (_cache[15] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_3, [createVNode(_component_RouteLink, { to: "/devices/E22x4.html" }, {
					default: withCtx(() => [..._cache[16] || (_cache[16] = [createTextVNode("IKEA E22x4", -1)])]),
					_: 1
				})]),
				_cache[17] || (_cache[17] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[18] || (_cache[18] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[19] || (_cache[19] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_4, [createVNode(_component_RouteLink, { to: "/devices/ICPSHC24-10EU-IL-1_ICPSHC24-10EU-IL-2.html" }, {
					default: withCtx(() => [..._cache[20] || (_cache[20] = [createTextVNode("IKEA ICPSHC24-10EU-IL-2", -1)])]),
					_: 1
				}), _cache[21] || (_cache[21] = createTextVNode("²", -1))]),
				_cache[22] || (_cache[22] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[23] || (_cache[23] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[24] || (_cache[24] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_5, [createVNode(_component_RouteLink, { to: "/devices/L2112.html" }, {
					default: withCtx(() => [..._cache[25] || (_cache[25] = [createTextVNode("IKEA L2112", -1)])]),
					_: 1
				})]),
				_cache[26] || (_cache[26] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[27] || (_cache[27] = createBaseVNode("td", { style: { "text-align": "center" } }, "y", -1)),
				_cache[28] || (_cache[28] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_6, [createVNode(_component_RouteLink, { to: "/devices/LED2101G4.html" }, {
					default: withCtx(() => [..._cache[29] || (_cache[29] = [createTextVNode("IKEA LED2101G4", -1)])]),
					_: 1
				})]),
				_cache[30] || (_cache[30] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[31] || (_cache[31] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[32] || (_cache[32] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_7, [createVNode(_component_RouteLink, { to: "/devices/LED2103G5.html" }, {
					default: withCtx(() => [..._cache[33] || (_cache[33] = [createTextVNode("IKEA LED2103G5", -1)])]),
					_: 1
				})]),
				_cache[34] || (_cache[34] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[35] || (_cache[35] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[36] || (_cache[36] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_8, [createVNode(_component_RouteLink, { to: "/devices/LED2109G6.html" }, {
					default: withCtx(() => [..._cache[37] || (_cache[37] = [createTextVNode("IKEA LED2109G6", -1)])]),
					_: 1
				})]),
				_cache[38] || (_cache[38] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[39] || (_cache[39] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[40] || (_cache[40] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_9, [createVNode(_component_RouteLink, { to: "/devices/LED2107C4.html" }, {
					default: withCtx(() => [..._cache[41] || (_cache[41] = [createTextVNode("IKEA LED2107C4", -1)])]),
					_: 1
				})]),
				_cache[42] || (_cache[42] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[43] || (_cache[43] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[44] || (_cache[44] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_10, [createVNode(_component_RouteLink, { to: "/devices/LED2110R3.html" }, {
					default: withCtx(() => [..._cache[45] || (_cache[45] = [createTextVNode("IKEA LED2110R3", -1)])]),
					_: 1
				})]),
				_cache[46] || (_cache[46] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[47] || (_cache[47] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[48] || (_cache[48] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_11, [createVNode(_component_RouteLink, { to: "/devices/RB_249_T.html" }, {
					default: withCtx(() => [..._cache[49] || (_cache[49] = [createTextVNode("Innr RB 249 T", -1)])]),
					_: 1
				})]),
				_cache[50] || (_cache[50] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[51] || (_cache[51] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[52] || (_cache[52] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_12, [createVNode(_component_RouteLink, { to: "/devices/RB_286_C.html" }, {
					default: withCtx(() => [..._cache[53] || (_cache[53] = [createTextVNode("Innr RB 286 C", -1)])]),
					_: 1
				})]),
				_cache[54] || (_cache[54] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[55] || (_cache[55] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[56] || (_cache[56] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_13, [createVNode(_component_RouteLink, { to: "/devices/1742930P7.html" }, {
					default: withCtx(() => [..._cache[57] || (_cache[57] = [createTextVNode("Philips 1742930P7", -1)])]),
					_: 1
				})]),
				_cache[58] || (_cache[58] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[59] || (_cache[59] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[60] || (_cache[60] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_14, [createVNode(_component_RouteLink, { to: "/devices/3216131P5.html" }, {
					default: withCtx(() => [..._cache[61] || (_cache[61] = [createTextVNode("Philips 3216131P5", -1)])]),
					_: 1
				})]),
				_cache[62] || (_cache[62] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[63] || (_cache[63] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[64] || (_cache[64] = createBaseVNode("td", { style: { "text-align": "center" } }, "Nⁱ", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_15, [createVNode(_component_RouteLink, { to: "/devices/3261030P7.html" }, {
					default: withCtx(() => [..._cache[65] || (_cache[65] = [createTextVNode("Philips 3261030P7", -1)])]),
					_: 1
				})]),
				_cache[66] || (_cache[66] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[67] || (_cache[67] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[68] || (_cache[68] = createBaseVNode("td", { style: { "text-align": "center" } }, "Nⁱ", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_16, [createVNode(_component_RouteLink, { to: "/devices/3261031P6.html" }, {
					default: withCtx(() => [..._cache[69] || (_cache[69] = [createTextVNode("Philips 3261031P6", -1)])]),
					_: 1
				})]),
				_cache[70] || (_cache[70] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[71] || (_cache[71] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[72] || (_cache[72] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_17, [createVNode(_component_RouteLink, { to: "/devices/3261331P7.html" }, {
					default: withCtx(() => [..._cache[73] || (_cache[73] = [createTextVNode("Philips 3261331P7", -1)])]),
					_: 1
				})]),
				_cache[74] || (_cache[74] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[75] || (_cache[75] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[76] || (_cache[76] = createBaseVNode("td", { style: { "text-align": "center" } }, "Nⁱ", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_18, [createVNode(_component_RouteLink, { to: "/devices/3418931P6.html" }, {
					default: withCtx(() => [..._cache[77] || (_cache[77] = [createTextVNode("Philips 3418931P6", -1)])]),
					_: 1
				})]),
				_cache[78] || (_cache[78] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[79] || (_cache[79] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[80] || (_cache[80] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_19, [createVNode(_component_RouteLink, { to: "/devices/4023330P7.html" }, {
					default: withCtx(() => [..._cache[81] || (_cache[81] = [createTextVNode("Philips 4023330P7", -1)])]),
					_: 1
				})]),
				_cache[82] || (_cache[82] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[83] || (_cache[83] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[84] || (_cache[84] = createBaseVNode("td", { style: { "text-align": "center" } }, "Nⁱ", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_20, [createVNode(_component_RouteLink, { to: "/devices/4034031P7.html" }, {
					default: withCtx(() => [..._cache[85] || (_cache[85] = [createTextVNode("Philips 4034031P7", -1)])]),
					_: 1
				})]),
				_cache[86] || (_cache[86] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[87] || (_cache[87] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[88] || (_cache[88] = createBaseVNode("td", { style: { "text-align": "center" } }, "Nⁱ", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_21, [createVNode(_component_RouteLink, { to: "/devices/4090230P9.html" }, {
					default: withCtx(() => [..._cache[89] || (_cache[89] = [createTextVNode("Philips 4090230P9", -1)])]),
					_: 1
				})]),
				_cache[90] || (_cache[90] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[91] || (_cache[91] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[92] || (_cache[92] = createBaseVNode("td", { style: { "text-align": "center" } }, "Nⁱ", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_22, [createVNode(_component_RouteLink, { to: "/devices/5047130P9.html" }, {
					default: withCtx(() => [..._cache[93] || (_cache[93] = [createTextVNode("Philips 5047130P9", -1)])]),
					_: 1
				})]),
				_cache[94] || (_cache[94] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[95] || (_cache[95] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[96] || (_cache[96] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_23, [createVNode(_component_RouteLink, { to: "/devices/5062131P7.html" }, {
					default: withCtx(() => [..._cache[97] || (_cache[97] = [createTextVNode("Philips 5062131P7", -1)])]),
					_: 1
				})]),
				_cache[98] || (_cache[98] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[99] || (_cache[99] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[100] || (_cache[100] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_24, [createVNode(_component_RouteLink, { to: "/devices/9290024896.html" }, {
					default: withCtx(() => [..._cache[101] || (_cache[101] = [createTextVNode("Philips 9290024896", -1)])]),
					_: 1
				})]),
				_cache[102] || (_cache[102] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[103] || (_cache[103] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[104] || (_cache[104] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_25, [createVNode(_component_RouteLink, { to: "/devices/9290022166.html" }, {
					default: withCtx(() => [..._cache[105] || (_cache[105] = [createTextVNode("Philips 9290022166", -1)])]),
					_: 1
				})]),
				_cache[106] || (_cache[106] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[107] || (_cache[107] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[108] || (_cache[108] = createBaseVNode("td", { style: { "text-align": "center" } }, "Nⁱ", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_26, [createVNode(_component_RouteLink, { to: "/devices/9290022169.html" }, {
					default: withCtx(() => [..._cache[109] || (_cache[109] = [createTextVNode("Philips 9290022169", -1)])]),
					_: 1
				})]),
				_cache[110] || (_cache[110] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[111] || (_cache[111] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[112] || (_cache[112] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_27, [createVNode(_component_RouteLink, { to: "/devices/929001953301.html" }, {
					default: withCtx(() => [..._cache[113] || (_cache[113] = [createTextVNode("Philips 929001953301", -1)])]),
					_: 1
				})]),
				_cache[114] || (_cache[114] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[115] || (_cache[115] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[116] || (_cache[116] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_28, [createVNode(_component_RouteLink, { to: "/devices/8718696548738.html" }, {
					default: withCtx(() => [..._cache[117] || (_cache[117] = [createTextVNode("Philips 8718696548738", -1)])]),
					_: 1
				})]),
				_cache[118] || (_cache[118] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[119] || (_cache[119] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[120] || (_cache[120] = createBaseVNode("td", { style: { "text-align": "center" } }, "Nⁱ", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_29, [createVNode(_component_RouteLink, { to: "/devices/8719514491106.html" }, {
					default: withCtx(() => [..._cache[121] || (_cache[121] = [createTextVNode("Philips 8719514491106", -1)])]),
					_: 1
				})]),
				_cache[122] || (_cache[122] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[123] || (_cache[123] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[124] || (_cache[124] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_30, [createVNode(_component_RouteLink, { to: "/devices/Silabs_series_2_router.html" }, {
					default: withCtx(() => [..._cache[125] || (_cache[125] = [createTextVNode("Silabs series 2 router", -1)])]),
					_: 1
				})]),
				_cache[126] || (_cache[126] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[127] || (_cache[127] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[128] || (_cache[128] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_31, [createVNode(_component_RouteLink, { to: "/devices/ZBDongle-E.html" }, {
					default: withCtx(() => [..._cache[129] || (_cache[129] = [createTextVNode("Sonoff ZBDongle-E", -1)])]),
					_: 1
				})]),
				_cache[130] || (_cache[130] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[131] || (_cache[131] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[132] || (_cache[132] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_32, [createVNode(_component_RouteLink, { to: "/devices/SR-ZG9040A_ZG9041A-D.html" }, {
					default: withCtx(() => [..._cache[133] || (_cache[133] = [createTextVNode("Sunricher R-ZG9040A-ZG9041A-D", -1)])]),
					_: 1
				})]),
				_cache[134] || (_cache[134] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[135] || (_cache[135] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[136] || (_cache[136] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_33, [createVNode(_component_RouteLink, { to: "/devices/SR-ZG9101SAC-HP-SWITCH-2CH.html" }, {
					default: withCtx(() => [..._cache[137] || (_cache[137] = [createTextVNode("Sunricher SR-ZG9101SAC-HP-SWITCH-2CH", -1)])]),
					_: 1
				})]),
				_cache[138] || (_cache[138] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[139] || (_cache[139] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[140] || (_cache[140] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_34, [createVNode(_component_RouteLink, { to: "/devices/C4.html" }, {
					default: withCtx(() => [..._cache[141] || (_cache[141] = [createTextVNode("Ubisys C4", -1)])]),
					_: 1
				})]),
				_cache[142] || (_cache[142] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[143] || (_cache[143] = createBaseVNode("td", { style: { "text-align": "center" } }, "N", -1)),
				_cache[144] || (_cache[144] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_35, [createVNode(_component_RouteLink, { to: "/devices/S2.html" }, {
					default: withCtx(() => [..._cache[145] || (_cache[145] = [createTextVNode("Ubisys S2", -1)])]),
					_: 1
				})]),
				_cache[146] || (_cache[146] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[147] || (_cache[147] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[148] || (_cache[148] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			]),
			createBaseVNode("tr", null, [
				createBaseVNode("td", _hoisted_36, [createVNode(_component_RouteLink, { to: "/devices/VES-ZB-SWI-015.html" }, {
					default: withCtx(() => [..._cache[149] || (_cache[149] = [createTextVNode("Vesternet VES-ZB-SWI-015", -1)])]),
					_: 1
				})]),
				_cache[150] || (_cache[150] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[151] || (_cache[151] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1)),
				_cache[152] || (_cache[152] = createBaseVNode("td", { style: { "text-align": "center" } }, "Y", -1))
			])
		])]),
		_cache[158] || (_cache[158] = createStaticVNode("<p><em>ⁱ ZGP frames are always being re-transmitted as broadcast, even if unicast was requested by the coordinator. Might be a <a href=\"https://github.com/Koenkk/zigbee2mqtt/issues/22897#issuecomment-2158291085\" target=\"_blank\" rel=\"noopener noreferrer\">firmware bug</a>.</em></p><p><em>² Only ICPSHC24-10EU-IL-2 (new version) is able to translate ZGP frames.</em></p><h2 id=\"zigbee-networking\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zigbee-networking\"><span>Zigbee networking</span></a></h2><p>This section is an overview of how the Zigbee protocol stack divides into layers (See <a href=\"https://en.wikipedia.org/wiki/Internet_protocol_suite#Layer_names_and_number_of_layers_in_the_literature\" target=\"_blank\" rel=\"noopener noreferrer\">Wikipedia - IP layers</a> ). The number of layers in this type of description often varies; this discussion uses 4:</p><ol><li>the physical and MAC layers,</li><li>the network and transport layer,</li><li>the application layer, and</li><li>the Zigbee2MQTT layer.</li></ol><p>Most of the focus will be on the last two layers.</p><h3 id=\"physical-and-mac-layers\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#physical-and-mac-layers\"><span>Physical and MAC layers</span></a></h3><p>The Physical and MAC layers of the Zigbee protocol are defined by <a href=\"https://en.wikipedia.org/wiki/IEEE_802.15.4\" target=\"_blank\" rel=\"noopener noreferrer\">IEEE 802.15.4</a>. This is a common set of standards that are used by multiple protocol stacks, including Zigbee, 6LoWPAN, Thread and Z-Wave. There are actually a few different frequency bands that IEEE 802.15.4 can use; the same 2.4 GHz band that WiFi can use, and then an 800 MhZ and a 900MhZ band whose use varies by country. In general, devices using one stack choose one of these and avoid the others. For example, Zigbee devices generally use the 2.4 GHz band and Z-Wave devices generally use the 8/900 MHz bands (depending on country).</p><h3 id=\"the-network-and-transport-layers\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#the-network-and-transport-layers\"><span>The Network and Transport layers</span></a></h3><p>The Network and Transport layers are where the routing, security and transport between the various nodes in a Zigbee network are defined. This includes things like the network encryption model. This is also where the difference between the controller, routers and end-nodes is defined in the Zigbee network - see <a href=\"#device-types\">device types</a>. There is one other Zigbee concept that I’ll put at the transport layer; the concept of Endpoints. Similar to ports in TCP/IP, Endpoints allow each physical device to have multiple virtual devices on the network. For example, a 3-gang Zigbee switch might have a single radio, and hence only one MAC address and only one Zigbee network address, but have three endpoints - one for each switch. Each endpoint can then run a single ‘switch’ interface.</p><h3 id=\"the-application-layer\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#the-application-layer\"><span>The application layer</span></a></h3><p>Zigbee is more than just a networking technology; it defines a bunch of standard applications that run on the network. These applications are defined in the <a href=\"https://github.com/Koenkk/zigbee-herdsman/wiki/References#csa-zigbee-alliance-spec\" target=\"_blank\" rel=\"noopener noreferrer\">Zigbee Cluster Library specification</a>. Each ‘cluster’ defines one type of application communication. Each cluster type has its own integer ID, and comes in two flavours; client and server. There are clusters for low-level information gathering - getting the device model number, listing the endpoints and the clusters each endpoint implements (each endpoint can implement multiple clusters). There are clusters for simple network setup purposes, such as the Identify cluster which allows someone to ask a device to identify itself, e.g. a light asked to identify itself might start pulsing. There are clusters for on/off light control, where a light might implement the on/off server cluster and a switch might implement the on/off client cluster. There are clusters for configuration that allow a controller to configure devices in various ways.</p><p>As noted above, each cluster comes in two flavours; client and server. Generally the server is the endpoint that is running more frequently, and the client chooses to connect to the server. In many cases this isn’t clear-cut when considering the cluster functionality, so the spec decides pretty much arbitrarily.</p><p>The Zigbee controller can ‘bind’ the clusters for two endpoints together. It will connect one endpoint that implements the client variant of a cluster to another endpoint that implements the server variant of the same cluster.</p><p>There are also some special clusters. The ‘group’ cluster allows the definition of ‘groups’ - each defined by a small integer. If an endpoint implements the group cluster then it can be configured to be part of some number of groups. The device remembers which groups it is a member of. A group can then be treated like a virtual endpoint. Messages sent to a particular group ID are broadcast over the network and all devices that are part of that group will respond to the message. Similarly, a client can be bound to a group rather than another endpoint, so that, for example, a single switch can control a whole group of lights.</p><p>Similarly, the scene cluster allows a device to be configured to remember parameters from other clusters implemented on that device. A light might remember brightness. A roller blind might remember a set height. Each device can remember a small number of scenes, identified by ID.</p><p>Scenes and groups are designed to work together. One might imagine setting up a bunch of different devices, then joining them all into a group, then sending the group a ‘remember scene’ command. One could then send a ‘recall scene’ command to the group with the appropriate scene ID to cause many devices to configure themselves in a given way with minimal network traffic, and hence minimal latency.</p><h3 id=\"zigbee2mqtt\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zigbee2mqtt\"><span>Zigbee2MQTT</span></a></h3><p>The Zigbee stack has a certain amount of home automation protocol already defined; as discussed, devices can be formed into groups and scenes defined, switches can be bound to those groups. In such a setup the Zigbee controller might help configure the network, but afterwards it is passive at the application level.</p><p>If more flexibility is required than comes in the pre-defined Zigbee clusters, for example “Turn on the fan when the relative humidity is over 70%.”, then you need more clever control. It is here that Zigbee2MQTT comes in. It translates between Zigbee and MQTT.</p><p>When a device is added to the network with a Zigbee-Herdsman controller, the controller uses the low-level configuration clusters to interview the device and find out what the device is, what endpoints it has, and what clusters each of those endpoints implements. The Zigbee-Herdsman-Converters then record, for each model of device, which clusters the controller should bind to, and how the conversion to MQTT should be handled. Most devices in Zigbee-Herdsman-Converters use generic converters that bind to each Zigbee cluster and provide a standard MQTT interface for that cluster.</p><p>With this setup, when a switch is activated, it sends a message to the Zigbee2MQTT controller. The controller then sends out an MQTT message. The MQTT controller (which is different to the Zigbee controller. e.g. the Home Assistant package) then decides what to do based on that message. It might, for example, decide to turn on a particular light, so it would send an MQTT message requesting the light to turn on. Zigbee2MQTT would receive that message, then send a Zigbee message to the light’s endpoint using the appropriate Zigbee cluster.</p><p>This system is significantly more flexible than the base Zigbee system. But it also has higher latency (it takes longer for the system to react to a switch being toggled) and it has more points of failure. With the base Zigbee setup, not even the controller is involved once setup is complete. With the Zigbee2MQTT setup there are two Zigbee messages, two MQTT messages, and three extra processing steps (the main controller deciding what to do, and MQTT processing the messages in each direction).</p><p>Note that in some commercial Zigbee systems, such as Phillips Hue, the controller node in the Zigbee network is also the automation controller that can add additional smarts on top of the base Zigbee setup. Zigbee2MQTT inserts MQTT between the two, allowing them to be decoupled.</p>", 24))
	]);
}
var _01_zigbee_network_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, _01_zigbee_network_default as default };
