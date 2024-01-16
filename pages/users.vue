<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";

interface Users {
  id: number;
  name: string;
  email: string;
  addresses: Addresses[];
}
interface Addresses {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

const name = "Users page";
const users = ref<Users[]>([]);
const searchTerm = ref<string>("");

// Function to filter users based on the searchTerm
const filterUsers = () => {
  const lowerCaseTerm = searchTerm.value.toLowerCase();
  // Filter users based on the search term
  users.value = users.value.filter((user) =>
    user.name.toLowerCase().includes(lowerCaseTerm)
  );
};

const fetchUsers = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();

    users.value = data;
  } catch (error) {
    console.error("Error with fetching users", error);
  }
};

onMounted(fetchUsers);

// Watch for changes in the searchTerm and filter users accordingly
watchEffect(() => {
  filterUsers();
});

// Watch for changes in the searchTerm and refetch users when it becomes empty
watch(searchTerm, () => {
  if (searchTerm.value === "") {
    fetchUsers();
  }
});
</script>

<template>
  <div class="container">
    <h1>{{ name }}</h1>

    <input v-model="searchTerm" placeholder="Search users by name" />

    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>
