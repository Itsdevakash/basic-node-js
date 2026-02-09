const http = require('http');
const fs = require('fs');


http.createServer((req,resp)=>{

let collectheader = fs.readFileSync("html/header.html","utf-8");
let collectfooter = fs.readFileSync("html/footer.html","utf-8");
//   fs.readFile("html/header.html",'utf-8',(err,headerdata)=>{
//     if(err){
//         resp.writeHead(500,{"content-type":"text/plain"})
//         resp.end("Server Error !");
//         return false
//     }

//         collectheader=headerdata

//   })

let file ="/home";
if(req.url !="/"){
    file=req.url;
}


    if(req.url !== "/style.css"){

  fs.readFile("html"+file+".html",'utf-8',(err,data)=>{
    if(err){
        resp.writeHead(500,{"content-type":"text/plain"})
        resp.end("Server Error !");
        return false
    }

    resp.write(collectheader+""+data+collectfooter);
    resp.end();

  })
}else if(req.url == "/style.css"){
 fs.readFile("html/style.css",'utf-8',(err,data)=>{
    if(err){
        resp.writeHead(500,{"content-type":"text/plain"})
        resp.end("Server Error !");
        return false
    }
 resp.writeHead(200,{"content-type":"text/css"})
    resp.end(data);

  })

}

}).listen("3800")