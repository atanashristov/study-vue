# Notes

## 06.71 - VueX Basics - Installing and Setting Up

Install _vuex_ with: `npm install vuex@next --save`

Setup _vuex store_. Create a separate store file _store/index.js_:

```js
import { createStore } from "vuex";

export default createStore({
  state() {
    return {};
  },
  // getters work like computed properties from the components
  getters: {},
  // modify the store with mutations
  mutations: {},
  actions: {},
  modules: {},
});

```

Then use it in _main.js_:

```js
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

createApp(App).use(store).mount("#app");
```
