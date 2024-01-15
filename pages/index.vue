<script>
export default {
  // a group of options api

  data() {
    const name = "Vue.js App";

    console.log("_name", name);

    return {
      name,
      counter: 0,
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
    console.log("Component has created!");
  },
  mounted() {
    // onMounted hook
    console.log("Component has mounted!");
    return { mount: "Component has mounted" };

    // Return any reactive data or methods you want to expose to the template
  },
  unmounted() {
    console.log("Component has unmounted!");
  },
};
</script>

<template>
  <main class="content">
    <h1 class="text">{{ name }}</h1>
    <h2>{{ mount }}</h2>
    <div class="methods">
      <button @click="handleClick">Click me</button>
      <button @click="resetClick" class="reset">Reset</button>
    </div>

    <div class="counter">Counter: {{ counter }}</div>
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

.content {
  max-width: 650px;
  margin: auto;
  font-family: "Poppins", sans-serif; /* Use the imported font */
}

.text {
  color: #ff0000; /* Use a shade of red for text color */
  font-size: 2em; /* Set the font size to make it visually appealing */
}

button {
  background-color: #007bff; /* Use a shade of blue for button background */
  color: #fff; /* Set the text color of the button to white */
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;
}

button:hover {
  background-color: #0056b3; /* Change button background on hover */
}

.counter {
  margin-top: 2rem;
}

.reset {
  margin-left: 1rem;
}
</style>
