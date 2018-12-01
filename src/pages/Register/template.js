// import { mapActions } from 'vuex'

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        // ...mapActions(['register']),
        register() {
            return this.$store.dispatch('register', { username: this.username, password: this.password })
        },
        onRegister() {
            this.register().then(
                res => this.$router.push('/'),
                res => this.$router.push('/register')
            )
        }
    }
}