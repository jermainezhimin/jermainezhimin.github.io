# jermainecheng.com 👶

Source code of my blog hosted at jermainecheng.com. It's heavily influenced and inspired by [Lee Robinson's Blog](https://github.com/leerob/leerob.io).

## Build With 
- [ESlint](https://eslint.org) / [Prettier](https://prettier.io) - Eliminate code smells and styling errors
- [Emotion](https://emotion.sh) - CSS in JS
- [Axios](https://github.com/axios/axios) -  Fetching in NodeJS
- [Chakra UI](https://chakra-ui.com) - Styleguide
- [NextJS](https://nextjs.org) / [ReactJS](https://reactjs.org) - Frameworks for building SPAs
- [Remark](https://github.com/remarkjs/remark) / [Gray-matter](https://github.com/jonschlinkert/gray-matter) - Parsing markdown and yaml files

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) for server side content.
- `blogs/*` - Markdown files serving the content for the statically generated pages and paths in `/pages/blogs/[id].js`
- `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone git@github.com:jermainezhimin/blog.git
$ cd blog
$ npm i
$ npm run dev
```

Create a `.env` file with (only if you require a newsletter functionality):

```
BUTTONDOWN_API_KEY=
```

## Contributing

If there is an error in blog articles, please open an issue with your requested changes. I'll do my best to get through them as soon as I can.

Opinion pieces will be accessed; but might not be added.

> In blog `<blog title>`, you mentioned `<incorrect content>`. This is incorrent because of `<reason with source>`. A recommendation is to use `<your recommended text>` instead.
