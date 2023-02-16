<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <header>
      <ul>
        <li><router-link to="/">Home</router-link></li>
      </ul>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <p class="letter">Copyright © 2023 cms de Steven Hernandez</p>
    </footer>
  </div>
</template>

<style scoped>
header {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99999;
  text-align: center;
  background-color: white;
}

main {
  width: 100%;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 6px 18px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04aa6d;
}

li.btn {
  float: right;
  padding: 3px;
}



footer {
  display: block;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 99999;
  text-align: center;
  background-color: #333;
  color: rgb(255, 255, 255);
}
</style>
