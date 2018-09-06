var http = require("http");
var fs = require("fs");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    //fs.mkdir("./album/aa",(err,data)=>{
    //    console.log("创建目录成功");
    //    res.end()
    //})
    //fs.stat("./album/aa",(err,data)=>{
    //    console.log(data.isDirectory());
    //    if()
    //    res.end(data.isDirectory()){
    //        console.log("这是一个文件");
    //    }
    //})
    /*
    * 1.读取目录
    * 2.判断当前目录里面的数据（目录，文件）
    * 3.遍历files
    * 4.判断是否是目录*/

    //如果是图标，立刻返回
    if(req.url=="favicon.ico"){
        return
    }
    //读取目录
    fs.readdir("./album",(err,files)=>{
        //建立空文件夹，等待放置目录
        var arr=[];
        //迭代处理 （因为开始是一个异步函数，通过迭代变成同步函数 1执行后再执行2，2执行完再执行3...）
        (function item(i){
            if(i==files.length){
                console.log(arr);
                return
            }
            fs.stat("./album/"+files[i],(err,data)=>{
                if(data.isDirectory()){
                    arr.push(files[i])
                    //console.log(arr);
                }
                item(i+1)
           })
        })(0)
        res.end()
    })


}).listen(3000,"127.0.0.1");