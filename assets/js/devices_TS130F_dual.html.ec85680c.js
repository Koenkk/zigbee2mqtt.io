"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[88376],{49797:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>n,data:()=>d});var a=t(6254);const i={},n=(0,t(15356).A)(i,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[8]||(o[8]=(0,a.Lk)("h1",{id:"lonsonho-ts130f-dual",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#lonsonho-ts130f-dual"},[(0,a.Lk)("span",null,"Lonsonho TS130F_dual")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TS130F_dual")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Lonsonho"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("Lonsonho")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Dual curtain/blind module")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"moving, calibration_time, cover (state, position), calibration, motor_reversal")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS130F_dual.png",alt:"Lonsonho TS130F_dual"})])],-1))])]),o[9]||(o[9]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p>The output is only driven once the input signal is released, hence making this device difficult to work with non-momentary switches.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press on pair button for 10 seconds to enter pairing mode</p><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration"><span>Calibration</span></a></h3><ul><li>Press the open button on the switch, wait until the curtains are completely open.</li><li>Press the same button on the switch again to &#39;stop&#39;.</li><li>Put the device into calibration mode, see <a href="#calibration-binary">below</a>.</li><li>Press the close button on the switch, wait until curtains are fully closed.</li><li>Press the same button on the switch.</li><li>Disable the calibration mode, see <a href="#calibration-binary">below</a>.</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',7)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,a.Fv)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="moving-enum-left-endpoint" tabindex="-1"><a class="header-anchor" href="#moving-enum-left-endpoint"><span>Moving (enum, left endpoint)</span></a></h3><p>Value can be found in the published state on the <code>moving_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>UP</code>, <code>STOP</code>, <code>DOWN</code>.</p><h3 id="moving-enum-right-endpoint" tabindex="-1"><a class="header-anchor" href="#moving-enum-right-endpoint"><span>Moving (enum, right endpoint)</span></a></h3><p>Value can be found in the published state on the <code>moving_right</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>UP</code>, <code>STOP</code>, <code>DOWN</code>.</p><h3 id="calibration-time-numeric-left-endpoint" tabindex="-1"><a class="header-anchor" href="#calibration-time-numeric-left-endpoint"><span>Calibration time (numeric, left endpoint)</span></a></h3><p>Calibration time. Value can be found in the published state on the <code>calibration_time_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>s</code>.</p><h3 id="calibration-time-numeric-right-endpoint" tabindex="-1"><a class="header-anchor" href="#calibration-time-numeric-right-endpoint"><span>Calibration time (numeric, right endpoint)</span></a></h3><p>Calibration time. Value can be found in the published state on the <code>calibration_time_right</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>s</code>.</p><h3 id="cover-left-endpoint" tabindex="-1"><a class="header-anchor" href="#cover-left-endpoint"><span>Cover (left endpoint)</span></a></h3><p>The current state of this cover is in the published state under the <code>state_left</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state_left&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state_left&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position_left&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="calibration-binary-left-endpoint" tabindex="-1"><a class="header-anchor" href="#calibration-binary-left-endpoint"><span>Calibration (binary, left endpoint)</span></a></h3><p>Value can be found in the published state on the <code>calibration_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_left&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> calibration is ON, if <code>OFF</code> OFF.</p><h3 id="motor-reversal-binary-left-endpoint" tabindex="-1"><a class="header-anchor" href="#motor-reversal-binary-left-endpoint"><span>Motor reversal (binary, left endpoint)</span></a></h3><p>Value can be found in the published state on the <code>motor_reversal_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_reversal_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_reversal_left&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> motor reversal is ON, if <code>OFF</code> OFF.</p><h3 id="cover-right-endpoint" tabindex="-1"><a class="header-anchor" href="#cover-right-endpoint"><span>Cover (right endpoint)</span></a></h3><p>The current state of this cover is in the published state under the <code>state_right</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state_right&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state_right&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position_right&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="calibration-binary-right-endpoint" tabindex="-1"><a class="header-anchor" href="#calibration-binary-right-endpoint"><span>Calibration (binary, right endpoint)</span></a></h3><p>Value can be found in the published state on the <code>calibration_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_right&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> calibration is ON, if <code>OFF</code> OFF.</p><h3 id="motor-reversal-binary-right-endpoint" tabindex="-1"><a class="header-anchor" href="#motor-reversal-binary-right-endpoint"><span>Motor reversal (binary, right endpoint)</span></a></h3><p>Value can be found in the published state on the <code>motor_reversal_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_reversal_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_reversal_right&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> motor reversal is ON, if <code>OFF</code> OFF.</p>',22))])}]]),d=JSON.parse('{"path":"/devices/TS130F_dual.html","title":"Lonsonho TS130F_dual control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Lonsonho TS130F_dual control via MQTT","description":"Integrate your Lonsonho TS130F_dual via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-01-01T12:47:02.000Z"},"git":{"updatedTime":1745088397000,"contributors":[{"name":"Koen Kanters","username":"","email":"koenkanters94@gmail.com","commits":1}],"changelog":[{"hash":"86c29d38680dfa850f56e59259c3fdd385a6cee2","time":1745088397000,"email":"koenkanters94@gmail.com","author":"Koen Kanters","message":"Add XZ-AKT101 https://github.com/Koenkk/zigbee2mqtt.io/pull/3706"}]},"filePathRelative":"devices/TS130F_dual.md"}')}}]);