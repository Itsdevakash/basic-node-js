
const http =require('http');
const arg = process.argv; // command input all data get
const port = arg[2];
http.createServer((req,resp)=>{
resp.write("testing input ")
resp.end()
}).listen(port)