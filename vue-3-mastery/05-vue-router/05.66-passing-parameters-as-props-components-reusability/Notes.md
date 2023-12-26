# Notes

## 05.66-passing-parameters-as-props-components-reusability

How to make sure the components we create are reusable?

Looking at the _ArticlePage.vue_, the watcher is tightly coupled with the router:

```js
  watch: {
    '$route.params': {
      handler: function(newValue) {
```

Router can pass it's _parameters as props_ instead. These are the steps to do so.

Define the props that match the route parameters:

```js
export default {
  props: ["id"],

```

Then actually tell the router to pass parameters as props to the component. Set `props` parameter to true on the _route definition_ in _main.js_:

```js
const routes = [
  {
    path: "/article/:id(\\d+)",
    component: ArticlePage,
    name: 'article',
    props: true,
  },
```

Now the component can be made simpler and reusable. _No need to watch_ the `$route.params` anymore. Instead, add `created()` lifecycle method.

```js
export default {
  props: ["id"],
  data() {
    return {
      article: null
    };
  },
  created() {
    if (undefined === articles[this.id]) {
      return this.$router.push({
        name: "not-found",
        params: {
          url: "wrong"
        }
      });
    }
```
