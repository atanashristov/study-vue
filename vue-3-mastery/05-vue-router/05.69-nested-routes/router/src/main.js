import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ArticlePage from './pages/ArticlePage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import ArticlesByTagPage from './pages/ArticlesByTagPage.vue'
import ArticleCommentList from './pages/ArticlePage/ArticleCommentList.vue';
import ArticleAuthor from './pages/ArticlePage/ArticleAuthor.vue';
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
    path: '/:url(.+)?',
    name: 'not-found',
    component: NotFoundPage
  },
  {
    path: '/tags/:tags+',
    name: 'tags',
    component: ArticlesByTagPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(), // uses "#" for routes
  routes,
})

const app = createApp(App);
app.use(router);

app.mount('#app');


