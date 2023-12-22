# Notes

## 03.42-using-v-for-with-components

Use `v-for`, specify the parameters and the key:

```html
        <todo-list-item
          v-for="task in tasks"
          :task="task"
          :key="task.id"
        ></todo-list-item>
```
