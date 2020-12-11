---
---
# Frontend
*Ongoing discussion can be found here: https://github.com/Koenkk/zigbee2mqtt/issues/4266*

Zigbee2MQTT has a built-in webbased frontend. To enable the frontend add the following to your `configuration.yaml`:

```yaml
frontend:
  # Optional, default 8080
  port: 8080
  # Optional, default 0.0.0.0
  host: 0.0.0.0
  # Optional, enables authentication, disabled by default
  auth_token: your-secret-token
```

## Screenshot
![Frontend](../images/frontend.png)

## Nginx proxy configuration
In case you want to run the frontend behind a proxy you can use the following config as an example:

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
