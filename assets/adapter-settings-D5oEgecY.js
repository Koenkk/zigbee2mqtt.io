import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-BXeDPBLt.js";
// docs/guide/configuration/adapter-settings.md
var _pageData = JSON.parse("{\"path\":\"/guide/configuration/adapter-settings.html\",\"title\":\"Adapter settings\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"sidebarDepth\":1},\"filePathRelative\":\"guide/configuration/adapter-settings.md\"}");
var _sfc_main = { name: "adapter-settings.md" };
var _hoisted_1 = { class: "hint-container warning" };
var _hoisted_2 = { class: "hint-container tip" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[30] || (_cache[30] = createBaseVNode("h1", {
			id: "adapter-settings",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#adapter-settings"
		}, [createBaseVNode("span", null, "Adapter settings")])], -1)),
		createBaseVNode("div", _hoisted_1, [_cache[3] || (_cache[3] = createBaseVNode("p", { class: "hint-container-title" }, "Warning", -1)), createBaseVNode("p", null, [
			_cache[1] || (_cache[1] = createTextVNode("Not all features are supported for every adapter, to see what's supported, go to your ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/adapters/" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("adapter page", -1)])]),
				_: 1
			}),
			_cache[2] || (_cache[2] = createTextVNode(".", -1))
		])]),
		_cache[31] || (_cache[31] = createBaseVNode("h2", {
			id: "basic-configuration",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#basic-configuration"
		}, [createBaseVNode("span", null, "Basic configuration")])], -1)),
		_cache[32] || (_cache[32] = createBaseVNode("p", null, [
			createTextVNode("In case Zigbee2MQTT cannot automatically detect your adapter (fails to start with: "),
			createBaseVNode("code", null, "USB adapter discovery error (No valid USB adapter found). Specify valid 'adapter' and 'port' in your configuration."),
			createTextVNode(") we need to configure the "),
			createBaseVNode("code", null, "serial"),
			createTextVNode(" section in the "),
			createBaseVNode("code", null, "configuration.yaml"),
			createTextVNode(".")
		], -1)),
		_cache[33] || (_cache[33] = createBaseVNode("p", null, "First determine the port of your adapter:", -1)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [createBaseVNode("p", null, [
			_cache[5] || (_cache[5] = createTextVNode("For USB adapters: when running on Windows see ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/installation/05_windows.html#starting-zigbee2mqtt" }, {
				default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("these instructions", -1)])]),
				_: 1
			}),
			_cache[6] || (_cache[6] = createTextVNode(", for Linux execute ", -1)),
			_cache[7] || (_cache[7] = createBaseVNode("code", null, "ls -l /dev/serial/by-id", -1)),
			_cache[8] || (_cache[8] = createTextVNode(":", -1))
		]), _cache[9] || (_cache[9] = createStaticVNode("<div class=\"language-bash line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"sh\"><pre><code class=\"language-bash\"><span class=\"line\">pi@raspberry:/ $ <span class=\"token function\">ls</span> <span class=\"token parameter variable\">-l</span> /dev/serial/by-id</span>\n<span class=\"line\">total <span class=\"token number\">0</span></span>\n<span class=\"line\">lrwxrwxrwx. <span class=\"token number\">1</span> root root <span class=\"token number\">13</span> Oct <span class=\"token number\">19</span> <span class=\"token number\">19</span>:26 usb-Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF-if00 -<span class=\"token operator\">&gt;</span> <span class=\"token punctuation\">..</span>/<span class=\"token punctuation\">..</span>/ttyACM0</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><ul><li>If it&#39;s still not connecting, make sure your adapter is in USB mode. Some adapters, eg. the <a href=\"https://xzg.xyzroe.cc/hardware/\" target=\"_blank\" rel=\"noopener noreferrer\">ZigStar</a> run in network mode by default, and won&#39;t communicate over USB until put into USB mode.</li></ul>", 2))]), _cache[10] || (_cache[10] = createBaseVNode("li", null, [createBaseVNode("p", null, "For network adapters you need to find the IP address of your adapter through router/switch web-interface. Make sure that the adapter has been assigned a static IP address!"), createBaseVNode("ul", null, [createBaseVNode("li", null, "Alternatively, in case your adapter supports mDNS, see the mDNS docs below.")])], -1))]),
		createBaseVNode("p", null, [
			_cache[12] || (_cache[12] = createTextVNode("Next determine what ", -1)),
			_cache[13] || (_cache[13] = createBaseVNode("code", null, "adapter", -1)),
			_cache[14] || (_cache[14] = createTextVNode(" you are using by going to your ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/adapters/" }, {
				default: withCtx(() => [..._cache[11] || (_cache[11] = [createTextVNode("adapter page", -1)])]),
				_: 1
			}),
			_cache[15] || (_cache[15] = createTextVNode(". Possible adapters are ", -1)),
			_cache[16] || (_cache[16] = createBaseVNode("code", null, "zstack", -1)),
			_cache[17] || (_cache[17] = createTextVNode(", ", -1)),
			_cache[18] || (_cache[18] = createBaseVNode("code", null, "ember", -1)),
			_cache[19] || (_cache[19] = createTextVNode(", ", -1)),
			_cache[20] || (_cache[20] = createBaseVNode("code", null, "deconz", -1)),
			_cache[21] || (_cache[21] = createTextVNode(", ", -1)),
			_cache[22] || (_cache[22] = createBaseVNode("code", null, "zigate", -1)),
			_cache[23] || (_cache[23] = createTextVNode(" or ", -1)),
			_cache[24] || (_cache[24] = createBaseVNode("code", null, "zboss", -1)),
			_cache[25] || (_cache[25] = createTextVNode(".", -1))
		]),
		_cache[34] || (_cache[34] = createStaticVNode("<p>Given the example of the USB adapter above in combination with a <code>zstack</code> adapter, we would add the following to the <code>configuration.yaml</code>:</p><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">serial</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token comment\"># Location of the adapter</span></span>\n<span class=\"line\">    <span class=\"token comment\"># USB adapters - use format &quot;port: /dev/serial/by-id/XXX&quot;</span></span>\n<span class=\"line\">    <span class=\"token comment\"># Ethernet adapters - use format &quot;port: tcp://192.168.1.12:6638&quot;</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">port</span><span class=\"token punctuation\">:</span> /dev/serial/by<span class=\"token punctuation\">-</span>id/usb<span class=\"token punctuation\">-</span>Texas_Instruments_TI_CC2531_USB_CDC___0X00124B0018ED3DDF<span class=\"token punctuation\">-</span>if00</span>\n<span class=\"line\">    <span class=\"token comment\"># Adapter type, allowed values: `zstack`, `ember`, `deconz`, `zigate` or `zboss`</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">adapter</span><span class=\"token punctuation\">:</span> zstack</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>This serial configuration should be enough to make Zigbee2MQTT start.</p><h2 id=\"mdns-zeroconf-discovery\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#mdns-zeroconf-discovery\"><span>mDNS Zeroconf discovery.</span></a></h2><p>Zigbee2MQTT supports automatic discovery of Zigbee network Adapters. In order to use this feature, your adapter must support discovery via mDNS Zeroconf.</p><p>If you have a more than 1 device with the same mDNS service type (name), Zigbee2MQTT with autodiscover option will connect to the random one. So for proper use we recommend to have only one physically connected network adapter with the same mDNS service type (name). Otherwise, please set-up a settings over IP address and port, as described on the passage above.</p><div class=\"hint-container important\"><p class=\"hint-container-title\">Important</p><p>When using this autodetection, the following parameters in <code>configuration.yaml</code> will be ignored: <code>adapter</code>, <code>baudrate</code>.</p></div><p>List of tested devices supporting mDNS Zeroconf autodiscovery:</p><table><thead><tr><th style=\"text-align:left;\">Device</th><th style=\"text-align:center;\">MDNS service type</th></tr></thead><tbody><tr><td style=\"text-align:left;\">SLZB-06</td><td style=\"text-align:center;\">slzb-06</td></tr><tr><td style=\"text-align:left;\">UZG-01</td><td style=\"text-align:center;\">uzg-01</td></tr><tr><td style=\"text-align:left;\">CZC-01</td><td style=\"text-align:center;\">czc</td></tr></tbody></table><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">serial</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">port</span><span class=\"token punctuation\">:</span> mdns<span class=\"token punctuation\">:</span>//slzb<span class=\"token punctuation\">-</span><span class=\"token number\">06</span></span>\n<span class=\"line\">    <span class=\"token comment\"># port: mdns://uzg-01</span></span>\n<span class=\"line\">    <span class=\"token comment\"># port: mdns://czc</span></span>\n<span class=\"line\">    <span class=\"token comment\"># Optional: disable LED of the adapter if supported (default: false)</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">disable_led</span><span class=\"token punctuation\">:</span> <span class=\"token boolean important\">false</span></span>\n<span class=\"line\">    <span class=\"token comment\"># Optional: Baud rate speed for serial port, this can be anything firmware support but default is 115200 for Z-Stack and EZSP, 38400 for Deconz, however note that some EZSP firmware need 57600.</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">baudrate</span><span class=\"token punctuation\">:</span> <span class=\"token number\">115200</span></span>\n<span class=\"line\">    <span class=\"token comment\"># Optional: RTS / CTS Hardware Flow Control for serial port (default: false)</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">rtscts</span><span class=\"token punctuation\">:</span> <span class=\"token boolean important\">false</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><h2 id=\"advanced-configuration\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#advanced-configuration\"><span>Advanced configuration</span></a></h2><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">advanced</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token comment\"># Optional: configure adapter concurrency (e.g. 2 for CC2531 or 16 for CC26X2R1) (default: null, uses recommended value)</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">adapter_concurrent</span><span class=\"token punctuation\">:</span> <span class=\"token null important\">null</span></span>\n<span class=\"line\">    <span class=\"token comment\"># Optional: Transmit power setting in dBm (default: 5).</span></span>\n<span class=\"line\">    <span class=\"token comment\"># This will set the transmit power for devices that bring an inbuilt amplifier.</span></span>\n<span class=\"line\">    <span class=\"token comment\"># It can&#39;t go over the maximum of the respective hardware and might be limited</span></span>\n<span class=\"line\">    <span class=\"token comment\"># by firmware (for example to migrate heat, or by using an unsupported firmware).</span></span>\n<span class=\"line\">    <span class=\"token comment\"># For the CC2652R(B) this is 5 dBm, CC2652P/CC1352P-2 20 dBm.</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">transmit_power</span><span class=\"token punctuation\">:</span> <span class=\"token number\">5</span></span>\n<span class=\"line\">    <span class=\"token comment\"># Optional: Set the adapter delay, only used for Conbee/Raspbee adapters (default 0).</span></span>\n<span class=\"line\">    <span class=\"token comment\"># In case you are having issues try `200`.</span></span>\n<span class=\"line\">    <span class=\"token comment\"># For more information see https://github.com/Koenkk/zigbee2mqtt/issues/4884</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">adapter_delay</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>", 12)),
		createBaseVNode("div", _hoisted_2, [_cache[29] || (_cache[29] = createBaseVNode("p", { class: "hint-container-title" }, "Tips", -1)), createBaseVNode("p", null, [
			_cache[27] || (_cache[27] = createTextVNode("It's also possible to connect USB Adapters over TCP. See how to connect a ", -1)),
			createVNode(_component_RouteLink, { to: "/advanced/remote-adapter/connect_to_a_remote_adapter.html" }, {
				default: withCtx(() => [..._cache[26] || (_cache[26] = [createTextVNode("remote adapter", -1)])]),
				_: 1
			}),
			_cache[28] || (_cache[28] = createTextVNode(".", -1))
		])])
	]);
}
var adapter_settings_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, adapter_settings_default as default };
