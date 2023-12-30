<template>
  <section>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
// To prevent duplication of fetching data on server and client side, we use `useAsyncData`.
// We use destructuring assignment to only get he `data` property and assign it to an alias `posts`.
const { data: posts } = await useAsyncData(
  'blog-list',
  () => queryContent('/blog').only(['_path', 'title']).find()
)
console.log(posts)
</script>