const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
    console.log("Server is running at prot 3000");
})

app.use(express.static(path.join(__dirname,'static')));

// handling Form data
app.use(express.urlencoded({extended:true}));
app.post('/information', (req, res) => {
    console.log(req.body);
    res.send("Hello")
})

// app.get('/home', (req,res) => {
//     res.sendFile(path.join(__dirname,'home.html'));
// })

// If there are lot of js file linked into script.js then we have to statistically serve them using app.use methode(express.static)
// app.get('script.js', (req,res) => {

// });