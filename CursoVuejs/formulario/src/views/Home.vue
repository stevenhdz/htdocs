<template>
    <div>
    <h1 class="my-5"> Formlarios con vuejs</h1>

        <form @submit.prevent="procesarForm">
            <Input :tarea="tarea"/>
        </form>
        <hr>
            <p>
            {{ tarea }}
            </p>

             <ListaTareas/>
    </div>
</template>

<script>
import Input from '../components/Input'
import {mapActions} from 'vuex'
import ListaTareas from '../components/ListaTareas.vue';
const shortid = require('shortid')

    export default {
        name: "Home",
        components: { Input, ListaTareas },
        data() {
            return {
                tarea: {
                    id: '',
                    nombre: '',
                    categorias: [],
                    estado: '',
                    numero: 0
                },
            };
        },
        methods: {
            ...mapActions(['setTareas']),
            //npm i all json
            procesarForm(){
                console.log(this.tarea)
                if(this.tarea.nombre.trim() === ""){
                    console.log('vacio')
                    return
                }
                console.log('no vacio')
                //generar id 
                this.tarea.id = shortid.generate()
                console.log(this.tarea.id)

                //envio 
                this.setTareas(this.tarea)

                //ponerlos vacios o default
                this.tarea = {
                    id: '',
                    nombre: '',
                    categorias: [],
                    estado: '',
                    numero: 0
                }
            }
        }
    };
</script>