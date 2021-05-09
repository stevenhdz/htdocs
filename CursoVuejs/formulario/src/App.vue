<template>
  <navbar/>
  <div class="container">
  <router-view/>
  </div>
</template>
<script>

import navbar from './components/Navbar'
export default {
  components:{
    navbar
  }
}
</script>
