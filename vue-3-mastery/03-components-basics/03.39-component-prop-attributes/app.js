const app = Vue.createApp({
  data() {
    return {}
  },
  methods: {},
  computed: {}
});

app.component('todo-list-item', {
  props: {
    task: {
      type: String,
      required: true,
      // validator(value) {
      //   // Reactive and Computed component properties are not available inside validator!
      //   return value === "Okay";
      // }
    },
    id: {
      type: Number,
      required: false,
      validator(value) {
        return value >= 1 && value <= 100;
      },
      // default() {
      //   return [];
      // }
    }
  },
  template: `<div
    class="bg-white shadow-sm rounded-md text-gray-700 text-xs md:text-sm p-4">
      {{id}} - {{task}}
    </div>`
});

app.mount('#app');