---
sidebarDepth: 1
---

# 更多配置选项

## 网络拓扑图

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
