"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[53016],{10350:(e,a,n)=>{n.r(a),n.d(a,{comp:()=>i,data:()=>o});var t=n(6254);const s={},i=(0,n(15356).A)(s,[["render",function(e,a){const n=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[a[10]||(a[10]=(0,t.Lk)("h1",{id:"terncy-terncy-sd01",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#terncy-terncy-sd01"},[(0,t.Lk)("span",null,"TERNCY TERNCY-SD01")])],-1)),(0,t.Lk)("table",null,[a[6]||(a[6]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1)),(0,t.Lk)("tbody",null,[a[2]||(a[2]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"TERNCY-SD01")],-1)),(0,t.Lk)("tr",null,[a[1]||(a[1]=(0,t.Lk)("td",null,"Vendor",-1)),(0,t.Lk)("td",null,[(0,t.bF)(n,{to:"/supported-devices/#v=TERNCY"},{default:(0,t.k6)((()=>a[0]||(a[0]=[(0,t.eW)("TERNCY")]))),_:1})])]),a[3]||(a[3]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Knob smart dimmer")],-1)),a[4]||(a[4]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"battery, action, direction")],-1)),a[5]||(a[5]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TERNCY-SD01.png",alt:"TERNCY TERNCY-SD01"})])],-1))])]),a[11]||(a[11]=(0,t.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="channel" tabindex="-1"><a class="header-anchor" href="#channel"><span>Channel</span></a></h3><p>This device <a href="https://github.com/Koenkk/zigbee2mqtt/discussions/7259#discussioncomment-6012304" target="_blank" rel="noopener noreferrer">does not work</a> on Zigbee channel 20-24.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press and hold the knob on the device for 8 seconds (until the indicator blinks blue light 3 times) the indicator will continue blinking blue light if pairing is successful otherwise it will blink red light.</p><h3 id="deprecated-click-event" tabindex="-1"><a class="header-anchor" href="#deprecated-click-event"><span>Deprecated click event</span></a></h3><p>By default this device exposes a deprecated <code>click</code> event. It&#39;s recommended to use the <code>action</code> event instead.</p><p>To disable the <code>click</code> event, set <code>legacy: false</code> for this device in <code>configuration.yaml</code>. Example:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device</span>\n<span class="line">    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',10)),(0,t.Lk)("p",null,[a[8]||(a[8]=(0,t.eW)("This device supports OTA updates, for more information see ")),(0,t.bF)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,t.k6)((()=>a[7]||(a[7]=[(0,t.eW)("OTA updates")]))),_:1}),a[9]||(a[9]=(0,t.eW)("."))]),a[12]||(a[12]=(0,t.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>triple</code>, <code>quadruple</code>, <code>rotate</code>.</p><h3 id="direction-text" tabindex="-1"><a class="header-anchor" href="#direction-text"><span>Direction (text)</span></a></h3><p>Value can be found in the published state on the <code>direction</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>',7))])}]]),o=JSON.parse('{"path":"/devices/TERNCY-SD01.html","title":"TERNCY TERNCY-SD01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TERNCY TERNCY-SD01 control via MQTT","description":"Integrate your TERNCY TERNCY-SD01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-02-26T17:45:15.000Z"},"git":{"updatedTime":1745088397000,"contributors":[{"name":"Koen Kanters","username":"","email":"koenkanters94@gmail.com","commits":1}],"changelog":[{"hash":"86c29d38680dfa850f56e59259c3fdd385a6cee2","time":1745088397000,"email":"koenkanters94@gmail.com","author":"Koen Kanters","message":"Add XZ-AKT101 https://github.com/Koenkk/zigbee2mqtt.io/pull/3706"}]},"filePathRelative":"devices/TERNCY-SD01.md"}')}}]);