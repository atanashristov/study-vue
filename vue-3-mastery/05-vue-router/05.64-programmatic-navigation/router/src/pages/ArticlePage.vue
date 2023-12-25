<template>
  <div>
    The id parameter is {{ $route.params.id }}
  </div>
  <div v-if="article">{{  article.title }}</div>
</template>

<script>
  const articles = {
    1: { title: "Title for article 1" },
    2: { title: "Title for article 2" },
    3: { title: "Title for article 3" }
  };

export default {
  data() {
    return {
      article: null
    };
  },
  watch: {
    '$route.params': {
      handler: function(newValue) {
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