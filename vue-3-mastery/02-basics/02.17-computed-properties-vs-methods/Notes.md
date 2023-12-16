# Notes

## Difference between _methods_ and _computed properties_?

The methods are not cached. If we compare both:

```html
      <div>With VAT {{priceIncludingVat}}$</div>
      <div>With VAT {{priceIncludingVatM()}}$</div>
```

then changes on the data triggers the method, even if the method has nothing to do with the changed data:

```js
vm.items++;
app.js:12 method - priceIncludingVatM called
```
