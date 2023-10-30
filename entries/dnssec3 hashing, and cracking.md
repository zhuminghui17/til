---
title: DNSSEC3 Hashing, and Cracking
permalink: dnssec3-hashing-and-cracking
date: 2023-10-30T00:47:32-04:00
tags: domains
---

So I've been on a journey to make a niche domain search tool, similar to [micro.domains](http://micro.domains). I thought a key competitive advantage would be the ability to quickly query which domains exist and which ones don't, without having to send out a bunch of whois requests. (This was the original motivation but this entire post is a rabbit-hole down DNSSEC).

DNSSEC and DNSSEC3 are additional standards to reduce the availability of publically available DNS data, in the name of security through obscurity. Sure, if you apply it on your own corporate subdomain it's still understandable, but it also applies to "full domains" as well (e.g. google.com). Which means, even if I have the zone files from CZDS, I can't enumerate all the domain names for... reasons?

For DNSSEC, it's trivial to enumerate everything. For example, let's say everything under .ca was encrypted using DNSSEC, and I wanted to find all the domains. I would simply be able to ask for `a.ca`, then if that domain doesn't exist, it'll tell me the next and previous domains registered. I can then just follow these "pointers", until I have everything under the TLD. Fun days. 

However, DNSSEC3 removes some of that fun by making it so that it gives you ranges of hashes where a domain doesn't exist. No fun pointers to follow anymore :(.

So then how do you enumerate? Now it's no longer guaranteed, but you can get decently close, roughly 79% [^a].

One way is to use GPU-based Hash Breaking[^b]. From this 2014 paper, it seems to suggest that all the domains use SHA-1, and each TLD uses a constant salt for all their domains. I'm not sure if it's the case, but I wonder if you could find the salt and brute force everything still?

In a paper from 2017[^a], it seems like they did a brute force using relatively older GPUs (7 graphics cards from 2011 to 2016) and got the 79% previously mentioned in 2 weeks. Given that I have a 3090, I assume this is way easier to do, and I'll have to look for implementations.






References:

[^a]: https://ieeexplore.ieee.org/document/8002913
[^b]: https://ieeexplore.ieee.org/document/6924218

