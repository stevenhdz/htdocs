const app = Vue.createApp({
    data(){
        return{
            titulo: 'Hola Mundo',
            cantidad: 1000,
            enlace: 'https://www.google.com',
            estado: true,
            servicios: ['transferencias','pagos','giros','cheques'],
            desactivar: false
        }
    },
    methods: {
        agregarSaldo(){
            let comp = this
            comp.cantidad = comp.cantidad + 100
        },
        disminuirSaldo(valor){
            let comp = this
            if(comp.cantidad === 0){
                comp.desactivar = true
                alert('saldo en cero')
                return
            }
            comp.cantidad = comp.cantidad - valor
        },
    },
    computed:{
        colorCantidad(){
            let comp = this
            return comp.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculaTexto(){
            return this.titulo.toUpperCase()
        }
    }
})