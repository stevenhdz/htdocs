var course = {
    name: "GRA 2032",
    start: 8,
    end: 10
};


var course = {
    name: "GRA 2032",
    start: 8,
    end: 10
};
​
course.name;


var course = {
    name: "GRA 2032",
    start: 8,
    end: 10
};
​
course["name"];





var character = {
    name: "Donna",
    hair: "red"
};
​
character.hair = "blonde";
​
character;





var character = {
    name: "Donna",
    hair: "red"
};
character["hair"] = "blonde";

​character;



const mascota = {
    nombre: 'tom',
    edad: 10,
    vivo: true,
    razas: ['peludo', 'negro']
}

console.log(mascota.razas[1])
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.vivo)

mascota.id = 1

console.log(mascota.id)

const {edad, nombre} = mascota
console.log(nombre)




//destructure object
const  web = {
    nombre: 'STEVEN',
    links: {
        enlace: 'www.sl.com'
    },
    redessociales:{
      youtube:{
        enlace: 'hoho',
        nombre: 'steven'
      }
    }
}
// const enlace = web.redessociales.youtube.enlace
// console.log(enlace)
console.log(web.redessociales.youtube.enlace)


//corto 
const {nombre, enlace} = web.redessociales.youtube
console.log(web.redessociales.youtube)
console.log(nombre)