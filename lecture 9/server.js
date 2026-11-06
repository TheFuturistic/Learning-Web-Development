const express=require("express");
const app=express();

const users=[
    {id:1, name:"Devendra", email:"GZDlC@example.com"},
    {id:2, name:"Ravi", email:"ravi@com"},
    {id:3, name:"alex", email:"alex@com"},
    {id:4, name:"vasu", email:"vasu@com"},
]

app.get("/",(req,res)=>{
    res.send("Hello Students");
})

app.get("/users",(req,res)=>{
    res.json(users);
})

app.get("/contact",(req,res)=>{
    res.send("Hello from contact route");
})


app.listen(3000,()=>console.log("server is running on port 3000"));