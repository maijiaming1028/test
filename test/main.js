/*
var fs = require("fs");
fs.readFile("input.txt",function(err,data){
    if(err) return console.log(err);
    console.log(data.toString());
})
console.log("异步阻塞的回调函数"); */

/* var events = require("events");
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected(){
    console.log("连接成功");
    eventEmitter.emit("data_received")
}

eventEmitter.on("connect",connectHandler);

eventEmitter.on("data_received",function(){
    console.log('数据接受成功');
})
eventEmitter.emit('connect');
console.log('程序执行完毕') */
 

/* var http = require("http");
var url = require('url');
const { exit } = require("process");
var events = require('events');

// 创建 eventEmitter 对象 
var eventEmitter = new events.EventEmitter();

// route 根路径 
eventEmitter.on('/', function(method, response){
    response.writeHead(200, {'Content-Type': 'text/plain;charset=utf8'});
    response.end('Hello World\n你好,世界');
});

// route 404 
eventEmitter.on('404', function(method, url, response){
    response.writeHead(404, {'Content-Type': 'text/plain;charset=utf8'});
    response.end('404 Not Found\n404页面没找到');
});

// 启动服务 
http.createServer(function (request, response) {
    console.log('request是',request);
    console.log('request的url是',request.url);

    // 分发 
    if (eventEmitter.listenerCount(request.url) > 0){
        eventEmitter.emit(request.url, request.method, response);
    }
    else {
        eventEmitter.emit('404', request.method, request.url, response);
    }
    
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
console.log('当前脚本所在目录',__dirname);
console.trace(); */



/* // 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取,argv 属性返回一个数组，由命令行执行脚本时的各个参数组成。它的第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform); */


/* // 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage()); */


var http = require('http');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
      console.log('chunk',chunk);
    body += chunk;
  });
  
  req.on('end', function () {
    // 解析参数
    console.log('body',body);
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    if(body.name && body.url) { // 输出提交的数据
        res.write("网站名：" + body.name);
        res.write("<br>");
        res.write("网站 URL：" + body.url);
    } else {  // 输出表单
        res.write(postHTML);
    }
    res.end();
  });
}).listen(3000);
