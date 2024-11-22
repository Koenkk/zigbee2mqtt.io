<template lang="pug">
.supported-devices
  .filters
    filters(v-model="currentFilters")

  infinite-scroll(@load="loadItemsByScroll")
    transition-group(tag="div" class="devices-list" name="device" )
      device(
        v-for="device in devicesToShow"
        :key="device.vendor + device.model"
        :device="device"
        @click="storePosition"
        @vendor-click="onVendorClick"
      )
      p(v-if="devicesToShow.length === 0" :key="'no-results'") No devices found.
</template>

<script>
import {darkModeSymbol} from '@vuepress/theme-default/lib/client/composables/useDarkMode.js';
import Dark from 'quasar/src/plugins/dark/Dark';
import SessionStorage from 'quasar/src/plugins/storage/SessionStorage';
import {inject, onMounted, ref, watch} from 'vue';
import Device from './components/device.vue';
import Filters from './components/filters.vue';
import InfiniteScroll from './components/infinite-scroll.vue';
import {useFilter} from './useFilter';

export default {
    name: 'SupportedDevices',

    components: {
        InfiniteScroll,
        Filters,
        Device,
    },

    setup() {
        // adopt dark-mode from vuepress for quasar
        const darkMode = inject(darkModeSymbol);
        watch(darkMode, (isDark) => Dark.set(isDark), {immediate: true});

        const currentFilters = ref(null);
        const loadIndex = ref(SessionStorage.getItem('loadIndex') || 1);

        const devicesFiltered = ref([]);
        const devicesToShow = ref([]);

        watch(devicesFiltered, () => {
            devicesToShow.value = devicesFiltered.value.slice(0, 20);
            loadIndex.value = 1;
        });

        watch(loadIndex, (v) => {
            devicesToShow.value = devicesFiltered.value.slice(0, v * 20);
        });

        useFilter(currentFilters, devicesFiltered);

        const loadItemsByScroll = () => {
            if (loadIndex.value * 20 >= devicesFiltered.value.length) return;
            loadIndex.value++;
        };

        const storePosition = () => {
            SessionStorage.set('zigbee2mqtt-devices-overview', {
                loadIndex: loadIndex.value,
                scrollTop: window.scrollY,
            });
        };

        const onVendorClick = (vendor) => {
            if (!currentFilters.value) {
                currentFilters.value = {vendors: [vendor]};
            } else if (!currentFilters.value.vendors) {
                currentFilters.value.vendors = [vendor];
            } else if (!currentFilters.value.vendors.includes(vendor)) {
                currentFilters.value.vendors.push(vendor);
            }
        };

        // Restore loadIndex and scroll position for nice browser-back behaviour
        onMounted(() => {
            const sessionData = SessionStorage.getItem('zigbee2mqtt-devices-overview') || {};
            if (sessionData.loadIndex) {
                loadIndex.value = sessionData.loadIndex;
            }
            if (sessionData.scrollTop) {
                setTimeout(() => {
                    window.scrollTo(null, sessionData.scrollTop);
                });
            }
        });

        return {
            currentFilters,
            devicesToShow,
            loadItemsByScroll,
            storePosition,
            onVendorClick,
        };
    },
};
</script>

<style lang="scss">
/* Quasar Core */
@import 'quasar/src/css/helpers/string.sass';
@import 'quasar/src/css/helpers/math.sass';
@import 'quasar/src/css/variables.sass';
@import 'quasar/src/css/normalize.sass';
@import 'quasar/src/css/core/animations.sass';
@import 'quasar/src/css/core/colors.sass';
@import 'quasar/src/css/core/elevation.sass';
@import 'quasar/src/css/core/flex.sass';
@import 'quasar/src/css/core/helpers.sass';
@import 'quasar/src/css/core/mouse.sass';
@import 'quasar/src/css/core/orientation.sass';
@import 'quasar/src/css/core/positioning.sass';
@import 'quasar/src/css/core/size.sass';
@import 'quasar/src/css/core/touch.sass';
@import 'quasar/src/css/core/transitions.sass';
@import 'quasar/src/css/core/visibility.sass';
@import '@quasar/extras/material-icons/material-icons.css';

.supported-devices {
    @import 'quasar/src/css/core/typography.sass';

    width: 345px;
    margin-bottom: 2rem;
    color: #606c71;
    font-size: 1rem;

    @media (max-width: 370px) {
        width: auto;
    }

    @media (min-width: 720px) {
        width: 705px;
    }
    @media (min-width: 1090px) {
        width: 1065px;
    }

    .devices-list {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        z-index: 2;
        width: 100%;

        .device-move {
            transition: all 600ms ease-out 50ms;
        }
        .device-enter-active {
            transition: all 500ms ease-out;
        }
        .device-leave-active {
            transition: all 500ms ease-in;
            position: absolute;
            height: 265px;
            overflow: hidden;
            z-index: 0;
        }
        .device-enter,
        .device-leave-to {
            opacity: 0;
        }
        .device-enter {
            transform: scale(0.9);
        }
    }
}
</style>
