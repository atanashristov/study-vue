<template>
  <div class="mb-4">
    <Add @added="taskAdded" />
    <BaseCheckbox
      class="mb-4 p-4 text-gray-600 text-sm font-weight-100"
      v-model="onlyPending"
      ><b>Only</b> pending tasks
    </BaseCheckbox>
  </div>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
    <TodoListItem
      v-for="task in displayedTasks"
      :task="task"
      v-model:done="task.done"
      v-model:priority="task.priority"
      :key="task.id"
    />
  </div>
</template>

<script>
let nextTaskId = 100;

import BaseCheckbox from "./components/BaseCheckbox.vue";
import AddTaskInput from "./components/AddTaskInput.vue";
import TodoListItem from "./components/TodoListItem.vue";

export default {
  name: "App",
  components: {
    BaseCheckbox,
    Add: AddTaskInput,
    TodoListItem,
  },
  data() {
    return {
      onlyPending: false,
      tasks: [
        {
          id: 1,
          description: "Buy food for the dog",
          priority: false,
          done: false,
        },
        {
          id: 2,
          description: "Pay the bills",
          priority: true,
          done: false,
        },
        {
          id: 3,
          description: "Buy some computer games",
          priority: false,
          done: false,
        },
        {
          id: 4,
          description: "Go to the gym",
          priority: false,
          done: false,
        },
      ],
    };
  },
  computed: {
    displayedTasks() {
      return [...this.tasks]
        .sort((a, b) => Number(b.priority) - Number(a.priority))
        .filter((task) => !this.onlyPending || !task.done);
    },
  },
  methods: {
    taskAdded(task) {
      this.tasks.push({
        id: nextTaskId++,
        description: task,
        done: false,
        priority: false,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
