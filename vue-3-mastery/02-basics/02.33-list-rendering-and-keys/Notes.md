# Notes

## 02.33-list-rendering-and-keys

This approach works fine for list of simple strings so far, we only are displaying strings:

```html
        <li v-for="invoice in sortedInvoices">
          {{invoice.id}}, {{invoice.item}} for {{invoice.price}}$
        </li>
```

For more complicated UI it is recommended to use components and we need to add `:key` with `v-for`.

The `:key` has to be unique to each element. In this case we have unique ID, that is the ID of the invoice:

```html
        <li v-for="invoice in sortedInvoices" :key="invoice.id">
          {{invoice.id}}, {{invoice.item}} for {{invoice.price}}$
        </li>
```

If we do not have unique ID, we can always use the element's index:

```html
        <li v-for="(invoice, index) in sortedInvoices" :key="index">
          {{invoice.item}} for {{invoice.price}}$
        </li>
```

Using the key is also important with the list animations.

It is _always recommended_ to use `:key` with `v-for`.
