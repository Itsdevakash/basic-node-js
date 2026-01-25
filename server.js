const http = require('http');
http.createServer((request,response)=>{
    response.write("<h1>AKASH</h1><br> <h2>Maurya</h2>");
    response.end("");
}).listen(4800);



http.createServer((request,response)=>{
    response.write("<h1>BCA</h1>");
    response.end("");
}).listen(5800);