---
sidebarDepth: 1
---

# 设备黑名单 / 白名单

您可以定义被阻止加入网络的设备，也可以定义允许加入网络的设备列表。

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
