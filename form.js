const http = require('http');
const fs = require("fs")
const queryString = require('querystring');
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{"content-type":"text/html"})

//     if(req.url == "/"){
//   resp.write(`
//          <form action="/submit" method="post">
//             <div class="form-row">
//                 <input 
//                     type="text" 
//                     name="name"
//                     class="form-input" 
//                     placeholder="Enter Name" 
//                     required
//                 >
//                 <button type="submit" class="form-btn">
//                     Submit
//                 </button>
//             </div>
//         </form>
    
    
//     `);
//   }else if(req.url == "/submit"){
//     resp.write("Data Submitted !");
//   }else{
//     resp.write("Data Not Submitted !")
//   }
//   resp.end();
// }).listen(3800)




http.createServer((req,resp)=>{
   
fs.readFile("html/form.html","utf-8",(err,data)=>{
   if(err){
            
           resp.writeHead(500,{"content-type":"text/plain"})
            resp.write('internal server error')
            resp.end();
            return
        }

 if(req.url == "/"){
resp.writeHead(200,{"content-type":"text/html"})
resp.write(data);

  }else if(req.url == "/submit"){
    let dataBody = [];
req.on("data",(chunk)=>{
  dataBody.push(chunk);
});

req.on("end",()=>{
  let rowData = Buffer.concat(dataBody).toString();
  let readData = queryString.parse(rowData);
  console.log(readData);

})






    resp.write("Data Submitted !");
  }else{
    resp.write("Data Not Submitted !")
  }
resp.end();



})


}).listen(3800)