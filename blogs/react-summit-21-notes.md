---
title: "🎵 React Summit '21 Notes"
summary: "Insights from React Summit '21 conference"
date: "2021-04-17"
---

- [Internationalizing React?](#internationalizing-react)
- [Remote Rendering With Web Workers](#remote-rendering-with-web-workers)
- [Building Better Websites With Remix](#building-better-websites-with-remix)
- [Let's Build React Query in 150 Lines of Code!](#let's-build-react-query-in-150-lines-of-code!)
- [Scaling React Development with Nx](#scaling-react-development-with-nx)
- [Doing the Least Amount of Work Possible: An Intro to Runtime Performance](#doing-the-least-amount-of-work-possible:-an-intro-to-runtime-performance)
- [Lessons Learnt from Building Interactive React Applications](#lessons-learnt-from-building-interactive-react-applications)
- [Building Accessible React Components](#building-accessible-react-components)
- [React on the Blockchain](#react-on-the-blockchain)
- [Platform powered: Build a Frontend Platform to Scale as fast as You do?](#platform-powered:-build-a-frontend-platform-to-scale-as-fast-as-you-do?)
- [Test Kitchen: A Recipe for Good Tests](#test-kitchen:-a-recipe-for-good-tests)
- [How Core Web Vitals Will Affect Google Ranking in 2021](#how-core-web-vitals-will-affect-google-ranking-in-2021)
- [XState: The Visual Future of State Management](#xstate:-the-visual-future-of-state-management)
- [Lessons To Outlive React](#lessons-to-outlive-react)
- [Graphic = fn(state)](#graphic-=-fn(state))
- [Build a UI that learns: Intelligent Prefetching with React and TensorFlow.js](#build-a-ui-that-learns-—-intelligent-prefetching-with-react-and-tensorflow.js)
- [We Don't Know How react State Hooks Work](#we-don't-know-how-react-state-hooks-work)
- [Inside Fiber: An Overview Of React's Reconciliation Algorithm](#inside-fiber:-an-overview-of-react's-reconciliation-algorithm)
- [Building the Right Product and Building It Right: A Glimpse into Extreme Programming and Atomic Design React Without Javascript?](#building-the-right-product-and-building-it-right:-a-glimpse-into-extreme-programming-and-atomic-design)
- [Stories and Strategies from Converting to TypeScript](#stories-and-strategies-from-converting-to-typescript)

> 🪙 Credit goes to all speakers at [React Summit '21](https://remote.reactsummit.com) 

## Internationalizing React
**Definitions**

1. i18n (_internaltionalization_) — Process of architecting your app so l10n works
2. l10n (_localization_) — Making the content and experience suitable for a given locale

**Requirements**

1. Formatting the date correctly based on locale (_see the date formatting libraries_).
2. Allowing bidirectionally of content layout since there are some languages that read from right to left vs the common left to right (_see the RTL formatting libraries_).
3. Text should be translated for different languages.

**Locale Overview**

There are 5 parts to localization: `language`, `script`, `country`, `variant` and `extension`. The most common used is just `language` and `country` codes as denoted in es-ES (_left value is the language and the right value is the country_) for spanish in spain. The data type used for accessing translation stting are standardized to ensure this look up heavy process is fast.

> const TranslationMap = {
>    "en-ES" : {
>        SomeLabel: "Translated Label Text"
>    }
> }

**References**

1. Internationalization — depends on locale and country code 
    - [react-intl](https://formatjs.io/docs/react-intl/)
    - [react-i18next](https://react.i18next.com)
2. Date Formatting — depends on locale and country code
    - [Javascript Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) 
    - [Moment/Luxon](https://moment.github.io/luxon/)
    - [date-fns](https://date-fns.org)
3. RTL (_right to left_) — depends on if we want too render LTR or RTL direction 
    - [rtl-css](https://rtlcss.com)
    - [rtl-css-js](https://github.com/kentcdodds/rtl-css-js)
    - [jss-rtl](https://github.com/alitaheri/jss-rtl)

## Remote Rendering With Web Workers
**Introduction**

Shopify built this to run external code in a safe a secure way (_i.e making the web worker a sandbox_).

> 💡 This can be extended to be run on the server instead to define components.

**Core Concepts**

1. Javascript sandbox
    - Securely execute code in a background thread
    - Communicate to the main thread by sending messages (_see RPC section_). 
    - As a web worker on web and as a headless JS engine on iOS/Android
2. RPC — Remote procedure calls for communication between the main thread and helper (web worker / headless JS engine) 
3. Proxy layer — A way of allowing the host to call functions in the JS sandbox and vice versa

**Libraries**

1. [Remote-UI](https://github.com/Shopify/remote-ui)

## Building Better Websites With Remix
**Why Remix?**

1. Remix fully server side rendered react pages, this means it seems like a single page application but only sends the minimum required javascript and css files for running what is rendered.
2. Styles are programmatically removed when their respective routes are not rendered.
3. JSX is compiled to HTML via react.hydrate and only that is sent to the browser.

**Why not Remix?**

1. There direct competitor is NextJS and are more battle tested
2. Remix is still in early access and is not free OSS

**References**

1. [Remix](https://remix.run)
2. [Remix Starter Projects](https://github.com/remix-run/starter-vercel)

## Let's Build React Query in 150 Lines of Code!  
**Requirements**

1. It needs to fetch, cache and update the data.
2. Data should be able to come from anywhere (_i.e client_) as long as it returns a promise.
3. It should provide cached data until it is updated.
4. It should be only triggered once even if used in multiple components.

**System Design**

1. We need to keep track of these different values (_i.e using state_) in an API request. These allows us to cache queries and prevent duplicate inflight queries: 
    - `isFetching`
    - `data` 
    - `error`
    - `status`
    - `lastUpdated`
    - `queryHash` — The query parameters used and their corresponding data
    - `queryKey` — The query parameters used 
    - `promise` — A pointer to hold onto the resolving promise (_i.e in flight API request_)
    - `subscribers` — Who to notify when fetched data has changed?
2. Client should be defined by users (_and abstracted_) in case you would like to use a custom built API client. 
3. Query observer to update any subscribers, refetching logic with stale time, clearing cache (_i.e garbage collection_)

> 💡 You can force rerenders via `const [,rerender] = React.useReducer (i=>,o)`

## Scaling React Development with Nx
**Core Concepts**

Nx is a library to help monorepo management, specifically:
1. Dependency graph (_on how the react components are imported_)
2. New project creation (_based on best practices_)
3. Dependency constraints (_in case some pages should not access certain internal libraries or only access shared libraries_)

> 💡 Note that Nx seems to be opinionated about best practices which might conform to how things are done for you (_requires prototyping to see if the project is suitable_). 

**References**

1. [Nx](https://nx.dev)

## Doing the Least Amount of Work Possible: An Intro to Runtime Performance
**Core Concepts**

Runtime performance starts when the page is fully interactive and the javascript has been loaded into the browser (_i.e blocking the main thread_). This are some runtime performance issues:
1. Computationally expensive tasks 
2. Animations and graphical updates 
3. Reflow/Repaint and layout
4. Parsing
5. Memory Leaks

A runtime performance drop is apparent since the website freezes up, drops frames or has input delay. There are some prescriptive things to improve runtime
performance (_do not over optimize_):
1. Use regular for loops (_i.e scale properly overtime_)
2. Instead of searching large arrays, use lookup tables
3. Avoid creating new objects
4. Turn off animation (_perceived performance_)
5. Avoid reflow/relayouts
6. Caching
7. Sneaky tricks (_i.e set object index to undefined instead of using the delete keyword_)

**How To**

1. Profile runtime performance
    - Go to the developer console in Google Chrome.
    - Go to the performance tab and click record.
    - Perform the action you want to measure.
    - Anything with the red indicator is blocking the main thread.
    - Right clicking and selecting performance indicator will bring up the CPU usage chart of the app.
2. Profile specific sections of code (_runtime performance related_):
    - Add the `performance.mark` to the start and end of the relevant code to measure.
    - Add `performance.measure` to compare between the start and end markers.
    - Begin profiling runtime performance (_see 1_). There will be a new `timings` field with the relevant markers to view how long each step is taking.
3. Profile memory performance
    - Go to the developer console in Google Chrome.
    - Go to the memory tab and click record.
    - Perform the action you want to measure.
    - The objects stored in memory will be visible (_and their corresponding variable naming_) and how they evolved (_vs before the snapshot_).

## Lessons Learnt from Building Interactive React Applications
**Core Concepts**

Animation should always be used to provide visual cues to the user hinting what to expect. These are some tips when designing animations for web / application interactions:
1. Subtly fading in text after loading (_without a loading indicator feels more native like the page is loading but this does not work for load times > 500ms_).
2. Transform position of content from where it should be coming from (_clicking back should move the current page should to the right_).
3. Be sure to take into considerations accessibility concerns in reduce motion.

**Libraries**

1. [Framer motion](https://www.framer.com/motion/) (_hides abstraction when components are initially placed in the DOM_)


## Building Accessible React Components
**Introduction**

The main guideline used to benchmark accessibility is WCAG. There are 3 grades to achieve `A`, `AA`, `AAA` (_minimum grade to be considered accessible is `A`_)

**Main Principles**

1. Perceivable — Content can be viewed by sight impaired users. 
2. Operable — Keyboard / mouse, text read via screen reader, etc 
3. Understandable — Know which input fields are required, etc
4. Robust — Isn't buggy.

**Form Specific Tips**

These are some important element properties when designing forms to be accessible are :
1. `required` — If this input is required.
2. `aria-required` — If this input is required when there is no HTML5 support.
3. `aria-labeledby` — If this input has specific instructions and links to another DOM element with text (_i.e another DOM element labels this input
element_).
4. `aria-describedby` — Similar to `aria-labeledby`, but will override `aria-labeledby`. It is useful to tag errors with this component.
5. `aria-invalid` – Used in conjunction with `aria-describedby`, if it an error.
6. `aria-disabled` - Used instead of `disabled`; Disabled removes elements from the accessibility tree.

**Generic Concerns**

1. Do not remove focus outlines, making it transparent helps with high contrast edge cases.
2. Make sure items are focusable where needed (_try tab-ing in each page_).
3. Dialogs are tricky and using libraries like `react-a11y-dialog` is suggested instead of building from scratch.
4. `content-visibility` should be used to hide elements out of the viewport.
5. Adding commas are great in `alt` text for when the screen reader should pause.
6. Navigating / creating a new tab should be explicitly mentioned in links under the `alt` text.
7. Media queries are a great way of capturing if the reduce motion option is toggled.

**References**

1. [jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
2. [axe-core/react](https://github.com/dequelabs/axe-core-npm#readme)
3. [pa11y](https://github.com/pa11y/pa11y)
4. [storybook-addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y)
5. [WAVE Browser Extensions](https://wave.webaim.org/extension/)
6. [Web AIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

## React on the Blockchain
**References**

1. `web3` is an interface to the blockchain
2. `truffle` is used to build smart contracts
3. `solidity-coverage` is used for linting
4. `openzeppelin-solidity` is used for the math behind hashing on the merkle tree

## Platform powered: Build a Frontend Platform to Scale as fast as You do?
**Introduction**

Usually tools and processes are only effective in one order go magnitude of scale in a company, different approaches help in the various levels of scale. In Lyft, they migrated from monolith to micro services which lead to:
1. Long lived services required maintenance
2. Platform was fragmenting
3. Infrastructure updates were hard to apply (_support is required for all versions released_)

**Core Concepts**

Building the application as a tiered service, this allows seperation of concerns:
1. Top layer; App — Apps frontend which most developer work on to ship features.
2. Mid Layer; Libraries — The helper methods most used in the top layer.
3. Low Layer; Infrastructure — Configurations to build the Javascript bundle

The lower two levels are managed with a core team to empower the top layer (_where all product engineers work on_). The most problems come in the middle layer in terms of managing and structuring libraries (_to prevent bloat and duplication_). 

**Lyft Specific Solution**

1. Building on top of NextJS (_since it comes out of the box with best practices to follow_) which solves the lowest level of the stack. 
2. Standardizing libraries which help business logic development via:
    - Library helpers for frontend functions (_essentially services to build a react context for passing information through the application_).
    - Express middleware for serverside functions.
3. JSCodeShift to migrate breaking changes like exported naming from libraries (_no longer run into breaking changes_). 
4. Versioned migrations to allow better tracking of what migrations should be run (_since they are stateful_).
5. Tying both the platform and library versions (_this joins the two layers into one_).
 
## Test Kitchen: A Recipe for Good Tests
**Core Concepts**

1. Test should inspire confidence that the core functionality does not break.
2. Tests should be automated (_so developers do not have to run it manually and we can run it all the time_). It is important to run on the branch before merging and on the main branch after merging.
3. Tests should be fast:
    - Run tests in parallel.
    - Do not wait/sleep in tests unless necessary.
4. Tests should be behavioral and structure intensive and be based on the consumer perspective where possible.
5. Tests should be deterministic (_same input and output_), isolated (_independent from other tests_) and composable(_runnable without side effects and race condition_).
6. Tests should be specific and one per test case.
7. Tests should be short.
8. Test should have a good description.
9. Tests should be expressive (_visual regression instead of validating snapshot for color changes_).
10. Test should be writable.

## How Core Web Vitals Will Affect Google Ranking in 2021
**Core Concepts**

It is important to increase performance; since a decrease of 100ms on latency increases sales by 1%. The best way to measure this performance is through the end user perceived experience via `Core Web Vitals`:
1. Measuring Loading — `LCP`; Largest Contentful Paint, This is when the largest item has been loaded on to the screen (_Good < 2.5s > Meh < 4s > Poor_).
2. Measuring Interactivity — `FID`; First Input Delay, This is when the first input has been interacted with and when the browser processes the event (_Good < 100ms?> Meh < 300ms > Poor_).
3. Measuring visual stability — `CLS`; Cumulative Layout Shift, This is when the content moves on the page?(_Good < 0.1 > Meh < 0.25 > Poor_).
 
**NextJS Specific Tips**

1. Prerender content via Static generation or server sider rendering. 
2. Optimize images:
    - Use image and with to prevent layout shift.
    - Lazy load images based on viewport.
    - Use modern image types (_WebP_).
    - Use source sets to load correct image quality per device.
3. Optimize fonts:
    - Use a variable font.
    - Preload your font file.
    - Use `font-display: optional` to prevent layout shifts.

**References**

1. [web-vitals](https://github.com/GoogleChrome/web-vitals)
2. [Lighthouse](https://developers.google.com/web/tools/lighthouse#devtools)
 
## XState: The Visual Future of State Management
**Introduction**

State and events are the best way to application state (_think about redux_) but are not easy to visualize. XState tries to take learnings from Redux but makes it state first and allows it to be easily visualized, test generation, analytics and autogeneration. It allows you to catch DOM events and updating the state accordingly.

**Library Specific Functions**

1. `createModel` — Allows you to store data (_also know as context_) 
2. `createMachine` — Creates the state machine
3. `useSelector` — Pulls data from the machine

**References**

1. [xState](https://github.com/davidkpiano/xstate)

## Lessons To Outlive React
They can be grouped into `core`, `interface`, `productionize` and `humanize` concepts. These are the lessons in detail:
1. Reconciler + Scheduler Pattern
    - To make a program regenerate every time, add caching and structural sharing of previous files.
    - This means each build system has two parts, a scheduler which ?orchestrates what and when work needs to be done and the rebuilder which hashes and then decide whether to build or extract from the cache.
2. Minimal API Surface Area (_similar to YAGNI_)
    - Remove as much complexity as you add , it's much easeier to recover from an explicit and repetitive API.
    - Use design patterns instead of increasing the framework.
3. API Design is Language Design
    - Name something with better intent and assumption they will become part of language.
4. Optimize for Change
    - It should be easy to read and write (_memorable, guessable, unambiguous and readable_).
    - Easy to change as new requirements come in (_production pivots_).
    - Enable local Reasoning by having all context within the same file so users do not have to grok global context.
5. Test the Public API (_write test for what is exposed to the user_).
6. Devtools is not optional.
    - React Codemods are great to auto migrate code.
    - Error codes — Allows better understanding and standardization of possible errors.
    - Readable lint errors in console — So users know what they are doing wrong
    - Fixtures — Be able to toggle on different feature flags for different combination of use cases
    - Hold the line — Do not allow your important stats to move in the wrong direction (_test coverage, type coverage, bundle sizes, perf metrics, etc_)
7. Community is Important, listen to feedback (_they are the network effect_).

## Scaling Component Across Multiple Frameworks
**Core Concepts**

The best way to create a standardized component would be to create a DOM element at the low level via `CustomElements` (_see [mozilla docs on custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)_) and only uses native functionality. This element will be usable with React Angular, etc.

**Libraries**

1. [Stencil](https://stenciljs.com)

## Graphic = fn(state)
**Core Concepts**

User experience is always a function of state (_we always show things based on some state_). This applies to icons as well which means we should be abstracting icons as React components since SVGs can be rendered dynamically with props (_change color and size_).

## Build a UI that learns: Intelligent Prefetching with React and TensorFlow.js
**Core Concepts**

In a large single page app, the best way to reduce bundle size is to defer the loading of each screen until navigation happens (_via [React.lazy](https://reactjs.org/docs/react-api.html#reactlazy)_). To optimize the flow, sometimes we want to prefetch routes to reduce the loading time. In this use case, data can be collected to identify user's full navigation pattern (_per session_); With Deep Learning, it allows the system to predict the sequence or next page the user will be navigating to. The best way to share this deep learning model is through Tensorflow's model object; Analysis is done in the backend and prediction are run in the client.

**References**

1. [TensorFlow.js](https://www.tensorflow.org/js)

### We Don't Know How React State Hooks Work

> 💡 Setting state in an async function, each call to set state will cause a re-render (_eager loading_). If it is within one function context, all calls to set states will be implemented before the UI is updated (_lazy loading_).

## Inside Fiber: An Overview Of React's Reconciliation Algorithm
**Introduction**

To match 60fps, a new frame is displayed every `16ms`. This means if the rendering and reconciliation takes > `16ms`, there would be a dropped framed with causes a _choppy_ or _janky_ UI (_this is extremely important for Javascript since it is a single threaded language_). React Fiber does a simulation of being multi threaded by scheduling and prioritizating work. We can interactiwith it via React's Concurrent which is experimental. For example, `useDeferred` hook schedules the work with a different priority. This means the reconcilation can:
1. Pause work and resume it later (_and not block the thread_).
2. Assign different priorities to different types of work.
3. Reuse previously computed work, or throw it away if no longer needed.

**Definitions**

1. Fiber — A Javascript object that contains information about a component, it's input, and it's output. This is the smallest unit in React (_each element is represented as a Fiber_).
2. Fiber Trees — A in-memory version of the DOM React uses to compute what components should be updated. There is a `current` and `work-in-progress` tree to compute the current and future states. Another way to think about these two trees are like the master branch vs your personal branch.When the work is completed, you push to master without hindering it's state and when it's convenient to the master branch (_in this case main thread should be available_).
3. Two phase algorithm — On the first pass, it does reconciliation (_pause-able/continue-able_) and the second pass it does commit (_uninterruptible_).
 
## Building the Right Product and Building It Right: A Glimpse into Extreme Programming and Atomic Design
**Core Concepts**

1. Communication — Heavily communicate so everyone is on the same page
2. Simplicity — We want to build the smallest MVP to test the ideas.
3. Feedback — We want to get feedback ASAP to provide more insight for the next iteration of the work 
4. Courage — Throw things away if users don't use it
5. Respect — Respect all opinions and create a safe space for it

**Job Descriptions**

1. Product Mangers — Get buy in from the company and ensure features are broken down in a sustainable product roadmap. 
2. Designers — Evaluate the product design and extract the feedback from the users.
3. Engineers — Evaluate feasibility and implement the work.

## Stories and Strategies from Converting to TypeScript
**Core Concepts**

1. Take note of hidden costs (_user interviews_) before proposals, etc.
2. Hype train is really useful for pushing people to adopt new.
3. Advertise it by helping individuals understand the problem and the solution.
4. Knowledge Sharing is important via `Internal Presentation` / `Brown Bags` / `Code Pairing` (_does not scale but useful_). 
5. Spreading consensus with two helpers:
    - Area Experts — People who know the technology on the best practices and how to bring it into the company (_2 per project to bounce off ideas_)
    - Cheerleaders — People are excited to try things out to be beta testers and help as the network effect (_1 per affected team_)
6. Create a style guide document where possible and have a FAQs. 
7. Automate wherever possible.
8. Never convert and change behavior.
9. Celebrate, so people remember the work!

**Typescript Specific Workflow**

1. Convert few files (_minimal disruption without sudden change_).
2. Integrations should be built up beforehand for the incremental change.
3. Ensure these configurations are turned on to prioritize ease of adoption:
    - `allowJS/checkJS`: `off` — No need to disrupt engineer with messages for legacy code. 
    - `noImplicitAny`: `off` — Too time consuming & difficult in a JS/TS codebase.
    - `strictNullchecks`: `on` — Useful and not expensive.
4. Have dedicated PRs for converting things to typescript to allow bite size work for various engineers to try the migration. The PR description should explain any new syntax for others.
5. Monitor how the Typescript percentage changes overtime.
6. Optimize for comfort so everyone feels comfortable with the changes.
7. Used [TypeStat](https://github.com/JoshuaKGoldberg/TypeStat) (_custom helper_) to programmatically help creating types, etc.
8. Any casts are fine to get things to migrate to Typescript.
