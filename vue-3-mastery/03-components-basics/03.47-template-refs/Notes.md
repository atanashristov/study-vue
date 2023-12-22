# Notes

## 03.47-template-refs

Sometimes we want to be able to directly have an access to the DOM elements. For example we want to have input element to be focused by default.

For every DOM element you want to access directly, you _add a ref attribute_ to it, and give it unique name. You will get access to all it's html and DOM properties.

```js
app.component('add-task-input', {
  template: `<input type="text"
    ref="input"
```

How to use it? We use the component lifecycle events, most likely `mounted()`. We use `this.$refs` that gives access to all the refs defined:

```js
app.component('add-task-input', {
  mounted() {
    this.$refs.input.focus();
  },
  template: `<input type="text"
    ref="input"
```
