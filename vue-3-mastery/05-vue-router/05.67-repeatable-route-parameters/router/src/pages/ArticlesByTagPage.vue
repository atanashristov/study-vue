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