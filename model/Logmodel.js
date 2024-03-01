const mongoose=require("mongoose") 
mongoose.connect("mongodb+srv://mabledevassy:mabledevassy@cluster0.gbmrfr9.mongodb.net/Pets?retryWrites=true&w=majority") 
.then(()=>{console.log("DB Connected")}) 
.catch(err=>console.log(err)); 
const logischema=new mongoose.Schema({ 
    Name:String, 
    Password:String, 
  } 
  ); 
    var data3model=mongoose.model("signups",logischema) 
    module.exports=data3model