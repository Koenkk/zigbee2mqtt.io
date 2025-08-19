<template lang="pug">
q-select(
  :label="label"
  filled
  clearable
  use-chips
  use-input
  input-debounce="0"
  :options='filteredOptions'
  @filter='filterFn'
  multiple
  options-dense
  @popup-hide="clearSearch(this)"
  ref="el"
  @update:model-value="hidePopup"
)
  template(v-slot:no-option)
    q-item
      q-item-section.text-grey
        | No results
</template>

<script>
import QItem from 'quasar/src/components/item/QItem';
import QItemSection from 'quasar/src/components/item/QItemSection';
import QSelect from 'quasar/src/components/select/QSelect';
import {defineComponent, isReactive, isRef, ref, watch} from 'vue';

export default defineComponent({
    name: 'multi-select',
    components: {QSelect, QItem, QItemSection},
    props: ['label', 'options'],
    inheritAttrs: true,
    setup(props, {emit, attrs}) {
        const el = ref(null);
        const filteredOptions = ref(props.options);

        if (isRef(props.options) || isReactive(props.options)) {
            watch(props.options, (newOpts) => {
                // v-model is a inherited attribute
                emit(
                    'update:modelValue',
                    attrs.modelValue.value.filter((val) => newOpts.includes(val)),
                );
            });
        }

        const hidePopup = () => {
            el.value.hidePopup();
        };

        return {
            el,
            hidePopup,
            clearSearch(target) {
                setTimeout(() => {
                    target.$el.querySelector('input').value = '';
                }, 10);
            },
            filteredOptions,
            filterFn(val, update) {
                update(() => {
                    const needle = val.toLowerCase();
                    filteredOptions.value = props.options.filter((v) => v.toLowerCase().includes(needle));
                });
            },
        };
    },
});
</script>

<style lang="scss">
@import 'quasar/src/css/variables.sass';

@import 'quasar/src/components/field/QField.sass';
@import 'quasar/src/components/item/QItem.sass';
@import 'quasar/src/components/select/QSelect.sass';
@import 'quasar/src/components/menu/QMenu.sass';
@import 'quasar/src/components/chip/QChip.sass';
@import 'quasar/src/components/dialog/QDialog.sass';
</style>
