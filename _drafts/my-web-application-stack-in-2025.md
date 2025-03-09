---
date: 2025-03-08 10:43:00 +02
title: My web application stack in 2025
tags: web application tailwindcss vite vitest swc typescript eslint react
category: frontend
---

I would use the following tools to create a new web application today:

- [Vite](https://vite.dev/) as the build tool, setup with [Typescript](https://www.typescriptlang.org/), [React](https://react.dev/) and [SWC](https://swc.rs/) (Rust based *S*peedy *W*eb *C*ompiler).
- [Eslint](https://eslint.org/), to check for and avoid potential bugs, but also to write more readable code.
- [Prettier](https://prettier.io/), to handle code formatting and style. I view any discussion about code style in a code review as 100% waste of time.
- [Vitest](https://vitest.dev/guide/) (or [Jest](https://jestjs.io/) otherwise)
- [Tanstack Table](https://tanstack.com/table/latest) for complex tables.
- [React](https://react.dev/) for writing re-usable components, handling view updates as a function of state, managing state and making working with the DOM easier.
- [SWC](https://swc.rs/) for compiling Typescript. It's faster and less strict, which is a plus during development, however I do run the code against the official [Typescript compiler](https://www.typescriptlang.org/download/) during testing.
  

## Why Typescript and not plain, vanilla Javascript?

If you're asking this question, then you're in for a treat, because Typescript will make your code easier to understand and manage, at least in the long run. 

Typescript saves you time by checking the usage of arguments and return values and values (variables) in general. In vanilla Javascript you'd be forced to write tests for these checks, which is 100% waste of time, if you ask me. Some may argue that Typescript creates new issues and errors you didn't have before, but those errors - or sources of frustration - stemp from either lack of understanding of Typescript or trying to be too smart with Typescript. As with any area in software development, when  things become to complex, it's a hint to turn around and pick a different approach. Keep your Typescript usage to the basics where possible.

## Why Tailwind?

While choices are good, I find too many choices to be overwhelming. CSS gives you almost unlimted choices for font-size, colours, borders, margins and paddings. That can result in lack of oversite and [decision fatigue](https://en.wikipedia.org/wiki/Decision_fatigue). I prefer to narrow down my choices and have a system in place. TailwindCSS does this for you by providing a level of abstraction. Instead of CSS, one uses predefined [utlity classes](https://tailwindcss.com/docs/styling-with-utility-classes) to apply style to an element. At first glance it looks odd to add multiple css classes to an html tag to make it look a certain way. However, this declarative styling makes testing and creating re-usable components possible, if not easier. I don't need to concern myself with CSS anymore, I leave that up to TailwindCSS. 

## Eslint

Eslint is an extremely powerful and versitile [linter](https://en.wikipedia.org/wiki/Lint_(software)).


