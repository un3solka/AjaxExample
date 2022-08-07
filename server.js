const express = require("express");
const path = require('path');

const app = express();

app.get("/about", function (request, response) {
    response.sendFile(path.join(__dirname+'/pages/about.html'));
});

app.get("/news", function (request, response) {
    response.sendFile(path.join(__dirname+'/pages/news.html'));
});

app.get("/", function(request, response){

    response.sendFile(__dirname + "/index.html");
});
app.use(express.static(__dirname));

app.listen(3000);
console.log('Running at Port 3000');