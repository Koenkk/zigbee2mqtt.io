---
sidebarDepth: 1
---

# Device blocklist / passlist

You can define blocked devices as well as a list of devices allowed joining the network.

```yaml
# Optional: Block devices from the network (by ieeeAddr) (default: empty)
blocklist:
    - '0x000b57fffec6a5b2'

# Optional: Allow only certain devices to join the network (by ieeeAddr)
# Note that all devices not on the passlist will be removed from the network!
# (default: empty)
passlist:
    - '0x000b57fffec6a5b3'
```
