---
sidebarDepth: 1
redirectFrom: /information/frontend.md
---

# 前端界面（Frontend）

Zigbee2MQTT 内置了一个基于 Web 的前端界面。

要启用前端界面，请在你的 `configuration.yaml` 中添加以下内容。这将在 `8080` 端口启动前端界面。

```yaml
frontend:
    enabled: true
```

## 高级配置

```yaml
frontend:
    enabled: true
    # Optional, default: zigbee2mqtt-frontend, possible: zigbee2mqtt-frontend, zigbee2mqtt-windfront
    package: zigbee2mqtt-frontend
    # Optional, default: 8080
    port: 8080
    # Optional, empty by default to listen on both IPv4 and IPv6. Opens a unix socket when given a path instead of an address (e.g. '/run/zigbee2mqtt/zigbee2mqtt.sock')
    # Don't set this if you use Docker or the Home Assistant add-on unless you're sure the chosen IP is available inside the container
    host: 0.0.0.0
    # Optional, enables authentication, disabled by default, cleartext (no hashing required)
    auth_token: your-secret-token
    # Optional, url on which the frontend can be reached, currently only used for the Home Assistant device configuration page
    url: 'https://zigbee2mqtt.myhouse.org'
    # Optional, certificate file path for exposing HTTPS. The sibling property 'ssl_key' must be set for HTTPS to be activated
    ssl_cert: /config/etc/letsencrypt/live/mydomain.com/fullchain.pem
    # Optional, private key file path for exposing HTTPS. The sibling property 'ssl_cert' must be set for HTTPS to be activated
    ssl_key: /config/etc/letsencrypt/live/mydomain.com/privkey.pem
    # Optional, base URL for the frontend, when served from a subpath, e.g. behind the proxy. Default value is '/'
    base_url: /zigbee2mqtt
    # Optional, list of regular expressions to hide notifications, the example below hides notifications for failed device pings
    notification_filter:
        - 'z2m: Failed to ping.*'
    # Optional, if true, the frontend UI is not served, only the WebSocket is maintained by
    # Zigbee2MQTT (you are required to serve a standalone UI yourself as needed).
    disable_ui_serving: false
```

如果要将 `auth_token` 指定在另一个文件中，可以设置为例如 `auth_token: '!secret.yaml auth_token'`，然后在 `configuration.yaml` 旁边创建一个名为 `secret.yaml` 的文件，内容为 `auth_token: super-secret-token`。

**注意：** 如果你是通过 Home Assistant 插件运行 Zigbee2MQTT，则无法更改端口。由于 Home Assistant Ingress 的要求，插件会强制前端界面运行在 8099 端口。

### `package` 设置详情

你可以更改前端界面所使用的包（需要重启 Zigbee2MQTT）。这将相应地改变 Zigbee2MQTT 基于 Web 的用户界面。

::: warning 重要
各个包的功能、链接和整体设计会有所不同。
:::

##### zigbee2mqtt-windfront

对原版前端界面的重新实现，采用了全新的代码、全新的设计、全新的功能……
![WindFront](/images/windfront.png)
详情：[https://github.com/Nerivec/zigbee2mqtt-windfront](https://github.com/Nerivec/zigbee2mqtt-windfront)

可以在 [#28442](https://github.com/Koenkk/zigbee2mqtt/discussions/28442) 中提供反馈。

也可以作为独立应用使用（支持多个 Zigbee2MQTT 实例），参见：[https://github.com/Nerivec/zigbee2mqtt-windfront/wiki#standalone-serving-with-multi-zigbee2mqtt-support](https://github.com/Nerivec/zigbee2mqtt-windfront/wiki#standalone-serving-with-multi-zigbee2mqtt-support)

##### zigbee2mqtt-frontend

原始前端界面（旧版）。
![Frontend](/images/frontend.png)
详情：[https://github.com/nurikk/zigbee2mqtt-frontend](https://github.com/nurikk/zigbee2mqtt-frontend)

## Nginx 代理配置

如果你想在代理后运行前端界面，可以使用以下配置作为示例。

由于 [WebKit Bug 80362](https://bugs.webkit.org/show_bug.cgi?id=80362) 的存在，基本身份验证无法与 WebSocket 一起使用，因此当配置了这类身份验证时，前端界面在基于 WebKit 的浏览器中将无法正常工作。这包括 Mac 上的桌面版 Safari，以及 iOS 上的_所有_浏览器和 web view。要解决这个问题，请配置前端界面的 `auth_token` 以启用应用层身份验证，并从 web 服务器配置中移除 `auth_basic`。

```
server {
    listen       80;
    server_name  zigbee2mqtt.mydomain.com;
    return 301   https://zigbee2mqtt.mydomain.com$request_uri;
}

server {
    listen      443 ssl http2;
    listen      [::]:443 ssl http2;

    # In case you want to use basic authentication:
    auth_basic "Login";
    auth_basic_user_file /zigbee2mqtt_htpasswd;

    ssl_certificate     /config/etc/letsencrypt/live/mydomain.com/fullchain.pem;
    ssl_certificate_key /config/etc/letsencrypt/live/mydomain.com/privkey.pem;

    server_name zigbee2mqtt.mydomain.com;

    location / {
        proxy_pass http://localhost:8080/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /api {
        proxy_pass         http://localhost:8080/api;
        proxy_set_header Host $host;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

## Apache2 代理配置

致谢：[Florian Metzger-Noel](https://stackoverflow.com/questions/38838567/proxy-websocket-wss-to-ws-apache/60506715#60506715)

使用以下命令启用这些模块
`a2enmod proxy proxy_wstunnel proxy_http rewrite`

```
<VirtualHost *:80>
   ServerName example.com
   ServerAdmin info@example.com


    ProxyRequests off
    ProxyVia on
    RewriteEngine On

    RewriteEngine On
    RewriteCond %{HTTP:Connection} Upgrade [NC]
    RewriteCond %{HTTP:Upgrade} websocket [NC]
    RewriteRule /(.*) ws://localhost:8080/$1 [P,L]

    ProxyPass               / http://localhost:8080/
    ProxyPassReverse        / http://localhost:8080/


   <Proxy *>
   Order deny,allow
   Allow from all
   </Proxy>

   ErrorLog ${APACHE_LOG_DIR}/company2-error.log
   CustomLog ${APACHE_LOG_DIR}/company2-access.log combined

</VirtualHost>


```

## 进阶：更改前端界面端口

默认的 Dockerfile 使用 `EXPOSE 8080`。虽然这在运行时无法更改，但它主要起到文档提示的作用。

要在不同的端口（例如 `9090`）上运行前端界面，你必须先在 `configuration.yaml` 中更新端口，然后在运行容器时发布新端口。

**方法一：直接发布端口**

这是最简单的方法。

1.  在 `configuration.yaml` 中设置端口：

    ```yaml
    frontend:
        port: 9090
    ```

2.  运行容器，发布新端口并挂载数据目录：
    ```bash
    docker run \
      -p 9090:9090 \
      -v ./data:/app/data \
      koenkk/zigbee2mqtt
    ```

**方法二：使用反向代理（例如 Traefik）**

如果你使用反向代理，则不需要直接发布端口。而是使用标签告诉代理该服务在容器内部运行的端口。

1.  在 `configuration.yaml` 中设置端口（如方法一所示）。

2.  运行容器并附带 Traefik 标签：
    ```bash
    docker run \
      -v ./data:/app/data \
      -l "traefik.enable=true" \
      -l "traefik.http.services.zigbee2mqtt.loadbalancer.server.port=9090" \
      koenkk/zigbee2mqtt
    ```
