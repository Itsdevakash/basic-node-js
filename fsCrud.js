const http = require('http');
const fs = require('fs');


const operation = process.argv[2];


if(operation == "write"){
const name = process.argv[3];
const content = process.argv[4];
fs.writeFileSync('files/'+name+"txt",content); 
}

if(operation == "read"){
const name = process.argv[3];
const data  = fs.readFileSync('files/'+name+"txt",'utf-8'); 
console.log(data);
}

if(operation == "update"){
const name = process.argv[3];
const content = process.argv[4];
 fs.appendFileSync('files/'+name+"txt",content); 

}

if(operation == "delete"){
const name = process.argv[3];
fs.unlinkSync('files/'+name+"txt"); 
}

// fs.writeFileSync('files/apples.txt',"This is a Appy");   //file create

// fs.unlinkSync('files/apples.txt');   //delete file

// const data =fs.readFileSync('files/apple.txt','utf-8');   //file Read
// console.log(data);

// fs.appendFileSync("files/apple.txt"," and this is a good health")  //append









