const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://skshivam:wfnt8LCA4thGHcvg@cluster0.wmefo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true},{useUnifiedTopology:true}).then(()=>{
    console.log("database connection success");
    
})