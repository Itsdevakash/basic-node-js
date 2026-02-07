const queryString = require('querystring');
function useSubmit(req,resp){
   let dataBody = [];
req.on("data",(chunk)=>{
  dataBody.push(chunk);
});

req.on("end",()=>{
  let rowData = Buffer.concat(dataBody).toString();
  let readData = queryString.parse(rowData);
  console.log(readData);

})

}
module.exports=useSubmit;