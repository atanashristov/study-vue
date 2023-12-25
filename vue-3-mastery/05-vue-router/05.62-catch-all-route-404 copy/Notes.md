# Notes

## 05.62-catch-all-route-404

We have to define a catch-all route. It matches anything after slash. We also catch the url as param.

```js
  {
    path: '/:url(.*)',
    name: 'not-found',
    component: NotFoundPage
  }
```
