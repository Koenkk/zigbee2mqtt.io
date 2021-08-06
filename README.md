# Zigbee2MQTT.io
This repository contains the Zigbee2MQTT documentation.

## Generated documentation

Due to the repetitive nature of zigbee devices, lots of documentation is auto-generated from source code or by particular directives for the `exposes` and `notes` section. For local development:

```bash
npm install
npm run docgen
```

## Running locally
To run locally, execute the following commands:

```bash
# Checkout the repository
git clone https://github.com/Koenkk/zigbee2mqtt.io.git
cd zigbee2mqtt.io/docs

# Make sure that you have atleast Ruby 2.1.0 installed, if this fails, install atleast Ruby 2.1.0
ruby --version

# Install bundler
sudo gem install bundler

# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve --incremental
```

You can now find the local instance under: http://127.0.0.1:4000
