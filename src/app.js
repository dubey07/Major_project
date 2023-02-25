const bcryptjs=require("bcryptjs");
const express = require("express");

const db=require("./db/conn");
const Company=require("./model/companysignup");

const Student=require("./model/student");
const bodyParser=require("body-parser");

const app=express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const port= process.env.PORT || 3000;



app.post("/student",async(req,res)=>{

    const name=req.body.name
    const username=req.body.uname
    const email=req.body.email
    const password=req.body.psw
    const confirmpassword=req.body.cpsw
    const male=req.body.male
    const female=req.body.female
    const contact=req.body.contact
    const address=req.body.address
    const school=req.body.school
    const college=req.body.college
    const yop=req.body.yop
    const subject=req.body.subject
    const branch=req.body.branch
    const pursuing=req.body.pursuing
    const cpi=req.body.cpi
    const city=req.body.city
    const dob=req.body.dob

    
  if(password!=confirmpassword){
      res.send("invalid input!!  password not matching");
  }
   

    const user=new Student();
    user.name=name
    user.uname=username
    user.contact=contact
    user.address=address
    user.gender="male"
    user.dob=dob
    user.city=city
    user.school=school
    user.yop=yop
    user.college=college
    user.pursuingqual=pursuing
    user.branch=branch
    user.cpi=cpi
    user.subject=subject
    user.email=email

    

    const salt = await bcryptjs.genSalt(10);

    user.password=await bcryptjs.hash(password,salt);

    await user.save().then(()=>{
        res.send("inserted succsfully")
        res.status(200);
    }).catch((e)=>{
        console.log(e);
        res.status(404)
        res.send(__dirname+"/error.html");
    });


    
})

app.post("/company/signup/postrequest" ,async (req,res)=>{
    const companyname=req.body.cname
    const est=req.body.eyear
    const type=req.body.type
    const cin=req.body.cin
    const uname=req.body.uname
    const password=req.body.pass

    const companysignup = new Company();
    companysignup.cname=companyname
    companysignup.establisedyear=est
    companysignup.type=type
    companysignup.cin=cin
    companysignup.uname=uname

    const salt = await bcryptjs.genSalt(10);

    companysignup.password=await bcryptjs.hash(password,salt);
    
    
    await companysignup.save().then(()=>{
        res.send("inserted succsfully")
        res.status(200);
    }).catch((e)=>{
        console.log(e);
        res.status(404)
        res.send("something went wrong");
    });


    

})

app.post("/companylogin", async(req,res)=>{
    const username=req.body.username
    const password=req.body.password

    const useremail=await Student.findOne({username:username});
    if(useremail.password===password){
        res.status(201).render("success company login");
    }else{
        res.send(401).send("invalid username or password")
    }
})


app.post("/studentlogin", async(req,res)=>{
    const username=req.body.username
    const password=req.body.password

    const useremail=await Student.collection("studentdetail").findOne({username:username});
   if(!bcryptjs.compare(password, useremail.password)){
       console.log("false")
   }else{
       console.log("true")
   }
})



app.get("/",   (req,res)=>{
    res.sendFile(__dirname +"/signups.html");
    
});

app.get("/company/signup", (req,res)=>{
    res.sendFile(__dirname+"/company_signup.html");
})
app.get("/company/signin", (req,res)=>{
    res.sendFile(__dirname+"/company_login.html");
})

app.get("/student/login", (req,res)=>{
    res.sendFile(__dirname+"/login.html");
})



app.listen(port, ()=>{
    console.log(`connection is success at ${port}`);
})

