const app = new Vue ({
    el: '#app',
    data: {
        mensaje: 'Hola Vue.js'
    },
    methods: {
        cambiarMensaje() {
            this.mensaje = 'Actualizando el mensaje';
        },
        destruir() {
            this.$destroy();
        }
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mount() {
        console.log('mount');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    }
});