# Notes

## 03.40-custom-component-events

_Emit event_ with `$this.$emit()` passing the _event name_ as argument one and _the data_ to the event as argument two:

```js
this.$emit('added', this.task); 

```

It is also recommended to _list all the custom events_ of the component in the `emits:[]` property:

```js
app.component('add-task-input', {
  emits: [ 'added' ],
  data() {
    return {
      task: ''
    }
  },
  methods: {
    add() {
      this.$emit('added', this.task);
      this.task = '';
    }
  },
  template: `<input type="text"
    placeholder="Write task and hit enter"
    @keyup.enter="add"
    v-model="task"
    class="block w-full rounded-md shadow-sm text-lg p-4" />`
});
```
