const http = require('http');
const age = 29;
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html")
  resp.write(`
     <html>
     <head>
     <title>NODE </title>
     </head>
     <body>
     <h2>AKASH MAURYA</h2>
     <P>` +age+`</p>
     <P>` +new Date+`</p>
     </body>

     </html>
    `);
  resp.end(" ");
    
}).listen(4800)








