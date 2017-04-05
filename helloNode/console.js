console.log("%s说知识从未如此性感：%d","小明",50);
var http = require("http");

http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	res.write("<H1>200</h1>");
	res.end("<H1>hello world,node.js</H1>")
}).listen("8082");
console.log("HTTP server is listening at port 8082.");