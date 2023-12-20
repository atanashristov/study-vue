# Notes

## 03.39-component-prop-attributes

Pass the properties not as array but as object.

Specify the types of the properties. The possible prop types are:

```txt
String, Number, Boolean, Array, Object, Function, Promise
```

or [any other object constructor](https://javascript.info/constructor-new).

You can specify a _required_ property.

You can specify a _validator_ function and it is only for the _console_ to see validation errors in _development build only_.

Note: Reactive and Computed component properties __are not available__ inside validator!

```js
app.component('todo-list-item', {
  props: {
    task: {
      type: String,
      required: true,
      validator(value) {
        // Reactive and Computed component properties are not available inside validator!
        return value === "Okay";
      }
    }
  },
  template: `<div
    class="bg-white shadow-sm rounded-md text-gray-700 text-xs md:text-sm p-4">
      {{task}}
    </div>`
});
```

Use it like this:

```html
<todo-list-item task="Buy some clothes"></todo-list-item>
```

and we will see validation _error in the console_:

```txt
[Vue warn]: Invalid prop: custom validator check failed for prop "task".
  at <TodoListItem task="Buy some clothes" >
  at <App>
```

If we _pass the data statically_ (`id`), the data will always be _threated as a string_:

```html
<todo-list-item task="Buy some courses" id="105"></todo-list-item>
```

For any property that is non String, _pass the data with vue bind directive_ (`:id`), then the prop is passed with the correct type (number in this case).

```html
<todo-list-item task="Buy some courses" :id="105"></todo-list-item>
```
