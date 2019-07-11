Vue.component('padre', {
    template: //html
    ` 
    <div class="box has-background-primary has-text-white">
        <h3>Componente Padre: {{numeroPadre}}</h3>
        <h3>Nombre Padre: {{nombrePadre}}</h3>
        <button class="button is-white is-small" @click="numeroPadre++">Aumentar</button>
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
    </div>
    `,
    data() {
        return {
            numeroPadre : 5,
            nombrePadre : ''
        };
    }
});