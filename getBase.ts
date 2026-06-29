export const domain = 'https://www.zigbee2mqtt.io';
export const isDevelop = !!process.env.DEVELOP_BRANCH;

export function getBase() {
    let base = '/';
    if (isDevelop) base += 'develop/';
    return base as '/' | `/${string}/`;
}
