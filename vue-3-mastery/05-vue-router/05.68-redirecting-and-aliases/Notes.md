# Notes

## 05.68-redirecting-and-aliases

Sometimes you change url, but you want to redirect the old one to the new one.

Let's say we want _/home_ to go to the _/_.

We define `redirect` to path like that:

```js
  {
    path: "/",
    component: HomePage,
    name: 'home'
  },
  {
    path: "/home",
    redirect: "/",
  },
```

Even _better_ we _redirect by route name_:

```js
  {
    path: "/",
    component: HomePage,
    name: 'home'
  },
  {
    path: "/home",
    redirect: {
      name: 'home'
    },
  },
```

We can define _alias_, one or more to a path:

```js
  {
    path: "/",
    alias: '/home',
    component: HomePage,
    name: 'home'
  },
```

, or multiple:

```js
  {
    path: "/",
    alias: ['/home', '/homepage',],
    component: HomePage,
    name: 'home'
  },
```
