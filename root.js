let http = require('http');
let useForm = require('./useForm')
let useSubmit = require('./useSubmit')

http.createServer((req,resp)=>{
resp.writeHead(200,{"content-type":"text/html"})
   if(req.url =="/"){
    useForm(req,resp)

   }else if("/submit"){
         useSubmit(req,resp)
    resp.write("Data Submitted !")
   }else{

        resp.write("Data Not Submitted !")
   }











resp.end();

}).listen(3800);