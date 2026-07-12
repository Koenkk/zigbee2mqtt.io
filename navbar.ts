import type {NavbarOptions} from '@vuepress/theme-default';
import {resolve} from 'path';
import {existsSync, readdirSync} from 'fs';

export function getFiles(dir: string) {
    const base = resolve(__dirname, 'docs');
    const full = resolve(base, dir);
    if (!existsSync(full)) {
        return [];
    }
    return readdirSync(full)
        .filter((file) => file.endsWith('.md') && file !== 'README.md')
        .map((file) => `/${dir}/${file}`);
}

export const navbar: NavbarOptions = [
    {
        text: 'Guide',
        children: [
            '/guide/getting-started/',
            {
                link: '/guide/adapters/',
                text: 'Supported Adapters',
                activeMatch: '(/guide/adapters/|/guide/supported-hardware)',
            },
            {
                text: 'Supported Devices',
                link: '/supported-devices/',
            },
            '/guide/installation/',
            '/guide/configuration/',
            {
                text: 'Usage',
                link: '/guide/usage/pairing_devices.md',
                activeMatch: '/guide/usage/',
            },
            '/guide/faq/',
        ],
    },
    {
        text: 'Devices',
        link: '/supported-devices/',
        activeMatch: '^/(supported-)?devices/',
    },
    {
        text: 'Advanced',
        children: [
            {text: 'Zigbee', children: getFiles('advanced/zigbee')},
            {text: 'Support new devices', children: getFiles('advanced/support-new-devices')},
            {text: 'Remote Adapter', children: getFiles('advanced/remote-adapter')},
            {text: 'More', children: getFiles('advanced/more')},
        ],
    },
    {
        text: 'Support',
        children: [
            {
                text: 'Forum',
                link: 'https://github.com/Koenkk/zigbee2mqtt/discussions',
            },
            {
                text: 'Discord',
                link: 'https://discord.gg/NyseBeK',
            },
            {
                text: 'Issues',
                link: 'https://github.com/Koenkk/zigbee2mqtt/issues',
            },
            {
                text: 'Donate',
                link: 'https://github.com/Koenkk/zigbee2mqtt',
            },
        ],
    },
    {
        text: 'GitHub',
        link: 'https://github.com/Koenkk/zigbee2mqtt',
    },
];

export const navbarZh: NavbarOptions = [
    {
        text: '指南',
        children: [
            '/zh/guide/getting-started/',
            {
                link: '/zh/guide/adapters/',
                text: '支持的适配器',
                activeMatch: '(/zh/guide/adapters/|/zh/guide/supported-hardware)',
            },
            {
                text: '支持的设备',
                link: '/supported-devices/',
            },
            '/zh/guide/installation/',
            '/zh/guide/configuration/',
            {
                text: '使用',
                link: '/zh/guide/usage/pairing_devices.md',
                activeMatch: '/zh/guide/usage/',
            },
            '/zh/guide/faq/',
        ],
    },
    {
        text: '设备',
        link: '/supported-devices/',
        activeMatch: '^/(supported-)?devices/',
    },
    {
        text: '进阶',
        children: [
            {text: 'Zigbee', children: getFiles('zh/advanced/zigbee')},
            {text: '支持新设备', children: getFiles('zh/advanced/support-new-devices')},
            {text: '远程适配器', children: getFiles('zh/advanced/remote-adapter')},
            {text: '更多', children: getFiles('zh/advanced/more')},
        ],
    },
    {
        text: '支持',
        children: [
            {text: '论坛', link: 'https://github.com/Koenkk/zigbee2mqtt/discussions'},
            {text: 'Discord', link: 'https://discord.gg/NyseBeK'},
            {text: '问题反馈', link: 'https://github.com/Koenkk/zigbee2mqtt/issues'},
            {text: '捐赠', link: 'https://github.com/Koenkk/zigbee2mqtt'},
        ],
    },
    {
        text: 'GitHub',
        link: 'https://github.com/Koenkk/zigbee2mqtt',
    },
];
