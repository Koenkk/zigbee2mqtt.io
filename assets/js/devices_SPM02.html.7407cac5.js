"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[374],{58112:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>r,data:()=>s});var a=o(6254);const n={},r=(0,o(15356).A)(n,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"tuya-spm02",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-spm02"},[(0,a.Lk)("span",null,"Tuya SPM02")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"SPM02")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart energy monitor for 3P+N system")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"voltage_X, voltage_Y, voltage_Z, power_X, power_Y, power_Z, current_X, current_Y, current_Z, energy, produced_energy")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SPM02.png",alt:"Tuya SPM02"})])],-1))])]),t[9]||(t[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="voltage-x-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-x-numeric"><span>Voltage X (numeric)</span></a></h3><p>Measured electrical potential value (phase X). Value can be found in the published state on the <code>voltage_X</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-y-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-y-numeric"><span>Voltage Y (numeric)</span></a></h3><p>Measured electrical potential value (phase Y). Value can be found in the published state on the <code>voltage_Y</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-z-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-z-numeric"><span>Voltage Z (numeric)</span></a></h3><p>Measured electrical potential value (phase Z). Value can be found in the published state on the <code>voltage_Z</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-x-numeric" tabindex="-1"><a class="header-anchor" href="#power-x-numeric"><span>Power X (numeric)</span></a></h3><p>Instantaneous measured power (phase X). Value can be found in the published state on the <code>power_X</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-y-numeric" tabindex="-1"><a class="header-anchor" href="#power-y-numeric"><span>Power Y (numeric)</span></a></h3><p>Instantaneous measured power (phase Y). Value can be found in the published state on the <code>power_Y</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-z-numeric" tabindex="-1"><a class="header-anchor" href="#power-z-numeric"><span>Power Z (numeric)</span></a></h3><p>Instantaneous measured power (phase Z). Value can be found in the published state on the <code>power_Z</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-x-numeric" tabindex="-1"><a class="header-anchor" href="#current-x-numeric"><span>Current X (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase X). Value can be found in the published state on the <code>current_X</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-y-numeric" tabindex="-1"><a class="header-anchor" href="#current-y-numeric"><span>Current Y (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase Y). Value can be found in the published state on the <code>current_Y</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-z-numeric" tabindex="-1"><a class="header-anchor" href="#current-z-numeric"><span>Current Z (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase Z). Value can be found in the published state on the <code>current_Z</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Total forward active energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="produced-energy-numeric" tabindex="-1"><a class="header-anchor" href="#produced-energy-numeric"><span>Produced energy (numeric)</span></a></h3><p>Total reverse active energy. Value can be found in the published state on the <code>produced_energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p>',24))])}]]),s=JSON.parse('{"path":"/devices/SPM02.html","title":"Tuya SPM02 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya SPM02 control via MQTT","description":"Integrate your Tuya SPM02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-01T15:13:29.000Z"},"git":{"updatedTime":1745088397000,"contributors":[{"name":"Koen Kanters","username":"","email":"koenkanters94@gmail.com","commits":1}],"changelog":[{"hash":"86c29d38680dfa850f56e59259c3fdd385a6cee2","time":1745088397000,"email":"koenkanters94@gmail.com","author":"Koen Kanters","message":"Add XZ-AKT101 https://github.com/Koenkk/zigbee2mqtt.io/pull/3706"}]},"filePathRelative":"devices/SPM02.md"}')}}]);