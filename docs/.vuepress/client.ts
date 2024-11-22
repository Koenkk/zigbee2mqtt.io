import {defineClientConfig} from '@vuepress/client';

export default defineClientConfig({
    async enhance({app, router, siteData}) {
        // @ts-ignore
        if (!__VUEPRESS_SSR__) {
            const Quasar = await import('quasar/src/install-quasar.js');
            app.use(Quasar.default);
        }
    },
    setup() {},
    rootComponents: [],
});
