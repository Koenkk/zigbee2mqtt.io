import { F as openBlock, G as watch, J as withDirectives, c as createBaseVNode, d as createElementBlock, g as createTextVNode, h as createStaticVNode, rt as ref, y as defineComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
import { c as vModelText, o as vModelCheckbox, s as vModelSelect, t as _plugin_vue_export_helper_default } from "./app-6lrgQ-1_.js";
//#region docs/.vuepress/components/Configurator.vue?vue&type=script&lang.ts
/**
* Very basic algorithm to get farthest away from the WiFi channel while remaining on "preferred" Zigbee channels (11, 15, 20, 25)
*/
function bestZigbeeChannel(wifiChannel) {
	if (wifiChannel >= 11) return 15;
	else if (wifiChannel >= 6) return 11;
	else return 25;
}
var Configurator_vue_vue_type_script_lang_default = defineComponent({
	name: "Configurator",
	setup(props, ctx) {
		const defaultMQTTServer = ctx.attrs.mqtt ? ctx.attrs.mqtt : "mqtt://<IP_ADDRESS>:<PORT>";
		const defaultSerialPath = ctx.attrs.serial ? ctx.attrs.serial : "/dev/serial/by-id/<SERIAL_ID>";
		ctx.attrs.portType;
		const defaultTCPPath = ctx.attrs.tcp ? ctx.attrs.tcp : "tcp://<IP_ADDRESS>:<PORT>";
		const defaultAdapter = ctx.attrs.adapter ? ctx.attrs.adapter : "zstack";
		const mqttServerKey = ref("");
		const adapterPathTypeKey = ref("");
		const adapterPathKey = ref("");
		const adapterTypeKey = ref("");
		const wifiChannelKey = ref("");
		const frontendKey = ref("");
		const homeAssistantKey = ref("");
		const configurationKey = ref("");
		watch(adapterPathTypeKey, (adapterPathType) => {
			if (!adapterPathType || adapterPathType === "Serial") {
				adapterPathTypeKey.value = "Serial";
				adapterPathKey.value = defaultSerialPath;
			} else {
				adapterPathTypeKey.value = "TCP";
				adapterPathKey.value = defaultTCPPath;
			}
		}, { immediate: true });
		watch([
			mqttServerKey,
			adapterPathKey,
			adapterTypeKey,
			wifiChannelKey,
			frontendKey,
			homeAssistantKey
		], ([mqttServer, adapterPath, adapterType, wifiChannel, frontend, homeAssistant]) => {
			if (!mqttServer) {
				mqttServer = defaultMQTTServer;
				mqttServerKey.value = defaultMQTTServer;
			}
			if (!adapterPath) if (adapterPathType === "TCP") {
				adapterPath = defaultTCPPath;
				adapterPathKey.value = defaultTCPPath;
			} else {
				adapterPath = defaultSerialPath;
				adapterPathKey.value = defaultSerialPath;
			}
			if (!adapterType) {
				adapterType = defaultAdapter;
				adapterTypeKey.value = defaultAdapter;
			}
			if (!wifiChannel) {
				wifiChannel = 6;
				wifiChannelKey.value = 6;
			}
			if (typeof frontendKey.value !== "boolean") {
				frontend = true;
				frontendKey.value = true;
			}
			if (typeof homeAssistantKey.value !== "boolean") {
				homeAssistant = false;
				homeAssistantKey.value = false;
			}
			configurationKey.value = `
version: 5
mqtt:
    base_topic: zigbee2mqtt
    server: ${mqttServer}
serial:
    port: ${adapterPath}
    adapter: ${adapterType}
advanced:
    channel: ${bestZigbeeChannel(wifiChannel)}
    network_key: GENERATE
    pan_id: GENERATE
    ext_pan_id: GENERATE
frontend:
    enabled: ${frontend}
homeassistant:
    enabled: ${homeAssistant}
`.trim();
		}, { immediate: true });
		return {
			mqttServerKey,
			adapterPathTypeKey,
			adapterPathKey,
			adapterTypeKey,
			wifiChannelKey,
			frontendKey,
			homeAssistantKey,
			configurationKey
		};
	}
});
//#endregion
//#region docs/.vuepress/components/Configurator.vue?vue&type=template&lang.js
var _hoisted_1 = { class: "configurator" };
var _hoisted_2 = {
	class: "checkbox",
	for: "frontend"
};
var _hoisted_3 = {
	class: "checkbox",
	for: "homeAssistant"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [
		_cache[12] || (_cache[12] = createBaseVNode("label", { for: "mqttServer" }, "Address of your MQTT server", -1)),
		withDirectives(createBaseVNode("input", {
			"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.mqttServerKey = $event),
			id: "mqttServer",
			type: "text"
		}, null, 512), [[vModelText, _ctx.mqttServerKey]]),
		_cache[13] || (_cache[13] = createBaseVNode("label", { for: "adapterPathType" }, "Connectivity of your adapter", -1)),
		withDirectives(createBaseVNode("select", {
			"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.adapterPathTypeKey = $event),
			id: "adapterPathType"
		}, [..._cache[8] || (_cache[8] = [createBaseVNode("option", {
			value: "Serial",
			selected: ""
		}, "Serial (USB)", -1), createBaseVNode("option", { value: "TCP" }, "TCP", -1)])], 512), [[vModelSelect, _ctx.adapterPathTypeKey]]),
		_cache[14] || (_cache[14] = createBaseVNode("label", { for: "adapterPath" }, "Path of your adapter", -1)),
		withDirectives(createBaseVNode("input", {
			"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.adapterPathKey = $event),
			id: "adapterPath",
			type: "text"
		}, null, 512), [[vModelText, _ctx.adapterPathKey]]),
		_cache[15] || (_cache[15] = createBaseVNode("label", { for: "adapterType" }, "Type of your adapter", -1)),
		withDirectives(createBaseVNode("select", {
			"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.adapterTypeKey = $event),
			id: "adapterType"
		}, [..._cache[9] || (_cache[9] = [createStaticVNode("<option value=\"zstack\" selected>zstack</option><option value=\"ember\">ember</option><option value=\"deconz\">deconz</option><option value=\"zigate\">zigate</option><option value=\"zboss\">zboss</option>", 5)])], 512), [[vModelSelect, _ctx.adapterTypeKey]]),
		_cache[16] || (_cache[16] = createBaseVNode("label", { for: "wifiChannel" }, "Channel of closest WiFi 2.4GHz network", -1)),
		withDirectives(createBaseVNode("input", {
			"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.wifiChannelKey = $event),
			id: "wifiChannel",
			type: "number",
			min: "1",
			max: "14",
			step: "1"
		}, null, 512), [[vModelText, _ctx.wifiChannelKey]]),
		createBaseVNode("label", _hoisted_2, [withDirectives(createBaseVNode("input", {
			"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.frontendKey = $event),
			id: "frontend",
			type: "checkbox",
			checked: ""
		}, null, 512), [[vModelCheckbox, _ctx.frontendKey]]), _cache[10] || (_cache[10] = createTextVNode("Enable frontend?", -1))]),
		createBaseVNode("label", _hoisted_3, [withDirectives(createBaseVNode("input", {
			"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.homeAssistantKey = $event),
			id: "homeAssistant",
			type: "checkbox"
		}, null, 512), [[vModelCheckbox, _ctx.homeAssistantKey]]), _cache[11] || (_cache[11] = createTextVNode("Enable Home Assistant integration?", -1))]),
		_cache[17] || (_cache[17] = createBaseVNode("p", null, "Configuration:", -1)),
		withDirectives(createBaseVNode("textarea", {
			"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.configurationKey = $event),
			rows: "16",
			disabled: ""
		}, null, 512), [[vModelText, _ctx.configurationKey]])
	]);
}
//#endregion
//#region docs/.vuepress/components/Configurator.vue
var Configurator_default = /*#__PURE__*/ _plugin_vue_export_helper_default(Configurator_vue_vue_type_script_lang_default, [["render", render]]);
//#endregion
export { Configurator_default as default };
