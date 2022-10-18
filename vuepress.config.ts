import { navbar } from "./navbar";
import { sidebar } from "./sidebar";
import * as path from "path";
import pkg from 'webpack';
const { DefinePlugin } = pkg;

export const domain = 'https://www.zigbee2mqtt.io';
const isDevelop = !!process.env.DEVELOP_BRANCH;

export function getBase() {
  let base = '/';
  if (isDevelop) base += 'develop/';
  return base;
}
const pagePatterns = ['**/*.md', '!.vuepress', '!node_modules'];

// Ability to exclude device-page rendering to save time while in dev
if (process.env.EXCLUDE_DEVICES) {
  pagePatterns.push('!devices');
}

const conf = {
  base: getBase(),
  title: 'Zigbee2MQTT' + ( isDevelop ? ' develop' : '' ),
  description: 'Zigbee to MQTT bridge, get rid of your proprietary Zigbee bridges',

  dest: 'dist',
  public: 'public',
  temp: '.temp',
  cache: '.cache',

  pagePatterns,

  head: [
    ['script', {}, `if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { window.document.querySelector('html').classList.add('dark');} `
    ],
    ['link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `${ getBase() }favicon-16x16.png`,
    }],
    ['link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `${ getBase() }favicon-32x32.png`,
    }],
    ['link', {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      href: `${ getBase() }apple-touch-icon.png`,
    }],
    ['link', {
      rel: 'manifest',
      href: `${ getBase() }site.webmanifest`,
    }],
    ['link', {
      rel: 'mask-icon',
      color: '#ffc135',
      href: `${ getBase() }safari-pinned-tab.svg`,
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#ffc135',
    }],
    ['meta', {
      name: 'theme-color',
      content: '#ffc135',
    }],
  ],

  themeConfig: {
    repo: 'Koenkk/zigbee2mqtt.io',
    docsBranch: isDevelop ? 'develop' : 'master',
    editLinkText: '✏ Help to make the docu better and edit this page on Github ✌',
    logo: '/logo.png',
    docsDir: 'docs',
    navbar,
    sidebar,
    sidebarDepth: 2,
    contributors: false,
    themePlugins: {
      git: true
    }
  },

  debug: false,

  bundler: '@vuepress/bundler-webpack',
  bundlerConfig: {
    chainWebpack: (chain) => {
      chain.plugin('define-quasar')
        .use(DefinePlugin, [{
          __QUASAR_VERSION__: `'dev'`,
          __QUASAR_SSR__: false,
          __QUASAR_SSR_SERVER__: false,
          __QUASAR_SSR_CLIENT__: false,
          __QUASAR_SSR_PWA__: false
        }]);
    },
  },

  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-H74W4PSJDZ',
      },
    ],
    [
      'vuepress-plugin-sitemap2',
      { hostname: domain }
    ],
    [
      '@vuepress/docsearch',
      {
        apiKey: '662e98933c5c5513d7488c30a98770f1',
        indexName: 'zigbee2mqtt.io',
        appId: 'K1BM3QYQ34',
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, 'docs/.vuepress/components'),
        components: {
          SupportedDevices: path.resolve(__dirname, 'supported-devices-component/SupportedDevices.vue'),
        },
      },
    ],
    [
      path.resolve(__dirname, './docs/.vuepress/defaultPageClassPlugin.ts'),
    ],
  ],
}

if(isDevelop) {
  conf.head.push(['meta', { name: 'robots', content: 'noindex' }]);
}

export default conf;
