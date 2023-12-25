<template>
  <div>
    <div><RouterLink :to="{ name: 'home' }">Home Page</RouterLink></div>
    <div><RouterLink :to="{ name: 'about' }">About Page</RouterLink></div>
    <div><RouterLink :to="{ name: 'article', params: { id: 1 } }">Article 1</RouterLink></div>
    <div><RouterLink :to="{ name: 'article', params: { id: 2 } }">Article 2</RouterLink></div>
    <div><RouterLink :to="{ name: 'article', params: { id: 3 } }">Article 3</RouterLink></div>
    <div><RouterLink :to="{ name: 'article', params: { id: 100 } }">Article 100</RouterLink></div>
  </div>
  <RouterView />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
