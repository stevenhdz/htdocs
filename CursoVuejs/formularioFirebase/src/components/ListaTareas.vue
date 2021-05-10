<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="">#</th>
                <th scope="">Nombre</th>
                <th scope="">Categorias</th>
                <th scope="">Estado</th>
                <th scope="">Numero</th>
                <th scope="">Accion</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in tareas" :key="item.id">
               <th scope="row">{{item.id}}</th>
               <td>{{item.nombre}}</td>
               <td v-html="item.categorias"></td>
               <td>{{item.estado}}</td> 
               <td>{{item.numero}}</td>
               <td>
                   <button class="btn btn-danger btn-sm" @click="deleteTareas(item.id)">
                       Eliminar
                    </button>
                   <router-link class="btn btn-warning ml-2 btn-sm" :to="{name: 'Editar',params: {id: item.id}}">
                       Editar
                    </router-link>
               </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['deleteTareas'])
    },
}
</script>