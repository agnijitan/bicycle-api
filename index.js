var express = require("express");
var app = express();

app.get("/getUser", (req, res) => {
    res.send("Hello World!");
});

app.listen(4000);