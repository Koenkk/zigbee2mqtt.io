import type {SidebarOptions} from '@vuepress/theme-default';
import {getFiles} from './navbar';

export const sidebar: SidebarOptions = {
    '/devices/': false,
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
                '/guide/configuration/configuration-update.md',
                '/guide/configuration/all-settings.md',
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
                '/guide/usage/health.md',
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

export const sidebarZh: SidebarOptions = {
    '/zh/guide/': [
        '/zh/guide/getting-started/',
        {
            text: '支持的硬件',
            link: '/zh/guide/supported-hardware.md',
            children: [
                {text: '适配器', link: '/zh/guide/adapters/'},
                {text: '设备', link: '/supported-devices/'},
            ],
        },
        {
            text: '安装',
            link: '/zh/guide/installation/',
            children: [...getFiles('zh/guide/installation')],
        },
        {
            text: '配置',
            link: '/zh/guide/configuration/',
            children: [
                '/zh/guide/configuration/adapter-settings.md',
                '/zh/guide/configuration/mqtt.md',
                '/zh/guide/configuration/zigbee-network.md',
                '/zh/guide/configuration/frontend.md',
                '/zh/guide/configuration/devices-groups.md',
                '/zh/guide/configuration/logging.md',
                '/zh/guide/configuration/block-pass-list.md',
                '/zh/guide/configuration/ota-device-updates.md',
                '/zh/guide/configuration/device-availability.md',
                '/zh/guide/configuration/homeassistant.md',
                '/zh/guide/configuration/more-config-options.md',
                '/zh/guide/configuration/configuration-update.md',
                '/zh/guide/configuration/all-settings.md',
            ],
        },
        {
            text: '使用',
            link: '/zh/guide/usage/',
            children: [
                '/zh/guide/usage/pairing_devices.md',
                '/zh/guide/usage/integrations.md',
                '/zh/guide/usage/touchlink.md',
                '/zh/guide/usage/scenes.md',
                '/zh/guide/usage/binding.md',
                '/zh/guide/usage/groups.md',
                '/zh/guide/usage/ota_updates.md',
                '/zh/guide/usage/mqtt_topics_and_messages.md',
                '/zh/guide/usage/exposes.md',
                '/zh/guide/usage/health.md',
            ],
        },
        {
            text: '常见问题',
            link: '/zh/guide/faq/',
        },
    ],

    '/zh/advanced/zigbee/': getFiles('zh/advanced/zigbee'),
    '/zh/advanced/remote-adapter/': getFiles('zh/advanced/remote-adapter'),
    '/zh/advanced/support-new-devices/': getFiles('zh/advanced/support-new-devices'),
};
