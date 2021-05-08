<template>
  <navbar/>
  <router-view/>
</template>
<script>

import navbar from './components/Navbar'
export default {
  components:{
    navbar
  }
}
</script>
