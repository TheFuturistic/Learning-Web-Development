const express=require("express")
const app=express();
const PORT=3000

app.use(express.json());  //json data parse   //midleware

app.get("/:id",(req,res)=>{
    const id=req.params.id;
    // console.log(req.url)
    // console.log(req.method)
    // console.log(req.headers)
    res.send("Hello World");
});

app.get("/",(req,res)=>{
    console.log(req.query.name)
    console.log(req.query.age)
    res.send("Hello World Again");
});


app.post("/",(req,res)=>{
    const data=req.body;
    console.log(data);
    res.send("Hello World");
})

app.listen(PORT,()=>console.log("server is running"));