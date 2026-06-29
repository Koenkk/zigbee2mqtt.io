const supportedDevices = window.ZIGBEE2MQTT_SUPPORTED_DEVICES;

const exposesSet = new Set();
const vendorSet = new Set();

supportedDevices.forEach(({exposes, vendor}) => {
    vendorSet.add(vendor);
    exposes.forEach((exp) => exposesSet.add(exp));
});

const natSort = (a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'});

export const devices = supportedDevices;
export const vendors = Array.from(vendorSet).sort(natSort);
export const exposes = Array.from(exposesSet).sort(natSort);

export const natSortDevices = (devices) =>
    devices.sort((a, b) => {
        const res = natSort(a.vendor, b.vendor);
        if (res === 0) {
            return natSort(a.model, b.model);
        }
        return res;
    });
