<script>
import { h, onMounted, onUnmounted, ref } from "vue";

function debounce_leadingTrailing(func, timeout = 300) {
  let timer;
  let trailing = false;
  return (...args) => {
    if (!timer) {
      func.apply(this, args);
      timer = setTimeout(() => {
        timer = undefined;
        if (trailing) {
          func.apply(this, args);
        }
        trailing = false;
      }, timeout);
    } else {
      trailing = true;
    }
  };
}

export default {
  name: 'InfiniteScroll',
  props: {
    debounce: {
      default: 350,
      type: Number
    },
    offset: {
      default: 500,
      type: Number
    }
  },
  emits: ['load'],

  setup(props, { slots, emit }) {
    const el = ref(null);

    const handleScroll = debounce_leadingTrailing(() => {
      if (!el.value) return;
      if (el.value.getBoundingClientRect().bottom - window.innerHeight < props.offset) {
        emit('load');
      }
    }, props.debounce);

    onMounted(() => {
      window.addEventListener("scroll", handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll)
    })


    return () => h('div', {
      class: 'q-infinite-scroll',
      ref: el
    }, slots.default());
  }
}
</script>

