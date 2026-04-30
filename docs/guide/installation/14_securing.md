---
sidebarDepth: 1
next: ../configuration/
---

# Securing the installation

::: warning
This page provides an overview of how security applies to a typical installation.
Each setup being slightly different, not all, and/or more, could apply.
:::

A useful way to think about Zigbee2MQTT in terms of security is to compare it to the software running on a network router: it provides configuration and control of a network.
As such, it is, by default, only locally accessible.

With Zigbee2MQTT being a bridge, the various software components attached to it (MQTT broker, automation software, etc.) must each be secured properly as well. Refer to their respective documentation.

Exposing any of these components publicly requires careful security planning.
Untrusted access must never be permitted.

## Host system

- **Dedicated user**: run Zigbee2MQTT under a dedicated, unprivileged user account (not `root`). This limits the blast radius if the process is ever compromised.
- **Restrict data directory access**: the data directory contains the full configuration, network state, and device data. Only the Zigbee2MQTT user should have access to it.
- **Keep the host system up to date**: apply operating system and dependency (Node.js, MQTT broker, etc.) security updates regularly and keep Zigbee2MQTT itself updated.

## Configuration file

The `configuration.yaml` file contains sensitive information such as MQTT credentials and the Zigbee network key.

- **Restrict file permissions**: ensure only the user running Zigbee2MQTT can read/write the file.

    ```bash
    chmod 600 configuration.yaml
    ```

- **Use a secrets file**: avoid storing credentials in plain text in `configuration.yaml`.
  Instead, use a separate `secret.yaml` file referenced with the `!secret.yaml` syntax. See [Specifying in a different file](../configuration/mqtt.md#specifying-mqtt-serveruserpassword-and-network_key-in-a-different-file).

    Apply the same permission restriction to `secret.yaml`:

    ```bash
    chmod 600 secret.yaml
    ```

## MQTT

MQTT is the primary entry point in and out of Zigbee2MQTT.
It is used to publish data and to control every aspect of Zigbee2MQTT (configuration, network, devices, etc.).

See [MQTT configuration](../configuration/mqtt.md) for the full reference.

:::caution CAUTION
Do not expose the MQTT broker publicly without securing its access.
Refer to the available documentation and guides for your broker.
:::

:::caution CAUTION
Using `reject_unauthorized: false` in production is dangerous. Its disables TLS certificate validation and makes the connection vulnerable.
:::

## Frontend

The frontend uses the same API as MQTT, but wrapped in a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) for in-browser access.
Anyone who can reach the frontend has full control over Zigbee2MQTT, same as MQTT.

:::caution CAUTION
Do not expose the frontend publicly without securing its access.
:::

### Authentication

