const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    // console.log(req.url)
    if(req.url === "/home" && req.method === "GET"){
        res.end("<h1>HOME PAGE</h1>");
    }else if(req.url === "/contact" && req.method === "GET"){
        res.end("<h1>CONTACT PAGE</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server is running at port");
})