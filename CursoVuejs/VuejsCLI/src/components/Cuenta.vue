<template>
<div>
  <h2>Tipo de cuenta: {{cuenta}}</h2>
  <h2>Saldo: {{saldo}}</h2>
  <h2>Cuenta: {{estado ? 'active' : 'desactivado'}}</h2>
  <div v-for="(item,index) in servicios" :key="index">
     {{ index + 1 }} - {{ item }}
  </div>
  <AccionSaldo 
    texto="aumentar"
    @accion="aumentar"
  />
  <AccionSaldo 
    texto="disminuir"
    @accion="disminuir"
    :desactivar="desactivar"
  />
</div>
</template>

<script>
import AccionSaldo from './AccionSaldo.vue'

export default {
    components:{
        AccionSaldo
    },
    data() {
        return {
            saldo: 1000,
            cuenta: 'Visa',
            estado: true,
            servicios: ['giro','abono','transferencia'],
            desactivar: false
        }
    },
    methods: {
        aumentar(){
            let comp = this
            comp.saldo = comp.saldo + 100
            comp.desactivar = false
        },
        disminuir(){
            let comp = this
            if(comp.saldo === 0){
                comp.desactivar = true
               alert('saldo agotado')
            }
            else
            {
                comp.saldo = comp.saldo - 100
            }
        }
    },

}
</script>

<style>

</style>