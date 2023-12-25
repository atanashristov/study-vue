import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ArticlePage from './pages/ArticlePage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
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
  },
  {
    path: "/article/:id",
    component: ArticlePage,
    name: 'article'
  },
  {
    path: '/:url(.*)',
    name: 'not-found',
    component: NotFoundPage
  }
];

const router = createRouter({
  history: createWebHashHistory(), // uses "#" for routes
  routes,
})

const app = createApp(App);
app.use(router);

app.mount('#app');


