"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[30875],{91383:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>n});var a=o(6254);const i={},d=(0,o(15356).A)(i,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"efekta-efekta-th-v1",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#efekta-efekta-th-v1"},[(0,a.Lk)("span",null,"EFEKTA EFEKTA_TH_v1")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"EFEKTA_TH_v1")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=EFEKTA"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("EFEKTA")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Temperature and humidity sensors. Simple Thermostat.")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"identify, temperature, humidity, battery, voltage, battery_low, reading_interval, smart_sleep, uptime, config_report_enable, comparison_previous_data, enable_temperature, invert_logic_temperature, high_temperature, low_temperature, enable_humidity, invert_logic_humidity, high_humidity, low_humidity")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_TH_v1.png",alt:"EFEKTA EFEKTA_TH_v1"})])],-1))])]),t[9]||(t[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Empty battery indicator. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="reading-interval-numeric" tabindex="-1"><a class="header-anchor" href="#reading-interval-numeric"><span>Reading interval (numeric)</span></a></h3><p>Setting the sensor reading interval in seconds, by default 30 seconds. Value can be found in the published state on the <code>reading_interval</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reading_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>360</code>. The unit of this value is <code>sec</code>.</p><h3 id="smart-sleep-binary" tabindex="-1"><a class="header-anchor" href="#smart-sleep-binary"><span>Smart sleep (binary)</span></a></h3><p>Enable Smart Sleep, short wakeup every 7 seconds. Value can be found in the published state on the <code>smart_sleep</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;smart_sleep&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> smart sleep is ON, if <code>OFF</code> OFF.</p><h3 id="uptime-numeric" tabindex="-1"><a class="header-anchor" href="#uptime-numeric"><span>Uptime (numeric)</span></a></h3><p>Uptime. Value can be found in the published state on the <code>uptime</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>Hours</code>.</p><h3 id="config-report-enable-binary" tabindex="-1"><a class="header-anchor" href="#config-report-enable-binary"><span>Config report enable (binary)</span></a></h3><p>Enable reporting based on reporting configuration. Value can be found in the published state on the <code>config_report_enable</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;config_report_enable&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> config report enable is ON, if <code>OFF</code> OFF.</p><h3 id="comparison-previous-data-binary" tabindex="-1"><a class="header-anchor" href="#comparison-previous-data-binary"><span>Comparison previous data (binary)</span></a></h3><p>Enable сontrol of comparison with previous data. Value can be found in the published state on the <code>comparison_previous_data</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comparison_previous_data&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> comparison previous data is ON, if <code>OFF</code> OFF.</p><h3 id="enable-temperature-binary" tabindex="-1"><a class="header-anchor" href="#enable-temperature-binary"><span>Enable temperature (binary)</span></a></h3><p>Enable Temperature Control. Value can be found in the published state on the <code>enable_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_temperature&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable temperature is ON, if <code>OFF</code> OFF.</p><h3 id="invert-logic-temperature-binary" tabindex="-1"><a class="header-anchor" href="#invert-logic-temperature-binary"><span>Invert logic temperature (binary)</span></a></h3><p>Invert Logic Temperature Control. Value can be found in the published state on the <code>invert_logic_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;invert_logic_temperature&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> invert logic temperature is ON, if <code>OFF</code> OFF.</p><h3 id="high-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#high-temperature-numeric"><span>High temperature (numeric)</span></a></h3><p>Setting High Temperature Border. Value can be found in the published state on the <code>high_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-40</code> and the maximum value is <code>90</code>. The unit of this value is <code>°C</code>.</p><h3 id="low-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#low-temperature-numeric"><span>Low temperature (numeric)</span></a></h3><p>Setting Low Temperature Border. Value can be found in the published state on the <code>low_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-40</code> and the maximum value is <code>90</code>. The unit of this value is <code>°C</code>.</p><h3 id="enable-humidity-binary" tabindex="-1"><a class="header-anchor" href="#enable-humidity-binary"><span>Enable humidity (binary)</span></a></h3><p>Enable Humidity Control. Value can be found in the published state on the <code>enable_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_humidity&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable humidity is ON, if <code>OFF</code> OFF.</p><h3 id="invert-logic-humidity-binary" tabindex="-1"><a class="header-anchor" href="#invert-logic-humidity-binary"><span>Invert logic humidity (binary)</span></a></h3><p>Invert Logic Humidity Control. Value can be found in the published state on the <code>invert_logic_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;invert_logic_humidity&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> invert logic humidity is ON, if <code>OFF</code> OFF.</p><h3 id="high-humidity-numeric" tabindex="-1"><a class="header-anchor" href="#high-humidity-numeric"><span>High humidity (numeric)</span></a></h3><p>Setting High Humidity Border. Value can be found in the published state on the <code>high_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_humidity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>99</code>. The unit of this value is <code>%</code>.</p><h3 id="low-humidity-numeric" tabindex="-1"><a class="header-anchor" href="#low-humidity-numeric"><span>Low humidity (numeric)</span></a></h3><p>Setting Low Humidity Border. Value can be found in the published state on the <code>low_humidity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_humidity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>99</code>. The unit of this value is <code>%</code>.</p>',40))])}]]),n=JSON.parse('{"path":"/devices/EFEKTA_TH_v1.html","title":"EFEKTA EFEKTA_TH_v1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EFEKTA EFEKTA_TH_v1 control via MQTT","description":"Integrate your EFEKTA EFEKTA_TH_v1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-04-01T18:30:52.000Z"},"git":{"updatedTime":1745088397000,"contributors":[{"name":"Koen Kanters","username":"","email":"koenkanters94@gmail.com","commits":1}],"changelog":[{"hash":"86c29d38680dfa850f56e59259c3fdd385a6cee2","time":1745088397000,"email":"koenkanters94@gmail.com","author":"Koen Kanters","message":"Add XZ-AKT101 https://github.com/Koenkk/zigbee2mqtt.io/pull/3706"}]},"filePathRelative":"devices/EFEKTA_TH_v1.md"}')}}]);