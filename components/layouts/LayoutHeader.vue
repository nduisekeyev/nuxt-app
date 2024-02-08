<template>
  <div class="container">
    <header class="header" aria-label="top-navigation">
      <nav>
        <ul>
          <li><NuxtLink to="/industry">Industry</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/users">Users</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.header {
  background-color: #f8f8f8; /* Light gray background color */
  padding: 20px; /* Add padding for spacing */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
}

nav {
  display: flex;
  justify-content: space-between;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  margin-right: 20px;
}

NuxtLink {
  text-decoration: none;
  color: #333; /* Dark gray text color */
  font-weight: bold;
  font-size: 16px;
  transition: color 0.3s ease; /* Smooth color transition on hover */
}

NuxtLink:hover {
  color: #007bff; /* Change text color on hover to blue */
}
</style>
