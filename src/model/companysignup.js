const mongoose= require("mongoose");

const companySchema=mongoose.Schema({
    uname:{
        type:String,
        required:true,
        minlength:6
    },
    password:{
        type:String,
        required:true,
        minlength:6
        
    },
    establisedyear:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    cin:{
        type:String,
        required:true,
    },
    cname:{
        type:String,
        required:true,
    }
});

const Company=new mongoose.model('companydetail',companySchema);
module.exports=Company;