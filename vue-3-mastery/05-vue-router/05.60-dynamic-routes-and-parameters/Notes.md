# Notes

## 05.60-dynamic-routes-and-parameters

Define route with params:

```js
  {
    path: "/article/:id",
    component: ArticlePage,
    name: 'article'
  }
```

Then this is the _ArticlePage.vue_:

```html
<template>
  <div>
    The id parameter is {{ $route.params.id }}
  </div>
</template>
```

Generate link to it:

```html
<div><RouterLink :to="{ name: 'article', params: { id: 123 } }">Article 123</RouterLink></div>
```

, which creates the following link: _<http://localhost:8080/#/article/123>_
