const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        
       
        
    },
    uname:{
        type:String,
        
        
    },
    email:{
        type:String,
        
        
    },
    password:{
        type:String,
        
        
        
    },
    gender:{
        type:String,
        
    },
    dob:{
        type:String,
        
    },
    contact:{
        type:Number,
       
        
    },
    city:{
        type:String,
        
    },
    address:{
        type:String,
       
        
    },
    school:{
        type:String,
        
    },
    yop:{
        type:String,
       
    },
    college:{
        type:String,
        
    },
    pursuingqual:{
        type:String,
        
    },
    branch:{
        type:String,
        
    },
    cpi:{
        type:String,
        
    }
});

const Student=new mongoose.model('Studentdetail',studentSchema);
module.exports=Student;