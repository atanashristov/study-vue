const vm = Vue.createApp({
  data () {
    return {
      firstName: 'Tony',
      lastName: 'Hristov'
    }
  },
  methods: {
    // changeName () {
    //   this.firstName = 'Alex';
    //   this.lastName = 'Hristov';
    // }
    fullName () {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    }
  }
}).mount('#app');

// setTimeout(() => {
//   vm.firstName = 'Alex';
//   vm.lastName = 'Hristov';
// }, 2000);

console.log(vm);

// Vue.createApp({
//   data () {
//     return {
//       firstName: 'Alex',
//       lastName: 'Hristov'
//     }
//   }
// }).mount('#app2');
