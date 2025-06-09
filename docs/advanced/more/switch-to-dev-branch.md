---
sidebar: auto
---

# Switch to the dev branch

The Zigbee2MQTT dev branch contains the latest features, improvements and supported devices.
In case you want to try this, you can checkout the dev branch.

::: warning
This branch is a development branch! It could be less stable than the release version!
:::

## Linux

```bash
# Stop Zigbee2MQTT and go to directory
sudo systemctl stop zigbee2mqtt
cd /opt/zigbee2mqtt

# Backup configuration
cp -R data data-backup

# Update
git fetch origin dev:dev
# If you get an `error: pathspec 'dev' did not match any file(s) known to git` execute: `git fetch origin --unshallow`
git checkout dev  # Change 'dev' to 'master' to switch back to the release version
git pull
pnpm i --frozen-lockfile

# Restore configuration
cp -R data-backup/* data
rm -rf data-backup

# Start Zigbee2MQTT
sudo systemctl start zigbee2mqtt
```

## Docker

Use the Docker image with the `latest-dev` tag.

## Home Assistant addon

Use the [`edge`](https://github.com/zigbee2mqtt/hassio-zigbee2mqtt) version.

- Stop the "regular" add-on
- Disable `Start on boot` for the "regular" add-on
- Disable `Watchdog` for the "regular" add-on
- Go to the Add-on store
- Select and install `Zigbee2MQTT Edge`
- If you have any settings in the `Configuration` page of the "regular" add-on, copy them over to that of the `Edge` add-on
- Start the `Edge` add-on (and configure `Start on boot`, `Watchdog` & `Show in sidebar` as desired)

:::caution CAUTION
Do not start both add-ons with the same configuration at the same time. That will fail.
:::

:::tip TIP
To update the `Edge` add-on, simply uninstall it (**do not delete data**), and re-install it.
:::

:::tip TIP
If you intend to stay on the `Edge` add-on permanently, once you've confirmed that `Edge` is working, you can then uninstall the "regular" add-on (**do not delete data**).
:::

:::tip TIP
When switching add-ons regularly, you might want to always use the `configuration.yaml` directly instead of the add-on `Configuration` page to avoid mismatching settings by mistake. Once settings are successfully moved to the `configuration.yaml`, you can just empty the corresponding boxes (`mqtt`, `serial`) in the add-on `Configuration` page and start Zigbee2MQTT again.
:::
