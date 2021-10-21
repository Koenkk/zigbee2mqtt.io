import type { SidebarConfig } from '@vuepress/theme-default'
import { getFiles } from "./navbar";

export const sidebar: SidebarConfig = {
  '/guide/': [
    '/guide/what-do-i-need/',
    {
      text: 'Supported Hardware',
      link: '/guide/supported-hardware.md',
      children: [
        { text: 'Adapters', link: '/guide/adapters/' },
        { text: 'Devices', link: '/supported-devices/' },
      ]
      // children: getFiles('guide/adapters')
    },
    {
      text: 'Installation',
      link: '/guide/installation/',
      children: getFiles('guide/installation')
    },
    {
      text: 'Configuration',
      link: '/guide/configuration/',
      children: [
        {
          text: 'Zigbee2MQTT',
          link: '/guide/configuration/'
        },
        '/guide/configuration/frontend.md'
      ]
    },
    {
      text: 'Usage',
      link: '/guide/usage/',
      children: [
        '/guide/usage/pairing_devices.md',
        '/guide/usage/touchlink.md',
        '/guide/usage/mqtt_topics_and_message_structure.md',
        '/guide/usage/exposes.md',
        '/guide/usage/scenes.md',
        '/guide/usage/availability.md',
        '/guide/usage/binding.md',
        '/guide/usage/groups.md',
        '/guide/usage/ota_updates.md',
        '/guide/usage/zigbee_network.md',
        '/guide/usage/FAQ.md',
        '/guide/usage/debug.md',
      ]
    },
    {
      text: 'Development',
      link: '/guide/development/',
      children: getFiles('guide/development')
    },
  ],
};
