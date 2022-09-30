var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname,'dist')));
app.get('/', function (req, res) {
    console.log('req-------',req)
   res.send('Hello World');
})
 
var server = app.listen(8081, function () {
/* console.log('server------',server)
console.log('address------',server.address()) */
  var host = server.address().address
  var port = server.address().port
	console.log(server.address())
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})