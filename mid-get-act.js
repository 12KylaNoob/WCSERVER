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

app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(h => h.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('Movie not listed.');
    res.send(movie);
})

app.listen(7000, () => console.log('Listening on port 7000'));