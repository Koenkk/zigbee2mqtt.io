import { A as onBeforeUpdate, C as h, D as onActivated, E as nextTick, F as openBlock, G as watch, J as withDirectives, L as renderList, M as onMounted, Mt as toDisplayString, N as onUnmounted, O as onBeforeMount, P as onUpdated, Q as isRef, T as inject, Z as isReactive, _ as createVNode, a as Teleport, b as getCurrentInstance, c as createBaseVNode, d as createElementBlock, g as createTextVNode, i as Fragment, j as onDeactivated, jt as normalizeStyle, k as onBeforeUnmount, l as createBlock, q as withCtx, rt as ref, s as computed, u as createCommentVNode, ut as unref, y as defineComponent, z as resolveComponent } from "./runtime-core.esm-bundler-DuHIhP68.js";
import { i as TransitionGroup, n as f, r as Transition, t as _plugin_vue_export_helper_default } from "./app-DU5Wiwr9.js";
import { A as injectProp, C as stopAndPrevent, D as Platform, O as client, S as stop, T as createDirective, _ as getEventPath, b as position, c as formKey, f as shouldIgnoreKey, g as cleanEvt, h as addEvt, i as isRegexp, k as isRuntimeSsrPreHydration, l as History_default, m as debounce, n as isDeepEqual, o as globalConfig, p as Plugin$1, t as isDate, u as isKeyCode, v as listenOpts, w as createComponent, x as prevent, y as noop } from "./is-DzZh3hDq.js";
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/plugins/storage/engine/web-storage.js
function encode(value) {
	if (isDate(value) === true) return "__q_date|" + value.getTime();
	if (isRegexp(value) === true) return "__q_expr|" + value.source;
	if (typeof value === "number") return "__q_numb|" + value;
	if (typeof value === "boolean") return "__q_bool|" + (value ? "1" : "0");
	if (typeof value === "string") return "__q_strn|" + value;
	if (typeof value === "function") return "__q_strn|" + value.toString();
	if (value === Object(value)) return "__q_objt|" + JSON.stringify(value);
	return value;
}
function decode(value) {
	if (value.length < 9) return value;
	const type = value.substring(0, 8);
	const source = value.substring(9);
	switch (type) {
		case "__q_date":
			const number = Number(source);
			return new Date(Number.isNaN(number) === true ? source : number);
		case "__q_expr": return new RegExp(source);
		case "__q_numb": return Number(source);
		case "__q_bool": return Boolean(source === "1");
		case "__q_strn": return String(source);
		case "__q_objt": return JSON.parse(source);
		default: return value;
	}
}
function getEmptyStorage() {
	const getVal = () => null;
	return {
		has: () => false,
		hasItem: () => false,
		getLength: () => 0,
		getItem: getVal,
		getIndex: getVal,
		getKey: getVal,
		getAll: () => {},
		getAllKeys: () => [],
		set: noop,
		setItem: noop,
		remove: noop,
		removeItem: noop,
		clear: noop,
		isEmpty: () => true
	};
}
function getStorage(type) {
	const webStorage = window[type + "Storage"], get = (key) => {
		const item = webStorage.getItem(key);
		return item ? decode(item) : null;
	};
	const hasItem = (key) => webStorage.getItem(key) !== null;
	const setItem = (key, value) => {
		webStorage.setItem(key, encode(value));
	};
	const removeItem = (key) => {
		webStorage.removeItem(key);
	};
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
		},
		isEmpty: () => webStorage.length === 0
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/plugins/storage/SessionStorage.js
var storage = client.has.webStorage === false ? getEmptyStorage() : getStorage("session");
var Plugin = { install({ $q }) {
	$q.sessionStorage = storage;
} };
Object.assign(Plugin, storage);
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/private.selection/selection.js
function clearSelection() {
	if (window.getSelection !== void 0) {
		const selection = window.getSelection();
		if (selection.empty !== void 0) selection.empty();
		else if (selection.removeAllRanges !== void 0) {
			selection.removeAllRanges();
			if (Platform.is.mobile !== true) selection.addRange(document.createRange());
		}
	} else if (document.selection !== void 0) document.selection.empty();
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/private.use-anchor/use-anchor.js
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
function useAnchor({ showing, avoidEmit, configureAnchorEl }) {
	const { props, proxy, emit } = getCurrentInstance();
	const anchorEl = ref(null);
	let touchTimer = null;
	function canShow(evt) {
		return anchorEl.value === null ? false : evt === void 0 || evt.touches === void 0 || evt.touches.length <= 1;
	}
	const anchorEvents = {};
	if (configureAnchorEl === void 0) {
		Object.assign(anchorEvents, {
			hide(evt) {
				proxy.hide(evt);
			},
			toggle(evt) {
				proxy.toggle(evt);
				evt.qAnchorHandled = true;
			},
			toggleKey(evt) {
				if (isKeyCode(evt, 13) === true) anchorEvents.toggle(evt);
			},
			contextClick(evt) {
				proxy.hide(evt);
				prevent(evt);
				nextTick(() => {
					proxy.show(evt);
					evt.qAnchorHandled = true;
				});
			},
			prevent,
			mobileTouch(evt) {
				anchorEvents.mobileCleanup(evt);
				if (canShow(evt) !== true) return;
				proxy.hide(evt);
				anchorEl.value.classList.add("non-selectable");
				const target = evt.target;
				addEvt(anchorEvents, "anchor", [
					[
						target,
						"touchmove",
						"mobileCleanup",
						"passive"
					],
					[
						target,
						"touchend",
						"mobileCleanup",
						"passive"
					],
					[
						target,
						"touchcancel",
						"mobileCleanup",
						"passive"
					],
					[
						anchorEl.value,
						"contextmenu",
						"prevent",
						"notPassive"
					]
				]);
				touchTimer = setTimeout(() => {
					touchTimer = null;
					proxy.show(evt);
					evt.qAnchorHandled = true;
				}, 300);
			},
			mobileCleanup(evt) {
				anchorEl.value.classList.remove("non-selectable");
				if (touchTimer !== null) {
					clearTimeout(touchTimer);
					touchTimer = null;
				}
				if (showing.value === true && evt !== void 0) clearSelection();
			}
		});
		configureAnchorEl = function configureAnchorElFn(context = props.contextMenu) {
			if (props.noParentEvent === true || anchorEl.value === null) return;
			let evts;
			if (context === true) if (proxy.$q.platform.is.mobile === true) evts = [[
				anchorEl.value,
				"touchstart",
				"mobileTouch",
				"passive"
			]];
			else evts = [[
				anchorEl.value,
				"mousedown",
				"hide",
				"passive"
			], [
				anchorEl.value,
				"contextmenu",
				"contextClick",
				"notPassive"
			]];
			else evts = [[
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
			addEvt(anchorEvents, "anchor", evts);
		};
	}
	function unconfigureAnchorEl() {
		cleanEvt(anchorEvents, "anchor");
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
	}
	watch(() => props.contextMenu, (val) => {
		if (anchorEl.value !== null) {
			unconfigureAnchorEl();
			configureAnchorEl(val);
		}
	});
	watch(() => props.target, () => {
		if (anchorEl.value !== null) unconfigureAnchorEl();
		pickAnchorEl();
	});
	watch(() => props.noParentEvent, (val) => {
		if (anchorEl.value !== null) if (val === true) unconfigureAnchorEl();
		else configureAnchorEl();
	});
	onMounted(() => {
		pickAnchorEl();
		if (avoidEmit !== true && props.modelValue === true && anchorEl.value === null) emit("update:modelValue", false);
	});
	onBeforeUnmount(() => {
		if (touchTimer !== null) clearTimeout(touchTimer);
		unconfigureAnchorEl();
	});
	return {
		anchorEl,
		canShow,
		anchorEvents
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/private.use-scroll-target/use-scroll-target.js
function useScrollTarget(props, configureScrollTarget) {
	const localScrollTarget = ref(null);
	let scrollFn;
	function changeScrollEvent(scrollTarget, fn) {
		const fnProp = `${fn !== void 0 ? "add" : "remove"}EventListener`;
		const fnHandler = fn !== void 0 ? fn : scrollFn;
		if (scrollTarget !== window) scrollTarget[fnProp]("scroll", fnHandler, listenOpts.passive);
		window[fnProp]("scroll", fnHandler, listenOpts.passive);
		scrollFn = fn;
	}
	function unconfigureScrollTarget() {
		if (localScrollTarget.value !== null) {
			changeScrollEvent(localScrollTarget.value);
			localScrollTarget.value = null;
		}
	}
	onBeforeUnmount(watch(() => props.noParentEvent, () => {
		if (localScrollTarget.value !== null) {
			unconfigureScrollTarget();
			configureScrollTarget();
		}
	}));
	return {
		localScrollTarget,
		unconfigureScrollTarget,
		changeScrollEvent
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/private.vm/vm.js
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
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/private.use-model-toggle/use-model-toggle.js
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
function useModelToggle({ showing, canShow, hideOnRouteChange, handleShow, handleHide, processOnMount }) {
	const vm = getCurrentInstance();
	const { props, emit, proxy } = vm;
	let payload;
	function toggle(evt) {
		if (showing.value === true) hide(evt);
		else show(evt);
	}
	function show(evt) {
		if (props.disable === true || evt?.qAnchorHandled === true || canShow !== void 0 && canShow(evt) !== true) return;
		const listener = props["onUpdate:modelValue"] !== void 0;
		if (listener === true && true) {
			emit("update:modelValue", true);
			payload = evt;
			nextTick(() => {
				if (payload === evt) payload = void 0;
			});
		}
		if (props.modelValue === null || listener === false || false) processShow(evt);
	}
	function processShow(evt) {
		if (showing.value === true) return;
		showing.value = true;
		emit("beforeShow", evt);
		if (handleShow !== void 0) handleShow(evt);
		else emit("show", evt);
	}
	function hide(evt) {
		if (props.disable === true) return;
		const listener = props["onUpdate:modelValue"] !== void 0;
		if (listener === true && true) {
			emit("update:modelValue", false);
			payload = evt;
			nextTick(() => {
				if (payload === evt) payload = void 0;
			});
		}
		if (props.modelValue === null || listener === false || false) processHide(evt);
	}
	function processHide(evt) {
		if (showing.value === false) return;
		showing.value = false;
		emit("beforeHide", evt);
		if (handleHide !== void 0) handleHide(evt);
		else emit("hide", evt);
	}
	function processModelChange(val) {
		if (props.disable === true && val === true) {
			if (props["onUpdate:modelValue"] !== void 0) emit("update:modelValue", false);
		} else if (val === true !== showing.value) (val === true ? processShow : processHide)(payload);
	}
	watch(() => props.modelValue, processModelChange);
	if (hideOnRouteChange !== void 0 && vmHasRouter(vm) === true) watch(() => proxy.$route.fullPath, () => {
		if (hideOnRouteChange.value === true && showing.value === true) hide();
	});
	if (processOnMount === true) onMounted(() => {
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
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/private.focus/focus-manager.js
var queue = [];
var waitFlags = [];
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
		queue[queue.length - 1]();
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
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/private.config/nodes.js
var nodesList = [];
var portalTypeList = [];
var portalIndex = 1;
var target = document.body;
function createGlobalNode(id, portalType) {
	const el = document.createElement("div");
	el.id = portalType !== void 0 ? `q-portal--${portalType}--${portalIndex++}` : id;
	if (globalConfig.globalNodes !== void 0) {
		const cls = globalConfig.globalNodes.class;
		if (cls !== void 0) el.className = cls;
	}
	target.appendChild(el);
	nodesList.push(el);
	portalTypeList.push(portalType);
	return el;
}
function removeGlobalNode(el) {
	const nodeIndex = nodesList.indexOf(el);
	nodesList.splice(nodeIndex, 1);
	portalTypeList.splice(nodeIndex, 1);
	el.remove();
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/private.portal/portal.js
var portalProxyList = [];
function closePortalMenus(proxy, evt) {
	do {
		if (proxy.$options.name === "QMenu") {
			proxy.hide(evt);
			if (proxy.$props.separateClosePopup === true) return getParentProxy(proxy);
		} else if (proxy.__qPortal === true) {
			const parent = getParentProxy(proxy);
			if (parent?.$options.name === "QPopupProxy") {
				proxy.hide(evt);
				return parent;
			} else return proxy;
		}
		proxy = getParentProxy(proxy);
	} while (proxy !== void 0 && proxy !== null);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/private.use-portal/use-portal.js
/**
* Noop internal component to ease testing
* of the teleported content.
*
* const wrapper = mount(QDialog, { ... })
* const teleportedWrapper = wrapper.findComponent({ name: 'QPortal' })
*/
var QPortal = createComponent({
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
function usePortal(vm, innerRef, renderPortalContent, type) {
	const portalIsActive = ref(false);
	const portalIsAccessible = ref(false);
	let portalEl = null;
	const focusObj = {};
	const onGlobalDialog = type === "dialog" && isOnGlobalDialog(vm);
	function showPortal(isReady) {
		if (isReady === true) {
			removeFocusWaitFlag(focusObj);
			portalIsAccessible.value = true;
			return;
		}
		portalIsAccessible.value = false;
		if (portalIsActive.value === false) {
			if (onGlobalDialog === false && portalEl === null) portalEl = createGlobalNode(false, type);
			portalIsActive.value = true;
			portalProxyList.push(vm.proxy);
			addFocusWaitFlag(focusObj);
		}
	}
	function hidePortal(isReady) {
		portalIsAccessible.value = false;
		if (isReady !== true) return;
		removeFocusWaitFlag(focusObj);
		portalIsActive.value = false;
		const index = portalProxyList.indexOf(vm.proxy);
		if (index !== -1) portalProxyList.splice(index, 1);
		if (portalEl !== null) {
			removeGlobalNode(portalEl);
			portalEl = null;
		}
	}
	onUnmounted(() => {
		hidePortal(true);
	});
	vm.proxy.__qPortal = true;
	injectProp(vm.proxy, "contentEl", () => innerRef.value);
	return {
		showPortal,
		hidePortal,
		portalIsActive,
		portalIsAccessible,
		renderPortal: () => onGlobalDialog === true ? renderPortalContent() : portalIsActive.value === true ? [h(Teleport, { to: portalEl }, h(QPortal, renderPortalContent))] : void 0
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/private.use-transition/use-transition.js
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
function useTransition(props, defaultShowFn = () => {}, defaultHideFn = () => {}) {
	return {
		transitionProps: computed(() => {
			const show = `q-transition--${props.transitionShow || defaultShowFn()}`;
			const hide = `q-transition--${props.transitionHide || defaultHideFn()}`;
			return {
				appear: true,
				enterFromClass: `${show}-enter-from`,
				enterActiveClass: `${show}-enter-active`,
				enterToClass: `${show}-enter-to`,
				leaveFromClass: `${hide}-leave-from`,
				leaveActiveClass: `${hide}-leave-active`,
				leaveToClass: `${hide}-leave-to`
			};
		}),
		transitionStyle: computed(() => `--q-transition-duration: ${props.transitionDuration}ms`)
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/use-tick/use-tick.js
function useTick() {
	let tickFn;
	const vm = getCurrentInstance();
	function removeTick() {
		tickFn = void 0;
	}
	onDeactivated(removeTick);
	onBeforeUnmount(removeTick);
	return {
		removeTick,
		registerTick(fn) {
			tickFn = fn;
			nextTick(() => {
				if (tickFn === fn) {
					if (vmIsDestroyed(vm) === false) tickFn();
					tickFn = void 0;
				}
			});
		}
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/use-timeout/use-timeout.js
function useTimeout() {
	let timer = null;
	const vm = getCurrentInstance();
	function removeTimeout() {
		if (timer !== null) {
			clearTimeout(timer);
			timer = null;
		}
	}
	onDeactivated(removeTimeout);
	onBeforeUnmount(removeTimeout);
	return {
		removeTimeout,
		registerTimeout(fn, delay) {
			removeTimeout();
			if (vmIsDestroyed(vm) === false) timer = setTimeout(() => {
				timer = null;
				fn();
			}, delay);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/dom/dom.js
function css(element, cssObject) {
	const elementStyle = element.style;
	for (const prop in cssObject) elementStyle[prop] = cssObject[prop];
}
function getElement(el) {
	if (el === void 0 || el === null) return;
	if (typeof el === "string") try {
		return document.querySelector(el) || void 0;
	} catch {
		return;
	}
	const target = unref(el);
	if (target) return target.$el || target;
}
function childHasFocus(el, focusedEl) {
	if (el === void 0 || el === null || el.contains(focusedEl) === true) return true;
	for (let next = el.nextElementSibling; next !== null; next = next.nextElementSibling) if (next.contains(focusedEl)) return true;
	return false;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/scroll/scroll.js
var scrollTargetProp = [Element, String];
var scrollTargets = [
	null,
	document,
	document.body,
	document.scrollingElement,
	document.documentElement
];
function getScrollTarget(el, targetEl) {
	let target = getElement(targetEl);
	if (target === void 0) {
		if (el === void 0 || el === null) return window;
		target = el.closest(".scroll,.scroll-y,.overflow-auto");
	}
	return scrollTargets.includes(target) ? window : target;
}
function getVerticalScrollPosition(scrollTarget) {
	return scrollTarget === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : scrollTarget.scrollTop;
}
function getHorizontalScrollPosition(scrollTarget) {
	return scrollTarget === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : scrollTarget.scrollLeft;
}
var size;
function getScrollbarWidth() {
	if (size !== void 0) return size;
	const inner = document.createElement("p"), outer = document.createElement("div");
	css(inner, {
		width: "100%",
		height: "200px"
	});
	css(outer, {
		position: "absolute",
		top: "0px",
		left: "0px",
		visibility: "hidden",
		width: "200px",
		height: "150px",
		overflow: "hidden"
	});
	outer.appendChild(inner);
	document.body.appendChild(outer);
	const w1 = inner.offsetWidth;
	outer.style.overflow = "scroll";
	let w2 = inner.offsetWidth;
	if (w1 === w2) w2 = outer.clientWidth;
	outer.remove();
	size = w1 - w2;
	return size;
}
function hasScrollbar(el, onY = true) {
	if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
	return onY ? el.scrollHeight > el.clientHeight && (el.classList.contains("scroll") || el.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(el)["overflow-y"])) : el.scrollWidth > el.clientWidth && (el.classList.contains("scroll") || el.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(el)["overflow-x"]));
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/private.render/render.js
function hSlot(slot, otherwise) {
	return slot !== void 0 ? slot() || otherwise : otherwise;
}
function hUniqueSlot(slot, otherwise) {
	if (slot !== void 0) {
		const vnode = slot();
		if (vnode !== void 0 && vnode !== null) return vnode.slice();
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
function hDir(tag, data, children, key, condition, getDirsFn) {
	data.key = key + condition;
	const vnode = h(tag, data, children);
	return condition === true ? withDirectives(vnode, getDirsFn()) : vnode;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/private.click-outside/click-outside.js
var timer = null;
var { notPassiveCapture } = listenOpts, registeredList = [];
function globalHandler(evt) {
	if (timer !== null) {
		clearTimeout(timer);
		timer = null;
	}
	const target = evt.target;
	if (target === void 0 || target.nodeType === 8 || target.classList.contains("no-pointer-events") === true) return;
	let portalIndex = portalProxyList.length - 1;
	while (portalIndex >= 0) {
		const proxy = portalProxyList[portalIndex].$;
		if (proxy.type.name === "QTooltip") {
			portalIndex--;
			continue;
		}
		if (proxy.type.name !== "QDialog") break;
		if (proxy.props.seamless !== true) return;
		portalIndex--;
	}
	for (let i = registeredList.length - 1; i >= 0; i--) {
		const state = registeredList[i];
		if ((state.anchorEl.value === null || state.anchorEl.value.contains(target) === false) && (target === document.body || state.innerRef.value !== null && state.innerRef.value.contains(target) === false)) {
			evt.qClickOutside = true;
			state.onClickOutside(evt);
		} else return;
	}
}
function addClickOutside(clickOutsideProps) {
	registeredList.push(clickOutsideProps);
	if (registeredList.length === 1) {
		document.addEventListener("mousedown", globalHandler, notPassiveCapture);
		document.addEventListener("touchstart", globalHandler, notPassiveCapture);
	}
}
function removeClickOutside(clickOutsideProps) {
	const index = registeredList.findIndex((h) => h === clickOutsideProps);
	if (index !== -1) {
		registeredList.splice(index, 1);
		if (registeredList.length === 0) {
			if (timer !== null) {
				clearTimeout(timer);
				timer = null;
			}
			document.removeEventListener("mousedown", globalHandler, notPassiveCapture);
			document.removeEventListener("touchstart", globalHandler, notPassiveCapture);
		}
	}
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/private.position-engine/position-engine.js
var vpLeft, vpTop;
function validatePosition(pos) {
	const parts = pos.split(" ");
	if (parts.length !== 2) return false;
	if ([
		"top",
		"center",
		"bottom"
	].includes(parts[0]) !== true) {
		console.error("Anchor/Self position must start with one of top/center/bottom");
		return false;
	}
	if ([
		"left",
		"middle",
		"right",
		"start",
		"end"
	].includes(parts[1]) !== true) {
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
function parsePosition(pos, rtl) {
	const parts = pos.split(" ");
	return {
		vertical: parts[0],
		horizontal: horizontalPos[`${parts[1]}#${rtl === true ? "rtl" : "ltr"}`]
	};
}
function getAnchorProps(el, offset) {
	let { top, left, right, bottom, width, height } = el.getBoundingClientRect();
	if (offset !== void 0) {
		top -= offset[1];
		left -= offset[0];
		bottom += offset[1];
		right += offset[0];
		width += offset[0];
		height += offset[1];
	}
	return {
		top,
		bottom,
		height,
		left,
		right,
		width,
		middle: left + (right - left) / 2,
		center: top + (bottom - top) / 2
	};
}
function getAbsoluteAnchorProps(el, absoluteOffset, offset) {
	let { top, left } = el.getBoundingClientRect();
	top += absoluteOffset.top;
	left += absoluteOffset.left;
	if (offset !== void 0) {
		top += offset[1];
		left += offset[0];
	}
	return {
		top,
		bottom: top + 1,
		height: 1,
		left,
		right: left + 1,
		width: 1,
		middle: left,
		center: top
	};
}
function getTargetProps(width, height) {
	return {
		top: 0,
		center: height / 2,
		bottom: height,
		left: 0,
		middle: width / 2,
		right: width
	};
}
function getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin) {
	return {
		top: anchorProps[anchorOrigin.vertical] - targetProps[selfOrigin.vertical],
		left: anchorProps[anchorOrigin.horizontal] - targetProps[selfOrigin.horizontal]
	};
}
function setPosition(cfg, retryNumber = 0) {
	if (cfg.targetEl === null || cfg.anchorEl === null || retryNumber > 5) return;
	if (cfg.targetEl.offsetHeight === 0 || cfg.targetEl.offsetWidth === 0) {
		setTimeout(() => {
			setPosition(cfg, retryNumber + 1);
		}, 10);
		return;
	}
	const { targetEl, offset, anchorEl, anchorOrigin, selfOrigin, absoluteOffset, fit, cover, maxHeight, maxWidth } = cfg;
	if (client.is.ios === true && window.visualViewport !== void 0) {
		const el = document.body.style;
		const { offsetLeft: left, offsetTop: top } = window.visualViewport;
		if (left !== vpLeft) {
			el.setProperty("--q-pe-left", left + "px");
			vpLeft = left;
		}
		if (top !== vpTop) {
			el.setProperty("--q-pe-top", top + "px");
			vpTop = top;
		}
	}
	const { scrollLeft, scrollTop } = targetEl;
	const anchorProps = absoluteOffset === void 0 ? getAnchorProps(anchorEl, cover === true ? [0, 0] : offset) : getAbsoluteAnchorProps(anchorEl, absoluteOffset, offset);
	/**
	* We "reset" the critical CSS properties
	* so we can take an accurate measurement.
	*
	* Ensure that targetEl has a max-width & max-height
	* set in CSS and that the value does NOT exceeds 100vw/vh.
	* All users of the position-engine (currently QMenu & QTooltip)
	* have CSS for this.
	*/
	Object.assign(targetEl.style, {
		top: 0,
		left: 0,
		minWidth: null,
		minHeight: null,
		maxWidth,
		maxHeight,
		visibility: "visible"
	});
	const { offsetWidth: origElWidth, offsetHeight: origElHeight } = targetEl;
	const { elWidth, elHeight } = fit === true || cover === true ? {
		elWidth: Math.max(anchorProps.width, origElWidth),
		elHeight: cover === true ? Math.max(anchorProps.height, origElHeight) : origElHeight
	} : {
		elWidth: origElWidth,
		elHeight: origElHeight
	};
	let elStyle = {
		maxWidth,
		maxHeight
	};
	if (fit === true || cover === true) {
		elStyle.minWidth = anchorProps.width + "px";
		if (cover === true) elStyle.minHeight = anchorProps.height + "px";
	}
	Object.assign(targetEl.style, elStyle);
	const targetProps = getTargetProps(elWidth, elHeight);
	let props = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);
	if (absoluteOffset === void 0 || offset === void 0) applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
	else {
		const { top, left } = props;
		applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
		let hasChanged = false;
		if (props.top !== top) {
			hasChanged = true;
			const offsetY = 2 * offset[1];
			anchorProps.center = anchorProps.top -= offsetY;
			anchorProps.bottom -= offsetY + 2;
		}
		if (props.left !== left) {
			hasChanged = true;
			const offsetX = 2 * offset[0];
			anchorProps.middle = anchorProps.left -= offsetX;
			anchorProps.right -= offsetX + 2;
		}
		if (hasChanged === true) {
			props = getTopLeftProps(anchorProps, targetProps, anchorOrigin, selfOrigin);
			applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin);
		}
	}
	elStyle = {
		top: props.top + "px",
		left: props.left + "px"
	};
	if (props.maxHeight !== void 0) {
		elStyle.maxHeight = props.maxHeight + "px";
		if (anchorProps.height > props.maxHeight) elStyle.minHeight = elStyle.maxHeight;
	}
	if (props.maxWidth !== void 0) {
		elStyle.maxWidth = props.maxWidth + "px";
		if (anchorProps.width > props.maxWidth) elStyle.minWidth = elStyle.maxWidth;
	}
	Object.assign(targetEl.style, elStyle);
	if (targetEl.scrollTop !== scrollTop) targetEl.scrollTop = scrollTop;
	if (targetEl.scrollLeft !== scrollLeft) targetEl.scrollLeft = scrollLeft;
}
function applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin) {
	const currentHeight = targetProps.bottom, currentWidth = targetProps.right, margin = getScrollbarWidth(), innerHeight = window.innerHeight - margin, innerWidth = document.body.clientWidth;
	if (props.top < 0 || props.top + currentHeight > innerHeight) if (selfOrigin.vertical === "center") {
		props.top = anchorProps[anchorOrigin.vertical] > innerHeight / 2 ? Math.max(0, innerHeight - currentHeight) : 0;
		props.maxHeight = Math.min(currentHeight, innerHeight);
	} else if (anchorProps[anchorOrigin.vertical] > innerHeight / 2) {
		const anchorY = Math.min(innerHeight, anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.bottom : anchorProps.top);
		props.maxHeight = Math.min(currentHeight, anchorY);
		props.top = Math.max(0, anchorY - currentHeight);
	} else {
		props.top = Math.max(0, anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.top : anchorProps.bottom);
		props.maxHeight = Math.min(currentHeight, innerHeight - props.top);
	}
	if (props.left < 0 || props.left + currentWidth > innerWidth) {
		props.maxWidth = Math.min(currentWidth, innerWidth);
		if (selfOrigin.horizontal === "middle") props.left = anchorProps[anchorOrigin.horizontal] > innerWidth / 2 ? Math.max(0, innerWidth - currentWidth) : 0;
		else if (anchorProps[anchorOrigin.horizontal] > innerWidth / 2) {
			const anchorX = Math.min(innerWidth, anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.right : anchorProps.left);
			props.maxWidth = Math.min(currentWidth, anchorX);
			props.left = Math.max(0, anchorX - props.maxWidth);
		} else {
			props.left = Math.max(0, anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.left : anchorProps.right);
			props.maxWidth = Math.min(currentWidth, innerWidth - props.left);
		}
	}
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip_default = createComponent({
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
		scrollTarget: scrollTargetProp,
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
		let unwatchPosition, observer;
		const vm = getCurrentInstance();
		const { proxy: { $q } } = vm;
		const innerRef = ref(null);
		const showing = ref(false);
		const anchorOrigin = computed(() => parsePosition(props.anchor, $q.lang.rtl));
		const selfOrigin = computed(() => parsePosition(props.self, $q.lang.rtl));
		const hideOnRouteChange = computed(() => props.persistent !== true);
		const { registerTick, removeTick } = useTick();
		const { registerTimeout } = useTimeout();
		const { transitionProps, transitionStyle } = useTransition(props);
		const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
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
			delayHide
		});
		const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent, "tooltip");
		if ($q.platform.is.mobile === true) {
			const clickOutsideProps = {
				anchorEl,
				innerRef,
				onClickOutside(e) {
					hide(e);
					if (e.target.classList.contains("q-dialog__backdrop")) stopAndPrevent(e);
					return true;
				}
			};
			watch(computed(() => props.modelValue === null && props.persistent !== true && showing.value === true), (val) => {
				(val === true ? addClickOutside : removeClickOutside)(clickOutsideProps);
			});
			onBeforeUnmount(() => {
				removeClickOutside(clickOutsideProps);
			});
		}
		function handleShow(evt) {
			showPortal();
			registerTick(() => {
				observer = new MutationObserver(() => updatePosition());
				observer.observe(innerRef.value, {
					attributes: false,
					childList: true,
					characterData: true,
					subtree: true
				});
				updatePosition();
				configureScrollTarget();
			});
			if (unwatchPosition === void 0) unwatchPosition = watch(() => $q.screen.width + "|" + $q.screen.height + "|" + props.self + "|" + props.anchor + "|" + $q.lang.rtl, updatePosition);
			registerTimeout(() => {
				showPortal(true);
				emit("show", evt);
			}, props.transitionDuration);
		}
		function handleHide(evt) {
			removeTick();
			hidePortal();
			anchorCleanup();
			registerTimeout(() => {
				hidePortal(true);
				emit("hide", evt);
			}, props.transitionDuration);
		}
		function anchorCleanup() {
			if (observer !== void 0) {
				observer.disconnect();
				observer = void 0;
			}
			if (unwatchPosition !== void 0) {
				unwatchPosition();
				unwatchPosition = void 0;
			}
			unconfigureScrollTarget();
			cleanEvt(anchorEvents, "tooltipTemp");
		}
		function updatePosition() {
			setPosition({
				targetEl: innerRef.value,
				offset: props.offset,
				anchorEl: anchorEl.value,
				anchorOrigin: anchorOrigin.value,
				selfOrigin: selfOrigin.value,
				maxHeight: props.maxHeight,
				maxWidth: props.maxWidth
			});
		}
		function delayShow(evt) {
			if ($q.platform.is.mobile === true) {
				clearSelection();
				document.body.classList.add("non-selectable");
				const target = anchorEl.value;
				addEvt(anchorEvents, "tooltipTemp", [
					"touchmove",
					"touchcancel",
					"touchend",
					"click"
				].map((e) => [
					target,
					e,
					"delayHide",
					"passiveCapture"
				]));
			}
			registerTimeout(() => {
				show(evt);
			}, props.delay);
		}
		function delayHide(evt) {
			if ($q.platform.is.mobile === true) {
				cleanEvt(anchorEvents, "tooltipTemp");
				clearSelection();
				setTimeout(() => {
					document.body.classList.remove("non-selectable");
				}, 10);
			}
			registerTimeout(() => {
				hide(evt);
			}, props.hideDelay);
		}
		function configureAnchorEl() {
			if (props.noParentEvent === true || anchorEl.value === null) return;
			addEvt(anchorEvents, "anchor", $q.platform.is.mobile === true ? [[
				anchorEl.value,
				"touchstart",
				"delayShow",
				"passive"
			]] : [[
				anchorEl.value,
				"mouseenter",
				"delayShow",
				"passive"
			], [
				anchorEl.value,
				"mouseleave",
				"delayHide",
				"passive"
			]]);
		}
		function configureScrollTarget() {
			if (anchorEl.value !== null || props.scrollTarget !== void 0) {
				localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
				const fn = props.noParentEvent === true ? updatePosition : hide;
				changeScrollEvent(localScrollTarget.value, fn);
			}
		}
		function getTooltipContent() {
			return showing.value === true ? h("div", {
				...attrs,
				ref: innerRef,
				class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", attrs.class],
				style: [attrs.style, transitionStyle.value],
				role: "tooltip"
			}, hSlot(slots.default)) : null;
		}
		function renderPortalContent() {
			return h(Transition, transitionProps.value, getTooltipContent);
		}
		onBeforeUnmount(anchorCleanup);
		Object.assign(vm.proxy, { updatePosition });
		return renderPortal;
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/private.use-size/use-size.js
var useSizeDefaults = {
	xs: 18,
	sm: 24,
	md: 32,
	lg: 38,
	xl: 46
};
var useSizeProps = { size: String };
function useSize(props, sizes = useSizeDefaults) {
	return computed(() => props.size !== void 0 ? { fontSize: props.size in sizes ? `${sizes[props.size]}px` : props.size } : null);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/components/icon/QIcon.js
var defaultViewBox = "0 0 24 24";
var sameFn = (i) => i;
var ionFn = (i) => `ionicons ${i}`;
var libMap = {
	"mdi-": (i) => `mdi ${i}`,
	"icon-": sameFn,
	"bt-": (i) => `bt ${i}`,
	"eva-": (i) => `eva ${i}`,
	"ion-md": ionFn,
	"ion-ios": ionFn,
	"ion-logo": ionFn,
	"iconfont ": sameFn,
	"ti-": (i) => `themify-icon ${i}`,
	"bi-": (i) => `bootstrap-icons ${i}`,
	"i-": sameFn
};
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
var libRE = new RegExp("^(" + Object.keys(libMap).join("|") + ")");
var matRE = new RegExp("^(" + Object.keys(matMap).join("|") + ")");
var symRE = new RegExp("^(" + Object.keys(symMap).join("|") + ")");
var mRE = /^[Mm]\s?[-+]?\.?\d/;
var imgRE = /^img:/;
var svgUseRE = /^svguse:/;
var ionRE = /^ion-/;
var faRE = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var QIcon_default = createComponent({
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
		const { proxy: { $q } } = getCurrentInstance();
		const sizeStyle = useSize(props);
		const classes = computed(() => "q-icon" + (props.left === true ? " on-left" : "") + (props.right === true ? " on-right" : "") + (props.color !== void 0 ? ` text-${props.color}` : ""));
		const type = computed(() => {
			let cls;
			let icon = props.name;
			if (icon === "none" || !icon) return { none: true };
			if ($q.iconMapFn !== null) {
				const res = $q.iconMapFn(icon);
				if (res !== void 0) if (res.icon !== void 0) {
					icon = res.icon;
					if (icon === "none" || !icon) return { none: true };
				} else return {
					cls: res.cls,
					content: res.content !== void 0 ? res.content : " "
				};
			}
			if (mRE.test(icon) === true) {
				const [def, viewBox = defaultViewBox] = icon.split("|");
				return {
					svg: true,
					viewBox,
					nodes: def.split("&&").map((path) => {
						const [d, style, transform] = path.split("@@");
						return h("path", {
							style,
							d,
							transform
						});
					})
				};
			}
			if (imgRE.test(icon) === true) return {
				img: true,
				src: icon.substring(4)
			};
			if (svgUseRE.test(icon) === true) {
				const [def, viewBox = defaultViewBox] = icon.split("|");
				return {
					svguse: true,
					src: def.substring(7),
					viewBox
				};
			}
			let content = " ";
			const matches = icon.match(libRE);
			if (matches !== null) cls = libMap[matches[1]](icon);
			else if (faRE.test(icon) === true) cls = icon;
			else if (ionRE.test(icon) === true) cls = `ionicons ion-${$q.platform.is.ios === true ? "ios" : "md"}${icon.substring(3)}`;
			else if (symRE.test(icon) === true) {
				cls = "notranslate material-symbols";
				const symMatches = icon.match(symRE);
				if (symMatches !== null) {
					icon = icon.substring(6);
					cls += symMap[symMatches[1]];
				}
				content = icon;
			} else {
				cls = "notranslate material-icons";
				const matMatches = icon.match(matRE);
				if (matMatches !== null) {
					icon = icon.substring(2);
					cls += matMap[matMatches[1]];
				}
				content = icon;
			}
			return {
				cls,
				content
			};
		});
		return () => {
			const data = {
				class: classes.value,
				style: sizeStyle.value,
				"aria-hidden": "true"
			};
			if (type.value.none === true) return h(props.tag, data, hSlot(slots.default));
			if (type.value.img === true) return h(props.tag, data, hMergeSlot(slots.default, [h("img", { src: type.value.src })]));
			if (type.value.svg === true) return h(props.tag, data, hMergeSlot(slots.default, [h("svg", { viewBox: type.value.viewBox || "0 0 24 24" }, type.value.nodes)]));
			if (type.value.svguse === true) return h(props.tag, data, hMergeSlot(slots.default, [h("svg", { viewBox: type.value.viewBox }, [h("use", { "xlink:href": type.value.src })])]));
			if (type.value.cls !== void 0) data.class += " " + type.value.cls;
			return h(props.tag, data, hMergeSlot(slots.default, [type.value.content]));
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
			isNew.value = new Date(device.addedAt) > Date.now() - 720 * 3600 * 1e3;
			link.value = device.link.substr(2);
		}, { immediate: true });
		return {
			isNew,
			link
		};
	}
}, [["render", render$3]]);
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/components/spinner/use-spinner.js
var useSpinnerProps = {
	size: {
		type: [String, Number],
		default: "1em"
	},
	color: String
};
function useSpinner(props) {
	return {
		cSize: computed(() => props.size in useSizeDefaults ? `${useSizeDefaults[props.size]}px` : props.size),
		classes: computed(() => "q-spinner" + (props.color ? ` text-${props.color}` : ""))
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner_default = createComponent({
	name: "QSpinner",
	props: {
		...useSpinnerProps,
		thickness: {
			type: Number,
			default: 5
		}
	},
	setup(props) {
		const { cSize, classes } = useSpinner(props);
		return () => h("svg", {
			class: classes.value + " q-spinner-mat",
			width: cSize.value,
			height: cSize.value,
			viewBox: "25 25 50 50"
		}, [h("circle", {
			class: "path",
			cx: "50",
			cy: "50",
			r: "20",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": props.thickness,
			"stroke-miterlimit": "10"
		})]);
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/uid/uid.js
/**
* Based on the work of https://github.com/jchook/uuid-random
*/
var buf, bufIdx = 0;
var hexBytes = new Array(256);
for (let i = 0; i < 256; i++) hexBytes[i] = (i + 256).toString(16).substring(1);
var randomBytes = (() => {
	const lib = typeof crypto !== "undefined" ? crypto : typeof window !== "undefined" ? window.crypto || window.msCrypto : void 0;
	if (lib !== void 0) {
		if (lib.randomBytes !== void 0) return lib.randomBytes;
		if (lib.getRandomValues !== void 0) return (n) => {
			const bytes = new Uint8Array(n);
			lib.getRandomValues(bytes);
			return bytes;
		};
	}
	return (n) => {
		const r = [];
		for (let i = n; i > 0; i--) r.push(Math.floor(Math.random() * 256));
		return r;
	};
})();
var BUFFER_SIZE = 4096;
function uid() {
	if (buf === void 0 || bufIdx + 16 > BUFFER_SIZE) {
		bufIdx = 0;
		buf = randomBytes(BUFFER_SIZE);
	}
	const b = Array.prototype.slice.call(buf, bufIdx, bufIdx += 16);
	b[6] = b[6] & 15 | 64;
	b[8] = b[8] & 63 | 128;
	return hexBytes[b[0]] + hexBytes[b[1]] + hexBytes[b[2]] + hexBytes[b[3]] + "-" + hexBytes[b[4]] + hexBytes[b[5]] + "-" + hexBytes[b[6]] + hexBytes[b[7]] + "-" + hexBytes[b[8]] + hexBytes[b[9]] + "-" + hexBytes[b[10]] + hexBytes[b[11]] + hexBytes[b[12]] + hexBytes[b[13]] + hexBytes[b[14]] + hexBytes[b[15]];
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/use-id/use-id.js
function parseValue(val) {
	return val === void 0 || val === null ? null : val;
}
function getId(val, required) {
	return val === void 0 || val === null ? required === true ? `f_${uid()}` : null : val;
}
/**
* Returns an "id" which is a ref() that can be used as
* a unique identifier to apply to a DOM node attribute.
*
* On SSR, it takes care of generating the id on the client side (only) to
* avoid hydration errors.
*/
function useId({ getValue, required = true } = {}) {
	if (isRuntimeSsrPreHydration.value === true) {
		const id = getValue !== void 0 ? ref(parseValue(getValue())) : ref(null);
		if (required === true && id.value === null) onMounted(() => {
			id.value = `f_${uid()}`;
		});
		if (getValue !== void 0) watch(getValue, (newId) => {
			id.value = getId(newId, required);
		});
		return id;
	}
	return getValue !== void 0 ? computed(() => getId(getValue(), required)) : ref(`f_${uid()}`);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/use-split-attrs/use-split-attrs.js
var listenerRE = /^on[A-Z]/;
function useSplitAttrs() {
	const { attrs, vnode } = getCurrentInstance();
	const acc = {
		listeners: ref({}),
		attributes: ref({})
	};
	function update() {
		const attributes = {};
		const listeners = {};
		for (const key in attrs) if (key !== "class" && key !== "style" && listenerRE.test(key) === false) attributes[key] = attrs[key];
		for (const key in vnode.props) if (listenerRE.test(key) === true) listeners[key] = vnode.props[key];
		acc.attributes.value = attributes;
		acc.listeners.value = listeners;
	}
	onBeforeUpdate(update);
	update();
	return acc;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/private.use-dark/use-dark.js
var useDarkProps = { dark: {
	type: Boolean,
	default: null
} };
function useDark(props, $q) {
	return computed(() => props.dark === null ? $q.dark.isActive : props.dark);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/use-form/use-form-child.js
function useFormChild({ validate, resetValidation, requiresQForm }) {
	const $form = inject(formKey, false);
	if ($form !== false) {
		const { props, proxy } = getCurrentInstance();
		Object.assign(proxy, {
			validate,
			resetValidation
		});
		watch(() => props.disable, (val) => {
			if (val === true) {
				if (typeof resetValidation === "function") resetValidation();
				$form.unbindComponent(proxy);
			} else $form.bindComponent(proxy);
		});
		onMounted(() => {
			if (props.disable !== true) $form.bindComponent(proxy);
		});
		onBeforeUnmount(() => {
			if (props.disable !== true) $form.unbindComponent(proxy);
		});
	} else if (requiresQForm === true) console.error("Parent QForm not found on useFormChild()!");
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/patterns/patterns.js
var hex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, hexa = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, hexOrHexa = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, rgb = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, rgba = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;
var testPattern = {
	date: (v) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v),
	time: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v),
	fulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(v),
	timeOrFulltime: (v) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(v),
	email: (v) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
	hexColor: (v) => hex.test(v),
	hexaColor: (v) => hexa.test(v),
	hexOrHexaColor: (v) => hexOrHexa.test(v),
	rgbColor: (v) => rgb.test(v),
	rgbaColor: (v) => rgba.test(v),
	rgbOrRgbaColor: (v) => rgb.test(v) || rgba.test(v),
	hexOrRgbColor: (v) => hex.test(v) || rgb.test(v),
	hexaOrRgbaColor: (v) => hexa.test(v) || rgba.test(v),
	anyColor: (v) => hexOrHexa.test(v) || rgb.test(v) || rgba.test(v)
};
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/private.use-validate/use-validate.js
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
	let validateIndex = 0, unwatchRules;
	const hasRules = computed(() => props.rules !== void 0 && props.rules !== null && props.rules.length !== 0);
	const canDebounceValidate = computed(() => props.disable !== true && hasRules.value === true && innerLoading.value === false);
	const hasError = computed(() => props.error === true || innerError.value === true);
	const errorMessage = computed(() => typeof props.errorMessage === "string" && props.errorMessage.length !== 0 ? props.errorMessage : innerErrorMessage.value);
	watch(() => props.modelValue, () => {
		isDirtyModel.value = true;
		if (canDebounceValidate.value === true && props.lazyRules === false) debouncedValidate();
	});
	function onRulesChange() {
		if (props.lazyRules !== "ondemand" && canDebounceValidate.value === true && isDirtyModel.value === true) debouncedValidate();
	}
	watch(() => props.reactiveRules, (val) => {
		if (val === true) {
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
		if (val === true) isDirtyModel.value = true;
		else if (canDebounceValidate.value === true && props.lazyRules !== "ondemand") debouncedValidate();
	});
	function resetValidation() {
		validateIndex++;
		innerLoading.value = false;
		isDirtyModel.value = false;
		innerError.value = false;
		innerErrorMessage.value = null;
		debouncedValidate.cancel();
	}
	function validate(val = props.modelValue) {
		if (props.disable === true || hasRules.value === false) return true;
		const index = ++validateIndex;
		const setDirty = innerLoading.value !== true ? () => {
			isDirtyModel.value = true;
		} : () => {};
		const update = (err, msg) => {
			if (err === true) setDirty();
			innerError.value = err;
			innerErrorMessage.value = msg || null;
			innerLoading.value = false;
		};
		const promises = [];
		for (let i = 0; i < props.rules.length; i++) {
			const rule = props.rules[i];
			let res;
			if (typeof rule === "function") res = rule(val, testPattern);
			else if (typeof rule === "string" && testPattern[rule] !== void 0) res = testPattern[rule](val);
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
			if (res === void 0 || Array.isArray(res) === false || res.length === 0) {
				if (index === validateIndex) update(false);
				return true;
			}
			const msg = res.find((r) => r === false || typeof r === "string");
			if (index === validateIndex) update(msg !== void 0, msg);
			return msg === void 0;
		}, (e) => {
			if (index === validateIndex) {
				console.error(e);
				update(true);
			}
			return false;
		});
	}
	const debouncedValidate = debounce(validate, 0);
	onBeforeUnmount(() => {
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
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/private.use-field/use-field.js
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
	const { props, proxy } = getCurrentInstance();
	const isDark = useDark(props, proxy.$q);
	const targetUid = useId({
		required: requiredForAttr,
		getValue: () => props.for
	});
	return {
		requiredForAttr,
		changeEvent,
		tag: tagProp === true ? computed(() => props.tag) : { value: "label" },
		isDark,
		editable: computed(() => props.disable !== true && props.readonly !== true),
		innerLoading: ref(false),
		focused: ref(false),
		hasPopupOpen: false,
		splitAttrs: useSplitAttrs(),
		targetUid,
		rootRef: ref(null),
		targetRef: ref(null),
		controlRef: ref(null)
	};
}
function useField(state) {
	const { props, emit, slots, attrs, proxy } = getCurrentInstance();
	const { $q } = proxy;
	let focusoutTimer = null;
	if (state.hasValue === void 0) state.hasValue = computed(() => fieldValueIsFilled(props.modelValue));
	if (state.emitValue === void 0) state.emitValue = (value) => {
		emit("update:modelValue", value);
	};
	if (state.controlEvents === void 0) state.controlEvents = {
		onFocusin: onControlFocusin,
		onFocusout: onControlFocusout
	};
	Object.assign(state, {
		clearValue,
		onControlFocusin,
		onControlFocusout,
		focus
	});
	if (state.computedCounter === void 0) state.computedCounter = computed(() => {
		if (props.counter !== false) {
			const len = typeof props.modelValue === "string" || typeof props.modelValue === "number" ? String(props.modelValue).length : Array.isArray(props.modelValue) === true ? props.modelValue.length : 0;
			const max = props.maxlength !== void 0 ? props.maxlength : props.maxValues;
			return len + (max !== void 0 ? " / " + max : "");
		}
	});
	const { isDirtyModel, hasRules, hasError, errorMessage, resetValidation } = useValidate(state.focused, state.innerLoading);
	const floatingLabel = state.floatingLabel !== void 0 ? computed(() => props.stackLabel === true || state.focused.value === true || state.floatingLabel.value === true) : computed(() => props.stackLabel === true || state.focused.value === true || state.hasValue.value === true);
	const shouldRenderBottom = computed(() => props.bottomSlots === true || props.hint !== void 0 || hasRules.value === true || props.counter === true || props.error !== null);
	const styleType = computed(() => {
		if (props.filled === true) return "filled";
		if (props.outlined === true) return "outlined";
		if (props.borderless === true) return "borderless";
		if (props.standout) return "standout";
		return "standard";
	});
	const classes = computed(() => `q-field row no-wrap items-start q-field--${styleType.value}` + (state.fieldClass !== void 0 ? ` ${state.fieldClass.value}` : "") + (props.rounded === true ? " q-field--rounded" : "") + (props.square === true ? " q-field--square" : "") + (floatingLabel.value === true ? " q-field--float" : "") + (hasLabel.value === true ? " q-field--labeled" : "") + (props.dense === true ? " q-field--dense" : "") + (props.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (state.isDark.value === true ? " q-field--dark" : "") + (state.getControl === void 0 ? " q-field--auto-height" : "") + (state.focused.value === true ? " q-field--focused" : "") + (hasError.value === true ? " q-field--error" : "") + (hasError.value === true || state.focused.value === true ? " q-field--highlighted" : "") + (props.hideBottomSpace !== true && shouldRenderBottom.value === true ? " q-field--with-bottom" : "") + (props.disable === true ? " q-field--disabled" : props.readonly === true ? " q-field--readonly" : ""));
	const contentClass = computed(() => "q-field__control relative-position row no-wrap" + (props.bgColor !== void 0 ? ` bg-${props.bgColor}` : "") + (hasError.value === true ? " text-negative" : typeof props.standout === "string" && props.standout.length !== 0 && state.focused.value === true ? ` ${props.standout}` : props.color !== void 0 ? ` text-${props.color}` : ""));
	const hasLabel = computed(() => props.labelSlot === true || props.label !== void 0);
	const labelClass = computed(() => "q-field__label no-pointer-events absolute ellipsis" + (props.labelColor !== void 0 && hasError.value !== true ? ` text-${props.labelColor}` : ""));
	const controlSlotScope = computed(() => ({
		id: state.targetUid.value,
		editable: state.editable.value,
		focused: state.focused.value,
		floatingLabel: floatingLabel.value,
		modelValue: props.modelValue,
		emitValue: state.emitValue
	}));
	const attributes = computed(() => {
		const acc = {};
		if (state.targetUid.value) acc.for = state.targetUid.value;
		if (props.disable === true) acc["aria-disabled"] = "true";
		return acc;
	});
	function focusHandler() {
		const el = document.activeElement;
		let target = state.targetRef?.value;
		if (target && (el === null || el.id !== state.targetUid.value)) {
			if (target.hasAttribute("tabindex") !== true) target = target.querySelector("[tabindex]");
			if (target !== el) target?.focus({ preventScroll: true });
		}
	}
	function focus() {
		addFocusFn(focusHandler);
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
		if (state.editable.value === true && state.focused.value === false) {
			state.focused.value = true;
			emit("focus", e);
		}
	}
	function onControlFocusout(e, then) {
		if (focusoutTimer !== null) clearTimeout(focusoutTimer);
		focusoutTimer = setTimeout(() => {
			focusoutTimer = null;
			if (document.hasFocus() === true && (state.hasPopupOpen === true || state.controlRef === void 0 || state.controlRef.value === null || state.controlRef.value.contains(document.activeElement) !== false)) return;
			if (state.focused.value === true) {
				state.focused.value = false;
				emit("blur", e);
			}
			then?.();
		});
	}
	function clearValue(e) {
		stopAndPrevent(e);
		if ($q.platform.is.mobile !== true) (state.targetRef?.value || state.rootRef.value).focus();
		else if (state.rootRef.value.contains(document.activeElement) === true) document.activeElement.blur();
		if (props.type === "file") state.inputRef.value.value = null;
		emit("update:modelValue", null);
		if (state.changeEvent === true) emit("change", null);
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
		if (slots.prepend !== void 0) node.push(h("div", {
			class: "q-field__prepend q-field__marginal row no-wrap items-center",
			key: "prepend",
			onClick: prevent
		}, slots.prepend()));
		node.push(h("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, getControlContainer()));
		if (hasError.value === true && props.noErrorIcon === false) node.push(getInnerAppendNode("error", [h(QIcon_default, {
			name: $q.iconSet.field.error,
			color: "negative"
		})]));
		if (props.loading === true || state.innerLoading.value === true) node.push(getInnerAppendNode("inner-loading-append", slots.loading !== void 0 ? slots.loading() : [h(QSpinner_default, { color: props.color })]));
		else if (props.clearable === true && state.hasValue.value === true && state.editable.value === true) node.push(getInnerAppendNode("inner-clearable-append", [h(QIcon_default, {
			class: "q-field__focusable-action",
			name: props.clearIcon || $q.iconSet.field.clear,
			tabindex: 0,
			role: "button",
			"aria-hidden": "false",
			"aria-label": $q.lang.label.clear,
			onKeyup: onClearableKeyup,
			onClick: clearValue
		})]));
		if (slots.append !== void 0) node.push(h("div", {
			class: "q-field__append q-field__marginal row no-wrap items-center",
			key: "append",
			onClick: prevent
		}, slots.append()));
		if (state.getInnerAppend !== void 0) node.push(getInnerAppendNode("inner-append", state.getInnerAppend()));
		if (state.getControlChild !== void 0) node.push(state.getControlChild());
		return node;
	}
	function getControlContainer() {
		const node = [];
		if (props.prefix !== void 0 && props.prefix !== null) node.push(h("div", { class: "q-field__prefix no-pointer-events row items-center" }, props.prefix));
		if (state.getShadowControl !== void 0 && state.hasShadow.value === true) node.push(state.getShadowControl());
		if (hasLabel.value === true) node.push(h("div", { class: labelClass.value }, hSlot(slots.label, props.label)));
		if (state.getControl !== void 0) node.push(state.getControl());
		else if (slots.rawControl !== void 0) node.push(slots.rawControl());
		else if (slots.control !== void 0) node.push(h("div", {
			ref: state.targetRef,
			class: "q-field__native row",
			tabindex: -1,
			...state.splitAttrs.attributes.value,
			"data-autofocus": props.autofocus === true || void 0
		}, slots.control(controlSlotScope.value)));
		if (props.suffix !== void 0 && props.suffix !== null) node.push(h("div", { class: "q-field__suffix no-pointer-events row items-center" }, props.suffix));
		return node.concat(hSlot(slots.default));
	}
	function getBottom() {
		let msg, key;
		if (hasError.value === true) if (errorMessage.value !== null) {
			msg = [h("div", { role: "alert" }, errorMessage.value)];
			key = `q--slot-error-${errorMessage.value}`;
		} else {
			msg = hSlot(slots.error);
			key = "q--slot-error";
		}
		else if (props.hideHint !== true || state.focused.value === true) if (props.hint !== void 0) {
			msg = [h("div", props.hint)];
			key = `q--slot-hint-${props.hint}`;
		} else {
			msg = hSlot(slots.hint);
			key = "q--slot-hint";
		}
		const hasCounter = props.counter === true || slots.counter !== void 0;
		if (props.hideBottomSpace === true && hasCounter === false && msg === void 0) return;
		const main = h("div", {
			key,
			class: "q-field__messages col"
		}, msg);
		return h("div", {
			class: "q-field__bottom row items-start q-field__bottom--" + (props.hideBottomSpace !== true ? "animated" : "stale"),
			onClick: prevent
		}, [props.hideBottomSpace === true ? main : h(Transition, { name: "q-transition--field-message" }, () => main), hasCounter === true ? h("div", { class: "q-field__counter" }, slots.counter !== void 0 ? slots.counter() : state.computedCounter.value) : null]);
	}
	function getInnerAppendNode(key, content) {
		return content === null ? null : h("div", {
			key,
			class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
		}, content);
	}
	let shouldActivate = false;
	onDeactivated(() => {
		shouldActivate = true;
	});
	onActivated(() => {
		if (shouldActivate === true && props.autofocus === true) proxy.focus();
	});
	if (props.autofocus === true) onMounted(() => {
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
			"data-autofocus": props.autofocus === true || void 0,
			...attributes.value
		} : attributes.value;
		return h(state.tag.value, {
			ref: state.rootRef,
			class: [classes.value, attrs.class],
			style: attrs.style,
			...labelAttrs
		}, [
			slots.before !== void 0 ? h("div", {
				class: "q-field__before q-field__marginal row no-wrap items-center",
				onClick: prevent
			}, slots.before()) : null,
			h("div", { class: "q-field__inner relative-position col self-stretch" }, [h("div", {
				ref: state.controlRef,
				class: contentClass.value,
				tabindex: -1,
				...state.controlEvents
			}, getContent()), shouldRenderBottom.value === true ? getBottom() : null]),
			slots.after !== void 0 ? h("div", {
				class: "q-field__after q-field__marginal row no-wrap items-center",
				onClick: prevent
			}, slots.after()) : null
		]);
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/components/input/use-mask.js
var NAMED_MASKS = {
	date: "####/##/##",
	datetime: "####/##/## ##:##",
	time: "##:##",
	fulltime: "##:##:##",
	phone: "(###) ### - ####",
	card: "#### #### #### ####"
};
var { tokenMap: DEFAULT_TOKEN_MAP, tokenKeys: DEFAULT_TOKEN_MAP_KEYS } = getTokenMap({
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
		tokenMap[key] = {
			...entry,
			regex: new RegExp(entry.pattern)
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
var escRegex = /[.*+?^${}()|[\]\\]/g;
var DEFAULT_TOKEN_REGEX_MASK = getTokenRegexMask(DEFAULT_TOKEN_MAP_KEYS);
var MARKER = String.fromCharCode(1);
var useMaskProps = {
	mask: String,
	reverseFillMask: Boolean,
	fillMask: [Boolean, String],
	unmaskedValue: Boolean,
	maskTokens: Object
};
function useMask(props, emit, emitValue, inputRef) {
	let maskMarked, maskReplaced, computedMask, computedUnmask, pastedTextStart, selectionAnchor;
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
		return props.autogrow === true || [
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
			const val = unmaskValue(innerValue.value);
			updateMaskInternals();
			if (props.modelValue !== val) emit("update:modelValue", val);
		}
	});
	watch(() => props.fillMask + props.reverseFillMask, () => {
		if (hasMask.value === true) updateMaskValue(innerValue.value, true);
	});
	watch(() => props.unmaskedValue, () => {
		if (hasMask.value === true) updateMaskValue(innerValue.value);
	});
	function getInitialMaskedValue() {
		updateMaskInternals();
		if (hasMask.value === true) {
			const masked = maskValue(unmaskValue(props.modelValue));
			return props.fillMask !== false ? fillWithMask(masked) : masked;
		}
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
		if (hasMask.value === false) {
			computedUnmask = void 0;
			maskMarked = "";
			maskReplaced = "";
			return;
		}
		const localComputedMask = NAMED_MASKS[props.mask] === void 0 ? props.mask : NAMED_MASKS[props.mask], fillChar = typeof props.fillMask === "string" && props.fillMask.length !== 0 ? props.fillMask.slice(0, 1) : "_", fillCharEscaped = fillChar.replace(escRegex, "\\$&"), unmask = [], extract = [], mask = [];
		let firstMatch = props.reverseFillMask === true, unmaskChar = "", negateChar = "";
		localComputedMask.replace(tokens.value.tokenRegexMask, (_, char1, esc, token, char2) => {
			if (token !== void 0) {
				const c = tokens.value.tokenMap[token];
				mask.push(c);
				negateChar = c.negate;
				if (firstMatch === true) {
					extract.push("(?:" + negateChar + "+)?(" + c.pattern + "+)?(?:" + negateChar + "+)?(" + c.pattern + "+)?");
					firstMatch = false;
				}
				extract.push("(?:" + negateChar + "+)?(" + c.pattern + ")?");
			} else if (esc !== void 0) {
				unmaskChar = "\\" + (esc === "\\" ? "" : esc);
				mask.push(esc);
				unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
			} else {
				const c = char1 !== void 0 ? char1 : char2;
				unmaskChar = c === "\\" ? "\\\\\\\\" : c.replace(escRegex, "\\\\$&");
				mask.push(c);
				unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
			}
		});
		const unmaskMatcher = new RegExp("^" + unmask.join("") + "(" + (unmaskChar === "" ? "." : "[^" + unmaskChar + "]") + "+)?" + (unmaskChar === "" ? "" : "[" + unmaskChar + "]*") + "$"), extractLast = extract.length - 1, extractMatcher = extract.map((re, index) => {
			if (index === 0 && props.reverseFillMask === true) return new RegExp("^" + fillCharEscaped + "*" + re);
			else if (index === extractLast) return new RegExp("^" + re + "(" + (negateChar === "" ? "." : negateChar) + "+)?" + (props.reverseFillMask === true ? "$" : fillCharEscaped + "*"));
			return new RegExp("^" + re);
		});
		computedMask = mask;
		computedUnmask = (val) => {
			const unmaskMatch = unmaskMatcher.exec(props.reverseFillMask === true ? val : val.slice(0, mask.length + 1));
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
	function updateMaskValue(rawVal, updateMaskInternalsFlag, inputType) {
		const inp = inputRef.value, end = inp.selectionEnd, endReverse = inp.value.length - end, unmasked = unmaskValue(rawVal);
		if (updateMaskInternalsFlag === true) updateMaskInternals();
		const preMasked = maskValue(unmasked, updateMaskInternalsFlag), masked = props.fillMask !== false ? fillWithMask(preMasked) : preMasked, changed = innerValue.value !== masked;
		if (inp.value !== masked) inp.value = masked;
		if (changed === true) innerValue.value = masked;
		if (document.activeElement === inp) nextTick(() => {
			if (masked === maskReplaced) {
				const cursor = props.reverseFillMask === true ? maskReplaced.length : 0;
				inp.setSelectionRange(cursor, cursor, "forward");
				return;
			}
			if (inputType === "insertFromPaste" && props.reverseFillMask !== true) {
				const maxEnd = inp.selectionEnd;
				let cursor = end - 1;
				for (let i = pastedTextStart; i <= cursor && i < maxEnd; i++) if (maskMarked[i] !== MARKER) cursor++;
				moveCursor.right(inp, cursor);
				return;
			}
			if (["deleteContentBackward", "deleteContentForward"].indexOf(inputType) !== -1) {
				const cursor = props.reverseFillMask === true ? end === 0 ? masked.length > preMasked.length ? 1 : 0 : Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse) + 1)) + 1 : end;
				inp.setSelectionRange(cursor, cursor, "forward");
				return;
			}
			if (props.reverseFillMask === true) if (changed === true) {
				const cursor = Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse + 1)));
				if (cursor === 1 && end === 1) inp.setSelectionRange(cursor, cursor, "forward");
				else moveCursor.rightReverse(inp, cursor);
			} else {
				const cursor = masked.length - endReverse;
				inp.setSelectionRange(cursor, cursor, "backward");
			}
			else if (changed === true) {
				const cursor = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, end) - 1);
				moveCursor.right(inp, cursor);
			} else {
				const cursor = end - 1;
				moveCursor.right(inp, cursor);
			}
		});
		const val = props.unmaskedValue === true ? unmaskValue(masked) : masked;
		if (String(props.modelValue) !== val && (props.modelValue !== null || val !== "")) emitValue(val, true);
	}
	function moveCursorForPaste(inp, start, end) {
		const preMasked = maskValue(unmaskValue(inp.value));
		start = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, start));
		pastedTextStart = start;
		inp.setSelectionRange(start, end, "forward");
	}
	const moveCursor = {
		left(inp, cursor) {
			const noMarkBefore = maskMarked.slice(cursor - 1).indexOf(MARKER) === -1;
			let i = Math.max(0, cursor - 1);
			for (; i >= 0; i--) if (maskMarked[i] === MARKER) {
				cursor = i;
				if (noMarkBefore === true) cursor++;
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
			const limit = inp.value.length, localMaskMarked = getPaddedMaskMarked(limit), noMarkBefore = localMaskMarked.slice(0, cursor + 1).indexOf(MARKER) === -1;
			let i = Math.min(limit, cursor + 1);
			for (; i <= limit; i++) if (localMaskMarked[i - 1] === MARKER) {
				cursor = i;
				if (cursor > 0 && noMarkBefore === true) cursor--;
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
		if (shouldIgnoreKey(e) === true || e.altKey === true) return;
		const inp = inputRef.value, start = inp.selectionStart, end = inp.selectionEnd;
		if (!e.shiftKey) selectionAnchor = void 0;
		if (e.keyCode === 37 || e.keyCode === 39) {
			if (e.shiftKey && selectionAnchor === void 0) selectionAnchor = inp.selectionDirection === "forward" ? start : end;
			const fn = moveCursor[(e.keyCode === 39 ? "right" : "left") + (props.reverseFillMask === true ? "Reverse" : "")];
			e.preventDefault();
			fn(inp, selectionAnchor === start ? end : start);
			if (e.shiftKey) {
				const cursor = inp.selectionStart;
				inp.setSelectionRange(Math.min(selectionAnchor, cursor), Math.max(selectionAnchor, cursor), "forward");
			}
		} else if (e.keyCode === 8 && props.reverseFillMask !== true && start === end) {
			moveCursor.left(inp, start);
			inp.setSelectionRange(inp.selectionStart, end, "backward");
		} else if (e.keyCode === 46 && props.reverseFillMask === true && start === end) {
			moveCursor.rightReverse(inp, end);
			inp.setSelectionRange(start, inp.selectionEnd, "forward");
		}
	}
	function maskValue(val, updateMaskInternalsFlag) {
		if (val === void 0 || val === null || val === "") return "";
		if (props.reverseFillMask === true) return maskValueReverse(val, updateMaskInternalsFlag);
		const mask = computedMask;
		let valIndex = 0, output = "";
		for (let maskIndex = 0; maskIndex < mask.length; maskIndex++) {
			const valChar = val[valIndex], maskDef = mask[maskIndex];
			if (typeof maskDef === "string") {
				output += maskDef;
				if (updateMaskInternalsFlag === true && valChar === maskDef) valIndex++;
			} else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
				output += maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar;
				valIndex++;
			} else return output;
		}
		return output;
	}
	function maskValueReverse(val, updateMaskInternalsFlag) {
		const mask = computedMask, firstTokenIndex = maskMarked.indexOf(MARKER);
		let valIndex = val.length - 1, output = "";
		for (let maskIndex = mask.length - 1; maskIndex >= 0 && valIndex !== -1; maskIndex--) {
			const maskDef = mask[maskIndex];
			let valChar = val[valIndex];
			if (typeof maskDef === "string") {
				output = maskDef + output;
				if (updateMaskInternalsFlag === true && valChar === maskDef) valIndex--;
			} else if (valChar !== void 0 && maskDef.regex.test(valChar)) do {
				output = (maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar) + output;
				valIndex--;
				valChar = val[valIndex];
			} while (firstTokenIndex === maskIndex && valChar !== void 0 && maskDef.regex.test(valChar));
			else return output;
		}
		return output;
	}
	function unmaskValue(val) {
		return typeof val !== "string" || computedUnmask === void 0 ? typeof val === "number" ? computedUnmask(String(val)) : val : computedUnmask(val);
	}
	function fillWithMask(val) {
		if (maskReplaced.length - val.length <= 0) return val;
		return props.reverseFillMask === true && val.length !== 0 ? maskReplaced.slice(0, -val.length) + val : val + maskReplaced.slice(val.length);
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
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/use-form/private.use-form.js
var useFormProps = { name: String };
function useFormInputNameAttr(props) {
	return computed(() => props.name || props.for);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/private.use-file/use-file-dom-props.js
function useFileDomProps(props, typeGuard) {
	function getFormDomProps() {
		const model = props.modelValue;
		try {
			const dt = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
			if (Object(model) === model) ("length" in model ? Array.from(model) : [model]).forEach((file) => {
				dt.items.add(file);
			});
			return { files: dt.files };
		} catch {
			return { files: void 0 };
		}
	}
	return typeGuard === true ? computed(() => {
		if (props.type !== "file") return;
		return getFormDomProps();
	}) : computed(getFormDomProps);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/private.use-key-composition/use-key-composition.js
var isJapanese = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;
var isChinese = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u;
var isKorean = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;
var isPlainText = /[a-z0-9_ -]$/i;
function useKeyComposition(onInput) {
	return function onComposition(e) {
		if (e.type === "compositionend" || e.type === "change") {
			if (e.target.qComposing !== true) return;
			e.target.qComposing = false;
			onInput(e);
		} else if (e.type === "compositionupdate" && e.target.qComposing !== true && typeof e.data === "string") {
			if ((client.is.firefox === true ? isPlainText.test(e.data) === false : isJapanese.test(e.data) === true || isChinese.test(e.data) === true || isKorean.test(e.data) === true) === true) e.target.qComposing = true;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/components/input/QInput.js
var QInput_default = createComponent({
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
		const { $q } = proxy;
		const temp = {};
		let emitCachedValue = NaN, typedNumber, stopValueWatcher, emitTimer = null, emitValueFn;
		const inputRef = ref(null);
		const nameProp = useFormInputNameAttr(props);
		const { innerValue, hasMask, moveCursorForPaste, updateMaskValue, onMaskedKeydown, onMaskedClick } = useMask(props, emit, emitValue, inputRef);
		const formDomProps = useFileDomProps(props, true);
		const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
		const onComposition = useKeyComposition(onInput);
		const state = useFieldState({ changeEvent: true });
		const isTextarea = computed(() => props.type === "textarea" || props.autogrow === true);
		const isTypeText = computed(() => isTextarea.value === true || [
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
			if (hasMask.value === true) {
				evt.onKeydown = onMaskedKeydown;
				evt.onClick = onMaskedClick;
			}
			if (props.autogrow === true) evt.onAnimationend = onAnimationend;
			return evt;
		});
		const inputAttrs = computed(() => {
			const acc = {
				tabindex: 0,
				"data-autofocus": props.autofocus === true || void 0,
				rows: props.type === "textarea" ? 6 : void 0,
				"aria-label": props.label,
				name: nameProp.value,
				...state.splitAttrs.attributes.value,
				id: state.targetUid.value,
				maxlength: props.maxlength,
				disabled: props.disable === true,
				readonly: props.readonly === true
			};
			if (isTextarea.value === false) acc.type = props.type;
			if (props.autogrow === true) acc.rows = 1;
			return acc;
		});
		watch(() => props.type, () => {
			if (inputRef.value) inputRef.value.value = props.modelValue;
		});
		watch(() => props.modelValue, (v) => {
			if (hasMask.value === true) {
				if (stopValueWatcher === true) {
					stopValueWatcher = false;
					if (String(v) === emitCachedValue) return;
				}
				updateMaskValue(v);
			} else if (innerValue.value !== v) {
				innerValue.value = v;
				if (props.type === "number" && temp.hasOwnProperty("value") === true) if (typedNumber === true) typedNumber = false;
				else delete temp.value;
			}
			if (props.autogrow === true) nextTick(adjustHeight);
		});
		watch(() => props.autogrow, (val) => {
			if (val === true) nextTick(adjustHeight);
			else if (inputRef.value !== null && attrs.rows > 0) inputRef.value.style.height = "auto";
		});
		watch(() => props.dense, () => {
			if (props.autogrow === true) nextTick(adjustHeight);
		});
		function focus() {
			addFocusFn(() => {
				const el = document.activeElement;
				if (inputRef.value !== null && inputRef.value !== el && (el === null || el.id !== state.targetUid.value)) inputRef.value.focus({ preventScroll: true });
			});
		}
		function select() {
			inputRef.value?.select();
		}
		function onPaste(e) {
			if (hasMask.value === true && props.reverseFillMask !== true) {
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
			if (e.target.qComposing === true) {
				temp.value = val;
				return;
			}
			if (hasMask.value === true) updateMaskValue(val, false, e.inputType);
			else {
				emitValue(val);
				if (isTypeText.value === true && e.target === document.activeElement) {
					const { selectionStart, selectionEnd } = e.target;
					if (selectionStart !== void 0 && selectionEnd !== void 0) nextTick(() => {
						if (e.target === document.activeElement && val.indexOf(e.target.value) === 0) e.target.setSelectionRange(selectionStart, selectionEnd);
					});
				}
			}
			if (props.autogrow === true) adjustHeight();
		}
		function onAnimationend(e) {
			emit("animationend", e);
			adjustHeight();
		}
		function emitValue(val, stopWatcher) {
			emitValueFn = () => {
				emitTimer = null;
				if (props.type !== "number" && temp.hasOwnProperty("value") === true) delete temp.value;
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
			if (props.debounce !== void 0) {
				if (emitTimer !== null) clearTimeout(emitTimer);
				temp.value = val;
				emitTimer = setTimeout(emitValueFn, props.debounce);
			} else emitValueFn();
		}
		function adjustHeight() {
			requestAnimationFrame(() => {
				const inp = inputRef.value;
				if (inp !== null) {
					const parentStyle = inp.parentNode.style;
					const { scrollTop } = inp;
					const { overflowY, maxHeight } = $q.platform.is.firefox === true ? {} : window.getComputedStyle(inp);
					const changeOverflow = overflowY !== void 0 && overflowY !== "scroll";
					if (changeOverflow === true) inp.style.overflowY = "hidden";
					parentStyle.marginBottom = inp.scrollHeight - 1 + "px";
					inp.style.height = "1px";
					inp.style.height = inp.scrollHeight + "px";
					if (changeOverflow === true) inp.style.overflowY = parseInt(maxHeight, 10) < inp.scrollHeight ? "auto" : "hidden";
					parentStyle.marginBottom = "";
					inp.scrollTop = scrollTop;
				}
			});
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
			});
		}
		function getCurValue() {
			return temp.hasOwnProperty("value") === true ? temp.value : innerValue.value !== void 0 ? innerValue.value : "";
		}
		onBeforeUnmount(() => {
			onFinishEditing();
		});
		onMounted(() => {
			if (props.autogrow === true) adjustHeight();
		});
		Object.assign(state, {
			innerValue,
			fieldClass: computed(() => `q-${isTextarea.value === true ? "textarea" : "input"}` + (props.autogrow === true ? " q-textarea--autogrow" : "")),
			hasShadow: computed(() => props.type !== "file" && typeof props.shadowText === "string" && props.shadowText.length !== 0),
			inputRef,
			emitValue,
			hasValue,
			floatingLabel: computed(() => hasValue.value === true && (props.type !== "number" || isNaN(innerValue.value) === false) || fieldValueIsFilled(props.displayValue)),
			getControl: () => h(isTextarea.value === true ? "textarea" : "input", {
				ref: inputRef,
				class: ["q-field__native q-placeholder", props.inputClass],
				style: props.inputStyle,
				...inputAttrs.value,
				...onEvents.value,
				...props.type !== "file" ? { value: getCurValue() } : formDomProps.value
			}),
			getShadowControl: () => h("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (isTextarea.value === true ? "" : " text-no-wrap") }, [h("span", { class: "invisible" }, getCurValue()), h("span", props.shadowText)])
		});
		const renderFn = useField(state);
		Object.assign(proxy, {
			focus,
			select,
			getNativeElement: () => inputRef.value
		});
		injectProp(proxy, "nativeEl", () => inputRef.value);
		return renderFn;
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/private.use-router-link/use-router-link.js
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
		} else if (Array.isArray(outerValue) === false || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i])) return false;
	}
	return true;
}
function isEquivalentArray(a, b) {
	return Array.isArray(b) === true ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function isSameRouteLocationParamsValue(a, b) {
	return Array.isArray(a) === true ? isEquivalentArray(a, b) : Array.isArray(b) === true ? isEquivalentArray(b, a) : a === b;
}
function isSameRouteLocationParams(a, b) {
	if (Object.keys(a).length !== Object.keys(b).length) return false;
	for (const key in a) if (isSameRouteLocationParamsValue(a[key], b[key]) === false) return false;
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
function useRouterLink({ fallbackTag, useDisableForRouterLinkProps = true } = {}) {
	const vm = getCurrentInstance();
	const { props, proxy, emit } = vm;
	const hasRouter = vmHasRouter(vm);
	const hasHrefLink = computed(() => props.disable !== true && props.href !== void 0);
	const hasRouterLinkProps = useDisableForRouterLinkProps === true ? computed(() => hasRouter === true && props.disable !== true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== "") : computed(() => hasRouter === true && hasHrefLink.value !== true && props.to !== void 0 && props.to !== null && props.to !== "");
	const resolvedLink = computed(() => hasRouterLinkProps.value === true ? getLink(props.to) : null);
	const hasRouterLink = computed(() => resolvedLink.value !== null);
	const hasLink = computed(() => hasHrefLink.value === true || hasRouterLink.value === true);
	const linkTag = computed(() => props.type === "a" || hasLink.value === true ? "a" : props.tag || fallbackTag || "div");
	const linkAttrs = computed(() => hasHrefLink.value === true ? {
		href: props.href,
		target: props.target
	} : hasRouterLink.value === true ? {
		href: resolvedLink.value.href,
		target: props.target
	} : {});
	const linkActiveIndex = computed(() => {
		if (hasRouterLink.value === false) return -1;
		const { matched } = resolvedLink.value, { length } = matched, routeMatched = matched[length - 1];
		if (routeMatched === void 0) return -1;
		const currentMatched = proxy.$route.matched;
		if (currentMatched.length === 0) return -1;
		const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
		if (index !== -1) return index;
		const parentRecordPath = getOriginalPath(matched[length - 2]);
		return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
	});
	const linkIsActive = computed(() => hasRouterLink.value === true && linkActiveIndex.value !== -1 && includesParams(proxy.$route.params, resolvedLink.value.params));
	const linkIsExactActive = computed(() => linkIsActive.value === true && linkActiveIndex.value === proxy.$route.matched.length - 1 && isSameRouteLocationParams(proxy.$route.params, resolvedLink.value.params));
	const linkClass = computed(() => hasRouterLink.value === true ? linkIsExactActive.value === true ? ` ${props.exactActiveClass} ${props.activeClass}` : props.exact === true ? "" : linkIsActive.value === true ? ` ${props.activeClass}` : "" : "");
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
		if (props.disable === true) {
			e.preventDefault();
			return Promise.resolve(false);
		}
		if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.button !== void 0 && e.button !== 0 || props.target === "_blank") return Promise.resolve(false);
		e.preventDefault();
		const promise = proxy.$router[replace === true ? "replace" : "push"](to);
		return returnRouterError === true ? promise : promise.then(() => {}).catch(() => {});
	}
	function navigateOnClick(e) {
		if (hasRouterLink.value === true) {
			const go = (opts) => navigateToRouterLink(e, opts);
			emit("click", e, go);
			if (e.defaultPrevented !== true) go();
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
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/components/item/QItem.js
var QItem_default = createComponent({
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
		clickable: Boolean,
		dense: Boolean,
		insetLevel: Number,
		tabindex: [String, Number],
		focused: Boolean,
		manualFocus: Boolean
	},
	emits: ["click", "keyup"],
	setup(props, { slots, emit }) {
		const { proxy: { $q } } = getCurrentInstance();
		const isDark = useDark(props, $q);
		const { hasLink, linkAttrs, linkClass, linkTag, navigateOnClick } = useRouterLink();
		const rootRef = ref(null);
		const blurTargetRef = ref(null);
		const isActionable = computed(() => props.clickable === true || hasLink.value === true || props.tag === "label");
		const isClickable = computed(() => props.disable !== true && isActionable.value === true);
		const classes = computed(() => "q-item q-item-type row no-wrap" + (props.dense === true ? " q-item--dense" : "") + (isDark.value === true ? " q-item--dark" : "") + (hasLink.value === true && props.active === null ? linkClass.value : props.active === true ? ` q-item--active${props.activeClass !== void 0 ? ` ${props.activeClass}` : ""}` : "") + (props.disable === true ? " disabled" : "") + (isClickable.value === true ? " q-item--clickable q-link cursor-pointer " + (props.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (props.focused === true ? " q-manual-focusable--focused" : "") : ""));
		const style = computed(() => {
			if (props.insetLevel === void 0) return null;
			return { ["padding" + ($q.lang.rtl === true ? "Right" : "Left")]: 16 + props.insetLevel * 56 + "px" };
		});
		function onClick(e) {
			if (isClickable.value === true) {
				if (blurTargetRef.value !== null && e.qAvoidFocus !== true) {
					if (e.qKeyEvent !== true && document.activeElement === rootRef.value) blurTargetRef.value.focus();
					else if (document.activeElement === blurTargetRef.value) rootRef.value.focus();
				}
				navigateOnClick(e);
			}
		}
		function onKeyup(e) {
			if (isClickable.value === true && isKeyCode(e, [13, 32]) === true) {
				stopAndPrevent(e);
				e.qKeyEvent = true;
				const evt = new MouseEvent("click", e);
				evt.qKeyEvent = true;
				rootRef.value.dispatchEvent(evt);
			}
			emit("keyup", e);
		}
		function getContent() {
			const child = hUniqueSlot(slots.default, []);
			if (isClickable.value === true) child.unshift(h("div", {
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
				role: "listitem",
				onClick,
				onKeyup
			};
			if (isClickable.value === true) {
				data.tabindex = props.tabindex || "0";
				Object.assign(data, linkAttrs.value);
			} else if (isActionable.value === true) data["aria-disabled"] = "true";
			return h(linkTag.value, data, getContent());
		};
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/components/item/QItemSection.js
var QItemSection_default = createComponent({
	name: "QItemSection",
	props: {
		avatar: Boolean,
		thumbnail: Boolean,
		side: Boolean,
		top: Boolean,
		noWrap: Boolean
	},
	setup(props, { slots }) {
		const classes = computed(() => `q-item__section column q-item__section--${props.avatar === true || props.side === true || props.thumbnail === true ? "side" : "main"}` + (props.top === true ? " q-item__section--top justify-start" : " justify-center") + (props.avatar === true ? " q-item__section--avatar" : "") + (props.thumbnail === true ? " q-item__section--thumbnail" : "") + (props.noWrap === true ? " q-item__section--nowrap" : ""));
		return () => h("div", { class: classes.value }, hSlot(slots.default));
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/components/field/QField.js
var QField_default = createComponent({
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
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/throttle/throttle.js
function throttle(fn, limit = 250) {
	let wait = false, result;
	return function runThrottle() {
		if (wait === false) {
			wait = true;
			setTimeout(() => {
				wait = false;
			}, limit);
			result = fn.apply(this, arguments);
		}
		return result;
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/directives/ripple/Ripple.js
function showRipple(evt, el, ctx, forceCenter) {
	if (ctx.modifiers.stop === true) stop(evt);
	const color = ctx.modifiers.color;
	let center = ctx.modifiers.center;
	center = center === true || forceCenter === true;
	const node = document.createElement("span"), innerNode = document.createElement("span"), pos = position(evt), { left, top, width, height } = el.getBoundingClientRect(), diameter = Math.sqrt(width * width + height * height), radius = diameter / 2, centerX = `${(width - diameter) / 2}px`, x = center ? centerX : `${pos.left - left - radius}px`, centerY = `${(height - diameter) / 2}px`, y = center ? centerY : `${pos.top - top - radius}px`;
	innerNode.className = "q-ripple__inner";
	css(innerNode, {
		height: `${diameter}px`,
		width: `${diameter}px`,
		transform: `translate3d(${x},${y},0) scale3d(.2,.2,1)`,
		opacity: 0
	});
	node.className = `q-ripple${color ? " text-" + color : ""}`;
	node.setAttribute("dir", "ltr");
	node.appendChild(innerNode);
	el.appendChild(node);
	const abort = () => {
		node.remove();
		clearTimeout(timer);
	};
	ctx.abort.push(abort);
	let timer = setTimeout(() => {
		innerNode.classList.add("q-ripple__inner--enter");
		innerNode.style.transform = `translate3d(${centerX},${centerY},0) scale3d(1,1,1)`;
		innerNode.style.opacity = .2;
		timer = setTimeout(() => {
			innerNode.classList.remove("q-ripple__inner--enter");
			innerNode.classList.add("q-ripple__inner--leave");
			innerNode.style.opacity = 0;
			timer = setTimeout(() => {
				node.remove();
				ctx.abort.splice(ctx.abort.indexOf(abort), 1);
			}, 275);
		}, 250);
	}, 50);
}
function updateModifiers(ctx, { modifiers, value, arg }) {
	const cfg = Object.assign({}, ctx.cfg.ripple, modifiers, value);
	ctx.modifiers = {
		early: cfg.early === true,
		stop: cfg.stop === true,
		center: cfg.center === true,
		color: cfg.color || arg,
		keyCodes: [].concat(cfg.keyCodes || 13)
	};
}
var Ripple_default = createDirective({
	name: "ripple",
	beforeMount(el, binding) {
		const cfg = binding.instance.$.appContext.config.globalProperties.$q.config || {};
		if (cfg.ripple === false) return;
		const ctx = {
			cfg,
			enabled: binding.value !== false,
			modifiers: {},
			abort: [],
			start(evt) {
				if (ctx.enabled === true && evt.qSkipRipple !== true && evt.type === (ctx.modifiers.early === true ? "pointerdown" : "click")) showRipple(evt, el, ctx, evt.qKeyEvent === true);
			},
			keystart: throttle((evt) => {
				if (ctx.enabled === true && evt.qSkipRipple !== true && isKeyCode(evt, ctx.modifiers.keyCodes) === true && evt.type === `key${ctx.modifiers.early === true ? "down" : "up"}`) showRipple(evt, el, ctx, true);
			}, 300)
		};
		updateModifiers(ctx, binding);
		el.__qripple = ctx;
		addEvt(ctx, "main", [
			[
				el,
				"pointerdown",
				"start",
				"passive"
			],
			[
				el,
				"click",
				"start",
				"passive"
			],
			[
				el,
				"keydown",
				"keystart",
				"passive"
			],
			[
				el,
				"keyup",
				"keystart",
				"passive"
			]
		]);
	},
	updated(el, binding) {
		if (binding.oldValue !== binding.value) {
			const ctx = el.__qripple;
			if (ctx !== void 0) {
				ctx.enabled = binding.value !== false;
				if (ctx.enabled === true && Object(binding.value) === binding.value) updateModifiers(ctx, binding);
			}
		}
	},
	beforeUnmount(el) {
		const ctx = el.__qripple;
		if (ctx !== void 0) {
			ctx.abort.forEach((fn) => {
				fn();
			});
			cleanEvt(ctx, "main");
			delete el._qripple;
		}
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/components/chip/QChip.js
var defaultSizes = {
	xs: 8,
	sm: 10,
	md: 14,
	lg: 20,
	xl: 24
};
var QChip_default = createComponent({
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
		clickable: Boolean,
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
		"remove",
		"click"
	],
	setup(props, { slots, emit }) {
		const { proxy: { $q } } = getCurrentInstance();
		const isDark = useDark(props, $q);
		const sizeStyle = useSize(props, defaultSizes);
		const hasLeftIcon = computed(() => props.selected === true || props.icon !== void 0);
		const leftIcon = computed(() => props.selected === true ? props.iconSelected || $q.iconSet.chip.selected : props.icon);
		const removeIcon = computed(() => props.iconRemove || $q.iconSet.chip.remove);
		const isClickable = computed(() => props.disable === false && (props.clickable === true || props.selected !== null));
		const classes = computed(() => {
			const text = props.outline === true ? props.color || props.textColor : props.textColor;
			return "q-chip row inline no-wrap items-center" + (props.outline === false && props.color !== void 0 ? ` bg-${props.color}` : "") + (text ? ` text-${text} q-chip--colored` : "") + (props.disable === true ? " disabled" : "") + (props.dense === true ? " q-chip--dense" : "") + (props.outline === true ? " q-chip--outline" : "") + (props.selected === true ? " q-chip--selected" : "") + (isClickable.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (props.square === true ? " q-chip--square" : "") + (isDark.value === true ? " q-chip--dark q-dark" : "");
		});
		const attributes = computed(() => {
			const chip = props.disable === true ? {
				tabindex: -1,
				"aria-disabled": "true"
			} : { tabindex: props.tabindex || 0 };
			return {
				chip,
				remove: {
					...chip,
					role: "button",
					"aria-hidden": "false",
					"aria-label": props.removeAriaLabel || $q.lang.label.remove
				}
			};
		});
		function onKeyup(e) {
			if (e.keyCode === 13) onClick(e);
		}
		function onClick(e) {
			if (!props.disable) {
				emit("update:selected", !props.selected);
				emit("click", e);
			}
		}
		function onRemove(e) {
			if (e.keyCode === void 0 || e.keyCode === 13) {
				stopAndPrevent(e);
				if (props.disable === false) {
					emit("update:modelValue", false);
					emit("remove");
				}
			}
		}
		function getContent() {
			const child = [];
			if (isClickable.value === true) child.push(h("div", { class: "q-focus-helper" }));
			if (hasLeftIcon.value === true) child.push(h(QIcon_default, {
				class: "q-chip__icon q-chip__icon--left",
				name: leftIcon.value
			}));
			const label = props.label !== void 0 ? [h("div", { class: "ellipsis" }, [props.label])] : void 0;
			child.push(h("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, hMergeSlotSafely(slots.default, label)));
			if (props.iconRight) child.push(h(QIcon_default, {
				class: "q-chip__icon q-chip__icon--right",
				name: props.iconRight
			}));
			if (props.removable === true) child.push(h(QIcon_default, {
				class: "q-chip__icon q-chip__icon--remove cursor-pointer",
				name: removeIcon.value,
				...attributes.value.remove,
				onClick: onRemove,
				onKeyup: onRemove
			}));
			return child;
		}
		return () => {
			if (props.modelValue === false) return;
			const data = {
				class: classes.value,
				style: sizeStyle.value
			};
			if (isClickable.value === true) Object.assign(data, attributes.value.chip, {
				onClick,
				onKeyup
			});
			return hDir("div", data, getContent(), "ripple", props.ripple !== false && props.disable !== true, () => [[Ripple_default, props.ripple]]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel_default = createComponent({
	name: "QItemLabel",
	props: {
		overline: Boolean,
		caption: Boolean,
		header: Boolean,
		lines: [Number, String]
	},
	setup(props, { slots }) {
		const parsedLines = computed(() => parseInt(props.lines, 10));
		const classes = computed(() => "q-item__label" + (props.overline === true ? " q-item__label--overline text-overline" : "") + (props.caption === true ? " q-item__label--caption text-caption" : "") + (props.header === true ? " q-item__label--header" : "") + (parsedLines.value === 1 ? " ellipsis" : ""));
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
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/private.keyboard/escape-key.js
var handlers$1 = [];
var escDown;
function onKeydown(evt) {
	escDown = evt.keyCode === 27;
}
function onBlur() {
	if (escDown === true) escDown = false;
}
function onKeyup(evt) {
	if (escDown === true) {
		escDown = false;
		if (isKeyCode(evt, 27) === true) handlers$1[handlers$1.length - 1](evt);
	}
}
function update(action) {
	window[action]("keydown", onKeydown);
	window[action]("blur", onBlur);
	window[action]("keyup", onKeyup);
	escDown = false;
}
function addEscapeKey(fn) {
	if (client.is.desktop === true) {
		handlers$1.push(fn);
		if (handlers$1.length === 1) update("addEventListener");
	}
}
function removeEscapeKey(fn) {
	const index = handlers$1.indexOf(fn);
	if (index !== -1) {
		handlers$1.splice(index, 1);
		if (handlers$1.length === 0) update("removeEventListener");
	}
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/private.focus/focusout.js
var handlers = [];
function trigger(e) {
	handlers[handlers.length - 1](e);
}
function addFocusout(fn) {
	if (client.is.desktop === true) {
		handlers.push(fn);
		if (handlers.length === 1) document.body.addEventListener("focusin", trigger);
	}
}
function removeFocusout(fn) {
	const index = handlers.indexOf(fn);
	if (index !== -1) {
		handlers.splice(index, 1);
		if (handlers.length === 0) document.body.removeEventListener("focusin", trigger);
	}
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/components/menu/QMenu.js
var QMenu_default = createComponent({
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
		scrollTarget: scrollTargetProp,
		touchPosition: Boolean,
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
		let refocusTarget = null, absoluteOffset, unwatchPosition, avoidAutoClose;
		const vm = getCurrentInstance();
		const { proxy } = vm;
		const { $q } = proxy;
		const innerRef = ref(null);
		const showing = ref(false);
		const hideOnRouteChange = computed(() => props.persistent !== true && props.noRouteDismiss !== true);
		const isDark = useDark(props, $q);
		const { registerTick, removeTick } = useTick();
		const { registerTimeout } = useTimeout();
		const { transitionProps, transitionStyle } = useTransition(props);
		const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
		const { anchorEl, canShow } = useAnchor({ showing });
		const { hide } = useModelToggle({
			showing,
			canShow,
			handleShow,
			handleHide,
			hideOnRouteChange,
			processOnMount: true
		});
		const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent, "menu");
		const clickOutsideProps = {
			anchorEl,
			innerRef,
			onClickOutside(e) {
				if (props.persistent !== true && showing.value === true) {
					hide(e);
					if (e.type === "touchstart" || e.target.classList.contains("q-dialog__backdrop")) stopAndPrevent(e);
					return true;
				}
			}
		};
		const anchorOrigin = computed(() => parsePosition(props.anchor || (props.cover === true ? "center middle" : "bottom start"), $q.lang.rtl));
		const selfOrigin = computed(() => props.cover === true ? anchorOrigin.value : parsePosition(props.self || "top start", $q.lang.rtl));
		const menuClass = computed(() => (props.square === true ? " q-menu--square" : "") + (isDark.value === true ? " q-menu--dark q-dark" : ""));
		const onEvents = computed(() => props.autoClose === true ? { onClick: onAutoClose } : {});
		const handlesFocus = computed(() => showing.value === true && props.persistent !== true);
		watch(handlesFocus, (val) => {
			if (val === true) {
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
				if (node && node.contains(document.activeElement) !== true) {
					node = node.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || node.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || node.querySelector("[autofocus], [data-autofocus]") || node;
					node.focus({ preventScroll: true });
				}
			});
		}
		function handleShow(evt) {
			refocusTarget = props.noRefocus === false ? document.activeElement : null;
			addFocusout(onFocusout);
			showPortal();
			configureScrollTarget();
			absoluteOffset = void 0;
			if (evt !== void 0 && (props.touchPosition || props.contextMenu)) {
				const pos = position(evt);
				if (pos.left !== void 0) {
					const { top, left } = anchorEl.value.getBoundingClientRect();
					absoluteOffset = {
						left: pos.left - left,
						top: pos.top - top
					};
				}
			}
			if (unwatchPosition === void 0) unwatchPosition = watch(() => $q.screen.width + "|" + $q.screen.height + "|" + props.self + "|" + props.anchor + "|" + $q.lang.rtl, updatePosition);
			if (props.noFocus !== true) document.activeElement.blur();
			registerTick(() => {
				updatePosition();
				if (props.noFocus !== true) focus();
			});
			registerTimeout(() => {
				if ($q.platform.is.ios === true) {
					avoidAutoClose = props.autoClose;
					innerRef.value.click();
				}
				updatePosition();
				showPortal(true);
				emit("show", evt);
			}, props.transitionDuration);
		}
		function handleHide(evt) {
			removeTick();
			hidePortal();
			anchorCleanup(true);
			if (refocusTarget !== null && (evt === void 0 || evt.qClickOutside !== true)) {
				((evt?.type.indexOf("key") === 0 ? refocusTarget.closest("[tabindex]:not([tabindex^=\"-\"])") : void 0) || refocusTarget).focus();
				refocusTarget = null;
			}
			registerTimeout(() => {
				hidePortal(true);
				emit("hide", evt);
			}, props.transitionDuration);
		}
		function anchorCleanup(hiding) {
			absoluteOffset = void 0;
			if (unwatchPosition !== void 0) {
				unwatchPosition();
				unwatchPosition = void 0;
			}
			if (hiding === true || showing.value === true) {
				removeFocusout(onFocusout);
				unconfigureScrollTarget();
				removeClickOutside(clickOutsideProps);
				removeEscapeKey(onEscapeKey);
			}
			if (hiding !== true) refocusTarget = null;
		}
		function configureScrollTarget() {
			if (anchorEl.value !== null || props.scrollTarget !== void 0) {
				localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
				changeScrollEvent(localScrollTarget.value, updatePosition);
			}
		}
		function onAutoClose(e) {
			if (avoidAutoClose !== true) {
				closePortalMenus(proxy, e);
				emit("click", e);
			} else avoidAutoClose = false;
		}
		function onFocusout(evt) {
			if (handlesFocus.value === true && props.noFocus !== true && childHasFocus(innerRef.value, evt.target) !== true) focus();
		}
		function onEscapeKey(evt) {
			if (props.noEscDismiss !== true) {
				emit("escapeKey");
				hide(evt);
			}
		}
		function updatePosition() {
			setPosition({
				targetEl: innerRef.value,
				offset: props.offset,
				anchorEl: anchorEl.value,
				anchorOrigin: anchorOrigin.value,
				selfOrigin: selfOrigin.value,
				absoluteOffset,
				fit: props.fit,
				cover: props.cover,
				maxHeight: props.maxHeight,
				maxWidth: props.maxWidth
			});
		}
		function renderPortalContent() {
			return h(Transition, transitionProps.value, () => showing.value === true ? h("div", {
				role: "menu",
				...attrs,
				ref: innerRef,
				tabindex: -1,
				class: ["q-menu q-position-engine scroll" + menuClass.value, attrs.class],
				style: [attrs.style, transitionStyle.value],
				...onEvents.value
			}, hSlot(slots.default)) : null);
		}
		onBeforeUnmount(anchorCleanup);
		Object.assign(proxy, {
			focus,
			updatePosition
		});
		return renderPortal;
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/private.use-history/use-history.js
function useHistory(showing, hide, hideOnRouteChange) {
	let historyEntry;
	function removeFromHistory() {
		if (historyEntry !== void 0) {
			History_default.remove(historyEntry);
			historyEntry = void 0;
		}
	}
	onBeforeUnmount(() => {
		if (showing.value === true) removeFromHistory();
	});
	return {
		removeFromHistory,
		addToHistory() {
			historyEntry = {
				condition: () => hideOnRouteChange.value === true,
				handler: hide
			};
			History_default.add(historyEntry);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/scroll/prevent-scroll.js
var registered = 0, scrollPositionX, scrollPositionY, maxScrollTop, vpPendingUpdate = false, bodyLeft, bodyTop, href, closeTimer = null;
function onWheel(e) {
	if (shouldPreventScroll(e)) stopAndPrevent(e);
}
function shouldPreventScroll(e) {
	if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) return true;
	const path = getEventPath(e), shift = e.shiftKey && !e.deltaX, scrollY = !shift && Math.abs(e.deltaX) <= Math.abs(e.deltaY), delta = shift || scrollY ? e.deltaY : e.deltaX;
	for (let index = 0; index < path.length; index++) {
		const el = path[index];
		if (hasScrollbar(el, scrollY)) return scrollY ? delta < 0 && el.scrollTop === 0 ? true : delta > 0 && el.scrollTop + el.clientHeight === el.scrollHeight : delta < 0 && el.scrollLeft === 0 ? true : delta > 0 && el.scrollLeft + el.clientWidth === el.scrollWidth;
	}
	return true;
}
function onAppleScroll(e) {
	if (e.target === document) document.scrollingElement.scrollTop = document.scrollingElement.scrollTop;
}
function onAppleResize(evt) {
	if (vpPendingUpdate === true) return;
	vpPendingUpdate = true;
	requestAnimationFrame(() => {
		vpPendingUpdate = false;
		const { height } = evt.target, { clientHeight, scrollTop } = document.scrollingElement;
		if (maxScrollTop === void 0 || height !== window.innerHeight) {
			maxScrollTop = clientHeight - height;
			document.scrollingElement.scrollTop = scrollTop;
		}
		if (scrollTop > maxScrollTop) document.scrollingElement.scrollTop -= Math.ceil((scrollTop - maxScrollTop) / 8);
	});
}
function apply(action) {
	const body = document.body, hasViewport = window.visualViewport !== void 0;
	if (action === "add") {
		const { overflowY, overflowX } = window.getComputedStyle(body);
		scrollPositionX = getHorizontalScrollPosition(window);
		scrollPositionY = getVerticalScrollPosition(window);
		bodyLeft = body.style.left;
		bodyTop = body.style.top;
		href = window.location.href;
		body.style.left = `-${scrollPositionX}px`;
		body.style.top = `-${scrollPositionY}px`;
		if (overflowX !== "hidden" && (overflowX === "scroll" || body.scrollWidth > window.innerWidth)) body.classList.add("q-body--force-scrollbar-x");
		if (overflowY !== "hidden" && (overflowY === "scroll" || body.scrollHeight > window.innerHeight)) body.classList.add("q-body--force-scrollbar-y");
		body.classList.add("q-body--prevent-scroll");
		document.qScrollPrevented = true;
		if (client.is.ios === true) if (hasViewport === true) {
			window.scrollTo(0, 0);
			window.visualViewport.addEventListener("resize", onAppleResize, listenOpts.passiveCapture);
			window.visualViewport.addEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
			window.scrollTo(0, 0);
		} else window.addEventListener("scroll", onAppleScroll, listenOpts.passiveCapture);
	}
	if (client.is.desktop === true && client.is.mac === true) window[`${action}EventListener`]("wheel", onWheel, listenOpts.notPassive);
	if (action === "remove") {
		if (client.is.ios === true) if (hasViewport === true) {
			window.visualViewport.removeEventListener("resize", onAppleResize, listenOpts.passiveCapture);
			window.visualViewport.removeEventListener("scroll", onAppleResize, listenOpts.passiveCapture);
		} else window.removeEventListener("scroll", onAppleScroll, listenOpts.passiveCapture);
		body.classList.remove("q-body--prevent-scroll");
		body.classList.remove("q-body--force-scrollbar-x");
		body.classList.remove("q-body--force-scrollbar-y");
		document.qScrollPrevented = false;
		body.style.left = bodyLeft;
		body.style.top = bodyTop;
		if (window.location.href === href) window.scrollTo(scrollPositionX, scrollPositionY);
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
		if (client.is.ios === true && client.is.nativeMobile === true) {
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
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/composables/private.use-prevent-scroll/use-prevent-scroll.js
function usePreventScroll() {
	let currentState;
	return { preventBodyScroll(state) {
		if (state !== currentState && (currentState !== void 0 || state === true)) {
			currentState = state;
			preventScroll(state);
		}
	} };
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/components/dialog/QDialog.js
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
var QDialog_default = createComponent({
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
		const innerRef = ref(null);
		const showing = ref(false);
		const animating = ref(false);
		let shakeTimeout = null, refocusTarget = null, isMaximized, avoidAutoClose;
		const hideOnRouteChange = computed(() => props.persistent !== true && props.noRouteDismiss !== true && props.seamless !== true);
		const { preventBodyScroll } = usePreventScroll();
		const { registerTimeout } = useTimeout();
		const { registerTick, removeTick } = useTick();
		const { transitionProps, transitionStyle } = useTransition(props, () => defaultTransitions[props.position][0], () => defaultTransitions[props.position][1]);
		const backdropStyle = computed(() => transitionStyle.value + (props.backdropFilter !== void 0 ? `;backdrop-filter:${props.backdropFilter};-webkit-backdrop-filter:${props.backdropFilter}` : ""));
		const { showPortal, hidePortal, portalIsAccessible, renderPortal } = usePortal(vm, innerRef, renderPortalContent, "dialog");
		const { hide } = useModelToggle({
			showing,
			hideOnRouteChange,
			handleShow,
			handleHide,
			processOnMount: true
		});
		const { addToHistory, removeFromHistory } = useHistory(showing, hide, hideOnRouteChange);
		const classes = computed(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${props.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${props.position} ${positionClass[props.position]}` + (animating.value === true ? " q-dialog__inner--animating" : "") + (props.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (props.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (props.square === true ? " q-dialog__inner--square" : ""));
		const useBackdrop = computed(() => showing.value === true && props.seamless !== true);
		const onEvents = computed(() => props.autoClose === true ? { onClick: onAutoClose } : {});
		const rootClasses = computed(() => [`q-dialog fullscreen no-pointer-events q-dialog--${useBackdrop.value === true ? "modal" : "seamless"}`, attrs.class]);
		watch(() => props.maximized, (state) => {
			if (showing.value === true) updateMaximized(state);
		});
		watch(useBackdrop, (val) => {
			preventBodyScroll(val);
			if (val === true) {
				addFocusout(onFocusChange);
				addEscapeKey(onEscapeKey);
			} else {
				removeFocusout(onFocusChange);
				removeEscapeKey(onEscapeKey);
			}
		});
		function handleShow(evt) {
			addToHistory();
			refocusTarget = props.noRefocus === false && document.activeElement !== null ? document.activeElement : null;
			updateMaximized(props.maximized);
			showPortal();
			animating.value = true;
			if (props.noFocus !== true) {
				document.activeElement?.blur();
				registerTick(focus);
			} else removeTick();
			registerTimeout(() => {
				if (vm.proxy.$q.platform.is.ios === true) {
					if (props.seamless !== true && document.activeElement) {
						const { top, bottom } = document.activeElement.getBoundingClientRect(), { innerHeight } = window, height = window.visualViewport !== void 0 ? window.visualViewport.height : innerHeight;
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
			}, props.transitionDuration);
		}
		function handleHide(evt) {
			removeTick();
			removeFromHistory();
			cleanup(true);
			animating.value = true;
			hidePortal();
			if (refocusTarget !== null) {
				((evt?.type.indexOf("key") === 0 ? refocusTarget.closest("[tabindex]:not([tabindex^=\"-\"])") : void 0) || refocusTarget).focus();
				refocusTarget = null;
			}
			registerTimeout(() => {
				hidePortal(true);
				animating.value = false;
				emit("hide", evt);
			}, props.transitionDuration);
		}
		function focus(selector) {
			addFocusFn(() => {
				let node = innerRef.value;
				if (node === null) return;
				if (selector !== void 0) {
					const target = node.querySelector(selector);
					if (target !== null) {
						target.focus({ preventScroll: true });
						return;
					}
				}
				if (node.contains(document.activeElement) !== true) {
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
		function onEscapeKey() {
			if (props.seamless !== true) if (props.persistent === true || props.noEscDismiss === true) {
				if (props.maximized !== true && props.noShake !== true) shake();
			} else {
				emit("escapeKey");
				hide();
			}
		}
		function cleanup(hiding) {
			if (shakeTimeout !== null) {
				clearTimeout(shakeTimeout);
				shakeTimeout = null;
			}
			if (hiding === true || showing.value === true) {
				updateMaximized(false);
				if (props.seamless !== true) {
					preventBodyScroll(false);
					removeFocusout(onFocusChange);
					removeEscapeKey(onEscapeKey);
				}
			}
			if (hiding !== true) refocusTarget = null;
		}
		function updateMaximized(active) {
			if (active === true) {
				if (isMaximized !== true) {
					if (maximizedModals < 1) document.body.classList.add("q-body--dialog");
					maximizedModals++;
					isMaximized = true;
				}
			} else if (isMaximized === true) {
				if (maximizedModals < 2) document.body.classList.remove("q-body--dialog");
				maximizedModals--;
				isMaximized = false;
			}
		}
		function onAutoClose(e) {
			if (avoidAutoClose !== true) {
				hide(e);
				emit("click", e);
			}
		}
		function onBackdropClick(e) {
			if (props.persistent !== true && props.noBackdropDismiss !== true) hide(e);
			else if (props.noShake !== true) shake();
		}
		function onFocusChange(evt) {
			if (props.allowFocusOutside !== true && portalIsAccessible.value === true && childHasFocus(innerRef.value, evt.target) !== true) focus("[tabindex]:not([tabindex=\"-1\"])");
		}
		Object.assign(vm.proxy, {
			focus,
			shake,
			__updateRefocusTarget(target) {
				refocusTarget = target || null;
			}
		});
		onBeforeUnmount(cleanup);
		function renderPortalContent() {
			return h("div", {
				role: "dialog",
				"aria-modal": useBackdrop.value === true ? "true" : "false",
				...attrs,
				class: rootClasses.value
			}, [h(Transition, {
				name: "q-transition--fade",
				appear: true
			}, () => useBackdrop.value === true ? h("div", {
				class: "q-dialog__backdrop fixed-full",
				style: backdropStyle.value,
				"aria-hidden": "true",
				tabindex: -1,
				onClick: onBackdropClick
			}) : null), h(Transition, transitionProps.value, () => showing.value === true ? h("div", {
				ref: innerRef,
				class: classes.value,
				style: transitionStyle.value,
				tabindex: -1,
				...onEvents.value
			}, hSlot(slots.default)) : null)]);
		}
		return renderPortal;
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/private.rtl/rtl.js
var rtlHasScrollBug = false;
{
	const scroller = document.createElement("div");
	scroller.setAttribute("dir", "rtl");
	Object.assign(scroller.style, {
		width: "1px",
		height: "1px",
		overflow: "auto"
	});
	const spacer = document.createElement("div");
	Object.assign(spacer.style, {
		width: "1000px",
		height: "1px"
	});
	document.body.appendChild(scroller);
	scroller.appendChild(spacer);
	scroller.scrollLeft = -1e3;
	rtlHasScrollBug = scroller.scrollLeft >= 0;
	scroller.remove();
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/components/virtual-scroll/use-virtual-scroll.js
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
	const parentCalc = parent === window ? document.scrollingElement || document.documentElement : parent, propElSize = horizontal === true ? "offsetWidth" : "offsetHeight", details = {
		scrollStart: 0,
		scrollViewSize: -stickyStart - stickyEnd,
		scrollMaxSize: 0,
		offsetStart: -stickyStart,
		offsetEnd: -stickyEnd
	};
	if (horizontal === true) {
		if (parent === window) {
			details.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0;
			details.scrollViewSize += document.documentElement.clientWidth;
		} else {
			details.scrollStart = parentCalc.scrollLeft;
			details.scrollViewSize += parentCalc.clientWidth;
		}
		details.scrollMaxSize = parentCalc.scrollWidth;
		if (rtl === true) details.scrollStart = (rtlHasScrollBug === true ? details.scrollMaxSize - details.scrollViewSize : 0) - details.scrollStart;
	} else {
		if (parent === window) {
			details.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0;
			details.scrollViewSize += document.documentElement.clientHeight;
		} else {
			details.scrollStart = parentCalc.scrollTop;
			details.scrollViewSize += parentCalc.clientHeight;
		}
		details.scrollMaxSize = parentCalc.scrollHeight;
	}
	if (beforeRef !== null) {
		for (let el = beforeRef.previousElementSibling; el !== null; el = el.previousElementSibling) if (el.classList.contains("q-virtual-scroll--skip") === false) details.offsetStart += el[propElSize];
	}
	if (afterRef !== null) {
		for (let el = afterRef.nextElementSibling; el !== null; el = el.nextElementSibling) if (el.classList.contains("q-virtual-scroll--skip") === false) details.offsetEnd += el[propElSize];
	}
	if (child !== parent) {
		const parentRect = parentCalc.getBoundingClientRect(), childRect = child.getBoundingClientRect();
		if (horizontal === true) {
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
	if (scroll === "end") scroll = (parent === window ? document.body : parent)[horizontal === true ? "scrollWidth" : "scrollHeight"];
	if (parent === window) if (horizontal === true) {
		if (rtl === true) scroll = (rtlHasScrollBug === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - scroll;
		window.scrollTo(scroll, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
	} else window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, scroll);
	else if (horizontal === true) {
		if (rtl === true) scroll = (rtlHasScrollBug === true ? parent.scrollWidth - parent.offsetWidth : 0) - scroll;
		parent.scrollLeft = scroll;
	} else parent.scrollTop = scroll;
}
function sumSize(sizeAgg, size, from, to) {
	if (from >= to) return 0;
	const lastTo = size.length, fromAgg = Math.floor(from / aggBucketSize), toAgg = Math.floor((to - 1) / aggBucketSize) + 1;
	let total = sizeAgg.slice(fromAgg, toAgg).reduce(sumFn, 0);
	if (from % aggBucketSize !== 0) total -= size.slice(fromAgg * aggBucketSize, from).reduce(sumFn, 0);
	if (to % aggBucketSize !== 0 && to !== lastTo) total -= size.slice(to, toAgg * aggBucketSize).reduce(sumFn, 0);
	return total;
}
var useVirtualScrollProps = {
	virtualScrollHorizontal: Boolean,
	onVirtualScroll: Function,
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
function useVirtualScroll({ virtualScrollLength, getVirtualScrollTarget, getVirtualScrollEl, virtualScrollItemSizeComputed }) {
	const { props, emit, proxy } = getCurrentInstance();
	const { $q } = proxy;
	let prevScrollStart, prevToIndex, localScrollViewSize, virtualScrollSizesAgg = [], virtualScrollSizes;
	const virtualScrollPaddingBefore = ref(0);
	const virtualScrollPaddingAfter = ref(0);
	const virtualScrollSliceSizeComputed = ref({});
	const beforeRef = ref(null);
	const afterRef = ref(null);
	const contentRef = ref(null);
	const virtualScrollSliceRange = ref({
		from: 0,
		to: 0
	});
	const colspanAttr = computed(() => props.tableColspan !== void 0 ? props.tableColspan : 100);
	if (virtualScrollItemSizeComputed === void 0) virtualScrollItemSizeComputed = computed(() => props.virtualScrollItemSize);
	const needsReset = computed(() => virtualScrollItemSizeComputed.value + ";" + props.virtualScrollHorizontal);
	watch(computed(() => needsReset.value + ";" + props.virtualScrollSliceRatioBefore + ";" + props.virtualScrollSliceRatioAfter), () => {
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
		const scrollDetails = getScrollDetails(scrollEl, getVirtualScrollEl(), beforeRef.value, afterRef.value, props.virtualScrollHorizontal, $q.lang.rtl, props.virtualScrollStickySizeStart, props.virtualScrollStickySizeEnd);
		if (localScrollViewSize !== scrollDetails.scrollViewSize) setVirtualScrollSize(scrollDetails.scrollViewSize);
		setVirtualScrollSliceRange(scrollEl, scrollDetails, Math.min(virtualScrollLength.value - 1, Math.max(0, parseInt(toIndex, 10) || 0)), 0, scrollToEdges.indexOf(edge) !== -1 ? edge : prevToIndex !== -1 && toIndex > prevToIndex ? "end" : "start");
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
		const alignForce = typeof align === "string" && align.indexOf("-force") !== -1;
		const alignEnd = alignForce === true ? align.replace("-force", "") : align;
		const alignRange = alignEnd !== void 0 ? alignEnd : "start";
		let from = Math.max(0, toIndex - virtualScrollSliceSizeComputed.value[alignRange]), to = from + virtualScrollSliceSizeComputed.value.total;
		if (to > virtualScrollLength.value) {
			to = virtualScrollLength.value;
			from = Math.max(0, to - virtualScrollSliceSizeComputed.value.total);
		}
		prevScrollStart = scrollDetails.scrollStart;
		const rangeChanged = from !== virtualScrollSliceRange.value.from || to !== virtualScrollSliceRange.value.to;
		if (rangeChanged === false && alignEnd === void 0) {
			emitScroll(toIndex);
			return;
		}
		const { activeElement } = document;
		const contentEl = contentRef.value;
		if (rangeChanged === true && contentEl !== null && contentEl !== activeElement && contentEl.contains(activeElement) === true) {
			contentEl.addEventListener("focusout", onBlurRefocusFn);
			setTimeout(() => {
				contentEl?.removeEventListener("focusout", onBlurRefocusFn);
			});
		}
		setOverflowAnchor(contentEl, toIndex - from);
		const sizeBefore = alignEnd !== void 0 ? virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0) : 0;
		if (rangeChanged === true) {
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
			if (rangeChanged === true) updateVirtualScrollSizes(from);
			const sizeAfter = virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0), posStart = sizeAfter + scrollDetails.offsetStart + virtualScrollPaddingBefore.value, posEnd = posStart + virtualScrollSizes[toIndex];
			let scrollPosition = posStart + offset;
			if (alignEnd !== void 0) {
				const sizeDiff = sizeAfter - sizeBefore;
				const scrollStart = scrollDetails.scrollStart + sizeDiff;
				scrollPosition = alignForce !== true && scrollStart < posStart && posEnd < scrollStart + scrollDetails.scrollViewSize ? scrollStart : alignEnd === "end" ? posEnd - scrollDetails.scrollViewSize : posStart - (alignEnd === "start" ? 0 : Math.round((scrollDetails.scrollViewSize - virtualScrollSizes[toIndex]) / 2));
			}
			prevScrollStart = scrollPosition;
			setScroll(scrollEl, scrollPosition, props.virtualScrollHorizontal, $q.lang.rtl);
			emitScroll(toIndex);
		});
	}
	function updateVirtualScrollSizes(from) {
		const contentEl = contentRef.value;
		if (contentEl) {
			const children = filterProto.call(contentEl.children, (el) => el.classList && el.classList.contains("q-virtual-scroll--skip") === false), childrenLength = children.length, sizeFn = props.virtualScrollHorizontal === true ? (el) => el.getBoundingClientRect().width : (el) => el.offsetHeight;
			let index = from, size, diff;
			for (let i = 0; i < childrenLength;) {
				size = sizeFn(children[i]);
				i++;
				while (i < childrenLength && children[i].classList.contains("q-virtual-scroll--with-prev") === true) {
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
		contentRef.value?.focus();
	}
	function localResetVirtualScroll(toIndex, fullReset) {
		const defaultSize = Number(virtualScrollItemSizeComputed.value);
		if (fullReset === true || Array.isArray(virtualScrollSizes) === false) virtualScrollSizes = [];
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
		const virtualScrollSliceRatioBefore = parseFloat(props.virtualScrollSliceRatioBefore) || 0;
		const virtualScrollSliceRatioAfter = parseFloat(props.virtualScrollSliceRatioAfter) || 0;
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
	function padVirtualScroll(tag, content) {
		const paddingSize = props.virtualScrollHorizontal === true ? "width" : "height";
		const style = { ["--q-virtual-scroll-item-" + paddingSize]: virtualScrollItemSizeComputed.value + "px" };
		return [
			tag === "tbody" ? h(tag, {
				class: "q-virtual-scroll__padding",
				key: "before",
				ref: beforeRef
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
				style: {
					[paddingSize]: `${virtualScrollPaddingBefore.value}px`,
					...style
				}
			}),
			h(tag, {
				class: "q-virtual-scroll__content",
				key: "content",
				ref: contentRef,
				tabindex: -1
			}, content.flat()),
			tag === "tbody" ? h(tag, {
				class: "q-virtual-scroll__padding",
				key: "after",
				ref: afterRef
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
	const onVirtualScrollEvt = debounce(localOnVirtualScrollEvt, $q.platform.is.ios === true ? 120 : 35);
	onBeforeMount(() => {
		setVirtualScrollSize();
	});
	let shouldActivate = false;
	onDeactivated(() => {
		shouldActivate = true;
	});
	onActivated(() => {
		if (shouldActivate !== true) return;
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
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/utils/format/format.js
function normalizeToInterval(v, min, max) {
	if (max <= min) return min;
	const size = max - min + 1;
	let index = min + (v - min) % size;
	if (index < min) index = size + index;
	return index === 0 ? 0 : index;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.19.3/node_modules/quasar/src/components/select/QSelect.js
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
var QSelect_default = createComponent({
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
		newValueMode: {
			type: String,
			validator: validateNewValueMode
		},
		mapOptions: Boolean,
		emitValue: Boolean,
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
		const { $q } = proxy;
		const menu = ref(false);
		const dialog = ref(false);
		const optionIndex = ref(-1);
		const inputValue = ref("");
		const dialogFieldFocused = ref(false);
		const innerLoadingIndicator = ref(false);
		let filterTimer = null, inputValueTimer = null, innerValueCache, hasDialog, userInputValue, filterId = null, defaultInputValue, transitionShowComputed, searchBuffer, searchBufferExp;
		const inputRef = ref(null);
		const targetRef = ref(null);
		const menuRef = ref(null);
		const dialogRef = ref(null);
		const menuContentRef = ref(null);
		const nameProp = useFormInputNameAttr(props);
		const onComposition = useKeyComposition(onInput);
		const virtualScrollLength = computed(() => Array.isArray(props.options) ? props.options.length : 0);
		const { virtualScrollSliceRange, virtualScrollSliceSizeComputed, localResetVirtualScroll, padVirtualScroll, onVirtualScrollEvt, scrollTo, setVirtualScrollSize } = useVirtualScroll({
			virtualScrollLength,
			getVirtualScrollTarget,
			getVirtualScrollEl,
			virtualScrollItemSizeComputed: computed(() => props.virtualScrollItemSize === void 0 ? props.optionsDense === true ? 24 : 48 : props.virtualScrollItemSize)
		});
		const state = useFieldState();
		const innerValue = computed(() => {
			const mapNull = props.mapOptions === true && props.multiple !== true, val = props.modelValue !== void 0 && (props.modelValue !== null || mapNull === true) ? props.multiple === true && Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue] : [];
			if (props.mapOptions === true && Array.isArray(props.options) === true) {
				const cache = props.mapOptions === true && innerValueCache !== void 0 ? innerValueCache : [];
				const values = val.map((v) => getOption(v, cache));
				return props.modelValue === null && mapNull === true ? values.filter((v) => v !== null) : values;
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
		const isOptionsDark = computed(() => props.optionsDark === null ? state.isDark.value : props.optionsDark);
		const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
		const computedInputClass = computed(() => {
			let cls = "q-field__input q-placeholder col";
			if (props.hideSelected === true || innerValue.value.length === 0) return [cls, props.inputClass];
			cls += " q-field__input--padding";
			return props.inputClass === void 0 ? cls : [cls, props.inputClass];
		});
		const menuContentClass = computed(() => (props.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (props.popupContentClass ? " " + props.popupContentClass : ""));
		const noOptions = computed(() => virtualScrollLength.value === 0);
		const selectedString = computed(() => innerValue.value.map((opt) => getOptionLabel.value(opt)).join(", "));
		const ariaCurrentValue = computed(() => props.displayValue !== void 0 ? props.displayValue : selectedString.value);
		const needsHtmlFn = computed(() => props.optionsHtml === true ? () => true : (opt) => opt?.html === true);
		const valueAsHtml = computed(() => props.displayValueHtml === true || props.displayValue === void 0 && (props.optionsHtml === true || innerValue.value.some(needsHtmlFn.value)));
		const tabindex = computed(() => state.focused.value === true ? props.tabindex : -1);
		const comboboxAttrs = computed(() => {
			const attrs = {
				tabindex: props.tabindex,
				role: "combobox",
				"aria-label": props.label,
				"aria-readonly": props.readonly === true ? "true" : "false",
				"aria-autocomplete": props.useInput === true ? "list" : "none",
				"aria-expanded": menu.value === true ? "true" : "false",
				"aria-controls": `${state.targetUid.value}_lb`
			};
			if (optionIndex.value >= 0) attrs["aria-activedescendant"] = `${state.targetUid.value}_${optionIndex.value}`;
			return attrs;
		});
		const listboxAttrs = computed(() => ({
			id: `${state.targetUid.value}_lb`,
			role: "listbox",
			"aria-multiselectable": props.multiple === true ? "true" : "false"
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
				const active = isOptionSelected(opt) === true;
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
					"aria-selected": active === true ? "true" : "false",
					id: `${state.targetUid.value}_${index}`,
					onClick: () => {
						toggleOption(opt);
					}
				};
				if (disable !== true) {
					if (optionIndex.value === index) itemProps.focused = true;
					if ($q.platform.is.desktop === true) itemProps.onMousemove = () => {
						if (menu.value === true) setOptionIndex(index);
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
		const squaredMenu = computed(() => props.optionsCover === false && props.outlined !== true && props.standout !== true && props.borderless !== true && props.rounded !== true);
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
					if (hasDialog === true) stop(e);
				}
			};
			evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
			return evt;
		});
		watch(innerValue, (val) => {
			innerValueCache = val;
			if (props.useInput === true && props.fillInput === true && props.multiple !== true && state.innerLoading.value !== true && (dialog.value !== true && menu.value !== true || hasValue.value !== true)) {
				if (userInputValue !== true) resetInputValue();
				if (dialog.value === true || menu.value === true) filter("");
			}
		}, { immediate: true });
		watch(() => props.fillInput, resetInputValue);
		watch(menu, updateMenu);
		watch(virtualScrollLength, rerenderMenu);
		function getEmittingOptionValue(opt) {
			return props.emitValue === true ? getOptionValue.value(opt) : opt;
		}
		function removeAtIndex(index) {
			if (index !== -1 && index < innerValue.value.length) if (props.multiple === true) {
				const model = props.modelValue.slice();
				emit("remove", {
					index,
					value: model.splice(index, 1)[0]
				});
				emit("update:modelValue", model);
			} else emit("update:modelValue", null);
		}
		function removeAtIndexAndFocus(index) {
			removeAtIndex(index);
			state.focus();
		}
		function add(opt, unique) {
			const val = getEmittingOptionValue(opt);
			if (props.multiple !== true) {
				if (props.fillInput === true) updateInputValue(getOptionLabel.value(opt), true, true);
				emit("update:modelValue", val);
				return;
			}
			if (innerValue.value.length === 0) {
				emit("add", {
					index: 0,
					value: val
				});
				emit("update:modelValue", props.multiple === true ? [val] : val);
				return;
			}
			if (unique === true && isOptionSelected(opt) === true) return;
			if (props.maxValues !== void 0 && props.modelValue.length >= props.maxValues) return;
			const model = props.modelValue.slice();
			emit("add", {
				index: model.length,
				value: val
			});
			model.push(val);
			emit("update:modelValue", model);
		}
		function toggleOption(opt, keepOpen) {
			if (state.editable.value !== true || opt === void 0 || isOptionDisabled.value(opt) === true) return;
			const optValue = getOptionValue.value(opt);
			if (props.multiple !== true) {
				if (keepOpen !== true) {
					updateInputValue(props.fillInput === true ? getOptionLabel.value(opt) : "", true, true);
					hidePopup();
				}
				targetRef.value?.focus();
				if (innerValue.value.length === 0 || isDeepEqual(getOptionValue.value(innerValue.value[0]), optValue) !== true) emit("update:modelValue", props.emitValue === true ? optValue : opt);
				return;
			}
			if (hasDialog !== true || dialogFieldFocused.value === true) state.focus();
			selectInputText();
			if (innerValue.value.length === 0) {
				const val = props.emitValue === true ? optValue : opt;
				emit("add", {
					index: 0,
					value: val
				});
				emit("update:modelValue", props.multiple === true ? [val] : val);
				return;
			}
			const model = props.modelValue.slice(), index = innerOptionsValue.value.findIndex((v) => isDeepEqual(v, optValue));
			if (index !== -1) emit("remove", {
				index,
				value: model.splice(index, 1)[0]
			});
			else {
				if (props.maxValues !== void 0 && model.length >= props.maxValues) return;
				const val = props.emitValue === true ? optValue : opt;
				emit("add", {
					index: model.length,
					value: val
				});
				model.push(val);
			}
			emit("update:modelValue", model);
		}
		function setOptionIndex(index) {
			if ($q.platform.is.desktop !== true) return;
			const val = index !== -1 && index < virtualScrollLength.value ? index : -1;
			if (optionIndex.value !== val) optionIndex.value = val;
		}
		function moveOptionSelection(localOffset = 1, skipInputValue) {
			if (menu.value === true) {
				let index = optionIndex.value;
				do
					index = normalizeToInterval(index + localOffset, -1, virtualScrollLength.value - 1);
				while (index !== -1 && index !== optionIndex.value && isOptionDisabled.value(props.options[index]) === true);
				if (optionIndex.value !== index) {
					setOptionIndex(index);
					scrollTo(index);
					if (skipInputValue !== true && props.useInput === true && props.fillInput === true) setInputValue(index >= 0 ? getOptionLabel.value(props.options[index]) : defaultInputValue, true);
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
			if (props.useInput === true && targetRef.value !== null && (e === void 0 || targetRef.value === e.target && e.target.value === selectedString.value)) targetRef.value.select();
		}
		function onTargetKeyup(e) {
			if (isKeyCode(e, 27) === true && menu.value === true) {
				stop(e);
				hidePopup();
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
					if (innerValue.value.indexOf(option) === -1) toggleOption(option);
					else hidePopup();
					return true;
				};
				const fillFn = (afterFilter) => {
					if (findFn(getOptionValue) !== true && afterFilter !== true && findFn(getOptionLabel) !== true) filter(value, true, () => fillFn(true));
				};
				fillFn();
			} else state.clearValue(e);
		}
		function onTargetKeypress(e) {
			emit("keypress", e);
		}
		function onTargetKeydown(e) {
			emit("keydown", e);
			if (shouldIgnoreKey(e) === true) return;
			const newValueModeValid = inputValue.value.length !== 0 && (props.newValueMode !== void 0 || props.onNewValue !== void 0);
			const tabShouldSelect = e.shiftKey !== true && props.disableTabSelection !== true && props.multiple !== true && (optionIndex.value !== -1 || newValueModeValid === true);
			if (e.keyCode === 27) {
				prevent(e);
				return;
			}
			if (e.keyCode === 9 && tabShouldSelect === false) {
				closeMenu();
				return;
			}
			if (e.target === void 0 || e.target.id !== state.targetUid.value || state.editable.value !== true) return;
			if (e.keyCode === 40 && state.innerLoading.value !== true && menu.value === false) {
				stopAndPrevent(e);
				showPopup();
				return;
			}
			if (e.keyCode === 8 && (props.useChips === true || props.clearable === true) && props.hideSelected !== true && inputValue.value.length === 0) {
				if (props.multiple === true && Array.isArray(props.modelValue) === true) removeAtIndex(props.modelValue.length - 1);
				else if (props.multiple !== true && props.modelValue !== null) emit("update:modelValue", null);
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
			if (optionsLength > 0 && props.useInput !== true && e.key !== void 0 && e.key.length === 1 && e.altKey === false && e.ctrlKey === false && e.metaKey === false && (e.keyCode !== 32 || searchBuffer.length !== 0)) {
				if (menu.value !== true) showPopup(e);
				const char = e.key.toLocaleLowerCase(), keyRepeat = searchBuffer.length === 1 && searchBuffer[0] === char;
				searchBufferExp = Date.now() + 1500;
				if (keyRepeat === false) {
					stopAndPrevent(e);
					searchBuffer += char;
				}
				const searchRe = new RegExp("^" + searchBuffer.split("").map((l) => reEscapeList.indexOf(l) !== -1 ? "\\" + l : l).join(".*"), "i");
				let index = optionIndex.value;
				if (keyRepeat === true || index < 0 || searchRe.test(getOptionLabel.value(props.options[index])) !== true) do
					index = normalizeToInterval(index + 1, -1, optionsLength - 1);
				while (index !== optionIndex.value && (isOptionDisabled.value(props.options[index]) === true || searchRe.test(getOptionLabel.value(props.options[index])) !== true));
				if (optionIndex.value !== index) nextTick(() => {
					setOptionIndex(index);
					scrollTo(index);
					if (index >= 0 && props.useInput === true && props.fillInput === true) setInputValue(getOptionLabel.value(props.options[index]), true);
				});
				return;
			}
			if (e.keyCode !== 13 && (e.keyCode !== 32 || props.useInput === true || searchBuffer !== "") && (e.keyCode !== 9 || tabShouldSelect === false)) return;
			if (e.keyCode !== 9) stopAndPrevent(e);
			if (optionIndex.value !== -1 && optionIndex.value < optionsLength) {
				toggleOption(props.options[optionIndex.value]);
				return;
			}
			if (newValueModeValid === true) {
				const done = (val, mode) => {
					if (mode) {
						if (validateNewValueMode(mode) !== true) return;
					} else mode = props.newValueMode;
					updateInputValue("", props.multiple !== true, true);
					if (val === void 0 || val === null) return;
					(mode === "toggle" ? toggleOption : add)(val, mode === "add-unique");
					if (props.multiple !== true) {
						targetRef.value?.focus();
						hidePopup();
					}
				};
				if (props.onNewValue !== void 0) emit("newValue", inputValue.value, done);
				else done(inputValue.value);
				if (props.multiple !== true) return;
			}
			if (menu.value === true) closeMenu();
			else if (state.innerLoading.value !== true) showPopup();
		}
		function getVirtualScrollEl() {
			return hasDialog === true ? menuContentRef.value : menuRef.value !== null && menuRef.value.contentEl !== null ? menuRef.value.contentEl : void 0;
		}
		function getVirtualScrollTarget() {
			return getVirtualScrollEl();
		}
		function getSelection() {
			if (props.hideSelected === true) return [];
			if (slots["selected-item"] !== void 0) return selectedScope.value.map((scope) => slots["selected-item"](scope)).slice();
			if (slots.selected !== void 0) return [].concat(slots.selected());
			if (props.useChips === true) return selectedScope.value.map((scope, i) => h(QChip_default, {
				key: "option-" + i,
				removable: state.editable.value === true && isOptionDisabled.value(scope.opt) !== true,
				dense: true,
				textColor: props.color,
				tabindex: tabindex.value,
				onRemove() {
					scope.removeAtIndex(i);
				}
			}, () => h("span", {
				class: "ellipsis",
				[scope.html === true ? "innerHTML" : "textContent"]: getOptionLabel.value(scope.opt)
			})));
			return [h("span", {
				class: "ellipsis",
				[valueAsHtml.value === true ? "innerHTML" : "textContent"]: ariaCurrentValue.value
			})];
		}
		function getAllOptions() {
			if (noOptions.value === true) return slots["no-option"] !== void 0 ? slots["no-option"]({ inputValue: inputValue.value }) : void 0;
			const fn = slots.option !== void 0 ? slots.option : (scope) => h(QItem_default, {
				key: scope.index,
				...scope.itemProps
			}, () => h(QItemSection_default, () => h(QItemLabel_default, () => h("span", { [scope.html === true ? "innerHTML" : "textContent"]: scope.label }))));
			let options = padVirtualScroll("div", optionScope.value.map(fn));
			if (slots["before-options"] !== void 0) options = slots["before-options"]().concat(options);
			return hMergeSlot(slots["after-options"], options);
		}
		function getInput(fromDialog, isTarget) {
			const attrs = isTarget === true ? {
				...comboboxAttrs.value,
				...state.splitAttrs.attributes.value
			} : void 0;
			const data = {
				ref: isTarget === true ? targetRef : void 0,
				key: "i_t",
				class: computedInputClass.value,
				style: props.inputStyle,
				value: inputValue.value !== void 0 ? inputValue.value : "",
				type: "search",
				...attrs,
				id: isTarget === true ? state.targetUid.value : void 0,
				maxlength: props.maxlength,
				autocomplete: props.autocomplete,
				"data-autofocus": fromDialog === true || props.autofocus === true || void 0,
				disabled: props.disable === true,
				readonly: props.readonly === true,
				...inputControlEvents.value
			};
			if (fromDialog !== true && hasDialog === true) if (Array.isArray(data.class) === true) data.class = [...data.class, "no-pointer-events"];
			else data.class += " no-pointer-events";
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
			if (e && e.target && e.target.qComposing === true) return;
			setInputValue(e.target.value || "");
			userInputValue = true;
			defaultInputValue = inputValue.value;
			if (state.focused.value !== true && (hasDialog !== true || dialogFieldFocused.value === true)) state.focus();
			if (props.onFilter !== void 0) filterTimer = setTimeout(() => {
				filterTimer = null;
				filter(inputValue.value);
			}, props.inputDebounce);
		}
		function setInputValue(val, emitImmediately) {
			if (inputValue.value !== val) {
				inputValue.value = val;
				if (emitImmediately === true || props.inputDebounce === 0 || props.inputDebounce === "0") emit("inputValue", val);
				else inputValueTimer = setTimeout(() => {
					inputValueTimer = null;
					emit("inputValue", val);
				}, props.inputDebounce);
			}
		}
		function updateInputValue(val, noFiltering, internal) {
			userInputValue = internal !== true;
			if (props.useInput === true) {
				setInputValue(val, true);
				if (noFiltering === true || internal !== true) defaultInputValue = val;
				if (noFiltering !== true) filter(val);
			}
		}
		function filter(val, keepClosed, afterUpdateFn) {
			if (props.onFilter === void 0 || keepClosed !== true && state.focused.value !== true) return;
			if (state.innerLoading.value === true) emit("filterAbort");
			else {
				state.innerLoading.value = true;
				innerLoadingIndicator.value = true;
			}
			if (val !== "" && props.multiple !== true && innerValue.value.length !== 0 && userInputValue !== true && val === getOptionLabel.value(innerValue.value[0])) val = "";
			const localFilterId = setTimeout(() => {
				if (menu.value === true) menu.value = false;
			}, 10);
			if (filterId !== null) clearTimeout(filterId);
			filterId = localFilterId;
			emit("filter", val, (fn, afterFn) => {
				if ((keepClosed === true || state.focused.value === true) && filterId === localFilterId) {
					clearTimeout(filterId);
					if (typeof fn === "function") fn();
					innerLoadingIndicator.value = false;
					nextTick(() => {
						state.innerLoading.value = false;
						if (state.editable.value === true) if (keepClosed === true) {
							if (menu.value === true) hidePopup();
						} else if (menu.value === true) updateMenu(true);
						else menu.value = true;
						if (typeof afterFn === "function") nextTick(() => {
							afterFn(proxy);
						});
						if (typeof afterUpdateFn === "function") nextTick(() => {
							afterUpdateFn(proxy);
						});
					});
				}
			}, () => {
				if (state.focused.value === true && filterId === localFilterId) {
					clearTimeout(filterId);
					state.innerLoading.value = false;
					innerLoadingIndicator.value = false;
				}
				if (menu.value === true) menu.value = false;
			});
		}
		function getMenu() {
			return h(QMenu_default, {
				ref: menuRef,
				class: menuContentClass.value,
				style: props.popupContentStyle,
				modelValue: menu.value,
				fit: props.menuShrink !== true,
				cover: props.optionsCover === true && noOptions.value !== true && props.useInput !== true,
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
				...listboxAttrs.value,
				onScrollPassive: onVirtualScrollEvt,
				onBeforeShow: onControlPopupShow,
				onBeforeHide: onMenuBeforeHide,
				onShow: onMenuShow
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
			window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
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
				after: void 0
			})];
			if (menu.value === true) content.push(h("div", {
				ref: menuContentRef,
				class: menuContentClass.value + " scroll",
				style: props.popupContentStyle,
				...listboxAttrs.value,
				onClick: prevent,
				onScrollPassive: onVirtualScrollEvt
			}, getAllOptions()));
			return h(QDialog_default, {
				ref: dialogRef,
				modelValue: dialog.value,
				position: props.useInput === true ? "top" : void 0,
				transitionShow: transitionShowComputed,
				transitionHide: props.transitionHide,
				transitionDuration: props.transitionDuration,
				noRouteDismiss: props.popupNoRouteDismiss,
				onBeforeShow: onControlPopupShow,
				onBeforeHide: onDialogBeforeHide,
				onHide: onDialogHide,
				onShow: onDialogShow
			}, () => h("div", { class: "q-select__dialog" + (isOptionsDark.value === true ? " q-select__dialog--dark q-dark" : "") + (dialogFieldFocused.value === true ? " q-select__dialog--focused" : "") }, content));
		}
		function onDialogBeforeHide(e) {
			onControlPopupHide(e);
			if (dialogRef.value !== null) dialogRef.value.__updateRefocusTarget(state.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child"));
			state.focused.value = false;
		}
		function onDialogHide(e) {
			hidePopup();
			if (state.focused.value === false) emit("blur", e);
			resetInputValue();
		}
		function onDialogShow() {
			const el = document.activeElement;
			if ((el === null || el.id !== state.targetUid.value) && targetRef.value !== null && targetRef.value !== el) targetRef.value.focus();
			setVirtualScrollSize();
		}
		function closeMenu() {
			if (dialog.value === true) return;
			optionIndex.value = -1;
			if (menu.value === true) menu.value = false;
			if (state.focused.value === false) {
				if (filterId !== null) {
					clearTimeout(filterId);
					filterId = null;
				}
				if (state.innerLoading.value === true) {
					emit("filterAbort");
					state.innerLoading.value = false;
					innerLoadingIndicator.value = false;
				}
			}
		}
		function showPopup(e) {
			if (state.editable.value !== true) return;
			if (hasDialog === true) {
				state.onControlFocusin(e);
				dialog.value = true;
				nextTick(() => {
					state.focus();
				});
			} else state.focus();
			if (props.onFilter !== void 0) filter(inputValue.value);
			else if (noOptions.value !== true || slots["no-option"] !== void 0) menu.value = true;
		}
		function hidePopup() {
			dialog.value = false;
			closeMenu();
		}
		function resetInputValue() {
			if (props.useInput === true) updateInputValue(props.multiple !== true && props.fillInput === true && innerValue.value.length !== 0 ? getOptionLabel.value(innerValue.value[0]) || "" : "", true, true);
		}
		function updateMenu(show) {
			let localOptionIndex = -1;
			if (show === true) {
				if (innerValue.value.length !== 0) {
					const val = getOptionValue.value(innerValue.value[0]);
					localOptionIndex = props.options.findIndex((v) => isDeepEqual(getOptionValue.value(v), val));
				}
				localResetVirtualScroll(localOptionIndex);
			}
			setOptionIndex(localOptionIndex);
		}
		function rerenderMenu(newLength, oldLength) {
			if (menu.value === true && state.innerLoading.value === false) {
				localResetVirtualScroll(-1, true);
				nextTick(() => {
					if (menu.value === true && state.innerLoading.value === false) if (newLength > oldLength) localResetVirtualScroll();
					else updateMenu(true);
				});
			}
		}
		function updateMenuPosition() {
			if (dialog.value === false && menuRef.value !== null) menuRef.value.updatePosition();
		}
		function onControlPopupShow(e) {
			if (e !== void 0) stop(e);
			emit("popupShow", e);
			state.hasPopupOpen = true;
			state.onControlFocusin(e);
		}
		function onControlPopupHide(e) {
			if (e !== void 0) stop(e);
			emit("popupHide", e);
			state.hasPopupOpen = false;
			state.onControlFocusout(e);
		}
		function updatePreState() {
			hasDialog = $q.platform.is.mobile !== true && props.behavior !== "dialog" ? false : props.behavior !== "menu" && (props.useInput === true ? slots["no-option"] !== void 0 || props.onFilter !== void 0 || noOptions.value === false : true);
			transitionShowComputed = $q.platform.is.ios === true && hasDialog === true && props.useInput === true ? "fade" : props.transitionShow;
		}
		onBeforeUpdate(updatePreState);
		onUpdated(updateMenuPosition);
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
			isOptionDisabled: (...args) => isOptionDisabled.value.apply(null, args) === true,
			getOptionValue: (...args) => getOptionValue.value.apply(null, args),
			getOptionLabel: (...args) => getOptionLabel.value.apply(null, args)
		});
		Object.assign(state, {
			innerValue,
			fieldClass: computed(() => `q-select q-field--auto-height q-select--with${props.useInput !== true ? "out" : ""}-input q-select--with${props.useChips !== true ? "out" : ""}-chips q-select--${props.multiple === true ? "multiple" : "single"}`),
			inputRef,
			targetRef,
			hasValue,
			showPopup,
			floatingLabel: computed(() => props.hideSelected !== true && hasValue.value === true || typeof inputValue.value === "number" || inputValue.value.length !== 0 || fieldValueIsFilled(props.displayValue)),
			getControlChild: () => {
				if (state.editable.value !== false && (dialog.value === true || noOptions.value !== true || slots["no-option"] !== void 0)) return hasDialog === true ? getDialog() : getMenu();
				else if (state.hasPopupOpen === true) state.hasPopupOpen = false;
			},
			controlEvents: {
				onFocusin(e) {
					state.onControlFocusin(e);
				},
				onFocusout(e) {
					state.onControlFocusout(e, () => {
						resetInputValue();
						closeMenu();
					});
				},
				onClick(e) {
					prevent(e);
					if (hasDialog !== true && menu.value === true) {
						closeMenu();
						targetRef.value?.focus();
						return;
					}
					showPopup(e);
				}
			},
			getControl: (fromDialog) => {
				const child = getSelection();
				const isTarget = fromDialog === true || dialog.value !== true || hasDialog !== true;
				if (props.useInput === true) child.push(getInput(fromDialog, isTarget));
				else if (state.editable.value === true) {
					const attrs = isTarget === true ? comboboxAttrs.value : void 0;
					child.push(h("input", {
						ref: isTarget === true ? targetRef : void 0,
						key: "d_t",
						class: "q-select__focus-target",
						id: isTarget === true ? state.targetUid.value : void 0,
						value: ariaCurrentValue.value,
						readonly: true,
						"data-autofocus": fromDialog === true || props.autofocus === true || void 0,
						...attrs,
						onKeydown: onTargetKeydown,
						onKeyup: onTargetKeyup,
						onKeypress: onTargetKeypress
					}));
					if (isTarget === true && typeof props.autocomplete === "string" && props.autocomplete.length !== 0) child.push(h("input", {
						class: "q-select__autocomplete-input",
						autocomplete: props.autocomplete,
						tabindex: -1,
						onKeyup: onTargetAutocomplete
					}));
				}
				if (nameProp.value !== void 0 && props.disable !== true && innerOptionsValue.value.length !== 0) {
					const opts = innerOptionsValue.value.map((value) => h("option", {
						value,
						selected: true
					}));
					child.push(h("select", {
						class: "hidden",
						name: nameProp.value,
						multiple: props.multiple
					}, opts));
				}
				return h("div", {
					class: "q-field__native row items-center",
					...props.useInput === true || isTarget !== true ? void 0 : state.splitAttrs.attributes.value,
					...state.splitAttrs.listeners.value
				}, child);
			},
			getInnerAppend: () => props.loading !== true && innerLoadingIndicator.value !== true && props.hideDropdownIcon !== true ? [h(QIcon_default, {
				class: "q-select__dropdown-icon" + (menu.value === true ? " rotate-180" : ""),
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
var multi_select_default = /*#__PURE__*/ _plugin_vue_export_helper_default(defineComponent({
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
}), [["render", render$2]]);
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
var filters_default = /*#__PURE__*/ _plugin_vue_export_helper_default(defineComponent({
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
}), [["render", render$1]]);
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
		watch(f(), (isDark) => Plugin$1.set(isDark), { immediate: true });
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
