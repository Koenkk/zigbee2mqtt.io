const access = {
    STATE: 1,
    SET: 2,
    STATE_SET: 3,
    GET: 4,
    STATE_GET: 5,
    ALL: 7,
};

export function generateExpose(definition) {
    return `
## Exposes

${(typeof definition.exposes === 'function' ? definition.exposes() : definition.exposes).map((e) => getExposeDocs(e, definition)).join('\n\n')}
`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function uncapitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

function compositeDocs(composite) {
    const value = `{${composite.features.map((e) => `"${e.property}": VALUE`).join(', ')}}`;

    let note = [];
    for (const feature of composite.features) {
        let ft = '';
        if (feature.type === 'binary') {
            ft = `allowed values: \`${feature.value_on}\` or \`${feature.value_off}\``;
        } else if (feature.type === 'enum') {
            ft = `allowed values: ${feature.values.map((v) => `\`${v}\``).join(', ')}`;
        } else if (feature.type === 'numeric') {
            ft = [
                feature.value_min ? `min value is ${feature.value_min}` : null,
                feature.value_max ? `max value is ${feature.value_max}` : null,
                feature.unit ? `unit is ${feature.unit}` : null,
            ]
                .filter((e) => e)
                .join(', ');
        } else if (feature.type === 'text' || feature.type === 'list') {
            // do nothing on purpose
        } else {
            throw new Error(`Unsupported composite feature: ${feature.type}`);
        }

        note.push(`- \`${feature.name}\` (${feature.type})${feature.description ? ': ' + feature.description + '' : ''} ${ft}`);
    }
    return {value, note};
}

