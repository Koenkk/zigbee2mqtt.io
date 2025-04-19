"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[77229],{97194:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>s,data:()=>i});var n=a(6254);const o={},s=(0,a(15356).A)(o,[["render",function(e,t){const a=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[8]||(t[8]=(0,n.Lk)("h1",{id:"paul-neuhaus-100-462-31",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#paul-neuhaus-100-462-31"},[(0,n.Lk)("span",null,"Paul Neuhaus 100.462.31")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"100.462.31")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(a,{to:"/supported-devices/#v=Paul%20Neuhaus"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Paul Neuhaus")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Q-REMOTE")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"action, action_group")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/100.462.31.png",alt:"Paul Neuhaus 100.462.31"})])],-1))])]),t[9]||(t[9]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p>Before you can pair your Paul Neuhaus remote for Q-Lights you have to reset it / remove it from any network. Pairing process will fail otherwise.</p><h3 id="resetting-remote" tabindex="-1"><a class="header-anchor" href="#resetting-remote"><span>Resetting remote</span></a></h3><p>You will need a paper clip or similar tool to reset the remote control.</p><ol><li>Turn over the remote (on and off button should always face upwards)</li><li>Slide on the battery cover on the back of the remote downwards. Above the left battery you will see a small hole. This is where the reset button is located.</li><li>Push the bent paper clip into the reset opening (hole) and hold down for more than 5 seconds. During this time the led on the front side will blink 4 time. Keep the paper clip pressed!</li><li>The status LED now will blink 10 times very fast. If this happens you can remove the paper clip (right after the first fast blink).</li></ol><p>The remote now is reset and you can continue with the pairing process.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><ol><li>Hold the remote close to the coordinator / router you want it to pair with.</li><li>Press the on button of the remote for 5 seconds.</li><li>The LED of the remote will start to blink fast - pairing process is initialized.</li><li>If the led stops blinking the device should be paired.</li></ol><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',9)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,n.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>color_temperature_move</code>, <code>color_move</code>, <code>brightness_stop</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>color_loop_set</code>, <code>enhanced_move_to_hue_and_saturation</code>, <code>recall_*</code>, <code>scene_*</code>.</p><h3 id="action-group-numeric" tabindex="-1"><a class="header-anchor" href="#action-group-numeric"><span>Action group (numeric)</span></a></h3><p>Group where the action was triggered on. Value can be found in the published state on the <code>action_group</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>',7))])}]]),i=JSON.parse('{"path":"/devices/100.462.31.html","title":"Paul Neuhaus 100.462.31 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Paul Neuhaus 100.462.31 control via MQTT","description":"Integrate your Paul Neuhaus 100.462.31 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-06-10T16:45:59.000Z"},"git":{"updatedTime":1745088397000,"contributors":[{"name":"Koen Kanters","username":"","email":"koenkanters94@gmail.com","commits":1}],"changelog":[{"hash":"86c29d38680dfa850f56e59259c3fdd385a6cee2","time":1745088397000,"email":"koenkanters94@gmail.com","author":"Koen Kanters","message":"Add XZ-AKT101 https://github.com/Koenkk/zigbee2mqtt.io/pull/3706"}]},"filePathRelative":"devices/100.462.31.md"}')}}]);