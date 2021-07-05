<template>
  <navbar/>
  <div class="container">
  <router-view/>
  </div>
</template>
<script>
import { from, mapActions} from 'vuex'
import navbar from './components/Navbar'
export default {
  components:{
    navbar
  },
  methods: {
    ...mapActions(['cargarLocalStorage'])
  },
  created() {
    this.cargarLocalStorage()
  },
}
</script>
