<script setup lang="ts">
const about = "About";

onMounted(() => {
  console.log("about");
});
</script>

<template>
  <div class="container">
    <h1>{{ about }}</h1>
  </div>
</template>
