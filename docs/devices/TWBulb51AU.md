const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const tzLocal = {
    aOneBacklight: {
        key: ['backlight_led'],
        convertSet: async (entity, key, value, meta) => {
            const state = value.toLowerCase();
            utils.validateValue(state, ['toggle', 'off', 'on']);
            const endpoint = meta.device.getEndpoint(3);
            await endpoint.command('genOnOff', state, {});
            return {state: {backlight_led: state.toUpperCase()}};
        },
    },
    backlight_brightness: {
        key: ['brightness'],
        options: [exposes.options.transition()],
        convertSet: async (entity, key, value, meta) => {
            await entity.command('genLevelCtrl', 'moveToLevel', {level: value, transtime: 0}, utils.getOptions(meta.mapped, entity));
            return {state: {brightness: value}};
        },
        convertGet: async (entity, key, meta) => {
            await entity.read('genLevelCtrl', ['currentLevel']);
        },
    },
};

const disableBatteryRotaryDimmerReporting = async (endpoint) => {
    // The default is for the device to also report the on/off and
    // brightness at the same time as sending on/off and step commands.
    // Disable the reporting by setting the max interval to 0xFFFF.
    await reporting.brightness(endpoint, {max: 0xFFFF});
    await reporting.onOff(endpoint, {max: 0xFFFF});
};

const batteryRotaryDimmer = (...endpointsIds) => ({
    fromZigbee: [fz.battery, fz.command_on, fz.command_off, fz.command_step, fz.command_step_color_temperature],
    toZigbee: [],
    exposes: [e.battery(), e.action([
        'on', 'off', 'brightness_step_up', 'brightness_step_down', 'color_temperature_step_up', 'color_temperature_step_down'])],
    configure: async (device, coordinatorEndpoint, logger) => {
        const endpoints = endpointsIds.map((endpoint) => device.getEndpoint(endpoint));

        // Battery level is only reported on first endpoint
        await reporting.batteryVoltage(endpoints[0]);

        for await (const endpoint of endpoints) {
            await reporting.bind(endpoint, coordinatorEndpoint,
                ['genIdentify', 'genOnOff', 'genLevelCtrl', 'lightingColorCtrl']);

            await disableBatteryRotaryDimmerReporting(endpoint);
        }
    },
    onEvent: async (type, data, device) => {
        // The rotary dimmer devices appear to lose the configured reportings when they
        // re-announce themselves which they do roughly every 6 hours.
        if (type === 'deviceAnnounce') {
            for (const endpoint of device.endpoints) {
                // First disable the default reportings (for the dimmer endpoints only)
                if ([1, 2].includes(endpoint.ID)) {
                    await disableBatteryRotaryDimmerReporting(endpoint);
                }
                // Then re-apply the configured reportings
                for (const c of endpoint.configuredReportings) {
                    await endpoint.configureReporting(c.cluster.name, [{
                        attribute: c.attribute.name, minimumReportInterval: c.minimumReportInterval,
                        maximumReportInterval: c.maximumReportInterval, reportableChange: c.reportableChange,
                    }]);
                }
            }
        }
    },
});

module.exports = [
    {
        zigbeeModel: ['TWBulb51AU'],
        model: 'TWBulb51AU',
        vendor: 'Aurora',
        description: 'AOne GLS Lamp 9W Tunable Dimmable 2200-5000K',
        extend: extend.light_onoff_brightness_colortemp(200, 454),
    },
];