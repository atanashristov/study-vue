# Notes

## 05.63-optional-parameters-and-route-matching

The parameter is considered _optional_ if we _add a question mark after_ the _parameter name_, or after the _parenthesis_ with the param reg-ex.

In this example, anything besides _/home_ is the catch-all 404 page.

```js
  {
    path: "/home",
    component: HomePage,
    name: 'home'
  },
  {
    path: '/:url(.+)?',
    name: 'not-found',
    component: NotFoundPage
  }
```

To make sure parameter is a numeric value, add `(\\d+)` after it:

```js
  {
    path: "/article/:id(\\d+)",
    component: ArticlePage,
    name: 'article'
  },
```
