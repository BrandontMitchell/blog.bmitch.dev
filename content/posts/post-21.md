---
title: "3/24/2023 - MongoDB"
description: "Looking to get away from standard Relational DBs?"
date: 2023-03-26T05:00:00Z
image: "/images/posts/21.jpg"
categories: ["career", "tech-review-fridays", "software"]
authors: ["Brandon"]
tags: ["tech", "review", "fridays", "software", "development", "tools"]
draft: false
---


## Overview
Mongo DB is a NO-SQL DB, offering support for documents inside collections. This allows for a wide range of data structures, similar to JSON, with depth and no table strictness. Obviously this isn't always desired for all use cases, however it has numerous benefits. I tend to use Mongo for many of my personal projects, simply because the amazing free tiers they offer, ease of use from packages within Python or Node.js, and the ability to not have to configure local / hosted machines for a SQL Server. 


[![Watch the video](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FQ1NWcxNJXUQhsOdEMWBq%2Fuploads%2F4wN6CR0HpJMW3iymwr7d%2Fimage.png?alt=media&token=192dbffb-22de-48e1-b479-eb4e64ed22bb)](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FQ1NWcxNJXUQhsOdEMWBq%2Fuploads%2F4wN6CR0HpJMW3iymwr7d%2Fimage.png?alt=media&token=192dbffb-22de-48e1-b479-eb4e64ed22bb)

## Pros
- Most data is stored in RAM (on Mongo's server-side), allowing for fast queries
- Simplicity: Mongo has out of the box support for any data structure, free of charge!
- Sharding: Larger datasets are able to utilize sharding (dividing horizontally - multiple servers)

## Cons
- No support for JOINs (have to query both collections for example)
- Indexing is confusing
- High memory usage & non-normalized databases

## References
- https://www.mongodb.com/
