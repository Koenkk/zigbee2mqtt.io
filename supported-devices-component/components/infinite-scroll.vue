<script>
import {debounce_leadingTrailing} from '../utils';
import {h, onMounted, onUnmounted, ref} from 'vue';

export default {
    name: 'InfiniteScroll',
    props: {
        debounce: {
            default: 350,
            type: Number,
        },
        offset: {
            default: 500,
            type: Number,
        },
    },
    emits: ['load'],

    setup(props, {slots, emit}) {
        const el = ref(null);

        const handleScroll = debounce_leadingTrailing(() => {
            if (!el.value) return;
            if (el.value.getBoundingClientRect().bottom - window.innerHeight < props.offset) {
                emit('load');
            }
        }, props.debounce);

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return () =>
            h(
                'div',
                {
                    class: 'q-infinite-scroll',
                    ref: el,
                },
                slots.default(),
            );
    },
};
</script>
