"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[20023],{749:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>n});var a=o(6254);const c={},i=(0,o(15356).A)(c,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"sunricher-sr-zg9030f-ps",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#sunricher-sr-zg9030f-ps"},[(0,a.Lk)("span",null,"Sunricher SR-ZG9030F-PS")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"SR-ZG9030F-PS")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Sunricher"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Sunricher")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart human presence sensor")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"illuminance, occupancy, indicator_light, detection_area, illuminance_threshold, action")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SR-ZG9030F-PS.png",alt:"Sunricher SR-ZG9030F-PS"})])],-1))])]),t[9]||(t[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_raw</code>: Expose the raw illuminance value. The value must be <code>true</code> or <code>false</code></p></li><li><p><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;illuminance&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="indicator-light-enum" tabindex="-1"><a class="header-anchor" href="#indicator-light-enum"><span>Indicator light (enum)</span></a></h3><p>Enable/disable the LED indicator. Value can be found in the published state on the <code>indicator_light</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_light&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_light&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>.</p><h3 id="detection-area-numeric" tabindex="-1"><a class="header-anchor" href="#detection-area-numeric"><span>Detection area (numeric)</span></a></h3><p>Detection area range (default: 50%). Value can be found in the published state on the <code>detection_area</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;detection_area&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_area&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="illuminance-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-threshold-numeric"><span>Illuminance threshold (numeric)</span></a></h3><p>Illuminance threshold for triggering (default: 100). Value can be found in the published state on the <code>illuminance_threshold</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;illuminance_threshold&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;illuminance_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>100</code>. The unit of this value is <code>lx</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p>',14))])}]]),n=JSON.parse('{"path":"/devices/SR-ZG9030F-PS.html","title":"Sunricher SR-ZG9030F-PS control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sunricher SR-ZG9030F-PS control via MQTT","description":"Integrate your Sunricher SR-ZG9030F-PS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-02-01T20:02:57.000Z"},"git":{"updatedTime":1745088397000,"contributors":[{"name":"Koen Kanters","username":"","email":"koenkanters94@gmail.com","commits":1}],"changelog":[{"hash":"86c29d38680dfa850f56e59259c3fdd385a6cee2","time":1745088397000,"email":"koenkanters94@gmail.com","author":"Koen Kanters","message":"Add XZ-AKT101 https://github.com/Koenkk/zigbee2mqtt.io/pull/3706"}]},"filePathRelative":"devices/SR-ZG9030F-PS.md"}')}}]);