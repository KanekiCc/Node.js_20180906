var http = require("http");
var url = require("url");
http.createServer((req,res)=>{
    var url = req.url;
    /**
    *1.根据地址栏信息  /student/    显示学生信息 并限制id长度
     * 1.1  req.url 获取地址
     * 1.2  正则匹配
    *2.根据地址栏信息  /teacher/    显示老师信息 并限制id长度
    *3.如果匹配不到  显示无此人员
    *substring和substr的区别:
     * substring 含头不含尾
     * substr   长度
    */

    if(url.substring(0,9)=="/student/"){
        var studentId=url.substr(9)
        if((/^\d{9}$/).test(studentId)){
            console.log("学员id：" + studentId);
        }else{
            console.log("学员id不正确");
        }
    }else if(url.substring(0,9)=="/teacher/"){
        var teacherId=url.substr(9)
        if((/^\d{9}$/).test(teacherId)){
            console.log("教师id：" + teacherId);
        }else{
            console.log("教师id不正确");
        }
    }else{
        console.log("没有此人");
    }
    res.end()
}).listen(3000,"127.0.0.1");