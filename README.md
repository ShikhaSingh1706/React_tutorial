#React_tutorial
# virtual dom

# React Fiber Architecture

# Introduction
React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

# reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.

# Reconciliation versus rendering
The DOM is just one of the rendering environments React can render to, the other major targets being native iOS and Android views via React Native. (This is why "virtual DOM" is a bit of a misnomer.)


# tailwind install proceess
1-  npm create vite@latest
2- project name
3-react
4-javascript
5-cd project name
6-npm i
7-npm install -D tailwindcss@3.3.3 postcss autoprefixer
8-npx tailwindcss init -p
9-npx tailwindcss -v
10-index.css-
@tailwind base;
@tailwind components;
@tailwind utilities;
11-npm run dev
12-taiwindcss.config.js- content:[
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
]
# you are done here-All the best!
