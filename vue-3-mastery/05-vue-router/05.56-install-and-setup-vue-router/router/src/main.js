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

