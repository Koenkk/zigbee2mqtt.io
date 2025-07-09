import type {JSONSchema7} from 'json-schema';
import {generatePage} from './utils';

const displayProperty = (key: string, property: JSONSchema7, depth: number, required: boolean): string => {
    let str = `${'#'.repeat(depth + 2)} ${key} ${required ? '<span style="color: red">*</span>' : ''}`;

    if (!property.description && property.title) {
        str += `\r\n\r\n${property.title}`;
    }

    if (property.description && property.description !== property.title) {
        str += `\r\n\r\n${property.description}`;
    }

    str += `\r\n- Type: \`${property.type}\` ${property.type === 'array' && typeof property.items === 'object' && 'type' in property.items ? `of \`${property.items.type}\`` : ''}`;

    if (property.default) {
        str += `\r\n- Default: \`${property.default}\``;
    }

    if (property.enum) {
        str += `\r\n- Possible values: ${property.enum.map((v) => `\`${v}\``).join(', ')}`;
    }

    if (property.minimum) {
        str += `\r\n- Minimum: \`${property.minimum}\``;
    }

    if (property.maximum) {
        str += `\r\n- Maximum: \`${property.maximum}\``;
    }

    if (property.examples) {
        if (Array.isArray(property.examples)) {
            str += `\r\n- Examples:`;

            for (const example of property.examples) {
                str += `\r\n    - \`${JSON.stringify(example)}\``;
            }
        } else {
            str += `\r\n- Examples: \`${JSON.stringify(property.examples)}\``;
        }
    }

    return str + '\r\n';
};

const groupProperties = (
    properties: JSONSchema7['properties'],
    depth: number,
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

        if (property.properties) {
            nestedElements.push(`
${'#'.repeat(depth + 2)} ${key}
${property.title || ''}

${groupProperties(property.properties, depth + 1, property.required).join('\r\n')}`);
        } else {
            const oneOf = property.oneOf?.find((one) => typeof one === 'object' && one.properties) as JSONSchema7 | undefined;

            if (oneOf) {
                const others = property.oneOf?.filter((one) => typeof one === 'object' && !one.properties) || [];

                nestedElements.push(`
${'#'.repeat(depth + 2)} ${key}
${oneOf.title || property.title || ''}

${groupProperties(oneOf.properties, depth + 1, oneOf.required).join('\r\n')}`);

                for (const other of others) {
                    nestedElements.push(displayProperty(key, other as JSONSchema7, depth, required.includes(key)));
                }
            } else {
                if (depth === 0 && (key === 'devices' || key === 'groups')) {
                    const definition = definitions[key.slice(0, -1)];

                    nestedElements.push(`
${'#'.repeat(depth + 2)} ${key}
${property.title || ''}

${groupProperties(definition.properties, depth + 1, definition.required).join('\r\n')}`);
                } else {
                    elements.push(displayProperty(key, property, depth, required.includes(key)));
                }
            }
        }
    }

    return nestedElements.length > 0 ? elements.concat(nestedElements) : elements;
};

export default async function generate_settings() {
    console.log(`Generating settings`);

    const schemaRsp = await fetch('https://github.com/Koenkk/zigbee2mqtt/raw/refs/heads/master/lib/util/settings.schema.json');
    const schemaJson = await schemaRsp.json();

    const result = `---
sidebarDepth: 1
editLink: false
pageClass: settings-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen, do not edit! -->
<!-- !!!! -->

${groupProperties(schemaJson.properties, 0, schemaJson.required, schemaJson.definitions).sort().join('\r\n')}
`;

    return generatePage(result, 'docs/guide/settings.md');
}
