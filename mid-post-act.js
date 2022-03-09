const express = require('express');
const req = require('express/lib/request');
const app = express();

const movies = [{
    id: 1,
    title: 'Superman'
},
{
    id: 2,
    title: 'Iron Man'
},
{
    id: 3,
    title: 'Batman'
},
{
    id: 4,
    title: 'Hulk'
}]

app.get('/api/movies', (req, res) => {
    res.send(movies);
})

app.use(express.json());

app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movie);
});

app.listen(8000, () => console.log('Listening on port 8000'));