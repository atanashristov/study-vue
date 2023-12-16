const vm = Vue.createApp({
  data() {
    return {
      name: '',
      gender: 'unknown'
    }
  },
  computed: {
    message() {
      return `Hello ${this.prefix}${this.name}!`;
    },
    prefix() {
      switch(this.gender) {
        case 'male': return 'Mr ';
        case 'female': return 'Ms ';
        default: return '';
      }
    }
  },
  watch: {
    // Receive old and new values. These are optional.
    name(newName, oldName) {
      console.log('oldName: ' + oldName + ' -> newName: ' + newName);

      // Arrow functions do not receive a `this` context,
      // so they inherit the `this` context. That's why we can use the app's data below.
      fetch(`https://api.genderize.io?name=${newName}`)
        .then(response => response.json())
        .then(json => this.gender = json.gender);
    },
    message(newMessage, oldMessage) {
      console.log('newMessage: ' + newMessage + ' -> oldMessage: ' + oldMessage);
    }
  },
  methods: {
  }
}).mount('#app');