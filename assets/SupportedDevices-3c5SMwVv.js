import { A as onDeactivated, D as onBeforeMount, E as onActivated, I as renderList, J as customRef, K as withCtx, M as onUnmounted, Mt as toDisplayString, N as onUpdated, O as onBeforeUnmount, P as openBlock, Q as isRef, R as resolveComponent, S as h, T as nextTick, W as watch, X as getCurrentScope, Y as effectScope, Z as isReactive, c as createBlock, et as onScopeDispose, g as createVNode, h as createTextVNode, i as Teleport, j as onMounted, jt as normalizeStyle, k as onBeforeUpdate, l as createCommentVNode, lt as toValue, o as computed, ot as shallowRef, q as withDirectives, r as Fragment, rt as ref, s as createBaseVNode, tt as reactive, u as createElementBlock, v as defineComponent, w as inject, y as getCurrentInstance } from "./runtime-core.esm-bundler-BzB4pT90.js";
import { i as TransitionGroup, n as f, r as Transition, t as _plugin_vue_export_helper_default } from "./app-DuBZtnjW.js";
import { A as injectProp, C as stopAndPrevent, D as Platform, O as client, S as stop, T as createDirective, _ as cleanEvt, a as isDeepEqual, b as position, c as formKey, d as isKeyCode, g as addEvt, h as debounce, i as isDate, k as isRuntimeSsrPreHydration, l as listKey, m as Plugin$1, n as globalConfig, o as isObject, p as shouldIgnoreKey, s as isRegexp, u as History_default, v as listenOpts, w as createComponent, x as prevent, y as noop } from "./instance-config-HIvenSN-.js";
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/plugins/storage/engine/web-storage.js
function encode(value) {
	if (isDate(value)) return "__q_date|" + value.getTime();
	if (isRegexp(value)) return "__q_expr|/" + value.source + "/" + value.flags;
	if (typeof value === "number") return "__q_numb|" + value;
	if (typeof value === "boolean") return "__q_bool|" + (value ? "1" : "0");
	if (typeof value === "string") return "__q_strn|" + value;
	if (typeof value === "function") return "__q_strn|" + value.toString();
	if (value === Object(value)) return "__q_objt|" + JSON.stringify(value);
	return value;
}
var numberRE = /^-?\d+$/;
function decode(value) {
	if (value.length < 9) return value;
	const type = value.slice(0, 8);
	const source = value.slice(9);
	switch (type) {
		case "__q_date": return new Date(numberRE.test(source) ? Number.parseInt(source, 10) : source);
		case "__q_expr":
			if (source.startsWith("/")) {
				const index = source.lastIndexOf("/");
				return new RegExp(source.slice(1, index), source.slice(index + 1));
			}
			return new RegExp(source);
		case "__q_numb": return Number(source);
		case "__q_bool": return Boolean(source === "1");
		case "__q_strn": return String(source);
		case "__q_objt": return JSON.parse(source);
		default: return value;
	}
}
function noDefault() {
	return null;
}
function getStorageRefOptions(options) {
	return {
		getDefault: options?.default ?? noDefault,
		deep: options?.deep !== false,
		disabled: options?.disabled,
		onError: options?.onError
	};
}
function isDeepValue(value) {
	return isObject(value) || Array.isArray(value);
}
function getEmptyStorageRef(key, options) {
	const { getDefault, deep } = getStorageRefOptions(options);
	let value = getDefault();
	const storageRef = customRef((track, trigger) => ({
		get() {
			track();
			return deep && isDeepValue(value) ? reactive(value) : value;
		},
		set(newValue) {
			value = newValue === null || newValue === void 0 ? getDefault() : newValue;
			trigger();
		}
	}));
	storageRef.stop = noop;
	return storageRef;
}
function getEmptyStorage() {
	return {
		has: () => false,
		hasItem: () => false,
		getLength: () => 0,
		getItem: () => null,
		getIndex: () => null,
		getKey: () => null,
		getAll: () => ({}),
		getAllKeys: () => [],
		set: noop,
		setItem: noop,
		remove: noop,
		removeItem: noop,
		clear: noop,
		isEmpty: () => true,
		useStorage: getEmptyStorageRef
	};
}
function getStorage(type) {
	const webStorage = window[type + "Storage"], get = (key) => {
		const item = webStorage.getItem(key);
		return item === null ? null : decode(item);
	};
	const attached = /* @__PURE__ */ new Map();
	function notify(key, value, encoded, except, error) {
		attached.get(key)?.forEach((receive) => {
			if (receive !== except) receive(value, encoded, error);
		});
	}
	function notifyAll() {
		attached.forEach((receivers) => {
			receivers.forEach((receive) => {
				receive(null, null);
			});
		});
	}
	function onStorage(evt) {
		if (evt.storageArea !== webStorage) return;
		if (evt.key === null) notifyAll();
		else if (attached.has(evt.key)) {
			const raw = evt.newValue;
			let value = null;
			try {
				if (raw !== null) value = decode(raw);
			} catch (err) {
				notify(evt.key, null, raw, void 0, err);
				return;
			}
			notify(evt.key, value, raw);
		}
	}
	function attach(key, receive) {
		let receivers = attached.get(key);
		if (receivers === void 0) {
			if (attached.size === 0) window.addEventListener("storage", onStorage);
			receivers = /* @__PURE__ */ new Set();
			attached.set(key, receivers);
		}
		receivers.add(receive);
	}
	function detach(key, receive) {
		const receivers = attached.get(key);
		if (receivers?.delete(receive) && receivers.size === 0) {
			attached.delete(key);
			if (attached.size === 0) window.removeEventListener("storage", onStorage);
		}
	}
	const hasItem = (key) => webStorage.getItem(key) !== null;
	const removeItem = (key) => {
		webStorage.removeItem(key);
		notify(key, null, null);
	};
	const setItem = (key, value) => {
		if (value === null || value === void 0) {
			removeItem(key);
			return;
		}
		webStorage.setItem(key, encode(value));
		if (attached.has(key)) {
			const stored = get(key);
			notify(key, stored, encode(stored));
		}
	};
	function useStorage(key, options) {
		const { getDefault, deep, disabled, onError } = getStorageRefOptions(options);
		let value = getDefault(), synced = null, isAttached = false, trigger;
		const fail = (err) => {
			if (onError !== void 0) onError(err);
			else throw err;
		};
		const storageRef = customRef((track, triggerRef) => {
			trigger = triggerRef;
			return {
				get() {
					track();
					return deep && isDeepValue(value) ? reactive(value) : value;
				},
				set(newValue) {
					assign(newValue === null || newValue === void 0 ? getDefault() : newValue);
					persist();
				}
			};
		});
		function assign(newValue) {
			value = newValue;
			trigger();
		}
		function persist() {
			if (!isAttached) return;
			let encoded = value === null ? null : encode(value);
			if (encoded === synced) return;
			try {
				if (encoded === null) webStorage.removeItem(key);
				else {
					webStorage.setItem(key, encoded);
					if (typeof encoded !== "string" || typeof value === "function") {
						assign(get(key));
						encoded = encode(value);
					}
				}
			} catch (err) {
				fail(err);
				return;
			}
			synced = encoded;
			notify(key, value, encoded, receive);
		}
		function receive(newValue, encoded, error) {
			if (error !== void 0) {
				fail(error);
				return;
			}
			if (newValue === null) {
				const raw = webStorage.getItem(key);
				if (raw !== null) {
					newValue = decode(raw);
					encoded = encode(newValue);
				}
			}
			if (newValue === null) {
				synced = null;
				assign(getDefault());
			} else {
				synced = encoded;
				assign(newValue);
			}
			persist();
		}
		function seed() {
			try {
				const raw = webStorage.getItem(key);
				if (raw === null) synced = null;
				else {
					const stored = decode(raw);
					synced = encode(stored);
					assign(stored);
				}
			} catch (err) {
				fail(err);
				return;
			}
			persist();
		}
		const scope = effectScope(true);
		scope.run(() => {
			watch(() => !isRuntimeSsrPreHydration.value && toValue(disabled) !== true, (on) => {
				if (on) {
					isAttached = true;
					attach(key, receive);
					seed();
				} else if (isAttached) {
					isAttached = false;
					detach(key, receive);
				}
			}, { immediate: true });
			if (deep) watch(storageRef, persist, { deep: true });
		});
		storageRef.stop = () => {
			scope.stop();
			if (isAttached) {
				isAttached = false;
				detach(key, receive);
			}
		};
		if (getCurrentScope() !== void 0) onScopeDispose(storageRef.stop);
		return storageRef;
	}
	return {
		has: hasItem,
		hasItem,
		getLength: () => webStorage.length,
		getItem: get,
		getIndex: (index) => index < webStorage.length ? get(webStorage.key(index)) : null,
		getKey: (index) => index < webStorage.length ? webStorage.key(index) : null,
		getAll: () => {
			let key;
			const result = {}, len = webStorage.length;
			for (let i = 0; i < len; i++) {
				key = webStorage.key(i);
				result[key] = get(key);
			}
			return result;
		},
		getAllKeys: () => {
			const result = [], len = webStorage.length;
			for (let i = 0; i < len; i++) result.push(webStorage.key(i));
			return result;
		},
		set: setItem,
		setItem,
		remove: removeItem,
		removeItem,
		clear: () => {
			webStorage.clear();
			notifyAll();
		},
		isEmpty: () => webStorage.length === 0,
		useStorage
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/plugins/storage/SessionStorage.js
var storage = !client.has.webStorage ? getEmptyStorage() : getStorage("session");
var Plugin = {
	install({ $q }) {
		$q.sessionStorage = storage;
	},
	...storage
};
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/use-quasar/use-quasar.js
/**
* Returns the $q instance.
* Equivalent to `this.$q` inside templates.
*/
function useQuasar() {
	return getCurrentInstance()?.appContext.config.globalProperties.$q ?? inject("_q_");
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.selection/selection.js
function clearSelection() {
	if (window.getSelection !== void 0) {
		const selection = window.getSelection();
		if (selection.empty !== void 0) selection.empty();
		else if (selection.removeAllRanges !== void 0) {
			selection.removeAllRanges();
			if (!Platform.is.mobile) selection.addRange(document.createRange());
		}
	} else if (document.selection !== void 0) document.selection.empty();
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-anchor/use-anchor.js
var useAnchorStaticProps = {
	target: {
		type: [
			Boolean,
			String,
			Element
		],
		default: true
	},
	noParentEvent: Boolean
};
var useAnchorProps = {
	...useAnchorStaticProps,
	contextMenu: Boolean
};
var expandableRoles = {
	application: true,
	button: true,
	checkbox: true,
	columnheader: true,
	combobox: true,
	gridcell: true,
	link: true,
	listbox: true,
	menuitem: true,
	menuitemcheckbox: true,
	menuitemradio: true,
	row: true,
	rowheader: true,
	switch: true,
	tab: true,
	treeitem: true
};
var expandableInputTypes = {
	button: true,
	image: true,
	reset: true,
	submit: true
};
var popupRoles = {
	dialog: true,
	grid: true,
	listbox: true,
	menu: true,
	tree: true
};
function isExpandableControl(el) {
	const role = el.getAttribute("role")?.trim();
	if (role) return Object.hasOwn(expandableRoles, role.split(/\s+/)[0]);
	const tag = el.tagName;
	return tag === "BUTTON" || tag === "A" && el.hasAttribute("href") || tag === "INPUT" && Object.hasOwn(expandableInputTypes, el.type);
}
function useAnchor({ showing, avoidEmit, configureAnchorEl, getPopupRole }) {
	const { props, proxy, emit } = getCurrentInstance();
	const anchorEl = shallowRef(null);
	let ariaEl = null, ownsExpanded = false, ownsHaspopup = false;
	let touchTimer = null;
	let touchHoldOwned = false;
	function canShow(evt) {
		return anchorEl.value === null ? false : evt === void 0 || evt.touches === void 0 || evt.touches.length <= 1;
	}
	const anchorEvents = {};
	if (configureAnchorEl === void 0) {
		Object.assign(anchorEvents, {
			hide(evt) {
				if (evt?.pointerType === "touch") return;
				touchHoldOwned = false;
				proxy.hide(evt);
			},
			toggle(evt) {
				proxy.toggle(evt);
				evt.qAnchorHandled = true;
			},
			toggleKey(evt) {
				if (isKeyCode(evt, 13)) anchorEvents.toggle(evt);
			},
			contextClick(evt) {
				if (touchHoldOwned) {
					touchHoldOwned = false;
					prevent(evt);
					return;
				}
				proxy.hide(evt);
				prevent(evt);
				nextTick(() => {
					proxy.show(evt);
					evt.qAnchorHandled = true;
				});
			},
			touchHold(evt) {
				anchorEvents.touchHoldCleanup(evt);
				if (!canShow(evt)) return;
				touchHoldOwned = true;
				proxy.hide(evt);
				anchorEl.value.classList.add("non-selectable");
				const target = evt.target;
				addEvt(anchorEvents, "anchor", [
					[
						target,
						"touchmove",
						"touchHoldCleanup",
						"passive"
					],
					[
						target,
						"touchend",
						"touchHoldCleanup",
						"passive"
					],
					[
						target,
						"touchcancel",
						"touchHoldCleanup",
						"passive"
					]
				]);
				touchTimer = setTimeout(() => {
					touchTimer = null;
					proxy.show(evt);
					evt.qAnchorHandled = true;
				}, 300);
			},
			touchHoldCleanup(evt) {
				anchorEl.value.classList.remove("non-selectable");
				if (touchTimer !== null) {
					clearTimeout(touchTimer);
					touchTimer = null;
					touchHoldOwned = false;
				}
				if (showing.value && evt !== void 0) clearSelection();
			}
		});
		watch(showing, (val) => {
			if (!val) touchHoldOwned = false;
		});
		configureAnchorEl = function configureAnchorElFn(context = props.contextMenu) {
			if (props.noParentEvent || anchorEl.value === null) return;
			const evts = context ? [
				[
					anchorEl.value,
					"touchstart",
					"touchHold",
					"passive"
				],
				[
					anchorEl.value,
					"pointerdown",
					"hide",
					"passive"
				],
				[
					anchorEl.value,
					"contextmenu",
					"contextClick",
					"notPassive"
				]
			] : [[
				anchorEl.value,
				"click",
				"toggle",
				"passive"
			], [
				anchorEl.value,
				"keyup",
				"toggleKey",
				"passive"
			]];
			if (!context && props.hover === true) evts.push([
				anchorEl.value,
				"pointerenter",
				"hoverShow",
				"passive"
			], [
				anchorEl.value,
				"pointerleave",
				"hoverHide",
				"passive"
			]);
			addEvt(anchorEvents, "anchor", evts);
		};
	}
	function unconfigureAnchorEl() {
		cleanEvt(anchorEvents, "anchor");
	}
	function configureAnchorAria() {
		if (getPopupRole === void 0 || anchorEl.value === null || props.contextMenu) return;
		const el = anchorEl.value;
		if (!isExpandableControl(el)) return;
		ownsExpanded = !el.hasAttribute("aria-expanded");
		ownsHaspopup = !el.hasAttribute("aria-haspopup");
		if (ownsExpanded || ownsHaspopup) {
			ariaEl = el;
			updateAnchorAria();
		}
	}
	function updateAnchorAria() {
		if (ariaEl === null) return;
		if (ownsExpanded) ariaEl.setAttribute("aria-expanded", showing.value ? "true" : "false");
		if (ownsHaspopup) {
			const role = getPopupRole();
			if (Object.hasOwn(popupRoles, role)) ariaEl.setAttribute("aria-haspopup", role);
			else ariaEl.removeAttribute("aria-haspopup");
		}
	}
	function unconfigureAnchorAria() {
		if (ariaEl === null) return;
		if (ownsExpanded) ariaEl.removeAttribute("aria-expanded");
		if (ownsHaspopup) ariaEl.removeAttribute("aria-haspopup");
		ariaEl = null;
		ownsExpanded = false;
		ownsHaspopup = false;
	}
	function setAnchorEl(el) {
		anchorEl.value = el;
		while (anchorEl.value.classList.contains("q-anchor--skip")) anchorEl.value = anchorEl.value.parentNode;
		configureAnchorEl();
	}
	function pickAnchorEl() {
		if (props.target === false || props.target === "" || proxy.$el.parentNode === null) anchorEl.value = null;
		else if (props.target === true) setAnchorEl(proxy.$el.parentNode);
		else {
			let el = props.target;
			if (typeof props.target === "string") try {
				el = document.querySelector(props.target);
			} catch {
				el = void 0;
			}
			if (el !== void 0 && el !== null) {
				anchorEl.value = el.$el || el;
				configureAnchorEl();
			} else {
				anchorEl.value = null;
				console.error(`Anchor: target "${props.target}" not found`);
			}
		}
		configureAnchorAria();
	}
	watch(() => props.contextMenu, (val) => {
		if (anchorEl.value !== null) {
			unconfigureAnchorEl();
			configureAnchorEl(val);
			unconfigureAnchorAria();
			configureAnchorAria();
		}
	});
	watch(() => props.hover, () => {
		if (anchorEl.value !== null) {
			unconfigureAnchorEl();
			configureAnchorEl();
		}
	});
	watch(() => props.target, () => {
		if (anchorEl.value !== null) {
			unconfigureAnchorEl();
			unconfigureAnchorAria();
		}
		pickAnchorEl();
	});
	watch(() => props.noParentEvent, (val) => {
		if (anchorEl.value !== null) {
			if (val) unconfigureAnchorEl();
			else configureAnchorEl();
		}
	});
	if (getPopupRole !== void 0) watch(showing, updateAnchorAria);
	onMounted(() => {
		pickAnchorEl();
		if (!avoidEmit && props.modelValue && anchorEl.value === null) emit("update:modelValue", false);
	});
	onBeforeUnmount(() => {
		if (touchTimer !== null) clearTimeout(touchTimer);
		unconfigureAnchorEl();
		unconfigureAnchorAria();
	});
	return {
		anchorEl,
		canShow,
		anchorEvents
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.vm/vm.js
function getParentProxy(proxy) {
	if (Object(proxy.$parent) === proxy.$parent) return proxy.$parent;
	let { parent } = proxy.$;
	while (Object(parent) === parent) {
		if (Object(parent.proxy) === parent.proxy) return parent.proxy;
		parent = parent.parent;
	}
}
function vmHasRouter(vm) {
	return vm.appContext.config.globalProperties.$router !== void 0;
}
function vmIsDestroyed(vm) {
	return vm.isUnmounted === true || vm.isDeactivated === true;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-model-toggle/use-model-toggle.js
var useModelToggleProps = {
	modelValue: {
		type: Boolean,
		default: null
	},
	"onUpdate:modelValue": [Function, Array]
};
var useModelToggleEmits = [
	"beforeShow",
	"show",
	"beforeHide",
	"hide"
];
function useModelToggle({ showing, canShow, canHide, hideOnRouteChange, handleShow, handleHide, handleRouteChange, processOnMount }) {
	const vm = getCurrentInstance();
	const { props, emit, proxy } = vm;
	let payload;
	function toggle(evt) {
		if (showing.value) hide(evt);
		else show(evt);
	}
	function show(evt) {
		if (props.disable || evt?.qAnchorHandled === true || canShow !== void 0 && !canShow(evt)) return;
		const listener = props["onUpdate:modelValue"] !== void 0;
		if (listener && true) {
			emit("update:modelValue", true);
			payload = evt;
			nextTick(() => {
				if (payload === evt) payload = void 0;
			});
		}
		if (props.modelValue === null || !listener) processShow(evt);
	}
	function processShow(evt) {
		if (showing.value) return;
		showing.value = true;
		emit("beforeShow", evt);
		if (handleShow !== void 0) handleShow(evt);
		else emit("show", evt);
	}
	function hide(evt) {
		if (props.disable || canHide !== void 0 && !canHide(evt)) return;
		const listener = props["onUpdate:modelValue"] !== void 0;
		if (listener && true) {
			emit("update:modelValue", false);
			payload = evt;
			nextTick(() => {
				if (payload === evt) payload = void 0;
			});
		}
		if (props.modelValue === null || !listener) processHide(evt);
	}
	function processHide(evt) {
		if (!showing.value) return;
		showing.value = false;
		emit("beforeHide", evt);
		if (handleHide !== void 0) handleHide(evt);
		else emit("hide", evt);
	}
	function processModelChange(val) {
		if (props.disable && val) {
			if (props["onUpdate:modelValue"] !== void 0) emit("update:modelValue", false);
		} else if (val === true !== showing.value) (val ? processShow : processHide)(payload);
	}
	watch(() => props.modelValue, processModelChange);
	if (hideOnRouteChange !== void 0 && vmHasRouter(vm)) watch(() => proxy.$route.fullPath, () => {
		if (hideOnRouteChange.value && showing.value) {
			handleRouteChange?.();
			hide();
		}
	});
	if (processOnMount) onMounted(() => {
		processModelChange(props.modelValue);
	});
	const publicMethods = {
		show,
		hide,
		toggle
	};
	Object.assign(proxy, publicMethods);
	return publicMethods;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.portal/portal.js
var portalProxyList = [];
function getPortalProxy(el) {
	return portalProxyList.find((proxy) => proxy.contentEl !== null && proxy.contentEl.contains(el));
}
function closePortalMenus(proxy, evt) {
	do {
		if (proxy.$options.name === "QMenu") {
			proxy.hide(evt);
			if (proxy.$props.separateClosePopup) return getParentProxy(proxy);
		} else if (proxy.__qPortal) {
			const parent = getParentProxy(proxy);
			if (parent?.$options.name === "QPopupProxy") {
				proxy.hide(evt);
				return parent;
			}
			return proxy;
		}
		proxy = getParentProxy(proxy);
	} while (proxy !== void 0 && proxy !== null);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.focus/focus-manager.js
var queue = [];
var waitFlags = [];
var refocusing = false;
function refocus(el) {
	refocusing = true;
	el.focus({ preventScroll: true });
	refocusing = false;
}
function isRefocusing() {
	return refocusing;
}
function clearFlag(flag) {
	waitFlags = waitFlags.filter((entry) => entry !== flag);
}
function addFocusWaitFlag(flag) {
	clearFlag(flag);
	waitFlags.push(flag);
}
function removeFocusWaitFlag(flag) {
	clearFlag(flag);
	if (waitFlags.length === 0 && queue.length !== 0) {
		queue.at(-1)();
		queue = [];
	}
}
function addFocusFn(fn) {
	if (waitFlags.length === 0) fn();
	else queue.push(fn);
}
function removeFocusFn(fn) {
	queue = queue.filter((entry) => entry !== fn);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.config/nodes.js
var nodesList = [];
var portalTypeList = [];
var portalIndex = 1;
var target = document.body;
function createGlobalNode(id, portalType, parentEl) {
	const el = document.createElement("div");
	el.id = portalType !== void 0 ? `q-portal--${portalType}--${portalIndex++}` : id;
	if (globalConfig.globalNodes !== void 0) {
		const cls = globalConfig.globalNodes.class;
		if (cls !== void 0) el.className = cls;
	}
	(parentEl || target).append(el);
	nodesList.push(el);
	portalTypeList.push(portalType);
	return el;
}
function removeGlobalNode(el) {
	const nodeIndex = nodesList.indexOf(el);
	if (nodeIndex !== -1) {
		nodesList.splice(nodeIndex, 1);
		portalTypeList.splice(nodeIndex, 1);
	}
	el.remove();
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-portal/use-portal.js
/**
* Noop internal component to ease testing
* of the teleported content.
*
* const wrapper = mount(QDialog, { ... })
* const teleportedWrapper = wrapper.findComponent({ name: 'QPortal' })
*/
var QPortal = /*#__PURE__*/ createComponent({
	name: "QPortal",
	setup(_, { slots }) {
		return () => slots.default();
	}
});
function isOnGlobalDialog(vm) {
	vm = vm.parent;
	while (vm !== void 0 && vm !== null) {
		if (vm.type.name === "QGlobalDialog") return true;
		if (vm.type.name === "QDialog" || vm.type.name === "QMenu") return false;
		vm = vm.parent;
	}
	return false;
}
function getAriaModalEl(vm) {
	let node = vm.parent;
	while (node !== void 0 && node !== null) {
		if (node.type.name === "QDialog") {
			const el = node.proxy?.__getAriaModalEl?.();
			if (el !== null && el !== void 0) return el;
		}
		node = node.parent;
	}
	return null;
}
function usePortal(vm, innerRef, renderPortalContent, type) {
	const portalIsActive = ref(false);
	let portalIsOpening = false;
	let portalEl = null;
	const focusObj = {};
	const onGlobalDialog = type === "dialog" && isOnGlobalDialog(vm);
	const notifiesField = type !== "tooltip";
	let fieldNotified = false;
	function notifyField(name) {
		vm.vnode.el?.dispatchEvent(new CustomEvent(name, { bubbles: true }));
	}
	function notifyFieldHide() {
		if (fieldNotified) {
			fieldNotified = false;
			notifyField("popup-hide");
		}
	}
	function showPortal(isReady, silent) {
		if (isReady) {
			removeFocusWaitFlag(focusObj);
			portalIsOpening = false;
			return;
		}
		portalIsOpening = true;
		if (!portalIsActive.value) {
			if (!onGlobalDialog && portalEl === null) {
				const modalEl = type === "menu" ? getAriaModalEl(vm) : null;
				portalEl = createGlobalNode(false, type, modalEl);
				if (modalEl !== null) portalEl.classList.add("all-pointer-events");
			}
			portalIsActive.value = true;
			portalProxyList.push(vm.proxy);
			addFocusWaitFlag(focusObj);
			if (notifiesField && !silent) {
				fieldNotified = true;
				notifyField("popup-show");
			}
		}
	}
	function hidePortal(isReady) {
		portalIsOpening = false;
		notifyFieldHide();
		if (!isReady) return;
		removeFocusWaitFlag(focusObj);
		portalIsActive.value = false;
		const index = portalProxyList.indexOf(vm.proxy);
		if (index !== -1) portalProxyList.splice(index, 1);
		if (portalEl !== null) {
			removeGlobalNode(portalEl);
			portalEl = null;
		}
	}
	onBeforeUnmount(notifyFieldHide);
	onUnmounted(() => {
		hidePortal(true);
	});
	vm.proxy.__qPortal = true;
	injectProp(vm.proxy, "contentEl", () => innerRef.value);
	return {
		showPortal,
		hidePortal,
		portalIsActive,
		portalIsOpening: () => portalIsOpening,
		renderPortal: () => onGlobalDialog ? renderPortalContent() : portalIsActive.value ? [h(Teleport, { to: portalEl }, h(QPortal, renderPortalContent))] : void 0
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-transition/use-transition.js
var useTransitionProps = {
	transitionShow: {
		type: String,
		default: "fade"
	},
	transitionHide: {
		type: String,
		default: "fade"
	},
	transitionDuration: {
		type: [String, Number],
		default: 300
	}
};
var transitionPropsCache = /* @__PURE__ */ new Map();
function useTransition(props, defaultShowFn = () => {}, defaultHideFn = () => {}) {
	return {
		transitionProps: () => {
			const show = props.transitionShow || defaultShowFn();
			const hide = props.transitionHide || defaultHideFn();
			const key = `${show}|${hide}`;
			let target = transitionPropsCache.get(key);
			if (target === void 0) {
				if (transitionPropsCache.size > 200) transitionPropsCache.clear();
				const showCls = `q-transition--${show}`;
				const hideCls = `q-transition--${hide}`;
				target = {
					appear: true,
					enterFromClass: `${showCls}-enter-from`,
					enterActiveClass: `${showCls}-enter-active`,
					enterToClass: `${showCls}-enter-to`,
					leaveFromClass: `${hideCls}-leave-from`,
					leaveActiveClass: `${hideCls}-leave-active`,
					leaveToClass: `${hideCls}-leave-to`
				};
				transitionPropsCache.set(key, target);
			}
			return target;
		},
		transitionStyle: () => `--q-transition-duration: ${props.transitionDuration}ms`
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/use-tick/use-tick.js
function useTick() {
	let tickFn;
	const vm = getCurrentInstance();
	function removeTick() {
		tickFn = void 0;
	}
	if (vm !== null) {
		onDeactivated(removeTick);
		onBeforeUnmount(removeTick);
	}
	return {
		removeTick,
		registerTick(fn) {
			tickFn = fn;
			nextTick(() => {
				if (tickFn === fn) {
					if (vm === null || !vmIsDestroyed(vm)) tickFn();
					tickFn = void 0;
				}
			});
		}
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/use-timeout/use-timeout.js
function useTimeout() {
	const isTimeoutPending = ref(false);
	let timer = null;
	const vm = getCurrentInstance();
	function removeTimeout() {
		if (timer !== null) {
			clearTimeout(timer);
			timer = null;
			isTimeoutPending.value = false;
		}
	}
	if (vm !== null) {
		onDeactivated(removeTimeout);
		onBeforeUnmount(removeTimeout);
	}
	return {
		isTimeoutPending,
		removeTimeout,
		registerTimeout(fn, delay) {
			if (vm !== null && vmIsDestroyed(vm)) return;
			removeTimeout();
			isTimeoutPending.value = true;
			timer = setTimeout(() => {
				timer = null;
				isTimeoutPending.value = false;
				fn();
			}, delay);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-transition-end/use-transition-end.js
function useTransitionEnd(props) {
	const { registerTimeout, removeTimeout } = useTimeout();
	let finishTransition = null;
	onDeactivated(() => {
		finishTransition?.();
	});
	return {
		registerTimeout,
		removeTimeout,
		registerTransitionEnd(fn) {
			finishTransition = () => {
				finishTransition = null;
				fn();
			};
			registerTimeout(finishTransition, props.transitionDuration);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/uid/uid.js
function createUidFn() {
	if (typeof crypto === "undefined") return () => {
		throw new Error("[Quasar uid()] Secure RNG not available. Cannot generate collision-resistant UUID.");
	};
	if (crypto.randomUUID) return () => crypto.randomUUID();
	const hex = Array.from({ length: 256 }, (_, i) => (i + 256).toString(16).slice(1));
	let buf, bufIdx;
	return () => {
		if (buf === void 0 || bufIdx + 16 > 4096) {
			bufIdx = 0;
			buf = /* @__PURE__ */ new Uint8Array(4096);
			crypto.getRandomValues(buf);
		}
		const i = bufIdx;
		bufIdx += 16;
		buf[i + 6] = buf[i + 6] & 15 | 64;
		buf[i + 8] = buf[i + 8] & 63 | 128;
		return hex[buf[i]] + hex[buf[i + 1]] + hex[buf[i + 2]] + hex[buf[i + 3]] + "-" + hex[buf[i + 4]] + hex[buf[i + 5]] + "-" + hex[buf[i + 6]] + hex[buf[i + 7]] + "-" + hex[buf[i + 8]] + hex[buf[i + 9]] + "-" + hex[buf[i + 10]] + hex[buf[i + 11]] + hex[buf[i + 12]] + hex[buf[i + 13]] + hex[buf[i + 14]] + hex[buf[i + 15]];
	};
}
var uid_default = /*#__PURE__*/ createUidFn();
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/use-id/use-id.js
function parseValue(val) {
	return val === void 0 || val === null ? null : val;
}
function getId(val, required) {
	return val === void 0 || val === null ? required ? `f_${uid_default()}` : null : val;
}
/**
* Returns an "id" which is a ref() that can be used as
* a unique identifier to apply to a DOM node attribute.
*
* On SSR/SSG, it takes care of generating the id on the client side (only) to
* avoid hydration errors.
*/
function useId({ getValue, required = true } = {}) {
	if (isRuntimeSsrPreHydration.value) {
		const id = getValue !== void 0 ? ref(parseValue(getValue())) : ref(null);
		if (required && id.value === null) onMounted(() => {
			id.value = `f_${uid_default()}`;
		});
		if (getValue !== void 0) watch(getValue, (newId) => {
			id.value = getId(newId, required);
		});
		return id;
	}
	return getValue !== void 0 ? computed(() => getId(getValue(), required)) : ref(`f_${uid_default()}`);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-position-engine/engine/core.js
var partsFirst = [
	"top",
	"center",
	"bottom"
];
var partsSecond = [
	"left",
	"middle",
	"right",
	"start",
	"end"
];
/**
* Decides which of the two positioning engines drives a popup:
* anchor-engine.js (native CSS anchor positioning, zero
* listeners) where this is true, fallback-engine.js
* (measure + pixel insets, scroll listeners) everywhere else.
*
* The native path is deliberately gated to Chromium engines (identified
* through the Chromium-only userAgentData API): it is the only family
* where the anchor engine was validated, while the fresh Gecko/WebKit
* implementations (Baseline newly available 2026) stay on the battle
* tested JS engine, like every browser without the feature.
*
* Resolved once at import (the typeof guard covers DOM-less imports
* such as jsdom, which lands on the fallback engine); the component
* tests re-mock this module with a getter to force the fallback engine
* per test.
*/
var cssAnchorSupport = typeof CSS !== "undefined" && navigator.userAgentData?.brands?.some((entry) => entry.brand === "Chromium") === true && CSS.supports("position-anchor: --q") && CSS.supports("justify-self: anchor-center");
function validatePosition(pos) {
	const parts = pos.split(" ");
	if (parts.length !== 2) return false;
	if (!partsFirst.includes(parts[0])) {
		console.error("Anchor/Self position must start with one of top/center/bottom");
		return false;
	}
	if (!partsSecond.includes(parts[1])) {
		console.error("Anchor/Self position must end with one of left/middle/right/start/end");
		return false;
	}
	return true;
}
function validateOffset(val) {
	if (!val) return true;
	if (val.length !== 2) return false;
	if (typeof val[0] !== "number" || typeof val[1] !== "number") return false;
	return true;
}
var horizontalPos = {
	"start#ltr": "left",
	"start#rtl": "right",
	"end#ltr": "right",
	"end#rtl": "left"
};
[
	"left",
	"middle",
	"right"
].forEach((pos) => {
	horizontalPos[`${pos}#ltr`] = pos;
	horizontalPos[`${pos}#rtl`] = pos;
});
var positionCache = /* @__PURE__ */ new Map();
function parsePosition(pos, rtl) {
	const key = `${pos}#${rtl ? "rtl" : "ltr"}`;
	let res = positionCache.get(key);
	if (res === void 0) {
		const parts = pos.split(" ");
		res = {
			vertical: parts[0],
			horizontal: horizontalPos[`${parts[1]}#${rtl ? "rtl" : "ltr"}`]
		};
		positionCache.set(key, res);
	}
	return res;
}
/**
* The placement decision both engines share: whether the intended
* placement fits the viewport, measured once per show (and on demand
* through updatePosition()). A placement that overflows gets its
* origins mirrored towards the roomier side — the anchor's expanded box
* edges swap sides — unless the intended side has at least as much room
* (the room is measured from the anchor line each placement would use,
* not from the anchor's edge against the viewport middle, which used
* to flip an anchor straddling the middle towards the SMALLER side,
* #16443) and a max size capped to that space, whether or not its
* natural size already fit there: content can grow after this pass,
* and the flipped side has already anchored the popup's far edge, so a
* popup left uncapped there would grow past the opposite viewport edge
* with no scroll position able to reveal the overflow (#18536). The cap
* is the fractional space itself (getBoundingClientRect), never the
* popup's own measured size, so it never rounds a fractional natural
* size down (offsetWidth/offsetHeight are integers) and wraps or
* scrolls content that fit before the flip; and it is combined (CSS
* min()) with the bound the popup already has, read as the computed
* max size once the previous caps are lifted: a max-height/max-width
* prop, the popups' own stylesheet ceilings or the app's CSS. An inline
* cap replaces them all, so a flip towards a side roomier than that
* bound would otherwise widen the popup past it. How the returned
* origins/caps are then EXPRESSED is the engines'
* business: anchor() insets on the native engine, pixel insets on the
* fallback; either way the popup keeps tracking its anchor and only the
* flip/cap decision itself is frozen at measure time. The element does
* leave the pass already at the decided caps though: measuring lifts
* them, content that then fits has its scroll offset clamped to 0 by
* layout, and the engines restore the offset right after the pass
* (#18534), which needs the popup scrollable again by then (the native
* engine's own expression of the caps only lands on the next render).
*
* A "center"/"middle" self origin axis is skipped: when its anchor line
* is centered too it clamps at the viewport edges instead (natively via
* anchor-center, mirrored by the fallback engine), otherwise it is a
* niche combination not worth the handling.
*/
function applyBoundary({ el, anchorEl, anchorOrigin, selfOrigin, offset, cover, maxHeight, maxWidth }) {
	el.style.maxHeight = maxHeight || "";
	el.style.maxWidth = maxWidth || "";
	el.style.visibility = "";
	const { offsetWidth: width, offsetHeight: height } = el;
	const bound = getComputedStyle(el);
	const rect = anchorEl.getBoundingClientRect();
	const [ox, oy] = offset !== void 0 && cover !== true ? offset : [0, 0];
	const A = {
		top: rect.top - oy,
		bottom: rect.bottom + oy,
		center: rect.top + (rect.bottom - rect.top) / 2,
		left: rect.left - ox,
		right: rect.right + ox,
		middle: rect.left + (rect.right - rect.left) / 2
	};
	const { clientWidth: VW, clientHeight: VH } = document.documentElement;
	const res = {
		anchorOrigin,
		selfOrigin,
		maxHeight: null,
		maxWidth: null
	};
	let av = anchorOrigin.vertical, sv = selfOrigin.vertical, ah = anchorOrigin.horizontal, sh = selfOrigin.horizontal, changed = false;
	if (sv !== "center") {
		const top = A[av] - (sv === "bottom" ? height : 0);
		if (top < 0 || top + height > VH) {
			changed = true;
			const [avBelow, avAbove] = av === "center" ? ["center", "center"] : av === sv ? ["top", "bottom"] : ["bottom", "top"];
			const spaceBelow = VH - Math.max(0, A[avBelow]);
			const spaceAbove = Math.min(VH, A[avAbove]);
			let space;
			if (sv === "top" ? spaceBelow >= spaceAbove : spaceBelow > spaceAbove) {
				av = avBelow;
				sv = "top";
				space = spaceBelow;
			} else {
				av = avAbove;
				sv = "bottom";
				space = spaceAbove;
			}
			res.maxHeight = bound.maxHeight === "none" ? `${space}px` : `min(${space}px, ${bound.maxHeight})`;
		}
	}
	if (sh !== "middle") {
		const left = A[ah] - (sh === "right" ? width : 0);
		if (left < 0 || left + width > VW) {
			changed = true;
			const [ahRight, ahLeft] = ah === "middle" ? ["middle", "middle"] : ah === sh ? ["left", "right"] : ["right", "left"];
			const spaceRight = VW - Math.max(0, A[ahRight]);
			const spaceLeft = Math.min(VW, A[ahLeft]);
			let space;
			if (sh === "left" ? spaceRight >= spaceLeft : spaceRight > spaceLeft) {
				ah = ahRight;
				sh = "left";
				space = spaceRight;
			} else {
				ah = ahLeft;
				sh = "right";
				space = spaceLeft;
			}
			res.maxWidth = bound.maxWidth === "none" ? `${space}px` : `min(${space}px, ${bound.maxWidth})`;
		}
	}
	if (changed) {
		res.anchorOrigin = {
			vertical: av,
			horizontal: ah
		};
		res.selfOrigin = {
			vertical: sv,
			horizontal: sh
		};
	}
	if (res.maxHeight !== null) el.style.maxHeight = res.maxHeight;
	if (res.maxWidth !== null) el.style.maxWidth = res.maxWidth;
	return res;
}
/**
* The offset a point-mode axis applies: unlike box mode, where the
* offset expands the anchor's box, here it displaces the popup from the
* point in the direction the popup grows, so it clears the pointer on
* whichever side it opens. A centered axis straddles the point and has
* no growth direction, so it takes the positive one, where a cursor
* glyph's body sits relative to its hotspot.
*/
function pointOffset(self, offset) {
	return self === "bottom" || self === "right" ? -offset : offset;
}
/**
* Point-mode companion of applyBoundary, for a popup opening from a
* coordinate inside its anchor (touch position / cursor position /
* context menu): an overflowing side mirrors around the point, which
* stays put because the offset re-signs itself with the flipped origin.
* A center/middle self origin axis has no other side to mirror to and
* shifts to stay inside the viewport instead, mirroring what
* applyBoundary's centered axes get natively from anchor-center.
* Returns null while the placement needs no correction, otherwise the
* resolved selfOrigin plus the point (only a centered axis moves it).
*/
function applyPointBoundary({ el, anchorEl, point, selfOrigin, offset }) {
	const { offsetWidth: width, offsetHeight: height } = el;
	const rect = anchorEl.getBoundingClientRect();
	const { clientWidth: VW, clientHeight: VH } = document.documentElement;
	const [ox = 0, oy = 0] = offset ?? [];
	let { vertical, horizontal } = selfOrigin;
	const res = {
		top: point.top,
		left: point.left
	};
	let changed = false;
	const lineY = rect.top + point.top + pointOffset(vertical, oy);
	if (vertical === "center") {
		const top = lineY - height / 2;
		const shift = Math.max(0, Math.min(top, VH - height)) - top;
		if (shift !== 0) {
			res.top += shift;
			changed = true;
		}
	} else if (vertical === "top" && lineY + height > VH) {
		vertical = "bottom";
		changed = true;
	} else if (vertical === "bottom" && lineY - height < 0) {
		vertical = "top";
		changed = true;
	}
	const lineX = rect.left + point.left + pointOffset(horizontal, ox);
	if (horizontal === "middle") {
		const left = lineX - width / 2;
		const shift = Math.max(0, Math.min(left, VW - width)) - left;
		if (shift !== 0) {
			res.left += shift;
			changed = true;
		}
	} else if (horizontal === "left" && lineX + width > VW) {
		horizontal = "right";
		changed = true;
	} else if (horizontal === "right" && lineX - width < 0) {
		horizontal = "left";
		changed = true;
	}
	return changed ? {
		selfOrigin: {
			vertical,
			horizontal
		},
		point: res
	} : null;
}
/**
* Both engines' boundary pass measures with the size caps lifted, which
* clamps the scroll offset of content that fits meanwhile (#18534);
* they put it back right after.
*/
function restoreScroll(el, scrollTop, scrollLeft) {
	if (el.scrollTop !== scrollTop) el.scrollTop = scrollTop;
	if (el.scrollLeft !== scrollLeft) el.scrollLeft = scrollLeft;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-position-engine/engine/anchor-engine.js
/**
* The native positioning engine: expresses a popup's placement through
* CSS anchor positioning (position-anchor + anchor()/anchor-size()
* insets), so the browser keeps it glued to its anchor through any
* scroll, layout shift, resize or animation with zero listeners.
*
* Only used where core.js' cssAnchorSupport says so;
* every other browser runs fallback-engine.js instead.
*/
/**
* The browser tracks a CSS anchor for us, but `anchor-name` must live on
* the anchor element itself, which is app-owned DOM. Popups therefore
* borrow the element through this refcounted registry: the first popup
* on an element names it, later ones reuse the name, and the last one
* out restores whatever inline value the app had there.
*/
var anchorNames = /* @__PURE__ */ new Map();
var anchorUid = 0;
function setAnchorName(el) {
	let entry = anchorNames.get(el);
	if (entry === void 0) {
		entry = {
			name: `--q-pe-${++anchorUid}`,
			count: 0,
			prev: el.style.getPropertyValue("anchor-name")
		};
		anchorNames.set(el, entry);
		el.style.setProperty("anchor-name", entry.name);
	}
	entry.count++;
	return entry.name;
}
function removeAnchorName(el) {
	const entry = anchorNames.get(el);
	if (entry === void 0) return;
	entry.count--;
	if (entry.count === 0) {
		anchorNames.delete(el);
		if (entry.prev === "") el.style.removeProperty("anchor-name");
		else el.style.setProperty("anchor-name", entry.prev);
	}
}
var anchorLine = {
	top: "top",
	center: "center",
	bottom: "bottom",
	left: "left",
	middle: "center",
	right: "right"
};
function calcExpr(line, delta) {
	return delta === 0 ? `anchor(${line})` : `calc(anchor(${line}) ${delta > 0 ? "+" : "-"} ${Math.abs(delta)}px)`;
}
/**
* One axis of the positioning recipe. Writing the primary inset from the
* axis start (top/left) makes the box grow towards the axis end and vice
* versa; a "center" self origin with a matching "center" anchor line uses
* native clamped centering (anchor-center), while a "center" self on an
* edge line falls back to a -50% translate.
*
* `offset` pushes the anchor line outwards, exactly like the fallback
* engine's virtual anchor-rect expansion: edge lines move by the offset,
* center lines don't move at all.
*/
function applyAxis(style, { line, self, offset, start, end, alignProp }) {
	if (self === "center" || self === "middle") {
		if (line === "center" || line === "middle") {
			style[start] = "0px";
			style[end] = "0px";
			style[alignProp] = "anchor-center";
			return false;
		}
		style[start] = calcExpr(anchorLine[line], 0);
		return true;
	}
	const growsFromStart = self === "top" || self === "left";
	const edgeDelta = line === "center" || line === "middle" ? 0 : (line === "top" || line === "left" ? -1 : 1) * offset;
	if (growsFromStart) style[start] = calcExpr(anchorLine[line], edgeDelta);
	else style[end] = calcExpr(anchorLine[line], -edgeDelta);
	return false;
}
/**
* Computes the CSS for a popup positioned through native CSS anchor
* positioning. The returned styles are static: from here on the browser
* keeps the popup glued to its anchor through any scroll, layout shift
* or resize with no listeners involved. Whether the placement FITS is
* decided separately (applyBoundary) and fed back in through the
* origins/max caps.
*
* `point` positions relative to a coordinate inside the anchor (touch
* position / context menu) instead of the anchor's box.
*/
function getPositionStyle({ anchorName, anchorOrigin, selfOrigin, offset, point, fit, cover, maxHeight, maxWidth }) {
	const style = {
		positionAnchor: anchorName,
		top: null,
		right: null,
		bottom: null,
		left: null,
		translate: null,
		alignSelf: null,
		justifySelf: null,
		minWidth: null,
		minHeight: null,
		maxWidth: maxWidth || null,
		maxHeight: maxHeight || null
	};
	const ox = offset !== void 0 && !cover ? offset[0] : 0;
	const oy = offset !== void 0 && !cover ? offset[1] : 0;
	if (fit || cover) {
		style.minWidth = maxWidth !== null && maxWidth !== void 0 ? `min(anchor-size(width), ${maxWidth})` : "anchor-size(width)";
		if (cover) style.minHeight = maxHeight !== null && maxHeight !== void 0 ? `min(anchor-size(height), ${maxHeight})` : "anchor-size(height)";
	}
	if (point !== void 0) {
		const top = point.top + pointOffset(selfOrigin.vertical, oy), left = point.left + pointOffset(selfOrigin.horizontal, ox);
		if (selfOrigin.vertical === "bottom") style.bottom = calcExpr("top", -top);
		else style.top = calcExpr("top", top);
		if (selfOrigin.horizontal === "right") style.right = calcExpr("left", -left);
		else style.left = calcExpr("left", left);
		if (selfOrigin.horizontal === "middle" || selfOrigin.vertical === "center") style.translate = `${selfOrigin.horizontal === "middle" ? "-50%" : "0px"} ${selfOrigin.vertical === "center" ? "-50%" : "0px"}`;
		return style;
	}
	const vTranslate = applyAxis(style, {
		line: anchorOrigin.vertical,
		self: selfOrigin.vertical,
		offset: oy,
		start: "top",
		end: "bottom",
		alignProp: "alignSelf"
	});
	const hTranslate = applyAxis(style, {
		line: anchorOrigin.horizontal,
		self: selfOrigin.horizontal,
		offset: ox,
		start: "left",
		end: "right",
		alignProp: "justifySelf"
	});
	if (vTranslate || hTranslate) style.translate = `${hTranslate ? "-50%" : "0px"} ${vTranslate ? "-50%" : "0px"}`;
	return style;
}
/**
* Native CSS anchor positioning: the browser owns the tracking and JS
* only decides the placement (once per show, on demand through
* updatePosition() and on screen/placement-prop changes).
*/
function useCssAnchorEngine(props, { anchorEl, innerRef, anchorOrigin, selfOrigin }) {
	let namedAnchorEl = null;
	const anchorName = ref("");
	const anchorPoint = ref(null);
	const pointBoundary = ref(null);
	const boundary = ref(null);
	const positioned = ref(false);
	const positionStyle = computed(() => {
		if (anchorName.value === "") return "";
		const b = anchorPoint.value === null ? boundary.value : null;
		const p = anchorPoint.value !== null ? pointBoundary.value : null;
		const style = getPositionStyle({
			anchorName: anchorName.value,
			anchorOrigin: b !== null ? b.anchorOrigin : anchorOrigin.value,
			selfOrigin: p !== null ? p.selfOrigin : b !== null ? b.selfOrigin : selfOrigin.value,
			offset: props.offset,
			point: p !== null ? p.point : anchorPoint.value ?? void 0,
			fit: props.fit,
			cover: props.cover,
			maxHeight: props.maxHeight,
			maxWidth: props.maxWidth
		});
		if (b !== null) {
			if (b.maxHeight !== null) style.maxHeight = b.maxHeight;
			if (b.maxWidth !== null) style.maxWidth = b.maxWidth;
		}
		if (!positioned.value) style.visibility = "hidden";
		return style;
	});
	const acquireAnchorName = () => {
		if (namedAnchorEl === anchorEl.value) return;
		releaseAnchor(false);
		namedAnchorEl = anchorEl.value;
		anchorName.value = setAnchorName(namedAnchorEl);
	};
	const updatePosition = () => {
		if (anchorEl.value === null) return;
		acquireAnchorName();
		const el = innerRef.value;
		if (el === null) return;
		if (anchorPoint.value === null) {
			const { scrollTop, scrollLeft } = el;
			boundary.value = applyBoundary({
				el,
				anchorEl: anchorEl.value,
				anchorOrigin: anchorOrigin.value,
				selfOrigin: selfOrigin.value,
				offset: props.offset,
				cover: props.cover,
				maxHeight: props.maxHeight,
				maxWidth: props.maxWidth
			});
			restoreScroll(el, scrollTop, scrollLeft);
		} else {
			el.style.visibility = "";
			pointBoundary.value = applyPointBoundary({
				el,
				anchorEl: anchorEl.value,
				point: anchorPoint.value,
				selfOrigin: selfOrigin.value,
				offset: props.offset
			});
		}
		positioned.value = true;
	};
	const releaseAnchor = (hidingInProgress) => {
		if (!hidingInProgress) {
			if (namedAnchorEl !== null) {
				removeAnchorName(namedAnchorEl);
				namedAnchorEl = null;
			}
			anchorName.value = "";
		}
	};
	return {
		positionStyle,
		updatePosition,
		handleTick: updatePosition,
		releaseAnchor,
		setAnchorPoint(point) {
			anchorPoint.value = point;
			pointBoundary.value = null;
		},
		handleShow() {
			anchorPoint.value = null;
			pointBoundary.value = null;
			boundary.value = null;
			positioned.value = false;
			if (anchorEl.value !== null) acquireAnchorName();
		}
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/dom/dom.js
function css(element, cssObject) {
	const elementStyle = element.style;
	for (const prop in cssObject) elementStyle[prop] = cssObject[prop];
}
function childHasFocus(el, focusedEl) {
	if (el === void 0 || el === null || el.contains(focusedEl)) return true;
	for (let next = el.nextElementSibling; next !== null; next = next.nextElementSibling) if (next.contains(focusedEl)) return true;
	return false;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.focus/detached-fullscreen.js
/**
* Registry of elements that have been detached from their original DOM
* position. Currently only useSoftFullscreen() does this: it moves the element
* to <body> so that the fullscreen mixin can escape ancestor overflow,
* transform and stacking contexts.
*
* The key is the filler node that the mover leaves behind at the original
* position -- once the element is gone it is the only stable handle to where
* the element logically belongs. The value is the component proxy rather than
* a captured $el, so that the component's current root is read at test time
* instead of a possibly stale reference.
*/
var detachedMap = /* @__PURE__ */ new Map();
/**
* Registry-change listeners. An anchored popup that is open while its anchor's
* subtree gets detached (or restored) has stale geometry and a stale scroll
* target; it subscribes here to know when to re-measure (#18513). Listeners
* run synchronously, before the exit path restores the element -- schedule any
* DOM measurement instead of measuring inside the listener. Notification runs
* over a snapshot, so a listener may safely un/subscribe from within.
*/
var listeners$1 = [];
function addDetachedFullscreenListener(fn) {
	listeners$1.push(fn);
}
function removeDetachedFullscreenListener(fn) {
	const index = listeners$1.indexOf(fn);
	if (index !== -1) listeners$1.splice(index, 1);
}
function fillerNodeFor(el) {
	for (const [fillerNode, getEl] of detachedMap) if (getEl().contains(el) === true) return fillerNode;
}
/**
* Tells if el sits inside an element that was detached from somewhere within
* rootEl, which makes it a logical -- but no longer physical -- child. The
* `owns` test decides whether a filler node belongs to rootEl, so that each
* variant below agrees with the physical containment test it complements at
* its call sites.
*
* Walks the filler chain instead of testing a single hop, so that an element
* detached from inside another detached element resolves as well.
*/
function isInDetachedFullscreen(rootEl, el, owns) {
	if (rootEl === void 0 || rootEl === null) return false;
	const visited = /* @__PURE__ */ new Set();
	for (let node = fillerNodeFor(el); node !== void 0 && !visited.has(node); node = fillerNodeFor(node)) {
		if (owns(rootEl, node) === true) return true;
		visited.add(node);
	}
	return false;
}
/**
* Focus-trap variant (QDialog trap, QMenu focusout recapture): ownership via
* childHasFocus(), which also owns later siblings -- matching how those traps
* treat sibling portal nodes. A false positive only makes a trap fire less.
*/
function focusIsInDetachedFullscreen(rootEl, focusedEl) {
	return isInDetachedFullscreen(rootEl, focusedEl, childHasFocus);
}
function strictlyContains(rootEl, node) {
	return rootEl.contains(node);
}
/**
* Pointer variant (click-outside, #18512): ownership via strict containment,
* matching click-outside's own anchorEl/innerRef .contains() tests. The
* sibling widening above must not leak here: an element detached from a later
* *sibling* of a popup is genuinely outside it, and a click inside that
* element still has to close the popup.
*/
function clickIsInDetachedFullscreen(rootEl, targetEl) {
	return isInDetachedFullscreen(rootEl, targetEl, strictlyContains);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.scroll-tracking/scroll-tracking.js
/**
* One capture-phase document listener tracks every scrolling container
* at once — nested ones included, which per-container listeners could
* never cover — and fans out to the subscribers (popups re-expressing
* their frozen placement, QParallax recomputing its scroll percentage).
* A subscriber that positions its own content filters out the scrolls
* originating inside it (they never move it).
*/
var scrollSubscribers = /* @__PURE__ */ new Set();
function onViewportMove(evt) {
	scrollSubscribers.forEach((fn) => {
		fn(evt);
	});
}
function changeGlobalListeners(fnProp) {
	document[fnProp]("scroll", onViewportMove, listenOpts.passiveCapture);
	if (client.is.ios) {
		window.visualViewport?.[fnProp]("scroll", onViewportMove, listenOpts.passive);
		window.visualViewport?.[fnProp]("resize", onViewportMove, listenOpts.passive);
	}
}
function addScrollTracking(fn) {
	if (scrollSubscribers.size === 0) changeGlobalListeners("addEventListener");
	scrollSubscribers.add(fn);
}
function removeScrollTracking(fn) {
	if (scrollSubscribers.delete(fn) && scrollSubscribers.size === 0) changeGlobalListeners("removeEventListener");
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-position-engine/engine/fallback-engine.js
/**
* The JS positioning engine: expresses a placement decided by the
* shared boundary pass (core.js) through pixel insets, written from
* the edge the self origin anchors (top or bottom, left or right) like
* the native engine's anchor() insets, so content that grows between
* two passes grows away from the anchor line instead of over it; a
* centered self origin straddles its line through a -50% translate
* (anchor-center / translate natively).
* A written position is only valid for the moment it was
* computed, so its callers re-express the SAME frozen placement
* (applyPosition) on every scroll step (private.scroll-tracking) and
* on anchor motion (trackAnchorMotion) — the popup stays glued to its
* anchor and scrolls off-screen with it, exactly like the native
* engine's; only viewport/placement-prop changes re-open the decision.
*
* Serves every browser outside core.js' cssAnchorSupport
* gate; the ones inside it run anchor-engine.js instead.
*/
var vpLeft;
var vpTop;
/**
* Writes the pixel styles for one placement pass. anchorOrigin/
* selfOrigin arrive decision-resolved (post applyBoundary /
* applyPointBoundary) and capHeight/capWidth carry the decision's size
* caps; maxHeight/maxWidth stay the raw props, which alone bound the
* fit/cover minimum sizes (mirroring the native engine, where the
* min() expressions are built from the props while the caps overwrite
* only the max sizes).
*
* A centered popup on a centered anchor line (anchor-center on the
* native engine) shifts to stay inside the viewport, but the browser
* computes that shift at LAYOUT time only: scrolling merely translates
* the popup 1:1 with its anchor afterwards. Mirrored here through
* `centerShift`: a decision pass (null) computes and returns the
* shift, a tracking pass re-applies the frozen one it is handed.
*
* `point` positions relative to a coordinate inside the anchor (touch
* position / context menu) instead of the anchor's box.
*/
function applyPosition({ targetEl: el, anchorEl, anchorOrigin, selfOrigin, offset, point, fit, cover, maxHeight, maxWidth, capHeight, capWidth, centerShift = null }) {
	if (client.is.ios) {
		const bodyStyle = document.body.style;
		const { offsetLeft: left = 0, offsetTop: top = 0 } = window.visualViewport ?? {};
		if (left !== vpLeft) {
			bodyStyle.setProperty("--q-pe-left", left + "px");
			vpLeft = left;
		}
		if (top !== vpTop) {
			bodyStyle.setProperty("--q-pe-top", top + "px");
			vpTop = top;
		}
	}
	const rect = anchorEl.getBoundingClientRect();
	const useOffset = offset !== void 0 && cover !== true;
	const ox = useOffset ? offset[0] : 0;
	const oy = useOffset ? offset[1] : 0;
	const style = {
		visibility: "visible",
		maxHeight: capHeight ?? maxHeight,
		maxWidth: capWidth ?? maxWidth,
		minWidth: null,
		minHeight: null
	};
	if (fit === true || cover === true) {
		style.minWidth = maxWidth ? `min(${rect.width}px, ${maxWidth})` : rect.width + "px";
		if (cover === true) style.minHeight = maxHeight ? `min(${rect.height}px, ${maxHeight})` : rect.height + "px";
	}
	Object.assign(el.style, style);
	const { offsetWidth: width, offsetHeight: height } = el;
	const { clientWidth: VW, clientHeight: VH } = document.documentElement;
	const shift = {
		top: 0,
		left: 0
	};
	let lineY, lineX;
	if (point !== void 0) {
		lineY = rect.top + point.top + pointOffset(selfOrigin.vertical, oy);
		lineX = rect.left + point.left + pointOffset(selfOrigin.horizontal, ox);
	} else {
		const A = {
			top: rect.top - oy,
			bottom: rect.bottom + oy,
			center: rect.top + (rect.bottom - rect.top) / 2,
			left: rect.left - ox,
			right: rect.right + ox,
			middle: rect.left + (rect.right - rect.left) / 2
		};
		lineY = A[anchorOrigin.vertical];
		lineX = A[anchorOrigin.horizontal];
	}
	const pos = {
		top: "",
		bottom: "",
		left: "",
		right: ""
	};
	let tx = "0", ty = "0";
	if (selfOrigin.vertical === "center") {
		if (point === void 0 && anchorOrigin.vertical === "center") {
			const top = lineY - height / 2;
			shift.top = centerShift !== null ? centerShift.top : Math.max(0, Math.min(top, VH - height)) - top;
		}
		pos.top = lineY + shift.top + "px";
		ty = "-50%";
	} else if (selfOrigin.vertical === "bottom") pos.bottom = VH - lineY + "px";
	else pos.top = lineY + "px";
	if (selfOrigin.horizontal === "middle") {
		if (point === void 0 && anchorOrigin.horizontal === "middle") {
			const left = lineX - width / 2;
			shift.left = centerShift !== null ? centerShift.left : Math.max(0, Math.min(left, VW - width)) - left;
		}
		pos.left = lineX + shift.left + "px";
		tx = "-50%";
	} else if (selfOrigin.horizontal === "right") pos.right = VW - lineX + "px";
	else pos.left = lineX + "px";
	pos.translate = tx === "0" && ty === "0" ? "" : `${tx} ${ty}`;
	Object.assign(el.style, pos);
	return shift;
}
/**
* Follows an anchor that is still moving while its popup opens — e.g. a
* push QBtn springing back from its :active translateY, released by the
* very click that opens the menu. The popup only measures the anchor at
* show time and again when the enter transition ends, so a rect that
* settles in between would land as a visible position snap at the end
* of the transition (and QTooltip has no end-of-transition re-measure
* at all).
*
* Re-measures the anchor every animation frame for the given duration
* and invokes onMove only on frames where the rect actually changed;
* idle frames cost a single clean-layout getBoundingClientRect() read.
* Stops itself if the anchor goes away. Returns a stop function.
*/
function trackAnchorMotion(getAnchorEl, onMove, duration) {
	const stopTime = performance.now() + Number(duration);
	let el = getAnchorEl();
	let prevRect = el === null ? null : el.getBoundingClientRect();
	let rafId = requestAnimationFrame(function step() {
		rafId = null;
		el = getAnchorEl();
		if (el === null || !el.isConnected) return;
		const rect = el.getBoundingClientRect();
		if (prevRect !== null && (rect.top !== prevRect.top || rect.left !== prevRect.left || rect.width !== prevRect.width || rect.height !== prevRect.height)) onMove();
		prevRect = rect;
		if (performance.now() < stopTime) rafId = requestAnimationFrame(step);
	});
	return () => {
		if (rafId !== null) {
			cancelAnimationFrame(rafId);
			rafId = null;
		}
	};
}
/**
* The JS fallback: pixel insets, re-expressed on every scroll step
* and anchor move; the placement decision itself has the same
* lifecycle as the native engine's.
*/
function useFallbackEngine(props, { anchorEl, innerRef, showing, anchorOrigin, selfOrigin, trackContent }) {
	let observer, stopAnchorTracking, anchorPoint = null, pointBoundary = null, boundary = null, centerShift = null, retries = 0;
	const track = () => {
		if (innerRef.value === null || anchorEl.value === null) return;
		const b = anchorPoint === null ? boundary : null;
		const p = anchorPoint !== null ? pointBoundary : null;
		centerShift = applyPosition({
			targetEl: innerRef.value,
			anchorEl: anchorEl.value,
			anchorOrigin: b !== null ? b.anchorOrigin : anchorOrigin.value,
			selfOrigin: p !== null ? p.selfOrigin : b !== null ? b.selfOrigin : selfOrigin.value,
			offset: props.offset,
			point: p !== null ? p.point : anchorPoint ?? void 0,
			fit: props.fit,
			cover: props.cover,
			maxHeight: props.maxHeight,
			maxWidth: props.maxWidth,
			capHeight: b !== null ? b.maxHeight : null,
			capWidth: b !== null ? b.maxWidth : null,
			centerShift
		});
	};
	const updatePosition = () => {
		const el = innerRef.value;
		if (el === null || anchorEl.value === null) return;
		if (el.offsetWidth === 0 || el.offsetHeight === 0) {
			if (retries < 5) {
				retries++;
				setTimeout(updatePosition, 10);
			}
			return;
		}
		retries = 0;
		const { scrollTop, scrollLeft } = el;
		if (anchorPoint === null) {
			boundary = null;
			centerShift = null;
			track();
			boundary = applyBoundary({
				el,
				anchorEl: anchorEl.value,
				anchorOrigin: anchorOrigin.value,
				selfOrigin: selfOrigin.value,
				offset: props.offset,
				cover: props.cover,
				maxHeight: props.maxHeight,
				maxWidth: props.maxWidth
			});
		} else {
			pointBoundary = null;
			centerShift = null;
			track();
			pointBoundary = applyPointBoundary({
				el,
				anchorEl: anchorEl.value,
				point: anchorPoint,
				selfOrigin: selfOrigin.value,
				offset: props.offset
			});
		}
		centerShift = null;
		track();
		restoreScroll(el, scrollTop, scrollLeft);
	};
	const onScroll = (evt) => {
		if (innerRef.value !== null && (!(evt.target instanceof Node) || !innerRef.value.contains(evt.target))) track();
	};
	const onDetachedFullscreenChange = () => {
		nextTick(() => {
			requestAnimationFrame(() => {
				if (showing.value && anchorEl.value !== null && anchorEl.value.isConnected) track();
			});
		});
	};
	return {
		positionStyle: { value: "" },
		track,
		updatePosition,
		setAnchorPoint(point) {
			anchorPoint = point;
			pointBoundary = null;
		},
		handleShow() {
			anchorPoint = null;
			pointBoundary = null;
			boundary = null;
			centerShift = null;
			retries = 0;
			addDetachedFullscreenListener(onDetachedFullscreenChange);
			addScrollTracking(onScroll);
		},
		handleTick() {
			if (trackContent) {
				observer?.disconnect();
				observer = void 0;
				if (innerRef.value !== null) {
					observer = new MutationObserver(track);
					observer.observe(innerRef.value, {
						attributes: false,
						childList: true,
						characterData: true,
						subtree: true
					});
				}
			}
			updatePosition();
			stopAnchorTracking = trackAnchorMotion(() => anchorEl.value, track, props.transitionDuration);
		},
		releaseAnchor(hidingInProgress) {
			if (observer !== void 0) {
				observer.disconnect();
				observer = void 0;
			}
			if (stopAnchorTracking !== void 0) {
				stopAnchorTracking();
				stopAnchorTracking = void 0;
			}
			removeDetachedFullscreenListener(onDetachedFullscreenChange);
			if (!hidingInProgress) {
				removeScrollTracking(onScroll);
				anchorPoint = null;
				pointBoundary = null;
				boundary = null;
				centerShift = null;
			}
		}
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-position-engine/use-position-engine.js
function usePositionEngine({ props, $q, anchorEl, innerRef, showing, anchorOrigin, selfOrigin, trackContent = false, viaCssAnchor = cssAnchorSupport }) {
	let stopPositionWatcher;
	const engine = (viaCssAnchor ? useCssAnchorEngine : useFallbackEngine)(props, {
		anchorEl,
		innerRef,
		showing,
		anchorOrigin,
		selfOrigin,
		trackContent
	});
	return {
		viaCssAnchor,
		positionStyle: engine.positionStyle,
		updatePosition: engine.updatePosition,
		handleTick: engine.handleTick,
		track: engine.track,
		handleShow(pointEvt) {
			engine.handleShow();
			if (pointEvt !== void 0 && anchorEl.value !== null) {
				const pos = position(pointEvt);
				if (pos.left !== void 0) {
					const { top, left } = anchorEl.value.getBoundingClientRect();
					engine.setAnchorPoint({
						left: pos.left - left,
						top: pos.top - top
					});
				}
			}
			if (stopPositionWatcher === void 0) stopPositionWatcher = watch([anchorEl, () => `${$q.screen.width}|${$q.screen.height}|${props.self}|${props.anchor}|${$q.lang.rtl}`], () => {
				if (showing.value) engine.updatePosition();
			});
		},
		releaseAnchor(hidingInProgress) {
			if (stopPositionWatcher !== void 0) {
				stopPositionWatcher();
				stopPositionWatcher = void 0;
			}
			engine.releaseAnchor(hidingInProgress);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.keyboard/escape-key.js
var handlers$1 = [];
var escDown;
function onKeydown(evt) {
	if (evt.keyCode === 27) escDown = true;
}
function onBlur() {
	if (escDown) escDown = false;
}
function onKeyup(evt) {
	if (escDown && isKeyCode(evt, 27)) {
		escDown = false;
		handlers$1.at(-1)(evt);
	}
}
function update(action) {
	window[action]("keydown", onKeydown);
	window[action]("blur", onBlur);
	window[action]("keyup", onKeyup);
	escDown = false;
}
function addEscapeKey(fn) {
	handlers$1.push(fn);
	if (handlers$1.length === 1) update("addEventListener");
}
function removeEscapeKey(fn) {
	const index = handlers$1.indexOf(fn);
	if (index !== -1) {
		handlers$1.splice(index, 1);
		if (handlers$1.length === 0) update("removeEventListener");
	}
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.render/render.js
function hSlot(slot, otherwise) {
	return slot !== void 0 ? slot() || otherwise : otherwise;
}
function hUniqueSlot(slot, otherwise) {
	if (slot !== void 0) {
		const vnode = slot();
		if (vnode !== void 0 && vnode !== null) return [...vnode];
	}
	return otherwise;
}
/**
* Source definitely exists,
* so it's merged with the possible slot
*/
function hMergeSlot(slot, source) {
	return slot !== void 0 ? source.concat(slot()) : source;
}
/**
* Merge with possible slot,
* even if source might not exist
*/
function hMergeSlotSafely(slot, source) {
	if (slot === void 0) return source;
	return source !== void 0 ? source.concat(slot()) : slot();
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/tooltip/QTooltip.js
var nonSelectableCount = 0;
var cursorSettleDelay = 100;
var cursorSettleTolerance = 4;
function isContactPointer(evt) {
	return evt.pointerType === "touch" || evt.pointerType === "pen" && evt.buttons !== 0;
}
var QTooltip_default = /*#__PURE__*/ createComponent({
	name: "QTooltip",
	inheritAttrs: false,
	props: {
		...useAnchorStaticProps,
		...useModelToggleProps,
		...useTransitionProps,
		maxHeight: {
			type: String,
			default: null
		},
		maxWidth: {
			type: String,
			default: null
		},
		transitionShow: {
			...useTransitionProps.transitionShow,
			default: "jump-down"
		},
		transitionHide: {
			...useTransitionProps.transitionHide,
			default: "jump-up"
		},
		anchor: {
			type: String,
			default: "bottom middle",
			validator: validatePosition
		},
		self: {
			type: String,
			default: "top middle",
			validator: validatePosition
		},
		offset: {
			type: Array,
			default: () => [14, 14],
			validator: validateOffset
		},
		cursorPosition: Boolean,
		delay: {
			type: Number,
			default: 0
		},
		hideDelay: {
			type: Number,
			default: 0
		},
		persistent: Boolean
	},
	emits: [...useModelToggleEmits],
	setup(props, { slots, emit, attrs }) {
		let removeNonSelectableTimer, hasNonSelectable = false, contactType = null, settlePoint = null, describedBy;
		const vm = getCurrentInstance();
		const $q = useQuasar();
		const innerRef = shallowRef(null);
		const showing = ref(false);
		const targetUid = useId();
		function getTooltipId() {
			return attrs.id || targetUid.value;
		}
		const anchorOrigin = computed(() => parsePosition(props.anchor, $q.lang.rtl));
		const selfOrigin = computed(() => parsePosition(props.self, $q.lang.rtl));
		const hideOnRouteChange = computed(() => !props.persistent);
		const { registerTimeout, registerTransitionEnd } = useTransitionEnd(props);
		const { transitionProps, transitionStyle } = useTransition(props);
		const { anchorEl, canShow, anchorEvents } = useAnchor({
			showing,
			configureAnchorEl
		});
		const { show, hide } = useModelToggle({
			showing,
			canShow,
			handleShow,
			handleHide,
			hideOnRouteChange,
			processOnMount: true
		});
		Object.assign(anchorEvents, {
			delayShow,
			delayHide,
			onFocusin,
			onPointerdown,
			onCursorMove
		});
		const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent, "tooltip");
		const { registerTick, removeTick } = useTick();
		const posEngine = usePositionEngine({
			props,
			$q,
			anchorEl,
			innerRef,
			showing,
			anchorOrigin,
			selfOrigin,
			trackContent: true
		});
		watch(() => (props.modelValue === null || props["onUpdate:modelValue"]) && showing.value === true && props.persistent !== true, (val) => {
			(val === true ? addEscapeKey : removeEscapeKey)(onEscapeKey);
		});
		function handleShow(evt) {
			cleanEvt(anchorEvents, "cursorTemp");
			showPortal();
			addAriaDescription();
			posEngine.handleShow(props.cursorPosition ? evt : void 0);
			registerTick(posEngine.handleTick);
			registerTransitionEnd(() => {
				showPortal(true);
				emit("show", evt);
			});
		}
		function handleHide(evt) {
			removeTick();
			hidePortal();
			anchorCleanup(true);
			registerTransitionEnd(() => {
				hidePortal(true);
				posEngine.releaseAnchor(false);
				emit("hide", evt);
			});
		}
		function anchorCleanup(hidingInProgress) {
			posEngine.releaseAnchor(hidingInProgress);
			removeEscapeKey(onEscapeKey);
			contactType = null;
			cleanEvt(anchorEvents, "tooltipTemp");
			cleanEvt(anchorEvents, "cursorTemp");
			removeAriaDescription();
			setNonSelectable(false);
		}
		function delayShow(evt) {
			if (evt.pointerType === "touch" && evt.isPrimary === false) return;
			const contact = isContactPointer(evt);
			if (contact) engageContact(evt);
			if (props.cursorPosition && !contact) {
				const pos = position(evt);
				if (pos.left !== void 0) {
					settlePoint = pos;
					addEvt(anchorEvents, "cursorTemp", [[
						anchorEl.value,
						"pointermove",
						"onCursorMove",
						"passive"
					]]);
					settleShow(evt);
					return;
				}
			}
			registerTimeout(() => {
				show(evt);
			}, props.delay);
		}
		function settleShow(evt) {
			registerTimeout(() => {
				show(evt);
			}, Math.max(props.delay, cursorSettleDelay));
		}
		function onCursorMove(evt) {
			const pos = position(evt);
			if (Math.abs(pos.left - settlePoint.left) <= cursorSettleTolerance && Math.abs(pos.top - settlePoint.top) <= cursorSettleTolerance) return;
			settlePoint = pos;
			settleShow(evt);
		}
		function engageContact(evt) {
			contactType = evt.pointerType;
			if (removeNonSelectableTimer !== void 0) {
				clearTimeout(removeNonSelectableTimer);
				removeNonSelectableTimer = void 0;
			}
			clearSelection();
			setNonSelectable(true);
			const target = anchorEl.value;
			const evts = [
				"touchmove",
				"touchcancel",
				"touchend",
				"click"
			].map((e) => [
				target,
				e,
				"delayHide",
				"passiveCapture"
			]);
			addEvt(anchorEvents, "tooltipTemp", evts);
		}
		function onPointerdown(evt) {
			if (evt.pointerType === "pen" && contactType === null) engageContact(evt);
		}
		function delayHide(evt) {
			if (evt.pointerType === "touch" && evt.isPrimary === false) return;
			if (evt.type === "focusout" && anchorEl.value !== null && anchorEl.value.contains(evt.relatedTarget)) return;
			cleanEvt(anchorEvents, "cursorTemp");
			if (contactType !== null) {
				const liftedPen = contactType === "pen" && (evt.type === "click" || evt.type === "touchend");
				contactType = null;
				cleanEvt(anchorEvents, "tooltipTemp");
				clearSelection();
				removeNonSelectableTimer = setTimeout(() => {
					removeNonSelectableTimer = void 0;
					setNonSelectable(false);
				}, 10);
				if (liftedPen) return;
			}
			registerTimeout(() => {
				hide(evt);
			}, props.hideDelay);
		}
		function onFocusin(evt) {
			const el = evt.target;
			if (!el) return;
			if (isRefocusing() || !el.matches(":focus-visible")) return;
			delayShow(evt);
		}
		function onEscapeKey(evt) {
			hide(evt);
		}
		function configureAnchorEl() {
			if (props.noParentEvent || anchorEl.value === null) return;
			const evts = [
				[
					anchorEl.value,
					"pointerenter",
					"delayShow",
					"passive"
				],
				[
					anchorEl.value,
					"pointerdown",
					"onPointerdown",
					"passive"
				],
				[
					anchorEl.value,
					"pointerleave",
					"delayHide",
					"passive"
				],
				[
					anchorEl.value,
					"focusin",
					"onFocusin",
					"passive"
				],
				[
					anchorEl.value,
					"focusout",
					"delayHide",
					"passive"
				]
			];
			addEvt(anchorEvents, "anchor", evts);
		}
		function setNonSelectable(state) {
			if (hasNonSelectable === state) return;
			hasNonSelectable = state;
			nonSelectableCount += state ? 1 : -1;
			document.body.classList.toggle("non-selectable", nonSelectableCount > 0);
			if (!state && removeNonSelectableTimer !== void 0) {
				clearTimeout(removeNonSelectableTimer);
				removeNonSelectableTimer = void 0;
			}
		}
		function addAriaDescription() {
			const el = anchorEl.value, id = getTooltipId();
			if (el === null || id === void 0) return;
			const ids = (el.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean);
			describedBy = {
				el,
				id,
				added: !ids.includes(id)
			};
			if (describedBy.added) {
				ids.push(id);
				el.setAttribute("aria-describedby", ids.join(" "));
			}
		}
		function removeAriaDescription() {
			if (describedBy?.added === true) {
				const { el, id } = describedBy, value = (el.getAttribute("aria-describedby") || "").split(/\s+/).filter((entry) => entry !== "" && entry !== id);
				if (value.length === 0) el.removeAttribute("aria-describedby");
				else el.setAttribute("aria-describedby", value.join(" "));
			}
			describedBy = void 0;
		}
		function getTooltipContent() {
			return showing.value ? h("div", {
				...attrs,
				id: getTooltipId(),
				ref: innerRef,
				class: ["q-tooltip q-tooltip--style no-pointer-events" + (posEngine.viaCssAnchor ? "" : " q-position-engine"), attrs.class],
				style: [
					attrs.style,
					transitionStyle(),
					posEngine.positionStyle.value
				],
				role: "tooltip"
			}, hSlot(slots.default)) : null;
		}
		function renderPortalContent() {
			return h(Transition, transitionProps(), getTooltipContent);
		}
		onBeforeUnmount(() => {
			anchorCleanup(false);
		});
		Object.assign(vm.proxy, { updatePosition: posEngine.updatePosition });
		return renderPortal;
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-size/use-size.js
var useSizeDefaults = {
	xs: 18,
	sm: 24,
	md: 32,
	lg: 38,
	xl: 46
};
var useSizeProps = { size: String };
/**
* Creates a per-render callable size -> style resolver. The returned
* objects are shared and reference-stable, so an unchanged size skips
* style patching entirely -- do not mutate them.
*/
function createSizeStyle(sizes) {
	const cache = /* @__PURE__ */ new Map();
	return (size) => {
		if (size === void 0) return null;
		let style = cache.get(size);
		if (style === void 0) {
			if (cache.size > 500) cache.clear();
			style = { fontSize: size in sizes ? `${sizes[size]}px` : size };
			cache.set(size, style);
		}
		return style;
	};
}
var getSizeStyle$1 = /*#__PURE__*/ createSizeStyle(useSizeDefaults);
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/icon/QIcon.js
var defaultViewBox = "0 0 24 24";
var libMap = {
	"mdi-": "mdi ",
	"icon-": "",
	"fa-": "",
	"bt-": "bt ",
	"eva-": "eva ",
	"iconfont ": "",
	"ti-": "themify-icon ",
	"bi-": "bootstrap-icons ",
	"i-": ""
};
var libPrefixes = Object.keys(libMap);
var matMap = {
	o_: "-outlined",
	r_: "-round",
	s_: "-sharp"
};
var symMap = {
	sym_o_: "-outlined",
	sym_r_: "-rounded",
	sym_s_: "-sharp"
};
function isFaLegacy(s) {
	const c0 = s.codePointAt(0);
	if (c0 !== 102 && c0 !== 108 || s.codePointAt(1) !== 97) return false;
	const c2 = s.codePointAt(2);
	return c2 === 32 ? true : s.codePointAt(3) === 32 && (c2 === 115 || c2 === 114 || c2 === 108 || c2 === 98 || c2 === 100 || c2 === 107);
}
function isSpace(c) {
	return c === 32 || c >= 9 && c <= 13 || c === 160 || c === 5760 || c >= 8192 && c <= 8202 || c === 8232 || c === 8233 || c === 8239 || c === 8287 || c === 12288 || c === 65279;
}
function isSvgPath(s) {
	const c0 = s.codePointAt(0);
	if (c0 !== 77 && c0 !== 109) return false;
	let i = 1;
	let c = s.codePointAt(i);
	if (isSpace(c)) c = s.codePointAt(++i);
	if (c === 43 || c === 45) c = s.codePointAt(++i);
	if (c === 46) c = s.codePointAt(++i);
	return c >= 48 && c <= 57;
}
var noneType = { cls: "" };
var ligatureSpanProps = { "aria-hidden": "true" };
function parseIcon(icon, isIos) {
	if (icon.startsWith("img:")) return {
		cls: "",
		img: true,
		src: icon.slice(4)
	};
	if (icon.startsWith("svguse:")) {
		const [def, viewBox] = icon.split("|");
		return {
			cls: "",
			svguse: true,
			src: def.slice(7),
			viewBox: viewBox || defaultViewBox
		};
	}
	if (icon.startsWith("ion-")) return { cls: " ionicons " + (icon.startsWith("ion-md") || icon.startsWith("ion-ios") || icon.startsWith("ion-logo") ? icon : `ion-${isIos ? "ios" : "md"}${icon.slice(3)}`) };
	if (icon.startsWith("sym_")) {
		const symType = symMap[icon.slice(0, 6)];
		if (symType !== void 0) return {
			cls: " notranslate material-symbols" + symType,
			content: icon.slice(6),
			ligature: true
		};
	}
	for (const prefix of libPrefixes) if (icon.startsWith(prefix)) return { cls: ` ${libMap[prefix]}${icon}` };
	if (isFaLegacy(icon)) return { cls: " " + icon };
	if (isSvgPath(icon)) {
		const [def, viewBox] = icon.split("|");
		return {
			cls: "",
			svg: true,
			viewBox: viewBox || defaultViewBox,
			nodes: def.split("&&").map((path) => {
				const [d, style, transform] = path.split("@@");
				return {
					d,
					style,
					transform
				};
			})
		};
	}
	const cls = " notranslate material-icons";
	const matType = matMap[icon.slice(0, 2)];
	return matType !== void 0 ? {
		cls: cls + matType,
		content: icon.slice(2),
		ligature: true
	} : {
		cls,
		content: icon,
		ligature: true
	};
}
var typeCacheMd = /* @__PURE__ */ new Map();
var typeCacheIos = /* @__PURE__ */ new Map();
function getType(icon, isIos) {
	const cache = isIos ? typeCacheIos : typeCacheMd;
	let type = cache.get(icon);
	if (type === void 0) {
		if (cache.size > 1e3) cache.clear();
		type = parseIcon(icon, isIos);
		cache.set(icon, type);
	}
	return type;
}
var mapFnCache = /* @__PURE__ */ new WeakMap();
function getMappedType(mapFn, icon, isIos) {
	let cache = mapFnCache.get(mapFn);
	if (cache === void 0) {
		cache = /* @__PURE__ */ new Map();
		mapFnCache.set(mapFn, cache);
	}
	const key = (isIos === true ? "ios;" : "md;") + icon;
	let type = cache.get(key);
	if (type === void 0) {
		if (cache.size > 1e3) cache.clear();
		const res = mapFn(icon);
		if (res === void 0) type = getType(icon, isIos);
		else if (res.icon !== void 0) type = res.icon === "none" || !res.icon ? noneType : getType(res.icon, isIos);
		else {
			const { cls, content } = res;
			type = {
				cls: cls !== void 0 ? " " + cls : "",
				content,
				ligature: content !== void 0 && content.trim().length !== 0
			};
		}
		cache.set(key, type);
	}
	return type;
}
var QIcon_default = /*#__PURE__*/ createComponent({
	name: "QIcon",
	props: {
		...useSizeProps,
		tag: {
			type: String,
			default: "i"
		},
		name: String,
		color: String,
		left: Boolean,
		right: Boolean
	},
	setup(props, { slots }) {
		const $q = useQuasar();
		const isIos = $q.platform.is.ios;
		let lastIcon = null;
		let lastType = noneType;
		let lastMapFn = null;
		return () => {
			const icon = props.name;
			if (icon !== lastIcon || $q.iconMapFn !== lastMapFn) {
				lastIcon = icon;
				lastMapFn = $q.iconMapFn;
				lastType = icon === "none" || !icon ? noneType : lastMapFn !== null ? getMappedType(lastMapFn, icon, isIos) : getType(icon, isIos);
			}
			const type = lastType;
			const data = {
				"aria-hidden": "true",
				class: "q-icon" + (props.left ? " on-left" : "") + (props.right ? " on-right" : "") + (props.color !== void 0 ? ` text-${props.color}` : "") + type.cls
			};
			if (props.size !== void 0) data.style = getSizeStyle$1(props.size);
			if (type.content !== void 0) return h(props.tag, data, hMergeSlot(slots.default, [type.ligature ? h("span", ligatureSpanProps, type.content) : type.content]));
			if (type.img) return h(props.tag, data, hMergeSlot(slots.default, [h("img", { src: type.src })]));
			if (type.svg) return h(props.tag, data, hMergeSlot(slots.default, [h("svg", { viewBox: type.viewBox }, type.nodes.map((svgData) => h("path", svgData)))]));
			if (type.svguse) return h(props.tag, data, hMergeSlot(slots.default, [h("svg", { viewBox: type.viewBox }, [h("use", { "xlink:href": type.src })])]));
			return h(props.tag, data, hSlot(slots.default));
		};
	}
});
//#endregion
//#region supported-devices-component/components/device.vue?vue&type=template&lang.js
var _hoisted_1$2 = { class: "device" };
var _hoisted_2$2 = { class: "thumb" };
var _hoisted_3$2 = { class: "top-right" };
var _hoisted_4$1 = { key: 0 };
var _hoisted_5 = {
	key: 0,
	class: "is-new"
};
var _hoisted_6 = { class: "desc" };
var _hoisted_7 = { class: "model" };
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_router_link = resolveComponent("router-link");
	const _component_q_tooltip = resolveComponent("q-tooltip");
	const _component_q_icon = resolveComponent("q-icon");
	return openBlock(), createElementBlock("div", _hoisted_1$2, [
		createVNode(_component_router_link, {
			class: "title",
			to: $setup.link
		}, {
			default: withCtx(() => [createTextVNode(toDisplayString($props.device.description), 1)]),
			_: 1
		}, 8, ["to"]),
		createBaseVNode("div", _hoisted_2$2, [
			createBaseVNode("div", _hoisted_3$2, [createBaseVNode("div", null, [createBaseVNode("div", {
				class: "vendor",
				onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("vendor-click", $props.device.vendor))
			}, [
				createTextVNode(toDisplayString($props.device.vendor), 1),
				createVNode(_component_q_tooltip, { self: "center end" }, {
					default: withCtx(() => [$props.device.isWhiteLabel ? (openBlock(), createElementBlock("span", _hoisted_4$1, "White-Label Device -")) : createCommentVNode("", true), createTextVNode(" Filter by " + toDisplayString($props.device.vendor), 1)]),
					_: 1
				}),
				$props.device.isWhiteLabel ? (openBlock(), createBlock(_component_q_icon, {
					key: 0,
					name: "more"
				})) : createCommentVNode("", true)
			])])]),
			$setup.isNew ? (openBlock(), createElementBlock("div", _hoisted_5, [_cache[1] || (_cache[1] = createTextVNode("new", -1)), createVNode(_component_q_tooltip, { self: "center start" }, {
				default: withCtx(() => [createTextVNode("Added at " + toDisplayString(new Date($props.device.addedAt).toLocaleString()), 1)]),
				_: 1
			})])) : createCommentVNode("", true),
			createVNode(_component_router_link, {
				class: "device-img",
				to: $setup.link,
				style: normalizeStyle({ backgroundImage: `url('${encodeURI($props.device.image)}')` })
			}, null, 8, ["to", "style"])
		]),
		createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, toDisplayString($props.device.model), 1), createTextVNode("- " + toDisplayString($props.device.exposes.join(", ")), 1)])
	]);
}
var device_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	name: "Device",
	components: {
		QTooltip: QTooltip_default,
		QIcon: QIcon_default
	},
	props: ["device"],
	emits: ["vendor-click"],
	setup(props) {
		const link = ref(props.device.link.substr(2));
		const isNew = ref(false);
		watch(props.device, (device) => {
			isNew.value = new Date(device.addedAt) > Date.now() - 2592e6;
			link.value = device.link.substr(2);
		}, { immediate: true });
		return {
			isNew,
			link
		};
	}
}, [["render", render$3]]);
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/spinner/spinner-utils.js
var useSpinnerProps = {
	size: {
		type: [String, Number],
		default: "1em"
	},
	color: String
};
function getSpinnerSize(size) {
	return size in useSizeDefaults ? `${useSizeDefaults[size]}px` : size;
}
function getSpinnerClass(color, name) {
	return "q-spinner" + (name ? ` q-spinner-${name}` : "") + (color ? ` text-${color}` : "");
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner_default = /*#__PURE__*/ createComponent({
	name: "QSpinner",
	props: {
		...useSpinnerProps,
		thickness: {
			type: Number,
			default: 5
		}
	},
	setup(props) {
		return () => {
			const cSize = getSpinnerSize(props.size);
			return h("svg", {
				class: getSpinnerClass(props.color, "mat"),
				width: cSize,
				height: cSize,
				viewBox: "0 0 50 50"
			}, [h("circle", {
				class: "path",
				cx: "25",
				cy: "25",
				r: "20",
				fill: "none",
				stroke: "currentColor",
				"stroke-width": props.thickness,
				"stroke-miterlimit": "10"
			})]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/use-split-attrs/use-split-attrs.js
function isListener(key) {
	if (key.codePointAt(0) !== 111 || key.codePointAt(1) !== 110) return false;
	const c = key.codePointAt(2);
	return c >= 65 && c <= 90;
}
function differs(next, prev) {
	const keys = Object.keys(next);
	if (keys.length !== Object.keys(prev).length) return true;
	for (const key of keys) if (next[key] !== prev[key] || !(key in prev)) return true;
	return false;
}
function useSplitAttrs() {
	const vm = getCurrentInstance();
	const { attrs } = vm;
	const acc = {
		listeners: ref({}),
		attributes: ref({})
	};
	function update() {
		const attributes = {};
		const listeners = {};
		for (const key in attrs) if (key !== "class" && key !== "style" && !isListener(key)) attributes[key] = attrs[key];
		for (const key in vm.vnode.props) if (isListener(key)) listeners[key] = vm.vnode.props[key];
		if (differs(attributes, acc.attributes.value)) acc.attributes.value = attributes;
		if (differs(listeners, acc.listeners.value)) acc.listeners.value = listeners;
	}
	onBeforeUpdate(update);
	update();
	return acc;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-dark/use-dark.js
var useDarkProps = { dark: {
	type: Boolean,
	default: null
} };
function useDark(props, $q) {
	return () => props.dark === null ? $q.dark.isActive : props.dark;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/use-form/use-form-child.js
function useFormChild({ validate, resetValidation, requiresQForm }) {
	const $form = inject(formKey, false);
	if ($form !== false) {
		const { props, proxy } = getCurrentInstance();
		Object.assign(proxy, {
			validate,
			resetValidation
		});
		watch(() => props.disable, (val) => {
			if (val) {
				if (typeof resetValidation === "function") resetValidation();
				$form.unbindComponent(proxy);
			} else $form.bindComponent(proxy);
		});
		onMounted(() => {
			if (!props.disable) $form.bindComponent(proxy);
		});
		onBeforeUnmount(() => {
			if (!props.disable) $form.unbindComponent(proxy);
		});
	} else if (requiresQForm) console.error("Parent QForm not found on useFormChild()!");
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/patterns/patterns.js
var hexRE = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/;
var hexaRE = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/;
var hexOrHexaRE = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
var rgbRE = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/;
var rgbaRE = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0(\.[\d]+)?|1(\.0+)?)\)$/;
var dateRE = /^-?[\d]+\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/;
var timeRE = /^([0-1]?\d|2[0-3]):[0-5]\d$/;
var fulltimeRE = /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/;
var timeOrFulltimeRE = /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/;
var emailRE = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var testPattern = {
	date: (v) => dateRE.test(v),
	time: (v) => timeRE.test(v),
	fulltime: (v) => fulltimeRE.test(v),
	timeOrFulltime: (v) => timeOrFulltimeRE.test(v),
	email: (v) => emailRE.test(v),
	hexColor: (v) => hexRE.test(v),
	hexaColor: (v) => hexaRE.test(v),
	hexOrHexaColor: (v) => hexOrHexaRE.test(v),
	rgbColor: (v) => rgbRE.test(v),
	rgbaColor: (v) => rgbaRE.test(v),
	rgbOrRgbaColor: (v) => rgbRE.test(v) || rgbaRE.test(v),
	hexOrRgbColor: (v) => hexRE.test(v) || rgbRE.test(v),
	hexaOrRgbaColor: (v) => hexaRE.test(v) || rgbaRE.test(v),
	anyColor: (v) => hexOrHexaRE.test(v) || rgbRE.test(v) || rgbaRE.test(v)
};
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-validate/use-validate.js
var lazyRulesValues = [
	true,
	false,
	"ondemand"
];
var useValidateProps = {
	modelValue: {},
	error: {
		type: Boolean,
		default: null
	},
	errorMessage: String,
	noErrorIcon: Boolean,
	rules: Array,
	reactiveRules: Boolean,
	lazyRules: {
		type: [Boolean, String],
		default: false,
		validator: (v) => lazyRulesValues.includes(v)
	}
};
function useValidate(focused, innerLoading) {
	const { props, proxy } = getCurrentInstance();
	const innerError = ref(false);
	const innerErrorMessage = ref(null);
	const isDirtyModel = ref(false);
	useFormChild({
		validate,
		resetValidation
	});
	let validateIndex = 0, unwatchRules, unmounted = false, pendingBlurValidation = false;
	const hasRules = computed(() => props.rules !== void 0 && props.rules !== null && props.rules.length !== 0);
	const canDebounceValidate = computed(() => !props.disable && hasRules.value && !innerLoading.value);
	const hasError = computed(() => props.error === true || innerError.value);
	const errorMessage = computed(() => typeof props.errorMessage === "string" && props.errorMessage.length !== 0 ? props.errorMessage : innerErrorMessage.value);
	watch(() => props.modelValue, () => {
		isDirtyModel.value = true;
		if (canDebounceValidate.value && (props.lazyRules === false || props.lazyRules === true && innerError.value)) debouncedValidate();
	});
	function onRulesChange() {
		if (props.lazyRules !== "ondemand" && canDebounceValidate.value && isDirtyModel.value) debouncedValidate();
	}
	watch(() => props.reactiveRules, (val) => {
		if (val) {
			if (unwatchRules === void 0) unwatchRules = watch(() => props.rules, onRulesChange, {
				immediate: true,
				deep: true
			});
		} else if (unwatchRules !== void 0) {
			unwatchRules();
			unwatchRules = void 0;
		}
	}, { immediate: true });
	watch(() => props.lazyRules, onRulesChange);
	watch(focused, (val) => {
		if (val) isDirtyModel.value = true;
		else if (props.lazyRules !== "ondemand") {
			if (canDebounceValidate.value) debouncedValidate();
			else if (!props.disable && hasRules.value && innerLoading.value) pendingBlurValidation = true;
		}
	});
	function resetValidation() {
		validateIndex++;
		innerLoading.value = false;
		isDirtyModel.value = false;
		innerError.value = false;
		innerErrorMessage.value = null;
		pendingBlurValidation = false;
		debouncedValidate.cancel();
	}
	function validate(val = props.modelValue) {
		if (props.disable || !hasRules.value) return true;
		const index = ++validateIndex;
		const startModel = props.modelValue;
		pendingBlurValidation = false;
		const revalidateIfStale = () => {
			const blurArrived = pendingBlurValidation;
			pendingBlurValidation = false;
			if (!unmounted && props.modelValue !== startModel && canDebounceValidate.value && props.lazyRules !== "ondemand" && (props.lazyRules === false || innerError.value || blurArrived)) debouncedValidate();
		};
		const setDirty = innerLoading.value ? () => {} : () => {
			isDirtyModel.value = true;
		};
		const update = (hasErr, msg) => {
			if (hasErr) setDirty();
			innerError.value = hasErr;
			innerErrorMessage.value = msg || null;
			innerLoading.value = false;
		};
		const promises = [];
		for (let i = 0; i < props.rules.length; i++) {
			const rule = props.rules[i];
			let res;
			if (typeof rule === "function") res = rule(val, testPattern);
			else if (typeof rule === "string") {
				if (testPattern[rule] === void 0) {
					console.error(`Unknown validation pattern rule: "${rule}"`);
					res = false;
				} else res = testPattern[rule](val);
			}
			if (res === false || typeof res === "string") {
				update(true, res);
				return false;
			} else if (res !== true && res !== void 0) promises.push(res);
		}
		if (promises.length === 0) {
			update(false);
			return true;
		}
		innerLoading.value = true;
		return Promise.all(promises).then((res) => {
			if (res === void 0 || !Array.isArray(res) || res.length === 0) {
				if (index === validateIndex) {
					update(false);
					revalidateIfStale();
				}
				return true;
			}
			const msg = res.find((r) => r === false || typeof r === "string");
			if (index === validateIndex) {
				update(msg !== void 0, msg);
				revalidateIfStale();
			}
			return msg === void 0;
		}, (err) => {
			if (index === validateIndex) {
				console.error(err);
				update(true);
				revalidateIfStale();
			}
			return false;
		});
	}
	const debouncedValidate = debounce(validate, 0);
	onBeforeUnmount(() => {
		unmounted = true;
		unwatchRules?.();
		debouncedValidate.cancel();
	});
	Object.assign(proxy, {
		resetValidation,
		validate
	});
	injectProp(proxy, "hasError", () => hasError.value);
	return {
		isDirtyModel,
		hasRules,
		hasError,
		errorMessage,
		validate,
		resetValidation
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-field/use-field.js
function fieldValueIsFilled(val) {
	return val !== void 0 && val !== null && String(val).length !== 0;
}
var useFieldProps = {
	...useDarkProps,
	...useValidateProps,
	label: String,
	stackLabel: Boolean,
	hint: String,
	hideHint: Boolean,
	prefix: String,
	suffix: String,
	labelColor: String,
	color: String,
	bgColor: String,
	filled: Boolean,
	outlined: Boolean,
	borderless: Boolean,
	standout: [Boolean, String],
	square: Boolean,
	loading: Boolean,
	labelSlot: Boolean,
	bottomSlots: Boolean,
	hideBottomSpace: Boolean,
	rounded: Boolean,
	dense: Boolean,
	itemAligned: Boolean,
	counter: Boolean,
	clearable: Boolean,
	clearIcon: String,
	disable: Boolean,
	readonly: Boolean,
	autofocus: Boolean,
	for: String,
	maxlength: [Number, String]
};
var useFieldEmits = [
	"update:modelValue",
	"clear",
	"focus",
	"blur"
];
function useFieldState({ requiredForAttr = true, tagProp, changeEvent = false } = {}) {
	const { props } = getCurrentInstance();
	const isDark = useDark(props, useQuasar());
	const targetUid = useId({
		required: requiredForAttr,
		getValue: () => props.for
	});
	return {
		requiredForAttr,
		changeEvent,
		tag: tagProp ? { get value() {
			return props.tag;
		} } : { value: "label" },
		isDark,
		editable: computed(() => !props.disable && !props.readonly),
		innerLoading: ref(false),
		focused: ref(false),
		hasPopupOpen: false,
		splitAttrs: useSplitAttrs(),
		targetUid,
		rootRef: shallowRef(null),
		targetRef: shallowRef(null),
		controlRef: shallowRef(null)
	};
}
var prependProps = {
	class: "q-field__prepend q-field__marginal row no-wrap items-center",
	key: "prepend",
	onClick: prevent
};
var appendProps = {
	class: "q-field__append q-field__marginal row no-wrap items-center",
	key: "append",
	onClick: prevent
};
var nativeControlSelector = "input:not([disabled]):not([type=\"hidden\"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), a[href], [tabindex]:not([disabled]), [contenteditable]:not([contenteditable=\"false\"])";
var controlContainerProps = { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" };
var prefixProps = { class: "q-field__prefix no-pointer-events row items-center" };
var suffixProps = { class: "q-field__suffix no-pointer-events row items-center" };
var innerProps = { class: "q-field__inner relative-position col self-stretch" };
var beforeProps = {
	class: "q-field__before q-field__marginal row no-wrap items-center",
	onClick: prevent
};
var afterProps = {
	class: "q-field__after q-field__marginal row no-wrap items-center",
	onClick: prevent
};
var noErrorAriaAttrs = {};
function hasCustomStandout(props, state) {
	return state.focused.value && typeof props.standout === "string" && props.standout.length !== 0;
}
function getInnerAppendNode(key, content) {
	return content === null ? null : h("div", {
		key,
		class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
	}, content);
}
function useField(state) {
	const { props, emit, slots, attrs, proxy } = getCurrentInstance();
	const $q = useQuasar();
	let focusoutTimer = null;
	if (state.hasValue === void 0) state.hasValue = computed(() => fieldValueIsFilled(props.modelValue));
	if (state.emitValue === void 0) state.emitValue = (value) => {
		emit("update:modelValue", value);
	};
	if (state.controlEvents === void 0) state.controlEvents = {
		onFocusin: onControlFocusin,
		onFocusout: onControlFocusout,
		onPopupShow: onControlPopupShow,
		onPopupHide: onControlPopupHide
	};
	Object.assign(state, {
		clearValue,
		onControlFocusin,
		onControlFocusout,
		focus
	});
	if (state.computedCounter === void 0) state.computedCounter = computed(() => {
		if (props.counter) {
			const len = typeof props.modelValue === "string" || typeof props.modelValue === "number" ? String(props.modelValue).length : Array.isArray(props.modelValue) ? props.modelValue.length : 0;
			const max = props.maxlength !== void 0 ? props.maxlength : props.maxValues;
			return len + (max !== void 0 ? " / " + max : "");
		}
	});
	const { isDirtyModel, hasRules, hasError, errorMessage, resetValidation } = useValidate(state.focused, state.innerLoading);
	const errorMessageId = computed(() => hasError.value && state.targetUid.value ? `${state.targetUid.value}_error` : void 0);
	function getErrorAriaAttrs(controlAttrs) {
		if (hasError.value !== true) return noErrorAriaAttrs;
		const acc = { "aria-invalid": "true" };
		if (errorMessageId.value !== void 0 && (!props.hideBottomSpace || props.counter || slots.counter !== void 0 || errorMessage.value !== null || slots.error !== void 0)) {
			acc["aria-errormessage"] = controlAttrs?.["aria-errormessage"] !== void 0 ? controlAttrs["aria-errormessage"] : errorMessageId.value;
			acc["aria-describedby"] = controlAttrs?.["aria-describedby"] !== void 0 ? `${controlAttrs["aria-describedby"]} ${errorMessageId.value}` : errorMessageId.value;
		}
		return acc;
	}
	Object.assign(state, {
		hasError,
		errorMessage,
		errorMessageId,
		getErrorAriaAttrs
	});
	const floatingLabel = state.floatingLabel !== void 0 ? computed(() => props.stackLabel || state.focused.value || state.floatingLabel.value) : computed(() => props.stackLabel || state.focused.value || state.hasValue.value);
	const shouldRenderBottom = computed(() => props.bottomSlots || props.hint !== void 0 || hasRules.value || props.counter || props.error !== null);
	const classes = computed(() => "q-field row no-wrap items-start q-field--" + (props.filled ? "filled" : props.outlined ? "outlined" : props.borderless ? "borderless" : props.standout ? "standout" : "standard") + (state.fieldClass !== void 0 ? ` ${state.fieldClass.value}` : "") + (props.rounded ? " q-field--rounded" : "") + (props.square ? " q-field--square" : "") + (floatingLabel.value ? " q-field--float" : "") + (hasLabel.value ? " q-field--labeled" : "") + (props.dense ? " q-field--dense" : "") + (props.itemAligned ? " q-field--item-aligned q-item-type" : "") + (state.isDark() ? " q-field--dark" : "") + (state.getControl === void 0 ? " q-field--auto-height" : "") + (state.focused.value ? " q-field--focused" : "") + (hasError.value ? " q-field--error" : hasCustomStandout(props, state) ? " q-field--standout-custom" : "") + (hasError.value || state.focused.value ? " q-field--highlighted" : "") + (!props.hideBottomSpace && shouldRenderBottom.value ? " q-field--with-bottom" : "") + (props.disable ? " q-field--disabled" : props.readonly ? " q-field--readonly" : ""));
	const contentClass = computed(() => "q-field__control relative-position row no-wrap" + (props.bgColor !== void 0 ? ` bg-${props.bgColor}` : "") + (hasError.value ? " text-negative" : hasCustomStandout(props, state) ? ` ${props.standout}` : props.color !== void 0 ? ` text-${props.color}` : ""));
	const hasLabel = computed(() => props.labelSlot || props.label !== void 0);
	const labelClass = computed(() => "q-field__label no-pointer-events absolute ellipsis" + (props.labelColor !== void 0 && !hasError.value ? ` text-${props.labelColor}` : ""));
	const controlSlotScope = computed(() => injectProp({
		id: state.targetUid.value,
		editable: state.editable.value,
		focused: state.focused.value,
		floatingLabel: floatingLabel.value,
		modelValue: props.modelValue,
		emitValue: state.emitValue,
		ariaInvalid: hasError.value === true ? "true" : void 0,
		ariaDescribedby: errorMessageId.value,
		ariaErrormessage: errorMessageId.value
	}, "field", () => state.rootRef.value));
	const attributes = computed(() => {
		const acc = {};
		if (state.targetUid.value) acc.for = state.targetUid.value;
		if (props.disable) acc["aria-disabled"] = "true";
		return acc;
	});
	function focusHandler() {
		const el = document.activeElement;
		let target = state.targetRef?.value;
		if (target && (el === null || el.id !== state.targetUid.value)) {
			if (!target.hasAttribute("tabindex")) target = target.querySelector("[tabindex]");
			if (target !== el) target?.focus({ preventScroll: true });
		}
	}
	function focus() {
		addFocusFn(focusHandler);
	}
	function onNativeFocus(e) {
		const wrapper = e.target;
		const bound = state.targetUid.value !== null ? document.getElementById(state.targetUid.value) : null;
		if (bound !== null && wrapper.contains(bound)) {
			bound.focus({ preventScroll: true });
			if (document.activeElement === bound) return;
		}
		for (const el of wrapper.querySelectorAll(nativeControlSelector)) {
			el.focus({ preventScroll: true });
			if (document.activeElement === el) return;
		}
	}
	function blur() {
		removeFocusFn(focusHandler);
		const el = document.activeElement;
		if (el !== null && state.rootRef.value.contains(el)) el.blur();
	}
	function onControlFocusin(e) {
		if (focusoutTimer !== null) {
			clearTimeout(focusoutTimer);
			focusoutTimer = null;
		}
		if (!props.disable && !state.focused.value) {
			state.focused.value = true;
			emit("focus", e);
		}
	}
	function onControlFocusout(e, then) {
		if (focusoutTimer !== null) clearTimeout(focusoutTimer);
		focusoutTimer = setTimeout(() => {
			focusoutTimer = null;
			if (document.hasFocus() && (state.hasPopupOpen || state.controlRef === void 0 || state.controlRef.value === null || state.controlRef.value.contains(document.activeElement))) return;
			if (state.focused.value) {
				state.focused.value = false;
				emit("blur", e);
			}
			then?.();
		}, 0);
	}
	function onControlPopupShow(e) {
		state.hasPopupOpen = true;
		onControlFocusin(e);
	}
	function onControlPopupHide(e) {
		state.hasPopupOpen = false;
		onControlFocusout(e);
	}
	function clearValue(e) {
		stopAndPrevent(e);
		if (!$q.platform.is.mobile) (state.targetRef?.value || state.rootRef.value).focus();
		else if (state.rootRef.value.contains(document.activeElement)) document.activeElement.blur();
		if (props.type === "file") state.inputRef.value.value = null;
		state.onClear?.();
		emit("update:modelValue", null);
		if (state.changeEvent) emit("change", null);
		emit("clear", props.modelValue);
		nextTick(() => {
			const isDirty = isDirtyModel.value;
			resetValidation();
			isDirtyModel.value = isDirty;
		});
	}
	function onClearableKeyup(evt) {
		if ([13, 32].includes(evt.keyCode)) clearValue(evt);
	}
	function getContent() {
		const node = [];
		if (slots.prepend !== void 0) node.push(h("div", prependProps, slots.prepend()));
		node.push(h("div", controlContainerProps, getControlContainer()));
		if (hasError.value && !props.noErrorIcon) node.push(getInnerAppendNode("error", [h(QIcon_default, {
			name: $q.iconSet.field.error,
			color: "negative"
		})]));
		const loadingContent = props.loading || state.innerLoading.value ? slots.loading !== void 0 ? slots.loading() : state.shouldHideLoadingIndicator?.() ? null : [h(QSpinner_default, { color: props.color })] : null;
		if (loadingContent !== null) node.push(getInnerAppendNode("inner-loading-append", loadingContent));
		else if (props.clearable && state.hasValue.value && state.editable.value) node.push(getInnerAppendNode("inner-clearable-append", [h(QIcon_default, {
			class: "q-field__focusable-action",
			name: props.clearIcon || $q.iconSet.field.clear,
			tabindex: 0,
			role: "button",
			"aria-hidden": "false",
			"aria-label": $q.lang.label.clear,
			onKeyup: onClearableKeyup,
			onClick: clearValue
		})]));
		if (slots.append !== void 0) node.push(h("div", appendProps, slots.append()));
		if (state.getInnerAppend !== void 0) node.push(getInnerAppendNode("inner-append", state.getInnerAppend()));
		if (state.getControlChild !== void 0) node.push(state.getControlChild());
		return node;
	}
	function getControlContainer() {
		const node = [];
		if (props.prefix !== void 0 && props.prefix !== null) node.push(h("div", prefixProps, props.prefix));
		if (state.getShadowControl !== void 0 && state.hasShadow.value) node.push(state.getShadowControl());
		if (hasLabel.value) node.push(h("div", { class: labelClass.value }, hSlot(slots.label, props.label)));
		if (state.getControl !== void 0) node.push(state.getControl());
		else if (slots.rawControl !== void 0) node.push(slots.rawControl());
		else if (slots.control !== void 0) node.push(h("div", {
			ref: state.targetRef,
			class: "q-field__native row",
			tabindex: -1,
			...state.splitAttrs.attributes.value,
			"data-autofocus": props.autofocus || void 0,
			onFocus: onNativeFocus
		}, slots.control(controlSlotScope.value)));
		if (props.suffix !== void 0 && props.suffix !== null) node.push(h("div", suffixProps, props.suffix));
		return node.concat(hSlot(slots.default));
	}
	let messageKey = null;
	let animateMessage = false;
	function getBottom() {
		let msg, key;
		if (hasError.value) {
			if (errorMessage.value !== null) {
				msg = [h("div", { role: "alert" }, errorMessage.value)];
				key = `q--slot-error-${errorMessage.value}`;
			} else {
				msg = hSlot(slots.error);
				key = "q--slot-error";
			}
		} else if (!props.hideHint || state.focused.value) {
			if (props.hint !== void 0) {
				msg = [h("div", props.hint)];
				key = `q--slot-hint-${props.hint}`;
			} else {
				msg = hSlot(slots.hint);
				key = "q--slot-hint";
			}
		}
		const hasCounter = props.counter || slots.counter !== void 0;
		if (props.hideBottomSpace && !hasCounter && msg === void 0) return;
		if (key !== messageKey) {
			animateMessage = messageKey !== null;
			messageKey = key;
		}
		return h("div", {
			class: "q-field__bottom row items-start q-field__bottom--" + (props.hideBottomSpace ? "stale" : "animated"),
			onClick: prevent
		}, [h("div", {
			key,
			id: hasError.value === true ? errorMessageId.value : void 0,
			class: "q-field__messages col" + (animateMessage && !props.hideBottomSpace ? " q-field__messages--animated" : "")
		}, msg), hasCounter ? h("div", { class: "q-field__counter" }, slots.counter !== void 0 ? slots.counter() : state.computedCounter.value) : null]);
	}
	let shouldActivate = false;
	onDeactivated(() => {
		shouldActivate = true;
	});
	onActivated(() => {
		if (shouldActivate && props.autofocus) proxy.focus();
	});
	if (props.autofocus) onMounted(() => {
		proxy.focus();
	});
	onBeforeUnmount(() => {
		if (focusoutTimer !== null) clearTimeout(focusoutTimer);
	});
	Object.assign(proxy, {
		focus,
		blur
	});
	return function renderField() {
		const labelAttrs = state.getControl === void 0 && slots.control === void 0 ? {
			...state.splitAttrs.attributes.value,
			"data-autofocus": props.autofocus || void 0,
			...attributes.value
		} : attributes.value;
		return h(state.tag.value, {
			ref: state.rootRef,
			class: [classes.value, attrs.class],
			style: attrs.style,
			...labelAttrs
		}, [
			slots.before !== void 0 ? h("div", beforeProps, slots.before()) : null,
			h("div", innerProps, [h("div", {
				ref: state.controlRef,
				class: contentClass.value,
				tabindex: -1,
				...state.controlEvents
			}, getContent()), shouldRenderBottom.value ? getBottom() : null]),
			slots.after !== void 0 ? h("div", afterProps, slots.after()) : null
		]);
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/input/use-mask.js
var NAMED_MASKS = {
	date: "####/##/##",
	datetime: "####/##/## ##:##",
	time: "##:##",
	fulltime: "##:##:##",
	phone: "(###) ### - ####",
	card: "#### #### #### ####"
};
var patternTesters = {
	"[\\d]": (char) => {
		const code = char.codePointAt(0);
		return code > 47 && code < 58;
	},
	"[a-zA-Z]": (char) => {
		const code = char.codePointAt(0);
		return code > 64 && code < 91 || code > 96 && code < 123;
	},
	"[0-9a-zA-Z]": (char) => {
		const code = char.codePointAt(0);
		return code > 47 && code < 58 || code > 64 && code < 91 || code > 96 && code < 123;
	}
};
var { tokenMap: DEFAULT_TOKEN_MAP, tokenKeys: DEFAULT_TOKEN_MAP_KEYS } = /*#__PURE__*/ getTokenMap({
	"#": {
		pattern: "[\\d]",
		negate: "[^\\d]"
	},
	S: {
		pattern: "[a-zA-Z]",
		negate: "[^a-zA-Z]"
	},
	N: {
		pattern: "[0-9a-zA-Z]",
		negate: "[^0-9a-zA-Z]"
	},
	A: {
		pattern: "[a-zA-Z]",
		negate: "[^a-zA-Z]",
		transform: (v) => v.toLocaleUpperCase()
	},
	a: {
		pattern: "[a-zA-Z]",
		negate: "[^a-zA-Z]",
		transform: (v) => v.toLocaleLowerCase()
	},
	X: {
		pattern: "[0-9a-zA-Z]",
		negate: "[^0-9a-zA-Z]",
		transform: (v) => v.toLocaleUpperCase()
	},
	x: {
		pattern: "[0-9a-zA-Z]",
		negate: "[^0-9a-zA-Z]",
		transform: (v) => v.toLocaleLowerCase()
	}
});
function getTokenMap(tokens) {
	const tokenKeys = Object.keys(tokens);
	const tokenMap = {};
	tokenKeys.forEach((key) => {
		const entry = tokens[key];
		let test;
		if (Object.hasOwn(patternTesters, entry.pattern)) test = patternTesters[entry.pattern];
		else {
			const regex = new RegExp(entry.pattern);
			test = (char) => regex.test(char);
		}
		tokenMap[key] = {
			...entry,
			test
		};
	});
	return {
		tokenMap,
		tokenKeys
	};
}
function getTokenRegexMask(keys) {
	return new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + keys.join("") + "])|(.)", "g");
}
var EDIT_INPUT_TYPES = [
	"insertText",
	"deleteContentBackward",
	"deleteContentForward",
	"deleteWordBackward",
	"deleteWordForward",
	"deleteByCut"
];
var escRegex = /[.*+?^${}()|[\]\\]/g;
var DEFAULT_TOKEN_REGEX_MASK = /*#__PURE__*/ getTokenRegexMask(DEFAULT_TOKEN_MAP_KEYS);
var MARKER = String.fromCodePoint(1);
var useMaskProps = {
	mask: String,
	reverseFillMask: Boolean,
	fillMask: [Boolean, String],
	unmaskedValue: Boolean,
	maskTokens: Object
};
function useMask(props, emit, emitValue, inputRef, cancelPendingValueEmission) {
	let maskMarked, maskReplaced, computedMask, computedUnmask, pastedTextStart, selectionAnchor, innerValueDataLen;
	const tokens = computed(() => {
		if (props.maskTokens === void 0 || props.maskTokens === null) return {
			tokenMap: DEFAULT_TOKEN_MAP,
			tokenRegexMask: DEFAULT_TOKEN_REGEX_MASK
		};
		const { tokenMap: customTokens } = getTokenMap(props.maskTokens);
		const tokenMap = {
			...DEFAULT_TOKEN_MAP,
			...customTokens
		};
		return {
			tokenMap,
			tokenRegexMask: getTokenRegexMask(Object.keys(tokenMap))
		};
	});
	const hasMask = ref(null);
	const innerValue = ref(getInitialMaskedValue());
	function getIsTypeText() {
		return props.autogrow || [
			"textarea",
			"text",
			"search",
			"url",
			"tel",
			"password"
		].includes(props.type);
	}
	watch(() => props.type + props.autogrow, updateMaskInternals);
	watch(() => props.mask, (v) => {
		if (v !== void 0) updateMaskValue(innerValue.value, true);
		else {
			const val = unmaskValue(hasMask.value ? stripFillPadding(innerValue.value, innerValueDataLen) : innerValue.value);
			updateMaskInternals();
			if (props.modelValue !== val) emit("update:modelValue", val);
		}
	});
	watch(() => props.fillMask + props.reverseFillMask, () => {
		if (hasMask.value) updateMaskValue(innerValue.value, true);
	});
	watch(() => props.unmaskedValue, () => {
		if (hasMask.value) updateMaskValue(innerValue.value);
	});
	watch(() => props.maskTokens, () => {
		if (hasMask.value) updateMaskValue(innerValue.value, true);
	}, { deep: true });
	function getInitialMaskedValue() {
		updateMaskInternals();
		if (hasMask.value) {
			const masked = maskValue(unmaskValue(props.modelValue));
			innerValueDataLen = masked.length;
			return props.fillMask !== false ? fillWithMask(masked) : masked;
		}
		innerValueDataLen = 0;
		return props.modelValue;
	}
	function getPaddedMaskMarked(size) {
		if (size < maskMarked.length) return maskMarked.slice(-size);
		let pad = "", localMaskMarked = maskMarked;
		const padPos = localMaskMarked.indexOf(MARKER);
		if (padPos !== -1) {
			for (let i = size - localMaskMarked.length; i > 0; i--) pad += MARKER;
			localMaskMarked = localMaskMarked.slice(0, padPos) + pad + localMaskMarked.slice(padPos);
		}
		return localMaskMarked;
	}
	function updateMaskInternals() {
		hasMask.value = props.mask !== void 0 && props.mask.length !== 0 && getIsTypeText();
		if (!hasMask.value) {
			computedUnmask = void 0;
			maskMarked = "";
			maskReplaced = "";
			return;
		}
		const localComputedMask = NAMED_MASKS[props.mask] === void 0 ? props.mask : NAMED_MASKS[props.mask], fillChar = typeof props.fillMask === "string" && props.fillMask.length !== 0 ? props.fillMask.slice(0, 1) : "_", fillCharEscaped = fillChar.replace(escRegex, String.raw`\$&`), unmask = [], extract = [], mask = [];
		let firstMatch = props.reverseFillMask, unmaskChar = "", negateChar = "";
		localComputedMask.replace(tokens.value.tokenRegexMask, (_, char1, esc, token, char2) => {
			if (token !== void 0) {
				const c = tokens.value.tokenMap[token];
				mask.push(c);
				negateChar = c.negate;
				if (firstMatch) {
					extract.push({
						c,
						overflow: true
					});
					firstMatch = false;
				}
				extract.push({ c });
				return;
			}
			if (esc !== void 0) {
				unmaskChar = "\\" + (esc === "\\" ? "" : esc);
				mask.push(esc);
			} else {
				const c = char1 !== void 0 ? char1 : char2;
				unmaskChar = c === "\\" ? String.raw`\\\\` : c.replace(escRegex, String.raw`\\$&`);
				mask.push(c);
			}
			unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
		});
		const maskTokenPatterns = [...new Set(mask.filter((v) => typeof v !== "string").map(({ pattern }) => pattern))], unmaskMatcher = new RegExp("^" + unmask.join("") + "(" + (unmaskChar === "" ? "." : "[^" + unmaskChar + "]") + "+)?" + (unmaskChar === "" ? "" : "[" + unmaskChar + "]*") + "$"), extractLast = extract.length - 1, separator = maskTokenPatterns.length === 1 ? negateChar : "(?:" + maskTokenPatterns.map((pattern) => "(?!" + pattern + ")").join("") + String.raw`[\s\S])`, getExtractSource = ({ c, overflow }) => overflow === true ? "(?:" + separator + "+)?(" + c.pattern + "+)?(?:" + separator + "+)?(" + c.pattern + "+)?" : "(?:" + separator + "+)?(" + c.pattern + ")?", extractMatcher = extract.map((entry, index) => {
			const re = getExtractSource(entry);
			if (index === 0 && props.reverseFillMask) return new RegExp("^" + fillCharEscaped + "*" + re);
			else if (index === extractLast) return new RegExp("^" + re + "(" + (negateChar === "" ? "." : negateChar) + "+)?" + (props.reverseFillMask ? "$" : fillCharEscaped + "*"));
			return new RegExp("^" + re);
		});
		computedMask = mask;
		computedUnmask = (val) => {
			const unmaskMatch = unmaskMatcher.exec(props.reverseFillMask ? val : val.slice(0, mask.length + 1));
			if (unmaskMatch !== null) val = unmaskMatch.slice(1).join("");
			const extractMatch = [], extractMatcherLength = extractMatcher.length;
			for (let i = 0, str = val; i < extractMatcherLength; i++) {
				const m = extractMatcher[i].exec(str);
				if (m === null) break;
				str = str.slice(m.shift().length);
				extractMatch.push(...m);
			}
			if (extractMatch.length !== 0) return extractMatch.join("");
			return val;
		};
		maskMarked = mask.map((v) => typeof v === "string" ? v : MARKER).join("");
		maskReplaced = maskMarked.split(MARKER).join(fillChar);
	}
	function getDataCharTester(str, dataLen) {
		const strLen = str.length, localMaskMarked = props.reverseFillMask ? getPaddedMaskMarked(strLen) : maskMarked, defOffset = props.reverseFillMask ? computedMask.length - strLen : 0, fillFrom = props.reverseFillMask ? 0 : Math.min(dataLen, strLen), fillTo = props.reverseFillMask ? strLen - dataLen : strLen;
		return (i) => {
			if (localMaskMarked[i] !== MARKER || i >= fillFrom && i < fillTo) return false;
			const maskDef = computedMask[defOffset + i];
			return maskDef === void 0 || typeof maskDef === "string" ? true : maskDef.test(str[i]);
		};
	}
	function countDataChars(str, position, dataLen) {
		const isDataChar = getDataCharTester(str, dataLen);
		let count = 0;
		for (let i = 0; i < position; i++) if (isDataChar(i)) count++;
		return count;
	}
	function updateMaskValue(rawVal, updateMaskInternalsFlag, inputType) {
		const inp = inputRef.value, end = inp?.selectionEnd ?? 0, endReverse = inp === null ? 0 : inp.value.length - end, unmasked = updateMaskInternalsFlag !== true && typeof innerValue.value === "string" && EDIT_INPUT_TYPES.includes(inputType) ? unmaskEditValue(innerValue.value, innerValueDataLen, rawVal, inputType) : unmaskValue(rawVal);
		let dataBeforeCaret;
		if (updateMaskInternalsFlag === true && inp !== null && maskMarked.length !== 0) dataBeforeCaret = countDataChars(inp.value, end, innerValueDataLen);
		if (updateMaskInternalsFlag === true) updateMaskInternals();
		const preMasked = maskValue(unmasked, updateMaskInternalsFlag), masked = props.fillMask !== false ? fillWithMask(preMasked) : preMasked, maskedDataLen = preMasked.length, changed = innerValue.value !== masked, dataChanged = changed || maskedDataLen !== innerValueDataLen;
		innerValueDataLen = maskedDataLen;
		const rendersEmpty = props.fillMask !== false && maskedDataLen === 0;
		if (inp !== null && inp.value !== masked) inp.value = masked;
		if (changed) innerValue.value = masked;
		if (inp !== null && document.activeElement === inp) nextTick(() => {
			if (rendersEmpty) {
				const cursor = props.reverseFillMask ? maskReplaced.length : 0;
				inp.setSelectionRange(cursor, cursor, "forward");
				return;
			}
			if (dataBeforeCaret !== void 0) {
				let cursor = 0, found = 0;
				while (cursor < masked.length && found < dataBeforeCaret) {
					found = countDataChars(masked, cursor + 1, maskedDataLen);
					cursor++;
				}
				inp.setSelectionRange(cursor, cursor, "forward");
				return;
			}
			if (inputType === "insertFromPaste" && !props.reverseFillMask) {
				const maxEnd = inp.selectionEnd;
				let cursor = end - 1;
				for (let i = pastedTextStart; i <= cursor && i < maxEnd; i++) if (maskMarked[i] !== MARKER) cursor++;
				moveCursor.right(inp, cursor);
				return;
			}
			if (["deleteContentBackward", "deleteContentForward"].includes(inputType)) {
				const cursor = props.reverseFillMask ? end === 0 ? masked.length > preMasked.length ? 1 : 0 : Math.max(0, masked.length - (rendersEmpty ? 0 : Math.min(preMasked.length, endReverse) + 1)) + 1 : end;
				inp.setSelectionRange(cursor, cursor, "forward");
				return;
			}
			if (props.reverseFillMask) {
				if (dataChanged) {
					const cursor = Math.max(0, masked.length - (rendersEmpty ? 0 : Math.min(preMasked.length, endReverse + 1)));
					if (cursor === 1 && end === 1) inp.setSelectionRange(cursor, cursor, "forward");
					else moveCursor.rightReverse(inp, cursor);
				} else {
					const cursor = masked.length - endReverse;
					inp.setSelectionRange(cursor, cursor, "backward");
				}
			} else if (dataChanged) {
				const cursor = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, end) - 1);
				moveCursor.right(inp, cursor);
			} else {
				const cursor = end - 1;
				moveCursor.right(inp, cursor);
			}
		});
		const val = props.unmaskedValue ? unmaskValue(preMasked) : masked;
		if (String(props.modelValue) !== val && (props.modelValue !== null || val !== "")) emitValue(val, true);
		else if (cancelPendingValueEmission !== void 0) cancelPendingValueEmission();
	}
	function moveCursorForPaste(inp, start, end) {
		const preMasked = maskValue(unmaskValue(inp.value));
		start = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, start));
		pastedTextStart = start;
		inp.setSelectionRange(start, end, "forward");
	}
	const moveCursor = {
		left(inp, cursor) {
			const noMarkBefore = !maskMarked.slice(cursor - 1).includes(MARKER);
			let i = Math.max(0, cursor - 1);
			for (; i >= 0; i--) if (maskMarked[i] === MARKER) {
				cursor = i;
				if (noMarkBefore) cursor++;
				break;
			}
			if (i < 0 && maskMarked[cursor] !== void 0 && maskMarked[cursor] !== MARKER) return moveCursor.right(inp, 0);
			if (cursor >= 0) inp.setSelectionRange(cursor, cursor, "backward");
		},
		right(inp, cursor) {
			const limit = inp.value.length;
			let i = Math.min(limit, cursor + 1);
			for (; i <= limit; i++) if (maskMarked[i] === MARKER) {
				cursor = i;
				break;
			} else if (maskMarked[i - 1] === MARKER) cursor = i;
			if (i > limit && maskMarked[cursor - 1] !== void 0 && maskMarked[cursor - 1] !== MARKER) return moveCursor.left(inp, limit);
			inp.setSelectionRange(cursor, cursor, "forward");
		},
		leftReverse(inp, cursor) {
			const localMaskMarked = getPaddedMaskMarked(inp.value.length);
			let i = Math.max(0, cursor - 1);
			for (; i >= 0; i--) if (localMaskMarked[i - 1] === MARKER) {
				cursor = i;
				break;
			} else if (localMaskMarked[i] === MARKER) {
				cursor = i;
				if (i === 0) break;
			}
			if (i < 0 && localMaskMarked[cursor] !== void 0 && localMaskMarked[cursor] !== MARKER) return moveCursor.rightReverse(inp, 0);
			if (cursor >= 0) inp.setSelectionRange(cursor, cursor, "backward");
		},
		rightReverse(inp, cursor) {
			const limit = inp.value.length, localMaskMarked = getPaddedMaskMarked(limit), noMarkBefore = !localMaskMarked.slice(0, cursor + 1).includes(MARKER);
			let i = Math.min(limit, cursor + 1);
			for (; i <= limit; i++) if (localMaskMarked[i - 1] === MARKER) {
				cursor = i;
				if (cursor > 0 && noMarkBefore) cursor--;
				break;
			}
			if (i > limit && localMaskMarked[cursor - 1] !== void 0 && localMaskMarked[cursor - 1] !== MARKER) return moveCursor.leftReverse(inp, limit);
			inp.setSelectionRange(cursor, cursor, "forward");
		}
	};
	function onMaskedClick(e) {
		emit("click", e);
		selectionAnchor = void 0;
	}
	function onMaskedKeydown(e) {
		emit("keydown", e);
		if (e.defaultPrevented || e.altKey || shouldIgnoreKey(e)) return;
		const inp = inputRef.value, start = inp.selectionStart, end = inp.selectionEnd;
		if (!e.shiftKey) selectionAnchor = void 0;
		if (e.keyCode === 37 || e.keyCode === 39) {
			if (e.shiftKey && selectionAnchor === void 0) selectionAnchor = inp.selectionDirection === "forward" ? start : end;
			const fn = moveCursor[(e.keyCode === 39 ? "right" : "left") + (props.reverseFillMask ? "Reverse" : "")];
			e.preventDefault();
			fn(inp, selectionAnchor === start ? end : start);
			if (e.shiftKey) {
				const cursor = inp.selectionStart;
				inp.setSelectionRange(Math.min(selectionAnchor, cursor), Math.max(selectionAnchor, cursor), "forward");
			}
		} else if (e.keyCode === 8 && !props.reverseFillMask && start === end) {
			moveCursor.left(inp, start);
			inp.setSelectionRange(inp.selectionStart, end, "backward");
		} else if (e.keyCode === 46 && props.reverseFillMask && start === end) {
			moveCursor.rightReverse(inp, end);
			inp.setSelectionRange(start, inp.selectionEnd, "forward");
		}
	}
	function maskValue(val, updateMaskInternalsFlag) {
		if (val === void 0 || val === null || val === "") return "";
		if (props.reverseFillMask) return maskValueReverse(val, updateMaskInternalsFlag);
		const mask = computedMask;
		let valIndex = 0, output = "";
		for (let maskIndex = 0; maskIndex < mask.length; maskIndex++) {
			const valChar = val[valIndex], maskDef = mask[maskIndex];
			if (typeof maskDef === "string") {
				output += maskDef;
				if (updateMaskInternalsFlag === true && valChar === maskDef) valIndex++;
			} else if (valChar !== void 0 && maskDef.test(valChar)) {
				output += maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar;
				valIndex++;
			} else return output;
		}
		return output;
	}
	function maskValueReverse(val, updateMaskInternalsFlag) {
		const mask = computedMask, firstTokenIndex = maskMarked.indexOf(MARKER);
		let valIndex = val.length - 1, output = "", pendingLiterals = "";
		for (let maskIndex = mask.length - 1; maskIndex >= 0 && valIndex !== -1; maskIndex--) {
			const maskDef = mask[maskIndex];
			let valChar = val[valIndex];
			if (typeof maskDef === "string") {
				pendingLiterals = maskDef + pendingLiterals;
				if (updateMaskInternalsFlag === true && valChar === maskDef) valIndex--;
			} else if (valChar !== void 0 && maskDef.test(valChar)) {
				output = pendingLiterals + output;
				pendingLiterals = "";
				do {
					output = (maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar) + output;
					valIndex--;
					valChar = val[valIndex];
				} while (firstTokenIndex === maskIndex && valChar !== void 0 && maskDef.test(valChar));
			} else return output;
		}
		return output;
	}
	function unmaskEditValue(prev, prevDataLen, val, inputType) {
		const prevLen = prev.length, valLen = val.length, minLen = Math.min(prevLen, valLen);
		let start = 0;
		while (start < minLen && prev[start] === val[start]) start++;
		let end = 0;
		while (end < minLen - start && prev[prevLen - 1 - end] === val[valLen - 1 - end]) end++;
		const dataAt = getDataCharTester(prev, prevDataLen);
		let before = "", after = "";
		for (let i = 0; i < start; i++) if (dataAt(i)) before += prev[i];
		for (let i = prevLen - end; i < prevLen; i++) if (dataAt(i)) after += prev[i];
		let inserted = "";
		const rawInserted = val.slice(start, valLen - end);
		if (rawInserted.length !== 0) {
			if (props.reverseFillMask) {
				for (const char of rawInserted) if (computedMask.some((maskDef) => typeof maskDef !== "string" && maskDef.test(char))) inserted += char;
			} else {
				const tokenDefs = computedMask.filter((maskDef) => typeof maskDef !== "string");
				let slot = before.length;
				for (const char of rawInserted) if (tokenDefs[slot] !== void 0 && tokenDefs[slot].test(char)) {
					inserted += char;
					slot++;
				}
			}
		} else if (!props.reverseFillMask && start + end < prevLen) {
			let deletedData = false;
			for (let i = start; i < prevLen - end; i++) if (dataAt(i)) {
				deletedData = true;
				break;
			}
			if (!deletedData) {
				if (inputType === "deleteContentForward") after = after.slice(1);
				else before = before.slice(0, -1);
			}
		}
		return before + inserted + after;
	}
	function unmaskValue(val) {
		return typeof val !== "string" || computedUnmask === void 0 ? typeof val === "number" ? computedUnmask(String(val)) : val : computedUnmask(val);
	}
	function stripFillPadding(str, dataLen) {
		if (dataLen >= str.length) return str;
		return props.reverseFillMask ? str.slice(str.length - dataLen) : str.slice(0, dataLen);
	}
	function fillWithMask(val) {
		if (maskReplaced.length - val.length <= 0) return val;
		return props.reverseFillMask && val.length !== 0 ? maskReplaced.slice(0, -val.length) + val : val + maskReplaced.slice(val.length);
	}
	return {
		innerValue,
		hasMask,
		moveCursorForPaste,
		updateMaskValue,
		onMaskedKeydown,
		onMaskedClick
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/input/use-autogrow.js
/**
* Returns adjustHeight on the JS path only (undefined on the CSS path,
* which is also where a DOM-less import lands: jsdom and friends have
* no CSS global, and this runs at import time, not per instance).
* The seam the component tests re-mock to force the JS fallback per
* test (through the exported createAdjustHeightFn()).
*/
var useAutogrow = typeof CSS === "undefined" || CSS.supports("field-sizing", "content") ? void 0 : createAdjustHeightFn;
/**
* The measuring autogrow for browsers without CSS field-sizing:
* collapses the textarea to 1px, reads its scrollHeight and writes it
* back as the inline height. Runs on mount and on the autogrow/dense
* prop changes by itself; returns the routine for the call sites that
* must trigger it on their own schedule (input, model changes,
* autofill animationend).
*/
function createAdjustHeightFn(props, attrs, inputRef, $q) {
	let frameId = null;
	function cancelPendingFrame() {
		if (frameId !== null) {
			cancelAnimationFrame(frameId);
			frameId = null;
		}
	}
	function adjustHeight() {
		if (frameId !== null) return;
		frameId = requestAnimationFrame(() => {
			frameId = null;
			const inp = inputRef.value;
			if (inp !== null) {
				const parentStyle = inp.parentNode.style;
				const { scrollTop } = inp;
				const { overflowY, maxHeight } = $q.platform.is.firefox ? {} : window.getComputedStyle(inp);
				const changeOverflow = overflowY !== void 0 && overflowY !== "scroll";
				if (changeOverflow) inp.style.overflowY = "hidden";
				parentStyle.marginBottom = inp.scrollHeight - 1 + "px";
				inp.style.height = "1px";
				inp.style.height = inp.scrollHeight + "px";
				if (changeOverflow) inp.style.overflowY = Number.parseInt(maxHeight, 10) < inp.scrollHeight ? "auto" : "hidden";
				parentStyle.marginBottom = "";
				inp.scrollTop = scrollTop;
			}
		});
	}
	watch(() => props.autogrow, (val) => {
		if (val) nextTick(adjustHeight);
		else if (inputRef.value !== null) {
			cancelPendingFrame();
			const { style } = inputRef.value;
			style.overflowY = "";
			style.height = attrs.rows > 0 ? "auto" : "";
		}
	});
	watch(() => props.dense, () => {
		if (props.autogrow) nextTick(adjustHeight);
	});
	onMounted(() => {
		if (props.autogrow) adjustHeight();
	});
	onBeforeUnmount(cancelPendingFrame);
	return adjustHeight;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/use-form/private.use-form.js
var useFormProps = { name: String };
function useFormInputNameAttr(props) {
	return () => props.name || props.for;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-file/use-file-dom-props.js
function useFileDomProps(props, typeGuard) {
	function getFormDomProps() {
		const model = props.modelValue;
		try {
			const dt = new DataTransfer();
			if (Object(model) === model) ("length" in model ? [...model] : [model]).forEach((file) => {
				dt.items.add(file);
			});
			return { files: dt.files };
		} catch {
			return { files: void 0 };
		}
	}
	return typeGuard ? computed(() => {
		if (props.type !== "file") return;
		return getFormDomProps();
	}) : computed(getFormDomProps);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-key-composition/use-key-composition.js
var isJapanese = /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFF9F\u4E00-\u9FAF\u3400-\u4DBF]/;
var isChinese = /[\u4E00-\u9FFF\u3400-\u4DBF\u{20000}-\u{2A6DF}\u{2A700}-\u{2B73F}\u{2B740}-\u{2B81F}\u{2B820}-\u{2CEAF}\uF900-\uFAFF\u3300-\u33FF\uFE30-\uFE4F\uF900-\uFAFF\u{2F800}-\u{2FA1F}]/u;
var isKorean = /[\u3131-\u314E\u314F-\u3163\uAC00-\uD7A3]/;
var isPlainText = /[a-z0-9_ -]$/i;
function useKeyComposition(onInput) {
	return function onComposition(e) {
		if (e.type === "compositionend" || e.type === "change") {
			if (!e.target.qComposing) return;
			e.target.qComposing = false;
			onInput(e);
		} else if (e.type === "compositionupdate" && !e.target.qComposing && typeof e.data === "string") {
			if (client.is.firefox ? !isPlainText.test(e.data) : isJapanese.test(e.data) || isChinese.test(e.data) || isKorean.test(e.data)) e.target.qComposing = true;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/input/QInput.js
var QInput_default = /*#__PURE__*/ createComponent({
	name: "QInput",
	inheritAttrs: false,
	props: {
		...useFieldProps,
		...useMaskProps,
		...useFormProps,
		modelValue: [
			String,
			Number,
			FileList
		],
		modelModifiers: Object,
		shadowText: String,
		type: {
			type: String,
			default: "text"
		},
		debounce: [String, Number],
		autogrow: Boolean,
		inputClass: [
			Array,
			String,
			Object
		],
		inputStyle: [
			Array,
			String,
			Object
		]
	},
	emits: [
		...useFieldEmits,
		"paste",
		"change",
		"keydown",
		"click",
		"animationend"
	],
	setup(props, { emit, attrs }) {
		const { proxy } = getCurrentInstance();
		const $q = useQuasar();
		const temp = {};
		let emitCachedValue = NaN, typedNumber = false, stopValueWatcher = false, emitTimer = null, emitValueFn;
		const inputRef = shallowRef(null);
		const nameProp = useFormInputNameAttr(props);
		const { innerValue, hasMask, moveCursorForPaste, updateMaskValue, onMaskedKeydown, onMaskedClick } = useMask(props, emit, emitValue, inputRef, () => {
			cancelPendingValueEmission();
			delete temp.value;
		});
		const formDomProps = useFileDomProps(props, true);
		const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
		const onKeyComposition = useKeyComposition(onInput);
		function onComposition(e) {
			if (hasMask.value && e.type === "compositionstart") {
				e.target.qComposing = true;
				return;
			}
			onKeyComposition(e);
		}
		const state = useFieldState({ changeEvent: true });
		const isTextarea = computed(() => props.type === "textarea" || props.autogrow);
		const adjustHeightViaJS = useAutogrow?.(props, attrs, inputRef, $q);
		const isTypeText = computed(() => isTextarea.value || [
			"text",
			"search",
			"url",
			"tel",
			"password"
		].includes(props.type));
		const onEvents = computed(() => {
			const evt = {
				...state.splitAttrs.listeners.value,
				onInput,
				onPaste,
				onChange,
				onBlur: onFinishEditing,
				onFocus: stop
			};
			evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
			if (hasMask.value) {
				evt.onKeydown = onMaskedKeydown;
				evt.onClick = onMaskedClick;
			}
			if (adjustHeightViaJS && props.autogrow) evt.onAnimationend = onAnimationend;
			return evt;
		});
		const inputAttrs = computed(() => {
			const acc = {
				tabindex: 0,
				"data-autofocus": props.autofocus || void 0,
				rows: props.type === "textarea" ? 6 : void 0,
				"aria-label": props.label,
				name: nameProp(),
				...state.splitAttrs.attributes.value,
				id: state.targetUid.value,
				maxlength: props.maxlength,
				disabled: props.disable,
				readonly: props.readonly
			};
			if (!isTextarea.value) acc.type = props.type;
			if (props.autogrow) acc.rows = 1;
			return acc;
		});
		watch(() => props.type, () => {
			if (inputRef.value) inputRef.value.value = props.modelValue;
		});
		watch(() => props.modelValue, (v) => {
			if (emitValueFn !== void 0) {
				cancelPendingValueEmission();
				typedNumber = false;
				stopValueWatcher = false;
				delete temp.value;
			}
			if (hasMask.value) {
				if (stopValueWatcher) {
					stopValueWatcher = false;
					if (String(v) === emitCachedValue) return;
				}
				updateMaskValue(v);
			} else if (innerValue.value !== v) {
				innerValue.value = v;
				if (props.type === "number" && Object.hasOwn(temp, "value")) {
					if (typedNumber) typedNumber = false;
					else delete temp.value;
				}
				if (props.modelModifiers?.trim === true && Object.hasOwn(temp, "value") && (typeof temp.value !== "string" || temp.value.trim() !== v)) delete temp.value;
			}
			if (adjustHeightViaJS && props.autogrow) nextTick(adjustHeightViaJS);
		});
		function focusHandler() {
			const el = document.activeElement;
			if (inputRef.value !== null && inputRef.value !== el && (el === null || el.id !== state.targetUid.value)) inputRef.value.focus({ preventScroll: true });
		}
		function focus() {
			addFocusFn(focusHandler);
		}
		function blur() {
			removeFocusFn(focusHandler);
			const el = document.activeElement;
			if (el !== null && state.rootRef.value.contains(el)) el.blur();
		}
		function select() {
			inputRef.value?.select();
		}
		function onPaste(e) {
			if (hasMask.value && props.reverseFillMask !== true) {
				const inp = e.target;
				moveCursorForPaste(inp, inp.selectionStart, inp.selectionEnd);
			}
			emit("paste", e);
		}
		function onInput(e) {
			if (!e || !e.target) return;
			if (props.type === "file") {
				emit("update:modelValue", e.target.files);
				return;
			}
			const val = e.target.value;
			if (e.target.qComposing) {
				temp.value = val;
				return;
			}
			if (hasMask.value) updateMaskValue(val, false, e.inputType);
			else {
				if (props.modelModifiers?.trim === true) temp.value = val;
				emitValue(val);
				if (isTypeText.value && e.target === document.activeElement) {
					const { selectionStart, selectionEnd } = e.target;
					if (selectionStart !== void 0 && selectionEnd !== void 0) nextTick(() => {
						if (e.target === document.activeElement && val.indexOf(e.target.value) === 0) e.target.setSelectionRange(selectionStart, selectionEnd);
					});
				}
			}
			if (adjustHeightViaJS && props.autogrow) adjustHeightViaJS();
		}
		function onAnimationend(e) {
			emit("animationend", e);
			adjustHeightViaJS();
		}
		function emitValue(val, stopWatcher) {
			emitValueFn = () => {
				emitTimer = null;
				if (props.type !== "number" && (props.modelModifiers?.trim !== true || hasMask.value) && Object.hasOwn(temp, "value")) delete temp.value;
				if (props.modelValue !== val && emitCachedValue !== val) {
					emitCachedValue = val;
					if (stopWatcher === true) stopValueWatcher = true;
					emit("update:modelValue", val);
					nextTick(() => {
						if (emitCachedValue === val) emitCachedValue = NaN;
					});
				}
				emitValueFn = void 0;
			};
			if (props.type === "number") {
				typedNumber = true;
				temp.value = val;
			}
			const holdTemp = () => {
				if (hasMask.value) delete temp.value;
				else temp.value = val;
			};
			if (props.modelModifiers?.lazy === true) holdTemp();
			else if (props.debounce !== void 0) {
				if (emitTimer !== null) clearTimeout(emitTimer);
				holdTemp();
				emitTimer = setTimeout(emitValueFn, props.debounce);
			} else emitValueFn();
		}
		function cancelPendingValueEmission() {
			if (emitTimer !== null) {
				clearTimeout(emitTimer);
				emitTimer = null;
			}
			emitValueFn = void 0;
		}
		function onClear() {
			cancelPendingValueEmission();
			typedNumber = false;
			stopValueWatcher = false;
			delete temp.value;
		}
		function onChange(e) {
			onComposition(e);
			if (emitTimer !== null) {
				clearTimeout(emitTimer);
				emitTimer = null;
			}
			emitValueFn?.();
			emit("change", e.target.value);
		}
		function onFinishEditing(e) {
			if (e !== void 0) stop(e);
			if (emitTimer !== null) {
				clearTimeout(emitTimer);
				emitTimer = null;
			}
			emitValueFn?.();
			typedNumber = false;
			stopValueWatcher = false;
			delete temp.value;
			if (props.type !== "file") setTimeout(() => {
				if (inputRef.value !== null) inputRef.value.value = innerValue.value !== void 0 ? innerValue.value : "";
			}, 0);
		}
		function getCurValue() {
			return Object.hasOwn(temp, "value") ? temp.value : innerValue.value !== void 0 ? innerValue.value : "";
		}
		onBeforeUnmount(() => {
			onFinishEditing();
		});
		Object.assign(state, {
			innerValue,
			fieldClass: computed(() => `q-${isTextarea.value ? "textarea" : "input"}` + (props.autogrow ? " q-textarea--autogrow" : "")),
			hasShadow: computed(() => props.type !== "file" && typeof props.shadowText === "string" && props.shadowText.length !== 0),
			inputRef,
			emitValue,
			onClear,
			hasValue,
			floatingLabel: computed(() => hasValue.value && (props.type !== "number" || Number.isFinite(Number(innerValue.value))) || fieldValueIsFilled(props.displayValue)),
			getControl: () => {
				const controlAttrs = inputAttrs.value;
				return h(isTextarea.value ? "textarea" : "input", {
					ref: inputRef,
					class: ["q-field__native q-placeholder", props.inputClass],
					style: props.inputStyle,
					...controlAttrs,
					...state.getErrorAriaAttrs(controlAttrs),
					...onEvents.value,
					...props.type !== "file" ? { value: getCurValue() } : formDomProps.value
				});
			},
			getShadowControl: () => h("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (isTextarea.value ? "" : " text-no-wrap") }, [h("span", { class: "invisible" }, getCurValue()), h("span", props.shadowText)])
		});
		const renderFn = useField(state);
		Object.assign(proxy, {
			focus,
			blur,
			select,
			getNativeElement: () => inputRef.value
		});
		injectProp(proxy, "nativeEl", () => inputRef.value);
		return renderFn;
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-router-link/use-router-link.js
function getOriginalPath(record) {
	return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
function isSameRouteRecord(a, b) {
	return (a.aliasOf || a) === (b.aliasOf || b);
}
function includesParams(outer, inner) {
	for (const key in inner) {
		const innerValue = inner[key], outerValue = outer[key];
		if (typeof innerValue === "string") {
			if (innerValue !== outerValue) return false;
		} else if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i])) return false;
	}
	return true;
}
function isEquivalentArray(a, b) {
	return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function isSameRouteLocationParamsValue(a, b) {
	return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
}
function isSameRouteLocationParams(a, b) {
	if (Object.keys(a).length !== Object.keys(b).length) return false;
	for (const key in a) if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
	return true;
}
var useRouterLinkProps = {
	to: [String, Object],
	replace: Boolean,
	href: String,
	target: String,
	disable: Boolean,
	exact: Boolean,
	activeClass: {
		type: String,
		default: "q-router-link--active"
	},
	exactActiveClass: {
		type: String,
		default: "q-router-link--exact-active"
	}
};
var emptyLinkAttrs = {};
var linkFalse = { value: false };
var linkNull = { value: null };
var linkNoClass = { value: "" };
function useRouterLink({ fallbackTag, useDisableForRouterLinkProps = true } = {}) {
	const vm = getCurrentInstance();
	const { props, proxy, emit } = vm;
	const hasHrefLink = computed(() => !props.disable && props.href !== void 0);
	if (!vmHasRouter(vm)) return {
		hasRouterLink: linkFalse,
		hasHrefLink,
		hasLink: hasHrefLink,
		linkTag: computed(() => props.type === "a" || hasHrefLink.value ? "a" : props.tag || fallbackTag || "div"),
		resolvedLink: linkNull,
		linkIsActive: linkFalse,
		linkIsExactActive: linkFalse,
		linkClass: linkNoClass,
		linkAttrs: computed(() => hasHrefLink.value ? {
			href: props.href,
			target: props.target
		} : emptyLinkAttrs),
		getLink: () => null,
		navigateToRouterLink(e) {
			e.preventDefault();
			return Promise.resolve(false);
		},
		navigateOnClick(e) {
			emit("click", e);
		}
	};
	const hasRouterLinkProps = useDisableForRouterLinkProps ? computed(() => !props.disable && !hasHrefLink.value && props.to !== void 0 && props.to !== null && props.to !== "") : computed(() => !hasHrefLink.value && props.to !== void 0 && props.to !== null && props.to !== "");
	const resolvedLink = computed(() => hasRouterLinkProps.value ? getLink(props.to) : null);
	const hasRouterLink = computed(() => resolvedLink.value !== null);
	const hasLink = computed(() => hasHrefLink.value || hasRouterLink.value);
	const linkTag = computed(() => props.type === "a" || hasLink.value ? "a" : props.tag || fallbackTag || "div");
	const linkAttrs = computed(() => hasHrefLink.value ? {
		href: props.href,
		target: props.target
	} : hasRouterLink.value ? {
		href: resolvedLink.value.href,
		target: props.target
	} : emptyLinkAttrs);
	const linkActiveIndex = computed(() => {
		if (!hasRouterLink.value) return -1;
		const { matched } = resolvedLink.value, { length } = matched, routeMatched = matched[length - 1];
		if (routeMatched === void 0) return -1;
		const currentMatched = proxy.$route.matched;
		if (currentMatched.length === 0) return -1;
		const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
		if (index !== -1) return index;
		const parentRecordPath = getOriginalPath(matched[length - 2]);
		return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched.at(-1).path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
	});
	const linkIsActive = computed(() => hasRouterLink.value && linkActiveIndex.value !== -1 && includesParams(proxy.$route.params, resolvedLink.value.params));
	const linkIsExactActive = computed(() => linkIsActive.value && linkActiveIndex.value === proxy.$route.matched.length - 1 && isSameRouteLocationParams(proxy.$route.params, resolvedLink.value.params));
	const linkClass = computed(() => hasRouterLink.value ? linkIsExactActive.value ? ` ${props.exactActiveClass} ${props.activeClass}` : props.exact ? "" : linkIsActive.value ? ` ${props.activeClass}` : "" : "");
	function getLink(to) {
		try {
			return proxy.$router.resolve(to);
		} catch {}
		return null;
	}
	/**
	* @returns Promise<RouterError | false | undefined>
	*/
	function navigateToRouterLink(e, { returnRouterError, to = props.to, replace = props.replace } = {}) {
		if (props.disable) {
			e.preventDefault();
			return Promise.resolve(false);
		}
		if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.button !== void 0 && e.button !== 0 || props.target === "_blank") return Promise.resolve(false);
		e.preventDefault();
		const promise = proxy.$router[replace ? "replace" : "push"](to);
		return returnRouterError ? promise : promise.then(() => {}).catch(() => {});
	}
	function navigateOnClick(e) {
		if (hasRouterLink.value) {
			const go = (opts) => navigateToRouterLink(e, opts);
			emit("click", e, go);
			if (!e.defaultPrevented) go();
		} else emit("click", e);
	}
	return {
		hasRouterLink,
		hasHrefLink,
		hasLink,
		linkTag,
		resolvedLink,
		linkIsActive,
		linkIsExactActive,
		linkClass,
		linkAttrs,
		getLink,
		navigateToRouterLink,
		navigateOnClick
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/item/QItem.js
var QItem_default = /*#__PURE__*/ createComponent({
	name: "QItem",
	props: {
		...useDarkProps,
		...useRouterLinkProps,
		tag: {
			type: String,
			default: "div"
		},
		active: {
			type: Boolean,
			default: null
		},
		clickable: {
			type: Boolean,
			default: null
		},
		onClick: Function,
		dense: Boolean,
		insetLevel: Number,
		role: String,
		tabindex: [String, Number],
		focused: Boolean,
		manualFocus: Boolean
	},
	emits: ["keyup"],
	setup(props, { slots, emit }) {
		const $q = useQuasar();
		const isDark = useDark(props, $q);
		const { hasLink, linkAttrs, linkClass, linkTag, navigateOnClick } = useRouterLink();
		const rootRef = shallowRef(null);
		const blurTargetRef = shallowRef(null);
		const isActionable = computed(() => (props.clickable === null ? props.onClick !== void 0 : props.clickable) || hasLink.value || props.tag === "label");
		const isClickable = computed(() => !props.disable && isActionable.value);
		const listRole = inject(listKey, null);
		const role = computed(() => {
			if (props.role !== void 0) return props.role;
			const ctx = listRole !== null ? listRole.value : null;
			if (ctx === "menu" || ctx === "menubar") return isActionable.value ? "menuitem" : void 0;
			if (hasLink.value) return void 0;
			if (isClickable.value) return "button";
			return ctx === "list" ? "listitem" : void 0;
		});
		const classes = computed(() => "q-item q-item-type row no-wrap" + (props.dense ? " q-item--dense" : "") + (isDark() ? " q-item--dark" : "") + (hasLink.value && props.active === null ? linkClass.value : props.active ? ` q-item--active${props.activeClass !== void 0 ? ` ${props.activeClass}` : ""}` : "") + (props.disable ? " disabled" : "") + (isClickable.value ? " q-item--clickable q-link cursor-pointer " + (props.manualFocus ? "q-manual-focusable" : "q-focusable q-hoverable") + (props.focused ? " q-manual-focusable--focused" : "") : ""));
		const style = computed(() => {
			if (props.insetLevel === void 0) return null;
			return { ["padding" + ($q.lang.rtl ? "Right" : "Left")]: 16 + props.insetLevel * 56 + "px" };
		});
		function onClick(e) {
			if (isClickable.value) {
				if (blurTargetRef.value !== null && !e.qAvoidFocus) {
					if (!e.qKeyEvent && document.activeElement === rootRef.value) blurTargetRef.value.focus({ preventScroll: true });
					else if (document.activeElement === blurTargetRef.value) rootRef.value.focus({ preventScroll: true });
				}
				navigateOnClick(e);
			}
		}
		function onKeyup(e) {
			if (isClickable.value && isKeyCode(e, [13, 32])) {
				stopAndPrevent(e);
				e.qKeyEvent = true;
				const evt = new MouseEvent("click", e);
				evt.qKeyEvent = true;
				rootRef.value.dispatchEvent(evt);
			}
			emit("keyup", e);
		}
		function onKeydown(e) {
			if (isClickable.value && e.keyCode === 32) stopAndPrevent(e);
		}
		function getContent() {
			const child = hUniqueSlot(slots.default, []);
			if (isClickable.value) child.unshift(h("div", {
				class: "q-focus-helper",
				tabindex: -1,
				ref: blurTargetRef
			}));
			return child;
		}
		return () => {
			const data = {
				ref: rootRef,
				class: classes.value,
				style: style.value,
				role: role.value,
				onKeyup
			};
			if (isClickable.value) {
				data.onClick = onClick;
				data.onKeydown = onKeydown;
				data.tabindex = props.tabindex || "0";
				Object.assign(data, linkAttrs.value);
			} else if (isActionable.value) data["aria-disabled"] = "true";
			return h(linkTag.value, data, getContent());
		};
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/item/QItemSection.js
var QItemSection_default = /*#__PURE__*/ createComponent({
	name: "QItemSection",
	props: {
		avatar: Boolean,
		thumbnail: Boolean,
		side: Boolean,
		top: Boolean,
		noWrap: Boolean
	},
	setup(props, { slots }) {
		const classes = computed(() => `q-item__section column q-item__section--${props.avatar || props.side || props.thumbnail ? "side" : "main"}` + (props.top ? " q-item__section--top justify-start" : " justify-center") + (props.avatar ? " q-item__section--avatar" : "") + (props.thumbnail ? " q-item__section--thumbnail" : "") + (props.noWrap ? " q-item__section--nowrap" : ""));
		return () => h("div", { class: classes.value }, hSlot(slots.default));
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/field/QField.js
var QField_default = /*#__PURE__*/ createComponent({
	name: "QField",
	inheritAttrs: false,
	props: {
		...useFieldProps,
		tag: {
			type: String,
			default: "label"
		}
	},
	emits: useFieldEmits,
	setup() {
		return useField(useFieldState({ tagProp: true }));
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/directives/ripple/Ripple.js
var enterDelay = 50;
var touchEnterDelay = 100;
var keyThrottle = 300;
var { passive } = listenOpts;
var listeners = [
	[],
	[["click", onStart], ["keyup", onKey]],
	[
		["pointerdown", onStart],
		["pointercancel", onCancel],
		["pointerleave", onCancel],
		["keydown", onKey]
	]
];
function showRipple(evt, el, ctx, forceCenter) {
	if (ctx.stop) stop(evt);
	const color = ctx.color, center = ctx.center || forceCenter === true, node = document.createElement("span"), innerNode = document.createElement("span"), pos = position(evt), { left, top, width, height } = el.getBoundingClientRect(), diameter = Math.hypot(width, height), radius = diameter / 2, centerX = `${(width - diameter) / 2}px`, x = center ? centerX : `${pos.left - left - radius}px`, centerY = `${(height - diameter) / 2}px`, y = center ? centerY : `${pos.top - top - radius}px`;
	innerNode.className = "q-ripple__inner";
	css(innerNode, {
		height: `${diameter}px`,
		width: `${diameter}px`,
		transform: `translate(${x},${y}) scale(.2)`,
		opacity: 0
	});
	node.className = `q-ripple${color ? " text-" + color : ""}`;
	node.setAttribute("dir", "ltr");
	node.append(innerNode);
	el.append(node);
	let timer;
	let phase = 0;
	const finish = () => {
		node.remove();
		const index = ctx.ripples.indexOf(ripple);
		if (index !== -1) ctx.ripples.splice(index, 1);
	};
	const leave = () => {
		phase = 2;
		innerNode.classList.remove("q-ripple__inner--enter");
		innerNode.classList.add("q-ripple__inner--leave");
		innerNode.style.opacity = 0;
		timer = setTimeout(finish, 275);
	};
	const enter = () => {
		phase = 1;
		innerNode.classList.add("q-ripple__inner--enter");
		innerNode.style.transform = `translate(${centerX},${centerY}) scale(1)`;
		innerNode.style.opacity = .2;
		timer = setTimeout(leave, 250);
	};
	const ripple = {
		pointerId: evt.type === "pointerdown" ? evt.pointerId : null,
		abort() {
			clearTimeout(timer);
			node.remove();
		},
		cancel() {
			ripple.pointerId = null;
			if (phase === 2) return;
			clearTimeout(timer);
			if (phase === 0) finish();
			else leave();
		}
	};
	ctx.ripples.push(ripple);
	timer = setTimeout(enter, evt.type === "pointerdown" && evt.pointerType === "touch" ? touchEnterDelay : enterDelay);
}
function onStart(evt) {
	if (!evt.qSkipRipple) {
		const el = evt.currentTarget;
		showRipple(evt, el, el.__qripple, evt.qKeyEvent === true);
	}
}
function onKey(evt) {
	const el = evt.currentTarget, ctx = el.__qripple;
	if (!evt.qSkipRipple && isKeyCode(evt, ctx.keyCodes)) {
		const now = Date.now();
		if (now - ctx.keyTime >= keyThrottle) {
			ctx.keyTime = now;
			showRipple(evt, el, ctx, true);
		}
	}
}
function onCancel(evt) {
	if (evt.type === "pointerleave" && evt.buttons === 0) return;
	const { ripples } = evt.currentTarget.__qripple;
	for (let i = ripples.length - 1; i >= 0; i--) {
		const ripple = ripples[i];
		if (ripple.pointerId === evt.pointerId) ripple.cancel();
	}
}
function modifiersChanged(a, b) {
	return a !== b && (a.early !== b.early || a.stop !== b.stop || a.center !== b.center);
}
function setOptions(ctx, { modifiers, value, arg }) {
	const cfg = {
		...ctx.cfg,
		...modifiers,
		...value
	};
	const keyCodes = cfg.keyCodes || 13;
	ctx.arg = arg;
	ctx.modifiers = modifiers;
	ctx.early = cfg.early === true;
	ctx.stop = cfg.stop === true;
	ctx.center = cfg.center === true;
	ctx.color = cfg.color || arg;
	ctx.keyCodes = Array.isArray(keyCodes) ? keyCodes.flat() : keyCodes;
}
function bind(el, ctx) {
	const bound = ctx.enabled ? ctx.early ? 2 : 1 : 0;
	if (bound !== ctx.bound) {
		for (const [name, fn] of listeners[ctx.bound]) el.removeEventListener(name, fn, passive);
		for (const [name, fn] of listeners[bound]) el.addEventListener(name, fn, passive);
		ctx.bound = bound;
	}
}
var Ripple_default = /*#__PURE__*/ createDirective({
	name: "ripple",
	beforeMount(el, binding) {
		const cfg = binding.instance.$.appContext.config.globalProperties.$q.config || {};
		if (cfg.ripple === false) return;
		const ctx = {
			cfg: cfg.ripple,
			enabled: binding.value !== false,
			arg: void 0,
			modifiers: void 0,
			early: false,
			stop: false,
			center: false,
			color: void 0,
			keyCodes: 13,
			keyTime: 0,
			bound: 0,
			ripples: []
		};
		setOptions(ctx, binding);
		el.__qripple = ctx;
		bind(el, ctx);
	},
	updated(el, binding) {
		const ctx = el.__qripple;
		if (ctx === void 0) return;
		const { value, oldValue, arg, modifiers } = binding;
		ctx.enabled = value !== false;
		if (ctx.enabled && (value !== oldValue || arg !== ctx.arg || modifiersChanged(modifiers, ctx.modifiers))) setOptions(ctx, binding);
		bind(el, ctx);
	},
	beforeUnmount(el) {
		const ctx = el.__qripple;
		if (ctx === void 0) return;
		ctx.ripples.forEach((ripple) => {
			ripple.abort();
		});
		ctx.enabled = false;
		bind(el, ctx);
		el.__qripple = void 0;
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/chip/QChip.js
function preventSpace(e) {
	if (e.keyCode === 32) stopAndPrevent(e);
}
var getSizeStyle = /*#__PURE__*/ createSizeStyle({
	xs: 8,
	sm: 10,
	md: 14,
	lg: 20,
	xl: 24
});
var QChip_default = /*#__PURE__*/ createComponent({
	name: "QChip",
	props: {
		...useDarkProps,
		...useSizeProps,
		dense: Boolean,
		icon: String,
		iconRight: String,
		iconRemove: String,
		iconSelected: String,
		label: [String, Number],
		color: String,
		textColor: String,
		modelValue: {
			type: Boolean,
			default: true
		},
		selected: {
			type: Boolean,
			default: null
		},
		square: Boolean,
		outline: Boolean,
		clickable: {
			type: Boolean,
			default: null
		},
		onClick: Function,
		removable: Boolean,
		removeAriaLabel: String,
		tabindex: [String, Number],
		disable: Boolean,
		ripple: {
			type: [Boolean, Object],
			default: true
		}
	},
	emits: [
		"update:modelValue",
		"update:selected",
		"remove"
	],
	setup(props, { slots, emit }) {
		const $q = useQuasar();
		const isDark = useDark(props, $q);
		const hasLeftIcon = computed(() => props.selected || props.icon !== void 0);
		const leftIcon = computed(() => props.selected ? props.iconSelected || $q.iconSet.chip.selected : props.icon);
		const removeIcon = computed(() => props.iconRemove || $q.iconSet.chip.remove);
		const isActionable = computed(() => (props.clickable === null ? props.onClick !== void 0 : props.clickable) || props.selected !== null);
		const isClickable = computed(() => !props.disable && isActionable.value);
		const classes = computed(() => {
			const text = props.outline ? props.color || props.textColor : props.textColor;
			return "q-chip row inline no-wrap items-center" + (!props.outline && props.color !== void 0 ? ` bg-${props.color}` : "") + (text ? ` text-${text} q-chip--colored` : "") + (props.disable ? " disabled" : "") + (props.dense ? " q-chip--dense" : "") + (props.outline ? " q-chip--outline" : "") + (props.selected ? " q-chip--selected" : "") + (isClickable.value ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (props.square ? " q-chip--square" : "") + (isDark() ? " q-chip--dark q-dark" : "");
		});
		const attributes = computed(() => {
			return {
				chip: props.disable ? {
					role: "button",
					tabindex: -1,
					"aria-disabled": "true"
				} : {
					role: "button",
					tabindex: props.tabindex || 0,
					...props.selected !== null ? { "aria-pressed": props.selected ? "true" : "false" } : {}
				},
				remove: {
					role: "button",
					"aria-hidden": "false",
					"aria-label": props.removeAriaLabel || $q.lang.label.remove,
					...props.disable ? {
						tabindex: -1,
						"aria-disabled": "true"
					} : { tabindex: props.tabindex || 0 }
				}
			};
		});
		function onKeyup(e) {
			if ([13, 32].includes(e.keyCode)) {
				onClick(e);
				stopAndPrevent(e);
			}
		}
		function onClick(e) {
			if (!props.disable) {
				emit("update:selected", !props.selected);
				emit("click", e);
			}
		}
		function onRemove(e) {
			if (e.keyCode === void 0 || [13, 32].includes(e.keyCode)) {
				stopAndPrevent(e);
				if (!props.disable) {
					emit("update:modelValue", false);
					emit("remove");
				}
			}
		}
		function getContent() {
			const child = [];
			if (isClickable.value) child.push(h("div", { class: "q-focus-helper" }));
			if (hasLeftIcon.value) child.push(h(QIcon_default, {
				class: "q-chip__icon q-chip__icon--left",
				name: leftIcon.value
			}));
			const label = props.label !== void 0 ? [h("div", { class: "ellipsis" }, [props.label])] : void 0;
			child.push(h("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, hMergeSlotSafely(slots.default, label)));
			if (props.iconRight) child.push(h(QIcon_default, {
				class: "q-chip__icon q-chip__icon--right",
				name: props.iconRight
			}));
			if (props.removable) child.push(h(QIcon_default, {
				class: "q-chip__icon q-chip__icon--remove cursor-pointer",
				name: removeIcon.value,
				...attributes.value.remove,
				onClick: onRemove,
				onKeydown: preventSpace,
				onKeyup: onRemove
			}));
			return child;
		}
		return () => {
			if (!props.modelValue) return;
			const data = { class: classes.value };
			if (props.size !== void 0) data.style = getSizeStyle(props.size);
			if (isActionable.value) Object.assign(data, attributes.value.chip);
			if (isClickable.value) Object.assign(data, {
				onClick,
				onKeydown: preventSpace,
				onKeyup
			});
			return withDirectives(h("div", data, getContent()), [[Ripple_default, props.disable || props.ripple === false ? false : props.ripple]]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel_default = /*#__PURE__*/ createComponent({
	name: "QItemLabel",
	props: {
		overline: Boolean,
		caption: Boolean,
		header: Boolean,
		lines: [Number, String]
	},
	setup(props, { slots }) {
		const parsedLines = computed(() => Number.parseInt(props.lines, 10));
		const classes = computed(() => "q-item__label" + (props.overline ? " q-item__label--overline text-overline" : "") + (props.caption ? " q-item__label--caption text-caption" : "") + (props.header ? " q-item__label--header" : "") + (parsedLines.value === 1 ? " ellipsis" : ""));
		const style = computed(() => props.lines !== void 0 && parsedLines.value > 1 ? {
			overflow: "hidden",
			display: "-webkit-box",
			"-webkit-box-orient": "vertical",
			"-webkit-line-clamp": parsedLines.value
		} : null);
		return () => h("div", {
			style: style.value,
			class: classes.value
		}, hSlot(slots.default));
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-portal-refocus/use-portal-refocus.js
function usePortalRefocus(props, isTakingFocus) {
	const { proxy } = getCurrentInstance();
	let refocusTarget = null;
	function captureRefocusTarget(skip) {
		refocusTarget = props.noRefocus || skip === true ? null : document.activeElement;
	}
	function setRefocusTarget(target) {
		refocusTarget = target || null;
	}
	function clearRefocusTarget() {
		refocusTarget = null;
	}
	function resolveTarget(evt) {
		return (evt?.type.indexOf("key") === 0 ? refocusTarget.closest("[tabindex]:not([tabindex^=\"-\"])") : void 0) || refocusTarget;
	}
	function restoreFocus(evt) {
		if (refocusTarget === null) return;
		const target = resolveTarget(evt);
		refocusTarget = null;
		const index = portalProxyList.indexOf(proxy);
		if (index !== -1) {
			for (let i = portalProxyList.length - 1; i > index; i--) if (portalProxyList[i].__adoptRefocusTarget?.(target, proxy.contentEl) === true) return;
		}
		addFocusFn(() => {
			if (target.isConnected) refocus(target);
		});
	}
	function restoreFocusSync(evt) {
		if (refocusTarget === null) return;
		if (refocusTarget.isConnected) refocus(resolveTarget(evt));
		refocusTarget = null;
	}
	function adoptRefocusTarget(target, donorEl) {
		if (!isTakingFocus()) return false;
		if (!props.noRefocus && (refocusTarget === null || donorEl?.contains(refocusTarget) === true)) refocusTarget = target;
		return true;
	}
	return {
		captureRefocusTarget,
		setRefocusTarget,
		clearRefocusTarget,
		restoreFocus,
		restoreFocusSync,
		adoptRefocusTarget
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-hover/use-hover.js
var useHoverProps = {
	hover: Boolean,
	hoverDelay: {
		type: Number,
		default: 0
	},
	hoverHideDelay: {
		type: Number,
		default: 150
	}
};
function useHover({ props, canShow, show, canHide, hide }) {
	const { removeTimeout, registerTimeout } = useTimeout();
	function hoverShow(evt) {
		if (props.hover !== true || evt.pointerType === "touch") return;
		removeTimeout();
		if (!canShow(evt)) return;
		if (props.hoverDelay > 0) registerTimeout(() => {
			show(evt);
		}, props.hoverDelay);
		else show(evt);
	}
	function scheduleHoverHide(evt) {
		removeTimeout();
		if (!canHide(evt)) return;
		registerTimeout(() => {
			hide(evt);
		}, props.hoverHideDelay);
	}
	function hoverHide(evt) {
		if (props.hover !== true || evt.pointerType === "touch") return;
		scheduleHoverHide(evt);
	}
	function onHoverContentEnter(evt) {
		if (evt.pointerType !== "touch") removeTimeout();
	}
	return {
		clearHoverTimer: removeTimeout,
		hoverShow,
		hoverHide,
		scheduleHoverHide,
		onHoverContentEnter
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.focus/focusout.js
var handlers = [];
function trigger(e) {
	handlers.at(-1)(e);
}
function addFocusout(fn) {
	handlers.push(fn);
	if (handlers.length === 1) document.body.addEventListener("focusin", trigger);
}
function removeFocusout(fn) {
	const index = handlers.indexOf(fn);
	if (index !== -1) {
		handlers.splice(index, 1);
		if (handlers.length === 0) document.body.removeEventListener("focusin", trigger);
	}
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.click-outside/click-outside.js
var timer = null;
var { notPassiveCapture, passiveCapture } = listenOpts, registeredList = [];
function globalHandler(evt) {
	if (timer !== null) {
		clearTimeout(timer);
		timer = null;
	}
	const target = evt.target;
	if (target === void 0 || target.nodeType === 8 || target.classList.contains("no-pointer-events")) return;
	let closableContentEls = null;
	let sawClosablePortal = false;
	for (let i = portalProxyList.length - 1; i >= 0; i--) {
		const proxy = portalProxyList[i].$;
		const name = proxy.type.name;
		if (name === "QTooltip") continue;
		if (name === "QDialog") {
			if (proxy.props.seamless !== true) {
				if (sawClosablePortal === false) return;
				closableContentEls = new Set(portalProxyList.slice(i + 1).map((vm) => vm.contentEl));
				break;
			}
			continue;
		}
		sawClosablePortal = true;
	}
	for (let i = registeredList.length - 1; i >= 0; i--) {
		const state = registeredList[i];
		if (closableContentEls !== null && !closableContentEls.has(state.innerRef.value)) return;
		if ((state.anchorEl.value === null || !state.anchorEl.value.contains(target) && !clickIsInDetachedFullscreen(state.anchorEl.value, target)) && (target === document.body || state.innerRef.value !== null && !state.innerRef.value.contains(target) && !clickIsInDetachedFullscreen(state.innerRef.value, target))) {
			evt.qClickOutside = true;
			state.onClickOutside(evt);
		} else return;
	}
}
function onPointerdown(evt) {
	if (evt.pointerType === "touch") return;
	if (timer !== null) clearTimeout(timer);
	timer = setTimeout(() => {
		timer = null;
		globalHandler(evt);
	}, 0);
}
function addClickOutside(clickOutsideProps) {
	registeredList.push(clickOutsideProps);
	if (registeredList.length === 1) {
		document.addEventListener("pointerdown", onPointerdown, passiveCapture);
		document.addEventListener("mousedown", globalHandler, notPassiveCapture);
		document.addEventListener("touchstart", globalHandler, notPassiveCapture);
	}
}
function removeClickOutside(clickOutsideProps) {
	const index = registeredList.indexOf(clickOutsideProps);
	if (index === -1) return;
	registeredList.splice(index, 1);
	if (registeredList.length !== 0) return;
	if (timer !== null) {
		clearTimeout(timer);
		timer = null;
	}
	document.removeEventListener("pointerdown", onPointerdown, passiveCapture);
	document.removeEventListener("mousedown", globalHandler, notPassiveCapture);
	document.removeEventListener("touchstart", globalHandler, notPassiveCapture);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/menu/QMenu.js
var tabbableSelector = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex^=\"-\"])";
var QMenu_default = /*#__PURE__*/ createComponent({
	name: "QMenu",
	inheritAttrs: false,
	props: {
		...useAnchorProps,
		...useModelToggleProps,
		...useDarkProps,
		...useTransitionProps,
		persistent: Boolean,
		autoClose: Boolean,
		separateClosePopup: Boolean,
		noEscDismiss: Boolean,
		noRouteDismiss: Boolean,
		noRefocus: Boolean,
		noFocus: Boolean,
		fit: Boolean,
		cover: Boolean,
		square: Boolean,
		anchor: {
			type: String,
			validator: validatePosition
		},
		self: {
			type: String,
			validator: validatePosition
		},
		offset: {
			type: Array,
			validator: validateOffset
		},
		touchPosition: Boolean,
		...useHoverProps,
		maxHeight: {
			type: String,
			default: null
		},
		maxWidth: {
			type: String,
			default: null
		}
	},
	emits: [
		...useModelToggleEmits,
		"click",
		"escapeKey"
	],
	setup(props, { slots, emit, attrs }) {
		let avoidAutoClose, hoverShown = false;
		const vm = getCurrentInstance();
		const { proxy } = vm;
		const $q = useQuasar();
		const innerRef = shallowRef(null);
		const showing = ref(false);
		const hideOnRouteChange = computed(() => !props.persistent && !props.noRouteDismiss);
		const isDark = useDark(props, $q);
		const { registerTick, removeTick } = useTick();
		const { registerTransitionEnd } = useTransitionEnd(props);
		const { transitionProps, transitionStyle } = useTransition(props);
		const { anchorEl, canShow, anchorEvents } = useAnchor({
			showing,
			getPopupRole: () => attrs.role
		});
		const { show, hide } = useModelToggle({
			showing,
			canShow,
			canHide(evt) {
				return hoverShown && portalIsOpening() ? evt?.type !== "click" : true;
			},
			handleShow,
			handleHide,
			handleRouteChange,
			hideOnRouteChange,
			processOnMount: true
		});
		const { clearHoverTimer, hoverShow, scheduleHoverHide, onHoverContentEnter } = useHover({
			props,
			canShow: () => !showing.value,
			show,
			canHide: (evt) => showing.value && !hoverWithinScope(evt.relatedTarget),
			hide
		});
		Object.assign(anchorEvents, {
			hoverShow,
			hoverHide
		});
		const { showPortal, hidePortal, portalIsOpening, renderPortal } = usePortal(vm, innerRef, renderPortalContent, "menu");
		const { captureRefocusTarget, clearRefocusTarget, restoreFocus, restoreFocusSync, adoptRefocusTarget } = usePortalRefocus(props, () => !props.noFocus && !hoverShown && portalIsOpening());
		const clickOutsideProps = {
			anchorEl,
			innerRef,
			onClickOutside(e) {
				if (!props.persistent && showing.value) {
					hide(e);
					if (e.type === "touchstart" || e.target.classList.contains("q-dialog__backdrop")) stopAndPrevent(e);
					return true;
				}
			}
		};
		const anchorOrigin = computed(() => parsePosition(props.anchor || (props.cover ? "center middle" : "bottom start"), $q.lang.rtl));
		const posEngine = usePositionEngine({
			props,
			$q,
			anchorEl,
			innerRef,
			showing,
			anchorOrigin,
			selfOrigin: computed(() => props.cover ? anchorOrigin.value : parsePosition(props.self || "top start", $q.lang.rtl))
		});
		const menuClass = computed(() => "q-menu scroll" + (posEngine.viaCssAnchor ? "" : " q-position-engine") + (props.square ? " q-menu--square" : "") + (isDark() ? " q-menu--dark q-dark" : ""));
		const onEvents = computed(() => props.autoClose ? { onClick: onAutoClose } : {});
		const handlesFocus = computed(() => showing.value && !props.persistent);
		watch(handlesFocus, (val) => {
			if (val) {
				addEscapeKey(onEscapeKey);
				addClickOutside(clickOutsideProps);
			} else {
				removeEscapeKey(onEscapeKey);
				removeClickOutside(clickOutsideProps);
			}
		});
		function focus() {
			addFocusFn(() => {
				let node = innerRef.value;
				if (node && node.contains !== void 0 && !node.contains(document.activeElement)) {
					node = node.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || node.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || node.querySelector("[autofocus], [data-autofocus]") || node;
					node.focus({ preventScroll: true });
				}
			});
		}
		function hoverWithinScope(el) {
			if (el === null || el === void 0) return false;
			if (anchorEl.value !== null && anchorEl.value.contains(el) || innerRef.value !== null && innerRef.value.contains(el)) return true;
			let portalProxy = getPortalProxy(el);
			while (portalProxy !== void 0 && portalProxy !== null) {
				if (portalProxy === proxy) return true;
				portalProxy = getParentProxy(portalProxy);
			}
			return false;
		}
		function hoverHide(evt) {
			if (evt.pointerType === "touch") return;
			scheduleHoverHide(evt);
			let parent = getParentProxy(proxy);
			while (parent !== void 0 && parent !== null) {
				if (parent.$options.name === "QMenu" && parent.$props.hover === true) parent.__qHoverHide?.(evt);
				parent = getParentProxy(parent);
			}
		}
		function handleShow(evt) {
			hoverShown = props.hover && evt?.type === "pointerenter";
			clearHoverTimer();
			captureRefocusTarget(hoverShown);
			addFocusout(onFocusout);
			showPortal(false, hoverShown);
			posEngine.handleShow(!hoverShown && (props.touchPosition || props.contextMenu) ? evt : void 0);
			if (!props.noFocus && !hoverShown) document.activeElement.blur();
			registerTick(() => {
				posEngine.handleTick();
				if (!props.noFocus && !hoverShown) focus();
			});
			registerTransitionEnd(() => {
				if ($q.platform.is.ios) {
					avoidAutoClose = props.autoClose;
					innerRef.value.click();
				}
				if (!posEngine.viaCssAnchor) posEngine.track();
				showPortal(true);
				emit("show", evt);
			});
		}
		function handleHide(evt) {
			hoverShown = false;
			removeTick();
			hidePortal();
			anchorCleanup(true);
			if (evt === void 0 || !evt.qClickOutside) restoreFocus(evt);
			else clearRefocusTarget();
			registerTransitionEnd(() => {
				hidePortal(true);
				posEngine.releaseAnchor(false);
				emit("hide", evt);
			});
		}
		function handleRouteChange() {
			clearRefocusTarget();
		}
		function anchorCleanup(hidingInProgress) {
			clearHoverTimer();
			posEngine.releaseAnchor(hidingInProgress);
			if (hidingInProgress || showing.value) {
				removeFocusout(onFocusout);
				removeClickOutside(clickOutsideProps);
				removeEscapeKey(onEscapeKey);
			}
			if (!hidingInProgress) clearRefocusTarget();
		}
		function onAutoClose(e) {
			if (!avoidAutoClose) {
				closePortalMenus(proxy, e);
				emit("click", e);
			} else avoidAutoClose = false;
		}
		function onFocusout(evt) {
			if (handlesFocus.value && !props.noFocus && !hoverShown && !childHasFocus(innerRef.value, evt.target) && !focusIsInDetachedFullscreen(innerRef.value, evt.target)) focus();
		}
		function onEscapeKey(evt) {
			if (!props.noEscDismiss) {
				emit("escapeKey");
				hide(evt);
			}
		}
		function onPortalKeydown(evt) {
			if (evt.keyCode !== 9 || evt.defaultPrevented || !handlesFocus.value || innerRef.value === null) return;
			const inner = innerRef.value;
			const tabbables = inner.querySelectorAll(tabbableSelector);
			const edge = tabbables.length === 0 ? null : tabbables[evt.shiftKey ? 0 : tabbables.length - 1];
			if (edge !== null && document.activeElement !== edge && !(evt.shiftKey && document.activeElement === inner)) return;
			removeFocusout(onFocusout);
			restoreFocusSync(evt);
			hide(evt);
		}
		function renderPortalContent() {
			return h(Transition, transitionProps(), () => showing.value ? h("div", {
				...attrs,
				ref: innerRef,
				tabindex: -1,
				onKeydown: [].concat(attrs.onKeydown || [], onPortalKeydown),
				...props.hover ? {
					onPointerenter: [].concat(attrs.onPointerenter || [], onHoverContentEnter),
					onPointerleave: [].concat(attrs.onPointerleave || [], hoverHide)
				} : {},
				class: [menuClass.value, attrs.class],
				style: [
					attrs.style,
					transitionStyle(),
					posEngine.positionStyle.value
				],
				...onEvents.value
			}, hSlot(slots.default)) : null);
		}
		onBeforeUnmount(() => {
			anchorCleanup(false);
		});
		Object.assign(proxy, {
			focus,
			updatePosition: posEngine.updatePosition,
			__adoptRefocusTarget: adoptRefocusTarget
		});
		proxy.__qHoverHide = scheduleHoverHide;
		return renderPortal;
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-history/use-history.js
function useHistory(showing, hide, hideOnRouteChange) {
	let historyEntry;
	function removeFromHistory() {
		if (historyEntry !== void 0) {
			History_default.remove(historyEntry);
			historyEntry = void 0;
		}
	}
	onBeforeUnmount(() => {
		if (showing.value) removeFromHistory();
	});
	return {
		removeFromHistory,
		addToHistory() {
			historyEntry = {
				condition: () => hideOnRouteChange.value,
				handler: hide
			};
			History_default.add(historyEntry);
		}
	};
}
document.body, document.scrollingElement, document.documentElement;
function getVerticalScrollPosition(scrollTarget) {
	return scrollTarget === window ? window.scrollY : scrollTarget.scrollTop;
}
function getHorizontalScrollPosition(scrollTarget) {
	return scrollTarget === window ? window.scrollX : scrollTarget.scrollLeft;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/scroll/prevent-scroll.js
var registered = 0;
var scrollPositionX;
var scrollPositionY;
var maxScrollTop;
var vpPendingUpdate = false;
var bodyLeft;
var bodyTop;
var isIos = false;
var routePath;
var closeTimer = null;
var releaseListeners = /* @__PURE__ */ new Set();
function onAppleResize(evt) {
	if (vpPendingUpdate) return;
	vpPendingUpdate = true;
	requestAnimationFrame(() => {
		vpPendingUpdate = false;
		const { height, scale } = evt.target;
		if (Math.abs(scale - 1) > .01) return;
		const { clientHeight, scrollTop } = document.scrollingElement;
		if (maxScrollTop === void 0 || height !== window.innerHeight) {
			maxScrollTop = clientHeight - height;
			document.scrollingElement.scrollTop = scrollTop;
		}
		if (scrollTop > maxScrollTop) document.scrollingElement.scrollTop -= Math.ceil((scrollTop - maxScrollTop) / 8);
	});
}
function apply(action) {
	const body = document.body;
	if (action === "add") {
		scrollPositionX = getHorizontalScrollPosition(window);
		scrollPositionY = getVerticalScrollPosition(window);
		routePath = window.location.pathname;
		isIos = client.is.ios;
		const classList = ["q-document--prevent-scroll"];
		if (isIos) {
			bodyLeft = body.style.left;
			bodyTop = body.style.top;
			body.style.left = `-${scrollPositionX}px`;
			body.style.top = `-${scrollPositionY}px`;
			classList.push("q-document--pin-body");
		} else {
			classList.push("q-document--clip-scroll");
			if (window.innerWidth - document.documentElement.clientWidth > 0) classList.push("q-document--reserve-scrollbar");
		}
		document.documentElement.classList.add(...classList);
		document.qScrollPrevented = true;
		if (isIos) {
			window.scrollTo(0, 0);
			window.visualViewport?.addEventListener("resize", onAppleResize, listenOpts.passiveCapture);
			window.visualViewport?.addEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
			window.scrollTo(0, 0);
		}
	} else {
		if (isIos) {
			window.visualViewport?.removeEventListener("resize", onAppleResize, listenOpts.passiveCapture);
			window.visualViewport?.removeEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
		}
		document.documentElement.classList.remove("q-document--prevent-scroll", "q-document--clip-scroll", "q-document--reserve-scrollbar", "q-document--pin-body");
		document.qScrollPrevented = false;
		if (isIos) {
			body.style.left = bodyLeft;
			body.style.top = bodyTop;
		}
		if (isIos && window.location.pathname === routePath && (getHorizontalScrollPosition(window) !== scrollPositionX || getVerticalScrollPosition(window) !== scrollPositionY)) window.scrollTo(scrollPositionX, scrollPositionY);
		else releaseListeners.forEach((fn) => {
			fn();
		});
		maxScrollTop = void 0;
	}
}
function preventScroll(state) {
	let action = "add";
	if (state === true) {
		registered++;
		if (closeTimer !== null) {
			clearTimeout(closeTimer);
			closeTimer = null;
			return;
		}
		if (registered > 1) return;
	} else {
		if (registered === 0) return;
		registered--;
		if (registered > 0) return;
		action = "remove";
		if (isIos && client.is.nativeMobile) {
			if (closeTimer !== null) clearTimeout(closeTimer);
			closeTimer = setTimeout(() => {
				apply(action);
				closeTimer = null;
			}, 100);
			return;
		}
	}
	apply(action);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/composables/private.use-prevent-scroll/use-prevent-scroll.js
function usePreventScroll() {
	let currentState;
	return { preventBodyScroll(state) {
		if (state !== currentState && (currentState !== void 0 || state)) {
			currentState = state;
			preventScroll(state);
		}
	} };
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/dialog/QDialog.js
var maximizedModals = 0;
var positionClass = {
	standard: "fixed-full flex-center",
	top: "fixed-top justify-center",
	bottom: "fixed-bottom justify-center",
	right: "fixed-right items-center",
	left: "fixed-left items-center"
};
var defaultTransitions = {
	standard: ["scale", "scale"],
	top: ["slide-down", "slide-up"],
	bottom: ["slide-up", "slide-down"],
	right: ["slide-left", "slide-right"],
	left: ["slide-right", "slide-left"]
};
var QDialog_default = /*#__PURE__*/ createComponent({
	name: "QDialog",
	inheritAttrs: false,
	props: {
		...useModelToggleProps,
		...useTransitionProps,
		transitionShow: String,
		transitionHide: String,
		persistent: Boolean,
		autoClose: Boolean,
		allowFocusOutside: Boolean,
		noEscDismiss: Boolean,
		noBackdropDismiss: Boolean,
		noRouteDismiss: Boolean,
		noRefocus: Boolean,
		noFocus: Boolean,
		noShake: Boolean,
		seamless: Boolean,
		maximized: Boolean,
		fullWidth: Boolean,
		fullHeight: Boolean,
		square: Boolean,
		backdropFilter: String,
		position: {
			type: String,
			default: "standard",
			validator: (val) => [
				"standard",
				"top",
				"bottom",
				"left",
				"right"
			].includes(val)
		}
	},
	emits: [
		...useModelToggleEmits,
		"shake",
		"click",
		"escapeKey"
	],
	setup(props, { slots, emit, attrs }) {
		const vm = getCurrentInstance();
		const $q = useQuasar();
		const rootElRef = shallowRef(null);
		const innerRef = shallowRef(null);
		const showing = ref(false);
		const animating = ref(false);
		const viewportInset = ref(null);
		let shakeTimeout = null, isMaximized = false, avoidAutoClose = false, viewportTracked = false;
		const hideOnRouteChange = computed(() => !props.persistent && !props.noRouteDismiss && !props.seamless);
		const { preventBodyScroll } = usePreventScroll();
		const { registerTransitionEnd } = useTransitionEnd(props);
		const { registerTick, removeTick } = useTick();
		const { transitionProps, transitionStyle } = useTransition(props, () => defaultTransitions[props.position][0], () => defaultTransitions[props.position][1]);
		const backdropStyle = computed(() => transitionStyle() + (props.backdropFilter !== void 0 ? `;backdrop-filter:${props.backdropFilter};-webkit-backdrop-filter:${props.backdropFilter}` : ""));
		const { showPortal, hidePortal, portalIsOpening, renderPortal } = usePortal(vm, innerRef, renderPortalContent, "dialog");
		const { captureRefocusTarget, setRefocusTarget, clearRefocusTarget, restoreFocus, adoptRefocusTarget } = usePortalRefocus(props, () => !props.noFocus && portalIsOpening());
		const { hide } = useModelToggle({
			showing,
			hideOnRouteChange,
			handleShow,
			handleHide,
			handleRouteChange,
			processOnMount: true
		});
		const { addToHistory, removeFromHistory } = useHistory(showing, hide, hideOnRouteChange);
		const classes = computed(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${props.maximized ? "maximized" : "minimized"} q-dialog__inner--${props.position} ${positionClass[props.position]}` + (animating.value ? " q-dialog__inner--animating" : "") + (viewportInset.value !== null ? " q-dialog__inner--keyboard" : "") + (props.fullWidth ? " q-dialog__inner--fullwidth" : "") + (props.fullHeight ? " q-dialog__inner--fullheight" : "") + (props.square ? " q-dialog__inner--square" : ""));
		const useBackdrop = computed(() => showing.value && !props.seamless);
		const onEvents = computed(() => props.autoClose ? { onClick: onAutoClose } : {});
		const rootClasses = computed(() => `q-dialog fullscreen no-pointer-events q-dialog--${useBackdrop.value ? "modal" : "seamless"}`);
		watch(() => props.maximized, (state) => {
			if (showing.value) updateMaximized(state);
		});
		watch(useBackdrop, (val) => {
			preventBodyScroll(val);
			if (val) {
				addFocusout(onFocusChange);
				addEscapeKey(onEscapeKey);
			} else {
				removeFocusout(onFocusChange);
				removeEscapeKey(onEscapeKey);
			}
		});
		function updateViewportInset() {
			const { offsetTop, height, scale } = window.visualViewport;
			const { innerHeight } = window;
			if (Math.abs(scale - 1) > .01 || innerHeight - height < 1) {
				viewportInset.value = null;
				return;
			}
			const top = Math.round(offsetTop);
			const bottom = Math.round(innerHeight - offsetTop - height);
			const current = viewportInset.value;
			if (current === null || current.top !== top || current.bottom !== bottom) viewportInset.value = {
				top,
				bottom,
				height: Math.round(height)
			};
		}
		function trackViewport(add) {
			const fn = add ? "addEventListener" : "removeEventListener";
			viewportTracked = add;
			window.visualViewport?.[fn]("resize", updateViewportInset, listenOpts.passive);
			window.visualViewport?.[fn]("scroll", updateViewportInset, listenOpts.passive);
			if (add && window.visualViewport !== void 0) updateViewportInset();
			else viewportInset.value = null;
		}
		function getInnerStyle() {
			const inset = viewportInset.value;
			if (inset === null) return transitionStyle();
			return `${transitionStyle()};--q-dialog-viewport-height:${inset.height}px` + (props.position !== "bottom" ? `;top:${inset.top}px` : "") + (props.position !== "top" ? `;bottom:${inset.bottom}px` : "");
		}
		function handleShow(evt) {
			addToHistory();
			captureRefocusTarget();
			updateMaximized(props.maximized);
			showPortal();
			animating.value = true;
			if ($q.platform.is.ios) trackViewport(true);
			if (props.noFocus) removeTick();
			else {
				document.activeElement?.blur();
				registerTick(focus);
			}
			registerTransitionEnd(() => {
				if ($q.platform.is.ios) {
					if (!props.seamless && document.activeElement) {
						const { top, bottom } = document.activeElement.getBoundingClientRect(), { innerHeight } = window, height = window.visualViewport?.height ?? innerHeight;
						if (top > 0 && bottom > height / 2) document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - height, bottom >= innerHeight ? Infinity : Math.ceil(document.scrollingElement.scrollTop + bottom - height / 2));
						document.activeElement.scrollIntoView();
					}
					avoidAutoClose = true;
					innerRef.value.click();
					avoidAutoClose = false;
				}
				showPortal(true);
				animating.value = false;
				emit("show", evt);
			});
		}
		function handleHide(evt) {
			removeTick();
			removeFromHistory();
			cleanup(true);
			animating.value = true;
			hidePortal();
			restoreFocus(evt);
			registerTransitionEnd(() => {
				hidePortal(true);
				animating.value = false;
				emit("hide", evt);
			});
		}
		function handleRouteChange() {
			clearRefocusTarget();
		}
		function focus(selector) {
			addFocusFn(() => {
				let node = innerRef.value;
				if (node === null || node.contains === void 0) return;
				if (selector !== void 0) {
					const target = node.querySelector(selector);
					if (target !== null) {
						target.focus({ preventScroll: true });
						return;
					}
				}
				if (!node.contains(document.activeElement)) {
					node = node.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || node.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || node.querySelector("[autofocus], [data-autofocus]") || node;
					node.focus({ preventScroll: true });
				}
			});
		}
		function shake(focusTarget) {
			if (focusTarget && typeof focusTarget.focus === "function") focusTarget.focus({ preventScroll: true });
			else focus();
			emit("shake");
			const node = innerRef.value;
			if (node !== null) {
				node.classList.remove("q-animate--scale");
				node.classList.add("q-animate--scale");
				if (shakeTimeout !== null) clearTimeout(shakeTimeout);
				shakeTimeout = setTimeout(() => {
					shakeTimeout = null;
					if (innerRef.value !== null) {
						node.classList.remove("q-animate--scale");
						focus();
					}
				}, 170);
			}
		}
		function onEscapeKey(evt) {
			if (!props.seamless) {
				if (props.persistent || props.noEscDismiss) {
					if (!props.maximized && !props.noShake) shake();
				} else {
					emit("escapeKey");
					hide(evt);
				}
			}
		}
		function cleanup(hiding) {
			if (shakeTimeout !== null) {
				clearTimeout(shakeTimeout);
				shakeTimeout = null;
			}
			if (hiding || showing.value) {
				updateMaximized(false);
				if (viewportTracked) trackViewport(false);
				if (!props.seamless) {
					preventBodyScroll(false);
					removeFocusout(onFocusChange);
					removeEscapeKey(onEscapeKey);
				}
			}
			if (!hiding) clearRefocusTarget();
		}
		function updateMaximized(active) {
			if (active) {
				if (!isMaximized) {
					if (maximizedModals < 1) document.body.classList.add("q-body--dialog");
					maximizedModals++;
					isMaximized = true;
				}
			} else if (isMaximized) {
				if (maximizedModals < 2) document.body.classList.remove("q-body--dialog");
				maximizedModals--;
				isMaximized = false;
			}
		}
		function onAutoClose(e) {
			if (!avoidAutoClose) {
				hide(e);
				emit("click", e);
			}
		}
		function onBackdropPress(e) {
			if (e.button !== 0) return;
			if (!props.persistent && !props.noBackdropDismiss) hide(e);
			else if (!props.noShake) shake();
		}
		function onFocusChange(evt) {
			if (!props.allowFocusOutside && !portalIsOpening() && !childHasFocus(innerRef.value, evt.target) && !focusIsInDetachedFullscreen(innerRef.value, evt.target)) focus("[tabindex]:not([tabindex=\"-1\"])");
		}
		Object.assign(vm.proxy, {
			focus,
			shake,
			__updateRefocusTarget: setRefocusTarget,
			__adoptRefocusTarget: adoptRefocusTarget,
			__getAriaModalEl: () => useBackdrop.value ? rootElRef.value : null
		});
		onBeforeUnmount(cleanup);
		function renderPortalContent() {
			return h("div", {
				ref: rootElRef,
				role: "dialog",
				"aria-modal": useBackdrop.value ? "true" : "false",
				...attrs,
				class: [rootClasses.value, attrs.class]
			}, [h(Transition, {
				name: "q-transition--fade",
				appear: true
			}, () => useBackdrop.value ? h("div", {
				class: "q-dialog__backdrop fixed-full",
				style: backdropStyle.value,
				"aria-hidden": "true",
				onMousedown: onBackdropPress
			}) : null), h(Transition, transitionProps(), () => showing.value ? h("div", {
				ref: innerRef,
				class: classes.value,
				style: getInnerStyle(),
				tabindex: -1,
				...onEvents.value
			}, hSlot(slots.default)) : null)]);
		}
		return renderPortal;
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/virtual-scroll/use-virtual-scroll.js
var aggBucketSize = 1e3;
var scrollToEdges = [
	"start",
	"center",
	"end",
	"start-force",
	"center-force",
	"end-force"
];
var filterProto = Array.prototype.filter;
var setOverflowAnchor = window.getComputedStyle(document.body).overflowAnchor === void 0 ? noop : function setOverflowAnchor(contentEl, index) {
	if (contentEl === null) return;
	if (contentEl._qOverflowAnimationFrame !== void 0) cancelAnimationFrame(contentEl._qOverflowAnimationFrame);
	contentEl._qOverflowAnimationFrame = requestAnimationFrame(() => {
		if (contentEl === null) return;
		contentEl._qOverflowAnimationFrame = void 0;
		const children = contentEl.children || [];
		filterProto.call(children, (el) => el.dataset && el.dataset.qVsAnchor !== void 0).forEach((el) => {
			delete el.dataset.qVsAnchor;
		});
		const el = children[index];
		if (el?.dataset) el.dataset.qVsAnchor = "";
	});
};
function sumFn(acc, item) {
	return acc + item;
}
function getScrollDetails(parent, child, beforeRef, afterRef, horizontal, rtl, stickyStart, stickyEnd) {
	const parentCalc = parent === window ? document.scrollingElement || document.documentElement : parent, propRectSize = horizontal ? "width" : "height", details = {
		scrollStart: 0,
		scrollViewSize: -stickyStart - stickyEnd,
		scrollMaxSize: 0,
		offsetStart: -stickyStart,
		offsetEnd: -stickyEnd
	};
	if (horizontal) {
		if (parent === window) {
			details.scrollStart = window.scrollX;
			details.scrollViewSize += document.documentElement.clientWidth;
		} else {
			details.scrollStart = parentCalc.scrollLeft;
			details.scrollViewSize += parentCalc.clientWidth;
		}
		details.scrollMaxSize = parentCalc.scrollWidth;
		if (rtl) details.scrollStart = -details.scrollStart;
	} else {
		if (parent === window) {
			details.scrollStart = window.scrollY;
			details.scrollViewSize += document.documentElement.clientHeight;
		} else {
			details.scrollStart = parentCalc.scrollTop;
			details.scrollViewSize += parentCalc.clientHeight;
		}
		details.scrollMaxSize = parentCalc.scrollHeight;
	}
	if (beforeRef !== null) {
		for (let el = beforeRef.previousElementSibling; el !== null; el = el.previousElementSibling) if (!el.classList.contains("q-virtual-scroll--skip")) details.offsetStart += el.getBoundingClientRect()[propRectSize];
	}
	if (afterRef !== null) {
		for (let el = afterRef.nextElementSibling; el !== null; el = el.nextElementSibling) if (!el.classList.contains("q-virtual-scroll--skip")) details.offsetEnd += el.getBoundingClientRect()[propRectSize];
	}
	if (child !== parent) {
		const parentRect = parentCalc.getBoundingClientRect(), childRect = child.getBoundingClientRect();
		if (horizontal) {
			details.offsetStart += childRect.left - parentRect.left;
			details.offsetEnd -= childRect.width;
		} else {
			details.offsetStart += childRect.top - parentRect.top;
			details.offsetEnd -= childRect.height;
		}
		if (parent !== window) details.offsetStart += details.scrollStart;
		details.offsetEnd += details.scrollMaxSize - details.offsetStart;
	}
	return details;
}
function setScroll(parent, scroll, horizontal, rtl) {
	if (scroll === "end") scroll = (parent === window ? document.body : parent)[horizontal ? "scrollWidth" : "scrollHeight"];
	if (parent === window) {
		let left, top;
		if (horizontal) {
			if (rtl) scroll = -scroll;
			left = scroll;
			top = window.scrollY;
		} else {
			left = window.scrollX;
			top = scroll;
		}
		window.scrollTo({
			left,
			top,
			behavior: "instant"
		});
	} else if (horizontal) {
		if (rtl) scroll = -scroll;
		parent.scrollTo({
			left: scroll,
			behavior: "instant"
		});
	} else parent.scrollTo({
		top: scroll,
		behavior: "instant"
	});
}
function sumSize(sizeAgg, size, from, to) {
	if (from >= to) return 0;
	const lastTo = size.length, fromAgg = Math.floor(from / aggBucketSize), toAgg = Math.floor((to - 1) / aggBucketSize) + 1;
	let total = 0;
	for (let i = fromAgg; i < toAgg; i++) total += sizeAgg[i];
	if (from % aggBucketSize !== 0) for (let i = fromAgg * aggBucketSize; i < from; i++) total -= size[i];
	if (to % aggBucketSize !== 0 && to !== lastTo) {
		const end = Math.min(toAgg * aggBucketSize, lastTo);
		for (let i = to; i < end; i++) total -= size[i];
	}
	return total;
}
var commonVirtScrollProps = {
	virtualScrollSliceSize: {
		type: [Number, String],
		default: 10
	},
	virtualScrollSliceRatioBefore: {
		type: [Number, String],
		default: 1
	},
	virtualScrollSliceRatioAfter: {
		type: [Number, String],
		default: 1
	},
	virtualScrollItemSize: {
		type: [Number, String],
		default: 24
	},
	virtualScrollStickySizeStart: {
		type: [Number, String],
		default: 0
	},
	virtualScrollStickySizeEnd: {
		type: [Number, String],
		default: 0
	},
	tableColspan: [Number, String]
};
Object.keys(commonVirtScrollProps);
var useVirtualScrollProps = {
	virtualScrollHorizontal: Boolean,
	onVirtualScroll: Function,
	...commonVirtScrollProps
};
function useVirtualScroll({ virtualScrollLength, getVirtualScrollTarget, getVirtualScrollEl, virtualScrollItemSizeComputed }) {
	const { props, emit, proxy } = getCurrentInstance();
	const $q = useQuasar();
	let prevScrollStart, prevToIndex, localScrollViewSize, virtualScrollSizesAgg = [], virtualScrollSizes;
	const virtualScrollPaddingBefore = ref(0);
	const virtualScrollPaddingAfter = ref(0);
	const virtualScrollSliceSizeComputed = ref({});
	const beforeRef = shallowRef(null);
	const afterRef = shallowRef(null);
	const contentRef = shallowRef(null);
	const virtualScrollSliceRange = ref({
		from: 0,
		to: 0
	});
	const colspanAttr = computed(() => props.tableColspan !== void 0 ? props.tableColspan : 100);
	if (virtualScrollItemSizeComputed === void 0) virtualScrollItemSizeComputed = computed(() => props.virtualScrollItemSize);
	const needsReset = computed(() => virtualScrollItemSizeComputed.value + ";" + props.virtualScrollHorizontal);
	const needsSliceRecalc = computed(() => needsReset.value + ";" + props.virtualScrollSliceRatioBefore + ";" + props.virtualScrollSliceRatioAfter);
	watch(needsSliceRecalc, () => {
		setVirtualScrollSize();
	});
	watch(needsReset, reset);
	function reset() {
		localResetVirtualScroll(prevToIndex, true);
	}
	function refresh(toIndex) {
		localResetVirtualScroll(toIndex === void 0 ? prevToIndex : toIndex);
	}
	function scrollTo(toIndex, edge) {
		const scrollEl = getVirtualScrollTarget();
		if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) return;
		onVirtualScrollEvt.cancel();
		const scrollDetails = getScrollDetails(scrollEl, getVirtualScrollEl(), beforeRef.value, afterRef.value, props.virtualScrollHorizontal, $q.lang.rtl, props.virtualScrollStickySizeStart, props.virtualScrollStickySizeEnd);
		if (localScrollViewSize !== scrollDetails.scrollViewSize) setVirtualScrollSize(scrollDetails.scrollViewSize);
		setVirtualScrollSliceRange(scrollEl, scrollDetails, Math.min(virtualScrollLength.value - 1, Math.max(0, Number.parseInt(toIndex, 10) || 0)), 0, scrollToEdges.includes(edge) ? edge : prevToIndex !== -1 && toIndex > prevToIndex ? "end" : "start");
	}
	function localOnVirtualScrollEvt() {
		const scrollEl = getVirtualScrollTarget();
		if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) return;
		const scrollDetails = getScrollDetails(scrollEl, getVirtualScrollEl(), beforeRef.value, afterRef.value, props.virtualScrollHorizontal, $q.lang.rtl, props.virtualScrollStickySizeStart, props.virtualScrollStickySizeEnd), listLastIndex = virtualScrollLength.value - 1, listEndOffset = scrollDetails.scrollMaxSize - scrollDetails.offsetStart - scrollDetails.offsetEnd - virtualScrollPaddingAfter.value;
		if (prevScrollStart === scrollDetails.scrollStart) return;
		if (scrollDetails.scrollMaxSize <= 0) {
			setVirtualScrollSliceRange(scrollEl, scrollDetails, 0, 0);
			return;
		}
		if (localScrollViewSize !== scrollDetails.scrollViewSize) setVirtualScrollSize(scrollDetails.scrollViewSize);
		updateVirtualScrollSizes(virtualScrollSliceRange.value.from);
		const scrollMaxStart = Math.floor(scrollDetails.scrollMaxSize - Math.max(scrollDetails.scrollViewSize, scrollDetails.offsetEnd) - Math.min(virtualScrollSizes[listLastIndex], scrollDetails.scrollViewSize / 2));
		if (scrollMaxStart > 0 && Math.ceil(scrollDetails.scrollStart) >= scrollMaxStart) {
			setVirtualScrollSliceRange(scrollEl, scrollDetails, listLastIndex, scrollDetails.scrollMaxSize - scrollDetails.offsetEnd - virtualScrollSizesAgg.reduce(sumFn, 0));
			return;
		}
		let toIndex = 0, listOffset = scrollDetails.scrollStart - scrollDetails.offsetStart, offset = listOffset;
		if (listOffset <= listEndOffset && listOffset + scrollDetails.scrollViewSize >= virtualScrollPaddingBefore.value) {
			listOffset -= virtualScrollPaddingBefore.value;
			toIndex = virtualScrollSliceRange.value.from;
			offset = listOffset;
		} else for (let j = 0; listOffset >= virtualScrollSizesAgg[j] && toIndex < listLastIndex; j++) {
			listOffset -= virtualScrollSizesAgg[j];
			toIndex += aggBucketSize;
		}
		while (listOffset > 0 && toIndex < listLastIndex) {
			listOffset -= virtualScrollSizes[toIndex];
			if (listOffset > -scrollDetails.scrollViewSize) {
				toIndex++;
				offset = listOffset;
			} else offset = virtualScrollSizes[toIndex] + listOffset;
		}
		setVirtualScrollSliceRange(scrollEl, scrollDetails, toIndex, offset);
	}
	function setVirtualScrollSliceRange(scrollEl, scrollDetails, toIndex, offset, align) {
		const alignForce = typeof align === "string" && align.includes("-force");
		const alignEnd = alignForce ? align.replace("-force", "") : align;
		const alignRange = alignEnd !== void 0 ? alignEnd : "start";
		let from = Math.max(0, toIndex - virtualScrollSliceSizeComputed.value[alignRange]), to = from + virtualScrollSliceSizeComputed.value.total;
		if (to > virtualScrollLength.value) {
			to = virtualScrollLength.value;
			from = Math.max(0, to - virtualScrollSliceSizeComputed.value.total);
		}
		prevScrollStart = scrollDetails.scrollStart;
		const rangeChanged = from !== virtualScrollSliceRange.value.from || to !== virtualScrollSliceRange.value.to;
		if (!rangeChanged && alignEnd === void 0) {
			emitScroll(toIndex);
			return;
		}
		const { activeElement } = document;
		const contentEl = contentRef.value;
		if (rangeChanged && contentEl !== null && contentEl !== activeElement && contentEl.contains(activeElement)) {
			contentEl.addEventListener("focusout", onBlurRefocusFn);
			setTimeout(() => {
				contentEl?.removeEventListener("focusout", onBlurRefocusFn);
			}, 0);
		}
		setOverflowAnchor(contentEl, toIndex - from);
		const sizeBefore = alignEnd !== void 0 ? virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0) : 0;
		if (rangeChanged) {
			const tempTo = to >= virtualScrollSliceRange.value.from && from <= virtualScrollSliceRange.value.to ? virtualScrollSliceRange.value.to : to;
			virtualScrollSliceRange.value = {
				from,
				to: tempTo
			};
			virtualScrollPaddingBefore.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, 0, from);
			virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, to, virtualScrollLength.value);
			requestAnimationFrame(() => {
				if (virtualScrollSliceRange.value.to !== to && prevScrollStart === scrollDetails.scrollStart) {
					virtualScrollSliceRange.value = {
						from: virtualScrollSliceRange.value.from,
						to
					};
					virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, to, virtualScrollLength.value);
				}
			});
		}
		requestAnimationFrame(() => {
			if (prevScrollStart !== scrollDetails.scrollStart) return;
			if (rangeChanged) updateVirtualScrollSizes(from);
			const sizeAfter = virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0), posStart = sizeAfter + scrollDetails.offsetStart + virtualScrollPaddingBefore.value, posEnd = posStart + virtualScrollSizes[toIndex];
			let scrollPosition = posStart + offset;
			if (alignEnd !== void 0) {
				const sizeDiff = sizeAfter - sizeBefore;
				const scrollStart = scrollDetails.scrollStart + sizeDiff;
				scrollPosition = !alignForce && scrollStart < posStart && posEnd < scrollStart + scrollDetails.scrollViewSize ? scrollStart : alignEnd === "end" ? posEnd - scrollDetails.scrollViewSize : posStart - (alignEnd === "start" ? 0 : Math.round((scrollDetails.scrollViewSize - virtualScrollSizes[toIndex]) / 2));
			}
			prevScrollStart = scrollPosition;
			setScroll(scrollEl, scrollPosition, props.virtualScrollHorizontal, $q.lang.rtl);
			emitScroll(toIndex);
		});
	}
	function updateVirtualScrollSizes(from) {
		const contentEl = contentRef.value;
		if (contentEl) {
			const children = filterProto.call(contentEl.children, (el) => el.classList && !el.classList.contains("q-virtual-scroll--skip")), childrenLength = children.length, sizeFn = props.virtualScrollHorizontal ? (el) => el.getBoundingClientRect().width : (el) => el.getBoundingClientRect().height;
			let index = from, size, diff;
			for (let i = 0; i < childrenLength;) {
				size = sizeFn(children[i]);
				i++;
				while (i < childrenLength && children[i].classList.contains("q-virtual-scroll--with-prev")) {
					size += sizeFn(children[i]);
					i++;
				}
				diff = size - virtualScrollSizes[index];
				if (diff !== 0) {
					virtualScrollSizes[index] += diff;
					virtualScrollSizesAgg[Math.floor(index / aggBucketSize)] += diff;
				}
				index++;
			}
		}
	}
	function onBlurRefocusFn() {
		contentRef.value?.focus({ preventScroll: true });
	}
	function localResetVirtualScroll(toIndex, fullReset) {
		const defaultSize = Number(virtualScrollItemSizeComputed.value);
		if (fullReset || !Array.isArray(virtualScrollSizes)) virtualScrollSizes = [];
		const oldVirtualScrollSizesLength = virtualScrollSizes.length;
		virtualScrollSizes.length = virtualScrollLength.value;
		for (let i = virtualScrollLength.value - 1; i >= oldVirtualScrollSizesLength; i--) virtualScrollSizes[i] = defaultSize;
		const jMax = Math.floor((virtualScrollLength.value - 1) / aggBucketSize);
		virtualScrollSizesAgg = [];
		for (let j = 0; j <= jMax; j++) {
			let size = 0;
			const iMax = Math.min((j + 1) * aggBucketSize, virtualScrollLength.value);
			for (let i = j * aggBucketSize; i < iMax; i++) size += virtualScrollSizes[i];
			virtualScrollSizesAgg.push(size);
		}
		prevToIndex = -1;
		prevScrollStart = void 0;
		virtualScrollPaddingBefore.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, 0, virtualScrollSliceRange.value.from);
		virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, virtualScrollSliceRange.value.to, virtualScrollLength.value);
		if (toIndex >= 0) {
			updateVirtualScrollSizes(virtualScrollSliceRange.value.from);
			nextTick(() => {
				scrollTo(toIndex);
			});
		} else onVirtualScrollEvt();
	}
	function setVirtualScrollSize(scrollViewSize) {
		if (scrollViewSize === void 0 && typeof window !== "undefined") {
			const scrollEl = getVirtualScrollTarget();
			if (scrollEl !== void 0 && scrollEl !== null && scrollEl.nodeType !== 8) scrollViewSize = getScrollDetails(scrollEl, getVirtualScrollEl(), beforeRef.value, afterRef.value, props.virtualScrollHorizontal, $q.lang.rtl, props.virtualScrollStickySizeStart, props.virtualScrollStickySizeEnd).scrollViewSize;
		}
		localScrollViewSize = scrollViewSize;
		const virtualScrollSliceRatioBefore = Number.parseFloat(props.virtualScrollSliceRatioBefore) || 0;
		const virtualScrollSliceRatioAfter = Number.parseFloat(props.virtualScrollSliceRatioAfter) || 0;
		const multiplier = 1 + virtualScrollSliceRatioBefore + virtualScrollSliceRatioAfter;
		const view = scrollViewSize === void 0 || scrollViewSize <= 0 ? 1 : Math.ceil(scrollViewSize / virtualScrollItemSizeComputed.value);
		const baseSize = Math.max(1, view, Math.ceil((props.virtualScrollSliceSize > 0 ? props.virtualScrollSliceSize : 10) / multiplier));
		virtualScrollSliceSizeComputed.value = {
			total: Math.ceil(baseSize * multiplier),
			start: Math.ceil(baseSize * virtualScrollSliceRatioBefore),
			center: Math.ceil(baseSize * (.5 + virtualScrollSliceRatioBefore)),
			end: Math.ceil(baseSize * (1 + virtualScrollSliceRatioBefore)),
			view
		};
	}
	function padVirtualScroll(tag, content, contentAttrs) {
		const paddingSize = props.virtualScrollHorizontal ? "width" : "height";
		const style = { ["--q-virtual-scroll-item-" + paddingSize]: virtualScrollItemSizeComputed.value + "px" };
		return [
			tag === "tbody" ? h(tag, {
				class: "q-virtual-scroll__padding",
				key: "before",
				ref: beforeRef,
				"aria-hidden": "true"
			}, [h("tr", [h("td", {
				style: {
					[paddingSize]: `${virtualScrollPaddingBefore.value}px`,
					...style
				},
				colspan: colspanAttr.value
			})])]) : h(tag, {
				class: "q-virtual-scroll__padding",
				key: "before",
				ref: beforeRef,
				"aria-hidden": "true",
				style: {
					[paddingSize]: `${virtualScrollPaddingBefore.value}px`,
					...style
				}
			}),
			h(tag, {
				class: "q-virtual-scroll__content",
				key: "content",
				ref: contentRef,
				tabindex: -1,
				...contentAttrs
			}, content.flat()),
			tag === "tbody" ? h(tag, {
				class: "q-virtual-scroll__padding",
				key: "after",
				ref: afterRef,
				"aria-hidden": "true"
			}, [h("tr", [h("td", {
				style: {
					[paddingSize]: `${virtualScrollPaddingAfter.value}px`,
					...style
				},
				colspan: colspanAttr.value
			})])]) : h(tag, {
				class: "q-virtual-scroll__padding",
				key: "after",
				ref: afterRef,
				"aria-hidden": "true",
				style: {
					[paddingSize]: `${virtualScrollPaddingAfter.value}px`,
					...style
				}
			})
		];
	}
	function emitScroll(index) {
		if (prevToIndex !== index) {
			if (props.onVirtualScroll !== void 0) emit("virtualScroll", {
				index,
				from: virtualScrollSliceRange.value.from,
				to: virtualScrollSliceRange.value.to - 1,
				direction: index < prevToIndex ? "decrease" : "increase",
				ref: proxy
			});
			prevToIndex = index;
		}
	}
	setVirtualScrollSize();
	{
		const to = Math.min(virtualScrollLength.value, virtualScrollSliceSizeComputed.value.total);
		const defaultSize = Number(virtualScrollItemSizeComputed.value);
		virtualScrollSliceRange.value = {
			from: 0,
			to
		};
		virtualScrollPaddingAfter.value = Number.isFinite(defaultSize) ? Math.max(0, (virtualScrollLength.value - to) * defaultSize) : 0;
	}
	const onVirtualScrollEvt = debounce(localOnVirtualScrollEvt, $q.platform.is.ios ? 120 : 35);
	onBeforeMount(() => {
		setVirtualScrollSize();
	});
	let shouldActivate = false;
	onDeactivated(() => {
		shouldActivate = true;
	});
	onActivated(() => {
		if (!shouldActivate) return;
		const scrollEl = getVirtualScrollTarget();
		if (prevScrollStart !== void 0 && scrollEl !== void 0 && scrollEl !== null && scrollEl.nodeType !== 8) setScroll(scrollEl, prevScrollStart, props.virtualScrollHorizontal, $q.lang.rtl);
		else scrollTo(prevToIndex);
	});
	onBeforeUnmount(() => {
		onVirtualScrollEvt.cancel();
	});
	Object.assign(proxy, {
		scrollTo,
		reset,
		refresh
	});
	return {
		virtualScrollSliceRange,
		virtualScrollSliceSizeComputed,
		setVirtualScrollSize,
		onVirtualScrollEvt,
		localResetVirtualScroll,
		padVirtualScroll,
		scrollTo,
		reset,
		refresh
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/format/format.js
function normalizeToInterval(v, min, max) {
	if (max <= min) return min;
	const size = max - min + 1;
	let index = min + (v - min) % size;
	if (index < min) index = size + index;
	return index === 0 ? 0 : index;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/components/select/QSelect.js
var validateNewValueMode = (v) => [
	"add",
	"add-unique",
	"toggle"
].includes(v);
var reEscapeList = ".*+?^${}()|[]\\";
var fieldPropsList = Object.keys(useFieldProps);
function getPropValueFn(userPropName, defaultPropName) {
	if (typeof userPropName === "function") return userPropName;
	const propName = userPropName !== void 0 ? userPropName : defaultPropName;
	return (opt) => opt !== null && typeof opt === "object" && propName in opt ? opt[propName] : opt;
}
var QSelect_default = /*#__PURE__*/ createComponent({
	name: "QSelect",
	inheritAttrs: false,
	props: {
		...useVirtualScrollProps,
		...useFormProps,
		...useFieldProps,
		modelValue: { required: true },
		multiple: Boolean,
		displayValue: [String, Number],
		displayValueHtml: Boolean,
		dropdownIcon: String,
		options: {
			type: Array,
			default: () => []
		},
		optionValue: [Function, String],
		optionLabel: [Function, String],
		optionDisable: [Function, String],
		hideSelected: Boolean,
		hideDropdownIcon: Boolean,
		hideDialogClose: Boolean,
		fillInput: Boolean,
		maxValues: [Number, String],
		optionsDense: Boolean,
		optionsDark: {
			type: Boolean,
			default: null
		},
		optionsSelectedClass: String,
		optionsHtml: Boolean,
		optionsCover: Boolean,
		noOptionLabel: String,
		menuShrink: Boolean,
		menuAnchor: String,
		menuSelf: String,
		menuOffset: Array,
		popupContentClass: String,
		popupContentStyle: [
			String,
			Array,
			Object
		],
		popupNoRouteDismiss: Boolean,
		useInput: Boolean,
		useChips: Boolean,
		noChipRemove: Boolean,
		newValueMode: {
			type: String,
			validator: validateNewValueMode
		},
		mapOptions: Boolean,
		emitValue: Boolean,
		noOptionPrefetch: Boolean,
		disableTabSelection: Boolean,
		inputDebounce: {
			type: [Number, String],
			default: 500
		},
		inputClass: [
			Array,
			String,
			Object
		],
		inputStyle: [
			Array,
			String,
			Object
		],
		tabindex: {
			type: [String, Number],
			default: 0
		},
		autocomplete: String,
		transitionShow: {},
		transitionHide: {},
		transitionDuration: {},
		behavior: {
			type: String,
			validator: (v) => [
				"default",
				"menu",
				"dialog"
			].includes(v),
			default: "default"
		},
		...useHoverProps,
		virtualScrollItemSize: useVirtualScrollProps.virtualScrollItemSize.type,
		onNewValue: Function,
		onFilter: Function
	},
	emits: [
		...useFieldEmits,
		"add",
		"remove",
		"inputValue",
		"keyup",
		"keypress",
		"keydown",
		"popupShow",
		"popupHide",
		"filterAbort"
	],
	setup(props, { slots, emit }) {
		const { proxy } = getCurrentInstance();
		const $q = useQuasar();
		const menu = ref(false);
		const dialog = ref(false);
		const optionIndex = ref(-1);
		const inputValue = ref("");
		const dialogFieldFocused = ref(false);
		const innerLoadingIndicator = ref(false);
		let filterTimer = null, inputValueTimer = null, hoverShown = false, hoverShownAt = 0, innerValueCache, prefetchPending = false, hasDialog, userInputValue, optionIndexFromModel = false, filterId = null, defaultInputValue, transitionShowComputed, searchBuffer, searchBufferExp;
		const inputRef = shallowRef(null);
		const targetRef = shallowRef(null);
		const menuRef = shallowRef(null);
		const dialogRef = shallowRef(null);
		const menuContentRef = shallowRef(null);
		const nameProp = useFormInputNameAttr(props);
		const onComposition = useKeyComposition(onInput);
		const virtualScrollLength = computed(() => Array.isArray(props.options) ? props.options.length : 0);
		const { virtualScrollSliceRange, virtualScrollSliceSizeComputed, localResetVirtualScroll, padVirtualScroll, onVirtualScrollEvt, scrollTo, setVirtualScrollSize } = useVirtualScroll({
			virtualScrollLength,
			getVirtualScrollTarget,
			getVirtualScrollEl,
			virtualScrollItemSizeComputed: computed(() => props.virtualScrollItemSize === void 0 ? props.optionsDense ? 24 : 48 : props.virtualScrollItemSize)
		});
		const state = useFieldState();
		const innerValue = computed(() => {
			const mapNull = props.mapOptions && !props.multiple, val = props.modelValue !== void 0 && (props.modelValue !== null || mapNull) ? props.multiple && Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue] : [];
			if (props.mapOptions && Array.isArray(props.options)) {
				const cache = props.mapOptions && innerValueCache !== void 0 ? innerValueCache : [];
				const values = val.map((v) => getOption(v, cache));
				return props.modelValue === null && mapNull ? values.filter((v) => v !== null) : values;
			}
			return val;
		});
		const innerFieldProps = computed(() => {
			const acc = {};
			fieldPropsList.forEach((key) => {
				const val = props[key];
				if (val !== void 0) acc[key] = val;
			});
			return acc;
		});
		const isOptionsDark = computed(() => props.optionsDark === null ? state.isDark() : props.optionsDark);
		const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
		const computedInputClass = computed(() => {
			let cls = "q-field__input q-placeholder col";
			if (props.hideSelected || innerValue.value.length === 0) return [cls, props.inputClass];
			cls += " q-field__input--padding";
			return props.inputClass === void 0 ? cls : [cls, props.inputClass];
		});
		const menuContentClass = computed(() => (props.virtualScrollHorizontal ? "q-virtual-scroll--horizontal" : "") + (props.popupContentClass ? " " + props.popupContentClass : ""));
		const noOptions = computed(() => virtualScrollLength.value === 0);
		function hasNoOptionDisplay() {
			return slots["no-option"] !== void 0 || props.noOptionLabel !== void 0;
		}
		const selectedString = computed(() => innerValue.value.map((opt) => getOptionLabel.value(opt)).join(", "));
		const ariaCurrentValue = computed(() => props.displayValue !== void 0 ? props.displayValue : selectedString.value);
		const needsHtmlFn = computed(() => props.optionsHtml ? () => true : (opt) => opt?.html === true);
		const valueAsHtml = computed(() => props.displayValueHtml || props.displayValue === void 0 && (props.optionsHtml || innerValue.value.some(needsHtmlFn.value)));
		const tabindex = computed(() => state.focused.value ? props.tabindex : -1);
		const comboboxAttrs = computed(() => {
			const attrs = {
				tabindex: props.disable === true ? void 0 : props.tabindex,
				role: "combobox",
				"aria-label": props.label,
				"aria-readonly": props.readonly ? "true" : "false",
				"aria-autocomplete": props.useInput ? "list" : "none",
				"aria-expanded": menu.value ? "true" : "false"
			};
			if (menu.value && !noOptions.value) attrs["aria-controls"] = `${state.targetUid.value}_lb`;
			if (optionIndex.value >= 0) attrs["aria-activedescendant"] = `${state.targetUid.value}_${optionIndex.value}`;
			return attrs;
		});
		const listboxAttrs = computed(() => ({
			id: `${state.targetUid.value}_lb`,
			role: "listbox",
			"aria-multiselectable": props.multiple ? "true" : "false"
		}));
		const selectedScope = computed(() => innerValue.value.map((opt, i) => ({
			index: i,
			opt,
			html: needsHtmlFn.value(opt),
			selected: true,
			removeAtIndex: removeAtIndexAndFocus,
			toggleOption,
			tabindex: tabindex.value
		})));
		const optionScope = computed(() => {
			if (virtualScrollLength.value === 0) return [];
			const { from, to } = virtualScrollSliceRange.value;
			return props.options.slice(from, to).map((opt, i) => {
				const disable = isOptionDisabled.value(opt) === true;
				const active = isOptionSelected(opt);
				const index = from + i;
				const itemProps = {
					clickable: true,
					active,
					activeClass: computedOptionsSelectedClass.value,
					manualFocus: true,
					focused: false,
					disable,
					tabindex: -1,
					dense: props.optionsDense,
					dark: isOptionsDark.value,
					role: "option",
					"aria-selected": active ? "true" : "false",
					"aria-setsize": virtualScrollLength.value,
					"aria-posinset": index + 1,
					id: `${state.targetUid.value}_${index}`,
					onClick: () => {
						toggleOption(opt);
					}
				};
				if (!disable) {
					if (optionIndex.value === index) itemProps.focused = true;
					itemProps.onPointermove = (evt) => {
						if (evt.pointerType !== "touch" && menu.value) setOptionIndex(index);
					};
				}
				return {
					index,
					opt,
					html: needsHtmlFn.value(opt),
					label: getOptionLabel.value(opt),
					selected: itemProps.active,
					focused: itemProps.focused,
					toggleOption,
					setOptionIndex,
					itemProps
				};
			});
		});
		const dropdownArrowIcon = computed(() => props.dropdownIcon !== void 0 ? props.dropdownIcon : $q.iconSet.arrow.dropdown);
		const squaredMenu = computed(() => !props.optionsCover && !props.outlined && !props.standout && !props.borderless && !props.rounded);
		const computedOptionsSelectedClass = computed(() => props.optionsSelectedClass !== void 0 ? props.optionsSelectedClass : props.color !== void 0 ? `text-${props.color}` : "");
		const getOptionValue = computed(() => getPropValueFn(props.optionValue, "value"));
		const getOptionLabel = computed(() => getPropValueFn(props.optionLabel, "label"));
		const isOptionDisabled = computed(() => getPropValueFn(props.optionDisable, "disable"));
		const innerOptionsValue = computed(() => innerValue.value.map(getOptionValue.value));
		const inputControlEvents = computed(() => {
			const evt = {
				onInput,
				onChange: onComposition,
				onKeydown: onTargetKeydown,
				onKeyup: onTargetAutocomplete,
				onKeypress: onTargetKeypress,
				onFocus: selectInputText,
				onClick(e) {
					if (hasDialog) stop(e);
				}
			};
			evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
			return evt;
		});
		watch(innerValue, (val) => {
			innerValueCache = val;
			if (props.useInput && props.fillInput && !props.multiple && !state.innerLoading.value && (!dialog.value && !menu.value || !hasValue.value)) {
				if (!userInputValue) resetInputValue();
				if (dialog.value || menu.value) filter("");
			}
			if (prefetchPending && prefetchUnmappedOptions()) prefetchPending = false;
		}, { immediate: true });
		watch(() => props.fillInput, resetInputValue);
		watch(menu, updateMenu);
		watch(virtualScrollLength, rerenderMenu);
		function getEmittingOptionValue(opt) {
			return props.emitValue ? getOptionValue.value(opt) : opt;
		}
		function removeAtIndex(index) {
			if (index !== -1 && index < innerValue.value.length) {
				if (props.multiple) {
					const model = [...props.modelValue];
					emit("remove", {
						index,
						value: model.splice(index, 1)[0]
					});
					emit("update:modelValue", model);
				} else emit("update:modelValue", null);
			}
		}
		function removeAtIndexAndFocus(index) {
			removeAtIndex(index);
			state.focus();
		}
		function add(opt, unique) {
			const val = getEmittingOptionValue(opt);
			if (!props.multiple) {
				if (props.fillInput) updateInputValue(getOptionLabel.value(opt), true, true);
				emit("update:modelValue", val);
				return;
			}
			if (innerValue.value.length === 0) {
				emit("add", {
					index: 0,
					value: val
				});
				emit("update:modelValue", props.multiple ? [val] : val);
				return;
			}
			if (unique && isOptionSelected(opt)) return;
			if (props.maxValues !== void 0 && props.modelValue.length >= props.maxValues) return;
			const model = [...props.modelValue];
			emit("add", {
				index: model.length,
				value: val
			});
			model.push(val);
			emit("update:modelValue", model);
		}
		function toggleOption(opt, keepOpen) {
			if (!state.editable.value || opt === void 0 || isOptionDisabled.value(opt) === true) return;
			const optValue = getOptionValue.value(opt);
			if (!props.multiple) {
				const closesDialog = !keepOpen && dialog.value;
				if (!keepOpen) {
					updateInputValue(props.fillInput ? getOptionLabel.value(opt) : "", true, true);
					hidePopup();
				}
				if (!closesDialog) targetRef.value?.focus();
				if (innerValue.value.length === 0 || !isDeepEqual(getOptionValue.value(innerValue.value[0]), optValue)) emit("update:modelValue", props.emitValue ? optValue : opt);
				return;
			}
			if (!hasDialog || dialogFieldFocused.value) state.focus();
			selectInputText();
			if (innerValue.value.length === 0) {
				const val = props.emitValue ? optValue : opt;
				emit("add", {
					index: 0,
					value: val
				});
				emit("update:modelValue", props.multiple ? [val] : val);
				return;
			}
			const model = [...props.modelValue], index = innerOptionsValue.value.findIndex((v) => isDeepEqual(v, optValue));
			if (index !== -1) emit("remove", {
				index,
				value: model.splice(index, 1)[0]
			});
			else {
				if (props.maxValues !== void 0 && model.length >= props.maxValues) return;
				const val = props.emitValue ? optValue : opt;
				emit("add", {
					index: model.length,
					value: val
				});
				model.push(val);
			}
			emit("update:modelValue", model);
		}
		function setOptionIndex(index) {
			const val = index !== -1 && index < virtualScrollLength.value ? index : -1;
			if (optionIndex.value !== val) {
				optionIndex.value = val;
				optionIndexFromModel = false;
			}
		}
		function moveOptionSelection(localOffset = 1, skipInputValue) {
			if (menu.value) {
				let index = optionIndex.value;
				do
					index = normalizeToInterval(index + localOffset, -1, virtualScrollLength.value - 1);
				while (index !== -1 && index !== optionIndex.value && isOptionDisabled.value(props.options[index]) === true);
				if (optionIndex.value !== index) {
					setOptionIndex(index);
					scrollTo(index);
					if (!skipInputValue && props.useInput && props.fillInput) setInputValue(index >= 0 ? getOptionLabel.value(props.options[index]) : defaultInputValue, true);
				}
			}
		}
		function getOption(value, valueCache) {
			const fn = (opt) => isDeepEqual(getOptionValue.value(opt), value);
			return props.options.find(fn) || valueCache.find(fn) || value;
		}
		function isOptionSelected(opt) {
			const val = getOptionValue.value(opt);
			return innerOptionsValue.value.find((v) => isDeepEqual(v, val)) !== void 0;
		}
		function selectInputText(e) {
			if (props.useInput && targetRef.value !== null && (e === void 0 || targetRef.value === e.target && e.target.value === selectedString.value)) targetRef.value.select();
		}
		function onTargetKeyup(e) {
			if (isKeyCode(e, 27) && menu.value) {
				stop(e);
				hidePopup(e);
				resetInputValue();
			}
			emit("keyup", e);
		}
		function onTargetAutocomplete(e) {
			const { value } = e.target;
			if (e.keyCode !== void 0) {
				onTargetKeyup(e);
				return;
			}
			e.target.value = "";
			if (filterTimer !== null) {
				clearTimeout(filterTimer);
				filterTimer = null;
			}
			if (inputValueTimer !== null) {
				clearTimeout(inputValueTimer);
				inputValueTimer = null;
			}
			resetInputValue();
			if (typeof value === "string" && value.length !== 0) {
				const needle = value.toLocaleLowerCase();
				const findFn = (extractFn) => {
					const option = props.options.find((opt) => String(extractFn.value(opt)).toLocaleLowerCase() === needle);
					if (option === void 0) return false;
					if (innerValue.value.includes(option)) hidePopup();
					else toggleOption(option);
					return true;
				};
				const fillFn = (afterFilter) => {
					if (!findFn(getOptionValue) && !afterFilter && !findFn(getOptionLabel)) filter(value, true, () => fillFn(true));
				};
				fillFn();
			} else state.clearValue(e);
		}
		function onTargetKeypress(e) {
			emit("keypress", e);
		}
		function onTargetKeydown(e) {
			emit("keydown", e);
			if (e.defaultPrevented || shouldIgnoreKey(e)) return;
			const newValueModeValid = inputValue.value.length !== 0 && (props.newValueMode !== void 0 || props.onNewValue !== void 0);
			const tabShouldSelect = !e.shiftKey && !props.disableTabSelection && !props.multiple && (optionIndex.value !== -1 || newValueModeValid);
			if (e.keyCode === 27) {
				prevent(e);
				return;
			}
			if (e.keyCode === 9 && !tabShouldSelect) {
				closeMenu(e);
				return;
			}
			if (e.target === void 0 || e.target.id !== state.targetUid.value || !state.editable.value) return;
			if ((e.keyCode === 40 || e.keyCode === 38) && !state.innerLoading.value && !menu.value) {
				stopAndPrevent(e);
				showPopup(e);
				return;
			}
			if (e.keyCode === 8 && (props.useChips && !props.noChipRemove || props.clearable) && !props.hideSelected && inputValue.value.length === 0) {
				if (props.clearable || isOptionDisabled.value(innerValue.value.at(-1)) !== true) {
					if (props.multiple && Array.isArray(props.modelValue)) removeAtIndex(props.modelValue.length - 1);
					else if (!props.multiple && props.modelValue !== null) emit("update:modelValue", null);
				}
				return;
			}
			if ((e.keyCode === 35 || e.keyCode === 36) && (typeof inputValue.value !== "string" || inputValue.value.length === 0)) {
				stopAndPrevent(e);
				optionIndex.value = -1;
				moveOptionSelection(e.keyCode === 36 ? 1 : -1, props.multiple);
			}
			if ((e.keyCode === 33 || e.keyCode === 34) && virtualScrollSliceSizeComputed.value !== void 0) {
				stopAndPrevent(e);
				optionIndex.value = Math.max(-1, Math.min(virtualScrollLength.value, optionIndex.value + (e.keyCode === 33 ? -1 : 1) * virtualScrollSliceSizeComputed.value.view));
				moveOptionSelection(e.keyCode === 33 ? 1 : -1, props.multiple);
			}
			if (e.keyCode === 38 || e.keyCode === 40) {
				stopAndPrevent(e);
				moveOptionSelection(e.keyCode === 38 ? -1 : 1, props.multiple);
			}
			const optionsLength = virtualScrollLength.value;
			if (searchBuffer === void 0 || searchBufferExp < Date.now()) searchBuffer = "";
			if (optionsLength > 0 && !props.useInput && e.key !== void 0 && e.key.length === 1 && !e.altKey && !e.ctrlKey && !e.metaKey && (e.keyCode !== 32 || searchBuffer.length !== 0)) {
				if (!menu.value) showPopup(e);
				const char = e.key.toLocaleLowerCase(), keyRepeat = searchBuffer.length === 1 && searchBuffer[0] === char;
				searchBufferExp = Date.now() + 1500;
				if (!keyRepeat) {
					stopAndPrevent(e);
					searchBuffer += char;
				}
				const searchRe = new RegExp("^" + [...searchBuffer].map((l) => reEscapeList.includes(l) ? "\\" + l : l).join(".*"), "i");
				let index = optionIndex.value;
				if (keyRepeat || index < 0 || !searchRe.test(getOptionLabel.value(props.options[index]))) do
					index = normalizeToInterval(index + 1, -1, optionsLength - 1);
				while (index !== optionIndex.value && (isOptionDisabled.value(props.options[index]) === true || !searchRe.test(getOptionLabel.value(props.options[index]))));
				if (optionIndex.value !== index) nextTick(() => {
					setOptionIndex(index);
					scrollTo(index);
					if (index >= 0 && props.useInput && props.fillInput) setInputValue(getOptionLabel.value(props.options[index]), true);
				});
				return;
			}
			if (e.keyCode !== 13 && (e.keyCode !== 32 || props.useInput || searchBuffer !== "") && (e.keyCode !== 9 || !tabShouldSelect)) return;
			if (e.keyCode !== 9) stopAndPrevent(e);
			if (optionIndex.value !== -1 && optionIndex.value < optionsLength && !(newValueModeValid && userInputValue && optionIndexFromModel)) {
				toggleOption(props.options[optionIndex.value]);
				return;
			}
			if (newValueModeValid) {
				const done = (val, mode) => {
					if (mode) {
						if (!validateNewValueMode(mode)) return;
					} else mode = props.newValueMode;
					updateInputValue("", !props.multiple, true);
					if (val === void 0 || val === null) return;
					(mode === "toggle" ? toggleOption : add)(val, mode === "add-unique");
					if (!props.multiple) {
						targetRef.value?.focus();
						hidePopup();
					}
				};
				if (props.onNewValue !== void 0) emit("newValue", inputValue.value, done);
				else done(inputValue.value);
				if (!props.multiple) return;
			}
			if (menu.value) closeMenu(e);
			else if (!state.innerLoading.value) showPopup(e);
		}
		function getVirtualScrollEl() {
			return hasDialog ? menuContentRef.value : menuRef.value !== null && menuRef.value.contentEl !== null ? menuRef.value.contentEl : void 0;
		}
		function getVirtualScrollTarget() {
			return getVirtualScrollEl();
		}
		function getSelection() {
			if (props.hideSelected) return [];
			if (slots["selected-item"] !== void 0) return selectedScope.value.map((scope) => slots["selected-item"](scope));
			if (slots.selected !== void 0) return [slots.selected()].flat();
			if (props.useChips) return selectedScope.value.map((scope, i) => h(QChip_default, {
				key: "option-" + i,
				removable: !props.noChipRemove && state.editable.value && isOptionDisabled.value(scope.opt) !== true,
				dense: true,
				textColor: props.color,
				tabindex: tabindex.value,
				onRemove() {
					scope.removeAtIndex(i);
				}
			}, () => h("span", {
				class: "ellipsis",
				[scope.html ? "innerHTML" : "textContent"]: getOptionLabel.value(scope.opt)
			})));
			return [h("span", {
				class: "q-select__selected-value ellipsis",
				[valueAsHtml.value ? "innerHTML" : "textContent"]: ariaCurrentValue.value
			})];
		}
		function getAllOptions() {
			if (noOptions.value) {
				if (slots["no-option"] !== void 0) return slots["no-option"]({ inputValue: inputValue.value });
				return props.noOptionLabel !== void 0 ? [h(QItem_default, () => h(QItemSection_default, { class: "text-grey" }, () => h(QItemLabel_default, () => props.noOptionLabel)))] : void 0;
			}
			const fn = slots.option !== void 0 ? slots.option : (scope) => h(QItem_default, {
				key: scope.index,
				...scope.itemProps
			}, () => h(QItemSection_default, () => h(QItemLabel_default, () => h("span", { [scope.html ? "innerHTML" : "textContent"]: scope.label }))));
			let options = padVirtualScroll("div", optionScope.value.map(fn), listboxAttrs.value);
			if (slots["before-options"] !== void 0) options = [slots["before-options"](), ...options].flat();
			return hMergeSlot(slots["after-options"], options);
		}
		function getInput(fromDialog, isTarget) {
			const attrs = isTarget ? {
				...comboboxAttrs.value,
				...state.splitAttrs.attributes.value
			} : void 0;
			const data = {
				ref: isTarget ? targetRef : void 0,
				key: "i_t",
				class: computedInputClass.value,
				style: props.inputStyle,
				value: inputValue.value !== void 0 ? inputValue.value : "",
				type: "search",
				...attrs,
				id: isTarget ? state.targetUid.value : void 0,
				maxlength: props.maxlength,
				autocomplete: props.autocomplete,
				"data-autofocus": fromDialog === true || props.autofocus || void 0,
				disabled: props.disable,
				readonly: props.readonly,
				...inputControlEvents.value
			};
			if (isTarget) Object.assign(data, state.getErrorAriaAttrs(data));
			if (!fromDialog && hasDialog) {
				if (Array.isArray(data.class)) data.class = [...data.class, "no-pointer-events"];
				else data.class += " no-pointer-events";
			}
			return h("input", data);
		}
		function onInput(e) {
			if (filterTimer !== null) {
				clearTimeout(filterTimer);
				filterTimer = null;
			}
			if (inputValueTimer !== null) {
				clearTimeout(inputValueTimer);
				inputValueTimer = null;
			}
			if (e?.target?.qComposing) return;
			setInputValue(e.target.value || "");
			userInputValue = true;
			defaultInputValue = inputValue.value;
			if (!state.focused.value && (!hasDialog || dialogFieldFocused.value)) state.focus();
			if (props.onFilter !== void 0) {
				if (hasDialog && !dialog.value) showPopup(e);
				else filterTimer = setTimeout(() => {
					filterTimer = null;
					filter(inputValue.value);
				}, props.inputDebounce);
			}
		}
		function setInputValue(val, emitImmediately) {
			if (inputValue.value !== val) {
				if (inputValueTimer !== null) {
					clearTimeout(inputValueTimer);
					inputValueTimer = null;
				}
				inputValue.value = val;
				if (emitImmediately || props.inputDebounce === 0 || props.inputDebounce === "0") emit("inputValue", val);
				else inputValueTimer = setTimeout(() => {
					inputValueTimer = null;
					emit("inputValue", val);
				}, props.inputDebounce);
			}
		}
		function updateInputValue(val, noFiltering, internal) {
			userInputValue = internal !== true;
			if (props.useInput) {
				setInputValue(val, true);
				if (noFiltering || userInputValue) defaultInputValue = val;
				if (!noFiltering) filter(val);
			}
		}
		function filter(val, keepClosed, afterUpdateFn) {
			if (props.onFilter === void 0 || !keepClosed && !state.focused.value && !hoverShown) return;
			if (state.innerLoading.value) emit("filterAbort");
			else {
				state.innerLoading.value = true;
				innerLoadingIndicator.value = true;
			}
			if (val !== "" && !props.multiple && innerValue.value.length !== 0 && !userInputValue && val === getOptionLabel.value(innerValue.value[0])) val = "";
			const localFilterId = setTimeout(() => {
				if (menu.value) menu.value = false;
			}, 10);
			if (filterId !== null) clearTimeout(filterId);
			filterId = localFilterId;
			emit("filter", val, (fn, afterFn) => {
				if ((keepClosed || state.focused.value || hoverShown) && filterId === localFilterId) {
					clearTimeout(filterId);
					if (typeof fn === "function") fn();
					innerLoadingIndicator.value = false;
					nextTick(() => {
						state.innerLoading.value = false;
						if (state.editable.value) {
							if (keepClosed) {
								if (menu.value) hidePopup();
							} else if (menu.value) updateMenu(true);
							else menu.value = true;
						}
						if (typeof afterFn === "function") nextTick(() => {
							afterFn(proxy);
						});
						if (typeof afterUpdateFn === "function") nextTick(() => {
							afterUpdateFn(proxy);
						});
					});
				}
			}, () => {
				if ((keepClosed || state.focused.value || hoverShown) && filterId === localFilterId) {
					clearTimeout(filterId);
					state.innerLoading.value = false;
					innerLoadingIndicator.value = false;
				}
				if (menu.value) menu.value = false;
			});
		}
		function prefetchUnmappedOptions() {
			if (virtualScrollLength.value !== 0 || innerValue.value.every((opt) => opt !== null && typeof opt === "object")) return false;
			filter("", true, resetInputValue);
			return true;
		}
		function getMenu() {
			return h(QMenu_default, {
				ref: menuRef,
				class: menuContentClass.value,
				style: props.popupContentStyle,
				modelValue: menu.value,
				fit: !props.menuShrink,
				cover: props.optionsCover && !noOptions.value && !props.useInput,
				anchor: props.menuAnchor,
				self: props.menuSelf,
				offset: props.menuOffset,
				dark: isOptionsDark.value,
				noParentEvent: true,
				noRefocus: true,
				noFocus: true,
				noRouteDismiss: props.popupNoRouteDismiss,
				square: squaredMenu.value,
				transitionShow: props.transitionShow,
				transitionHide: props.transitionHide,
				transitionDuration: props.transitionDuration,
				separateClosePopup: true,
				onScrollPassive: onVirtualScrollEvt,
				onBeforeShow: onControlPopupShow,
				onBeforeHide: onMenuBeforeHide,
				onShow: onMenuShow,
				...props.hover ? {
					onPointerenter: onHoverContentEnter,
					onPointerleave: hoverHide
				} : {}
			}, getAllOptions);
		}
		function onMenuBeforeHide(e) {
			onControlPopupHide(e);
			closeMenu();
		}
		function onMenuShow() {
			setVirtualScrollSize();
		}
		function onDialogFieldFocus(e) {
			stop(e);
			targetRef.value?.focus();
			dialogFieldFocused.value = true;
			if ($q.platform.is.ios) window.scrollTo(window.scrollX, 0);
		}
		function onDialogFieldBlur(e) {
			stop(e);
			nextTick(() => {
				dialogFieldFocused.value = false;
			});
		}
		function getDialog() {
			const content = [h(QField_default, {
				class: `col-auto ${state.fieldClass.value}`,
				...innerFieldProps.value,
				for: state.targetUid.value,
				dark: isOptionsDark.value,
				square: true,
				loading: innerLoadingIndicator.value,
				itemAligned: false,
				filled: true,
				stackLabel: inputValue.value.length !== 0,
				...state.splitAttrs.listeners.value,
				onFocus: onDialogFieldFocus,
				onBlur: onDialogFieldBlur
			}, {
				...slots,
				rawControl: () => state.getControl(true),
				before: void 0,
				after: void 0,
				append: props.hideDialogClose ? slots.append : () => {
					const closeBtn = h("button", {
						class: "q-select__dialog-close" + (props.color !== void 0 ? ` text-${props.color}` : ""),
						type: "button",
						tabindex: 0,
						onClick: hidePopup
					}, $q.lang.label.close);
					return slots.append !== void 0 ? [...slots.append(), closeBtn] : [closeBtn];
				}
			})];
			if (menu.value) content.push(h("div", {
				ref: menuContentRef,
				class: menuContentClass.value + " scroll",
				style: props.popupContentStyle,
				onClick: prevent,
				onScrollPassive: onVirtualScrollEvt
			}, getAllOptions()));
			return h(QDialog_default, {
				ref: dialogRef,
				modelValue: dialog.value,
				position: props.useInput ? "top" : void 0,
				noFocus: true,
				transitionShow: transitionShowComputed,
				transitionHide: props.transitionHide,
				transitionDuration: props.transitionDuration,
				noRouteDismiss: props.popupNoRouteDismiss,
				onBeforeShow: onControlPopupShow,
				onBeforeHide: onDialogBeforeHide,
				onHide: onDialogHide,
				onShow: onDialogShow
			}, () => h("div", { class: "q-select__dialog" + (isOptionsDark.value ? " q-select__dialog--dark q-dark" : "") + (dialogFieldFocused.value ? " q-select__dialog--focused" : "") }, content));
		}
		function onDialogBeforeHide(e) {
			onControlPopupHide(e);
			if (dialogRef.value !== null) {
				const refocusTarget = !$q.platform.is.mobile || !props.useInput || e !== void 0 && (e.type.indexOf("key") === 0 || e.type === "click" && e.detail === 0) ? state.rootRef.value.querySelector(".q-field__native > .q-select__focus-target, .q-field__native > .q-field__input") : null;
				dialogRef.value.__updateRefocusTarget(refocusTarget);
			}
			state.focused.value = false;
		}
		function onDialogHide(e) {
			hidePopup();
			if (!state.focused.value) emit("blur", e);
			resetInputValue();
		}
		function onDialogShow() {
			const el = document.activeElement;
			if ((el === null || el.id !== state.targetUid.value) && targetRef.value !== null && targetRef.value !== el) targetRef.value.focus();
			setVirtualScrollSize();
		}
		function closeMenu(e) {
			if (dialog.value) return;
			clearHoverTimer();
			hoverShown = false;
			optionIndex.value = -1;
			if (menu.value) {
				if (e !== void 0) e.qSelectHandled = true;
				menu.value = false;
				menuRef.value?.hide(e);
			}
			if (!state.focused.value) {
				if (filterId !== null) {
					clearTimeout(filterId);
					filterId = null;
				}
				if (state.innerLoading.value) {
					emit("filterAbort");
					state.innerLoading.value = false;
					innerLoadingIndicator.value = false;
				}
			}
		}
		function hoverWithinScope(el) {
			if (el === null || el === void 0) return false;
			const menuContent = menuRef.value !== null ? menuRef.value.contentEl : null;
			if (state.controlRef.value !== null && state.controlRef.value.contains(el) || menuContent !== null && menuContent.contains(el)) return true;
			let portalProxy = getPortalProxy(el);
			while (portalProxy !== void 0 && portalProxy !== null) {
				if (portalProxy === proxy) return true;
				portalProxy = getParentProxy(portalProxy);
			}
			return false;
		}
		const { clearHoverTimer, hoverShow, hoverHide, onHoverContentEnter } = useHover({
			props,
			canShow: () => !hasDialog && !hoverShown && !menu.value && state.editable.value,
			show: hoverShowPopup,
			canHide: (evt) => hoverShown && !hoverWithinScope(evt.relatedTarget),
			hide: hidePopup
		});
		function hoverShowPopup(evt) {
			if (props.onFilter === void 0 && noOptions.value && !hasNoOptionDisplay()) return;
			hoverShown = true;
			hoverShownAt = Date.now();
			evt.qSelectHandled = true;
			if (props.onFilter !== void 0) filter(inputValue.value);
			else {
				menu.value = true;
				menuRef.value?.show(evt);
			}
		}
		function showPopup(e) {
			if (!state.editable.value) return;
			clearHoverTimer();
			hoverShown = false;
			if (e !== void 0) e.qSelectHandled = true;
			if (hasDialog) {
				state.onControlFocusin(e);
				state.focus();
				dialog.value = true;
				dialogRef.value?.show(e);
				nextTick(() => {
					state.focus();
				});
			} else state.focus();
			if (props.onFilter !== void 0) filter(inputValue.value);
			else if (!noOptions.value || hasNoOptionDisplay()) {
				menu.value = true;
				menuRef.value?.show(e);
			}
		}
		function hidePopup(e) {
			if (dialog.value) {
				if (e !== void 0) e.qSelectHandled = true;
				dialog.value = false;
				dialogRef.value?.hide(e);
			}
			closeMenu(e);
		}
		function resetInputValue() {
			if (props.useInput) updateInputValue(!props.multiple && props.fillInput && innerValue.value.length !== 0 ? getOptionLabel.value(innerValue.value[0]) ?? "" : "", true, true);
		}
		function updateMenu(show) {
			let localOptionIndex = -1;
			if (show) {
				if (innerValue.value.length !== 0) {
					const val = getOptionValue.value(innerValue.value[0]);
					localOptionIndex = props.options.findIndex((v) => isDeepEqual(getOptionValue.value(v), val));
				}
				localResetVirtualScroll(localOptionIndex);
			}
			setOptionIndex(localOptionIndex);
			optionIndexFromModel = localOptionIndex !== -1;
		}
		function rerenderMenu(newLength, oldLength) {
			if (menu.value && !state.innerLoading.value) {
				localResetVirtualScroll(-1, true);
				nextTick(() => {
					if (menu.value && !state.innerLoading.value) {
						if (newLength > oldLength) localResetVirtualScroll();
						else updateMenu(true);
					}
				});
			}
		}
		function updateMenuPosition() {
			if (!dialog.value) menuRef.value?.updatePosition();
		}
		function onControlPopupShow(e) {
			if (e !== void 0 && e.qSelectHandled !== true) stop(e);
			emit("popupShow", e);
			state.hasPopupOpen = true;
			if (!hoverShown) state.onControlFocusin(e);
		}
		function onControlPopupHide(e) {
			if (e !== void 0 && e.qSelectHandled !== true) stop(e);
			emit("popupHide", e);
			state.hasPopupOpen = false;
			state.onControlFocusout(e, resetInputValue);
		}
		function updatePreState() {
			hasDialog = !$q.platform.is.mobile && props.behavior !== "dialog" ? false : props.behavior !== "menu" && (props.useInput ? hasNoOptionDisplay() || props.onFilter !== void 0 || !noOptions.value : true);
			transitionShowComputed = $q.platform.is.ios && hasDialog && props.useInput ? "fade" : props.transitionShow;
		}
		onBeforeUpdate(updatePreState);
		onUpdated(updateMenuPosition);
		if (!props.noOptionPrefetch && props.mapOptions && props.onFilter !== void 0) onMounted(() => {
			prefetchPending = !prefetchUnmappedOptions();
		});
		updatePreState();
		onBeforeUnmount(() => {
			if (filterTimer !== null) clearTimeout(filterTimer);
			if (inputValueTimer !== null) clearTimeout(inputValueTimer);
		});
		Object.assign(proxy, {
			showPopup,
			hidePopup,
			removeAtIndex,
			add,
			toggleOption,
			getOptionIndex: () => optionIndex.value,
			setOptionIndex,
			moveOptionSelection,
			filter,
			updateMenuPosition,
			updateInputValue,
			isOptionSelected,
			getEmittingOptionValue,
			isOptionDisabled: (...args) => isOptionDisabled.value(...args) === true,
			getOptionValue: (...args) => getOptionValue.value(...args),
			getOptionLabel: (...args) => getOptionLabel.value(...args)
		});
		Object.assign(state, {
			innerValue,
			fieldClass: computed(() => `q-select q-field--auto-height q-select--with${props.useInput ? "" : "out"}-input q-select--with${props.useChips ? "" : "out"}-chips q-select--${props.multiple ? "multiple" : "single"}`),
			inputRef,
			targetRef,
			hasValue,
			showPopup,
			floatingLabel: computed(() => !props.hideSelected && hasValue.value || typeof inputValue.value === "number" || inputValue.value.length !== 0 || fieldValueIsFilled(props.displayValue)),
			getControlChild: () => {
				if (state.editable.value && (dialog.value || !noOptions.value || hasNoOptionDisplay())) return hasDialog ? getDialog() : getMenu();
				else if (state.hasPopupOpen) state.hasPopupOpen = false;
			},
			controlEvents: {
				onFocusin(e) {
					clearHoverTimer();
					hoverShown = false;
					state.onControlFocusin(e);
				},
				onFocusout(e) {
					state.onControlFocusout(e, () => {
						resetInputValue();
						closeMenu(e);
					});
				},
				onClick(e) {
					prevent(e);
					if (!hasDialog && menu.value) {
						if (hoverShown && Date.now() - hoverShownAt < (props.transitionDuration !== void 0 ? Number(props.transitionDuration) : 300)) {
							hoverShown = false;
							state.focus();
							return;
						}
						closeMenu(e);
						targetRef.value?.focus();
						return;
					}
					showPopup(e);
				},
				onPointerenter: hoverShow,
				onPointerleave: hoverHide
			},
			getControl: (fromDialog) => {
				const child = getSelection();
				const isTarget = fromDialog === true || !dialog.value || !hasDialog;
				if (props.useInput) child.push(getInput(fromDialog, isTarget));
				else {
					const attrs = isTarget ? {
						...comboboxAttrs.value,
						...state.splitAttrs.attributes.value
					} : void 0;
					const data = {
						ref: isTarget ? targetRef : void 0,
						key: "d_t",
						class: "q-select__focus-target",
						value: ariaCurrentValue.value,
						readonly: true,
						"data-autofocus": fromDialog === true || props.autofocus || void 0,
						...attrs,
						disabled: props.disable,
						id: isTarget ? state.targetUid.value : void 0,
						onKeydown: onTargetKeydown,
						onKeyup: onTargetKeyup,
						onKeypress: onTargetKeypress
					};
					if (isTarget) Object.assign(data, state.getErrorAriaAttrs(data));
					child.push(h("input", data));
					if (isTarget && state.editable.value && typeof props.autocomplete === "string" && props.autocomplete.length !== 0) child.push(h("input", {
						class: "q-select__autocomplete-input",
						autocomplete: props.autocomplete,
						tabindex: -1,
						onKeyup: onTargetAutocomplete
					}));
				}
				if (!props.disable) {
					const name = nameProp();
					if (name !== void 0) {
						const opts = innerOptionsValue.value.map((value) => h("option", {
							value,
							selected: true
						}));
						child.push(h("select", {
							class: "hidden",
							name,
							multiple: props.multiple
						}, opts));
					}
				}
				return h("div", {
					class: "q-field__native row items-center",
					...state.splitAttrs.listeners.value
				}, child);
			},
			shouldHideLoadingIndicator: () => props.hideDropdownIcon === true,
			getInnerAppend: () => !props.loading && !innerLoadingIndicator.value && !props.hideDropdownIcon ? [h(QIcon_default, {
				class: "q-select__dropdown-icon" + (menu.value ? " rotate-180" : ""),
				name: dropdownArrowIcon.value
			})] : null
		});
		return useField(state);
	}
});
//#endregion
//#region supported-devices-component/components/multi-select.vue?vue&type=template&lang.js
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_q_item_section = resolveComponent("q-item-section");
	const _component_q_item = resolveComponent("q-item");
	const _component_q_select = resolveComponent("q-select");
	return openBlock(), createBlock(_component_q_select, {
		label: _ctx.label,
		filled: "",
		clearable: "",
		"use-chips": "",
		"use-input": "",
		"input-debounce": "0",
		options: _ctx.filteredOptions,
		onFilter: _ctx.filterFn,
		multiple: "",
		"options-dense": "",
		onPopupHide: _cache[0] || (_cache[0] = ($event) => _ctx.clearSearch(this)),
		ref: "el",
		"onUpdate:modelValue": _ctx.hidePopup
	}, {
		"no-option": withCtx(() => [createVNode(_component_q_item, null, {
			default: withCtx(() => [createVNode(_component_q_item_section, { class: "text-grey" }, {
				default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("No results", -1)])]),
				_: 1
			})]),
			_: 1
		})]),
		_: 1
	}, 8, [
		"label",
		"options",
		"onFilter",
		"onUpdate:modelValue"
	]);
}
//#endregion
//#region supported-devices-component/components/multi-select.vue
var _sfc_main$3 = defineComponent({
	name: "multi-select",
	components: {
		QSelect: QSelect_default,
		QItem: QItem_default,
		QItemSection: QItemSection_default
	},
	props: ["label", "options"],
	inheritAttrs: true,
	setup(props, { emit, attrs }) {
		const el = ref(null);
		const filteredOptions = ref(props.options);
		if (isRef(props.options) || isReactive(props.options)) watch(props.options, (newOpts) => {
			emit("update:modelValue", attrs.modelValue.value.filter((val) => newOpts.includes(val)));
		});
		const hidePopup = () => {
			el.value.hidePopup();
		};
		return {
			el,
			hidePopup,
			clearSearch(target) {
				setTimeout(() => {
					target.$el.querySelector("input").value = "";
				}, 10);
			},
			filteredOptions,
			filterFn(val, update) {
				update(() => {
					const needle = val.toLowerCase();
					filteredOptions.value = props.options.filter((v) => v.toLowerCase().includes(needle));
				});
			}
		};
	}
});
var multi_select_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$3, [["render", render$2]]);
//#endregion
//#region supported-devices-component/devices.js
var supportedDevices = window.ZIGBEE2MQTT_SUPPORTED_DEVICES;
var exposesSet = /* @__PURE__ */ new Set();
var vendorSet = /* @__PURE__ */ new Set();
supportedDevices.forEach(({ exposes, vendor }) => {
	vendorSet.add(vendor);
	exposes.forEach((exp) => exposesSet.add(exp));
});
var natSort = (a, b) => a.localeCompare(b, void 0, { sensitivity: "base" });
var devices = supportedDevices;
var vendors = Array.from(vendorSet).sort(natSort);
var exposes = Array.from(exposesSet).sort(natSort);
var natSortDevices = (devices) => devices.sort((a, b) => {
	const res = natSort(a.vendor, b.vendor);
	if (res === 0) return natSort(a.model, b.model);
	return res;
});
//#endregion
//#region supported-devices-component/hash-store.js
var hash_store_default = {
	arrayKeys: [],
	parseHash() {
		const entries = location.hash.substr(1).split("&").map((pairs) => pairs.split("=")).map(([k, v]) => {
			if (this.arrayKeys.includes(k)) return [k, v.split(",").map((val) => decodeURIComponent(val))];
			else return [k, decodeURIComponent(v)];
		}).filter(([k, v]) => k.length > 0 && v.length > 0);
		return Object.fromEntries(entries);
	},
	updateHash(obj) {
		const hashObj = this.parseHash();
		Object.entries(obj).forEach(([k, v]) => {
			hashObj[k] = v;
		});
		let hash = "#";
		Object.entries(hashObj).forEach(([k, v]) => {
			if (v === void 0 || v === null || v === "") return;
			if (this.arrayKeys.includes(k)) {
				const vals = v.map((val) => encodeURIComponent(val)).join(",");
				hash += `${k}=${vals}&`;
			} else hash += `${k}=${encodeURIComponent(v)}&`;
		});
		location.hash = hash.substr(0, hash.length - 1);
	}
};
//#endregion
//#region supported-devices-component/components/filters.vue?vue&type=template&lang.js
var _hoisted_1$1 = { class: "device-filters" };
var _hoisted_2$1 = { class: "vendor-filter" };
var _hoisted_3$1 = { class: "exposes-filter" };
var _hoisted_4 = { class: "search-filter" };
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_multi_select = resolveComponent("multi-select");
	const _component_q_icon = resolveComponent("q-icon");
	const _component_q_tooltip = resolveComponent("q-tooltip");
	const _component_q_input = resolveComponent("q-input");
	return openBlock(), createElementBlock("div", _hoisted_1$1, [
		createBaseVNode("div", _hoisted_2$1, [createVNode(_component_multi_select, {
			label: "Vendor",
			options: _ctx.vendors,
			modelValue: _ctx.vendorFilter,
			"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.vendorFilter = $event)
		}, null, 8, ["options", "modelValue"])]),
		createBaseVNode("div", _hoisted_3$1, [createVNode(_component_multi_select, {
			label: "Exposes",
			options: _ctx.exposes,
			modelValue: _ctx.exposesFilter,
			"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.exposesFilter = $event)
		}, null, 8, ["options", "modelValue"])]),
		createBaseVNode("div", _hoisted_4, [createVNode(_component_q_input, {
			modelValue: _ctx.searchFilter,
			"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.searchFilter = $event),
			filled: "",
			debounce: 500,
			type: "search",
			placeholder: "Search",
			label: "Search",
			clearable: ""
		}, {
			append: withCtx(() => [createVNode(_component_q_icon, { name: "info" }), createVNode(_component_q_tooltip, {
				offset: [0, 15],
				self: "bottom middle"
			}, {
				default: withCtx(() => [..._cache[3] || (_cache[3] = [
					createTextVNode("RegEx support. E.g you can use", -1),
					createBaseVNode("code", null, " (wall|switch)", -1),
					createTextVNode(" to search for wall OR switch.", -1)
				])]),
				_: 1
			})]),
			_: 1
		}, 8, ["modelValue"])])
	]);
}
//#endregion
//#region supported-devices-component/components/filters.vue
hash_store_default.arrayKeys.push("v");
hash_store_default.arrayKeys.push("e");
var _sfc_main$2 = defineComponent({
	name: "filters",
	components: {
		QInput: QInput_default,
		QTooltip: QTooltip_default,
		QIcon: QIcon_default,
		MultiSelect: multi_select_default
	},
	props: ["modelValue"],
	setup(props, { emit }) {
		const filtersFromHash = hash_store_default.parseHash();
		const exposesFilter = ref(filtersFromHash.e || null);
		const vendorsFilter = ref(filtersFromHash.v || null);
		const searchFilter = ref(filtersFromHash.s || null);
		const emptyArrToNull = (ref) => () => {
			if (Array.isArray(ref.value) && ref.value.length === 0) ref.value = null;
		};
		watch(() => props.modelValue, (modelValue) => {
			if (!modelValue) return;
			const { exposes, vendors, search } = modelValue;
			if (exposes) exposesFilter.value = exposes;
			if (vendors) vendorsFilter.value = vendors;
			if (search) searchFilter.value = search;
		});
		const emitFilters = () => {
			hash_store_default.updateHash({
				e: exposesFilter.value,
				v: vendorsFilter.value,
				s: searchFilter.value
			});
			if (exposesFilter.value || vendorsFilter.value || searchFilter.value) emit("update:modelValue", {
				exposes: exposesFilter.value,
				vendors: vendorsFilter.value,
				search: searchFilter.value
			});
			else emit("update:modelValue", null);
		};
		emitFilters();
		watch(exposesFilter, emptyArrToNull(exposesFilter));
		watch(vendorsFilter, emptyArrToNull(vendorsFilter));
		watch(exposesFilter, emitFilters);
		watch(vendorsFilter, emitFilters);
		watch(searchFilter, emitFilters);
		return {
			exposes,
			vendors,
			exposesFilter,
			vendorFilter: vendorsFilter,
			searchFilter
		};
	}
});
var filters_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["render", render$1]]);
//#endregion
//#region supported-devices-component/utils.js
function debounce_leadingTrailing(func, timeout = 300) {
	let timer;
	let trailing = false;
	return (...args) => {
		if (!timer) {
			func.apply(this, args);
			timer = setTimeout(() => {
				timer = void 0;
				if (trailing) func.apply(this, args);
				trailing = false;
			}, timeout);
		} else trailing = true;
	};
}
//#endregion
//#region supported-devices-component/components/infinite-scroll.vue
var _sfc_main$1 = {
	name: "InfiniteScroll",
	props: {
		debounce: {
			default: 350,
			type: Number
		},
		offset: {
			default: 500,
			type: Number
		}
	},
	emits: ["load"],
	setup(props, { slots, emit }) {
		const el = ref(null);
		const handleScroll = debounce_leadingTrailing(() => {
			if (!el.value) return;
			if (el.value.getBoundingClientRect().bottom - window.innerHeight < props.offset) emit("load");
		}, props.debounce);
		onMounted(() => {
			window.addEventListener("scroll", handleScroll);
		});
		onUnmounted(() => {
			window.removeEventListener("scroll", handleScroll);
		});
		return () => h("div", {
			class: "q-infinite-scroll",
			ref: el
		}, slots.default());
	}
};
//#endregion
//#region supported-devices-component/useFilter.js
function useFilter(filters, devicesFiltered) {
	watch(filters, () => {
		if (!filters.value) {
			devicesFiltered.value = devices;
			return;
		}
		const { exposes, vendors, search } = filters.value;
		let searchRxp = false;
		if (search) try {
			searchRxp = new RegExp(search, "i");
		} catch (e) {}
		devicesFiltered.value = natSortDevices(devices.filter((dev) => {
			if (exposes && !exposes.every((exp) => dev.exposes.includes(exp))) return false;
			if (vendors && !vendors.includes(dev.vendor)) return false;
			if (searchRxp && ![
				"model",
				"vendor",
				"description"
			].some((k) => searchRxp.test(dev[k]))) return false;
			return true;
		}));
	}, { immediate: true });
}
//#endregion
//#region supported-devices-component/SupportedDevices.vue?vue&type=template&lang.js
var _hoisted_1 = { class: "supported-devices" };
var _hoisted_2 = { class: "filters" };
var _hoisted_3 = { key: "no-results" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_filters = resolveComponent("filters");
	const _component_device = resolveComponent("device");
	const _component_infinite_scroll = resolveComponent("infinite-scroll");
	return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createVNode(_component_filters, {
		modelValue: $setup.currentFilters,
		"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.currentFilters = $event)
	}, null, 8, ["modelValue"])]), createVNode(_component_infinite_scroll, { onLoad: $setup.loadItemsByScroll }, {
		default: withCtx(() => [createVNode(TransitionGroup, {
			class: "devices-list",
			tag: "div",
			name: "device"
		}, {
			default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.devicesToShow, (device) => {
				return openBlock(), createBlock(_component_device, {
					key: device.vendor + device.model,
					device,
					onClick: $setup.storePosition,
					onVendorClick: $setup.onVendorClick
				}, null, 8, [
					"device",
					"onClick",
					"onVendorClick"
				]);
			}), 128)), $setup.devicesToShow.length === 0 ? (openBlock(), createElementBlock("p", _hoisted_3, "No devices found.")) : createCommentVNode("", true)]),
			_: 1
		})]),
		_: 1
	}, 8, ["onLoad"])]);
}
var SupportedDevices_default = /*#__PURE__*/ _plugin_vue_export_helper_default({
	name: "SupportedDevices",
	components: {
		InfiniteScroll: _sfc_main$1,
		Filters: filters_default,
		Device: device_default
	},
	setup() {
		const darkMode = f();
		watch(darkMode, (isDark) => Plugin$1.set(isDark), { immediate: true });
		const currentFilters = ref(null);
		const loadIndex = ref(Plugin.getItem("loadIndex") || 1);
		const devicesFiltered = ref([]);
		const devicesToShow = ref([]);
		watch(devicesFiltered, () => {
			devicesToShow.value = devicesFiltered.value.slice(0, 20);
			loadIndex.value = 1;
		});
		watch(loadIndex, (v) => {
			devicesToShow.value = devicesFiltered.value.slice(0, v * 20);
		});
		useFilter(currentFilters, devicesFiltered);
		const loadItemsByScroll = () => {
			if (loadIndex.value * 20 >= devicesFiltered.value.length) return;
			loadIndex.value++;
		};
		const storePosition = () => {
			Plugin.set("zigbee2mqtt-devices-overview", {
				loadIndex: loadIndex.value,
				scrollTop: window.scrollY
			});
		};
		const onVendorClick = (vendor) => {
			if (!currentFilters.value) currentFilters.value = { vendors: [vendor] };
			else if (!currentFilters.value.vendors) currentFilters.value.vendors = [vendor];
			else if (!currentFilters.value.vendors.includes(vendor)) currentFilters.value.vendors.push(vendor);
		};
		onMounted(() => {
			const sessionData = Plugin.getItem("zigbee2mqtt-devices-overview") || {};
			if (sessionData.loadIndex) loadIndex.value = sessionData.loadIndex;
			if (sessionData.scrollTop) setTimeout(() => {
				window.scrollTo(null, sessionData.scrollTop);
			});
		});
		return {
			currentFilters,
			devicesToShow,
			loadItemsByScroll,
			storePosition,
			onVendorClick
		};
	}
}, [["render", render]]);
//#endregion
export { SupportedDevices_default as default };
