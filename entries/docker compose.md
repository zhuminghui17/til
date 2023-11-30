---
title: docker compose
permalink: docker-compose
date: 2023-11-30T09:14:26-05:00
tags: docker
---

This past Black Friday (~4 days ago), I went on a shopping spree and bought...
servers. Plain old servers. Being that most of my experience is
Jamstack/serverless/Static Hosting, I thought it'd be interesting to self host
some of the stuff myself.

While I am working on a Ruby on Rails project right now, I've been trying to
make sure the stuff _around_ the product are useful and present as well
(monitoring, logs, etc.)

So, I spent the past few hours playing with Uptime Kuma, and found a way to host
multiple instances on the same IP address, all within a Docker Compose. Here's
the yaml. Hopefully someone finds this useful!

```yaml
# https://github.com/SteveLTN/https-portal
# https://github.com/louislam/uptime-kuma/wiki/Reverse-Proxy

version: "3.3"

services:
  https-portal:
    image: steveltn/https-portal:1
    ports:
      - "80:80"
      - "443:443"
    links:
      - uptime-kuma-kevinjiang-ca
      - uptime-kuma-k-j-ca
    restart: always
    environment:
      DOMAINS:
        "status.kevinjiang.ca -> http://uptime-kuma-kevinjiang-ca:3001,
        status.k-j.ca -> http://uptime-kuma-k-j-ca:3002"
      # STAGE: 'production' # Don't use production until staging works
      STAGE: "production"
      # FORCE_RENEW: 'true'
      WEBSOCKET: "true"
    volumes:
      - https-portal-data:/var/lib/https-portal

  uptime-kuma-kevinjiang-ca:
    image: louislam/uptime-kuma:1
    container_name: uptime-kuma-kevinjiang-ca
    volumes:
      - ./uptime-kuma-kevinjiang-ca:/app/data
    ports:
      - 3001:3001

  uptime-kuma-k-j-ca:
    image: louislam/uptime-kuma:1
    container_name: uptime-kuma-k-j-ca
    volumes:
      - ./uptime-kuma-k-j-ca:/app/data
    ports:
      - 3002:3001

volumes:
  https-portal-data:
```
