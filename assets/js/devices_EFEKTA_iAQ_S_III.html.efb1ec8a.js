"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[47842],{93863:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>c,data:()=>d});var a=t(6254);const i={},c=(0,t(15356).A)(i,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[8]||(o[8]=(0,a.Lk)("h1",{id:"efekta-efekta-iaq-s-iii",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#efekta-efekta-iaq-s-iii"},[(0,a.Lk)("span",null,"EFEKTA EFEKTA_iAQ_S_III")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"EFEKTA_iAQ_S_III")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=EFEKTA"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("EFEKTA")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Air Quality Monitor, CO2, VOC, outdoor temperature and humidity, date and time")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"co2, voc_index, temperature, humidity, illuminance, auto_brightness, night_onoff_backlight, night_on_backlight, night_off_backlight, long_chart_period, long_chart_period2, internal_or_external, temperature_offset, humidity_offset, set_altitude, automatic_scal, forced_recalibration, factory_reset_co2, manual_forced_recalibration, enable_co2, invert_logic_co2, high_co2, low_co2, enable_voc, invert_logic_voc, high_voc, low_voc")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_iAQ_S_III.png",alt:"EFEKTA EFEKTA_iAQ_S_III"})])],-1))])]),o[9]||(o[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,a.Fv)('<ul><li><p><code>co2_calibration</code>: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_raw</code>: Expose the raw illuminance value. The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="co2-numeric" tabindex="-1"><a class="header-anchor" href="#co2-numeric"><span>CO2 (numeric)</span></a></h3><p>Measured value. Value can be found in the published state on the <code>co2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="voc-index-numeric" tabindex="-1"><a class="header-anchor" href="#voc-index-numeric"><span>Voc index (numeric)</span></a></h3><p>VOC index. Value can be found in the published state on the <code>voc_index</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VOC Index points</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="auto-brightness-binary" tabindex="-1"><a class="header-anchor" href="#auto-brightness-binary"><span>Auto brightness (binary)</span></a></h3><p>Enable or Disable Auto Brightness of the Display. Value can be found in the published state on the <code>auto_brightness</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_brightness&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> auto brightness is ON, if <code>OFF</code> OFF.</p><h3 id="night-onoff-backlight-binary" tabindex="-1"><a class="header-anchor" href="#night-onoff-backlight-binary"><span>Night onoff backlight (binary)</span></a></h3><p>Complete shutdown of the backlight at night mode. Value can be found in the published state on the <code>night_onoff_backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_onoff_backlight&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> night onoff backlight is ON, if <code>OFF</code> OFF.</p><h3 id="night-on-backlight-numeric" tabindex="-1"><a class="header-anchor" href="#night-on-backlight-numeric"><span>Night on backlight (numeric)</span></a></h3><p>Night mode activation time. Value can be found in the published state on the <code>night_on_backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_on_backlight&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>23</code>. The unit of this value is <code>Hr</code>.</p><h3 id="night-off-backlight-numeric" tabindex="-1"><a class="header-anchor" href="#night-off-backlight-numeric"><span>Night off backlight (numeric)</span></a></h3><p>Night mode deactivation time. Value can be found in the published state on the <code>night_off_backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_off_backlight&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>23</code>. The unit of this value is <code>Hr</code>.</p><h3 id="long-chart-period-enum" tabindex="-1"><a class="header-anchor" href="#long-chart-period-enum"><span>Long chart period (enum)</span></a></h3><p>The period of plotting the CO2 level(OFF - 1H | ON - 24H). Value can be found in the published state on the <code>long_chart_period</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;long_chart_period&quot;: NEW_VALUE}</code>. The possible values are: <code>1H</code>, <code>24H</code>.</p><h3 id="long-chart-period2-enum" tabindex="-1"><a class="header-anchor" href="#long-chart-period2-enum"><span>Long chart period2 (enum)</span></a></h3><p>The period of plotting the VOC Index points(OFF - 1H | ON - 24H). Value can be found in the published state on the <code>long_chart_period2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;long_chart_period2&quot;: NEW_VALUE}</code>. The possible values are: <code>1H</code>, <code>24H</code>.</p><h3 id="internal-or-external-enum" tabindex="-1"><a class="header-anchor" href="#internal-or-external-enum"><span>Internal or external (enum)</span></a></h3><p>Display data from internal or external TH sensor. Value can be found in the published state on the <code>internal_or_external</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;internal_or_external&quot;: NEW_VALUE}</code>. The possible values are: <code>INTERNAL</code>, <code>EXTERNAL</code>.</p><h3 id="temperature-offset-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-offset-numeric"><span>Temperature offset (numeric)</span></a></h3><p>Adjust temperature. Value can be found in the published state on the <code>temperature_offset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-offset-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-offset-numeric"><span>Humidity offset (numeric)</span></a></h3><p>Adjust humidity. Value can be found in the published state on the <code>humidity_offset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>%</code>.</p><h3 id="set-altitude-numeric" tabindex="-1"><a class="header-anchor" href="#set-altitude-numeric"><span>Set altitude (numeric)</span></a></h3><p>Setting the altitude above sea level (for high accuracy of the CO2 sensor). Value can be found in the published state on the <code>set_altitude</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;set_altitude&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3000</code>. The unit of this value is <code>meters</code>.</p><h3 id="automatic-scal-binary" tabindex="-1"><a class="header-anchor" href="#automatic-scal-binary"><span>Automatic scal (binary)</span></a></h3><p>Automatic self calibration. Value can be found in the published state on the <code>automatic_scal</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;automatic_scal&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> automatic scal is ON, if <code>OFF</code> OFF.</p><h3 id="forced-recalibration-binary" tabindex="-1"><a class="header-anchor" href="#forced-recalibration-binary"><span>Forced recalibration (binary)</span></a></h3><p>Start FRC (Perform Forced Recalibration of the CO2 Sensor). Value can be found in the published state on the <code>forced_recalibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;forced_recalibration&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> forced recalibration is ON, if <code>OFF</code> OFF.</p><h3 id="factory-reset-co2-binary" tabindex="-1"><a class="header-anchor" href="#factory-reset-co2-binary"><span>Factory reset co2 (binary)</span></a></h3><p>Factory Reset CO2 sensor. Value can be found in the published state on the <code>factory_reset_co2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;factory_reset_co2&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> factory reset co2 is ON, if <code>OFF</code> OFF.</p><h3 id="manual-forced-recalibration-numeric" tabindex="-1"><a class="header-anchor" href="#manual-forced-recalibration-numeric"><span>Manual forced recalibration (numeric)</span></a></h3><p>Start Manual FRC (Perform Forced Recalibration of the CO2 Sensor). Value can be found in the published state on the <code>manual_forced_recalibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;manual_forced_recalibration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="enable-co2-binary" tabindex="-1"><a class="header-anchor" href="#enable-co2-binary"><span>Enable co2 (binary)</span></a></h3><p>Enable CO2 Gas Control. Value can be found in the published state on the <code>enable_co2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_co2&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable co2 is ON, if <code>OFF</code> OFF.</p><h3 id="invert-logic-co2-binary" tabindex="-1"><a class="header-anchor" href="#invert-logic-co2-binary"><span>Invert logic co2 (binary)</span></a></h3><p>Enable invert logic CO2 Gas Control. Value can be found in the published state on the <code>invert_logic_co2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;invert_logic_co2&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> invert logic co2 is ON, if <code>OFF</code> OFF.</p><h3 id="high-co2-numeric" tabindex="-1"><a class="header-anchor" href="#high-co2-numeric"><span>High co2 (numeric)</span></a></h3><p>Setting High CO2 Gas Border. Value can be found in the published state on the <code>high_co2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_co2&quot;: NEW_VALUE}</code>. The minimal value is <code>400</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="low-co2-numeric" tabindex="-1"><a class="header-anchor" href="#low-co2-numeric"><span>Low co2 (numeric)</span></a></h3><p>Setting Low CO2 Gas Border. Value can be found in the published state on the <code>low_co2</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_co2&quot;: NEW_VALUE}</code>. The minimal value is <code>400</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="enable-voc-binary" tabindex="-1"><a class="header-anchor" href="#enable-voc-binary"><span>Enable voc (binary)</span></a></h3><p>Enable CO2 Gas Control. Value can be found in the published state on the <code>enable_voc</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_voc&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable voc is ON, if <code>OFF</code> OFF.</p><h3 id="invert-logic-voc-binary" tabindex="-1"><a class="header-anchor" href="#invert-logic-voc-binary"><span>Invert logic voc (binary)</span></a></h3><p>Enable invert logic CO2 Gas Control. Value can be found in the published state on the <code>invert_logic_voc</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;invert_logic_voc&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> invert logic voc is ON, if <code>OFF</code> OFF.</p><h3 id="high-voc-numeric" tabindex="-1"><a class="header-anchor" href="#high-voc-numeric"><span>High voc (numeric)</span></a></h3><p>Setting High CO2 Gas Border. Value can be found in the published state on the <code>high_voc</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_voc&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>500</code>. The unit of this value is <code>ppm</code>.</p><h3 id="low-voc-numeric" tabindex="-1"><a class="header-anchor" href="#low-voc-numeric"><span>Low voc (numeric)</span></a></h3><p>Setting Low CO2 Gas Border. Value can be found in the published state on the <code>low_voc</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_voc&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>500</code>. The unit of this value is <code>ppm</code>.</p>',56))])}]]),d=JSON.parse('{"path":"/devices/EFEKTA_iAQ_S_III.html","title":"EFEKTA EFEKTA_iAQ_S_III control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EFEKTA EFEKTA_iAQ_S_III control via MQTT","description":"Integrate your EFEKTA EFEKTA_iAQ_S_III via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-04-01T18:30:52.000Z"},"git":{"updatedTime":1745088397000,"contributors":[{"name":"Koen Kanters","username":"","email":"koenkanters94@gmail.com","commits":1}],"changelog":[{"hash":"86c29d38680dfa850f56e59259c3fdd385a6cee2","time":1745088397000,"email":"koenkanters94@gmail.com","author":"Koen Kanters","message":"Add XZ-AKT101 https://github.com/Koenkk/zigbee2mqtt.io/pull/3706"}]},"filePathRelative":"devices/EFEKTA_iAQ_S_III.md"}')}}]);