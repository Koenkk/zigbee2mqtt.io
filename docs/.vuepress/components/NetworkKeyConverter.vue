<template lang="pug">
div.network-key-converter
  textarea(v-model="inputKey" placeholder="Paste your Network-Key in DEC here")
  textarea(v-model="outputKey" placeholder="Network-Key in HEX" disabled)
</template>

<script lang="ts">
import {defineComponent, ref, SetupContext, watch} from 'vue';

export default defineComponent({
    name: 'NetworkKeyConverter',
    setup(props, ctx: SetupContext) {
        const inputKey = ref('');
        const outputKey = ref('');

        watch(inputKey, (k) => {
            if (!k.trim().length) {
                outputKey.value = '';
                return;
            }

            let res = [];
            try {
                res = JSON.parse(k);
            } catch (e) {
                res = k.split(/\n\r?/).map((l) => {
                    const m = l.match(/(\d)+/);
                    return (m && m[0]) || 0;
                });
            }
            if (res.length != 16) {
                outputKey.value = 'Sorry, could not parse 16 bytes from you input';
            } else {
                outputKey.value = res.map((m) => ('0' + parseInt(m, 10).toString(16)).slice(-2).toUpperCase()).join(':');
            }
        });

        return {
            inputKey,
            outputKey,
        };
    },
});
</script>

<style lang="scss">
.network-key-converter {
    display: flex;
    justify-content: space-between;

    textarea {
        height: 80px;
        width: 49%;
    }

    @media (max-width: 480px) {
        flex-wrap: wrap;
        textarea {
            width: 100%;
            margin-bottom: 5px;
        }
    }
}
</style>
