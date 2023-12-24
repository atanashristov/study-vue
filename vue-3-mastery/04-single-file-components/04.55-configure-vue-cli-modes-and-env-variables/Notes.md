# Notes

## 04.55-configure-vue-cli-modes-and-env-variables

We can configure path to pages that are static not necessarily Vue pages (<https://yourapp.com/contact>), blog (<https://yourapp.com/blog/some-post>), etc.

To do this we use the `publicPath` property.

To do this we change the _vue.config.js_ file and specify the `publicPath`:

```js
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/app",
```

Make sure you restart `npm run serve`. You should see now that your app has a new address:

```txt
  App running at:
  - Local:   http://localhost:8080/app/
```

**ISSUE:** Still defaults any path to index.html. Root path also still works.

### Modes

The app runs in 3 different modes:

- development: when we run `npm run serve`
- production: when we run `npm run build`
- test: for tests

We can also serve in production mode with `npm run serve -mode=production`.

The mode is available in `NODE_ENV` variable, that is available in `process.env.NODE_ENV`.

So we can set the path conditionally:

```js
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/app" : "",
```

### Environment variables

You can specify env variables by placing the following files in your project root:

```txt
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
```

An env file simply contains key=value pairs of environment variables:

```txt
FOO=bar
VUE_APP_NOT_SECRET_CODE=some_value
```

See [Modes and Env Variables](https://cli.vuejs.org/guide/mode-and-env.html) page.

If we create 2 env files with same variable set differently, _env.development_ version:

```txt
API_URL=http://localhost:8080/api
```

, and production version _env.production_:

```txt
API_URL=https://api.mydomain.com/api
```

then the variable `process.env.API_URL` will be available anywhere within the app, also inside the Vue components.
