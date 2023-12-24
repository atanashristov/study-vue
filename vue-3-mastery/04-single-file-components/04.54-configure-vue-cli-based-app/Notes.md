# Notes

## 04.54-configure-vue-cli-based-app

The _public/index.html_ file is a lodash template. It takes data from several places like the title:

```html
    <title><%= htmlWebpackPlugin.options.title %></title>
```

which comes from _package.json_ property `name`:

```json
{
  "name": "todos",
```

We can create custom config file _vue.config.js_:

```js
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      title: "Todo Application",
      entry: "./src/main.js",
    },
  },
});

```

See [Configuration Reference](https://cli.vuejs.org/config/) page.

### Configure multiple pages

We also create config for a second page `_/landing.html`.

We create _LandingPage.vue_ component:

```js
<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <div class="text-center">
        <h3 class="text-3xl mb-2">Landing Page of Todo App!</h3>
        <a href="/" class="underline">Go to the app!</a>
      </div>
    </div>
  </div>
</template>
```

We add new JavaScript file _landing-page.js_ for it:

```js
import { createApp } from "vue";
import LandingPage from "./LandingPage.vue";

createApp(LandingPage).mount("#app");
```

And we define config for it in the _vue.config.js_ file:

```js
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      title: "Todo Application",
      entry: "./src/main.js",
    },
    landing: {
      title: "Landing Page for Todos",
      entry: "./src/landing-page.js",
    },
  },
});
```

Stop the process and run new: `npm run serve` and browse to _<http://localhost:8080/landing.html>_.

If we run `npm run build` and look at the _dist_ folder, we can see two html files: _index.html_ and _landing.html_ with different titles.
