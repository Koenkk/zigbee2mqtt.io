import { F as openBlock, G as watch, J as withDirectives, c as createBaseVNode, d as createElementBlock, rt as ref, y as defineComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { c as vModelText, t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/.vuepress/components/NetworkKeyConverter.vue?vue&type=script&lang.ts
var NetworkKeyConverter_vue_vue_type_script_lang_default = defineComponent({
	name: "NetworkKeyConverter",
	setup(props, ctx) {
		const inputKey = ref("");
		const outputKey = ref("");
		watch(inputKey, (k) => {
			if (!k.trim().length) {
				outputKey.value = "";
				return;
			}
			let res = [];
			try {
				res = JSON.parse(k);
			} catch (e) {
				res = k.split(/\n\r?/).map((l) => {
					const m = l.match(/(\d)+/);
					return m && m[0] || 0;
				});
			}
			if (res.length != 16) outputKey.value = "Sorry, could not parse 16 bytes from you input";
			else outputKey.value = res.map((m) => ("0" + parseInt(m, 10).toString(16)).slice(-2).toUpperCase()).join(":");
		});
		return {
			inputKey,
			outputKey
		};
	}
});
//#endregion
//#region docs/.vuepress/components/NetworkKeyConverter.vue?vue&type=template&lang.js
var _hoisted_1 = { class: "network-key-converter" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [withDirectives(createBaseVNode("textarea", {
		"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.inputKey = $event),
		placeholder: "Paste your Network-Key in DEC here"
	}, null, 512), [[vModelText, _ctx.inputKey]]), withDirectives(createBaseVNode("textarea", {
		"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.outputKey = $event),
		placeholder: "Network-Key in HEX",
		disabled: ""
	}, null, 512), [[vModelText, _ctx.outputKey]])]);
}
//#endregion
//#region docs/.vuepress/components/NetworkKeyConverter.vue
var NetworkKeyConverter_default = /*#__PURE__*/ _plugin_vue_export_helper_default(NetworkKeyConverter_vue_vue_type_script_lang_default, [["render", render]]);
//#endregion
export { NetworkKeyConverter_default as default };
