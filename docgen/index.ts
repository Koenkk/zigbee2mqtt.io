import throat from "throat";
import { devices } from 'zigbee-herdsman-converters';
import generateDevice from "./generate_device";
import generate_supportedDevices from "./generate_supported-devices";
import { removeObsoleteDevices } from "./remove-obsolete-devices";

async function generateDevices() {
  const genDevThrottled = throat(20, device => generateDevice(device));
  await Promise.all(devices.map(genDevThrottled));
  console.log('Generated device-pages');
}

( async function () {
  await removeObsoleteDevices(devices);
  await Promise.all([
    generateDevices(),
    generate_supportedDevices(),
  ]);
  console.log('Done');
} )();
