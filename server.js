//ODVINA, Kyla Marie R.
//server
//to fetch the port and address
var express = require("Express");

var app = express();

app.get("/", function (req, res) {
    res.send("Successfully created the second App!");
});

var server = app.listen(2001, 'localhost', function () {
    var host = server.address().address
    var port = server.address().port

    console.log('Server running at http://%s:%s', host, port);
}
);