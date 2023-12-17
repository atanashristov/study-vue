const icons = {
  rocket: '🚀',
  meat: '🥩',
  fish: '🐟',
  us: '🇺🇸',
  india: '🇮🇳',
  veggie: '🌱'
};

const vm = Vue.createApp({
  data() {
    return {
      started: false,
      vegetarian: false,
      basket: [
        'Milk',
        'Cheese',
        'Carrot',
        'Fish'
      ]
    }
  },
  computed: {
    icons() { return icons },
    isReallyVegetarian() {
      return !this.basket.includes('Fish');
    },
  }
}).mount('#app');