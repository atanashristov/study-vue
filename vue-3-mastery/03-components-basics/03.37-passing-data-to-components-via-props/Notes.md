# Notes

## 03.37-passing-data-to-components-via-props

The template has `props` attribute:

```js
app.component('todo-list-item', {
  props: ['task'],
  template: `<div>{{task}}</div>`
});

```

Then we use it as a reactive or computed property:

```html
<todo-list-item task="Buy food"></todo-list-item>
```

The props are read-only.
