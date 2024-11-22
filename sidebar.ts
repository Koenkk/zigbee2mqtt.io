import type {SidebarConfig} from '@vuepress/theme-default';
import {getFiles} from './navbar';

export const sidebar: SidebarConfig = {
    '/guide/': [
        '/guide/getting-started/',
        {
            text: 'Supported Hardware',
            link: '/guide/supported-hardware.md',
            children: [
                {text: 'Adapters', link: '/guide/adapters/'},
                {text: 'Devices', link: '/supported-devices/'},
            ],
        },
        {
            text: 'Installation',
            link: '/guide/installation/',
            children: [...getFiles('guide/installation')],
        },
        {
            text: 'Configuration',
            link: '/guide/configuration/',
            children: [
                '/guide/configuration/adapter-settings.md',
                '/guide/configuration/mqtt.md',
                '/guide/configuration/zigbee-network.md',
                '/guide/configuration/frontend.md',
                '/guide/configuration/devices-groups.md',
                '/guide/configuration/logging.md',
                '/guide/configuration/block-pass-list.md',
                '/guide/configuration/ota-device-updates.md',
                '/guide/configuration/device-availability.md',
                '/guide/configuration/homeassistant.md',
                '/guide/configuration/more-config-options.md',
            ],
        },
        {
            text: 'Usage',
            link: '/guide/usage/',
            children: [
                '/guide/usage/pairing_devices.md',
                '/guide/usage/integrations.md',
                '/guide/usage/touchlink.md',
                '/guide/usage/scenes.md',
                '/guide/usage/binding.md',
                '/guide/usage/groups.md',
                '/guide/usage/ota_updates.md',
                '/guide/usage/mqtt_topics_and_messages.md',
                '/guide/usage/exposes.md',
            ],
        },
        {
            text: 'FAQ',
            link: '/guide/faq/',
        },
    ],

    '/advanced/zigbee/': getFiles('advanced/zigbee'),
    '/advanced/remote-adapter/': getFiles('advanced/remote-adapter'),
    '/advanced/support-new-devices/': getFiles('advanced/support-new-devices'),
};
