---
date: 2025-03-08 10:43:00 +02
title: My web application stack in 2025
tags: web application tailwindcss vite vitest swc typescript eslint react
category: frontend
---

The techstack of the latest application I work on:

- [Vite](https://vite.dev/) as the build tool, setup with [Typescript](https://www.typescriptlang.org/), [React](https://react.dev/) and [SWC](https://swc.rs/) (Rust based *S*peedy *W*eb *C*ompiler).
- [Eslint](https://eslint.org/), to check for and avoid potential bugs, but also to write more readable code.
- [Prettier](https://prettier.io/), to handle code formatting and style. I view any discussion about code style in a code review as 100% waste of time.
- [Vitest](https://vitest.dev/guide/) as the test runner.
- [SWC](https://swc.rs/) for compiling Typescript. It's faster and less strict, which is a plus during development, however the source code is run against the official [Typescript compiler](https://www.typescriptlang.org/download/) during testing.
- [Testing-Library](https://testing-library.com/) for its testing utlities.
- [Tanstack Table](https://tanstack.com/table/latest) for complex tables.
- [React](https://react.dev/) for writing re-usable components, handling view updates as a function of state, managing state (yes, no other state manager is used) and making working with the DOM easier.
- [TailwindCSS](https://tailwindcss.com/) for style and because it reduces options and thus decision fatigue, and its utility classes make building reusable and testable components a breeze.
- [React Router](https://reactrouter.com/) for routing and navigation.

My editor of choice is [Visual Studio Code](https://code.visualstudio.com/) and I use my favourite web browser, [Firefox](https://www.mozilla.org/en-US/firefox/) to preview my work.