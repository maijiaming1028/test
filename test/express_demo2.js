let express = require("express");
let app = express();
app.use("/static",express.static("static"));


app.get("/",function(req,res){
    console.log("主页GET请求");
    res.send("Hello GET");
})

/* app.post("/",function(req,res){
    console.log('主页POST请求');
    res.send("Hello POST");
})

app.get("/del_user",function(req,res){
    console.log("/del_user 响应DELETE请求");
    res.send('删除页面');
})

app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
 })
  
 app.get('/ab*cd', function(req, res) {   
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
 })

 app.get("*",function(req,res){
    res.send("无法找到该页面");
}) */
 

let server = app.listen(8081,function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("应用实例,访问地址为http://%s:%s",host,port);
})
  

