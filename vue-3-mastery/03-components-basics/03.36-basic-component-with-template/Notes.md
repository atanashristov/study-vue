# Notes

## 03.36-basic-component-with-template

In our production ready applications we most likely will be using the so called [Single-File Components](https://vuejs.org/guide/scaling-up/sfc.html).

Every component lives in a separate `.vue` file.

In this lecture we are not using single-file components to be able to focus on learning faster, but normally we use single-file components in production apps.

We _define component_ with the syntax:

```js
app.component('', {});
```

The _first argument_ is the component name. Prefer [multi-word names to prevent conflicts](https://vuejs.org/style-guide/rules-essential.html#use-multi-word-component-names). Note: use the so named kabob case ('hello-world-item'), all lower case and the words separated by hyphen.

Also, prefix the names with `Base`, `App` or `V` as recommended in the [Vue Style Guide](https://vuejs.org/style-guide/).

The _second argument_ is the object that defines the component. Has the same structure as the Vue app. The difference here is that we have `template` property.

Define template:

```js
app.component('hello-world-item', {
  template: `<div>Hello World!</div>`
});

```

Use the template:

```html
<hello-world-item></hello-world-item>
```
