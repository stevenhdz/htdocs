
new Vue({
  el: '#app-vue',
  data(){
      return {
          users:[],
          loading: false,
          clave:'',
          idusuario:'',
          errors: []
      }
  },
  methods: {
      updateUser(){
        
        const params = {
          'idusuario': this.idusuario = document.getElementById("idusuario1").innerHTML,
          'clave': String(CryptoJS.SHA256(this.clave))
        };

        axios
          .put('http://localhost:8888/nada/rest/ApiContrasena/update',params)
          .then(response => {
            console.log(response)
          })
          .catch( e => {
              this.errors.push(e)
            })
      }
      
  },
});