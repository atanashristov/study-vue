# Notes

## 05.61-reacting-to-route-parameter-changes

Example how to setup a _watcher_  to listen for route param changes:

```js
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
    '$route.params': function(newValue) {
      this.article = articles[newValue.id];
    }
  }
}
</script>
```

To make sure the watcher handler is called immediately and even for the initial value, this is how we define it as object:

```js
  watch: {
    '$route.params': {
      handler: function(newValue) {
        this.article = articles[newValue.id];
      },
      immediate: true,
    }
  }
```
