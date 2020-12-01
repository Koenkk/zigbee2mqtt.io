const imageBase = '../images/devices/';
const fs = require('fs');
const path = require('path');

function getImageName(model) {
    const replaceByDash = [new RegExp('/', 'g'), new RegExp(':', 'g'), new RegExp(' ', 'g')];
    let image = model;
    replaceByDash.forEach((r) => image = image.replace(r, '-'));
    return `${image}.jpg`;
}

module.exports = {
    normalizeModel: (model) => {
        const find = '[/| |:]';
        const re = new RegExp(find, 'g');
        return model.replace(re, '_');
    },
    getImage: (definition, imagePathBase) => {
        let result = getImageName(definition.model);

        if (definition.whiteLabelOf && !fs.existsSync(path.join(imagePathBase, result))) {
            result = getImageName(definition.whiteLabelOf.model);
        }

        return imageBase + result;
    },
};
