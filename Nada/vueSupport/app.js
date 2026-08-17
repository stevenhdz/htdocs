new Vue({
    el: '#app-vue',
    data(){
        return {
            users:[],
            loading: false,
            nombres:'',
            apellidos:'',
            fechaentrada:'',
            direccion:'',
            cantidadequipos:'',
            valortotal:'',
            identificador:'',
            respuesta:'',
            telefono:'',
            tipopago:'',
            descripcion:'',
            valorunidad:'',
            adjuntar:'',
            correo:'',
            idsoporte:'',
            errors: []

        }
    },
    methods: {
        fetchUsers(){
            this.loading = true;
            this.users = [];

            axios
            .get('http://25.45.184.240:8888/rest/src/post.php')
            .then(response => {
                console.log(response)
                const data = response.data
                this.users = data
                this.loading = data
            })
            .catch( e => console.log(e))
        },
        addUser(){
            if (this.nombres &&
                this.apellidos &&
                this.fechaentrada &&
                this.direccion &&
                this.cantidadequipos &&
                this.valortotal &&
                this.identificador &&
                this.respuesta &&
                this.telefono &&
                this.tipopago &&
                this.descripcion &&
                this.valorunidad &&
                this.adjuntar &&
                this.correo &&
                this.idsoporte) {
                return true;
              }
        
              this.errors = [];
        
              if (!this.nombres) {
                this.errors.push('El nombres es obligatorio.')
              }
              if (!this.apellidos) {
                this.errors.push('El apellidos es obligatorio.')
              }
              if (!this.fechaentrada) {
                this.errors.push('El fechaentrada es obligatorio.')
              }
              if (!this.direccion) {
                this.errors.push('El direccion es obligatorio.')
              }
              if (!this.cantidadequipos) {
                this.errors.push('El cantidadequipos es obligatorio.')
              }
              if (!this.valortotal) {
                this.errors.push('El valortotal es obligatorio.')
              }
              if (!this.identificador) {
                this.errors.push('El identificador es obligatorio.')
              }
              if (!this.respuesta) {
                this.errors.push('El respuesta es obligatorio.')
              }
              if (!this.telefono) {
                this.errors.push('El telefono es obligatorio.')
              }
              if (!this.tipopago) {
                this.errors.push('El tipopago es obligatorio.')
              }
              if (!this.descripcion) {
                this.errors.push('El descripcion es obligatorio.')
              }
              if (!this.valorunidad) {
                this.errors.push('El valorunidad es obligatorio.')
              }
              if (!this.adjuntar) {
                this.errors.push('El adjuntar es obligatorio.')
              }
              if (!this.correo) {
                this.errors.push('El correo es obligatorio.')
              }

              /* e.preventDefault(); */
              
              
            let formData = new FormData();
            formData.append('nombres', this.nombres)
            formData.append('apellidos', this.apellidos)
            formData.append('fechaentrada', this.fechaentrada)
            formData.append('direccion', this.direccion)
            formData.append('cantidadequipos', this.cantidadequipos)
            formData.append('valortotal', this.valortotal)
            formData.append('identificador', this.identificador)
            formData.append('respuesta', this.respuesta)
            formData.append('telefono', this.telefono)
            formData.append('tipopago', this.tipopago)
            formData.append('descripcion', this.descripcion)
            formData.append('valorunidad', this.valorunidad)
            formData.append('adjuntar', this.adjuntar)
            formData.append('correo', this.correo)
            console.log(formData)
            axios
            .post('http://localhost:8888/rest/src/post.php',formData)
            .then(response => {
              console.log(response)
            })
            .catch( e => {
                this.errors.push(e)
              })
        },
        updateUser(){
          axios
            .put('http://25.45.184.240:8888/rest/src/post.php' + '?idsoporte' +'='+this.idsoporte 
            + '&nombres' +'='+this.nombres)
            .then(response => {
              console.log(response)
            })
            .catch( e => {
                this.errors.push(e)
              })
        },
        deleteUser(){
          axios
            .delete('http://localhost:8888/rest/src/post.php' + '?idsoporte' +'='+this.idsoporte)
            .then(response => {
              console.log(response)
            })
            .catch( e => {
                this.errors.push(e)
              })
        }
    },
});