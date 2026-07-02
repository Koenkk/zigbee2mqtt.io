import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/guide/installation/14_securing.md
var _pageData = JSON.parse("{\"path\":\"/guide/installation/14_securing.html\",\"title\":\"Securing the installation\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"sidebarDepth\":1,\"next\":\"../configuration/\",\"redirectFrom\":[\"/how_tos/how_to_secure_network.md\",\"/advanced/zigbee/03_secure_network.md\"]},\"git\":{\"updatedTime\":1779131202000,\"contributors\":[{\"name\":\"Nerivec\",\"username\":\"Nerivec\",\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/Nerivec\"},{\"name\":\"Andy\",\"username\":\"Andy\",\"email\":\"andrei_lazarov@yahoo.com\",\"commits\":1,\"url\":\"https://github.com/Andy\"}],\"changelog\":[{\"hash\":\"aa4299706eb2a81313ccdf59057ab009d858dd7c\",\"time\":1779131202000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"feat: add redirect plugin (#5130)\"},{\"hash\":\"783dad40de34a7ba7543161e41783dffd0849cbe\",\"time\":1777648793000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"feat: add \\\"securing\\\" page (#5067)\",\"coAuthors\":[{\"name\":\"Andy\",\"email\":\"andrei_lazarov@yahoo.com\"}]}]},\"filePathRelative\":\"guide/installation/14_securing.md\"}");
var _sfc_main = { name: "14_securing.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[39] || (_cache[39] = createStaticVNode("<h1 id=\"securing-the-installation\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#securing-the-installation\"><span>Securing the installation</span></a></h1><div class=\"hint-container warning\"><p class=\"hint-container-title\">Warning</p><p>This page provides an overview of how security applies to a typical installation. Each setup being slightly different, not all, and/or more, could apply.</p></div><p>A useful way to think about Zigbee2MQTT in terms of security is to compare it to the software running on a network router: it provides configuration and control of a network. As such, it is, by default, only locally accessible.</p><p>With Zigbee2MQTT being a bridge, the various software components attached to it (MQTT broker, automation software, etc.) must each be secured properly as well. Refer to their respective documentation.</p><p>Exposing any of these components publicly requires careful security planning. Untrusted access must never be permitted.</p><h2 id=\"host-system\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#host-system\"><span>Host system</span></a></h2><ul><li><strong>Dedicated user</strong>: run Zigbee2MQTT under a dedicated, unprivileged user account (not <code>root</code>). This limits the blast radius if the process is ever compromised.</li><li><strong>Restrict data directory access</strong>: the data directory contains the full configuration, network state, and device data. Only the Zigbee2MQTT user should have access to it.</li><li><strong>Keep the host system up to date</strong>: apply operating system and dependency (Node.js, MQTT broker, etc.) security updates regularly and keep Zigbee2MQTT itself updated.</li></ul><h2 id=\"configuration-file\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#configuration-file\"><span>Configuration file</span></a></h2><p>The <code>configuration.yaml</code> file contains sensitive information such as MQTT credentials and the Zigbee network key.</p>", 9)),
		createBaseVNode("ul", null, [_cache[11] || (_cache[11] = createStaticVNode("<li><p><strong>Restrict file permissions</strong>: ensure only the user running Zigbee2MQTT can read/write the file.</p><div class=\"language-bash line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"sh\"><pre><code class=\"language-bash\"><span class=\"line\"><span class=\"token function\">chmod</span> <span class=\"token number\">600</span> configuration.yaml</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div></div></div></li>", 1)), createBaseVNode("li", null, [createBaseVNode("p", null, [
			_cache[1] || (_cache[1] = createBaseVNode("strong", null, "Use a secrets file", -1)),
			_cache[2] || (_cache[2] = createTextVNode(": avoid storing credentials in plain text in ", -1)),
			_cache[3] || (_cache[3] = createBaseVNode("code", null, "configuration.yaml", -1)),
			_cache[4] || (_cache[4] = createTextVNode(". Instead, use a separate ", -1)),
			_cache[5] || (_cache[5] = createBaseVNode("code", null, "secret.yaml", -1)),
			_cache[6] || (_cache[6] = createTextVNode(" file referenced with the ", -1)),
			_cache[7] || (_cache[7] = createBaseVNode("code", null, "!secret.yaml", -1)),
			_cache[8] || (_cache[8] = createTextVNode(" syntax. See ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/mqtt.html#specifying-mqtt-serveruserpassword-and-network_key-in-a-different-file" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Specifying in a different file", -1)])]),
				_: 1
			}),
			_cache[9] || (_cache[9] = createTextVNode(".", -1))
		]), _cache[10] || (_cache[10] = createStaticVNode("<p>Apply the same permission restriction to <code>secret.yaml</code>:</p><div class=\"language-bash line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"sh\"><pre><code class=\"language-bash\"><span class=\"line\"><span class=\"token function\">chmod</span> <span class=\"token number\">600</span> secret.yaml</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div></div></div>", 2))])]),
		_cache[40] || (_cache[40] = createBaseVNode("h2", {
			id: "mqtt",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#mqtt"
		}, [createBaseVNode("span", null, "MQTT")])], -1)),
		_cache[41] || (_cache[41] = createBaseVNode("p", null, "MQTT is the primary entry point in and out of Zigbee2MQTT. It is used to publish data and to control every aspect of Zigbee2MQTT (configuration, network, devices, etc.).", -1)),
		createBaseVNode("p", null, [
			_cache[13] || (_cache[13] = createTextVNode("See ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/mqtt.html" }, {
				default: withCtx(() => [..._cache[12] || (_cache[12] = [createTextVNode("MQTT configuration", -1)])]),
				_: 1
			}),
			_cache[14] || (_cache[14] = createTextVNode(" for the full reference.", -1))
		]),
		_cache[42] || (_cache[42] = createStaticVNode("<div class=\"hint-container caution\"><p class=\"hint-container-title\">CAUTION</p><p>Do not expose the MQTT broker publicly without securing its access. Refer to the available documentation and guides for your broker.</p></div><div class=\"hint-container caution\"><p class=\"hint-container-title\">CAUTION</p><p>Using <code>reject_unauthorized: false</code> in production is dangerous. Its disables TLS certificate validation and makes the connection vulnerable.</p></div><h2 id=\"frontend\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#frontend\"><span>Frontend</span></a></h2><p>The frontend uses the same API as MQTT, but wrapped in a <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket\" target=\"_blank\" rel=\"noopener noreferrer\">WebSocket</a> for in-browser access. Anyone who can reach the frontend has full control over Zigbee2MQTT, same as MQTT.</p><div class=\"hint-container caution\"><p class=\"hint-container-title\">CAUTION</p><p>Do not expose the frontend publicly without securing its access.</p></div><h3 id=\"authentication\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#authentication\"><span>Authentication</span></a></h3>", 6)),
		createBaseVNode("p", null, [
			_cache[16] || (_cache[16] = createTextVNode("Enable token-based authentication with the ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/frontend.html#advanced-configuration" }, {
				default: withCtx(() => [..._cache[15] || (_cache[15] = [createBaseVNode("code", null, "auth_token", -1), createTextVNode(" option", -1)])]),
				_: 1
			}),
			_cache[17] || (_cache[17] = createTextVNode(".", -1))
		]),
		_cache[43] || (_cache[43] = createBaseVNode("p", null, [
			createTextVNode("Use the same precautions as any password. Store it in "),
			createBaseVNode("code", null, "secret.yaml"),
			createTextVNode(" (see "),
			createBaseVNode("a", { href: "#configuration-file" }, "Configuration file"),
			createTextVNode(") rather than directly in "),
			createBaseVNode("code", null, "configuration.yaml"),
			createTextVNode(".")
		], -1)),
		_cache[44] || (_cache[44] = createBaseVNode("h3", {
			id: "encryption-https-wss",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#encryption-https-wss"
		}, [createBaseVNode("span", null, "Encryption (HTTPS / WSS)")])], -1)),
		createBaseVNode("p", null, [
			_cache[19] || (_cache[19] = createTextVNode("Enable HTTPS/WSS directly within Zigbee2MQTT by providing a ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/frontend.html#advanced-configuration" }, {
				default: withCtx(() => [..._cache[18] || (_cache[18] = [createTextVNode("certificate and private key", -1)])]),
				_: 1
			}),
			_cache[20] || (_cache[20] = createTextVNode(".", -1))
		]),
		createBaseVNode("p", null, [
			_cache[22] || (_cache[22] = createTextVNode("Alternatively, terminate TLS at a reverse proxy (Nginx, Apache, etc.) placed in front of the frontend. See ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/frontend.html" }, {
				default: withCtx(() => [..._cache[21] || (_cache[21] = [createTextVNode("Frontend configuration", -1)])]),
				_: 1
			}),
			_cache[23] || (_cache[23] = createTextVNode(" for proxy configuration examples.", -1))
		]),
		_cache[45] || (_cache[45] = createStaticVNode("<h3 id=\"bind-address\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#bind-address\"><span>Bind address</span></a></h3><p>By default, the frontend listens on all interfaces (<code>0.0.0.0</code>). If remote access is not required, restrict it to localhost:</p><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">frontend</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">host</span><span class=\"token punctuation\">:</span> 127.0.0.1</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>Alternatively, use a Unix socket to avoid any network exposure:</p><div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">frontend</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">host</span><span class=\"token punctuation\">:</span> <span class=\"token string\">&#39;/run/zigbee2mqtt/zigbee2mqtt.sock&#39;</span></span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><div class=\"hint-container warning\"><p class=\"hint-container-title\">WARNING</p><p>Beware of the specific requirements of some systems in this regard (Docker, Home Assistant, etc.).</p></div><h2 id=\"zigbee-network\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zigbee-network\"><span>Zigbee network</span></a></h2><h3 id=\"network-encryption-key\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#network-encryption-key\"><span>Network encryption key</span></a></h3><p>Zigbee communication is encrypted using a 128-bit network key.</p><div class=\"hint-container caution\"><p class=\"hint-container-title\">CAUTION</p><p>Changing this key requires re-pairing all devices.</p></div><div class=\"hint-container caution\"><p class=\"hint-container-title\">CAUTION</p><p>If you are currently running a network with the old default key <code>[1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]</code>, it is strongly suggested you change it.</p></div>", 11)),
		createBaseVNode("p", null, [
			_cache[25] || (_cache[25] = createTextVNode("To generate a new random key on next startup, use ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/getting-started/#onboarding" }, {
				default: withCtx(() => [..._cache[24] || (_cache[24] = [createTextVNode("Onboarding", -1)])]),
				_: 1
			}),
			_cache[26] || (_cache[26] = createTextVNode(", or update it manually:", -1))
		]),
		_cache[46] || (_cache[46] = createStaticVNode("<div class=\"language-yaml line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"yml\"><pre><code class=\"language-yaml\"><span class=\"line\"><span class=\"token key atrule\">advanced</span><span class=\"token punctuation\">:</span></span>\n<span class=\"line\">    <span class=\"token key atrule\">network_key</span><span class=\"token punctuation\">:</span> GENERATE</span>\n<span class=\"line\"></span></code></pre><div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0;\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>Zigbee2MQTT will replace <code>GENERATE</code> with a randomly generated key on startup. Of course, you can also set a specific key manually.</p>", 2)),
		createBaseVNode("p", null, [
			_cache[28] || (_cache[28] = createTextVNode("See ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/zigbee-network.html" }, {
				default: withCtx(() => [..._cache[27] || (_cache[27] = [createTextVNode("Zigbee network configuration", -1)])]),
				_: 1
			}),
			_cache[29] || (_cache[29] = createTextVNode(" for more details.", -1))
		]),
		_cache[47] || (_cache[47] = createStaticVNode("<h3 id=\"pan-id-and-extended-pan-id\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#pan-id-and-extended-pan-id\"><span>PAN ID and Extended PAN ID</span></a></h3><p>The PAN ID and Extended PAN ID identify your network. These are not security measures.</p><p>Changing them is possible and requires re-pairing all devices. This is mostly done in case you need to avoid a conflict with another nearby network.</p><h3 id=\"ieee-and-network-addresses\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#ieee-and-network-addresses\"><span>IEEE and Network addresses</span></a></h3><p>The IEEE and Network addresses identify your devices. These are not security measures.</p><p>The IEEE address is statically assigned to the Zigbee chip in the device (although it can be changed in some cases). Two devices with the same IEEE address cannot join a same network.</p><p>The Network Address is randomly assigned on device join and usually remains the same until reset/rejoin (although it may change at the discretion of the device).</p><h3 id=\"joining-permit-join\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#joining-permit-join\"><span>Joining (permit join)</span></a></h3><p>The &quot;permit join&quot; state determines whether new devices are allowed to join the network. Joining is enabled temporarily (for 254 seconds by default) via the dedicated frontend button or via MQTT. You can also close the joining window manually once pairing is complete.</p><div class=\"hint-container tip\"><p class=\"hint-container-title\">TIP</p><p>Freshly joined devices may automatically permit joining on themselves for a specific duration (max 254 seconds).</p></div><h4 id=\"install-codes\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#install-codes\"><span>Install codes</span></a></h4><p>Joining with an install code provides better security (if available). A code is randomly assigned during the manufacturing process of a device. The code allows to encrypt the initial network key transport from the Trust Center (coordinator) to the joining device.</p>", 12)),
		createBaseVNode("p", null, [
			_cache[31] || (_cache[31] = createTextVNode("Ask the vendor or refer to each device's documentation to check if an install code is available (usually printed on the device, plainly or as a QR code). Codes can be added through the frontend. See also ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestinstall_codeadd" }, {
				default: withCtx(() => [..._cache[30] || (_cache[30] = [createTextVNode("Add install code via MQTT", -1)])]),
				_: 1
			}),
			_cache[32] || (_cache[32] = createTextVNode(".", -1))
		]),
		_cache[48] || (_cache[48] = createBaseVNode("h3", {
			id: "device-passlist-and-blocklist",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#device-passlist-and-blocklist"
		}, [createBaseVNode("span", null, "Device passlist and blocklist")])], -1)),
		createBaseVNode("p", null, [
			_cache[34] || (_cache[34] = createTextVNode("For stricter control over which devices are allowed on the network, use a passlist or blocklist. See ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/configuration/block-pass-list.html" }, {
				default: withCtx(() => [..._cache[33] || (_cache[33] = [createTextVNode("Device blocklist / passlist", -1)])]),
				_: 1
			}),
			_cache[35] || (_cache[35] = createTextVNode(" for more details.", -1))
		]),
		_cache[49] || (_cache[49] = createStaticVNode("<div class=\"hint-container tip\"><p class=\"hint-container-title\">TIP</p><p>Devices that are not allowed are removed from the network on startup (e.g. configuration changes since last run), and on join attempts. Note: removal is a request sent to the targeted device to &quot;ask it&quot; to leave, a malicious device could purposely ignore it.</p></div><div class=\"hint-container tip\"><p class=\"hint-container-title\">TIP</p><p>Using a passlist is the most restrictive and therefore most secure option, only explicitly trusted devices can join.</p></div><h3 id=\"inter-pan\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#inter-pan\"><span>Inter-PAN</span></a></h3><p>Inter-PAN messages are <strong>unsecured messages</strong> sent to or received from unjoined devices 1-hop away. Touchlink (previously known as ZLL) uses inter-PAN messaging.</p><p>Inter-PAN is usually reserved for highly specific operations (e.g. resetting a device to factory settings via Touchlink), undesired messages are aggressively dropped, and close physical proximity is required. This limits the impact of its lack of security.</p><div class=\"hint-container warning\"><p class=\"hint-container-title\">WARNING</p><p>Avoid devices that keep Touchlink permanently enabled, especially in places with relative ease of access; a malicious user could otherwise disrupt the network.</p></div><h3 id=\"zigbee-4-0\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#zigbee-4-0\"><span>Zigbee 4.0</span></a></h3><p>Zigbee 4.0 provides several security enhancements. You can read more about it in the announcement from the CSA: <a href=\"https://csa-iot.org/newsroom/the-connectivity-standards-alliance-announces-zigbee-4-0-and-suzi-empowering-the-next-generation-of-secure-interoperable-iot-devices/\" target=\"_blank\" rel=\"noopener noreferrer\">https://csa-iot.org/newsroom/the-connectivity-standards-alliance-announces-zigbee-4-0-and-suzi-empowering-the-next-generation-of-secure-interoperable-iot-devices/</a></p><p>NOTE: It will take time before devices catch up to the new standard and support all these enhancements.</p><h2 id=\"external-extensions-and-converters\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#external-extensions-and-converters\"><span>External extensions and converters</span></a></h2><p>By design, external extensions and converters execute arbitrary user-provided JavaScript code within the Zigbee2MQTT process. This grants significant customization flexibility, but also means that malicious or buggy code can compromise the entire Zigbee2MQTT instance, and potentially the host system.</p><div class=\"hint-container caution\"><p class=\"hint-container-title\">CAUTION</p><p>Only add external extensions and converters from trusted, reviewed sources. Treat them with the same level of scrutiny as any other code/scripts running on your system.</p></div><h2 id=\"firmware-updates-ota\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#firmware-updates-ota\"><span>Firmware updates (OTA)</span></a></h2>", 13)),
		createBaseVNode("p", null, [
			_cache[37] || (_cache[37] = createTextVNode("Firmware updates can provide bug fixes, security updates and other welcomed features. However, they can also change device behavior in ways that may affect Zigbee2MQTT compatibility and potentially introduce buggy, or even malicious functionality. Review the release notes before applying a firmware update. See ", -1)),
			createVNode(_component_RouteLink, { to: "/guide/usage/ota_updates.html" }, {
				default: withCtx(() => [..._cache[36] || (_cache[36] = [createTextVNode("OTA updates", -1)])]),
				_: 1
			}),
			_cache[38] || (_cache[38] = createTextVNode(" for more details.", -1))
		]),
		_cache[50] || (_cache[50] = createBaseVNode("p", null, [
			createTextVNode("By default, Zigbee2MQTT matches and retrieves OTA images from the "),
			createBaseVNode("a", {
				href: "https://github.com/Koenkk/zigbee-OTA",
				target: "_blank",
				rel: "noopener noreferrer"
			}, "Koenkk/zigbee-OTA"),
			createTextVNode(" repository. This repository is a mirror of manufacturer-provided firmware updates, both manually and automatically curated.")
		], -1)),
		_cache[51] || (_cache[51] = createBaseVNode("div", { class: "hint-container caution" }, [createBaseVNode("p", { class: "hint-container-title" }, "CAUTION"), createBaseVNode("p", null, "Only use firmware from trusted sources. Avoid using custom OTA index URLs unless you fully trust the source.")], -1))
	]);
}
var _14_securing_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _pageData, _14_securing_default as default };
