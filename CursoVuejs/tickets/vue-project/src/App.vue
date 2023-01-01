<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <header>
      <ul>
        <li><router-link to="/">Events</router-link></li>
      </ul>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <p class="letter">Copyright © 2022 Steven Hernandez</p>
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
  text-align: center;
  background-color: white;
}

main {
  margin: 0;
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

p.letter {
  color: black;
}

footer {
  display: block;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: white;
}
</style>
