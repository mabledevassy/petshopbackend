const mongoose=require("mongoose") 
mongoose.connect("mongodb+srv://mabledevassy:mabledevassy@cluster0.gbmrfr9.mongodb.net/?retryWrites=true&w=majority") 
.then(()=>{console.log("DB Connected")}) 
.catch(err=>console.log(err)); 
const logschema=new mongoose.Schema({ 
    username:String, 
    password:String, 
  } 
  ); 
    var data2model=mongoose.model("Log",logschema) 
    module.exports=data2model