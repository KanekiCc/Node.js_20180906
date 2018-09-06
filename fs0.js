var http = require("http");
var fs = require("fs");
http.createServer((req,res)=>{
    //读取文件
    fs.readFile("./note.txt",(err,data)=>{
        res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
        res.end(data)
    })
}).listen(3000,"127.0.0.1");