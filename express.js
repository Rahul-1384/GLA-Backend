const express = require("express");
const path = require("path");
const app = express();

app.listen(5000, () => {
    console.log("Server is running at port 5000");
});

app.get("/home", (req, res) => {
    // res.send("HOME PAGE");
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "home.html"));
    // res.sendFile("home.html");
});
