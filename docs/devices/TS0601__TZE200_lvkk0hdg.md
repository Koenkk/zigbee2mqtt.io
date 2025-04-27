<!-- Notes BEGIN -->
## Notes

This device is a Tuya-based ultrasonic water (liquid) level monitor. It is functionally similar to the ME201WZ model (`_TZE284_kyyu8rbj`) but uses different measurement units for several datapoints:

- **DP19** (`installation_height`) and **DP21** (`liquid_depth_max`) use **millimeters (mm)** instead of **meters (m)**.
- This difference justified adding a separate fingerprint and exposing raw values with `unit: 'mm'` rather than using scaling factors.

The following features are supported and exposed:
- Liquid level state (`liquid_state`)
- Liquid level in mm (`liquid_depth`)
- Liquid level percentage (`liquid_level_percent`)
- Configuration datapoints:
  - `installation_height` (10–4000 mm)
  - `liquid_depth_max` (10–4000 mm, step: 5 mm)
  - Thresholds: `max_set`, `mini_set` (0–100%)

The integration has been tested with a local external converter using `tuya.fz.datapoints` and `tuya.tz.datapoints`.

<!-- Notes END -->

