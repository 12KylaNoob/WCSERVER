const books = Vue.createApp({
    data() {
        return {
            showBooks: true,
            btitle: 'The Ledger',
            bauthor: 'Odvina Kyla',
            year: 2008
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
});
books.mount('#books')