const imageBase = '../images/devices/';

module.exports = {
    normalizeModel: (model) => {
        const find = '[/| |:]';
        const re = new RegExp(find, 'g');
        return model.replace(re, '_');
    },
    getImage: (model) => {
        const replaceByDash = [new RegExp('/', 'g'), new RegExp(':', 'g'), new RegExp(' ', 'g')];
        let image = model;
        replaceByDash.forEach((r) => image = image.replace(r, '-'));
        image = imageBase + `${image}.jpg`;
        return image;
    },
};
