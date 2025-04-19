"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67889],{33519:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>s});var a=o(6254);const i={},d=(0,o(15356).A)(i,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[11]||(t[11]=(0,a.Lk)("h1",{id:"aqara-zncldj01lm",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#aqara-zncldj01lm"},[(0,a.Lk)("span",null,"Aqara ZNCLDJ01LM")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZNCLDJ01LM")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Aqara"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Aqara")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Curtain controller C3")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"limits_calibration, automatic_calibration, cover (state, position), curtain_speed, manual_open_close, adaptive_pulling_speed, manual_stop, reverse_direction, status, last_manual_operation, curtain_position, traverse_time, calibration_status, calibrated, identify_beep, identify")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZNCLDJ01LM.png",alt:"Aqara ZNCLDJ01LM"})])],-1))])]),t[12]||(t[12]=(0,a.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,a.Lk)("span",null,"OTA updates")])],-1)),(0,a.Lk)("p",null,[t[8]||(t[8]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,a.eW)("."))]),t[13]||(t[13]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[10]||(t[10]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,a.Fv)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="limits-calibration-enum" tabindex="-1"><a class="header-anchor" href="#limits-calibration-enum"><span>Limits calibration (enum)</span></a></h3><p>Calibrate the position limits. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;limits_calibration&quot;: NEW_VALUE}</code>. The possible values are: <code>start</code>, <code>end</code>, <code>reset</code>.</p><h3 id="automatic-calibration-enum" tabindex="-1"><a class="header-anchor" href="#automatic-calibration-enum"><span>Automatic calibration (enum)</span></a></h3><p>Performs an automatic calibration process similar to Aqara’s method to set curtain limits.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;automatic_calibration&quot;: NEW_VALUE}</code>. The possible values are: <code>calibrate</code>.</p><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="curtain-speed-numeric" tabindex="-1"><a class="header-anchor" href="#curtain-speed-numeric"><span>Curtain speed (numeric)</span></a></h3><p>Speed of curtain movement. Value can be found in the published state on the <code>curtain_speed</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;curtain_speed&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;curtain_speed&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="manual-open-close-binary" tabindex="-1"><a class="header-anchor" href="#manual-open-close-binary"><span>Manual open close (binary)</span></a></h3><p>Gently pull to open/close the curtain automatically. Value can be found in the published state on the <code>manual_open_close</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;manual_open_close&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;manual_open_close&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> manual open close is ON, if <code>OFF</code> OFF.</p><h3 id="adaptive-pulling-speed-binary" tabindex="-1"><a class="header-anchor" href="#adaptive-pulling-speed-binary"><span>Adaptive pulling speed (binary)</span></a></h3><p>The faster/slower the curtain is pulled manually, the faster/slower the curtain will move. Value can be found in the published state on the <code>adaptive_pulling_speed</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;adaptive_pulling_speed&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;adaptive_pulling_speed&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> adaptive pulling speed is ON, if <code>OFF</code> OFF.</p><h3 id="manual-stop-binary" tabindex="-1"><a class="header-anchor" href="#manual-stop-binary"><span>Manual stop (binary)</span></a></h3><p>Manually pulling the curtain during operation stops the motor. Value can be found in the published state on the <code>manual_stop</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;manual_stop&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;manual_stop&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> manual stop is ON, if <code>OFF</code> OFF.</p><h3 id="reverse-direction-binary" tabindex="-1"><a class="header-anchor" href="#reverse-direction-binary"><span>Reverse direction (binary)</span></a></h3><p>Whether the curtain direction is inverted. Value can be found in the published state on the <code>reverse_direction</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;reverse_direction&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reverse_direction&quot;: NEW_VALUE}</code>. If value equals <code>true</code> reverse direction is ON, if <code>false</code> OFF.</p><h3 id="status-enum" tabindex="-1"><a class="header-anchor" href="#status-enum"><span>Status (enum)</span></a></h3><p>Current status of the curtain (Opening, Closing, Stopped, Blocked). Value can be found in the published state on the <code>status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>closing</code>, <code>opening</code>, <code>stopped</code>, <code>blocked</code>.</p><h3 id="last-manual-operation-enum" tabindex="-1"><a class="header-anchor" href="#last-manual-operation-enum"><span>Last manual operation (enum)</span></a></h3><p>Last triggered manual operation. Value can be found in the published state on the <code>last_manual_operation</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>open</code>, <code>close</code>, <code>stop</code>.</p><h3 id="curtain-position-numeric" tabindex="-1"><a class="header-anchor" href="#curtain-position-numeric"><span>Curtain position (numeric)</span></a></h3><p>Current position of the curtain. Value can be found in the published state on the <code>curtain_position</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>1</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="traverse-time-numeric" tabindex="-1"><a class="header-anchor" href="#traverse-time-numeric"><span>Traverse time (numeric)</span></a></h3><p>Time in seconds to get from one end to another. Value can be found in the published state on the <code>traverse_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>sec</code>.</p><h3 id="calibration-status-enum" tabindex="-1"><a class="header-anchor" href="#calibration-status-enum"><span>Calibration status (enum)</span></a></h3><p>Calibration status of the curtain (Not calibrated, Half calibrated, Fully calibrated). Value can be found in the published state on the <code>calibration_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_calibrated</code>, <code>half_calibrated</code>, <code>fully_calibrated</code>.</p><h3 id="calibrated-binary" tabindex="-1"><a class="header-anchor" href="#calibrated-binary"><span>Calibrated (binary)</span></a></h3><p>Indicates if this device is calibrated. Value can be found in the published state on the <code>calibrated</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> calibrated is ON, if <code>false</code> OFF.</p><h3 id="identify-beep-enum" tabindex="-1"><a class="header-anchor" href="#identify-beep-enum"><span>Identify beep (enum)</span></a></h3><p>Device will beep for chosen time duration. Value can be found in the published state on the <code>identify_beep</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;identify_beep&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify_beep&quot;: NEW_VALUE}</code>. The possible values are: <code>short</code>, <code>1_sec</code>, <code>2_sec</code>.</p><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p>',34))])}]]),s=JSON.parse('{"path":"/devices/ZNCLDJ01LM.html","title":"Aqara ZNCLDJ01LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara ZNCLDJ01LM control via MQTT","description":"Integrate your Aqara ZNCLDJ01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-09-01T12:36:44.000Z"},"git":{"updatedTime":1745088397000,"contributors":[{"name":"Koen Kanters","username":"","email":"koenkanters94@gmail.com","commits":1}],"changelog":[{"hash":"86c29d38680dfa850f56e59259c3fdd385a6cee2","time":1745088397000,"email":"koenkanters94@gmail.com","author":"Koen Kanters","message":"Add XZ-AKT101 https://github.com/Koenkk/zigbee2mqtt.io/pull/3706"}]},"filePathRelative":"devices/ZNCLDJ01LM.md"}')}}]);