# Section_02-Vue_Fundamentals

References:

- [Vue Quick Start](https://vuejs.org/guide/quick-start.html#without-build-tools)
- [Vue Dev Tools](https://vuejs.org/guide/scaling-up/tooling.html#browser-devtools)

## 14. Accessing Vue instance data

Vue provides a _proxy_ object to access the value of calculation:

```js
// `vm` stands for View Model.
const vm = Vue.createApp({
  data () {
    return {
      firstName: 'Tony',
      lastName: 'Hristov'
    }
  }
}).mount('#app');

setTimeout(() => {
  vm.firstName = 'Alex';
  vm.lastName = 'Hristov';
}, 2000);
```

When Vue is initialized, it stores the data into property `$data`. We can access the initialized data properties via it `vm.$data.firstName`.

Vue creates _proxy methods and properties_. This simplifies the access to the data: `vm.firstName`.

If you print `vm` in the debugger window you will see how Vue created getter and setter methods to the `$data` properties.

## 15. Methods

Instead of performing business logic on the view model properties:

```js
<p>Hey, {{ firstName }} {{ lastName.toUpperCase() }}!</p>
```

we create `methods` object to hide the complexity:

```js
const vm = Vue.createApp({
  data () {
    return {
      firstName: 'Tony',
      lastName: 'Hristov'
    }
  },
  methods: {
    fullName () {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    }
  }
}).mount('#app');
```

Then we use it in the html:

```html
    <div id="app">
      <p>Hey, {{ firstName }} {{ lastName.toUpperCase() }}!</p>
      <p>How is your day so far, {{ fullName() }}?</p>
      <div>{{ 2 + 2 }}</div>
    </div>
```
