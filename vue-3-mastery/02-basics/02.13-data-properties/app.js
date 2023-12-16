const definition = {
  data() {
    return {
      name: 'Tony'
    }
  }
};

const app1 = Vue.createApp(definition);
const app2 = Vue.createApp(definition);

app1.mount('#app1');
app2.mount('#app2');
