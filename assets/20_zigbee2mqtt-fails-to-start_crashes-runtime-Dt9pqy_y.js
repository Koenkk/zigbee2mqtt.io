import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/images/cc26xr1_revision.png
var cc26xr1_revision_default = "/assets/cc26xr1_revision-yzThkCip.png";
// docs/images/good-vs-bad-usb-cable.jpg
var good_vs_bad_usb_cable_default = "/assets/good-vs-bad-usb-cable-CTxwa7rA.jpg";
// docs/guide/installation/20_zigbee2mqtt-fails-to-start_crashes-runtime.md
var _pageData = JSON.parse("{\"path\":\"/guide/installation/20_zigbee2mqtt-fails-to-start_crashes-runtime.html\",\"title\":\"Zigbee2MQTT fails to start/crashes runtime\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"sidebarDepth\":0,\"redirectFrom\":[\"/guide/installation/20_zigbee2mqtt-fails-to-start.md\",\"/information/zigbee2mqtt_fails_to_start.md\"]},\"filePathRelative\":\"guide/installation/20_zigbee2mqtt-fails-to-start_crashes-runtime.md\"}");
var _sfc_main = { name: "20_zigbee2mqtt-fails-to-start_crashes-runtime.md" };
var _hoisted_1 = { class: "table-of-contents" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_router_link = resolveComponent("router-link");
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[64] || (_cache[64] = createBaseVNode("h1", {
			id: "zigbee2mqtt-fails-to-start-crashes-runtime",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#zigbee2mqtt-fails-to-start-crashes-runtime"
		}, [createBaseVNode("span", null, "Zigbee2MQTT fails to start/crashes runtime")])], -1)),
		_cache[65] || (_cache[65] = createBaseVNode("p", null, "Most of the time this is caused by Zigbee2MQTT not being able to communicate with your Zigbee adapter.", -1)),
		createBaseVNode("nav", _hoisted_1, [createBaseVNode("ul", null, [
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#error-usb-adapter-discovery-error-no-valid-usb-adapter-found-specify-valid-adapter-and-port-in-your-configuration" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Error: USB adapter discovery error (No valid USB adapter found). Specify valid 'adapter' and 'port' in your configuration.", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#error-srsp-sys-ping-after-6000ms-for-zstack-or-host-fatal-error-for-emberznet" }, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("Error: SRSP - SYS - ping after 6000ms for zStack or HOST_FATAL_ERROR for EmberZNet", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#error-error-exceeded-maximum-ack-timeout-count-for-emberznet" }, {
				default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("Error: ERROR_EXCEEDED_MAXIMUM_ACK_TIMEOUT_COUNT for EmberZNet", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#verify-that-you-put-the-correct-port-in-configuration-yaml" }, {
				default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("Verify that you put the correct port in configuration.yaml", -1)])]),
				_: 1
			}), createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#which-port-should-i-use-for-texas-instruments-launchxl-cc26x2r1-cc1352p-2-dev-ttyacm0-or-dev-ttyacm1" }, {
				default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Which port should I use for Texas Instruments LAUNCHXL-CC26X2R1/CC1352P-2, /dev/ttyACM0 or /dev/ttyACM1?", -1)])]),
				_: 1
			})])])]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#verify-that-the-user-you-run-zigbee2mqtt-as-has-write-access-to-the-port" }, {
				default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("Verify that the user you run Zigbee2MQTT as has write access to the port", -1)])]),
				_: 1
			}), createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#method-1-give-your-user-permissions-on-every-reboot" }, {
				default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode("Method 1: Give your user permissions on every reboot.", -1)])]),
				_: 1
			})]), createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#method-2-add-your-user-to-specific-groups" }, {
				default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("Method 2: Add your user to specific groups", -1)])]),
				_: 1
			})])])]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#error-coordinator-failed-to-start-probably-the-panid-is-already-in-use-try-a-different-panid-or-channel" }, {
				default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("Error: Coordinator failed to start, probably the panID is already in use, try a different panID or channel", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#error-resource-temporarily-unavailable-cannot-lock-port" }, {
				default: withCtx(() => [..._cache[9] || (_cache[9] = [createTextVNode("Error: Resource temporarily unavailable Cannot lock port", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#error-received-unexpected-reset-from-adapter-with-reason-reset-software" }, {
				default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode("Error: Received unexpected reset from adapter, with reason=RESET_SOFTWARE", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#raspberry-pi-users" }, {
				default: withCtx(() => [..._cache[11] || (_cache[11] = [createTextVNode("Raspberry Pi users", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#raspberry-pi-os" }, {
				default: withCtx(() => [..._cache[12] || (_cache[12] = [createTextVNode("Raspberry Pi OS", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#use-a-good-power-supply" }, {
				default: withCtx(() => [..._cache[13] || (_cache[13] = [createTextVNode("Use a good power supply", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#make-sure-the-extension-cable-works" }, {
				default: withCtx(() => [..._cache[14] || (_cache[14] = [createTextVNode("Make sure the extension cable works", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#for-openhab-users-disable-zwave-binding" }, {
				default: withCtx(() => [..._cache[15] || (_cache[15] = [createTextVNode("For Openhab users: disable zwave binding", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#in-case-of-a-cc2530-or-cc2531-adapter-verify-that-don-t-have-a-cc2540" }, {
				default: withCtx(() => [..._cache[16] || (_cache[16] = [createTextVNode("In case of a CC2530 or CC2531 adapter, verify that don't have a CC2540", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#modemmanager-is-installed" }, {
				default: withCtx(() => [..._cache[17] || (_cache[17] = [createTextVNode("ModemManager is installed", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#make-sure-your-computer-has-enough-resources-available" }, {
				default: withCtx(() => [..._cache[18] || (_cache[18] = [createTextVNode("Make sure your computer has enough resources available", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#hciuart-is-running" }, {
				default: withCtx(() => [..._cache[19] || (_cache[19] = [createTextVNode("hciuart is running", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#texas-instruments-launchxl-cc1352p-2-cc26x2r1-only-press-the-reset-button-on-the-device" }, {
				default: withCtx(() => [..._cache[20] || (_cache[20] = [createTextVNode("Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1 only: press the reset button on the device", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#cc2531-coordinators-only-press-the-reset-button-on-the-device" }, {
				default: withCtx(() => [..._cache[21] || (_cache[21] = [createTextVNode("CC2531 coordinators only: press the reset button on the device", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#texas-instruments-launchxl-cc26x2r1-coordinator-only-verify-that-you-have-the-correct-revision" }, {
				default: withCtx(() => [..._cache[22] || (_cache[22] = [createTextVNode("Texas Instruments LAUNCHXL-CC26X2R1 coordinator only: verify that you have the correct revision", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#emberznet-coordinators-only" }, {
				default: withCtx(() => [..._cache[23] || (_cache[23] = [createTextVNode("EmberZNet coordinators only", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#multiple-cheap-usb-uart" }, {
				default: withCtx(() => [..._cache[24] || (_cache[24] = [createTextVNode("Multiple cheap USB-UART", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#error-startup-failed-configuration-adapter-mismatch-see-logs-above-for-more-information" }, {
				default: withCtx(() => [..._cache[25] || (_cache[25] = [createTextVNode("Error: startup failed - configuration-adapter mismatch - see logs above for more information", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#zigbee-adapters-over-the-network-use-robust-and-reliable-network-adapters-on-zigbee2mqtt-server" }, {
				default: withCtx(() => [..._cache[26] || (_cache[26] = [createTextVNode("Zigbee adapters over the network: use robust and reliable network adapters on Zigbee2MQTT server", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#error-regular-crashes-with-timeout-errors-or-failure-to-start-after-the-serial-port-is-opened" }, {
				default: withCtx(() => [..._cache[27] || (_cache[27] = [createTextVNode("Error: regular crashes with timeout errors or failure to start after the serial port is opened", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_router_link, { to: "#pnpm-related-error-on-startup" }, {
				default: withCtx(() => [..._cache[28] || (_cache[28] = [createTextVNode("pnpm-related error on startup", -1)])]),
				_: 1
			})])
		])]),
		_cache[66] || (_cache[66] = createBaseVNode("h2", {
			id: "error-usb-adapter-discovery-error-no-valid-usb-adapter-found-specify-valid-adapter-and-port-in-your-configuration",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#error-usb-adapter-discovery-error-no-valid-usb-adapter-found-specify-valid-adapter-and-port-in-your-configuration"
		}, [createBaseVNode("span", null, [createTextVNode("Error: "), createBaseVNode("code", null, "USB adapter discovery error (No valid USB adapter found). Specify valid 'adapter' and 'port' in your configuration.")])])], -1)),
		createBaseVNode("p", null, [
			_cache[30] || (_cache[30] = createTextVNode("Configure the ", -1)),
			_cache[31] || (_cache[31] = createBaseVNode("code", null, "serial", -1)),
			_cache[32] || (_cache[32] = createTextVNode(" section as described ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/adapter-settings.html" }, {
				default: withCtx(() => [..._cache[29] || (_cache[29] = [createTextVNode("here", -1)])]),
				_: 1
			}),
			_cache[33] || (_cache[33] = createTextVNode(".", -1))
		]),
		_cache[67] || (_cache[67] = createBaseVNode("h2", {
			id: "error-srsp-sys-ping-after-6000ms-for-zstack-or-host-fatal-error-for-emberznet",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#error-srsp-sys-ping-after-6000ms-for-zstack-or-host-fatal-error-for-emberznet"
		}, [createBaseVNode("span", null, [
			createTextVNode("Error: "),
			createBaseVNode("code", null, "SRSP - SYS - ping after 6000ms"),
			createTextVNode(" for zStack or "),
			createBaseVNode("code", null, "HOST_FATAL_ERROR"),
			createTextVNode(" for EmberZNet")
		])])], -1)),
		_cache[68] || (_cache[68] = createBaseVNode("p", null, "Common reasons for this error:", -1)),
		createBaseVNode("ol", null, [
			createBaseVNode("li", null, [
				_cache[35] || (_cache[35] = createTextVNode("The port of your serial adapter changed. Check ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/configuration/adapter-settings.html" }, {
					default: withCtx(() => [..._cache[34] || (_cache[34] = [createTextVNode("this", -1)])]),
					_: 1
				}),
				_cache[36] || (_cache[36] = createTextVNode(" to find out the port of your adapter.", -1))
			]),
			createBaseVNode("li", null, [
				_cache[38] || (_cache[38] = createTextVNode("If you are using a CC2530 or CC2531; it is a common issue for this adapter to crash (due to its outdated hardware). Reflashing the firmware should fix the problem. If it happens often consider flashing the ", -1)),
				_cache[39] || (_cache[39] = createBaseVNode("a", {
					href: "https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/source_routing",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "source routing firmware", -1)),
				_cache[40] || (_cache[40] = createTextVNode(" or upgrade to a ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/adapters/" }, {
					default: withCtx(() => [..._cache[37] || (_cache[37] = [createTextVNode("more powerful adapter", -1)])]),
					_: 1
				}),
				_cache[41] || (_cache[41] = createTextVNode(".", -1))
			]),
			createBaseVNode("li", null, [
				_cache[43] || (_cache[43] = createTextVNode("Your adapter requires additional configuration parameters. Check ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/adapters/" }, {
					default: withCtx(() => [..._cache[42] || (_cache[42] = [createTextVNode("supported Adapters", -1)])]),
					_: 1
				}),
				_cache[44] || (_cache[44] = createTextVNode(" section to find out if your adapter requires extra parameters (eg. ConBee II / RaspBee II).", -1))
			]),
			_cache[45] || (_cache[45] = createBaseVNode("li", null, "Home Assistant's \"Zigbee Home Automation\" (ZHA) integration is enabled. Try to disable the ZHA integration and restart the Zigbee2MQTT add-on.", -1)),
			_cache[46] || (_cache[46] = createBaseVNode("li", null, "Your hardware adapter is flashed with the router firmware and not with the coordinator firmware.", -1)),
			_cache[47] || (_cache[47] = createBaseVNode("li", null, "Your network Zigbee adapter is not accessible over the LAN network.", -1)),
			_cache[48] || (_cache[48] = createBaseVNode("li", null, [
				createTextVNode("Another software on your machine (including Home Assistant integration) is interfering with USB devices (example: "),
				createBaseVNode("a", {
					href: "https://www.home-assistant.io/integrations/edl21",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "HA EDL21 integration"),
				createTextVNode(" trying to find a USB device).")
			], -1))
		]),
		_cache[69] || (_cache[69] = createBaseVNode("h2", {
			id: "error-error-exceeded-maximum-ack-timeout-count-for-emberznet",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#error-error-exceeded-maximum-ack-timeout-count-for-emberznet"
		}, [createBaseVNode("span", null, [
			createTextVNode("Error: "),
			createBaseVNode("code", null, "ERROR_EXCEEDED_MAXIMUM_ACK_TIMEOUT_COUNT"),
			createTextVNode(" for EmberZNet")
		])])], -1)),
		_cache[70] || (_cache[70] = createBaseVNode("p", null, "Common sources:", -1)),
		createBaseVNode("ul", null, [_cache[52] || (_cache[52] = createStaticVNode("<li>Interference at USB or in 2.4GHz <ul><li>refer to various guides to reduce interference</li></ul></li><li>Improper / unstable power source (USB, POE...) <ul><li>verify cabling, and power ratings, replace dubious hardware</li></ul></li><li>Spikes in resource usage on the machine running Zigbee2MQTT (disk, CPU or RAM) - more prominent on low spec machines <ul><li>if necessary upgrade components or allocate more resources (for virtualized environments)</li></ul></li><li>Spikes in resource usage on &quot;core&quot; chip (for TCP adapters) <ul><li>verify availability of new &quot;core&quot; firmware that may fix known bugs</li></ul></li>", 4)), createBaseVNode("li", null, [
			createVNode(_component_RouteLink, { to: "/guide/usage/troubleshooting.html#spammy-devices" }, {
				default: withCtx(() => [..._cache[49] || (_cache[49] = [createTextVNode("Spammy devices", -1)])]),
				_: 1
			}),
			_cache[50] || (_cache[50] = createTextVNode(" (particularly Tuya & co) ", -1)),
			_cache[51] || (_cache[51] = createBaseVNode("ul", null, [createBaseVNode("li", null, [
				createTextVNode("use coordinator firmware 8.0.2 and later from "),
				createBaseVNode("a", {
					href: "https://github.com/darkxst/silabs-firmware-builder/releases",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "darkxst"),
				createTextVNode(" or "),
				createBaseVNode("a", {
					href: "https://github.com/Nerivec/silabs-firmware-builder/releases",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Nerivec"),
				createTextVNode(", and 7.4.4.5 or later from "),
				createBaseVNode("a", {
					href: "https://github.com/NabuCasa/silabs-firmware-builder/releases",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Nabu Casa")
			])], -1))
		])]),
		_cache[71] || (_cache[71] = createStaticVNode("<h2 id=\"verify-that-you-put-the-correct-port-in-configuration-yaml\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#verify-that-you-put-the-correct-port-in-configuration-yaml\"><span>Verify that you put the correct port in configuration.yaml</span></a></h2><p>Execute the following command to find out the correct path:</p><div class=\"language-bash line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"sh\"><pre><code class=\"language-bash\"><span class=\"line\">pi@raspberry:/ $ <span class=\"token function\">ls</span> <span class=\"token parameter variable\">-l</span> /dev/serial/by-id</span>\n<span class=\"line\">total <span class=\"token number\">0</span></span>\n<span class=\"line\">lrwxrwxrwx. <span class=\"token number\">1</span> root root <span class=\"token number\">13</span> Oct <span class=\"token number\">19</span> <span class=\"token number\">19</span>:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -<span class=\"token operator\">&gt;</span> <span class=\"token punctuation\">..</span>/<span class=\"token punctuation\">..</span>/ttyACM0</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>In this example the correct <code>port</code> would be <code>/dev/ttyACM0</code>.</p>", 4)),
		createBaseVNode("p", null, [
			_cache[54] || (_cache[54] = createTextVNode("You can also force ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/getting-started/#onboarding" }, {
				default: withCtx(() => [..._cache[53] || (_cache[53] = [createTextVNode("onboarding", -1)])]),
				_: 1
			}),
			_cache[55] || (_cache[55] = createTextVNode(" to re-do the configuration", -1))
		]),
		_cache[72] || (_cache[72] = createStaticVNode("<h3 id=\"which-port-should-i-use-for-texas-instruments-launchxl-cc26x2r1-cc1352p-2-dev-ttyacm0-or-dev-ttyacm1\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#which-port-should-i-use-for-texas-instruments-launchxl-cc26x2r1-cc1352p-2-dev-ttyacm0-or-dev-ttyacm1\"><span>Which port should I use for Texas Instruments LAUNCHXL-CC26X2R1/CC1352P-2, /dev/ttyACM0 or /dev/ttyACM1?</span></a></h3><p>The Texas Instruments launchpad has a build in debugger. This debugger also registers a port next to the device data port. Of course this is not necessarily number 0 and 1. But normally the lowest number is the device data port and the other the debugger.</p><p>To find the correct port, execute:</p><div class=\"language-bash line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"sh\"><pre><code class=\"language-bash\"><span class=\"line\">pi@raspberry:/ $ <span class=\"token function\">ls</span> <span class=\"token parameter variable\">-l</span> /dev/serial/by-id</span>\n<span class=\"line\">total <span class=\"token number\">0</span></span>\n<span class=\"line\">lrwxrwxrwx <span class=\"token number\">1</span> root root <span class=\"token number\">13</span> Jan  <span class=\"token number\">6</span> <span class=\"token number\">19</span>:07 usb-Texas_Instruments_XDS110__03.00.00.05__Embed_with_CMSIS-DAP_L1100BTD-if00 -<span class=\"token operator\">&gt;</span> <span class=\"token punctuation\">..</span>/<span class=\"token punctuation\">..</span>/ttyACM0</span>\n<span class=\"line\">lrwxrwxrwx <span class=\"token number\">1</span> root root <span class=\"token number\">13</span> Jan  <span class=\"token number\">6</span> <span class=\"token number\">19</span>:07 usb-Texas_Instruments_XDS110__03.00.00.05__Embed_with_CMSIS-DAP_L1100BTD-if03 -<span class=\"token operator\">&gt;</span> <span class=\"token punctuation\">..</span>/<span class=\"token punctuation\">..</span>/ttyACM1</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>The device with id ending with <em>if00</em> is for device data. Use this port in your configuration.</p><h2 id=\"verify-that-the-user-you-run-zigbee2mqtt-as-has-write-access-to-the-port\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#verify-that-the-user-you-run-zigbee2mqtt-as-has-write-access-to-the-port\"><span>Verify that the user you run Zigbee2MQTT as has write access to the port</span></a></h2><p>This can be tested by executing: <code>test -w [PORT] &amp;&amp; echo success || echo failure</code> ( e.g. <code>test -w /dev/ttyACM0 &amp;&amp; echo success || echo failure</code>).</p><p>If it outputs <code>failure</code> it could mean your user does not have access to the port. To test assign write access by executing: <code>sudo chown [USER] [PORT]</code> (e.g. <code>sudo chown pi /dev/ttyACM0</code>).</p><p>if it outputs <code>failure</code>, then you need to permanently give your user permission to the device.</p><h3 id=\"method-1-give-your-user-permissions-on-every-reboot\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#method-1-give-your-user-permissions-on-every-reboot\"><span>Method 1: Give your user permissions on every reboot.</span></a></h3><p>You can create a &#39;udev&#39; rule to give your user permissions after every reboot:</p><ol><li><p><code>udevadm info -a -n /dev/ttyACM0 | grep &#39;serial&#39;</code> get the serial to your device <code>YOURSERIAL</code></p></li><li><p>Create the rule file with: <code>sudo nano /etc/udev/rules.d/99-usb-serial.rules</code></p></li><li><p>add this line: <code>SUBSYSTEM==&quot;tty&quot;, ATTRS{idVendor}==&quot;0451&quot;, ATTRS{idProduct}==&quot;16a8&quot;, ATTRS{serial}==&quot;YOURSERIAL&quot;, SYMLINK=&quot;ttyUSB.CC2531-01&quot;, OWNER=&quot;pi&quot;</code></p></li><li><p>modify your Zigbee2MQTT config to adjust new SYMLINK name: <code>nano /opt/zigbee2mqtt/data/configuration.yaml</code></p></li></ol><p><code>… serial: port: /dev/ttyUSB.CC2531-01 …</code></p><p>After reboot your device will have the right permissions and always the same name.</p><h3 id=\"method-2-add-your-user-to-specific-groups\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#method-2-add-your-user-to-specific-groups\"><span>Method 2: Add your user to specific groups</span></a></h3><p>As mentioned on https://github.com/esp8266/source-code-examples/issues/26 , depending on your linux installation, various groups could have ownership of the device.</p><p>Add your user to the <code>uucp </code> , <code>tty </code> , <code>dialout </code> groups:</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">sudo usermod -a -G uucp $USER</span>\n<span class=\"line\">sudo usermod -a -G tty $USER</span>\n<span class=\"line\">sudo usermod -a -G dialout $USER</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>Reboot your device and now your user should have access to the device.</p><h2 id=\"error-coordinator-failed-to-start-probably-the-panid-is-already-in-use-try-a-different-panid-or-channel\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#error-coordinator-failed-to-start-probably-the-panid-is-already-in-use-try-a-different-panid-or-channel\"><span>Error: <code>Coordinator failed to start, probably the panID is already in use, try a different panID or channel</code></span></a></h2>", 20)),
		createBaseVNode("ul", null, [
			createBaseVNode("li", null, [
				_cache[57] || (_cache[57] = createTextVNode("If you still get this error after increasing the panID (as explained ", -1)),
				createVNode(_component_RouteLink, { to: "/guide/configuration/zigbee-network.html#network-config" }, {
					default: withCtx(() => [..._cache[56] || (_cache[56] = [createTextVNode("here", -1)])]),
					_: 1
				}),
				_cache[58] || (_cache[58] = createTextVNode(") and you are using a Raspberry Pi with other USB devices attached (e.g. SSD) try connecting the SSD or adapter through a powered USB hub.", -1))
			]),
			_cache[59] || (_cache[59] = createBaseVNode("li", null, [
				createTextVNode("In case you are getting this after first starting successfully and pairing a device it might be that the firmware has been flashed incorrectly. Try flashing the stick on a different computer ("),
				createBaseVNode("a", {
					href: "https://github.com/Koenkk/zigbee2mqtt/issues/6302",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "detailed info"),
				createTextVNode("). This issue mainly occurs in combination with a Slaesh's CC2652RB stick.")
			], -1)),
			_cache[60] || (_cache[60] = createBaseVNode("li", null, "If you had your Zigbee network before and such an error appears with the new Zigbee adapter, try to switch off the Zigbee routers that were connected to your previous Zigbee network and restart Zigbee2MQTT.", -1))
		]),
		_cache[73] || (_cache[73] = createStaticVNode("<h2 id=\"error-resource-temporarily-unavailable-cannot-lock-port\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#error-resource-temporarily-unavailable-cannot-lock-port\"><span>Error: <code>Resource temporarily unavailable Cannot lock port</code></span></a></h2><p>This error occurs when another program is already using (and thus locking) the adapter. You can find out which via the following command: <code>ls -l /proc/[0-9]/fd/ |grep /dev/ttyACM0</code> (replace <code>/dev/ttyACM0</code> with your adapter port).</p><h2 id=\"error-received-unexpected-reset-from-adapter-with-reason-reset-software\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#error-received-unexpected-reset-from-adapter-with-reason-reset-software\"><span>Error: <code>Received unexpected reset from adapter, with reason=RESET_SOFTWARE</code></span></a></h2><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">error: zh:ember:uart:ash: Received unexpected reset from adapter, with reason=RESET_SOFTWARE.</span>\n<span class=\"line\">error: zh:ember:uart:ash: ASH disconnected: ASH_ERROR_NCP_RESET | Adapter status: ASH_NCP_FATAL_ERROR</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>The most likely reason is that another program is trying to use the adapter.<br> If using Home Assistant, make sure the Zigbee Home Automation (ZHA) integration is disabled.</p><h2 id=\"raspberry-pi-users\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#raspberry-pi-users\"><span>Raspberry Pi users</span></a></h2><h2 id=\"raspberry-pi-os\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#raspberry-pi-os\"><span>Raspberry Pi OS</span></a></h2><p>Make sure that you are using at least Raspberry Pi OS 11. To figure out which version you are running execute:</p><div class=\"language-bash line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"sh\"><pre><code class=\"language-bash\"><span class=\"line\"><span class=\"token function\">cat</span> /etc/issue.net</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div></div></div><h2 id=\"use-a-good-power-supply\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#use-a-good-power-supply\"><span>Use a good power supply</span></a></h2><p>A bad power supply can make your system and its USB devices unstable. Make sure to use a good power supply.</p><p>In case you see message like below when running <code>dmesg -w</code> you are using a bad power supply.</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">[44870.355590] Under-voltage detected! (0x00050005)</span>\n<span class=\"line\">[44874.515618] Voltage normalised (0x00000000)</span>\n<span class=\"line\">[44880.755718] Under-voltage detected! (0x00050005)</span>\n<span class=\"line\">[44889.075627] Voltage normalised (0x00000000)</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>Also try connecting the adapter via a powered USB hub (especially if you have an SSD connected to the Pi).</p><h2 id=\"make-sure-the-extension-cable-works\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#make-sure-the-extension-cable-works\"><span>Make sure the extension cable works</span></a></h2><p>A bad extension cable can lead to connection issues between the system and the adapter. Symptoms of this are disconnection messages in the <code>dmesg -w</code> log like below.</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">[44929.156957] usb 1-1.5: USB disconnect, device number 119</span>\n<span class=\"line\">[44929.455555] usb 1-1.5: new full-speed USB device number 120 using dwc_otg</span>\n<span class=\"line\">[44929.604582] usb 1-1.5: New USB device found, idVendor=0451, idProduct=16a8, bcdDevice= 0.09</span>\n<span class=\"line\">[44929.604596] usb 1-1.5: New USB device strings: Mfr=1, Product=2, SerialNumber=3</span>\n<span class=\"line\">[44929.604606] usb 1-1.5: Product: TI CC2531 USB CDC</span>\n<span class=\"line\">[44929.604615] usb 1-1.5: Manufacturer: Texas Instruments</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"for-openhab-users-disable-zwave-binding\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#for-openhab-users-disable-zwave-binding\"><span>For Openhab users: disable zwave binding</span></a></h2><p>The Openhab zwave binding interferes with Zigbee2MQTT, click <a href=\"https://community.openhab.org/t/apparently-the-zwave-binding-blocks-the-dev-ttyusb0-port-in-combination-with-a-cc2652rb-zigbee2mqtt-dongle/103245\" target=\"_blank\" rel=\"noopener noreferrer\">here</a> for more information.</p><h2 id=\"in-case-of-a-cc2530-or-cc2531-adapter-verify-that-don-t-have-a-cc2540\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#in-case-of-a-cc2530-or-cc2531-adapter-verify-that-don-t-have-a-cc2540\"><span>In case of a CC2530 or CC2531 adapter, verify that don&#39;t have a CC2540</span></a></h2><p>The CC2540 can be confused easily with the CC2531 as it looks (almost) exactly the same. However, this device does not support zigbee but bluetooth. This can be verified by looking at the chip.</p><h2 id=\"modemmanager-is-installed\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#modemmanager-is-installed\"><span><a href=\"https://www.freedesktop.org/wiki/Software/ModemManager/\" target=\"_blank\" rel=\"noopener noreferrer\">ModemManager</a> is installed</span></a></h2><p>ModemManager, which is default installed on e.g. Ubuntu, is known to cause problems. It can easily be fixed by removing ModemManager through <code>sudo apt-get purge modemmanager</code>.</p><h2 id=\"make-sure-your-computer-has-enough-resources-available\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#make-sure-your-computer-has-enough-resources-available\"><span>Make sure your computer has enough resources available</span></a></h2><p>Serial communication may experience instability if your computer is low on resources. If your CPU and memory consistently operate at full capacity, it might suggest a shortage of resources. For instance, using the Zigee2MQTT addon in Home Assistant on a Raspberry Pi 3 can lead to resource exhaustion.</p><h2 id=\"hciuart-is-running\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#hciuart-is-running\"><span>hciuart is running</span></a></h2><p>hciuart can be disabled by executing: <code>sudo systemctl disable hciuart</code>.</p><h2 id=\"texas-instruments-launchxl-cc1352p-2-cc26x2r1-only-press-the-reset-button-on-the-device\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#texas-instruments-launchxl-cc1352p-2-cc26x2r1-only-press-the-reset-button-on-the-device\"><span>Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1 only: press the reset button on the device</span></a></h2><p>If Zigbee2MQTT fails to start with a Texas Instruments LAUNCHXL-CC1352P-2/CC26X2R1 with <code>Error: SRSP - SYS - version after 6000ms</code>, you most probably have connected your device to a system that requires pressing the reset button (the one next to the USB connector) momentarily/shortly after connecting the USB cable. This issue has primarily been observed on x86 architectures only ( e.g., Intel NUC, HPE Microserver, i7 laptop), see also <a href=\"https://github.com/Koenkk/zigbee2mqtt/issues/2162\" target=\"_blank\" rel=\"noopener noreferrer\">#2162</a>. The procedure has to be repeated every time the adapter is re-connected and it&#39;s not clear yet, whether this can be fixed at all. It does not seem to occur on ARM based boards (Raspberry Pi, ODROID XU4).</p><p>Something that can also solve the issue is to replug the USB cable.</p><h2 id=\"cc2531-coordinators-only-press-the-reset-button-on-the-device\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#cc2531-coordinators-only-press-the-reset-button-on-the-device\"><span>CC2531 coordinators only: press the reset button on the device</span></a></h2><p>When you plug the CC2531 in your computer, the green LED should go on. By pressing the reset button on the CC2531 the green LED should go off. The CC2531 has 2 buttons on it, the reset button is the one which is closest to the USB port. Now try starting Zigbee2MQTT again.</p><h2 id=\"texas-instruments-launchxl-cc26x2r1-coordinator-only-verify-that-you-have-the-correct-revision\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#texas-instruments-launchxl-cc26x2r1-coordinator-only-verify-that-you-have-the-correct-revision\"><span>Texas Instruments LAUNCHXL-CC26X2R1 coordinator only: verify that you have the correct revision</span></a></h2><p>The revision of your board can be seen in UniFlash by clicking <em>more info</em> in the top, now press <em>Read device info</em>.</p><p>The correct revision is: <strong>E</strong> like shown below.</p><p><img src=\"" + cc26xr1_revision_default + "\" alt=\"cc26xr1_revision\"></p><p>All earlier version are not supported (these are development boards). Return this board to the seller immediately.</p><h2 id=\"emberznet-coordinators-only\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#emberznet-coordinators-only\"><span>EmberZNet coordinators only</span></a></h2>", 38)),
		createBaseVNode("p", null, [
			_cache[62] || (_cache[62] = createTextVNode("See ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/adapters/emberznet.html#error-level" }, {
				default: withCtx(() => [..._cache[61] || (_cache[61] = [createTextVNode("EmberZNet errors", -1)])]),
				_: 1
			}),
			_cache[63] || (_cache[63] = createTextVNode(".", -1))
		]),
		_cache[74] || (_cache[74] = createStaticVNode("<h2 id=\"multiple-cheap-usb-uart\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#multiple-cheap-usb-uart\"><span>Multiple cheap USB-UART</span></a></h2><p>If you have multiple devices connected that are running cheap USB-UART converters (CH341) they may be indistinguishable to your system, since they all possibly have the same idProduct, SerialNumber etc. so they will share the same /dev/serial/by-id. The easiest solution is to change one of your devices to something with a different uart-usb converter. The second solution would be swapping the whole converter or adding external EEPROM memory to a chip that does not have one (like CH341) so you would be able to add a serial number.</p><h2 id=\"error-startup-failed-configuration-adapter-mismatch-see-logs-above-for-more-information\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#error-startup-failed-configuration-adapter-mismatch-see-logs-above-for-more-information\"><span>Error: <code>startup failed - configuration-adapter mismatch - see logs above for more information</code></span></a></h2><p>This happens when you edit one or more of the <code>pan_id</code>, <code>network_key</code> or <code>ext_pan_id</code> values in <code>configuration.yml</code>. If your intent was to do this, the easiest way to resolve this error is to remove the <code>data/coordinator-backup.json</code> file and restart again. Note that this will reset your network and <strong>all devices will need to be re-paired!</strong>. Alternatively, you can revert back to the previous value(s). In that case, look a few lines before the error in the log, you&#39;ll find something like this:</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: Configuration is not consistent with adapter state/backup!</span>\n<span class=\"line\">[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - PAN ID: configured=****, adapter=****</span>\n<span class=\"line\">[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - Extended PAN ID: configured=****, adapter=****</span>\n<span class=\"line\">[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - Network Key: configured=****, adapter=****</span>\n<span class=\"line\">[2024-12-14 20:25:39] error: 	zh:adapter:zstack:manager: - Channel List: configured=**, adapter=**</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>(In this example the actual values are replaced with <code>*</code>s) You can used the values that are listed for the adapter and put them back in the configuration file. Note that you can&#39;t just paste them back: in the logs the keys are printed as hexadecimal strings, but in the config file, <code>ext_pan_id</code> and <code>ext_pan_id</code> should be entered as arrays. Suppose your network key shows as <code>39af4d83h2dcb389</code> in the logs, then you should put the following in your config file:</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">ext_pan_id: [0x39,0xaf,0x4d,0x83,0xh2,0xdc,0xb3,0x89]</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div></div></div><h2 id=\"zigbee-adapters-over-the-network-use-robust-and-reliable-network-adapters-on-zigbee2mqtt-server\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zigbee-adapters-over-the-network-use-robust-and-reliable-network-adapters-on-zigbee2mqtt-server\"><span>Zigbee adapters over the network: use robust and reliable network adapters on Zigbee2MQTT server</span></a></h2><p>If you have a WiFi or ethernet-connected Zigbee adapter, Zigbee2MQTT is communicating with the Zigbee adapter over the LAN through serial-over-IP protocol.</p><p>The use of USB-WiFi or USB-ethernet adapters on the Zigbee2MQTT server is discouraged because despite the apparent equivalence to the onboard adapters in terms of specifications, they are designed in small enclosures, often not well ventilated and tend to overheat.<br> These adapters are known to stall or stop working in case of high loads or overheating, causing errors like:</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">[2024-06-24 03:37:22] error: zh:ember:uart:ash: Received ERROR from NCP while connecting, with code=ERROR_EXCEEDED_MAXIMUM_ACK_TIMEOUT_COUNT.</span>\n<span class=\"line\">[2024-06-24 03:37:22] error: zh:ember:uart:ash: ASH disconnected | NCP status: ASH_NCP_FATAL_ERROR</span>\n<span class=\"line\">[2024-06-24 03:37:22] error: zh:ember:uart:ash: Error while parsing received frame, status=ASH_NCP_FATAL_ERROR.</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>where a timeout occurred on the serial-over-IP protocol, or:</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">[2024-06-24 03:37:24] warning: zh:ember:uart:ash: Frame(s) in progress cancelled in [1ac1020b0a527e]</span>\n<span class=\"line\">[2024-06-24 03:37:24] error: zh:ember:uart:ash: Received unexpected reset from NCP, with reason=RESET_SOFTWARE.</span>\n<span class=\"line\">[2024-06-24 03:37:24] error: zh:ember:uart:ash: ASH disconnected: ASH_ERROR_NCP_RESET | NCP status: ASH_NCP_FATAL_ERROR</span>\n<span class=\"line\">[2024-06-24 03:37:24] error: zh:ember:uart:ash: Error while parsing received frame, status=HOST_FATAL_ERROR.</span>\n<span class=\"line\">[2024-06-24 03:37:24] error: zh:ember: !!! NCP FATAL ERROR reason=HOST_FATAL_ERROR. ATTEMPTING RESET... !!!</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>which shows a communication out of sync between host and NCP but also, and this is a clear hint of network problems:</p><div class=\"language-text line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"text\"><pre><code class=\"language-text\"><span class=\"line\">[2024-06-24 03:38:05] error: z2m:mqtt: Not connected to MQTT server!</span>\n<span class=\"line\">[2024-06-24 03:38:05] error: z2m:mqtt: Cannot send message: topic: &#39;zigbee2mqtt/bridge/state&#39;, payload: &#39;{&quot;state&quot;:&quot;offline&quot;}</span>\n<span class=\"line\">[2024-06-24 03:38:05] info: z2m:mqtt: Disconnecting from MQTT server</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>where Zigbee2MQTT could not connect to the MQTT server over the LAN.</p><p>The best setup for this situation is to use the ethernet port embedded into the Zigbee2MQTT server motherboard which guarantees reliability of communications in all load conditions.<br> As a second choice you can use the onboard WiFi adapter which should as well be designed for reliability, but also consider the stability of your WiFi network.<br> If all the onboard adapters are in use and you need to add another network adapter, the best choice is to install an internal network card on the PCIe bus, with proper cooling design.</p><h2 id=\"error-regular-crashes-with-timeout-errors-or-failure-to-start-after-the-serial-port-is-opened\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#error-regular-crashes-with-timeout-errors-or-failure-to-start-after-the-serial-port-is-opened\"><span>Error: regular crashes with timeout errors or failure to start after the serial port is opened</span></a></h2><p>These errors may occur when the serial communication between the Zigbee dongle and Zigbee2MQTT unexpectedly stops working.</p><p>Possible reasons that may cause this error:</p><ol><li><p>The hardware connection between the host computer and the Zigbee dongle is unreliable. In the following example a cheap USB cable causing unreliable connection is compared with a good USB cable: <img src=\"" + good_vs_bad_usb_cable_default + "\" alt=\"good-vs-bad-usb-cable\"> With such cheap cable it is enough to touch the cable to cause USB disconnections.</p></li><li><p>Zigbee2MQTT is running in a Virtual Machine and the USB passthrough between the host and the VM is unreliable. This can be caused by the virtualization environment, the USB hardware or a combination of both. If these error appear, we can do something to reduce the complexity of the setup, improve stability and help investigating the usb connection with the host. Instead of passing through to the VM the full USB device we passthrough the serial device. The VM configuration changes from host-(USB passthrough)-&gt;VM-&gt;USB-serial-&gt;serial(for Zigbee2MQTT configuration) to host-(serial passthrough)-&gt;VM-&gt;serial(for Zigbee2MQTT configuration)</p></li></ol><p>As an example, this is the procedure to passthrough the serial device to a Proxmox Home Assistant OS installation:</p><ul><li>Add a serial0 (or serial1 or 2 or 3) to the proxmox VM hardware<br> By default the serial port is a socket in the Proxmox hardware VM config (&quot;serial0: socket&quot;) so we have to change this parameter in the VM configuration file /etc/pve/quemu-server/{VMID}.conf to point to the real serial device, for example: &quot;serial0: /dev/serial/by-id/usb-ITEAD_SONOFF_Zigbee_3.0_USB_Dongle_Plus_V2_20240122184528-if00&quot;</li><li>Free up the ttyS0 serial port from getty in Home Assistant OS<br> In the VM this serial port passed through is recognized as ttyS0, but the Home Assistant OS systemd by default is spawning an agetty on /dev/ttyS0, in factin the file /mnt/boot/cmdline.txt kernel commandline parameters the ttyS0 is set as console (content is &quot;console=ttyS0 console=tty0&quot;). We have to change this cmdline.txt file in the VM so that systemd leaves ttyS0 alone without spawning agetty, therefore we remove the ttyS0 part and the cmdline.txt becomes &quot;console=tty0&quot;.</li></ul><p>Now Zigbee2MQTT is able to reach the dongle through /dev/ttyS0 which is a &quot;real&quot; serial port inside the VM. Any issue with the USB device is logged by the host kernel and can be easily spotted with dmesg in this way we isolate them from the issues on the serial device.</p><h2 id=\"pnpm-related-error-on-startup\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pnpm-related-error-on-startup\"><span><code>pnpm</code>-related error on startup</span></a></h2><p>Make sure you use the <code>pnpm</code> version used by Zigbee2MQTT (at least the same <em>major</em> version):</p><ul><li><code>release</code> branch: https://github.com/Koenkk/zigbee2mqtt/blob/master/package.json#L7</li><li><code>dev</code> branch: https://github.com/Koenkk/zigbee2mqtt/blob/dev/package.json#L7</li></ul>", 27))
	]);
}
var _20_zigbee2mqtt_fails_to_start_crashes_runtime_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, _20_zigbee2mqtt_fails_to_start_crashes_runtime_default as default };
