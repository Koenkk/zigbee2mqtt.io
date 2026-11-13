import { P as openBlock, m as createStaticVNode, u as createElementBlock } from "./runtime-core.esm-bundler-Benzf_2N.js";
import { t as _plugin_vue_export_helper_default } from "./app-D0Bp0pVK.js";
// docs/images/uniflash/start.png
var start_default = "/assets/start-DTyQC2W0.png";
// docs/images/uniflash/erase.png
var erase_default = "/assets/erase-DYbaZLhd.png";
// docs/images/uniflash/sectors.png
var sectors_default = "/assets/sectors-C77mkUIo.png";
// docs/images/uniflash/load.png
var load_default = "/assets/load-RoYCFylX.png";
// docs/guide/adapters/flashing/flashing_via_uniflash.md
var _pageData = JSON.parse("{\"path\":\"/guide/adapters/flashing/flashing_via_uniflash.html\",\"title\":\"Flashing via UNIFLASH\",\"lang\":\"en-US\",\"frontmatter\":{\"pageClass\":\"content-page\",\"redirectFrom\":\"/information/flashing_via_uniflash.md\"},\"filePathRelative\":\"guide/adapters/flashing/flashing_via_uniflash.md\"}");
var _sfc_main = { name: "flashing_via_uniflash.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [createStaticVNode("<h1 id=\"flashing-via-uniflash\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#flashing-via-uniflash\"><span>Flashing via UNIFLASH</span></a></h1><p>UNIFLASH can be used to flash certain Texas Instruments MCUs (e.g. CC26X2R1 and CC1352P-2). It runs on Windows, macOS and Linux.</p><p><strong>n.b.</strong> UNIFLASH sometimes needs to update the programmer firmware, and this can fail if the device is connected to a USB 3 port. If this occurs, switch to a USB 2 port.</p><p><strong>Note for flashing on Linux:</strong> Uniflash does not work well on some distributions. specifically, Fedora 31 may have some issue. Combinations that are verified to be working are:</p><ul><li><em>Ubuntu 18.4 (LTS)</em>: <ul><li>fresh install</li><li><code># sudo apt install libgconf-2-4</code></li><li><code># sudo apt install libusb-0.1-4</code></li><li>... then follow the instructions below</li></ul></li></ul><h2 id=\"instructions\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#instructions\"><span>Instructions</span></a></h2><ol><li>Download and install UNIFLASH: <a href=\"http://www.ti.com/tool/download/UNIFLASH\" target=\"_blank\" rel=\"noopener noreferrer\">download link</a></li><li>Plug your device</li><li>Start UNIFLASH, your device will automatically be detected, press <em>Start</em><img src=\"" + start_default + "\" alt=\"Start\"></li><li>Go to <em>Settings &amp; Utilities</em> -&gt; <em>Manual Erase</em> and press <em>Erase Entire Flash</em><img src=\"" + erase_default + "\" alt=\"Erase\"></li><li>Go to <em>Settings &amp; Utilities</em> -&gt; <em>Program Load</em> and select <em>All Unprotected Sectors</em>, click <em>Perform Blank Check</em><img src=\"" + sectors_default + "\" alt=\"Load\"></li><li>Go to <em>Program</em> -&gt; <em>Flash Image(s)</em>, press <em>Browse</em> to select the firmware. Ensure that the path and file name do not contain any spaces (otherwise flashing may fail with &quot;Error! Unable to open file ...&quot;).</li><li>Now click <em>Load image</em> to upload the firmware <img src=\"" + load_default + "\" alt=\"Load\"></li><li>Done!</li></ol>", 7)])]);
}
var flashing_via_uniflash_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
export { _pageData, flashing_via_uniflash_default as default };
