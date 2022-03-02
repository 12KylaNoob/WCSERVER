//ODVINA, Kyla Marie R.
//server
//GET
var express = require("express");

var app = express();

app.use(express.static('public'));

app.get("/index.html", function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get("/process_get", function (req, res) {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        course: req.query.course,
        age: req.query.age,
        comment: req.query.comment,
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(5000, 'localhost', function () {
    var host = server.address().address
    var port = server.address().port

    console.log('Server running at http://%s:%s', host, port);
}
);