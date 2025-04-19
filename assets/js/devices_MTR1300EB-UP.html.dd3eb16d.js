"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[30464],{62560:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>i,data:()=>n});var a=t(6254);const d={},i=(0,t(15356).A)(d,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[8]||(o[8]=(0,a.Lk)("h1",{id:"yokis-mtr1300eb-up",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#yokis-mtr1300eb-up"},[(0,a.Lk)("span",null,"YOKIS MTR1300EB-UP")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"MTR1300EB-UP")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=YOKIS"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("YOKIS")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Remote power switch with timer 1300W")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), identify, power_failure_mode, prev_state, on_timer, enable_pre_on_delay, pre_on_delay, enable_pre_off_delay, pre_off_delay, pulse_duration, time_type, long_on_duration, operating_mode, enable_stop_announce, stop_announce_time, enable_deaf, deaf_blink_amount, deaf_blink_time, enable_blink, blink_amount, blink_on_time, blink_off_time, state_after_blink, enable_nc_command, move_to_position_command, pulse_command, blink_command, deaf_blink_command, long_on_command, reset_to_factory_settings, relaunch_ble_advert, input_mode, contact_mode, last_local_command_state, last_bp_connect_state, send_press, send_release, select_input_mode, enable_short_press, enable_long_press, long_press_duration, time_between_press, enable_R12M_long_press, enable_local_config_lock")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MTR1300EB-UP.png",alt:"YOKIS MTR1300EB-UP"})])],-1))])]),o[9]||(o[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,a.Fv)('<ul><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="power-failure-mode-enum" tabindex="-1"><a class="header-anchor" href="#power-failure-mode-enum"><span>Power failure mode (enum)</span></a></h3><p>Define the device behavior after power failure. Value can be found in the published state on the <code>power_failure_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_failure_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_failure_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>last_state</code>, <code>off</code>, <code>on</code>, <code>blink</code>.</p><h3 id="prev-state-binary" tabindex="-1"><a class="header-anchor" href="#prev-state-binary"><span>Prev state (binary)</span></a></h3><p>Indicate the previous state before action. Value can be found in the published state on the <code>prev_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;prev_state&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>ON</code> prev state is ON, if <code>OFF</code> OFF.</p><h3 id="on-timer-numeric" tabindex="-1"><a class="header-anchor" href="#on-timer-numeric"><span>On timer (numeric)</span></a></h3><p>Define the ON embedded timer duration in seconds. A <code>0</code> value will deactivate the timer. Value can be found in the published state on the <code>on_timer</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;on_timer&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;on_timer&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>. The unit of this value is <code>s</code>.</p><h3 id="enable-pre-on-delay-binary" tabindex="-1"><a class="header-anchor" href="#enable-pre-on-delay-binary"><span>Enable pre on delay (binary)</span></a></h3><p>Enable (<code>0x01</code>) / Disable (<code>0x00</code>) PreOn delay. Value can be found in the published state on the <code>enable_pre_on_delay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_pre_on_delay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_pre_on_delay&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable pre on delay is ON, if <code>OFF</code> OFF.</p><h3 id="pre-on-delay-numeric" tabindex="-1"><a class="header-anchor" href="#pre-on-delay-numeric"><span>Pre on delay (numeric)</span></a></h3><p>Define the PreOn embedded delay in seconds. Value can be found in the published state on the <code>pre_on_delay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pre_on_delay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pre_on_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>. The unit of this value is <code>s</code>.</p><h3 id="enable-pre-off-delay-binary" tabindex="-1"><a class="header-anchor" href="#enable-pre-off-delay-binary"><span>Enable pre off delay (binary)</span></a></h3><p>Enable (<code>0x01</code>) / Disable (<code>0x00</code>) PreOff delay. Value can be found in the published state on the <code>enable_pre_off_delay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_pre_off_delay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_pre_off_delay&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable pre off delay is ON, if <code>OFF</code> OFF.</p><h3 id="pre-off-delay-numeric" tabindex="-1"><a class="header-anchor" href="#pre-off-delay-numeric"><span>Pre off delay (numeric)</span></a></h3><p>Define the PreOff embedded delay in seconds. Value can be found in the published state on the <code>pre_off_delay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pre_off_delay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pre_off_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>. The unit of this value is <code>s</code>.</p><h3 id="pulse-duration-numeric" tabindex="-1"><a class="header-anchor" href="#pulse-duration-numeric"><span>Pulse duration (numeric)</span></a></h3><p>Set the value of ON pulse length. Value can be found in the published state on the <code>pulse_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pulse_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pulse_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>20</code> and the maximum value is <code>65534</code>. The unit of this value is <code>ms</code>.</p><h3 id="time-type-enum" tabindex="-1"><a class="header-anchor" href="#time-type-enum"><span>Time type (enum)</span></a></h3><p>Indicates the current Type of time selected that will be used during push button configuration: - 0x00 -&gt; Seconds - 0x01 -&gt; Minutes. Value can be found in the published state on the <code>time_type</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_type&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_type&quot;: NEW_VALUE}</code>. The possible values are: <code>seconds</code>, <code>minutes</code>.</p><h3 id="long-on-duration-numeric" tabindex="-1"><a class="header-anchor" href="#long-on-duration-numeric"><span>Long on duration (numeric)</span></a></h3><p>Set the value of the LONG ON embedded timer in seconds. Value can be found in the published state on the <code>long_on_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;long_on_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;long_on_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>4233600</code>. The unit of this value is <code>s</code>.</p><h3 id="operating-mode-enum" tabindex="-1"><a class="header-anchor" href="#operating-mode-enum"><span>Operating mode (enum)</span></a></h3><p>Indicates the operating mode: - 0x00 -&gt; Timer - 0x01 -&gt; Staircase - 0x02 -&gt; Pulse. Value can be found in the published state on the <code>operating_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operating_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operating_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>timer</code>, <code>staircase</code>, <code>pulse</code>.</p><h3 id="enable-stop-announce-binary" tabindex="-1"><a class="header-anchor" href="#enable-stop-announce-binary"><span>Enable stop announce (binary)</span></a></h3><p>Enable (<code>0x01</code>) / Disable (<code>0x00</code>) the announcement before turning OFF. Value can be found in the published state on the <code>enable_stop_announce</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_stop_announce&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_stop_announce&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable stop announce is ON, if <code>OFF</code> OFF.</p><h3 id="stop-announce-time-numeric" tabindex="-1"><a class="header-anchor" href="#stop-announce-time-numeric"><span>Stop announce time (numeric)</span></a></h3><p>Time before goes off after the stop announce blinking. (In seconds). Value can be found in the published state on the <code>stop_announce_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;stop_announce_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;stop_announce_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>4233600</code>. The unit of this value is <code>s</code>.</p><h3 id="enable-deaf-binary" tabindex="-1"><a class="header-anchor" href="#enable-deaf-binary"><span>Enable deaf (binary)</span></a></h3><p>Enable (<code>0x01</code>) / Disable (<code>0x00</code>) Deaf Actions. Value can be found in the published state on the <code>enable_deaf</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_deaf&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_deaf&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable deaf is ON, if <code>OFF</code> OFF.</p><h3 id="deaf-blink-amount-numeric" tabindex="-1"><a class="header-anchor" href="#deaf-blink-amount-numeric"><span>Deaf blink amount (numeric)</span></a></h3><p>Define number of blink to do when receiving the DEAF action. One blink is considered as one ON step followed by one OFF step. Value can be found in the published state on the <code>deaf_blink_amount</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;deaf_blink_amount&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deaf_blink_amount&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>20</code>.</p><h3 id="deaf-blink-time-numeric" tabindex="-1"><a class="header-anchor" href="#deaf-blink-time-numeric"><span>Deaf blink time (numeric)</span></a></h3><p>Define duration of a blink ON (In millisecond). Value can be found in the published state on the <code>deaf_blink_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;deaf_blink_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deaf_blink_time&quot;: NEW_VALUE}</code>. The minimal value is <code>100</code> and the maximum value is <code>20000</code>.</p><h3 id="enable-blink-binary" tabindex="-1"><a class="header-anchor" href="#enable-blink-binary"><span>Enable blink (binary)</span></a></h3><p>Enable (<code>0x01</code>) / Disable (<code>0x00</code>) Blink Actions. Value can be found in the published state on the <code>enable_blink</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_blink&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_blink&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable blink is ON, if <code>OFF</code> OFF.</p><h3 id="blink-amount-numeric" tabindex="-1"><a class="header-anchor" href="#blink-amount-numeric"><span>Blink amount (numeric)</span></a></h3><p>Number of blinks done when receiving the corresponding order. One blink is considered as one ON step followed by one OFF step. Value can be found in the published state on the <code>blink_amount</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;blink_amount&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;blink_amount&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>20</code>.</p><h3 id="blink-on-time-numeric" tabindex="-1"><a class="header-anchor" href="#blink-on-time-numeric"><span>Blink on time (numeric)</span></a></h3><p>Duration for the ON time on a blink period (In millisecond). Value can be found in the published state on the <code>blink_on_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;blink_on_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;blink_on_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>4233600</code>.</p><h3 id="blink-off-time-numeric" tabindex="-1"><a class="header-anchor" href="#blink-off-time-numeric"><span>Blink off time (numeric)</span></a></h3><p>Duration for the OFF time on a blink period (In millisecond). Value can be found in the published state on the <code>blink_off_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;blink_off_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;blink_off_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>4233600</code>.</p><h3 id="state-after-blink-enum" tabindex="-1"><a class="header-anchor" href="#state-after-blink-enum"><span>State after blink (enum)</span></a></h3><p>Indicate which state must be apply after a blink sequence: - 0x00 -&gt; State before blinking - 0x01 -&gt; OFF - 0x02 -&gt; ON - 0x03 -&gt; Infinite blinking. Value can be found in the published state on the <code>state_after_blink</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_after_blink&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_after_blink&quot;: NEW_VALUE}</code>. The possible values are: <code>previous</code>, <code>off</code>, <code>on</code>, <code>infinite</code>.</p><h3 id="enable-nc-command-binary" tabindex="-1"><a class="header-anchor" href="#enable-nc-command-binary"><span>Enable nc command (binary)</span></a></h3><p>Define the output relay as Normaly close. Value can be found in the published state on the <code>enable_nc_command</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_nc_command&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_nc_command&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable nc command is ON, if <code>OFF</code> OFF.</p><h3 id="move-to-position-command-composite" tabindex="-1"><a class="header-anchor" href="#move-to-position-command-composite"><span>Move to position command (composite)</span></a></h3><p>Move to position specified in uc_BrightnessEnd parameter.If TOR mode is set (no dimming) or MTR : if uc_BrightnessEnd under 50% will set to OFF else will be set to ON. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;move_to_position_prop&quot;: {&quot;brightness_start&quot;: VALUE, &quot;brightness_end&quot;: VALUE, &quot;pre_timer_value&quot;: VALUE, &quot;enable_pre_timer&quot;: VALUE, &quot;timer_value&quot;: VALUE, &quot;enable_timer&quot;: VALUE, &quot;transition_time&quot;: VALUE}}</code></p><ul><li><code>brightness_start</code> (numeric): Define the brightness at the beginning of the transition, in %</li><li><code>brightness_end</code> (numeric): Define the brightness at the end of the transition, in %</li><li><code>pre_timer_value</code> (numeric): Define the pre timer value, otherwise use 0xFFFFFFFF to use the one configured in the product unit is s</li><li><code>enable_pre_timer</code> (binary): Define whether the device should use the pre timer or not, if 0xFF then use the one configured in product allowed values: <code>true</code> or <code>false</code></li><li><code>timer_value</code> (numeric): Define the timer ON value, otherwise use 0xFFFFFFFF to use the one configured in the product unit is s</li><li><code>enable_timer</code> (binary): Define whether the device should use the timer ON or not, if 0xFF then use the one configured in product allowed values: <code>true</code> or <code>false</code></li><li><code>transition_time</code> (numeric): Define the transition time from the brightness start to the brightness end, in ms</li></ul><h3 id="pulse-command-composite" tabindex="-1"><a class="header-anchor" href="#pulse-command-composite"><span>Pulse command (composite)</span></a></h3><p>This command allows the relay to be controlled with an impulse. The pulse time is defined by PulseLength. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pulse_prop&quot;: {&quot;pulse_length&quot;: VALUE}}</code></p><ul><li><code>pulse_length</code> (numeric): Pulse length max value is 65535, unit is ms</li></ul><h3 id="blink-command-composite" tabindex="-1"><a class="header-anchor" href="#blink-command-composite"><span>Blink command (composite)</span></a></h3><p>With this command, the module is asked to perform a blinking sequence.. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;blink_prop&quot;: {&quot;blink_amount&quot;: VALUE, &quot;blink_on_period&quot;: VALUE, &quot;blink_off_period&quot;: VALUE, &quot;state_after_sequence&quot;: VALUE, &quot;do_periodic_cycle&quot;: VALUE}}</code></p><ul><li><code>blink_amount</code> (numeric): If defined will force the number of blink to be done (only for this order) if not the device will use its own value.</li><li><code>blink_on_period</code> (numeric): If defined will force the blink’s “on time” (only for this order) if not the device will use its own value.</li><li><code>blink_off_period</code> (numeric): If defined will force the blink’s “off time” (only for this order) if not the device will use its own value.</li><li><code>state_after_sequence</code> (enum): If defined will force the state after the sequence (only for this order). if not the device will use its own value- allowed values: <code>previous</code>, <code>off</code>, <code>on</code>, <code>infinite</code></li><li><code>do_periodic_cycle</code> (binary): If set to true the blinking will be “infinite” allowed values: <code>true</code> or <code>false</code></li></ul><h3 id="deaf-blink-command-composite" tabindex="-1"><a class="header-anchor" href="#deaf-blink-command-composite"><span>Deaf blink command (composite)</span></a></h3><p>Start a deaf sequene on a device only if the attribute “eDeaf” is set to Enable. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deaf_blink_prop&quot;: {&quot;blink_amount&quot;: VALUE, &quot;blink_on_time&quot;: VALUE, &quot;sequence_amount&quot;: VALUE, &quot;sequence_of_blinks&quot;: VALUE}}</code></p><ul><li><code>blink_amount</code> (numeric): If defined will force the number of blink to be done during one sequence (only for this order) if not the device will use its own value</li><li><code>blink_on_time</code> (numeric): If defined will force the blink’s “on time” (only for this order) if not the device will use its own value</li><li><code>sequence_amount</code> (numeric): If defined will set the number of sequence to be done. Each sequence is spaced by 1 second. (Max 6) max value is 6</li><li><code>sequence_of_blinks</code> (list): Array with the number of blink to be done for each sequence. Will override “uc_BlinkAmount“</li></ul><h3 id="long-on-command-enum" tabindex="-1"><a class="header-anchor" href="#long-on-command-enum"><span>Long on command (enum)</span></a></h3><p>Switch output ON for LONG ON DURATION time. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;long_on_command&quot;: NEW_VALUE}</code>. The possible values are: <code>longOnAction</code>.</p><h3 id="reset-to-factory-settings-enum" tabindex="-1"><a class="header-anchor" href="#reset-to-factory-settings-enum"><span>Reset to factory settings (enum)</span></a></h3><p>Reset setting depending on RESET ACTION value. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reset_to_factory_settings&quot;: NEW_VALUE}</code>. The possible values are: <code>factory_reset</code>, <code>configuration_reset</code>, <code>network_reset</code>.</p><h3 id="relaunch-ble-advert-enum" tabindex="-1"><a class="header-anchor" href="#relaunch-ble-advert-enum"><span>Relaunch ble advert (enum)</span></a></h3><p>Relaunch BLE advertising for 15 minutes. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;relaunch_ble_advert&quot;: NEW_VALUE}</code>. The possible values are: <code>relaunch_ble_advert</code>.</p><h3 id="input-mode-enum" tabindex="-1"><a class="header-anchor" href="#input-mode-enum"><span>Input mode (enum)</span></a></h3><p>Indicate how the input should be handle: - 0 -&gt; Unknow - 1 -&gt; Push button - 2 -&gt; Switch - 3 -&gt; Relay - 4 -&gt; FP_IN. Value can be found in the published state on the <code>input_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;input_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>unknown</code>, <code>push_button</code>, <code>switch</code>, <code>relay</code>, <code>fp_in</code>.</p><h3 id="contact-mode-enum" tabindex="-1"><a class="header-anchor" href="#contact-mode-enum"><span>Contact mode (enum)</span></a></h3><p>Indicate the contact nature of the entry: - 0 -&gt; NC - 1 -&gt; NO. Value can be found in the published state on the <code>contact_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;contact_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;contact_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>nc</code>, <code>no</code>.</p><h3 id="last-local-command-state-binary" tabindex="-1"><a class="header-anchor" href="#last-local-command-state-binary"><span>Last local command state (binary)</span></a></h3><p>Indicate the last known state of the local BP. Value can be found in the published state on the <code>last_local_command_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;last_local_command_state&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>PRESSED</code> last local command state is ON, if <code>RELEASED</code> OFF.</p><h3 id="last-bp-connect-state-binary" tabindex="-1"><a class="header-anchor" href="#last-bp-connect-state-binary"><span>Last bp connect state (binary)</span></a></h3><p>Indicate the last known state of the Bp connect. Value can be found in the published state on the <code>last_bp_connect_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;last_bp_connect_state&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>PRESSED</code> last bp connect state is ON, if <code>RELEASED</code> OFF.</p><h3 id="send-press-enum" tabindex="-1"><a class="header-anchor" href="#send-press-enum"><span>Send press (enum)</span></a></h3><p>Send to the server cluster a button press. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;send_press&quot;: NEW_VALUE}</code>. The possible values are: <code>SendPress</code>.</p><h3 id="send-release-enum" tabindex="-1"><a class="header-anchor" href="#send-release-enum"><span>Send release (enum)</span></a></h3><p>Send to the server cluster a button release. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;send_release&quot;: NEW_VALUE}</code>. The possible values are: <code>SendRelease</code>.</p><h3 id="select-input-mode-enum" tabindex="-1"><a class="header-anchor" href="#select-input-mode-enum"><span>Select input mode (enum)</span></a></h3><p>Change the Input mode to use switch input, wired relay or simple push button. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;select_input_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>unknown</code>, <code>push_button</code>, <code>switch</code>, <code>relay</code>, <code>fp_in</code>.</p><h3 id="enable-short-press-binary" tabindex="-1"><a class="header-anchor" href="#enable-short-press-binary"><span>Enable short press (binary)</span></a></h3><p>Use to enable short press action. Value can be found in the published state on the <code>enable_short_press</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_short_press&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_short_press&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable short press is ON, if <code>OFF</code> OFF.</p><h3 id="enable-long-press-binary" tabindex="-1"><a class="header-anchor" href="#enable-long-press-binary"><span>Enable long press (binary)</span></a></h3><p>Use to enable long press action. Value can be found in the published state on the <code>enable_long_press</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_long_press&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_long_press&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable long press is ON, if <code>OFF</code> OFF.</p><h3 id="long-press-duration-numeric" tabindex="-1"><a class="header-anchor" href="#long-press-duration-numeric"><span>Long press duration (numeric)</span></a></h3><p>Define long Press duration in milliseconds. Value can be found in the published state on the <code>long_press_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;long_press_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;long_press_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ms</code>.</p><h3 id="time-between-press-numeric" tabindex="-1"><a class="header-anchor" href="#time-between-press-numeric"><span>Time between press (numeric)</span></a></h3><p>Define the maximum time between 2 press to keep in a sequence (In milliseconds). Value can be found in the published state on the <code>time_between_press</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_between_press&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_between_press&quot;: NEW_VALUE}</code>. The minimal value is <code>100</code> and the maximum value is <code>600</code>. The unit of this value is <code>ms</code>.</p><h3 id="enable-r12m-long-press-binary" tabindex="-1"><a class="header-anchor" href="#enable-r12m-long-press-binary"><span>Enable R12M long press (binary)</span></a></h3><p>Enable R12M Long Press action. Value can be found in the published state on the <code>enable_R12M_long_press</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_R12M_long_press&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_R12M_long_press&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable R12M long press is ON, if <code>OFF</code> OFF.</p><h3 id="enable-local-config-lock-binary" tabindex="-1"><a class="header-anchor" href="#enable-local-config-lock-binary"><span>Enable local config lock (binary)</span></a></h3><p>Disable local configuration. Value can be found in the published state on the <code>enable_local_config_lock</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_local_config_lock&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_local_config_lock&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable local config lock is ON, if <code>OFF</code> OFF.</p>',94))])}]]),n=JSON.parse('{"path":"/devices/MTR1300EB-UP.html","title":"YOKIS MTR1300EB-UP control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"YOKIS MTR1300EB-UP control via MQTT","description":"Integrate your YOKIS MTR1300EB-UP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-02-06T19:24:12.000Z"},"git":{"updatedTime":1745088397000,"contributors":[{"name":"Koen Kanters","username":"","email":"koenkanters94@gmail.com","commits":1}],"changelog":[{"hash":"86c29d38680dfa850f56e59259c3fdd385a6cee2","time":1745088397000,"email":"koenkanters94@gmail.com","author":"Koen Kanters","message":"Add XZ-AKT101 https://github.com/Koenkk/zigbee2mqtt.io/pull/3706"}]},"filePathRelative":"devices/MTR1300EB-UP.md"}')}}]);