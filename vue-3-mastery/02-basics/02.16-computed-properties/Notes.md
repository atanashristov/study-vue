# Notes

## 02.16-computed-properties

The _computed properties_ are added to the `computed` _object_ on the Vue app.

We do not want to have too many JS expressions inside the view, like this, thereof we have the computed properties.

```html
  <div>With VAT {{price * 1.23}}$</div>
```

The computed properties also can make outside variables available to Vue components (see `taxRate`).

The data of a computed property is a cached value of calling the function behind it, that's why we use it like a property and not like a function:

```js
  <div>With VAT {{includingVat}}$</div>
```

We can see that the computed properties are cached, if add `console.log()` calls to the methods:

```js
vm.price = 4.11;
app.js:16 includingVat called
app.js:20 total called
...
vm.items = 3;
app.js:20 total called
```

But updating outside variables does not change the Vue app.
