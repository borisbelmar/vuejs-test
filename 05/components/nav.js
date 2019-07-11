Vue.component('navigation', {
    template: //html
    ` 
    <div>
        <nav>
            <span>Titulo | </span>
            <a v-for="item of menu" href="#">{{item}} </a>
        </nav>
    </div>
    `,
    data() {
        return {
            menu : ['Inicio', 'About']
        };
    }
});