new Vue({
    el: '#app-vue',
    data(){
        return {
            users:[],
            errors: [],
            loading: false,
            id:'',
            name:'',
            email:'',
            password:'',
            tokens:''

        }
    },
    methods: {
        updateUser(){

          this.errors = [];

          if (!this.id) {
            this.errors.push('El id es obligatorio.')
          }
          if (!this.name) {
            this.errors.push('El nombre es obligatorio.')
          }
          if (!this.email) {
            this.errors.push('El correo es obligatorio.')
          }
          if (!this.password) {
            this.errors.push('La contraseña es obligatorio.')
          }
          if (!this.tokens) {
            this.errors.push('El token es obligatorio.')
          }
         
          const token = 'Basic '+ this.tokens

          if(token == 'Basic bWl1c3VhcmlvOm1pcGFzcw=='){

          const params = {
            'id': this.id,
            'name': this.name,
            'email': this.email,
            'password': this.password
          };

          axios.put('http://localhost:8882/CURSOPHP/api/update',params,
          {
            headers: { 
              'Authorization': token
            }
          })
            .then(response => {
              console.log(response)
            })
            .catch( e => {
                this.errors.push(e)
              })

            }else
            {
              alert('Requiere de un token con autorizacion');
            }
        },

        deleteUser(){

          this.errors = [];

          if (!this.id) {
            this.errors.push('El id es obligatorio.')
          }
          
          if (!this.tokens) {
            this.errors.push('El token es obligatorio.')
          }

          const token = 'Basic '+ this.tokens

          if(token == 'Basic bWl1c3VhcmlvOm1pcGFzcw=='){

            axios.delete('http://localhost:8882/CURSOPHP/api/destroy/'+ this.id,{
              headers: { 
                'Authorization': token
              }
            })
            .then(response => {
                  console.log(response);
              })
                .catch( e => {
                    this.errors.push(e)
            }) 

          }else
          {
            alert('Requiere de un token con autorizacion');
          }
          
        },

        listUser(){

          this.errors = [];

          if (!this.tokens) {
            this.errors.push('El token es obligatorio.')
          }

          const token = 'Basic '+ this.tokens

          if(token == 'Basic bWl1c3VhcmlvOm1pcGFzcw=='){
     
          this.users = [];

            axios.get("http://localhost:8882/CURSOPHP/api/users",
            {
              headers: { 
                'Authorization': token
              }
            })
            .then(response => {
                console.log(response)
                const data = response.data
                this.users = data
              })
              .catch( e => {
                  this.errors.push(e)
                })

          }else
          {
            alert('Requiere de un token con autorizacion');
          }
        },
        
        
        listUsers(){

          this.errors = [];

          if (!this.id) {
            this.errors.push('El id es obligatorio.')
          }
          
          if (!this.tokens) {
            this.errors.push('El token es obligatorio.')
          }

          const token = 'Basic '+ this.tokens

          if(token == 'Basic bWl1c3VhcmlvOm1pcGFzcw=='){

     
          this.users = [];

            axios.get('http://localhost:8882/CURSOPHP/api/user'+ this.id,{
              headers: { 
                'Authorization': token
              }
            })
            .then(response => {
                console.log(response)
                const data = response.data
                this.users = data
              })
              .catch( e => {
                  this.errors.push(e)
                })
              }else
              {
                alert('Requiere de un token con autorizacion');
              }
        }, 

        addUser(){

          this.errors = [];

          if (!this.name) {
            this.errors.push('El nombre es obligatorio.')
          }
          if (!this.email) {
            this.errors.push('El correo es obligatorio.')
          }
          if (!this.password) {
            this.errors.push('La contraseña es obligatorio.')
          }
          if (!this.tokens) {
            this.errors.push('El token es obligatorio.')
          }

          const token = 'Basic '+ this.tokens

          if(token == 'Basic bWl1c3VhcmlvOm1pcGFzcw=='){

            const params = {
                'id': this.id,
                'name': this.name,
                'email': this.email,
                'password': this.password
            };

            axios.post('http://localhost:8882/CURSOPHP/api/store',params,{
              headers: { 
                'Authorization': token
              }
            })
            .then(response => {
                console.log(response)
              })
              .catch( e => {
                  this.errors.push(e)
                })
          }else
          {
            alert('Requiere de un token con autorizacion');
          }
        },


        
    },
  });