<template>
  <div>
    <!-- <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<!-- 
<script setup>
const layout = 'another';
</script> -->

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0.5;
  filter: grayscale(1);
}
</style>