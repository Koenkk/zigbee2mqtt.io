"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[56746],{37982:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>g,data:()=>d});var r=t(6254);const i=t.p+"assets/img/cc2538-jtag-2.88e4ab40.jpg",s=t.p+"assets/img/cc2538-jtag-3.98498905.jpg",o=t.p+"assets/img/cc2538-jtag-1.08ea6bcf.jpg",n=t.p+"assets/img/cc2538-jtag-4.a4cf0bc3.jpg",l=t.p+"assets/img/cc2538-jtag-5.e8b0db3a.jpg",c=t.p+"assets/img/cc2538-jtag-6.5d2a2d7e.jpg",h=t.p+"assets/img/cc2538-jtag-7.5cc9adce.jpg",m={},g=(0,t(15356).A)(m,[["render",function(e,a){return(0,r.uX)(),(0,r.CE)("div",null,a[0]||(a[0]=[(0,r.Fv)('<h1 id="flashing-the-firmware-on-the-cc2538-module" tabindex="-1"><a class="header-anchor" href="#flashing-the-firmware-on-the-cc2538-module"><span>Flashing the firmware on the CC2538 MODULE</span></a></h1><p>The CC2538 module needs to be flashed with a custom firmware. This firmware can be flashed with a JTAG programmer. The programmer can be found on <a href="https://www.aliexpress.com/wholesale?catId=0&amp;initiative_id=SB_20191108075039&amp;SearchText=jlink+V8+jtag" target="_blank" rel="noopener noreferrer">Aliexpress</a></p><h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h2><ol><li>Install SEGGER <a href="https://www.segger.com/downloads/jlink/" target="_blank" rel="noopener noreferrer">J-Link Software</a><img src="'+i+'" alt=""></li><li>Open SEGGER J-Link Configurator and ensure your JTAG has the latest firmware (upgrade it if this is not your case) <img src="'+s+'" alt=""></li><li>Connect JTAG programmer to CC2538 module following below diagram: <img src="'+o+'" alt=""></li><li>Download <a href="https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592" target="_blank" rel="noopener noreferrer">latest firmware</a></li><li>Open SEGGER J-Link Flash and select &quot;Create a New Project&quot; <img src="'+n+'" alt=""></li><li>Make sure you select the right module [TI CC2538SF53] and [JTAG] as Target Interface <img src="'+l+'" alt=""></li><li>Now select &quot;Open Data File...&quot; and select the right firmware [MODKAMRU_V3_USB.hex] <img src="'+c+'" alt=""></li><li>Now as a final step in order to successfully program the module select first [Target/Manual Programming/Erase Chip] (or press F4) and then [Target/Manual Programming/Program &amp; Verify] (or press F6) <img src="'+h+'" alt=""></li></ol><h1 id="how-to-check-the-installed-firmware-version" tabindex="-1"><a class="header-anchor" href="#how-to-check-the-installed-firmware-version"><span>How-to check the installed firmware version</span></a></h1><p>Zigbee2MQTT will output the installed firmware version to the Zigbee2MQTT log on startup:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">Zigbee2MQTT:info  2019-11-09T13:01:14: Coordinator firmware version: &#39;{&quot;type&quot;:&quot;zStack30x&quot;,&quot;meta&quot;:{&quot;transportrev&quot;:2,&quot;product&quot;:2,&quot;majorrel&quot;:2,&quot;minorrel&quot;:7,&quot;maintrel&quot;:2,&quot;revision&quot;:20190425}}&#39;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>In the above example the version is <code>20190425</code>.</p>',8)]))}]]),d=JSON.parse('{"path":"/guide/adapters/flashing/flashing_the_cc2538.html","title":"Flashing the firmware on the CC2538 MODULE","lang":"en-US","frontmatter":{"pageClass":"content-page"},"git":{"updatedTime":1745088397000,"contributors":[{"name":"Koen Kanters","username":"","email":"koenkanters94@gmail.com","commits":1}],"changelog":[{"hash":"86c29d38680dfa850f56e59259c3fdd385a6cee2","time":1745088397000,"email":"koenkanters94@gmail.com","author":"Koen Kanters","message":"Add XZ-AKT101 https://github.com/Koenkk/zigbee2mqtt.io/pull/3706"}]},"filePathRelative":"guide/adapters/flashing/flashing_the_cc2538.md"}')}}]);