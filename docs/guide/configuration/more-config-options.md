---
sidebarDepth: 1
---

# More configuration options

## Network map

```yaml
# Optional: networkmap options
map_options:
    graphviz:
        # Optional: Colors to be used in the graphviz network map (default: shown below)
        colors:
            fill:
                enddevice: '#fff8ce'
                coordinator: '#e04e5d'
                router: '#4ea3e0'
            font:
                coordinator: '#ffffff'
                router: '#ffffff'
                enddevice: '#000000'
            line:
                active: '#009900'
                inactive: '#994444'
```

## External converters

You can define external converters to e.g. add support for a DiY device. The extension can be a file with `.js`
extension in the `data` directory or a NPM package. Ensure that default export from your external converter exports an
array or device object (refer to the definition in the `devices` folder of zigbee-herdsman-converters). Some examples
can be found [here](https://github.com/Koenkk/zigbee2mqtt.io/tree/master/docs/externalConvertersExample). For this
example put the files in the `data` folder and add the following to `configuration.yaml`:

Note that external converters take precedence of standard converters

```yaml
external_converters:
    - freepad_ext.js
    - one-more-converter.js
```

See also [How to support new devices](../../advanced/support-new-devices/01_support_new_devices.md).
