import {checkDeviceImages} from './check-device-images';
import {checkLinks} from './check-links';
import {checkDeviceImageSize} from './check-device-image-size';
import {checkDeviceNotesCommentLines} from './check-notes-commet';

(async function () {
    const res = (await Promise.allSettled([checkDeviceImages(), checkLinks(), checkDeviceImageSize(), checkDeviceNotesCommentLines()])).filter(
        (r) => r.status === 'rejected',
    );

    // @ts-ignore
    res.forEach((r) => console.log(r.reason));

    if (res.length) {
        process.exit(1);
    } else {
        console.log('All tests passed.');
    }
})();
