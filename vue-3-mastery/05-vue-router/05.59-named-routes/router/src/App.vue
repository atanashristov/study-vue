<template>
  <div>
    <div><RouterLink :to="{name: 'home'}">Home Page</RouterLink></div>
    <div><RouterLink :to="{name: 'about'}">About Page</RouterLink></div>
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
