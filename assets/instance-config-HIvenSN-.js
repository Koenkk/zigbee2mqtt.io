import { $ as markRaw, rt as ref, tt as reactive, v as defineComponent } from "./runtime-core.esm-bundler-BzB4pT90.js";
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.inject-obj-prop/inject-obj-prop.js
function injectProp(target, propName, get, set) {
	Object.defineProperty(target, propName, {
		get,
		set,
		enumerable: true
	});
	return target;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/plugins/platform/Platform.js
/**
* __ QUASAR_SSR __            -> runs on SSR/SSG on client or server
* __ QUASAR_SSR_SERVER __     -> runs on SSR/SSG on server
* __ QUASAR_SSR_CLIENT __     -> runs on SSR/SSG on client
* __ QUASAR_SSR_PWA __        -> built with SSR/SSG + PWA; may run on SSR/SSG on client or on PWA client
*                              (needs runtime detection)
*/
var isRuntimeSsrPreHydration = ref(false);
var preHydrationBrowser;
var maxUserAgentLength = 512;
function normalizeUserAgent(userAgent) {
	return typeof userAgent === "string" ? userAgent.slice(0, maxUserAgentLength).toLowerCase() : "";
}
var safariVersionRE = /(?:^|\s)version\/([\w.]+)/;
var applewebkitRE = /(?:^|\s)applewebkit\/[\w.]+/;
var safariAgentRE = /(?:^|\s)safari\/[\w.]+/;
function getSafariMatch(userAgent) {
	const versionMatch = safariVersionRE.exec(userAgent);
	return versionMatch !== null && applewebkitRE.test(userAgent) && safariAgentRE.test(userAgent) ? {
		browser: "safari",
		version: versionMatch[1]
	} : null;
}
var edgeRE = /(edg|edga|edgios)\/([\w.]+)/;
var oprRE = /(opr)[\/]([\w.]+)/;
var vivaldiRE = /(vivaldi)[\/]([\w.]+)/;
var chromeRE = /(chrome|crios)[\/]([\w.]+)/;
var firefoxRE = /(firefox|fxios)[\/]([\w.]+)/;
var webkitRE = /(webkit)[\/]([\w.]+)/;
function getMatch(userAgent, platformMatch) {
	let match = edgeRE.exec(userAgent) || oprRE.exec(userAgent) || vivaldiRE.exec(userAgent) || chromeRE.exec(userAgent);
	if (match === null) {
		const safariMatch = getSafariMatch(userAgent);
		if (safariMatch !== null) return {
			...safariMatch,
			platform: platformMatch[0] || ""
		};
		match = firefoxRE.exec(userAgent) || webkitRE.exec(userAgent) || [];
	}
	return {
		browser: match[5] || match[3] || match[1] || "",
		version: match[4] || match[2] || "0",
		platform: platformMatch[0] || ""
	};
}
var ipadRE = /(ipad)/;
var ipodRE = /(ipod)/;
var iphoneRE = /(iphone)/;
var androidRE = /(android)/;
var winRE = /(win)/;
var macRE = /(mac)/;
var linuxRE = /(linux)/;
var crosRE = /(cros)/;
function getPlatformMatch(userAgent) {
	return ipadRE.exec(userAgent) || ipodRE.exec(userAgent) || iphoneRE.exec(userAgent) || androidRE.exec(userAgent) || winRE.exec(userAgent) || macRE.exec(userAgent) || linuxRE.exec(userAgent) || crosRE.exec(userAgent) || [];
}
var hasTouch = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function getPlatform(UA) {
	const userAgent = normalizeUserAgent(UA);
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
		webkit: false,
		android: false,
		ios: false,
		ipad: false,
		iphone: false,
		ipod: false
	};
	if (matched.browser) {
		browser[matched.browser] = true;
		browser.version = matched.version;
		browser.versionNumber = Number.parseInt(matched.version, 10);
	}
	if (matched.platform) browser[matched.platform] = true;
	const knownMobiles = browser.android || browser.ios || browser.ipad || browser.iphone || browser.ipod;
	if (knownMobiles === true || userAgent.includes("mobile")) browser.mobile = true;
	else browser.desktop = true;
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
var userAgent = navigator.userAgent;
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
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.create/create.js
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
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/event/event.js
var listenOpts = {
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
};
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
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/debounce/debounce.js
function parseOptions(options) {
	if (Object(options) === options) {
		const trailing = options.trailing ?? true;
		return {
			leading: options.leading,
			trailing,
			maxWait: trailing && typeof options.maxWait === "number" ? options.maxWait : void 0
		};
	}
	return options ? {
		leading: true,
		trailing: false
	} : {
		leading: false,
		trailing: true
	};
}
function debounce(fn, wait = 250, options) {
	const { leading, trailing, maxWait } = parseOptions(options);
	let timer = null, maxTimer = null, lastThis, lastArgs = null;
	function run() {
		const context = lastThis;
		const args = lastArgs;
		lastThis = void 0;
		lastArgs = null;
		debounced.isPending = false;
		fn.apply(context, args);
	}
	function clearTimer() {
		if (timer !== null) {
			clearTimeout(timer);
			timer = null;
		}
	}
	function clearMaxTimer() {
		if (maxTimer !== null) {
			clearTimeout(maxTimer);
			maxTimer = null;
		}
	}
	function onTimeout() {
		timer = null;
		clearMaxTimer();
		if (lastArgs !== null) run();
	}
	function onMaxTimeout() {
		maxTimer = null;
		clearTimer();
		if (lastArgs !== null) run();
	}
	function debounced(...args) {
		const isFirstCall = timer === null;
		clearTimer();
		timer = setTimeout(onTimeout, wait);
		if (isFirstCall) {
			if (maxWait !== void 0) maxTimer = setTimeout(onMaxTimeout, maxWait);
			if (leading) {
				fn.apply(this, args);
				return;
			}
		}
		if (trailing) {
			lastThis = this;
			lastArgs = args;
			debounced.isPending = true;
		}
	}
	debounced.isPending = false;
	debounced.cancel = () => {
		clearTimer();
		clearMaxTimer();
		lastThis = void 0;
		lastArgs = null;
		debounced.isPending = false;
	};
	debounced.flush = () => {
		if (lastArgs !== null) {
			clearTimer();
			clearMaxTimer();
			run();
		}
	};
	return debounced;
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/plugins/dark/Dark.js
var ssrAutoAttr = "data-dark-auto";
var Plugin = /*#__PURE__*/ createReactivePlugin({
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
	install({ $q, ssrContext, onSSRHydrated }) {
		$q.dark = this;
		if (this.__installed) return;
		if (isRuntimeSsrPreHydration.value) {
			if (document.body.hasAttribute(ssrAutoAttr)) {
				this.mode = "auto";
				onSSRHydrated.push(() => {
					document.body.removeAttribute(ssrAutoAttr);
					if (this.mode === "auto") this.set("auto");
				});
				return;
			}
			this.set(document.body.classList.contains("body--dark"));
			return;
		}
		this.set($q.config.dark ?? false);
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.keyboard/key-composition.js
var lastKeyCompositionStatus = false;
function onKeyDownComposition(evt) {
	lastKeyCompositionStatus = evt.isComposing === true;
}
function shouldIgnoreKey(evt) {
	return lastKeyCompositionStatus || evt !== Object(evt) || evt.isComposing || evt.qKeyEvent;
}
function isKeyCode(evt, keyCodes) {
	return !shouldIgnoreKey(evt) && (Array.isArray(keyCodes) ? keyCodes.includes(evt.keyCode) : keyCodes === evt.keyCode);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/plugins/private.history/History.js
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
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.symbols/symbols.js
var listKey = "_q_li_";
var formKey = "_q_fo_";
//#endregion
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/is/is.js
function toByteView(v) {
	return v.constructor === ArrayBuffer ? new Uint8Array(v) : new Uint8Array(v.buffer, v.byteOffset, v.byteLength);
}
function hasCustomConversion(aFn, bFn, nativeFn) {
	return typeof aFn === "function" && aFn !== nativeFn && typeof bFn === "function" && bFn !== nativeFn;
}
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
		if (a.constructor === ArrayBuffer || a.constructor === DataView) {
			if (a.byteLength !== b.byteLength) return false;
			a = toByteView(a);
			b = toByteView(b);
		}
		if (ArrayBuffer.isView(a)) {
			length = a.length;
			if (length !== b.length) return false;
			for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
			return true;
		}
		if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
		if (hasCustomConversion(a.valueOf, b.valueOf, Object.prototype.valueOf)) return a.valueOf() === b.valueOf();
		if (hasCustomConversion(a.toString, b.toString, Object.prototype.toString)) return a.toString() === b.toString();
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
//#region node_modules/.pnpm/quasar@2.34.0/node_modules/quasar/src/utils/private.config/instance-config.js
var globalConfig = {};
var globalConfigIsFrozen = false;
function freezeGlobalConfig() {
	globalConfigIsFrozen = true;
}
//#endregion
export { injectProp as A, stopAndPrevent as C, Platform as D, createReactivePlugin as E, client as O, stop as S, createDirective as T, cleanEvt as _, isDeepEqual as a, position as b, formKey as c, isKeyCode as d, onKeyDownComposition as f, addEvt as g, debounce as h, isDate as i, isRuntimeSsrPreHydration as k, listKey as l, Plugin as m, globalConfig as n, isObject as o, shouldIgnoreKey as p, globalConfigIsFrozen as r, isRegexp as s, freezeGlobalConfig as t, History_default as u, listenOpts as v, createComponent as w, prevent as x, noop as y };
