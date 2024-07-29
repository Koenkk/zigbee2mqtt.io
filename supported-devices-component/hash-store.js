export default {
    arrayKeys: [],

    parseHash() {
        const entries = location.hash
            .substr(1)
            .split('&')
            .map((pairs) => pairs.split('='))
            .map(([k, v]) => {
                if (this.arrayKeys.includes(k)) {
                    return [k, v.split(',').map((val) => decodeURIComponent(val))];
                } else {
                    return [k, decodeURIComponent(v)];
                }
            })
            .filter(([k, v]) => k.length > 0 && v.length > 0);
        return Object.fromEntries(entries);
    },

    updateHash(obj) {
        const hashObj = this.parseHash();
        Object.entries(obj).forEach(([k, v]) => {
            hashObj[k] = v;
        });
        let hash = '#';
        Object.entries(hashObj).forEach(([k, v]) => {
            if (v === undefined || v === null || v === '') return;
            if (this.arrayKeys.includes(k)) {
                const vals = v.map((val) => encodeURIComponent(val)).join(',');
                hash += `${k}=${vals}&`;
            } else {
                hash += `${k}=${encodeURIComponent(v)}&`;
            }
        });
        location.hash = hash.substr(0, hash.length - 1);
    },
};
