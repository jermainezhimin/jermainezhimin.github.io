---
title: "👶 Birth of Jermainecheng.com"
summary: "A rundown on how / why jermainecheng.com was built."
date: "2020-06-14"
---

This platform was built as an experiment to start journaling my experiences in the software industry. I needed a space to scribble down my thought processes so I have a resource for the next time I have to do it again. 

This was also a good way for me to build an online presence —  *I’m trying to slowly [move away](https://stallman.org/facebook.html) from Facebook and Instagram but still want to be able to share parts of my life with friends and family ❤️.* 

If you want to start something similar, I strongly suggest using [this](https://github.com/jermainezhimin/blog) or [Lee Robinson's Blog](https://github.com/leerob/leerob.io) as a starter template and use this blog post as a resource to understand the thought process of creating this codebase.

The file structure of the repository can be broken into 6 parts:
1. `pages/api/*` — API routes for server side content.
2. `pages/*` — Pages for the application, the application routing is built into the file structure (*no code needed*).
3. `blogs/*` — Markdown files serving the content for the statically generated pages and paths in `/pages/blogs/[id].js`.
4. `components/*` — React components.
5. `lib/*` — Helper functions / methods.
6. `public/*` — Any assets that should be served by next goes here.

This blog is built with these libraries / frameworks:
1. [**NextJS**](https://nextjs.org) — *A framework that allows you to run a statically rendered React application with microservices. It takes into consideration best practices of running React so we don't have to worry about configuring and the process of the transpilation / compilation process (i.e babel, webpacker). If you have not created a nextjs application before, I would strongly recommend following their [tutorial](https://nextjs.org/learn/basics/create-nextjs-app). The tutorial clearly explains how files should be organized and caveats in the ecosystem (some namespaces are reserved for running a backend with nextjs).*
2. [**ESlint**](https://eslint.org) / [**Prettier**](https://prettier.io) — *The default linters for catching buggy code and code styles respectively. These are not necessary but it makes the codebase alot nicer to work with* 
3. [**Emotion**](https://emotion.sh/) — *A popular `CSS in JS` option. This allows tighter css integration with code which works well if you are considering doing programmatic style transitions like dark mode.*
4. [**Chakra UI**](https://chakra-ui.com) — *A styleguide; Chakra UI is a great choice since it helps to define media breakpoints, color modes and style props. It is well designed and provides the atomic building blocks instead of UI components. This provides alot more flexibilty and customization when building the frontend.*
5. [**Remark**](https://github.com/remarkjs/remark) / [**Gray-matter**](https://github.com/jonschlinkert/gray-matter) — *These are markdown parsers that are able to convert markdown into `.jsx` elements and extract front matter content.This parsers are what allows you to write a blog in markdown and transforming it into a styled webpage.*
