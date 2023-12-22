# Notes

## 03.46-basic-component-slots

We pass a label to the _base-checkbox_:

```js
app.component('base-checkbox', {
  props: {
    label: String
  },
  template: `<div class="flex items-center">
    <label>{{label}}</label>

```

But what if we want to pass in html for the label:

```html
<base-checkbox class="mb-2"
          label="<b>Done</b>"
```

This will render the html itself escaped "&lt;b&gt;Done&lt;/b&gt;"

Instead of using a label prop, we just use a `<slot></slot>`:

```js
  template: `<div class="flex items-center">
    <label><slot></slot></label>
```

And pass in the html like this:

```html
<base-checkbox v-model="onlyPending">
    <b>Only</b> pending tasks
</base-checkbox>
```

You can _pass text, html and even Vue components_.

You _can have default value_, in this case "Checkbox":

```js
  template: `<div class="flex items-center">
    <label><slot>Checkbox</slot></label>
```

Even if the slot is rendered inside the component, it does not have access to component's data. It is _part of the parent context_.

~[basic-component-slot](./basic-component-slot.png)
