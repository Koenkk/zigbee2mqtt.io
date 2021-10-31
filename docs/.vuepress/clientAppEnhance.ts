import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(async ({ app, router, siteData }) => {
  // @ts-ignore
  if (!__VUEPRESS_SSR__) {
    const Quasar = await import("quasar/src/install-quasar.js");
    app.use(Quasar.default, {
      config: {},
      plugins: {},
    });
  }
})