function getExposeDocs(expose, definition) {
    const lines = [];
    const title = [];

    const onWithTimedOff = () => {
        lines.push(``);
        lines.push(`#### On with timed off`);
        lines.push(
            `When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property \`on_time\` to the payload which is the time in seconds the state should remain on.`,
        );
        lines.push(
            `Additionally an \`off_wait_time\` property can be added to the payload to specify the cooldown time in seconds when the ${expose.type} will not answer to other on with timed off commands.`,
        );
        lines.push(`Support depends on the ${expose.type} firmware. Some devices might require both \`on_time\` and \`off_wait_time\` to work`);
        lines.push(`Examples : \`{"state" : "ON", "on_time": 300}\`, \`{"state" : "ON", "on_time": 300, "off_wait_time": 120}\`.`);
    };

    if (expose.label) title.push(expose.type);
    if (expose.endpoint) title.push(`${expose.endpoint} endpoint`);
    lines.push(`### ${capitalizeFirstLetter(expose.label ? expose.label : expose.type)} ${title.length > 0 ? `(${title.join(', ')})` : ''}`);

    if (['numeric', 'binary', 'text', 'enum'].includes(expose.type)) {
        if (expose.description) {
            lines.push(expose.description + '.');
        }

        if (expose.access & access.STATE) {
            lines.push(`Value can be found in the published state on the \`${expose.property}\` property.`);
        } else {
            lines.push(`Value will **not** be published in the state.`);
        }

        if (expose.access === access.STATE) {
            lines.push(`It's not possible to read (\`/get\`) or write (\`/set\`) this value.`);
        } else {
            if (expose.access & access.GET) {
                lines.push(
                    `To read (\`/get\`) the value publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/get\` with payload \`{"${expose.property}": ""}\`.`,
                );
            } else {
                lines.push(`It's not possible to read (\`/get\`) this value.`);
            }
            if (expose.access & access.SET) {
                lines.push(
                    `To write (\`/set\`) a value publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${expose.property}": NEW_VALUE}\`.`,
                );
            } else {
                lines.push(`It's not possible to write (\`/set\`) this value.`);
            }
        }

        if (expose.type === 'numeric') {
            if (expose.value_min !== undefined && expose.value_max !== undefined) {
                lines.push(`The minimal value is \`${expose.value_min}\` and the maximum value is \`${expose.value_max}\`.`);
            }

            if (expose.unit) {
                lines.push(`The unit of this value is \`${expose.unit}\`.`);
            }

            if (expose.presets) {
                lines.push(`Besides the numeric values the following values are accepted: ${expose.presets.map((p) => `\`${p.name}\``).join(', ')}.`);
            }
        }

        if (expose.type === 'binary') {
            if (expose.value_on !== undefined && expose.value_off !== undefined) {
                lines.push(`If value equals \`${expose.value_on}\` ${uncapitalizeFirstLetter(expose.label)} is ON, if \`${expose.value_off}\` OFF.`);
            }
        }

        if (expose.type === 'enum') {
            lines.push(`The possible values are: ${expose.values.map((e) => `\`${e}\``).join(', ')}.`);
        }
    } else if (['switch', 'lock', 'cover', 'fan'].includes(expose.type)) {
        const state = expose.features.find((e) => e.name === 'state');
        const stateStr = expose.type === 'cover' ? `(value is \`OPEN\` or \`CLOSE\`)` : `(value is \`${state.value_on}\` or \`${state.value_off}\`)`;
        lines.push(`The current state of this ${expose.type} is in the published state under the \`${state.property}\` property ${stateStr}.`);

        if (state.access & access.SET) {
            if (expose.type === 'switch') {
                lines.push(
                    `To control this ${expose.type} publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${state.property}": "${state.value_on}"}\`, \`{"${state.property}": "${state.value_off}"}\` or \`{"${state.property}": "${state.value_toggle}"}\`.`,
                );
            } else if (state.type === 'enum') {
                lines.push(
                    `To control this ${expose.type} publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload ${state.values.map((v) => `\`{"${state.property}": "${v}"}\``).join(', ')}.`,
                );
            } else {
                lines.push(
                    `To control this ${expose.type} publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${state.property}": "${state.value_on}"}\` or \`{"${state.property}": "${state.value_off}"}\`.`,
                );
            }
        } else {
            lines.push(`It's not possible to write (\`/set\`) this value.`);
        }

        if (state.access & access.GET) {
            lines.push(
                `To read the current state of this ${expose.type} publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/get\` with payload \`{"${state.property}": ""}\`.`,
            );
        } else {
            lines.push(`It's not possible to read (\`/get\`) this value.`);
        }

        const on_time = definition.toZigbee.find((t) => t.key?.includes('on_time'));
        if (on_time && expose.type === 'switch' && state.access & access.SET) {
            onWithTimedOff();
        }

        if (expose.type === 'cover') {
            for (const e of expose.features.filter((e) => e.name === 'position' || e.name === 'tilt')) {
                lines.push(
                    `To change the ${uncapitalizeFirstLetter(e.label)} publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${e.property}": VALUE}\` where \`VALUE\` is a number between \`${e.value_min}\` and \`${e.value_max}\`.`,
                );
            }
        }

        if (expose.type === 'fan') {
            const mode = expose.features.find((e) => e.name === 'mode');
            if (mode) {
                lines.push(
                    `To change the mode publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${mode.property}": VALUE}\` where \`VALUE\` can be: ${mode.values.map((e) => `\`${e}\``).join(', ')}.`,
                );
            }
        }

        if (expose.type === 'lock') {
            const lockState = expose.features.find((e) => e.name === 'lock_state');
            if (lockState) {
                lines.push(
                    `This lock exposes a lock state which can be found in the published state under the \`lock_state\` property. It's not possible to read (\`/get\`) or write (\`/set\`) this value. The possible values are: ${lockState.values.map((e) => `\`${e}\``).join(', ')}.`,
                );
            }
        }
    } else if (expose.type === 'light') {
        const state = expose.features.find((e) => e.name === 'state');
        const brightness = expose.features.find((e) => e.name === 'brightness');
        const colorTemp = expose.features.find((e) => e.name === 'color_temp');
        const colorTempStartup = expose.features.find((e) => e.name === 'color_temp_startup');
        const colorXY = expose.features.find((e) => e.name === 'color_xy');
        const colorHS = expose.features.find((e) => e.name === 'color_hs');
        lines.push(`This light supports the following features: ${expose.features.map((e) => `\`${e.name}\``).join(', ')}.`);
        if (state) {
            lines.push(
                `- \`state\`: To control the state publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${state.property}": "${state.value_on}"}\`, \`{"${state.property}": "${state.value_off}"}\` or \`{"${state.property}": "${state.value_toggle}"}\`. To read the state send a message to \`zigbee2mqtt/FRIENDLY_NAME/get\` with payload \`{"${state.property}": ""}\`.`,
            );
        }
        if (brightness) {
            lines.push(
                `- \`brightness\`: To control the brightness publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${brightness.property}": VALUE}\` where \`VALUE\` is a number between \`${brightness.value_min}\` and \`${brightness.value_max}\`. To read the brightness send a message to \`zigbee2mqtt/FRIENDLY_NAME/get\` with payload \`{"${brightness.property}": ""}\`.`,
            );
        }
        if (colorTemp) {
            const presets = `Besides the numeric values the following values are accepted: ${colorTemp.presets.map((p) => `\`${p.name}\``).join(', ')}.`;
            lines.push(
                `- \`color_temp\`: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${colorTemp.property}": VALUE}\` where \`VALUE\` is a number between \`${colorTemp.value_min}\` and \`${colorTemp.value_max}\`, the higher the warmer the color. To read the color temperature send a message to \`zigbee2mqtt/FRIENDLY_NAME/get\` with payload \`{"${colorTemp.property}": ""}\`. ${presets}`,
            );
        }
        if (colorTempStartup) {
            const presets = `Besides the numeric values the following values are accepted: ${colorTempStartup.presets.map((p) => `\`${p.name}\``).join(', ')}.`;
            lines.push(
                `- \`color_temp_startup\`: To set the startup color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${colorTempStartup.property}": VALUE}\` where \`VALUE\` is a number between \`${colorTempStartup.value_min}\` and \`${colorTempStartup.value_max}\`, the higher the warmer the color. To read the startup color temperature send a message to \`zigbee2mqtt/FRIENDLY_NAME/get\` with payload \`{"${colorTempStartup.property}": ""}\`. ${presets}`,
            );
        }
        if (colorXY) {
            lines.push(
                `- \`color_xy\`: To control the XY color (CIE 1931 color space) publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${colorXY.property}": {"x": X_VALUE, "y": Y_VALUE}}\` (e.g. \`{"color":{"x":0.123,"y":0.123}}\`). To read the XY color send a message to \`zigbee2mqtt/FRIENDLY_NAME/get\` with payload \`{"${colorXY.property}":{"x":"","y":""}}\`. Alternatively it is possible to set the XY color via RGB:`,
            );
            lines.push(`  - \`{"color": {"r": R, "g": G, "b": B}}\` e.g. \`{"color":{"r":46,"g":102,"b":150}}\``);
            lines.push(`  - \`{"color": {"rgb": "R,G,B"}}\` e.g. \`{"color":{"rgb":"46,102,150"}}\``);
            lines.push(`  - \`{"color": {"hex": HEX}}\` e.g. \`{"color":{"hex":"#547CFF"}}\``);
        }
        if (colorHS) {
            lines.push(
                `- \`color_hs\`: To control the hue/saturation (color) publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${colorHS.property}": {"hue": HUE, "saturation": SATURATION}}\` (e.g. \`{"color":{"hue":360,"saturation":100}}\`). To read the hue/saturation send a message to \`zigbee2mqtt/FRIENDLY_NAME/get\` with payload \`{"${colorHS.property}":{"hue":"","saturation":""}}\`. Alternatively it is possible to set the hue/saturation via:`,
            );
            lines.push(
                `  - HSB space (hue, saturation, brightness): \`{"color": {"h": H, "s": S, "b": B}}\` e.g. \`{"color":{"h":360,"s":100,"b":100}}\` or \`{"color": {"hsb": "H,S,B"}}\` e.g. \`{"color":{"hsb":"360,100,100"}}\``,
            );
            lines.push(
                `  - HSV space (hue, saturation, value):\`{"color": {"h": H, "s": S, "v": V}}\` e.g. \`{"color":{"h":360,"s":100,"v":100}}\` or \`{"color": {"hsv": "H,S,V"}}\` e.g. \`{"color":{"hsv":"360,100,100"}}\``,
            );
            lines.push(
                `  - HSL space (hue, saturation, lightness)\`{"color": {"h": H, "s": S, "l": L}}\` e.g. \`{"color":{"h":360,"s":100,"l":100}}\` or \`{"color": {"hsl": "H,S,L"}}\` e.g. \`{"color":{"hsl":"360,100,100"}}\``,
            );
        }

        const on_time = definition.toZigbee.find((t) => t.key?.includes('on_time'));
        if (on_time) {
            onWithTimedOff();
        }
        const transition = definition.toZigbee.find((t) => t.key?.includes('transition'));
        if (transition) {
            lines.push(``);
            lines.push(`#### Transition`);
            lines.push(
                `For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property \`transition\` to the payload which is the transition time in seconds.`,
            );
            lines.push(`Examples: \`{"brightness":156,"transition":3}\`, \`{"color_temp":241,"transition":1}\`.`);
        }

        const brightnessMove = definition.toZigbee.find((t) => t.key?.includes('brightness_move'));
        const brightnessStep = definition.toZigbee.find((t) => t.key?.includes('brightness_step'));
        if (brightnessMove && brightnessStep) {
            lines.push(``);
            lines.push(`#### Moving/stepping`);
            lines.push(`Instead of setting a value (e.g. brightness) directly it is also possible to:`);
            lines.push(`- move: this will automatically move the value over time, to stop send value \`stop\` or \`0\`.`);
            lines.push(`- step: this will increment/decrement the current value by the given one.`);
            lines.push(
                `\nThe direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up.`,
            );
            lines.push(`To do this send a payload like below to \`zigbee2mqtt/FRIENDLY_NAME/set\``);
            if (brightness) {
                lines.push(
                    `\n**NOTE**: brightness move/step will stop at the minimum brightness and won't turn on the light when it's off. In this case use \`brightness_move_onoff\`/\`brightness_step_onoff\``,
                );
            }
            lines.push(`\`\`\`\`js`);
            lines.push(`{`);
            if (brightness) {
                lines.push(`  "brightness_move": -40, // Starts moving brightness down at 40 units per second`);
                lines.push(`  "brightness_move": 0, // Stop moving brightness`);
                lines.push(`  "brightness_step": 40 // Increases brightness by 40`);
            }
            if (colorTemp) {
                lines.push(`  "color_temp_move": 60, // Starts moving color temperature up at 60 units per second`);
                lines.push(`  "color_temp_move": "stop", // Stop moving color temperature`);
                lines.push(`  "color_temp_step": 99, // Increase color temperature by 99`);
            }
            if (colorHS) {
                lines.push(
                    `  "hue_move": 40, // Starts moving hue up at 40 units per second, will endlessly loop (allowed value range: -255 till 255)`,
                );
                lines.push(`  "hue_step": -90, // Decrease hue by 90 (allowed value range: -255 till 255)`);
                lines.push(`  "saturation_move": -55, // Starts moving saturation down at -55 units per second (allowed value range: -255 till 255)`);
                lines.push(`  "saturation_step": 66, // Increase saturation by 66 (allowed value range: -255 till 255)`);
            }

            lines.push(`}`);
            lines.push(`\`\`\`\``);
        }
    } else if (expose.type === 'climate') {
        const readGet = (expose) => {
            if (expose.access & access.GET) {
                return `To read send a message to \`zigbee2mqtt/FRIENDLY_NAME/get\` with payload \`{"${expose.property}": ""}\`.`;
            } else {
                return `Reading (\`/get\`) this attribute is not possible.`;
            }
        };

        lines.push(`This climate device supports the following features: ${expose.features.map((e) => `\`${e.name}\``).join(', ')}.`);
        for (const f of expose.features.filter((e) =>
            ['occupied_heating_setpoint', 'occupied_cooling_setpoint', 'current_heating_setpoint', 'pi_heating_demand'].includes(e.name),
        )) {
            lines.push(
                `- \`${f.name}\`: ${f.description}. To control publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${f.property}": VALUE}\` where \`VALUE\` is the ${f.unit} between \`${f.value_min}\` and \`${f.value_max}\`. ${readGet(f)}`,
            );
        }

        const localTemperature = expose.features.find((e) => e.name === 'local_temperature');
        if (localTemperature) {
            lines.push(`- \`${localTemperature.name}\`: ${localTemperature.description} (in ${localTemperature.unit}). ${readGet(localTemperature)}`);
        }

        for (const f of expose.features.filter((e) => ['system_mode', 'preset', 'mode'].includes(e.name))) {
            lines.push(
                `- \`${f.name}\`: ${f.description}. To control publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${f.property}": VALUE}\` where \`VALUE\` is one of: ${f.values.map((v) => `\`${v}\``).join(', ')}. ${readGet(f)}`,
            );
        }

        const runningState = expose.features.find((e) => e.name === 'running_state');
        if (runningState) {
            lines.push(
                `- \`${runningState.name}\`: ${runningState.description}. Possible values are: ${runningState.values.map((v) => `\`${v}\``).join(', ')}. ${readGet(runningState)}`,
            );
        }

        const localTemperatureCalibration = expose.features.find((e) => e.name === 'local_temperature_calibration');
        if (localTemperatureCalibration) {
            let line = `- \`${localTemperatureCalibration.name}\`: ${localTemperatureCalibration.description}. To control publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${localTemperatureCalibration.property}": VALUE}.\``;
            if (localTemperature.access & access.GET) {
                line += `To read send a message to \`zigbee2mqtt/FRIENDLY_NAME/get\` with payload \`{"${localTemperature.property}": ""}\`.`;
            }
            if (localTemperatureCalibration.value_min !== undefined) {
                line += `The minimal value is \`${localTemperatureCalibration.value_min}\` and the maximum value is \`${localTemperatureCalibration.value_max}\` with a step size of \`${localTemperatureCalibration.value_step}\`.`;
            }

            lines.push(line);
        }
    } else if (expose.type === 'composite') {
        if (expose.description) {
            lines.push(expose.description + '.');
        }
        const txt = compositeDocs(expose);
        if (expose.access & access.SET) {
            lines.push(`Can be set by publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${expose.property}": ${txt.value}}\``);
        }
        if (expose.access & access.GET) {
            lines.push(
                `To read (\`/get\`) the value publish a message to topic \`zigbee2mqtt/FRIENDLY_NAME/get\` with payload \`{"${expose.property}": ""}\`.`,
            );
        }

        lines.push(...txt.note);
    } else if (expose.type === 'list') {
        if (expose.description) {
            lines.push(expose.description + '.');
        }
        let txt = {value: '', note: []};
        if (expose.item_type.type === 'composite') {
            txt = compositeDocs(expose.item_type);
        } else if (expose.item_type.type === 'text') {
            // Empty on purpose
        } else {
            throw new Error(`Unsupported list item_type: ${expose.item_type.type}`);
        }
        lines.push(`Can be set by publishing to \`zigbee2mqtt/FRIENDLY_NAME/set\` with payload \`{"${expose.property}": [${txt.value}]}\``);
        lines.push(...txt.note);
    } else {
        throw new Error('Not supported');
    }

    return lines.join('\n');
}
