<template>
  <div>
    We are inside the blog.
  </div>
  <div>
    Post slug is {{ route.params.slug }}
  </div>
</template>

<script setup>

const route = useRoute();

console.log(route);
</script>