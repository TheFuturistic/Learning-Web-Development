const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    empId: {
        type: Number,
        required: true,
        unique:true,
        validate:{
            validator:function(value){
                return value>100;
            }
        }
    },
    Name: {
        type: String,
        required: true,
        // validate:{
        //     validator:function(value){
        //         return value.endsWith("@krmu.edu.in")
        //     }
        // }
    },
    salary: {
        type: Number,
        required: true
    },
    department:{
        type: String,
        required: true,
        enum:["HR","IT","Finance","Sales"]
    },
    contact:{
        type: Number,
        required: true,
        minLength:10,
        maxLength:10
    },
    age:{
        type: Number,
        required: true,
        min:18
    },
    location:{
        type: String,
        required: true
    }
},{timestamps: true});

module.exports=mongoose.model("employees", employeeSchema);