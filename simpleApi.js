const http = require('http')



const userData=[

    {
        name:"ak",
        age:25,
        email: "ak@gmail.com"
    },
     {
        name:"Vk",
        age:25,
        email: "vk@gmail.com"
    },
     {
        name:"Bk",
        age:35,
        email: "bk@gmail.com"
    },
     {
        name:"ck",
        age:25,
        email: "ck@gmail.com"
    },
     {
        name:"sk",
        age:20,
        email: "sk@gmail.com"
    }
]
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","application/json")
 resp.write(JSON.stringify(userData));
resp.end();
}).listen(6100) 