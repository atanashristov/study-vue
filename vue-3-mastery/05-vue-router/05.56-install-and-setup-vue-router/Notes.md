# Notes

## 05.56-install-and-setup-vue-router

Create new project, and change directory to it:

```sh
vue create router && cd router
```

Install the router with:

```sh
npm install vue-router@4
```

Create two pages _src/pages/HomePage.vue_ and _src/pages/AboutPage.vue_.

Change the _src/App.vue_ template to include `<RouterView/>` wherever we want the pages to display based on the route changes.

MOdify the _main.js_ file to define the routes, create instance of router and apply it on the app object:

```js
import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/about",
    component: AboutPage
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

Re-run _npm run serve_.

Now we should have two pages available at `http://localhost:8080/#/` and `http://localhost:8080/#/About`.
