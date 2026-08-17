import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0
    }
  },
  mutations: {
    cargar(state, payload) {
      state.tareas = payload
    },
    set(state, payload) {
      state.tareas.push(payload)
    },
    eliminar(state, payload) {
      state.tareas = state.tareas.filter(item => item.id !== payload)
    },
    tarea(state, payload) {
      if (!state.tareas.find(item => item.id === payload)) {
        router.push('/')
        return
      }
      state.tarea = state.tareas.find(item => item.id === payload)
    },
    update(state, payload) {
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      router.push('/')
    }
  },
  actions: {
    async cargarLocalStorage({ commit }) {
      try {
        const res = await fetch('https://vueapi-58baf-default-rtdb.firebaseio.com/tareas.json') 
        //respuesta
        const dataDB = await res.json()
        const arrayTareas = []

        for(let id in dataDB){ 
        arrayTareas.push(dataDB[id]) 
        commit('cargar', arrayTareas)
        }

      } catch (error) {
        console.log(error)
      }
    },
    async setTareas({ commit }, tarea) {
      try {
        const res = await fetch(`https://vueapi-58baf-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,{
          method: 'PUT',
          headers:{
            'Content-Type': 'Application/json'
          },
          body: JSON.stringify(tarea)
        }) 
        //respuesta
        const dataDB = await res.json()
        console.log(dataDB)
      } catch (error) {
        console.log(error)
      }
      commit('set', tarea)
    },
    async deleteTareas({ commit }, id) {
      try {
        await fetch(`https://vueapi-58baf-default-rtdb.firebaseio.com/tareas/${id}.json`,{
          method: 'DELETE'
        }) 
        commit('eliminar', id)
      } catch (error) {
        console.log(error)
      }
    },
    setTarea({ commit }, id) {
      commit('tarea', id)
    },
    async updateTarea({ commit }, tarea) {
      try {
        const res = await fetch(`https://vueapi-58baf-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,{
          method: 'PATCH',
          headers:{
            'Content-Type': 'Application/json'
          },
          body: JSON.stringify(tarea)
        }) 
        //respuesta
        const dataDB = await res.json()
        console.log(dataDB)
        commit('update', dataDB)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
