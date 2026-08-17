fetch('https://pokeapi.co/api/v2/pokemon/')
.then((res)=>{return res.json()})
.then(data =>{/* console.log(data.results) */
data.results.forEach(element => {
    console.log(element.name)
});
}).catch(error => console.log(error))


//acortando
fetch('https://pokeapi.co/api/v2/pokemon/')
.then(res => res.json())
.then(data =>{/* console.log(data.results) */
    let arrayNombres = []
data.results.forEach(element => {
    /* console.log(element.name) */
    arrayNombres.push(element.name)
});
})
.catch(error => console.log(error))


//await
const obtenerPokemons = async() =>{
    try{
       const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
       const data = await res.json()
       console.log(data.results)
       const arrayNombres = data.results.map(poke => poke.name) //recorre devuelve la propiedad name
       console.log(arrayNombres)
    }catch(error){
        console.log(error)
    }
}
obtenerPokemons()



//await
const obtenerPokemons = async() =>{
    try{
       const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
       const data = await res.json()
       console.log(data.results)
       const arrayNombres = data.results.filter(poke => poke.name !== 'bulbasaur') //recorre devuelve la propiedad name
       console.log(arrayNombres)
    }catch(error){
        console.log(error)
    }
}
obtenerPokemons()