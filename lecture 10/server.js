const express=require("express");
const app=express();
const PORT=3000

app.use(express.json()); //it handles the json data coming from the client//encode

const students=[
    {rollNo:1, name:"Krishn", section:"Core-B"},
    {rollNo:2, name:"ayan", section:"Core-B"},
    {rollNo:3, name:"anuj", section:"Core-B"},
    {rollNo:4, name:"kunal", section:"Core-B"},
    {rollNo:5, name:"sukhwinder", section:"Core-B"}
]
///Read Operation
app.get("/students",(req,res)=>{
    res.json(students)
})

//Read operation with id
app.get("/students/:rollNo",(req,res)=>{
    const id=req.params.rollNo;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not found"});
    }
    res.json({success:true,student});
})


//Create
app.post("/students",(req,res)=>{
    const data=req.body;
    students.push({rollNo:students.length+1,...data});
    res.json({success:true, message:"student created successfully",data});
})

////update
app.put("/students/:rollNo",(req,res)=>{
    const id=req.params.rollNo;
    const data=req.body;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not found"});
    }
    student.name=data.name??student.name;
    student.section=data.section??student.section;
    res.json({success:true,student});
})

//delete

app.delete("/students/:rollNo",(req,res)=>{
    const id=req.params.rollNo;
    const student=students.find((student)=>student.rollNo===Number(id));
    if(!student){
        res.status(404).json({success:false, message:"student not found"});
    }
    students.splice(students.indexOf(student),1);
    res.json({success:true, message:"student deleted successfully"});
})

app.listen(PORT,()=>console.log("server is running on port 3000"));