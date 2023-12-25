# Notes

## 05.59-named-routes

We do not want to depend on hardcoded url paths when adding links, but on named routes:

- links can change
- hard to remember paths
- automatic encode/decode of parameters

The attribute `to` nas to be bound and we pass in the route name:

```html
  <div>
    <div><RouterLink :to="{name: 'home'}">Home Page</RouterLink></div>
    <div><RouterLink :to="{name: 'about'}">About Page</RouterLink></div>
  </div>
```

And we define _name_ to the routes in _main.js_:

```js
import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
  {
    path: "/",
    component: HomePage,
    name: 'home'
  },
  {
    path: "/about",
    component: AboutPage,
    name: 'about'
  }
];

const router = createRouter({
  history: createWebHashHistory(), // uses "#" for routes
  routes,
})

const app = createApp(App);
app.use(router);

app.mount('#app');


```
