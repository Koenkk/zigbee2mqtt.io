import { F as openBlock, _ as createVNode, c as createBaseVNode, d as createElementBlock, g as createTextVNode, q as withCtx, z as resolveComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/guide/installation/README.md
var _pageData = JSON.parse("{\"path\":\"/guide/installation/\",\"title\":\"Installation\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"redirectFrom\":\"/getting_started/running_zigbee2mqtt.md\"},\"git\":{\"updatedTime\":1779131202000,\"contributors\":[{\"name\":\"Christoph Wiechert\",\"username\":\"\",\"email\":\"wio@psitrax.de\",\"commits\":1},{\"name\":\"Koen Kanters\",\"username\":\"\",\"email\":\"koenkanters94@gmail.com\",\"commits\":10},{\"name\":\"github-actions[bot]\",\"username\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/github-actions[bot]\"},{\"name\":\"Robin Kolk\",\"username\":\"\",\"email\":\"robinkolk@msn.com\",\"commits\":1},{\"name\":\"Burkhard Kneiseler\",\"username\":\"\",\"email\":\"burkhard@kneiseler.de\",\"commits\":1},{\"name\":\"Aleks\",\"username\":\"Aleks\",\"email\":\"nitro88@yandex.ru\",\"commits\":1,\"url\":\"https://github.com/Aleks\"},{\"name\":\"danieledwardgeorgehitchcock\",\"username\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\",\"commits\":1,\"url\":\"https://github.com/danieledwardgeorgehitchcock\"},{\"name\":\"Dirk van Donkelaar\",\"username\":\"\",\"email\":\"dirk@vdde.nl\",\"commits\":1},{\"name\":\"rodriguezst\",\"username\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/rodriguezst\"},{\"name\":\"Carsten Mogge\",\"username\":\"\",\"email\":\"carsten.mogge@gmail.com\",\"commits\":1},{\"name\":\"Major Péter\",\"username\":\"\",\"email\":\"majorpeter29@gmail.com\",\"commits\":1},{\"name\":\"Nerivec\",\"username\":\"Nerivec\",\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"commits\":3,\"url\":\"https://github.com/Nerivec\"},{\"name\":\"Jose Luis Pedrosa\",\"username\":\"\",\"email\":\"jlpedrosa@gmail.com\",\"commits\":1},{\"name\":\"jose\",\"username\":\"jose\",\"email\":\"jose.pedrosa@reddit.com\",\"commits\":1,\"url\":\"https://github.com/jose\"},{\"name\":\"Ricc68\",\"username\":\"Ricc68\",\"email\":\"ricc68@local\",\"commits\":4,\"url\":\"https://github.com/Ricc68\"},{\"name\":\"anonymousaga\",\"username\":\"anonymousaga\",\"email\":\"68388009+anonymousaga@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/anonymousaga\"},{\"name\":\"cdalexndr\",\"username\":\"cdalexndr\",\"email\":\"cdalxndr@yahoo.com\",\"commits\":1,\"url\":\"https://github.com/cdalexndr\"},{\"name\":\"Dan Danache\",\"username\":\"\",\"email\":\"dan-danache@users.noreply.github.com\",\"commits\":1},{\"name\":\"jmincier\",\"username\":\"jmincier\",\"email\":\"jonathanmincier2@hotmail.com\",\"commits\":1,\"url\":\"https://github.com/jmincier\"},{\"name\":\"dosdroid\",\"username\":\"dosdroid\",\"email\":\"96997348+dosdroid@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/dosdroid\"},{\"name\":\"smartboxchannel\",\"username\":\"smartboxchannel\",\"email\":\"31867646+smartboxchannel@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/smartboxchannel\"},{\"name\":\"guslma\",\"username\":\"guslma\",\"email\":\"141639311+guslma@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/guslma\"},{\"name\":\"aalijag97\",\"username\":\"aalijag97\",\"email\":\"armin.alijagic@softbytes.at\",\"commits\":1,\"url\":\"https://github.com/aalijag97\"},{\"name\":\"3reality-support\",\"username\":\"3reality-support\",\"email\":\"117250319+3reality-support@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/3reality-support\"},{\"name\":\"jintj\",\"username\":\"jintj\",\"email\":\"jintj@3reality.com\",\"commits\":1,\"url\":\"https://github.com/jintj\"},{\"name\":\"Ilya Kirov\",\"username\":\"\",\"email\":\"kirovilya@gmail.com\",\"commits\":1},{\"name\":\"shsurury\",\"username\":\"shsurury\",\"email\":\"sajid@surury.com.au\",\"commits\":1,\"url\":\"https://github.com/shsurury\"},{\"name\":\"Niracler Li\",\"username\":\"\",\"email\":\"i@niracler.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"aa4299706eb2a81313ccdf59057ab009d858dd7c\",\"time\":1779131202000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"feat: add redirect plugin (#5130)\"},{\"hash\":\"3081156342fcd5e984d7a3c07536fbaf6d660458\",\"time\":1742589060000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"Onboarding docs (#3603)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Abhijeet\",\"email\":\"68388009+anonymousaga@users.noreply.github.com\"},{\"name\":\"cdalexndr\",\"email\":\"cdalxndr@yahoo.com\"},{\"name\":\"Dan Danache\",\"email\":\"dan-danache@users.noreply.github.com\"},{\"name\":\"jmincier\",\"email\":\"jonathanmincier2@hotmail.com\"},{\"name\":\"dosdroid\",\"email\":\"96997348+dosdroid@users.noreply.github.com\"},{\"name\":\"Andrew Lamchenko\",\"email\":\"31867646+smartboxchannel@users.noreply.github.com\"},{\"name\":\"Gustavo Lima\",\"email\":\"141639311+guslma@users.noreply.github.com\"},{\"name\":\"aalijag97\",\"email\":\"armin.alijagic@softbytes.at\"},{\"name\":\"support\",\"email\":\"117250319+3reality-support@users.noreply.github.com\"},{\"name\":\"jintj\",\"email\":\"jintj@3reality.com\"},{\"name\":\"Ilya Kirov\",\"email\":\"kirovilya@gmail.com\"},{\"name\":\"shsurury\",\"email\":\"sajid@surury.com.au\"},{\"name\":\"Niracler Li\",\"email\":\"i@niracler.com\"}]},{\"hash\":\"3033f2b068c1f992d61a048eecdd3eced54e1f1d\",\"time\":1737406190000,\"email\":\"164665725+Ricc68@users.noreply.github.com\",\"author\":\"Ricc68\",\"message\":\"Added paragraph on network adapters to troubleshooting guide (#3439)\",\"coAuthors\":[{\"name\":\"Ricc68\",\"email\":\"ricc68@local\"}]},{\"hash\":\"6866702666760f9a86b0e7f6eb6e5b86a2a2a0f2\",\"time\":1735390882000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Revert \\\"Revert \\\"Updated troubleshooting page (#3353)\\\"\\\"\"},{\"hash\":\"b1a76815a5e1291513de629f5072561598fdf301\",\"time\":1735390758000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Revert \\\"Updated troubleshooting page (#3353)\\\"\"},{\"hash\":\"fe9e5114068adc66a355d994f4656416d6523b82\",\"time\":1735130729000,\"email\":\"164665725+Ricc68@users.noreply.github.com\",\"author\":\"Ricc68\",\"message\":\"Updated troubleshooting page (#3353)\",\"coAuthors\":[{\"name\":\"Ricc68\",\"email\":\"ricc68@local\"}]},{\"hash\":\"37acb18eae4030f4170caaefb4bb600ea26c4d7b\",\"time\":1733602043000,\"email\":\"jlpedrosa@gmail.com\",\"author\":\"Jose Luis Pedrosa\",\"message\":\"Add documentation for kubernetes/helm (#2743)\",\"coAuthors\":[{\"name\":\"jose\",\"email\":\"jose.pedrosa@reddit.com\"}]},{\"hash\":\"9206d99fdedbcad4f91c18b172ecee5ae69560b9\",\"time\":1733245245000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Lint\"},{\"hash\":\"f89e65dec7c1cbf82a5a0e1587e849cc98530e94\",\"time\":1722278811000,\"email\":\"koenkanters94@gmail.com\",\"author\":\"Koen Kanters\",\"message\":\"Implement prettier (automatic changes)\"},{\"hash\":\"72145365fe9a2f557aa0f3afe7ca95d966fd9d56\",\"time\":1718823033000,\"email\":\"62446222+Nerivec@users.noreply.github.com\",\"author\":\"Nerivec\",\"message\":\"Add watchdog page. (#2825)\"},{\"hash\":\"85d54a2d9afa92089f9f1f1686bb6b476e62b3d8\",\"time\":1655741119000,\"email\":\"majorpeter29@gmail.com\",\"author\":\"Major Péter\",\"message\":\"Added installation instructions for FreeBSD jail (TrueNAS plugin) (#1442)\"},{\"hash\":\"a4d20ffb72ebeed3b0bbe33418aec7d2e1ca7255\",\"time\":1650352422000,\"email\":\"carsten.mogge@gmail.com\",\"author\":\"Carsten Mogge\",\"message\":\"Support for Z2M-setup now integrated in openhabian (#1332)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"}]},{\"hash\":\"00c0af2cc2a86ed9d271dc530265e0e9d8dc327a\",\"time\":1635697046000,\"email\":\"wio@psitrax.de\",\"author\":\"Christoph Wiechert\",\"message\":\"Newww Docu 😉 (#967)\",\"coAuthors\":[{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"github-actions[bot]\",\"email\":\"41898282+github-actions[bot]@users.noreply.github.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koenkanters94@gmail.com\"},{\"name\":\"Robin Kolk\",\"email\":\"robinkolk@msn.com\"},{\"name\":\"Koen Kanters\",\"email\":\"koen.kanters@tno.nl\"},{\"name\":\"Burkhard Kneiseler\",\"email\":\"burkhard@kneiseler.de\"},{\"name\":\"Aleks\",\"email\":\"nitro88@yandex.ru\"},{\"name\":\"danieledwardgeorgehitchcock\",\"email\":\"daniel.edward.george.hitchcock@gmail.com\"},{\"name\":\"Dirk van Donkelaar\",\"email\":\"dirk@vdde.nl\"},{\"name\":\"rodriguezst\",\"email\":\"2828844+rodriguezst@users.noreply.github.com\"}]}]},\"filePathRelative\":\"guide/installation/README.md\"}");
var _sfc_main = { name: "README.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouteLink = resolveComponent("RouteLink");
	return openBlock(), createElementBlock("div", null, [
		_cache[9] || (_cache[9] = createBaseVNode("h1", {
			id: "installation",
			tabindex: "-1"
		}, [createBaseVNode("a", {
			class: "header-anchor",
			href: "#installation"
		}, [createBaseVNode("span", null, "Installation")])], -1)),
		_cache[10] || (_cache[10] = createBaseVNode("p", null, "Zigbee2MQTT was written in Node.js and runs almost on every platform with affordable memory footprint.", -1)),
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
		_cache[11] || (_cache[11] = createBaseVNode("h2", {
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
		_cache[12] || (_cache[12] = createBaseVNode("h2", {
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
//#endregion
export { _pageData, README_default as default };
