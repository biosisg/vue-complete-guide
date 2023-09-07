const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: '',
            confirmedName: ''
        };
    },
    computed: {
        fullname() {
            if (this.name == '') {
                return '';
            }

            return this.name + ' ' + 'Schwarzmüller';
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        setName(event) {  // setName(event, lastName)
            this.name = event.target.value;
        },
        submitForm() {
            alert('Submitted!');
        },
        confirmInput() {
            this.confirmedName = this.name;
        },
        resetInput() {
            this.name = '';
        }
    }
});

app.mount('#events');
