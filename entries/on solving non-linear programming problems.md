---
title: on solving non-linear programming problems
permalink: on-solving-non-linear-programming-problems
date: 2024-01-16T16:48:25-05:00
tags: optimization
---

Given 2 valid models, A and B, for a non-LP problem, and you want to minimize
solution time:

- Each model has an integer space flesh, (convex hull) which is searched through
  with Branch & Bound
- Each model also has a "crust", which is what happens when you relax the
  constraints to become an LP.
  - Let's call it A_lp, B_lp
- The crust is useless search space that takes up time in the branch and bound,
  therefore we should try to minimize it. However, solving linear programming is
  easy.
- You can minimize it by:
  - Proving A_lp is a subset of B_lp, then choose (A) as your model
  - Proving B_lp is a subset of A_lp, then choose (B) as your model
  - If neither of these are the case, then choose (A intersect B) as your model
