---
title: "2/17/2023 - Hop.io"
description: "Tired of thinking about an informative commit message on your changes?"
date: 2023-03-26T05:00:00Z
image: "/images/posts/01.jpg"
categories: ["career", "tech-review-fridays", "software"]
authors: ["Brandon"]
tags: ["tech", "review", "fridays", "software", "development", "tools"]
draft: false
---



## Overview
"Hop allows developers to quickly and easily deploy their code and start serving traffic to the masses without having to worry about the underlying infrastructure.

As a deployment platform, we’ve created developer-friendly abstractions that offer extensive visibility and control, freeing developers from the complexities of solutions such as Kubernetes. We allow you to deploy straight from GitHub or Docker Hub with no configuration needed, as well as providing presets for popular services such as Redis, Postgres and more."

## Personal Experience
My personal experience with hop was for the most part very smooth. They offer free tiers with small resources (all you really need for small apps). I went to deploy a flask app from my github, and wanted to expose an app to an external ip. So pretty small / limited experience, but I navigated for a good few hours.

## Pros
Very easily integrated with Github (+ many others as well). I was able to connect my github and pull the repository I wanted very quickly
Docker image autocreation + storage: You can set rules to build automatically whenever a specified branch is pushed to, and this will trigger a rebuild and release of the new image. Super nice for non-CI/CD folks!
Free options (in terms of small resource allocation)
Create teams so other members can join (also free)

## Cons
Still very new -- saw it on twitter  and doesn't have too much traction yet but the overall process is well created, just limited tutorials / support
Not a crazy amount of customizability

## References
- https://docs.hop.io/getting-started/introduction