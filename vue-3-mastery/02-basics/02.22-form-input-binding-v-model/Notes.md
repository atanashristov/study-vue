# Notes

## 02.22-form-input-binding-v-model

The `v-model` applies to input text and text area elements and provides a 2-way data binding.
Changes of the reactive properties change change the element's value.
Changes on the element's value change the data reactive property.

_Modifiers_ can be applied with "v-model.modifier", like `v-model.trim` for example. They are 3 modifiers available:

- `lazy` - the data changes not as you type, but _after_ `onChange` event
- `number` - makes sure when we type a number, it keeps the data as number
- `trim` - removes the trailing whitespace

Modifiers can be chained:

```html
  <input type="text" v-model.trim.number="riddle1" />
```

Input's `value, checked, selected` html attributes are ignored.
