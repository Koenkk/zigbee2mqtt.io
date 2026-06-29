<template lang="pug">
.device-filters
  .vendor-filter
    multi-select(
      label="Vendor"
      :options="vendors"
      v-model="vendorFilter"
    )
  .exposes-filter
    multi-select(
      label="Exposes"
      :options="exposes"
      v-model="exposesFilter"
    )
  .search-filter
    q-input(
      v-model='searchFilter'
      filled
      :debounce="500"
      type='search'
      placeholder="Search"
      label="Search"
      clearable
    )
      template(v-slot:append)
          q-icon(name='info')
          q-tooltip( :offset="[0, 15]" self="bottom middle" )
            | RegEx support. E.g you can use
            code  (wall|switch)
            |  to search for wall OR switch.
</template>

<script>
import QIcon from 'quasar/src/components/icon/QIcon';
import QInput from 'quasar/src/components/input/QInput';
import QTooltip from 'quasar/src/components/tooltip/QTooltip';
import {defineComponent, ref, watch} from 'vue';
import MultiSelect from '../components/multi-select.vue';
import {exposes, vendors} from '../devices';
import hashStore from '../hash-store';

hashStore.arrayKeys.push('v');
hashStore.arrayKeys.push('e');

export default defineComponent({
    name: 'filters',
    components: {
        QInput,
        QTooltip,
        QIcon,
        MultiSelect,
    },
    props: ['modelValue'],

    setup(props, {emit}) {
        const filtersFromHash = hashStore.parseHash();

        const exposesFilter = ref(filtersFromHash.e || null);
        const vendorsFilter = ref(filtersFromHash.v || null);
        const searchFilter = ref(filtersFromHash.s || null);

        const emptyArrToNull = (ref) => () => {
            if (Array.isArray(ref.value) && ref.value.length === 0) {
                ref.value = null;
            }
        };

        watch(
            () => props.modelValue,
            (modelValue) => {
                if (!modelValue) return;
                const {exposes, vendors, search} = modelValue;
                if (exposes) exposesFilter.value = exposes;
                if (vendors) vendorsFilter.value = vendors;
                if (search) searchFilter.value = search;
            },
        );

        const emitFilters = () => {
            hashStore.updateHash({
                e: exposesFilter.value,
                v: vendorsFilter.value,
                s: searchFilter.value,
            });

            if (exposesFilter.value || vendorsFilter.value || searchFilter.value) {
                emit('update:modelValue', {
                    exposes: exposesFilter.value,
                    vendors: vendorsFilter.value,
                    search: searchFilter.value,
                });
            } else {
                emit('update:modelValue', null);
            }
        };
        emitFilters();

        // Clear using chip-remove results in empty arrays
        watch(exposesFilter, emptyArrToNull(exposesFilter));
        watch(vendorsFilter, emptyArrToNull(vendorsFilter));

        watch(exposesFilter, emitFilters);
        watch(vendorsFilter, emitFilters);
        watch(searchFilter, emitFilters);

        // const searchKeyHandler = (ev) => {
        //   if (ev.key === '/' && ev.target.tagName !== 'INPUT') {
        //     ev.preventDefault();
        //     document.querySelector('.search-filter input').focus();
        //   }
        // };
        //
        // onMounted(() => {
        //   document.body.addEventListener('keypress', searchKeyHandler);
        // });
        //
        // onBeforeUnmount(() => {
        //   document.removeEventListener('keypress', searchKeyHandler);
        // })

        return {
            // searchPlaceholder: ref('Press / to search'),
            exposes,
            vendors,
            exposesFilter,
            vendorFilter: vendorsFilter,
            searchFilter,
        };
    },
});
</script>

<style lang="scss">
@import 'quasar/src/css/variables.sass';
@import 'quasar/src/components/tooltip/QTooltip';

.device-filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > div {
        margin-top: 10px !important;
        width: 345px;
        @media screen and (max-width: 720px) {
            margin-right: 0;
        }
        @media screen and (min-width: 720px) and (max-width: 1080px) {
            &:last-child {
                flex-grow: 1;
            }
        }
    }
}
</style>
