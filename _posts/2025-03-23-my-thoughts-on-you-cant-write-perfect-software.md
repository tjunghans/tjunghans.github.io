---
title: My thoughts on "you can't write perfect software"
tags: software pragmatic programmer
category: software
---

I made the following notes while reading the book *The Pragmatic Programmer 20th Anniversary Edition, chapter 4, Tip 36: You Can't Write Perfect Software*:

> Perfect Software doesn't exist

Everyone thinks they are the only good driver on the planet and yet we all drive defensively. This is how we should approach writing software.

> We are constantly interfacing with other people's code - code that might not live up to our high standards...

At a minimum, there are two people working on the same code: you today and you in a few months time. In a few months time you may find yourself looking back at what you wrote and scratching your head. No one writes perfect code, not even you and I. 

Test what you write. Ensure you have the highest level of confidence with what you deliver.

> Stick to small steps. 

I cannot stress this enough and it's more difficult than it sounds. 

Write code in small increments. 

Write, test, commit, create a merge/pull request. Rinse and repeat. 

This may sound like a lot of work, but from experience I know, that 10 pull requests will get reviewed and merged faster than one with the same changes combined.
