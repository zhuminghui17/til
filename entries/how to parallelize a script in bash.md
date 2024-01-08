---
title: How to Parallelize a Script in Bash
permalink: how-to-parallelize-a-script-in-bash
date: 2024-01-08T11:22:01-05:00
tags:
---

For running `scriptName.sh`, while passing in option of an index of
`arrayThatVaries`:

```bash
arrayThatVaries=(
  "entry1"
  "entry2"
  "entry3"
)


(trap 'kill 0' SIGINT; for i in "${!arrayThatVaries[@]}"; do
  scriptName.sh --option "${arrayThatVaries[$i]}" --index "$i" &
done
wait)
```
