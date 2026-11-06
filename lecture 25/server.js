const express = require('express');
const mongoose = require('mongoose');
const Employee=require("./model/employee.model.js")
const app = express();
const port = 3000;

app.use(express.json())
//Read Operation
app.get("/api/employees", async (req, res) => {
    try {
        const employees = await Employee.find();    
        res.json(employees);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

//get employee by thier id
app.get("/api/employees/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({ success: false, message: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

app.post("/api/employees", async (req, res) => {
    console.log(req.body)
    try {
        const employees = await Employee.find();    
        const employee = await Employee.create({empId:100+(employees.length+1),...req.body});
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
})

app.put("/api/employees/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const employee = await Employee.findByIdAndUpdate(id, req.body,{new:true});
        if (!employee) {
            return res.status(404).json({ success: false, message: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.delete("/api/employees/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const employee = await Employee.findByIdAndDelete(id);
        if (!employee) {
            return res.status(404).json({ success: false, message: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});




mongoose.connect("mongodb://localhost:27017/GoogleDB").then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})