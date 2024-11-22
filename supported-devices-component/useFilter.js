import {devices, natSortDevices} from './devices';
import {watch} from 'vue';

export function useFilter(filters, devicesFiltered) {
    watch(
        filters,
        () => {
            if (!filters.value) {
                devicesFiltered.value = devices;
                return;
            }

            const {exposes, vendors, search} = filters.value;
            // const sStr = search && search.toLowerCase();
            let searchRxp = false;
            if (search) {
                try {
                    searchRxp = new RegExp(search, 'i');
                } catch (e) {
                    // eslint-disable-next-line
                }
            }

            const res = devices.filter((dev) => {
                if (exposes && !exposes.every((exp) => dev.exposes.includes(exp))) {
                    return false;
                }
                if (vendors && !vendors.includes(dev.vendor)) {
                    return false;
                }
                if (searchRxp && !['model', 'vendor', 'description'].some((k) => searchRxp.test(dev[k]))) {
                    return false;
                }
                return true;
            });

            // Change ref-value after sorting to trigger watcher as late as possible
            devicesFiltered.value = natSortDevices(res);
        },
        {immediate: true},
    );
}
