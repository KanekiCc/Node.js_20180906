var http = require("http");
var fs = require("fs");
http.createServer((req,res)=>{
    //写文件
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    fs.writeFile("./fs1.txt","这是写入文件：1234567890",(err,data)=>{
        res.end(data)
    })
    //res.end()
}).listen(3000,"127.0.0.1");