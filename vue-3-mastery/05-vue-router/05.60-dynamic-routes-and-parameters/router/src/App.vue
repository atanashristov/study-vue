<template>
  <div>
    <div><RouterLink :to="{ name: 'home' }">Home Page</RouterLink></div>
    <div><RouterLink :to="{ name: 'about' }">About Page</RouterLink></div>
    <div><RouterLink :to="{ name: 'article', params: { id: 123 } }">Article 123</RouterLink></div>
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
