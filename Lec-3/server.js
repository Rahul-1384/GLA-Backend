const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log("Server is running at port 5000");
})

app.get("/home", (req, res) => {
    res.send("HOME PAGE");
});