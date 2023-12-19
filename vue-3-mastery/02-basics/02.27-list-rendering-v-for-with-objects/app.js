function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const vm = Vue.createApp({
  data() {
    return {
      items:
      [
        {
          name: 'Milk',
          price: 1.5
        },
        {
          name: 'Beer',
          price: 3.1
        },
        {
          name: 'Juice',
          price: 2.5
        }
      ],
      countries: {
        us: 'United States',
        de: 'Germany',
        bg: 'Bulgaria',
        ro: 'Romania',
        br: 'Brazil'
      }
    }
  },
  methods: {
    addSomeItems(cnt) {
      for (let i = 0; i < cnt; i++) {
        this.items.push({
          name: `Item ${i}`,
          price: getRandomInt(100) + getRandomInt(99) / 100
        });
      }
    },
    sortByPrice() {
      function cmp(a, b) {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        }
        return 0;
      }
      this.items.sort(cmp);
    },
    sortByName() {
      function cmp(a, b) {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        }
        return 0;
      }
      this.items.sort(cmp);
    }

  }
}).mount('#app');