Enable token-based authentication with the [`auth_token` option](../configuration/frontend.md#advanced-configuration).

Use the same precautions as any password.
Store it in `secret.yaml` (see [Configuration file](#configuration-file)) rather than directly in `configuration.yaml`.

### Encryption (HTTPS / WSS)

Enable HTTPS/WSS directly within Zigbee2MQTT by providing a [certificate and private key](../configuration/frontend.md#advanced-configuration).

Alternatively, terminate TLS at a reverse proxy (Nginx, Apache, etc.) placed in front of the frontend.
See [Frontend configuration](../configuration/frontend.md) for proxy configuration examples.

### Bind address

By default, the frontend listens on all interfaces (`0.0.0.0`).
If remote access is not required, restrict it to localhost:

```yaml
frontend:
    host: 127.0.0.1
```

Alternatively, use a Unix socket to avoid any network exposure:

```yaml
frontend:
    host: '/run/zigbee2mqtt/zigbee2mqtt.sock'
```

:::warning WARNING
Beware of the specific requirements of some systems in this regard (Docker, Home Assistant, etc.).
:::

## Zigbee network

### Network encryption key

Zigbee communication is encrypted using a 128-bit network key.

:::caution CAUTION
Changing this key requires re-pairing all devices.
:::

:::caution CAUTION
If you are currently running a network with the old default key `[1, 3, 5, 7, 9, 11, 13, 15, 0, 2, 4, 6, 8, 10, 12, 13]`, it is strongly suggested you change it.
:::

To generate a new random key on next startup, use [Onboarding](../getting-started/README.md#onboarding), or update it manually:

```yaml
advanced:
    network_key: GENERATE
```

Zigbee2MQTT will replace `GENERATE` with a randomly generated key on startup.
Of course, you can also set a specific key manually.

See [Zigbee network configuration](../configuration/zigbee-network.md) for more details.

### PAN ID and Extended PAN ID

The PAN ID and Extended PAN ID identify your network. These are not security measures.

Changing them is possible and requires re-pairing all devices.
This is mostly done in case you need to avoid a conflict with another nearby network.

### IEEE and Network addresses

The IEEE and Network addresses identify your devices. These are not security measures.

The IEEE address is statically assigned to the Zigbee chip in the device (although it can be changed in some cases).
Two devices with the same IEEE address cannot join a same network.

The Network Address is randomly assigned on device join and usually remains the same until reset/rejoin (although it may change at the discretion of the device).

### Joining (permit join)

The "permit join" state determines whether new devices are allowed to join the network.
Joining is enabled temporarily (for 254 seconds by default) via the dedicated frontend button or via MQTT. You can also close the joining window manually once pairing is complete.

:::tip TIP
Freshly joined devices may automatically permit joining on themselves for a specific duration (max 254 seconds).
:::

#### Install codes

Joining with an install code provides better security (if available).
A code is randomly assigned during the manufacturing process of a device.
The code allows to encrypt the initial network key transport from the Trust Center (coordinator) to the joining device.

Ask the vendor or refer to each device's documentation to check if an install code is available (usually printed on the device, plainly or as a QR code).
Codes can be added through the frontend.
See also [Add install code via MQTT](../../guide/usage/mqtt_topics_and_messages.md#zigbee2mqttbridgerequestinstall_codeadd).

### Device passlist and blocklist

For stricter control over which devices are allowed on the network, use a passlist or blocklist.
See [Device blocklist / passlist](../configuration/block-pass-list.md) for more details.

:::tip TIP
Devices that are not allowed are removed from the network on startup (e.g. configuration changes since last run), and on join attempts.
Note: removal is a request sent to the targeted device to "ask it" to leave, a malicious device could purposely ignore it.
:::

:::tip TIP
Using a passlist is the most restrictive and therefore most secure option, only explicitly trusted devices can join.
:::

### Inter-PAN

Inter-PAN messages are **unsecured messages** sent to or received from unjoined devices 1-hop away.
Touchlink (previously known as ZLL) uses inter-PAN messaging.

Inter-PAN is usually reserved for highly specific operations (e.g. resetting a device to factory settings), and undesired messages are aggressively dropped; this limits the impact of its lack of security.

### Zigbee 4.0

Zigbee 4.0 provides several security enhancements.
You can read more about it in the announcement from the CSA: [https://csa-iot.org/newsroom/the-connectivity-standards-alliance-announces-zigbee-4-0-and-suzi-empowering-the-next-generation-of-secure-interoperable-iot-devices/](https://csa-iot.org/newsroom/the-connectivity-standards-alliance-announces-zigbee-4-0-and-suzi-empowering-the-next-generation-of-secure-interoperable-iot-devices/)

NOTE: It will take time before devices catch up to the new standard and support all these enhancements.

## External extensions and converters

By design, external extensions and converters execute arbitrary user-provided JavaScript code within the Zigbee2MQTT process.
This grants significant customization flexibility, but also means that malicious or buggy code can compromise the entire Zigbee2MQTT instance, and potentially the host system.

:::caution CAUTION
Only add external extensions and converters from trusted, reviewed sources.
Treat them with the same level of scrutiny as any other code/scripts running on your system.
:::

## Firmware updates (OTA)

Firmware updates can provide bug fixes, security updates and other welcomed features.
However, they can also change device behavior in ways that may affect Zigbee2MQTT compatibility and potentially introduce buggy, or even malicious functionality.
Review the release notes before applying a firmware update.
See [OTA updates](../usage/ota_updates.md) for more details.

By default, Zigbee2MQTT matches and retrieves OTA images from the [Koenkk/zigbee-OTA](https://github.com/Koenkk/zigbee-OTA) repository.
This repository is a mirror of manufacturer-provided firmware updates, both manually and automatically curated.

:::caution CAUTION
Only use firmware from trusted sources.
Avoid using custom OTA index URLs unless you fully trust the source.
:::
