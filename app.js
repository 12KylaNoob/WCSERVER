const app = Vue.createApp({
    data() {
        return {
            title: 'Cookie Count',
            desc: '20 pesos per piece',
            count: 5,
            button: 'Check out'
        }
    }
})

app.mount('#app')