---
title: Don't ingore .dockerignore!
permalink: dockerignore
date: 2025-05-28T21:59:02-04:00
tags:
---

One easy yet impactful way to optimize your Docker image is to add a `.dockerignore` file.

Just like `.gitignore` for Git, `.dockerignore` tells Docker which files and folders to skip when building your image. This keeps your image smaller, builds faster, and avoids copying unnecessary files like local logs, node_modules, temporary build artifacts, docs, and data files.

For example:

```md
# .dockerignore
node_modules
dist
*.log
.DS_Store
.env
```

In one of my recent projects, adding a `.dockerignore` file reduced the image size from `~1.75GB` to `~850MB` — over **50%** smaller! Faster build time and lower bandwidth usage - saving time and cost!

This is very easy and straightforward, but it's very interesting to see how many useless files I have packed into the docker image every single time!


