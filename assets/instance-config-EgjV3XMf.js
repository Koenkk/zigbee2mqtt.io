import { $ as markRaw, rt as ref, tt as reactive, y as defineComponent } from "./runtime-core.esm-bundler-7nvd8r64.js";
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/utils/private.inject-obj-prop/inject-obj-prop.js
function injectProp(target, propName, get, set) {
	Object.defineProperty(target, propName, {
		get,
		set,
		enumerable: true
	});
	return target;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/plugins/platform/Platform.js
/**
* __ QUASAR_SSR __            -> runs on SSR on client or server
* __ QUASAR_SSR_SERVER __     -> runs on SSR on server
* __ QUASAR_SSR_CLIENT __     -> runs on SSR on client
* __ QUASAR_SSR_PWA __        -> built with SSR+PWA; may run on SSR on client or on PWA client
*                              (needs runtime detection)
*/
var isRuntimeSsrPreHydration = ref(false);
var preHydrationBrowser;
function getMatch(userAgent, platformMatch) {
	const match = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(userAgent) || /(opr)[\/]([\w.]+)/.exec(userAgent) || /(vivaldi)[\/]([\w.]+)/.exec(userAgent) || /(chrome|crios)[\/]([\w.]+)/.exec(userAgent) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent) || /(firefox|fxios)[\/]([\w.]+)/.exec(userAgent) || /(webkit)[\/]([\w.]+)/.exec(userAgent) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(userAgent) || [];
	return {
		browser: match[5] || match[3] || match[1] || "",
		version: match[4] || match[2] || "0",
		platform: platformMatch[0] || ""
	};
}
function getPlatformMatch(userAgent) {
	return /(ipad)/.exec(userAgent) || /(ipod)/.exec(userAgent) || /(windows phone)/.exec(userAgent) || /(iphone)/.exec(userAgent) || /(kindle)/.exec(userAgent) || /(silk)/.exec(userAgent) || /(android)/.exec(userAgent) || /(win)/.exec(userAgent) || /(mac)/.exec(userAgent) || /(linux)/.exec(userAgent) || /(cros)/.exec(userAgent) || /(playbook)/.exec(userAgent) || /(bb)/.exec(userAgent) || /(blackberry)/.exec(userAgent) || [];
}
var hasTouch = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function getPlatform(UA) {
	const userAgent = UA.toLowerCase();
	const matched = getMatch(userAgent, getPlatformMatch(userAgent));
	const browser = {
		mobile: false,
		desktop: false,
		cordova: false,
		capacitor: false,
		nativeMobile: false,
		electron: false,
		bex: false,
		linux: false,
		mac: false,
		win: false,
		cros: false,
		chrome: false,
		firefox: false,
		opera: false,
		safari: false,
		vivaldi: false,
		edge: false,
		edgeChromium: false,
		ie: false,
		webkit: false,
		android: false,
		ios: false,
		ipad: false,
		iphone: false,
		ipod: false,
		kindle: false,
		winphone: false,
		blackberry: false,
		playbook: false,
		silk: false
	};
	if (matched.browser) {
		browser[matched.browser] = true;
		browser.version = matched.version;
		browser.versionNumber = Number.parseInt(matched.version, 10);
	}
	if (matched.platform) browser[matched.platform] = true;
	const knownMobiles = browser.android || browser.ios || browser.bb || browser.blackberry || browser.ipad || browser.iphone || browser.ipod || browser.kindle || browser.playbook || browser.silk || browser["windows phone"];
	if (knownMobiles === true || userAgent.includes("mobile")) browser.mobile = true;
	else browser.desktop = true;
	if (browser["windows phone"]) {
		browser.winphone = true;
		delete browser["windows phone"];
	}
	if (browser.edga || browser.edgios || browser.edg) {
		browser.edge = true;
		matched.browser = "edge";
	} else if (browser.crios) {
		browser.chrome = true;
		matched.browser = "chrome";
	} else if (browser.fxios) {
		browser.firefox = true;
		matched.browser = "firefox";
	}
	if (browser.ipod || browser.ipad || browser.iphone) browser.ios = true;
	if (browser.vivaldi) {
		matched.browser = "vivaldi";
		browser.vivaldi = true;
	}
	if (browser.chrome || browser.opr || browser.safari || browser.vivaldi || browser.mobile && !browser.ios && !knownMobiles) browser.webkit = true;
	if (browser.opr) {
		matched.browser = "opera";
		browser.opera = true;
	}
	if (browser.safari) {
		if (browser.blackberry || browser.bb) {
			matched.browser = "blackberry";
			browser.blackberry = true;
		} else if (browser.playbook) {
			matched.browser = "playbook";
			browser.playbook = true;
		} else if (browser.android) {
			matched.browser = "android";
			browser.android = true;
		} else if (browser.kindle) {
			matched.browser = "kindle";
			browser.kindle = true;
		} else if (browser.silk) {
			matched.browser = "silk";
			browser.silk = true;
		}
	}
	browser.name = matched.browser;
	browser.platform = matched.platform;
	if (userAgent.includes("electron")) browser.electron = true;
	else if (document.location.href.includes("-extension://")) browser.bex = true;
	else {
		if (window.Capacitor !== void 0) {
			browser.capacitor = true;
			browser.nativeMobile = true;
			browser.nativeMobileWrapper = "capacitor";
		} else if (window._cordovaNative !== void 0 || window.cordova !== void 0) {
			browser.cordova = true;
			browser.nativeMobile = true;
			browser.nativeMobileWrapper = "cordova";
		}
		if (isRuntimeSsrPreHydration.value) preHydrationBrowser = { is: { ...browser } };
		if (hasTouch && browser.mac && (browser.desktop && browser.safari || browser.nativeMobile && !browser.android && !browser.ios && !browser.ipad)) {
			delete browser.mac;
			delete browser.desktop;
			const platform = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
			Object.assign(browser, {
				mobile: true,
				ios: true,
				platform,
				[platform]: true
			});
		}
		if (!browser.mobile && window.navigator.userAgentData && window.navigator.userAgentData.mobile) {
			delete browser.desktop;
			browser.mobile = true;
		}
	}
	return browser;
}
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
var ssrClient = {
	has: {
		touch: false,
		webStorage: false
	},
	within: { iframe: false }
};
var client = {
	userAgent,
	is: getPlatform(userAgent),
	has: { touch: hasTouch },
	within: { iframe: window.self !== window.top }
};
var Platform = { install(opts) {
	const { $q } = opts;
	if (isRuntimeSsrPreHydration.value) {
		opts.onSSRHydrated.push(() => {
			Object.assign($q.platform, client);
			isRuntimeSsrPreHydration.value = false;
		});
		$q.platform = reactive(this);
	} else $q.platform = this;
} };
{
	let hasWebStorage;
	injectProp(client.has, "webStorage", () => {
		if (hasWebStorage !== void 0) return hasWebStorage;
		try {
			if (window.localStorage) {
				hasWebStorage = true;
				return true;
			}
		} catch {}
		hasWebStorage = false;
		return false;
	});
	Object.assign(Platform, client);
	if (isRuntimeSsrPreHydration.value) {
		Object.assign(Platform, preHydrationBrowser, ssrClient);
		preHydrationBrowser = null;
	}
}
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/utils/private.create/create.js
function createComponent(raw) {
	return markRaw(defineComponent(raw));
}
function createDirective(raw) {
	return markRaw(raw);
}
var createReactivePlugin = (state, plugin) => {
	const reactiveState = reactive(state);
	for (const name in state) injectProp(plugin, name, () => reactiveState[name], (val) => {
		reactiveState[name] = val;
	});
	return plugin;
};
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/utils/event/event.js
var listenOpts = {
	hasPassive: false,
	passiveCapture: true,
	notPassiveCapture: true
};
try {
	const opts = Object.defineProperty({}, "passive", { get() {
		Object.assign(listenOpts, {
			hasPassive: true,
			passive: { passive: true },
			notPassive: { passive: false },
			passiveCapture: {
				passive: true,
				capture: true
			},
			notPassiveCapture: {
				passive: false,
				capture: true
			}
		});
	} });
	window.addEventListener("qtest", null, opts);
	window.removeEventListener("qtest", null, opts);
} catch {}
function noop() {}
function position(e) {
	if (e.touches && e.touches[0]) e = e.touches[0];
	else if (e.changedTouches && e.changedTouches[0]) e = e.changedTouches[0];
	else if (e.targetTouches && e.targetTouches[0]) e = e.targetTouches[0];
	return {
		top: e.clientY,
		left: e.clientX
	};
}
function getEventPath(e) {
	if (e.path) return e.path;
	if (e.composedPath) return e.composedPath();
	const path = [];
	let el = e.target;
	while (el) {
		path.push(el);
		if (el.tagName === "HTML") {
			path.push(document);
			path.push(window);
			return path;
		}
		el = el.parentElement;
	}
}
function stop(e) {
	e.stopPropagation();
}
function prevent(e) {
	if (e.cancelable !== false) e.preventDefault();
}
function stopAndPrevent(e) {
	if (e.cancelable !== false) e.preventDefault();
	e.stopPropagation();
}
function addEvt(ctx, targetName, events) {
	const name = `__q_${targetName}_evt`;
	ctx[name] = [...ctx[name] ?? [], ...events];
	events.forEach((evt) => {
		evt[0].addEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]]);
	});
}
function cleanEvt(ctx, targetName) {
	const name = `__q_${targetName}_evt`;
	if (ctx[name] !== void 0) {
		ctx[name].forEach((evt) => {
			evt[0].removeEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]]);
		});
		ctx[name] = void 0;
	}
}
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/utils/debounce/debounce.js
function debounce(fn, wait = 250, immediate) {
	let timer = null;
	function debounced(...args) {
		const later = () => {
			timer = null;
			if (!immediate) fn.apply(this, args);
		};
		if (timer !== null) clearTimeout(timer);
		else if (immediate) fn.apply(this, args);
		timer = setTimeout(later, wait);
	}
	debounced.cancel = () => {
		if (timer !== null) clearTimeout(timer);
	};
	return debounced;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/plugins/dark/Dark.js
var Plugin = createReactivePlugin({
	isActive: false,
	mode: false
}, {
	__media: void 0,
	set(val) {
		Plugin.mode = val;
		if (val === "auto") {
			if (Plugin.__media === void 0) {
				Plugin.__media = window.matchMedia("(prefers-color-scheme: dark)");
				Plugin.__updateMedia = () => {
					Plugin.set("auto");
				};
				Plugin.__media.addListener(Plugin.__updateMedia);
			}
			val = Plugin.__media.matches;
		} else if (Plugin.__media !== void 0) {
			Plugin.__media.removeListener(Plugin.__updateMedia);
			Plugin.__media = void 0;
		}
		Plugin.isActive = val === true;
		document.body.classList.remove(`body--${val === true ? "light" : "dark"}`);
		document.body.classList.add(`body--${val === true ? "dark" : "light"}`);
	},
	toggle() {
		Plugin.set(!Plugin.isActive);
	},
	install({ $q, ssrContext }) {
		const dark = $q.config.dark;
		$q.dark = this;
		if (!this.__installed) this.set(dark !== void 0 ? dark : false);
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/utils/private.keyboard/key-composition.js
var lastKeyCompositionStatus = false;
function onKeyDownComposition(evt) {
	lastKeyCompositionStatus = evt.isComposing === true;
}
function shouldIgnoreKey(evt) {
	return lastKeyCompositionStatus || evt !== Object(evt) || evt.isComposing || evt.qKeyEvent;
}
function isKeyCode(evt, keyCodes) {
	return !shouldIgnoreKey(evt) && [keyCodes].flat().includes(evt.keyCode);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/plugins/private.history/History.js
var getTrue = () => true;
function filterInvalidPath(path) {
	return typeof path === "string" && path !== "" && path !== "/" && path !== "#/";
}
function normalizeExitPath(path) {
	if (path.startsWith("#")) path = path.slice(1);
	if (!path.startsWith("/")) path = "/" + path;
	if (path.endsWith("/")) path = path.slice(0, -1);
	return "#" + path;
}
function getShouldExitFn(cfg) {
	if (cfg.backButtonExit === false) return () => false;
	if (cfg.backButtonExit === "*") return getTrue;
	const exitPaths = ["#/"];
	if (Array.isArray(cfg.backButtonExit)) exitPaths.push(...cfg.backButtonExit.filter(filterInvalidPath).map(normalizeExitPath));
	return () => exitPaths.includes(window.location.hash);
}
var History_default = {
	__history: [],
	add: noop,
	remove: noop,
	install({ $q }) {
		if (this.__installed) return;
		const { cordova, capacitor } = client.is;
		if (!cordova && !capacitor) return;
		const qConf = $q.config[cordova ? "cordova" : "capacitor"];
		if (qConf?.backButton === false) return;
		if (capacitor && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)) return;
		this.add = (entry) => {
			if (entry.condition === void 0) entry.condition = getTrue;
			this.__history.push(entry);
		};
		this.remove = (entry) => {
			const index = this.__history.indexOf(entry);
			if (index !== -1) this.__history.splice(index, 1);
		};
		const shouldExit = getShouldExitFn({
			backButtonExit: true,
			...qConf
		});
		const backHandler = () => {
			if (this.__history.length !== 0) {
				const entry = this.__history.at(-1);
				if (entry.condition()) {
					this.__history.pop();
					entry.handler();
				}
			} else if (shouldExit()) navigator.app.exitApp();
			else window.history.back();
		};
		if (cordova) document.addEventListener("deviceready", () => {
			document.addEventListener("backbutton", backHandler, false);
		});
		else window.Capacitor.Plugins.App.addListener("backButton", backHandler);
	}
};
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/utils/private.symbols/symbols.js
var formKey = "_q_fo_";
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/utils/is/is.js
function isDeepEqual(a, b) {
	if (a === b) return true;
	if (a !== null && b !== null && typeof a === "object" && typeof b === "object") {
		if (a.constructor !== b.constructor) return false;
		let length, i;
		if (a.constructor === Array) {
			length = a.length;
			if (length !== b.length) return false;
			for (i = length; i-- !== 0;) if (!isDeepEqual(a[i], b[i])) return false;
			return true;
		}
		if (a.constructor === Map) {
			if (a.size !== b.size) return false;
			let iter = a.entries();
			i = iter.next();
			while (!i.done) {
				if (!b.has(i.value[0])) return false;
				i = iter.next();
			}
			iter = a.entries();
			i = iter.next();
			while (!i.done) {
				if (!isDeepEqual(i.value[1], b.get(i.value[0]))) return false;
				i = iter.next();
			}
			return true;
		}
		if (a.constructor === Set) {
			if (a.size !== b.size) return false;
			const iter = a.entries();
			i = iter.next();
			while (!i.done) {
				if (!b.has(i.value[0])) return false;
				i = iter.next();
			}
			return true;
		}
		if (a.buffer != null && a.buffer.constructor === ArrayBuffer) {
			length = a.length;
			if (length !== b.length) return false;
			for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
			return true;
		}
		if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
		if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
		if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
		const keys = Object.keys(a).filter((key) => a[key] !== void 0);
		length = keys.length;
		if (length !== Object.keys(b).filter((key) => b[key] !== void 0).length) return false;
		for (i = length; i-- !== 0;) {
			const key = keys[i];
			if (!isDeepEqual(a[key], b[key])) return false;
		}
		return true;
	}
	return a !== a && b !== b;
}
function isObject(v) {
	return v !== null && typeof v === "object" && !Array.isArray(v);
}
function isDate(v) {
	return Object.prototype.toString.call(v) === "[object Date]";
}
function isRegexp(v) {
	return Object.prototype.toString.call(v) === "[object RegExp]";
}
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/utils/private.config/instance-config.js
var globalConfig = {};
var globalConfigIsFrozen = false;
function freezeGlobalConfig() {
	globalConfigIsFrozen = true;
}
//#endregion
export { injectProp as A, stopAndPrevent as C, Platform as D, createReactivePlugin as E, client as O, stop as S, createDirective as T, getEventPath as _, isDeepEqual as a, position as b, formKey as c, onKeyDownComposition as d, shouldIgnoreKey as f, cleanEvt as g, addEvt as h, isDate as i, isRuntimeSsrPreHydration as k, History_default as l, debounce as m, globalConfig as n, isObject as o, Plugin as p, globalConfigIsFrozen as r, isRegexp as s, freezeGlobalConfig as t, isKeyCode as u, listenOpts as v, createComponent as w, prevent as x, noop as y };
