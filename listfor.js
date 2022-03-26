const ListRendering = {
    data() {
        return {
            todos: [
                { text: 'Study' },
                { text: 'Study more' },
                { text: 'and study more, AGAIN' }
            ]
        }
    }
}

Vue.createApp(ListRendering).mount('#list-rendering')