<script>
export default {
  // a group of options api
  data() {
    const name = "Vue.js App";
    console.log("_name", name);

    return {
      name,
      counter: 0,
      mount: "Component was mounted",
    };
  },
  methods: {
    handleClick() {
      console.log("_click_init");
      this.counter++;
    },
    resetClick() {
      this.counter = 0;
    },
  },
  created() {
    console.log("Component was created");
  },
  mounted() {
    console.log("Component was mounted");
  },
  unmounted() {
    console.log("Component was unmounted");
  },
};
</script>

<template>
  <main class="container">
    <div class="content">
      <h1 class="text">{{ name }}</h1>
      <h2>{{ mount }}</h2>
      <div class="methods">
        <button @click="handleClick">Click me</button>
        <button @click="resetClick" class="reset">Reset</button>
      </div>

      <div class="counter">Counter: {{ counter }}</div>
    </div>
  </main>
</template>
