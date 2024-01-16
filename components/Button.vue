<script setup>
// Props
const props = defineProps(["writeLetter"]);

// Method
const sendLetter = () => {
  props.writeLetter("Dear Parent, hope you read this!");
};
</script>

<template>
  <button @click="sendLetter">Send a letter!</button>
</template>
