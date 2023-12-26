import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ArticlePage from './pages/ArticlePage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import ArticlesByTagPage from './pages/ArticlesByTagPage.vue'
import ArticleCommentList from './pages/ArticlePage/ArticleCommentList.vue';
import ArticleAuthor from './pages/ArticlePage/ArticleAuthor.vue';
import LoginPage from './pages/LoginPage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
  {
    path: "/",
    alias: ['/home', '/homepage',],
    component: HomePage,
    name: 'home'
  },
  // {
  //   path: "/home",
  //   redirect: "/",
  // },
  // {
  //   path: "/home",
  //   redirect: {
  //     name: 'home'
  //   },
  // },
  {
    path: "/about",
    component: AboutPage,
    name: 'about'
  },
  {
    path: "/articles/:id(\\d+)",
    component: ArticlePage,
    name: 'articles',
    props: true,
    children: [
      {
        name: 'articles.comments',
        path: '',
        component: ArticleCommentList,
        props: true
      },
      {
        name: 'articles.author',
        path: 'author',
        component: ArticleAuthor,
        props: true
      }
    ]
  },
  {
    path: '/tags/:tags+',
    name: 'tags',
    component: ArticlesByTagPage,
    props: true,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/:url(.+)?',
    name: 'not-found',
    component: NotFoundPage
  },
];

const router = createRouter({
  history: createWebHashHistory(), // uses "#" for routes
  routes,
});

router.beforeEach((to, from) => {
  console.log(`Global before each: ${from.name} -> ${to.name}`);

  // if (to.path !== '/login') { // avoid infinite loop
  //   return '/login';
  // }

  // if (to.name !== 'login') { // avoid infinite loop
  //   return { name: 'login' };
  // }

  if (['login', 'home', 'about'].includes(to.name)) {
    return true;
  }

  // Redirect to login, include full path as query parameter,
  // so that we can redirect back after successful authentication
  // http://localhost:8080/#/login?redirect=/articles/2
  return { name: 'login', query: { redirect: to.fullPath } };
});

const app = createApp(App);
app.use(router);

app.mount('#app');


