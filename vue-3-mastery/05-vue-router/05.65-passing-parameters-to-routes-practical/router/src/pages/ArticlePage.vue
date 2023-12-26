<template>
  <div>
    The id parameter is {{ $route.params.id }}
  </div>
  <div v-if="article">{{  article.title }}</div>
</template>

<script>

import { articles } from '../data';

export default {
  data() {
    return {
      article: null
    };
  },
  watch: {
    '$route.params': {
      handler: function(newValue) {
        console.log(`changed, newValue.id=${newValue.id}`);
        if (undefined === articles[newValue.id]) {
          return this.$router.push({
            name: "not-found",
            params: {
              url: "wrong"
            }
          });
        }
        this.article = articles[newValue.id];
      },
      immediate: true,
    }
  }
}
</script>