//ODVINA, Kyla Marie R.
//query-demo
//use of .query property
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req.query)
})
app.listen(8000)