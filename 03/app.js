const app = new Vue ({
    el: '#app',
    data: {
        mensaje: 'Hola mundo',
        contador: 10
    },
    methods: {
        aumentar() {
                if (this.contador < 10) {
                    return this.contador++;
                }
            },
        disminuir() {
            if (this.contador > 0) {
                return this.contador--;
            }
        }
    },
    computed: {
        invertido() {
            return this.mensaje.split('').reverse().join('');
        },
        color() {
            return {
                'is-danger' : this.contador <= 3,
                'is-warning' : this.contador > 3 && this.contador <= 7,
                'is-success' : this.contador > 7
            };
            /*
            //Forma antigua de hacerlo
            if(this.contador <= 3) {
                return 'is-danger';
            } else if (this.contador > 3 && this.contador <= 7) {
                return 'is-warning';
            } else {
                return 'is-success';
            }
            */
        }
    }
});