const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res, next) => {
    try{
        throw new Error("Something went wrong!!!!!!!!!!");
    }catch(error){
        // res.status(500).json({success:false, message:"Something went wrong"});
        next(error);
    }
})

app.get("/:id",(req,res,next)=>{
    const id=req.params.id;
    try{
        if(id==="1234"){
            res.send("Valid id");
        }else{
            throw new Error("Invalid id");
        }
    }catch(error){
        // res.status(400).json({success:false, message:"invalid Id"});
        next(error);
    }
});

app.use((err,req,res,next)=>{  //error  middleware
    res.status(500).json({success:false, message:err.message});
})

app.use((req,res)=>{   //invalid route middleware
    res.status(404).json({success:false, message:"Page not found"});
})

app.listen(PORT, () => console.log(`Server is running `));