<template>
  <h3>Home</h3>
  <ArticleList :articles="articles"></ArticleList>


    <h4>Browse by tags</h4>

    <div>
      <RouterLink :to="{ name: 'tags', params: { tags: ['videos'] } }"
        >videos</RouterLink
      >,
        <RouterLink :to="{ name: 'tags', params: { tags: ['books'] } }"
          >books</RouterLink
        >,
      <RouterLink :to="{ name: 'tags', params: { tags: ['cars', 'books'] } }"
        >cars or books</RouterLink
      >
    </div>
</template>

<script>
import ArticleList from '../components/ArticleList.vue';
import { articles } from '../data';

export default {
  components: { ArticleList },
  computed: {
    articles() {
      return articles;
    }
  }
}
</script>