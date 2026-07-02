import { a as createApp } from "./app-6lrgQ-1_.js";
import { A as injectProp, D as Platform, E as createReactivePlugin, O as client, d as onKeyDownComposition, k as isRuntimeSsrPreHydration, l as History_default, m as debounce, n as globalConfig, o as isObject, p as Plugin$2, r as globalConfigIsFrozen, t as freezeGlobalConfig, v as listenOpts, y as noop } from "./instance-config-EgjV3XMf.js";
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/plugins/screen/Screen.js
var SIZE_LIST = [
	"sm",
	"md",
	"lg",
	"xl"
];
var { passive } = listenOpts;
var Screen_default = createReactivePlugin({
	width: 0,
	height: 0,
	name: "xs",
	sizes: {
		sm: 600,
		md: 1024,
		lg: 1440,
		xl: 1920
	},
	lt: {
		sm: true,
		md: true,
		lg: true,
		xl: true
	},
	gt: {
		xs: false,
		sm: false,
		md: false,
		lg: false
	},
	xs: true,
	sm: false,
	md: false,
	lg: false,
	xl: false
}, {
	setSizes: noop,
	setDebounce: noop,
	install({ $q, onSSRHydrated }) {
		$q.screen = this;
		if (this.__installed) {
			if ($q.config.screen !== void 0) if (!$q.config.screen.bodyClasses) document.body.classList.remove(`screen--${this.name}`);
			else this.__update(true);
			return;
		}
		const { visualViewport } = window;
		const target = visualViewport || window;
		const scrollingElement = document.scrollingElement || document.documentElement;
		const getSize = visualViewport === void 0 || client.is.mobile ? () => [Math.max(window.innerWidth, scrollingElement.clientWidth), Math.max(window.innerHeight, scrollingElement.clientHeight)] : () => [visualViewport.width * visualViewport.scale + window.innerWidth - scrollingElement.clientWidth, visualViewport.height * visualViewport.scale + window.innerHeight - scrollingElement.clientHeight];
		const useBodyClasses = $q.config.screen?.bodyClasses === true;
		this.__update = (force) => {
			const [w, h] = getSize();
			if (h !== this.height) this.height = h;
			if (w !== this.width) this.width = w;
			else if (force !== true) return;
			let s = this.sizes;
			this.gt.xs = w >= s.sm;
			this.gt.sm = w >= s.md;
			this.gt.md = w >= s.lg;
			this.gt.lg = w >= s.xl;
			this.lt.sm = w < s.sm;
			this.lt.md = w < s.md;
			this.lt.lg = w < s.lg;
			this.lt.xl = w < s.xl;
			this.xs = this.lt.sm;
			this.sm = this.gt.xs && this.lt.md;
			this.md = this.gt.sm && this.lt.lg;
			this.lg = this.gt.md && this.lt.xl;
			this.xl = this.gt.lg;
			s = this.xs && "xs" || this.sm && "sm" || this.md && "md" || this.lg && "lg" || "xl";
			if (s !== this.name) {
				if (useBodyClasses) {
					document.body.classList.remove(`screen--${this.name}`);
					document.body.classList.add(`screen--${s}`);
				}
				this.name = s;
			}
		};
		let updateEvt, updateSizes = {}, updateDebounce = 16;
		this.setSizes = (sizes) => {
			SIZE_LIST.forEach((name) => {
				if (sizes[name] !== void 0) updateSizes[name] = sizes[name];
			});
		};
		this.setDebounce = (deb) => {
			updateDebounce = deb;
		};
		const start = () => {
			const style = getComputedStyle(document.body);
			if (style.getPropertyValue("--q-size-sm")) SIZE_LIST.forEach((name) => {
				this.sizes[name] = Number.parseInt(style.getPropertyValue(`--q-size-${name}`), 10);
			});
			this.setSizes = (sizes) => {
				SIZE_LIST.forEach((name) => {
					if (sizes[name]) this.sizes[name] = sizes[name];
				});
				this.__update(true);
			};
			this.setDebounce = (delay) => {
				if (updateEvt !== void 0) target.removeEventListener("resize", updateEvt, passive);
				updateEvt = delay > 0 ? debounce(this.__update, delay) : this.__update;
				target.addEventListener("resize", updateEvt, passive);
			};
			this.setDebounce(updateDebounce);
			if (Object.keys(updateSizes).length !== 0) {
				this.setSizes(updateSizes);
				updateSizes = void 0;
			} else this.__update();
			if (useBodyClasses && this.name === "xs") document.body.classList.add("screen--xs");
		};
		if (isRuntimeSsrPreHydration.value) onSSRHydrated.push(start);
		else start();
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/utils/css-var/set-css-var.js
function setCssVar(propName, value, element = document.body) {
	if (typeof propName !== "string") throw new TypeError("Expected a string as propName");
	if (typeof value !== "string") throw new TypeError("Expected a string as value");
	if (!(element instanceof Element)) throw new TypeError("Expected a DOM element");
	element.style.setProperty(`--q-${propName}`, value);
}
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/plugins/private.body/Body.js
function getMobilePlatform(is) {
	if (is.ios) return "ios";
	if (is.android) return "android";
}
function getBodyClasses({ is, has, within }, cfg) {
	const cls = [is.desktop ? "desktop" : "mobile", `${has.touch ? "" : "no-"}touch`];
	if (is.mobile) {
		const mobile = getMobilePlatform(is);
		if (mobile !== void 0) cls.push("platform-" + mobile);
	}
	if (is.nativeMobile) {
		const type = is.nativeMobileWrapper;
		cls.push(type);
		cls.push("native-mobile");
		if (is.ios && (cfg[type] === void 0 || cfg[type].iosStatusBarPadding)) cls.push("q-ios-padding");
	} else if (is.electron) cls.push("electron");
	else if (is.bex) cls.push("bex");
	if (within.iframe) cls.push("within-iframe");
	return cls;
}
function applyClientSsrCorrections() {
	const { is } = client;
	const classes = document.body.className;
	const classList = new Set(classes.replaceAll(/ {2}/g, " ").split(" "));
	if (!is.nativeMobile && !is.electron && !is.bex) {
		if (is.desktop) {
			classList.delete("mobile");
			classList.delete("platform-ios");
			classList.delete("platform-android");
			classList.add("desktop");
		} else if (is.mobile) {
			classList.delete("desktop");
			classList.add("mobile");
			classList.delete("platform-ios");
			classList.delete("platform-android");
			const mobile = getMobilePlatform(is);
			if (mobile !== void 0) classList.add(`platform-${mobile}`);
		}
	}
	if (client.has.touch) {
		classList.delete("no-touch");
		classList.add("touch");
	}
	if (client.within.iframe) classList.add("within-iframe");
	const newCls = [...classList].join(" ");
	if (classes !== newCls) document.body.className = newCls;
}
function setColors(brand) {
	for (const color in brand) setCssVar(color, brand[color]);
}
var Body_default = { install(opts) {
	if (this.__installed) return;
	if (isRuntimeSsrPreHydration.value) applyClientSsrCorrections();
	else {
		const { $q } = opts;
		if ($q.config.brand !== void 0) setColors($q.config.brand);
		document.body.classList.add(...getBodyClasses(client, $q.config));
	}
	if (client.is.ios) document.body.addEventListener("touchstart", noop);
	window.addEventListener("keydown", onKeyDownComposition, true);
} };
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/lang/en-US.js
var en_US_default = {
	isoName: "en-US",
	nativeName: "English (US)",
	label: {
		clear: "Clear",
		ok: "OK",
		cancel: "Cancel",
		close: "Close",
		set: "Set",
		select: "Select",
		reset: "Reset",
		remove: "Remove",
		update: "Update",
		create: "Create",
		search: "Search",
		filter: "Filter",
		refresh: "Refresh",
		expand: (label) => label ? `Expand "${label}"` : "Expand",
		collapse: (label) => label ? `Collapse "${label}"` : "Collapse"
	},
	date: {
		days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		firstDayOfWeek: 0,
		format24h: false,
		pluralDay: "days",
		prevMonth: "Previous month",
		nextMonth: "Next month",
		prevYear: "Previous year",
		nextYear: "Next year",
		today: "Today",
		prevRangeYears: (range) => `Previous ${range} years`,
		nextRangeYears: (range) => `Next ${range} years`
	},
	table: {
		noData: "No data available",
		noResults: "No matching records found",
		loading: "Loading...",
		selectedRecords: (rows) => rows === 1 ? "1 record selected." : (rows === 0 ? "No" : rows) + " records selected.",
		recordsPerPage: "Records per page:",
		allRows: "All",
		pagination: (start, end, total) => start + " - " + end + " of " + total,
		columns: "Columns"
	},
	pagination: {
		first: "First page",
		prev: "Previous page",
		next: "Next page",
		last: "Last page"
	},
	editor: {
		url: "URL",
		bold: "Bold",
		italic: "Italic",
		strikethrough: "Strikethrough",
		underline: "Underline",
		unorderedList: "Unordered List",
		orderedList: "Ordered List",
		subscript: "Subscript",
		superscript: "Superscript",
		hyperlink: "Hyperlink",
		toggleFullscreen: "Toggle Fullscreen",
		quote: "Quote",
		left: "Left align",
		center: "Center align",
		right: "Right align",
		justify: "Justify align",
		print: "Print",
		outdent: "Decrease indentation",
		indent: "Increase indentation",
		removeFormat: "Remove formatting",
		formatting: "Formatting",
		fontSize: "Font Size",
		align: "Align",
		hr: "Insert Horizontal Rule",
		undo: "Undo",
		redo: "Redo",
		heading1: "Heading 1",
		heading2: "Heading 2",
		heading3: "Heading 3",
		heading4: "Heading 4",
		heading5: "Heading 5",
		heading6: "Heading 6",
		paragraph: "Paragraph",
		code: "Code",
		size1: "Very small",
		size2: "A bit small",
		size3: "Normal",
		size4: "Medium-large",
		size5: "Big",
		size6: "Very big",
		size7: "Maximum",
		defaultFont: "Default Font",
		viewSource: "View Source"
	},
	tree: {
		noNodes: "No nodes available",
		noResults: "No matching nodes found"
	}
};
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/plugins/lang/Lang.js
function getLocale() {
	const val = Array.isArray(navigator.languages) && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
	if (typeof val === "string") return val.split(/[-_]/).map((v, i) => i === 0 ? v.toLowerCase() : i > 1 || v.length < 4 ? v.toUpperCase() : v[0].toUpperCase() + v.slice(1).toLowerCase()).join("-");
}
var Plugin$1 = createReactivePlugin({ __qLang: {} }, {
	getLocale,
	set(langObject = en_US_default, ssrContext) {
		const lang = {
			...langObject,
			rtl: langObject.rtl === true,
			getLocale
		};
		lang.set = Plugin$1.set;
		if (Plugin$1.__langConfig === void 0 || !Plugin$1.__langConfig.noHtmlAttrs) {
			const el = document.documentElement;
			el.setAttribute("dir", lang.rtl ? "rtl" : "ltr");
			el.setAttribute("lang", lang.isoName);
		}
		Object.assign(Plugin$1.__qLang, lang);
	},
	install({ $q, lang, ssrContext }) {
		$q.lang = Plugin$1.__qLang;
		Plugin$1.__langConfig = $q.config.lang;
		if (this.__installed) {
			if (lang !== void 0) this.set(lang);
		} else {
			this.props = new Proxy(this.__qLang, {
				get: Reflect.get,
				ownKeys(target) {
					return Reflect.ownKeys(target).filter((key) => key !== "set" && key !== "getLocale");
				}
			});
			this.set(lang || en_US_default);
		}
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/icon-set/material-icons.js
var material_icons_default = {
	name: "material-icons",
	type: {
		positive: "check_circle",
		negative: "warning",
		info: "info",
		warning: "priority_high"
	},
	arrow: {
		up: "arrow_upward",
		right: "arrow_forward",
		down: "arrow_downward",
		left: "arrow_back",
		dropdown: "arrow_drop_down"
	},
	chevron: {
		left: "chevron_left",
		right: "chevron_right"
	},
	colorPicker: {
		spectrum: "gradient",
		tune: "tune",
		palette: "style"
	},
	pullToRefresh: { icon: "refresh" },
	carousel: {
		left: "chevron_left",
		right: "chevron_right",
		up: "keyboard_arrow_up",
		down: "keyboard_arrow_down",
		navigationIcon: "lens"
	},
	chip: {
		remove: "cancel",
		selected: "check"
	},
	datetime: {
		arrowLeft: "chevron_left",
		arrowRight: "chevron_right",
		now: "access_time",
		today: "today"
	},
	editor: {
		bold: "format_bold",
		italic: "format_italic",
		strikethrough: "strikethrough_s",
		underline: "format_underlined",
		unorderedList: "format_list_bulleted",
		orderedList: "format_list_numbered",
		subscript: "vertical_align_bottom",
		superscript: "vertical_align_top",
		hyperlink: "link",
		toggleFullscreen: "fullscreen",
		quote: "format_quote",
		left: "format_align_left",
		center: "format_align_center",
		right: "format_align_right",
		justify: "format_align_justify",
		print: "print",
		outdent: "format_indent_decrease",
		indent: "format_indent_increase",
		removeFormat: "format_clear",
		formatting: "text_format",
		fontSize: "format_size",
		align: "format_align_left",
		hr: "remove",
		undo: "undo",
		redo: "redo",
		heading: "format_size",
		code: "code",
		size: "format_size",
		font: "font_download",
		viewSource: "code"
	},
	expansionItem: {
		icon: "keyboard_arrow_down",
		denseIcon: "arrow_drop_down"
	},
	fab: {
		icon: "add",
		activeIcon: "close"
	},
	field: {
		clear: "cancel",
		error: "error"
	},
	pagination: {
		first: "first_page",
		prev: "keyboard_arrow_left",
		next: "keyboard_arrow_right",
		last: "last_page"
	},
	rating: { icon: "grade" },
	stepper: {
		done: "check",
		active: "edit",
		error: "warning"
	},
	tabs: {
		left: "chevron_left",
		right: "chevron_right",
		up: "keyboard_arrow_up",
		down: "keyboard_arrow_down"
	},
	table: {
		arrowUp: "arrow_upward",
		warning: "warning",
		firstPage: "first_page",
		prevPage: "chevron_left",
		nextPage: "chevron_right",
		lastPage: "last_page"
	},
	tree: { icon: "play_arrow" },
	uploader: {
		done: "done",
		clear: "clear",
		add: "add_box",
		upload: "cloud_upload",
		removeQueue: "clear_all",
		removeUploaded: "done_all"
	}
};
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/plugins/icon-set/IconSet.js
var Plugin = createReactivePlugin({
	iconMapFn: null,
	__qIconSet: {}
}, {
	set(setObject, ssrContext) {
		const def = { ...setObject };
		def.set = Plugin.set;
		Object.assign(Plugin.__qIconSet, def);
	},
	install({ $q, iconSet, ssrContext }) {
		if ($q.config.iconMapFn !== void 0) this.iconMapFn = $q.config.iconMapFn;
		$q.iconSet = this.__qIconSet;
		injectProp($q, "iconMapFn", () => this.iconMapFn, (val) => {
			this.iconMapFn = val;
		});
		if (this.__installed) {
			if (iconSet !== void 0) this.set(iconSet);
		} else {
			this.props = new Proxy(this.__qIconSet, {
				get: Reflect.get,
				ownKeys(target) {
					return Reflect.ownKeys(target).filter((key) => key !== "set");
				}
			});
			this.set(iconSet || material_icons_default);
		}
	}
});
//#endregion
//#region node_modules/.pnpm/quasar@2.20.1/node_modules/quasar/src/install-quasar.js
/**
* If the list below changes, make sure
* to also edit /ui/testing/specs/generators/generator.plugin.js
* on the "autoInstalledPlugins" array
*/
var autoInstalledPlugins = [
	Platform,
	Body_default,
	Plugin$2,
	Screen_default,
	History_default,
	Plugin$1,
	Plugin
];
function createChildApp(appCfg, parentApp) {
	const app = createApp(appCfg);
	app.config.globalProperties = parentApp.config.globalProperties;
	const { reload, ...appContext } = parentApp._context;
	Object.assign(app._context, appContext);
	return app;
}
function installPlugins(pluginOpts, pluginList) {
	pluginList.forEach((Plugin) => {
		Plugin.install(pluginOpts);
		Plugin.__installed = true;
	});
}
function prepareApp(app, uiOpts, pluginOpts) {
	app.config.globalProperties.$q = pluginOpts.$q;
	app.provide("_q_", pluginOpts.$q);
	installPlugins(pluginOpts, autoInstalledPlugins);
	if (uiOpts.components !== void 0) Object.values(uiOpts.components).forEach((c) => {
		if (isObject(c) && c.name !== void 0) app.component(c.name, c);
	});
	if (uiOpts.directives !== void 0) Object.values(uiOpts.directives).forEach((d) => {
		if (isObject(d) && d.name !== void 0) app.directive(d.name, d);
	});
	if (uiOpts.plugins !== void 0) installPlugins(pluginOpts, Object.values(uiOpts.plugins).filter((p) => typeof p.install === "function" && !autoInstalledPlugins.includes(p)));
	if (isRuntimeSsrPreHydration.value) pluginOpts.$q.onSSRHydrated = () => {
		pluginOpts.onSSRHydrated.forEach((fn) => {
			fn();
		});
		pluginOpts.$q.onSSRHydrated = () => {};
	};
}
var install_quasar_default = function installQuasar(parentApp, opts = {}) {
	const $q = { version: "dev" };
	if (!globalConfigIsFrozen) {
		if (opts.config !== void 0) Object.assign(globalConfig, opts.config);
		$q.config = { ...globalConfig };
		freezeGlobalConfig();
	} else $q.config = opts.config || {};
	prepareApp(parentApp, opts, {
		parentApp,
		$q,
		lang: opts.lang,
		iconSet: opts.iconSet,
		onSSRHydrated: []
	});
};
//#endregion
export { createChildApp, install_quasar_default as default };
