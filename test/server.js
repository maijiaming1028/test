var http = require("http");
var url = require("url");
function start(route){
    function onRequest(req,res){
        console.log(req)
        var pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + "received");
        route(pathname);
        res.writeHead(200,{"Content-Type":"text/plain;charset=utf8"});
        res.write('响应数据');
        res.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started .")
}
exports.start = start;