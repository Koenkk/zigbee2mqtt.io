import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/guide/adapters/README.md
var _pageData = JSON.parse("{\"path\":\"/guide/adapters/\",\"title\":\"Supported Adapters\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"sidebarDepth\":1,\"next\":\"../installation/\",\"redirectFrom\":\"/information/supported_adapters.md\"},\"filePathRelative\":\"guide/adapters/README.md\"}");
var _sfc_main = { name: "README.md" };
var _hoisted_1 = { class: "hint-container tip" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[11] || (_cache[11] = createBaseVNode("h1", {
			id: "supported-adapters",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#supported-adapters"
		}, [createBaseVNode("span", null, "Supported Adapters")])], -1)),
		_cache[12] || (_cache[12] = createBaseVNode("p", null, "All officially supported adapters are listed on this page. Note that before an adapter can be used with Zigbee2MQTT it has to be flashed with a coordinator firmware (some adapters come preflashed).", -1)),
		_cache[13] || (_cache[13] = createBaseVNode("h2", {
			id: "recommended",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#recommended"
		}, [createBaseVNode("span", null, "Recommended")])], -1)),
		createBaseVNode("ul", null, [
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/adapters/zstack.html" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("zStack based (Texas Instruments)", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/adapters/emberznet.html" }, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("EmberZNet based (Silicon Labs)", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/adapters/deconz.html" }, {
				default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("deCONZ based (Dresden Elektronik)", -1)])]),
				_: 1
			})])
		]),
		_cache[14] || (_cache[14] = createBaseVNode("h2", {
			id: "not-recommended",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#not-recommended"
		}, [createBaseVNode("span", null, "Not recommended")])], -1)),
		_cache[15] || (_cache[15] = createBaseVNode("h3", {
			id: "not-maintained",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#not-maintained"
		}, [createBaseVNode("span", null, "Not maintained")])], -1)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/adapters/zigate.html" }, {
			default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("ZiGate based", -1)])]),
			_: 1
		})])]),
		_cache[16] || (_cache[16] = createBaseVNode("h3", {
			id: "experimental",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#experimental"
		}, [createBaseVNode("span", null, "Experimental")])], -1)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/adapters/zboss.html" }, {
			default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("ZBOSS based (Nordic Semiconductor)", -1)])]),
			_: 1
		})])]),
		createBaseVNode("div", _hoisted_1, [_cache[7] || (_cache[7] = createBaseVNode("p", { class: "hint-container-title" }, "Tips", -1)), createBaseVNode("p", null, [_cache[6] || (_cache[6] = createTextVNode("Want to migrate to a different adapter? Read ", -1)), createVNode(_component_RouteLink, { to: "/guide/faq/#how-do-i-migrate-from-one-adapter-to-another" }, {
			default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("this", -1)])]),
			_: 1
		})])]),
		_cache[17] || (_cache[17] = createBaseVNode("h2", {
			id: "notes",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#notes"
		}, [createBaseVNode("span", null, "Notes")])], -1)),
		_cache[18] || (_cache[18] = createBaseVNode("p", null, "Before buying an adapter, please read the notes below!", -1)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [_cache[9] || (_cache[9] = createTextVNode("Want to migrate to a different adapter? This may require repairing all your devices in some cases, see ", -1)), createVNode(_component_RouteLink, { to: "/guide/faq/#what-does-and-does-not-require-re-pairing-of-all-devices" }, {
			default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("FAQ", -1)])]),
			_: 1
		})]), _cache[10] || (_cache[10] = createStaticVNode("<li>Network adapters connected via WiFi might have reduced stability as the serial protocol does not have enough fault-tolerance to handle packet loss or latency delays that can normally occur over WiFi connections. If you cannot use a locally connected USB or UART/GPIO adapter then the recommendation is to use remote adapter that connected via Ethernet (wired) to avoid issues.</li><li>What are the differences between the various CC2652/CC1352 chips? <ul><li>Chips ending with <code>P</code> have a power amplifier which support up-to 20dBm vs 5dBm on adapters ending with <code>R</code>/<code>RB</code>.</li><li>Chips starting with <code>CC1352</code> support the sub-1 GHz frequency (which is not relevant for Zigbee since it uses 2.4 GHz), <code>CC2652</code> only supports 2.4 GHz. So for Zigbee2MQTT purposes there is no difference between <code>CC1352</code> and <code>CC2652</code>.</li><li>Chips ending with <code>RB</code> don&#39;t require a crystal on the PCB, this only makes a difference for the manufacturing process.</li></ul></li>", 2))]),
		_cache[19] || (_cache[19] = createStaticVNode("<h3 id=\"coordinator-backups\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#coordinator-backups\"><span>Coordinator backups</span></a></h3><p>Note that only adapters based on zStack or EmberZNet currently support backing up the coordinator (<code>coordinator_backup.json</code>).</p><h4 id=\"flashing-an-existing-adapter\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#flashing-an-existing-adapter\"><span>Flashing an existing adapter</span></a></h4><p>Flashing tools can be used to upgrade the firmware on an existing adapter without needing to repair devices. See the <a href=\"https://www.zigbee2mqtt.io/guide/faq/#what-does-and-does-not-require-re-pairing-of-all-devices\" target=\"_blank\" rel=\"noopener noreferrer\">FAQ</a> for information on what does and does not require repairing of devices.</p><h4 id=\"is-your-os-unable-to-find-your-device\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#is-your-os-unable-to-find-your-device\"><span>Is your OS unable to find your device?</span></a></h4><p>If you&#39;re asking yourself &quot;Why won&#39;t my dongle or adapter show up?&quot; when you are using (for example) Flash Programmer 2, chances are that your OS can&#39;t communicate with your device over VCP (Virtual COM Port) serial port, causing your dongle not showing up as a flashable device. To fix this problem, be sure to install a USB-to-UART bridge/converter VCP driver for your operating system like the one at <a href=\"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers\" target=\"_blank\" rel=\"noopener noreferrer\">Silicon Labs</a>, <a href=\"https://ftdichip.com/drivers/vcp-drivers/\" target=\"_blank\" rel=\"noopener noreferrer\">FTDI Chip</a>, or <a href=\"http://www.wch-ic.com/downloads/category/30.html\" target=\"_blank\" rel=\"noopener noreferrer\">WCH (CH34x/CH91xx)</a>.</p><h3 id=\"router\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#router\"><span>Router</span></a></h3><p>Besides serving as a coordinator some adapters can also be used as a Zigbee router (check if there is a router firmware by clicking on your adapter). To factory reset/pair:</p><ul><li>Texas Instruments CC2531: press the S2 button for 5 seconds.</li><li>Texas Instruments CC2530: power on/power off the device three times (power on, wait 2 seconds, power off, repeat this cycle three times).</li><li>Adapters based on CC2652/CC1352: single press (one of the) buttons on the device</li><li>Adapters based on Silicon Labs EmberZNet: <ul><li><a href=\"https://www.zigbee2mqtt.io/devices/ZBDongle-E.html\" target=\"_blank\" rel=\"noopener noreferrer\">Sonoff Dongle-E</a></li><li><a href=\"https://www.zigbee2mqtt.io/devices/SLZB-06M.html\" target=\"_blank\" rel=\"noopener noreferrer\">SMLight SLZB-06M</a></li></ul></li></ul>", 9))
	]);
}
var README_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, README_default as default };
