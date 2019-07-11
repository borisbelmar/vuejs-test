Vue.component('hijo', {
    template: //html
    ` 
    <div class="box has-background-info has-text-white">
        <h3>Componente hijo: {{numero}}</h3>
        <h4>Nombre hijo: {{nombre}}</h4>
        <input type="text" v-model="nombre">
    </div>
    `,
    props: ['numero'],
    data() {
        return {
            nombre : 'Boris'
        };
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre);
    },
    updated() {
        this.$emit('nombreHijo', this.nombre);
    }
});