const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const e = exposes.presets;

const device = {
    zigbeeModel: ['myZigbeeModel'],
    model: 'myModel',
    vendor: 'myFactory',
    description: 'My super lamp!',
    fromZigbee: [fz.on_off, fz.brightness, fz.ignore_basic_report, fz.color_colortemp],
    toZigbee: [tz.light_onoff_brightness, tz.ignore_transition, tz.ignore_rate, tz.effect, tz.light_brightness_move, tz.light_brightness_step, tz.light_colortemp, tz.light_colortemp_move, tz.light_colortemp_step, tz.light_hue_saturation_move, tz.light_hue_saturation_step, tz.light_color, tz.read],
    exposes: [e.light_brightness_colortemp_colorxy()],
};

module.exports = device;
