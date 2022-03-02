var express = require("express");
var multer = require("multer");
var app = express();
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
var upload = multer({ storage: storage }).single('myfile');

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})
app.post('/uploaded', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("File is uploaded successfully!");
        }
        res.end("Error uploading file.");
    });
});
app.listen(2000, function () {
    console.log("Server is running on port 2000");
});