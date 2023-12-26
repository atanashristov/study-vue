# Notes

## 05.67-repeatable-route-parameters

Usually you pass one parameter at a time:

```txt
/article/:id  -->  /article/350
/article/:slug --> /article/vue-repeatable-route-parameters
```

Sometimes you need to pass an array of parameters:

```txt
/tags/:tags  -->  /tags/videos/books
```

_Repeatable parameters_ - separated by slash we define with "+". This is not a regular expression.

```js
  {
    path: '/tags/:tags+',
    name: 'tags',
    component: ArticlesByTagPage
  },
```

In this case route parameters list ```[ 'videos', 'books', 'cars' ]``` will be added to the URL separated by slashes ```/tags/videos/books/cars```.

Create link with tags:

```html
      <RouterLink :to="{ name: 'tags', params: { tags: ['cars', 'books'] } }"
        >cars or books</RouterLink
      >
```

And this is the page that handles articles by tags:

```js
<template>
  <h3>Articles that matching tags: {{ matchingTags }}</h3>
  <ArticleList :articles="articlesByTag"/>
</template>

<script>
import ArticleList from '../components/ArticleList.vue';
import { articles } from '../data';

export default {
  components: {ArticleList},
  props: {
    tags: Array,
  },
  computed: {
    articlesByTag() {
      return Object.values(articles).filter(
        (article) =>
          article.tags.filter((tag) => this.tags.includes(tag)).length
      );
    },
    matchingTags() {
      return this.tags.join(',');
    }
  },
}
</script>
```
