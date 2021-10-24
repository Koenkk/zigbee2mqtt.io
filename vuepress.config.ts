import { navbar } from "./navbar";
import { sidebar } from "./sidebar";
import * as path from "path";
import { DefinePlugin, IgnorePlugin } from 'webpack';

export const domain = 'https://psi-4ward.github.io';
export const base = '/zigbee2mqtt.io/';
const pagePatterns = ['**/*.md', '!.vuepress', '!node_modules'];

// Ability to exclude device-page rendering to save time while in dev
if (process.env.EXCLUDE_DEVICES) {
  pagePatterns.push('!devices');
}

export default {
  base,
  title: 'Zigbee2MQTT',
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
      href: `${ base }favicon-16x16.png`,
    }],
    ['link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `${ base }favicon-32x32.png`,
    }],
    ['link', {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      href: `${ base }apple-touch-icon.png`,
    }],
    ['link', {
      rel: 'manifest',
      href: `${ base }site.webmanifest`,
    }],
    ['link', {
      rel: 'mask-icon',
      color: '#ffc135',
      href: `${ base }safari-pinned-tab.svg`,
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
    repo: 'psi-4ward/zigbee2mqtt.io',
    docsBranch: 'master',
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
    //  chain.cache({ 'type': 'filesystem' });
    },
  },

  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, 'docs/.vuepress/components'),
        components: {
          SupportedDevices: path.resolve(__dirname, 'supported-devices-component/SupportedDevices.vue'),
        },
      },
    ],
  ],
}
