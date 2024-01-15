<script setup lang="ts">
import { onMounted } from "vue";

const about = "about";

onMounted(() => {
  console.log("about");
});
</script>

<template>
  <h1>{{ about }}</h1>
  <div>Main about</div>
</template>
