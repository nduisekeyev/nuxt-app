<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const name = "BlogPage";
const msg = "Some message blog here...";
const loading = true;

// Function to generate a random type (A, B, C, etc.)
const generateRandomType = () => {
  const types = ["A", "B", "C"];
  return types[Math.floor(Math.random() * types.length)];
};

let type = generateRandomType();

const inputText = ref<string>("");
const count = ref<number>(1);

const plusOne = computed(() => count.value + 1);
console.log("plusOne", plusOne.value); // 2
// plusOne.value++ // error

const plusOneB = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1;
  },
});

plusOneB.value = 1; // value set via computed
console.log("plusOneB", count.value); // 0

const obj = reactive({ count });

// ref will be unwrapped
console.log("check equal", obj.count === count.value); // true

const original = reactive({ count: 20 });
const copy = readonly(original);

watchEffect(() => {
  // works for reactivity tracking
  original.count++;
  console.log("original_count", original);
  console.log("copy_count", copy.count);
});

const todos = ref<Todo[]>([]);

const fetchTodos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    todos.value = data.slice(-100);
    console.log("_data", todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

onMounted(fetchTodos);
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>{{ name }}</h1>

      <div>PLUS ONE: {{ plusOneB }}</div>

      <span v-text="msg" />
      <!-- v-if -->
      <div v-if="loading">Loading...</div>

      <!-- v-else-if -->
      <div v-if="type === 'A'">A</div>
      <div v-else-if="type === 'B'">B</div>
      <div v-else-if="type === 'C'">C</div>
      <div v-else>Not A/B/C</div>

      <!-- v-model -->
      <input v-model="inputText" placeholder="Edit me" />
      <p>Input text: {{ inputText }}</p>
      <!-- v-for -->
      <h2>My Todo List:</h2>

      <div v-for="todo in todos" :key="todo.id">
        <ul>
          <li>{{ todo.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style></style>
