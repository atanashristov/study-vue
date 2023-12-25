<template>
  <div>
    <div><RouterLink to="/">Home Page</RouterLink></div>
    <div><RouterLink to="/about">About Page</RouterLink></div>
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
