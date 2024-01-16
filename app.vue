<script setup lang="ts">
useHead({
  title: "Nuxt App",
  meta: [{ name: "description", content: "Counter app" }],
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- <Footer /> -->
  </NuxtLayout>
</template>
