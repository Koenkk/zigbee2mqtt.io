import {strict as assert} from 'assert';

function addTrailingDot(text: string) {
    text = text.trim();
    return text.endsWith('.') || text.endsWith('`') ? text : text + '.';
}

export function generateOptions(definition) {
    if (definition.options.length == 0) return '';
    return `
## Options
*[How to use device type specific configuration](../guide/configuration/devices-groups.md#specific-device-options)*

${definition.options.map((e) => getOptionDocs(e)).join('\n\n')}
`;
}

function getOptionDocs(option) {
    let extra = null;

    if (option.type === 'numeric') {
        extra = 'The value must be a number';
        if (option.value_min != null) extra += ` with a minimum value of \`${option.value_min}\``;
        if (option.value_min != null && option.value_max != null) extra += ` and with a`;
        if (option.value_max != null) extra += ` with a maximum value of \`${option.value_max}\``;
    } else if (option.type === 'binary') {
        extra = `The value must be \`${option.value_on}\` or \`${option.value_off}\``;
    } else if (option.type === 'enum') {
        extra = `The value must be one of ${option.values.map((v) => `\`${v}\``).join(', ')}`;
    } else if (option.type === 'list') {
        extra = `The value must be a list of ${option.item_type}`;
    } else if (option.type === 'text') {
        extra = `The value must be textual`;
    } else if (option.type === 'composite' && option.property === 'simulated_brightness') {
        extra = `Example:
\`\`\`yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
\`\`\`
`;
    } else if (option.type === 'composite' && option.property === 'identity_effect') {
        extra = `Example:
\`\`\`yaml
identity_effect:
  effect: blink 3 # allowed: 'blink 3', 'fixed', 'blink green', 'blink blue'
  color: red # allowed: 'default', 'red', 'green', 'blue', 'lightblue', 'yellow', 'pink', 'white'
\`\`\`
`;
    }

    assert(extra != null, `No option doc generator for '${JSON.stringify(option)}'`);

    return `* \`${option.property}\`: ${addTrailingDot(option.description)} ${addTrailingDot(extra)}`;
}
