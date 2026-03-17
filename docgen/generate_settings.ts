import type {JSONSchema7} from 'json-schema';
import {generatePage} from './utils';

const getDisplayValue = (
    property: JSONSchema7,
    fallback: string | number | boolean | object,
    defaultOverride: JSONSchema7['default'] = undefined,
): string => {
    // in order: default override, default, first example, first enum, min, max
    const pDefault = defaultOverride ?? property.default;

    if (pDefault != null) {
        return JSON.stringify(pDefault);
    }

    return `${Array.isArray(property.examples) && property.examples.length > 0 ? JSON.stringify(property.examples[0]) : property.enum && property.enum.length > 0 ? JSON.stringify(property.enum[0]) : (property.minimum ?? property.maximum ?? JSON.stringify(fallback))}`;
};

const displayProperty = (
    key: string,
    property: JSONSchema7,
    parents: string[],
    required: boolean,
    defaultOverride: JSONSchema7['default'] = undefined,
): string => {
    const pDefault = defaultOverride ?? property.default;
    let str = `${'#'.repeat(parents.length + 2)} ${key} ${required ? '<span style="color: red">*</span>' : ''}`;

    if (!property.description && property.title) {
        str += `\r\n\r\n${property.title}`;
    }

    if (property.description && property.description !== property.title) {
        str += `\r\n\r\n${property.description}`;
    }

    str += `\r\n\r\n\`\`\`yaml`;
    let i = 0;

    for (const parent of parents) {
        str += `\r\n${' '.repeat(i * 4)}${parent}:`;
        i++;
    }

    str += `\r\n${' '.repeat(i * 4)}${key}:`;

    let pType = property.type;

    if (Array.isArray(property.type)) {
        const nonNull = property.type.filter((t) => t !== 'null');

        if (nonNull.length === 1) {
            pType = pDefault == null ? 'null' : nonNull[0];
        }
    }

    switch (pType) {
        case 'boolean': {
            str += ` ${getDisplayValue(property, true)}`;
            break;
        }
        case 'number':
        case 'integer': {
            str += ` ${getDisplayValue(property, 0)}`;
            break;
        }
        case 'string': {
            str += ` ${getDisplayValue(property, 'abc')}`;
            break;
        }
        case 'array': {
            str += ` ${getDisplayValue(property, [])}`;
            break;
        }
        case 'object': {
            str += ` ${getDisplayValue(property, {})}`;
            break;
        }
        case 'null': {
            str += ' null';
            break;
        }
    }

    str += `\r\n\`\`\`\r\n`;

    str += `\r\n- Type: \`${property.type}\` ${property.type === 'array' && typeof property.items === 'object' && !Array.isArray(property.items) ? `of \`${property.items.type}\`` : ''}`;

    if (pDefault != null) {
        str += `\r\n- Default: \`${JSON.stringify(pDefault)}\``;
    }

    if (property.enum != null) {
        str += `\r\n- Possible values: ${property.enum.map((v) => `\`${v}\``).join(', ')}`;
    } else if (property.type === 'array' && typeof property.items === 'object' && !Array.isArray(property.items) && property.items.enum) {
        str += `\r\n- Possible array values: ${property.items.enum.map((v) => `\`${v}\``).join(', ')}`;
    }

    if (property.minimum != null) {
        str += `\r\n- Minimum: \`${property.minimum}\``;
    }

    if (property.maximum != null) {
        str += `\r\n- Maximum: \`${property.maximum}\``;
    }

    if (property.examples != null) {
        if (Array.isArray(property.examples)) {
            str += `\r\n- Examples:`;

            for (const example of property.examples) {
                str += `\r\n    - \`${JSON.stringify(example)}\``;
            }
        } else {
            str += `\r\n- Examples: \`${JSON.stringify(property.examples)}\``;
        }
    }

    // @ts-expect-error custom
    if (property.requiresRestart) {
        str += `\r\n- <span style="color: red">Restart required to be effective</span>`;
    }

    return str + '\r\n';
};

const groupProperties = (
    properties: JSONSchema7['properties'],
    parents: string[] = [],
    required: string[] = [],
    definitions: Record<string, JSONSchema7> = {},
): string[] => {
    const elements: string[] = [];
    const nestedElements: string[] = [];

    for (const key in properties) {
        const property = properties[key];

        if (typeof property === 'boolean') {
            continue;
        }

        const newParents = parents.slice();

        newParents.push(key);

        if (property.properties) {
            nestedElements.push(`
${'#'.repeat(parents.length + 2)} ${key}

${property.title || ''}

${groupProperties(property.properties, newParents, property.required, definitions).join('\r\n')}`);
        } else {
            if (property.oneOf) {
                const oneOf = property.oneOf?.find((one) => typeof one === 'object' && one.properties) as JSONSchema7 | undefined;

                if (oneOf) {
                    const others = property.oneOf?.filter((one) => typeof one === 'object' && !one.properties) || [];

                    nestedElements.push(`
    ${'#'.repeat(parents.length + 2)} ${key}

    ${oneOf.title || property.title || ''}

    ${groupProperties(oneOf.properties, newParents, oneOf.required, definitions).join('\r\n')}`);

                    for (const other of others) {
                        // override default (in parent, not in oneOf)
                        nestedElements.push(displayProperty(key, other as JSONSchema7, parents, required.includes(key), property.default));
                    }
                } else {
                    for (const oneOfI of property.oneOf) {
                        // override default (in parent, not in oneOf)
                        nestedElements.push(displayProperty(key, oneOfI as JSONSchema7, parents, required.includes(key), property.default));
                    }
                }
            } else {
                if (parents.length === 0 && (key === 'devices' || key === 'groups')) {
                    const definition = definitions[key.slice(0, -1)];

                    if (key === 'devices') {
                        newParents.push('"0x1234567812345678"');
                    } else {
                        newParents.push('1');
                    }

                    nestedElements.push(`
${'#'.repeat(parents.length + 2)} ${key}

${property.title || ''}

${groupProperties(definition.properties, newParents, definition.required, definitions).join('\r\n')}`);
                } else {
                    elements.push(displayProperty(key, property, parents, required.includes(key)));
                }
            }
        }
    }

    return nestedElements.length > 0 ? elements.concat(nestedElements) : elements;
};

export default async function generate_settings() {
    console.log(`Generating settings`);

    const schemaRsp = await fetch('https://github.com/Koenkk/zigbee2mqtt/raw/refs/heads/dev/lib/util/settings.schema.json');
    const schemaJson = await schemaRsp.json();

    const result = `---
sidebarDepth: 1
editLink: false
pageClass: settings-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen, do not edit! -->
<!-- !!!! -->

# All settings

This page contains all currently supported settings in \`configuration.yaml\`.

::: tip NOTE
The code blocks show an **example value** for each setting (may be the default or any value derived from the possibilities/examples/boundaries).
:::

${groupProperties(schemaJson.properties, [], schemaJson.required, schemaJson.definitions).sort().join('\r\n')}
`;

    return generatePage(result, 'docs/guide/configuration/all-settings.md');
}
