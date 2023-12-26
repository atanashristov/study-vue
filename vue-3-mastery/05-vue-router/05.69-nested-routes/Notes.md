# Notes

## 05.69-nested-routes

To the _route_ we define _children_. Their _paths are relative_ and do not start with slash. Note that one _nested route has no path_, and _renders by default_:

```js
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
```

We create 2 pages for the nested routes:

- src\pages\ArticlePage\ArticleAuthor.vue

```js
<template>
  Info about the author
</template>
```

- src\pages\ArticlePage\ArticleCommentList.vue

Note: We define `loadComments` and we also add a watcher. That way even if we change the article ID in the browser url (manually or tapping on a link), it will refresh the proper comments even .

```js
<template>
  <div v-for="comment in comments" :key="comment.id">
    The comment is: {{ comment.comment }}
  </div>
</template>

<script>
import { articles } from "./../../data";
export default {
  props: { id: String },
  data () {
    return {
      comments: [],
    };
  },
  watch: {
    id () {
      this.loadComments();
    },
  },
  created () {
    this.loadComments();
  },
  methods: {
    loadComments () {
      this.comments = articles[this.id]?.comments ?? [];
    },
  },
};
</script>
```

We add `<RouterView />` to the main route page:

```js
<template>
  <div v-if="article">
      <h3>{{ article.title }}</h3>
      <div>
        <RouterLink :to="{ name: 'articles.comments', params: { id } }"
          >See Comments</RouterLink
        >
        |
        <RouterLink :to="{ name: 'articles.author' }">About Author</RouterLink>
      </div>
      <RouterView />
    </div>
</template>

<script>

import { articles } from '../data';

export default {
  props: ["id"],
  data() {
    return {
      article: null
    };
  },
  created() {
    if (undefined === articles[this.id]) {
      return this.$router.push({
        name: "not-found",
        params: {
          url: "wrong"
        }
      });
    }
    this.article = articles[this.id];
  },
}
</script>
```

And of course there is a `<RouterView />` into the _App.vue_ that renders the main route page already:

```js
<template>
  <div>
    <div><RouterLink :to="{ name: 'home' }">Home Page</RouterLink></div>
    <div><RouterLink :to="{ name: 'about' }">About Page</RouterLink></div>
  </div>
  <RouterView />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
```
