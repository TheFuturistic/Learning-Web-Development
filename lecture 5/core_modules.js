const os=require('os');
const path=require('path');
const fs=require('fs');
const crypto=require('crypto');
const dns=require('dns');
const  process=require('process');

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)
// console.log(oshomedir()).
// console.log(os.totalmem()/(1024*1024*1024) + " GB");
// console.log(os.freemem()/(1024*1024) + " MB");

// const filePath=path.resolve(__dirname,"core_modules.js");
// console.log(filePath);
// console.log(__dirname)

// const filePath=path.join("lecture 5","Core-D","core_modules.js");
// console.log(filePath);

// const file="lecture 5/Core-D/core_modules.js"
// console.log(path.basename(file));
// console.log(path.extname(file));
// console.log(path.dirname(file));

// console.log("first")
// const data=fs.readFileSync("file.txt","utf-8"); //synchronous
// console.log(data);
// console.log("second")
// console.log("first")
// fs.readFile("file.txt","utf-8",(err,data)=>{  //asynchronous
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })
// console.log("second")

// fs.writeFile("file.txt","hello students",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// fs.appendFile("file.txt","\nhello students",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// fs.unlink("file1.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// const password="Jhon@124"

// const hash=crypto.createHash("sha256").update(password).digest("hex");
// console.log(hash)

// const salt=crypto.randomBytes(16).toString("hex");
// console.log(salt)

// const hash=crypto.createHmac("sha256",salt).update(password).digest("hex");
// console.log(hash)

// dns.lookup("www.google.com",(err,address,family)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(address);
//         console.log(family);
//     }
// })

// dns.reverse("8.8.8.8",(err,hostnames)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(hostnames);
//     }
// })

// const data=process.argv;
// console.log(Number(data[2])+Number(data[3]));

console.log(process.version);
console.log(process.cwd())