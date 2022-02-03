var http = require('http');
var root = require('./root')
var about = require('./about');
var contact = require('./contact')

var server = http.createServer(function (req, res) {
    if (req.url == '/') {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write('<html><body><h3>Welcome to my Node.js Application</h3></body></html>' + root);
        res.end();
    }

    else if (req.url == "/about") {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write('<html><body><h3>This is the About Page</h3></body></html>' + about);
        res.end();
    }

    else if (req.url == "/contact") {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write('<html><body><h3>This is the Contact Page</h3></body></html>' + contact);
        res.end();
    }

    else if (req.url == "/gallery") {

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write('<html><body><h3>This is the Gallery Page</h3></body></html>');
        res.end();
    }

    else
        res.end('Invalid Request!')
});

server.listen(7000);
console.log('NodeJS web server at port 7000 is running...')

//ODVINA, Kyla Marie R.
//February 2, 2022
//WD-201