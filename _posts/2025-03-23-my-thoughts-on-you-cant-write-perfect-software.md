---
title: My thoughts on "you can't write perfect software"
tags: software pragmatic programmer
category: software
---

I made the following notes while reading *The Pragmatic Programmer, 20th Anniversary Edition*, chapter 4, Tip 36: You Can't Write Perfect Software:

> Perfect Software doesn't exist

Everyone thinks they're the only good driver on the planet, yet we all still drive defensively. **That's exactly how we should approach writing software.**

> We are constantly interfacing with other people's code - code that might not live up to our high standards...

At a minimum, two people work on the same code: you today, and you a few months from now. Look back at code you wrote a while ago and you'll probably find yourself scratching your head — no one writes perfect code, not even you and I.

**Test what you write.** Make sure you're as confident as possible in what you deliver.

> Stick to small steps.

I can't stress this enough, and it's harder than it sounds: **write code in small increments.**

Write, test, commit, open a pull request. Rinse and repeat.

It sounds like more work, but in my experience, **10 small pull requests get reviewed and merged faster than one big one with the same changes combined.**
