---
title: "Code Katas # 1"
description: "An intro to Code Katas and my first one."
date: 2023-03-13T05:00:00Z
image: "/images/posts/01.jpg"
categories: ["career", "tech", "code", "codekata"]
authors: ["Brandon"]
tags: ["career", "ceo", "tech", "software", "determination"]
draft: false
---
http://codekata.com/kata/kata01-supermarket-pricing/

## Overview
This example is more of a thought exercise. I will not be coding a solution (or solutions) to this example, but more outline various thought processes I may have while doing one. A simple thought experiment for supermarket pricing:
Some items have standard prices (i.e. banana for $0.25, bag of chips for $1.25)
Some items have higher tax (i.e. alcohol tax)
Some items can be bundled for lower value (3 for $5)
Some items can be bundled for free item (buy 2 get 1 free)
The Goal: Implement 1 solution (or more) that could encapsulate all scenarios and special pricing(s) of a supermarket.
### Thinkers: 
- Does fractional money exist?
- When does rounding take place?
- How do you keep an audit trail of pricing decisions, is this necessary?
- Are costs and prices the same class of 'thing'?
- How do you handle stock for items included in buy X get Y free?

### Brain Dump
This holds my initial thought process during my first run at this Kata. I have worked with inventory systems and pricing strategies before thanks to my job(s), so I am hoping I can leverage that previous knowledge to explain solutions to this problem.
Let's dumb it down for a bit: assume everything costs $1 and there are no discounts. We know we will have the standard scenario where the customer walks into the store, grabs items, brings them to the register and the store clerk will ring each item up totaling to $1 * X items. No extra calculation is necessary in this example. This helps us build a flow of the initial & over-simplified scenario.

Now, let's think about what a product looks like, in terms of a DB table:

`Product`
- id: int
- sku: nvarchar
- name: nvarchar
- (FK) pricing_strategy_id: int
- (FK) location_id: int

We have its id, sku, name, and a location reference. We purposefully avoid including the price directly in this object because we now are considering the various pricing scenarios to implement. Let's look at what the pricing strategy table looks like and I will discuss my thoughts below.

`PricingStrategy`
- id: int
- default_price: int
- discount_percentage: int
- min_qualifier: int
- max_qualifier: int

Let's break this down:
default_price: what is the price at its base if there were no discounts?
discount_percentage: what discount do we include? if its buy 2 get one free, that means we can set the discount percentage to 333
min_qualifier: what is the minimum amount of items to implement the discount_percentage?
max_qualifier: what is the maximum amount of items to implement the discount_percentage?

### The flow
Now that we have defined the basic set of tables, we can discuss at a high level what the flow would look like:
Customer walks in, grabs 3 canned beans (buy 2 get 1 free, $2.50 each), 2 bananas (regular pricing, $1 each), 3 bags of potatoes (buy 3 for $5.00, originally $2.00 each). 
Customer goes to checkout and clerk begins to ring up customer.
The total at the register before calculation is (2.5 * 3) + (2 * 1) + (3 * 2) = $15.50
The register begins looking up pricing strategies and applying the discounts where necessary:
For the beans:
default_price: 250 (int to avoid float rounding error, divide and round at the end of checkout)
discount_percentage: 333 (buy 2 get 1 free = 3 quantity set to 2/3 price = 1/3 discount)
min_qualifier: 2
max_qualifier: 2
For the bananas:
default_price: 100
discount_percentage: 0
min_qualifier: MAXINT
max_qualifier: MAXINT
For the bags of potatoes:
default_price: 200
discount_percentage: 5/6 total so 1/6 discount ~= 167
min_qualifier: 3
max_qualifier: 3

Total is evaluated:
Beans: 2.50 * 3 -> (2.50 * .66) * 3) ~= 4.97
Bananas: 2 * 1 -> (no discount) = 2.00
Potatoes: 3 * 2 -> (3 * (2 * 0.833)) ~= 4.998

This initial solution seems to work okay for various pricing strategies. It is up to the business logic to handle the pricing strategy implementation however it seems fairly novel at a glance. I will continue to reflect on this Kata as the week goes, but this was a fun example of how to think of solutions on random problems. 