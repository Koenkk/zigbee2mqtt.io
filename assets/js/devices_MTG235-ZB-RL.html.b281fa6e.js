"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[30552],{41870:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>d,data:()=>n});var o=a(6254);const i={},d=(0,a(15356).A)(i,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"tuya-mtg235-zb-rl",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#tuya-mtg235-zb-rl"},[(0,o.Lk)("span",null,"Tuya MTG235-ZB-RL")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"MTG235-ZB-RL")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=Tuya"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"24G Human presence sensor with relay")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"presence, illuminance, target_distance, radar_sensitivity, detection_range, shield_range, entry_sensitivity, entry_distance_indentation, entry_filter_time, departure_delay, block_time, breaker_status, breaker_mode, illuminance_threshold, status_indication, sensor")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MTG235-ZB-RL.png",alt:"Tuya MTG235-ZB-RL"})])],-1))])]),t[9]||(t[9]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,o.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="target-distance-numeric" tabindex="-1"><a class="header-anchor" href="#target-distance-numeric"><span>Target distance (numeric)</span></a></h3><p>Distance to target. Value can be found in the published state on the <code>target_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>m</code>.</p><h3 id="radar-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#radar-sensitivity-numeric"><span>Radar sensitivity (numeric)</span></a></h3><p>Detection threshold for the strength of object energy. Value can be found in the published state on the <code>radar_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9</code>.</p><h3 id="detection-range-numeric" tabindex="-1"><a class="header-anchor" href="#detection-range-numeric"><span>Detection range (numeric)</span></a></h3><p>Maximum distance detected by the sensor. Value can be found in the published state on the <code>detection_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>8</code>. The unit of this value is <code>m</code>.</p><h3 id="shield-range-numeric" tabindex="-1"><a class="header-anchor" href="#shield-range-numeric"><span>Shield range (numeric)</span></a></h3><p>Nearest distance detected by the sensor. Value can be found in the published state on the <code>shield_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;shield_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>8</code>. The unit of this value is <code>m</code>.</p><h3 id="entry-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#entry-sensitivity-numeric"><span>Entry sensitivity (numeric)</span></a></h3><p>Sensitivity threshold triggered for the first time when the target enters the detection range. Value can be found in the published state on the <code>entry_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;entry_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9</code>.</p><h3 id="entry-distance-indentation-numeric" tabindex="-1"><a class="header-anchor" href="#entry-distance-indentation-numeric"><span>Entry distance indentation (numeric)</span></a></h3><p>Indent the distance inward based on the dectection distance. Value can be found in the published state on the <code>entry_distance_indentation</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;entry_distance_indentation&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>8</code>. The unit of this value is <code>m</code>.</p><h3 id="entry-filter-time-numeric" tabindex="-1"><a class="header-anchor" href="#entry-filter-time-numeric"><span>Entry filter time (numeric)</span></a></h3><p>Sensitivity threshold triggered for the first time when the target enters the detection range . Value can be found in the published state on the <code>entry_filter_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;entry_filter_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>s</code>.</p><h3 id="departure-delay-numeric" tabindex="-1"><a class="header-anchor" href="#departure-delay-numeric"><span>Departure delay (numeric)</span></a></h3><p>Confirmation time after the target disappears. Value can be found in the published state on the <code>departure_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;departure_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>s</code>.</p><h3 id="block-time-numeric" tabindex="-1"><a class="header-anchor" href="#block-time-numeric"><span>Block time (numeric)</span></a></h3><p>Time for the target to be detected again after switching from manned(occupy) to unmanned(unoccupy) mode. Value can be found in the published state on the <code>block_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;block_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>s</code>.</p><h3 id="breaker-status-binary" tabindex="-1"><a class="header-anchor" href="#breaker-status-binary"><span>Breaker status (binary)</span></a></h3><p>Remotely control the breaker in standard mode. Value can be found in the published state on the <code>breaker_status</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;breaker_status&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> breaker status is ON, if <code>OFF</code> OFF.</p><h3 id="breaker-mode-enum" tabindex="-1"><a class="header-anchor" href="#breaker-mode-enum"><span>Breaker mode (enum)</span></a></h3><p>Breaker mode: standard is remotely controlled, local is automatic. Value can be found in the published state on the <code>breaker_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;breaker_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>standard</code>, <code>local</code>.</p><h3 id="illuminance-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-threshold-numeric"><span>Illuminance threshold (numeric)</span></a></h3><p>Illumination threshold for local (automatic) switching mode operation. Value can be found in the published state on the <code>illuminance_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;illuminance_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>420</code>. The unit of this value is <code>lx</code>.</p><h3 id="status-indication-enum" tabindex="-1"><a class="header-anchor" href="#status-indication-enum"><span>Status indication (enum)</span></a></h3><p>Indicator light will flash when human presence is detected. Value can be found in the published state on the <code>status_indication</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;status_indication&quot;: NEW_VALUE}</code>. The possible values are: <code>OFF</code>, <code>ON</code>.</p><h3 id="sensor-enum" tabindex="-1"><a class="header-anchor" href="#sensor-enum"><span>Sensor (enum)</span></a></h3><p>The radar sensor can be set in four states: on, off, occupied and unoccupied. For example, if set to occupied, it will continue to maintain presence regardless of whether someone is present or not. If set to unoccupied, the unoccupied state will be maintained permanently.. Value can be found in the published state on the <code>sensor</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>occupied</code>, <code>unoccupied</code>.</p>',34))])}]]),n=JSON.parse('{"path":"/devices/MTG235-ZB-RL.html","title":"Tuya MTG235-ZB-RL control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya MTG235-ZB-RL control via MQTT","description":"Integrate your Tuya MTG235-ZB-RL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-10-01T19:01:34.000Z"},"git":{"updatedTime":1745088397000,"contributors":[{"name":"Koen Kanters","username":"","email":"koenkanters94@gmail.com","commits":1}],"changelog":[{"hash":"86c29d38680dfa850f56e59259c3fdd385a6cee2","time":1745088397000,"email":"koenkanters94@gmail.com","author":"Koen Kanters","message":"Add XZ-AKT101 https://github.com/Koenkk/zigbee2mqtt.io/pull/3706"}]},"filePathRelative":"devices/MTG235-ZB-RL.md"}')}}]);