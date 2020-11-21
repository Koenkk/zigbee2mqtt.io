const access = {
    STATE: 1,
    SET: 2,
    STATE_SET: 3,
    GET: 4,
    STATE_GET: 5,
    ALL: 7,
};

function generate(definition) {
    return `
## Exposes
${definition.exposes.map((e) => getExposeDocs(e)).join('\n\n')}
`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getExposeDocs(expose) {
    // TODO light, fan, cover, lock, climate
    const lines = [];
    const title = [];
    if (expose.name) title.push(expose.type);
    if (expose.endpoint) title.push(`${expose.endpoint} endpoint`);
    lines.push(`### ${capitalizeFirstLetter(expose.name ? expose.name : expose.type)} ${title.length > 0 ? `(${title.join(', ')})` : ''}`);

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
                lines.push(`To read (\`/get\`) the value publish a message to topic \`zigbee2mqtt/[FRIENDLY_NAME]/get\` with payload \`{"${expose.property}": ""}\`.`);
            } else {
                lines.push(`It's not possible to read (\`/get\`) this value.`);
            }
            if (expose.access & access.SET) {
                lines.push(`To write (\`/set\`) a value publish a message to topic \`zigbee2mqtt/[FRIENDLY_NAME]/set\` with payload \`{"${expose.property}": NEW_VALUE}\`.`);
            } else {
                lines.push(`It's not possible to write (\`/set\`) this value.`);
            }
        }

        if (expose.type === 'numeric') {
            if (expose.hasOwnProperty('value_max') && expose.hasOwnProperty('value_max')) {
                lines.push(`The minimimal value is \`${expose.value_min}\` and the maximum value is \`${expose.value_max}\`.`);
            }

            if (expose.unit) {
                lines.push(`The unit of this value is \`${expose.unit}\`.`);
            }
        }

        if (expose.type === 'binary') {
            if (expose.hasOwnProperty('value_on') && expose.hasOwnProperty('value_off')) {
                lines.push(`If value equals \`${expose.value_on}\` ${expose.name} is ON, if \`${expose.value_off}\` OFF.`);
            }
        }

        if (expose.type === 'enum') {
            lines.push(`The possible values are: ${expose.values.map((e) => `\`${e}\``).join(', ')}.`);
        }
    } else if (expose.type === 'switch' || expose.type === 'lock') {
        const state = expose.features.find((e) => e.name === 'state');
        lines.push(`The current state of this ${expose.type} is in the published state under the \`${state.property}\` property (value is \`${state.value_on}\` or \`${state.value_off}\`).`);
        expose.type === 'switch' ?
            lines.push(`To control this ${expose.type} publish a message to topic \`zigbee2mqtt/[FRIENDLY_NAME]/set\` with payload \`{"${state.property}": "${state.value_on}"}\`, \`{"${state.property}": "${state.value_off}"}\` or \`{"${state.property}": "${state.value_toggle}"}\`.`) :
            lines.push(`To control this ${expose.type} publish a message to topic \`zigbee2mqtt/[FRIENDLY_NAME]/set\` with payload \`{"${state.property}": "${state.value_on}"}\` or \`{"${state.property}": "${state.value_off}"}\`.`);

        lines.push(`To read the current state of this ${expose.type} publish a message to topic \`zigbee2mqtt/[FRIENDLY_NAME]/get\` with payload \`{"${state.property}": ""}\`.`);
    } else {
        lines.push('TODO');
    }

    return lines.join('\n');
}

module.exports = {
    generate,
};
