
var jquery = jQuery.noConflict();

console.log(jquery)

if(jquery != ''){
    console.log('entre')

    jquery(function(){

        /* jquery('h1').html('Hola')
        jquery('.display-4').html('desde clase')
        jquery('#idh1').html('desde id') */

      /*   document.querySelector('h1').innerHTML = 'H1'
        document.querySelector('.display-4').innerHTML = 'desde clase'
        document.querySelector('#idh1').innerHTML = 'desde id' */

        /* jquery('.container h1').html('Cambie texto') */
        /* jquery('.container h1:first').html('Cambie texto') */
        /* jquery('.container h1:last').html('Cambie texto') */

        /* jquery('#idh1').addClass('text-danger')
        jquery('#idh1').removeClass('text-danger')

        jquery('#contenido').append('<h1>holassssssss final</h1>')
        jquery('#contenido').prepend('<h1>holassssssss inicio</h1>')

        jquery('#color-azul').css('color','blue')
        jquery('#color-azul').css({color:'blue',background:'salmon',padding:'20px'})

        jquery('#color-azul').remove()

        jquery('img').attr('src','https://i.blogs.es/5efe2c/cap_001/1024_2000.jpg')

        jquery('img:last').attr('width','100') */


       /*  var parrafo = jquery('#resultado p')

        jquery('.btn-primary').click(function() {
            parrafo.addClass('display-4')
        }) 

        jquery('.btn-danger').click(function() {
            parrafo.removeClass('display-4')
        }) 
 
        jquery('.btn-warning').click(function() {
            parrafo.toggleClass('display-4')
        }) */

       /*  jquery('#formulario').submit(function(evento) {
            evento.preventDefault();
            var nombre = jquery('#nombre').val()
            console.log(nombre)
        })  */


        var resultado = jquery('#resultado')

        jquery('.btn-primary').click(function() {
            resultado.hide(1000);
        }) 

        jquery('.btn-danger').click(function() {
            resultado.show(1000);
        }) 
 
        jquery('.btn-warning').click(function() {
            resultado.toggle(1000);
        })

    })

}else{
    console.log('no funcionando jquery')
}

