---
title: "What is Cryptography"
description: "Cryptography is a powerful and packed category within Mathematics and Software Development"
date: 2023-03-26T05:00:00Z
image: "/images/posts/01.jpg"
categories: ["career", "crypto", "software"]
authors: ["Brandon"]
tags: ["cryptography", "hashing", "software", "development"]
draft: false
---

## Overview
Cryptography in software development refers to the practice of using mathematical algorithms to secure data and communication between parties. It involves techniques such as encryption, decryption, digital signatures, and secure key management to protect the confidentiality, integrity, and authenticity of information.

## What is it?
An analogy to understand cryptography would be a lock and key system. Just as a lock and key can secure a physical object, cryptography can secure digital information. The lock represents the encryption algorithm, which scrambles the data into an unreadable format. The key represents the decryption algorithm, which is used to unlock the data and restore it to its original form.

### Technically, What is it?
In technical terms, cryptography involves the use of different types of algorithms, such as symmetric-key algorithms, public-key algorithms, and hash functions, to ensure secure communication and storage of data. Symmetric-key algorithms use the same key for encryption and decryption, while public-key algorithms use two different keys for the same purpose. Hash functions, on the other hand, are used to create a fixed-length, unique representation of data, which can be used for verifying the integrity of the data.
Cryptography also involves the use of protocols such as SSL/TLS (Secure Sockets Layer/Transport Layer Security), SSH (Secure Shell), and PGP (Pretty Good Privacy) to secure communication channels between parties.

## Let's talk numbers
Beautiful description presented by Gilles 'SO- stop being evil' on StackOverflow
Today, your run-of-the-mill file encryption uses 128-bit keys, perhaps even 256-bit keys. Each key bit doubles the time it takes to go through all the possible keys. There are 2128 (2 to the power of 128) possible keys, so it takes 2128 attempts to try them all. It takes 2128/2 = 2127 attempts to have an even chance of finding the right key.

What's 2128? It's about 340 billion billion billion billion. Let's take some orders of magnitude:

A fast computer can perform about one billion operations per second.
If you're really rich (say with the budget of a government department), you might be able to afford one billion computers.
The universe is around one billion billion seconds old.
So if you had a tremendous computer budget and had somehow started running them at the birth of the universe, solely to brute-force one key, you'd have covered about 1 billion billion billion billion keys by now. You'd still have less than a 1% chance of having found the key.
In practical terms, this means that brute-force on a key is simply not doable. You have to find another method.

This hasn't always been true. In the past, most governments restricted cryptography to something anyone could crack if they could afford an expensive computer. In particular, until 2000, the United States (where a lot of software originated) forbade the export of software that was capable of using keys larger than 40 bits. With only 240 possible keys, brute force was doable even on a budget. Other governments had similar restrictions: for example, in France, at the time, it was illegal to import or use encryption with keys larger than 48 bits.

A lot of software restricted encryption to such ridiculously small keys to avoid falling under the scope of these laws, either the US export laws or other countries' similar laws. Even after the restrictions were lifted (at least in democracies), it took a while for old software and file formats to disappear.
Now let's compare the numbers with passwords. Suppose you password is made of random letters. Not a mnemonic, pronounceable sequence of letters: just letters. Just lowercase a–z letters. How long does the password have to be to have the equivalent strength of a 128-bit keys, meaning that there are as many possible passwords as there are 128-bit keys? This is between 27 and 28: it takes a 28-letter random password to be as strong as a 128-bit key. Putting special characters helps, but only a little: with the 94 characters that are accessible on a US keyboard, you need ≈19.5 characters to have the strength of a 128-bit key.

In practice, most people's passwords are not nearly that long, and most people's passwords are much more mnemonic than a random sequence of letters. Using words, pronounceable syllables, or mnemonic punctuation like l33t, greatly reduces the number of possibilities. A famous XKCD comic estimates the entropy of two common password selection methods — the “entropy” is the number of possibilities when the adversary knows how the method works (e.g. “take a dictionary word and replace some letters by punctuation”) but not the details of the specific instance (which word, which replacements), coming to a measly 28-bit strength for l33t-style passwords. That's about a quarter of a billion possibilities.

## Recap
Overall, cryptography is an essential aspect of software development, particularly for applications that deal with sensitive information, such as financial transactions, medical records, and personal data.