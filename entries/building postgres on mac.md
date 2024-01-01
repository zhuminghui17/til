---
title: Building Postgres on Mac
permalink: building-postgres-on-mac
date: 2024-01-01T09:22:36-05:00
tags:
---

While trying to install Postgres today, I thought it'd be fun to try 16.1 for
the fun of it.

I ran the command with asdf as `asdf install postgres 16.1`

Turns out, Postgres updated things in update 16 (building with ic4uc by default
now) and I kept getting this error:

```
checking for icu-uc icu-i18n... no
configure: error: ICU library not found
If you have ICU already installed, see config.log for details on the
failure.  It is possible the compiler isn't looking in the proper directory.
Use --without-icu to disable ICU support.
```

I found an article describing _this exact issue_ on someone's blog at
https://viggy28.dev/article/postgres-v16-icu-installation-issue/

The solution was to run this following block instead:

```sh
export PKG_CONFIG_PATH=/usr/local/opt/icu4c/lib/pkgconfig/
asdf install postgres 16.1
```

Thanks a bunch Vignesh! It saved me a ton of time. I wonder if this would be
what it felt like to use Stack Overflow 10 years ago.
