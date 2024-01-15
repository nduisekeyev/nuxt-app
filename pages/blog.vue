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

const todos = ref<Todo[]>([]);
const inputText = ref<string>("");

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
