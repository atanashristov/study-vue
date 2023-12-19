# Notes

## 02.17-computed-properties-vs-methods

What are the difference between _methods_ and _computed properties_?

The `methods` are **not cached**. If we compare both:

```html
      <div>With VAT {{priceIncludingVat}}$</div>
      <div>With VAT {{priceIncludingVatM()}}$</div>
```

then changes on the data triggers the method, even if the method has nothing to do with the changed data:

```js
vm.items++;
app.js:12 method - priceIncludingVatM called
```

## When to use _methods_?

Use methods to execute business logic.
