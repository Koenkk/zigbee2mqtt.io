<template lang="pug">
div.configurator
  label(for="mqttServer") Address of your MQTT server
  input(v-model="mqttServerKey" id="mqttServer" type="text")
  label(for="adapterPathType") Connectivity of your adapter
  select(v-model="adapterPathTypeKey" id="adapterPathType")
    option(value="Serial" selected) Serial (USB)
    option(value="TCP") TCP
  label(for="adapterPath") Path of your adapter
  input(v-model="adapterPathKey" id="adapterPath" type="text")
  label(for="adapterType") Type of your adapter
  select(v-model="adapterTypeKey" id="adapterType")
    option(value="zstack" selected) zstack
    option(value="ember") ember
    option(value="deconz") deconz
    option(value="zigate") zigate
    option(value="zboss") zboss
  label(for="wifiChannel") Channel of closest WiFi 2.4GHz network
  input(v-model="wifiChannelKey" id="wifiChannel" type="number" min=1 max=14 step=1)
  label(for="frontend" class="checkbox")
    input(v-model="frontendKey" id="frontend" type="checkbox" checked)
    .
      Enable frontend?
  label(for="homeAssistant" class="checkbox")
    input(v-model="homeAssistantKey" id="homeAssistant" type="checkbox")
    .
      Enable Home Assistant integration?
  p() Configuration:
  textarea(v-model="configurationKey" rows=16 disabled)
</template>

<script lang="ts">
import {defineComponent, ref, SetupContext, watch} from 'vue';

/**
 * Very basic algorithm to get farthest away from the WiFi channel while remaining on "preferred" ZigBee channels (11, 15, 20, 25)
 */
function bestZigbeeChannel(wifiChannel: number) {
    if (wifiChannel >= 11) {
        // WiFi 11-14
        return 15;
    } else if (wifiChannel >= 6) {
        // WiFi 6-10
        return 11;
    } else {
        // WiFi 1-5
        return 25;
    }
}

export default defineComponent({
    name: 'Configurator',
    setup(props, ctx: SetupContext) {
        // ctx.attrs: {mqtt: string; portType: 'Serial' | 'TCP'; serial: string; tcp: string;}
        const defaultMQTTServer = ctx.attrs.mqtt ? ctx.attrs.mqtt : 'mqtt://<IP_ADDRESS>:<PORT>';
        const defaultSerialPath = ctx.attrs.serial ? ctx.attrs.serial : '/dev/serial/by-id/<SERIAL_ID>';
        const defaultPortType = ctx.attrs.portType === 'TCP' ? 'TCP' : 'Serial';
        const defaultTCPPath = ctx.attrs.tcp ? ctx.attrs.tcp : 'tcp://<IP_ADDRESS>:<PORT>';
        const defaultAdapter = ctx.attrs.adapter ? ctx.attrs.adapter : 'zstack';

        const mqttServerKey = ref('');
        const adapterPathTypeKey = ref('');
        const adapterPathKey = ref('');
        const adapterTypeKey = ref('');
        const wifiChannelKey = ref('');
        const frontendKey = ref('');
        const homeAssistantKey = ref('');
        const configurationKey = ref('');

        watch(
            adapterPathTypeKey,
            (adapterPathType) => {
                if (!adapterPathType || adapterPathType === 'Serial') {
                    adapterPathTypeKey.value = 'Serial';
                    adapterPathKey.value = defaultSerialPath;
                } else {
                    adapterPathTypeKey.value = 'TCP';
                    adapterPathKey.value = defaultTCPPath;
                }
            },
            {immediate: true},
        );

        watch(
            [mqttServerKey, adapterPathKey, adapterTypeKey, wifiChannelKey, frontendKey, homeAssistantKey],
            ([mqttServer, adapterPath, adapterType, wifiChannel, frontend, homeAssistant]) => {
                if (!mqttServer) {
                    mqttServer = defaultMQTTServer;
                    mqttServerKey.value = defaultMQTTServer;
                }

                if (!adapterPath) {
                    if (adapterPathType === 'TCP') {
                        adapterPath = defaultTCPPath;
                        adapterPathKey.value = defaultTCPPath;
                    } else {
                        adapterPath = defaultSerialPath;
                        adapterPathKey.value = defaultSerialPath;
                    }
                }

                if (!adapterType) {
                    adapterType = defaultAdapter;
                    adapterTypeKey.value = defaultAdapter;
                }

                if (!wifiChannel) {
                    wifiChannel = 6;
                    wifiChannelKey.value = 6;
                }

                if (typeof frontendKey.value !== 'boolean') {
                    frontend = true;
                    frontendKey.value = true;
                }

                if (typeof homeAssistantKey.value !== 'boolean') {
                    homeAssistant = false;
                    homeAssistantKey.value = false;
                }

                // XXX: version should be kept in sync with Z2M's (updated with every release)
                configurationKey.value = `
version: 4
mqtt:
    base_topic: zigbee2mqtt
    server: ${mqttServer}
serial:
    port: ${adapterPath}
    adapter: ${adapterType}
advanced:
    channel: ${bestZigbeeChannel(wifiChannel)}
    network_key: GENERATE
    pan_id: GENERATE
    ext_pan_id: GENERATE
frontend:
    enabled: ${frontend}
homeassistant:
    enabled: ${homeAssistant}
`.trim();
            },
            {immediate: true},
        );

        return {
            mqttServerKey,
            adapterPathTypeKey,
            adapterPathKey,
            adapterTypeKey,
            wifiChannelKey,
            frontendKey,
            homeAssistantKey,
            configurationKey,
        };
    },
});
</script>

<style lang="scss">
.configurator {
    margin-top: 1rem;
    padding: 1rem 1rem;
    border: 1px solid #333;
    border-radius: 0.3rem;

    label {
        display: block;
        width: 100%;
    }

    input,
    select,
    textarea {
        display: inline-flex;
        font-size: 1rem;
        max-width: 100%;
        width: 100%;
        margin-top: 0.4rem;
        margin-bottom: 0.8rem;
        padding: 0.2rem 0.4rem;
        box-sizing: border-box;
    }

    input:not([type='checkbox']),
    select {
        height: 2rem;
        line-height: 1.5;
    }

    input[type='checkbox'] {
        height: 1rem;
        line-height: 1;
    }

    label.checkbox {
        input {
            width: auto;
            vertical-align: baseline;
        }
    }
}
</style>
