import { K as withCtx, P as openBlock, R as resolveComponent, g as createVNode, h as createTextVNode, m as createStaticVNode, s as createBaseVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/guide/installation/README.md
var _pageData = JSON.parse("{\"path\":\"/guide/installation/\",\"title\":\"Installation\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"redirectFrom\":\"/getting_started/running_zigbee2mqtt.md\"},\"filePathRelative\":\"guide/installation/README.md\"}");
var _sfc_main = { name: "README.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[9] || (_cache[9] = createStaticVNode("<h1 id=\"installation\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#installation\"><span>Installation</span></a></h1><p>Zigbee2MQTT was written in Node.js and runs almost on every platform with affordable memory footprint.</p><div class=\"hint-container warning\"><p class=\"hint-container-title\">Warning</p><p><strong>32-bit platforms are deprecated, support ends April 2027.</strong> When Node.js 22 reaches end-of-life (April 2027), the minimum supported Node.js version becomes v24, which no longer ships official builds for any 32-bit platform. This affects every installation method, not only Docker. If you run Zigbee2MQTT on 32-bit hardware or a 32-bit OS (e.g. Raspberry Pi 1/Zero, older Raspberry Pi OS 32-bit installs), plan to move to a 64-bit OS or hardware (<code>amd64</code>/<code>x86_64</code>, <code>arm64</code>/<code>aarch64</code>) before then. See <a href=\"https://github.com/Koenkk/zigbee2mqtt/issues/33552\" target=\"_blank\" rel=\"noopener noreferrer\">#33552</a>.</p></div>", 3)),
		createBaseVNode("ul", null, [
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/installation/01_linux.html" }, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Linux", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/installation/02_docker.html" }, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("Docker", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/installation/03_ha_addon.html" }, {
				default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("Home Assistant addon", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/installation/04_openhabian.html" }, {
				default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("openHABian", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/installation/05_windows.html" }, {
				default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Windows", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/installation/06_freebsd_jail.html" }, {
				default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("FreeBSD jail", -1)])]),
				_: 1
			})]),
			createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/installation/08_kubernetes.html" }, {
				default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode("Kubernetes", -1)])]),
				_: 1
			})])
		]),
		_cache[10] || (_cache[10] = createBaseVNode("h2", {
			id: "optional",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#optional"
		}, [createBaseVNode("span", null, "Optional")])], -1)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/installation/15_watchdog.html" }, {
			default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("Watchdog", -1)])]),
			_: 1
		})])]),
		_cache[11] || (_cache[11] = createBaseVNode("h2", {
			id: "troubleshooting",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#troubleshooting"
		}, [createBaseVNode("span", null, "Troubleshooting")])], -1)),
		createBaseVNode("ul", null, [createBaseVNode("li", null, [createVNode(_component_RouteLink, { to: "/guide/installation/20_zigbee2mqtt-fails-to-start_crashes-runtime.html" }, {
			default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode("Zigbee2MQTT fails to start/crashes runtime", -1)])]),
			_: 1
		})])])
	]);
}
var README_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, README_default as default };
