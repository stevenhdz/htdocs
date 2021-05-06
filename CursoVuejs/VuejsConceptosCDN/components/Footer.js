app.component('footer-banco',{
    props: ['cantidad1','fecha'],
    template: /*html*/`
    <div class="bg-dark py-3 mt-2 text-white">
       <h3>{{text}} - {{cantidad1}}</h3>
       <h3>{{fecha}}</h3>
    </div>
    `,
    data(){
        return{
            text: 'footer 2',
            cantidad: 1000
        }
    }
})