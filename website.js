const http = require('http');
const fs = require('fs');


http.createServer((req,resp)=>{

    if(req.url == "/"){
  fs.readFile("html/home.html",'utf-8',(err,data)=>{
    if(err){
        resp.writeHead(500,{"content-type":"text/plain"})
        resp.end("Server Error !");
        return false
    }

    resp.write(data);
    resp.end();

  })
}else if(req.url == "/style.css"){
 fs.readFile("html/style.css",'utf-8',(err,data)=>{
    if(err){
        resp.writeHead(500,{"content-type":"text/plain"})
        resp.end("Server Error !");
        return false
    }

    resp.write(data);
    resp.end();

  })

}

}).listen("3800")