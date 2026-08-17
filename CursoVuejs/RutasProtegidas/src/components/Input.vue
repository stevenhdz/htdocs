<template>
    <div>
   <input type="text" class="form-control my-2" placeholder="Ingrese nombre" v-model.trim="tarea.nombre" />

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="tarea.categorias"
                value="javascript" />
            <label class="form-check-label" for="flexSwitchCheckDefault">Javascript</label>
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault1" v-model="tarea.categorias"
                value="nodejs" />
            <label class="form-check-label" for="flexSwitchCheckDefault1">Nodejs</label>
        </div>

        <div class="mt-2">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefaul0"
                    v-model="tarea.estado" value="urgente">
                <label class="form-check-label" for="flexRadioDefaul0">
                    Default radio
                </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefaul1"
                    v-model="tarea.estado" value="relax">
                <label class="form-check-label" for="flexRadioDefaul1">
                    Default radio
                </label>
            </div>
        </div>


        <div class="mt-2">
            <input class="form-control" type="number" v-model.number="tarea.numero">
        </div>

        <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">
            Procesar
        </button>
    </div>
</template>

<script>
export default{
    props:{
        tarea: Object
    },
        computed:{
            bloquear(){
                return this.tarea.nombre.trim() === "" ? true : false
            }
        }
}
</script>
