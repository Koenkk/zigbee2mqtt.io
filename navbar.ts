import type {NavbarConfig} from '@vuepress/theme-default';
import {resolve} from 'path';
import {readdirSync} from 'fs';

export function getFiles(dir: string) {
    const base = resolve(__dirname, 'docs');
    return readdirSync(resolve(base, dir))
        .filter((file) => file.endsWith('.md') && file !== 'README.md')
        .map((file) => `/${dir}/${file}`);
}

export const navbar: NavbarConfig = [
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
