<template lang="pug">
.back-to-top
  transition(name="fade")
    q-btn(
      v-if="visible"
      @click="scrollToTop"
      icon="keyboard_arrow_up"
      round
    )
</template>


<script>
import { debounce_leadingTrailing } from "@/utils";
import SessionStorage from "quasar/src/plugins/SessionStorage";
import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";

export default defineComponent({
  name: "BackToTop",
  setup() {
    const visible = ref(false);

    const onScroll = debounce_leadingTrailing(() => {
      visible.value = window.scrollY > 500;
    }, 500);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      SessionStorage.remove('zigbee2mqtt-devices-overview');
    }

    onMounted(() => window.addEventListener('scroll', onScroll))
    onBeforeUnmount(() => window.addEventListener('scroll', onScroll))

    return {
      visible,
      scrollToTop,
    };
  }
});
</script>


<style lang="scss">
@import '~quasar/src/css/variables.sass';
@import "~quasar/src/components/btn/QBtn.sass";

.back-to-top {
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .q-btn {
    z-index: 100;
    transition: opacity .5s ease;
    position: fixed;
    right: 10px;
    bottom: 10px;
    background-color: #165D93;
    color: #ffffff;
  }
}
</style>
