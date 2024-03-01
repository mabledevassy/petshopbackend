const mongoose=require("mongoose") 
mongoose.connect("mongodb+srv://mabledevassy:mabledevassy@cluster0.gbmrfr9.mongodb.net/Pets?retryWrites=true&w=majority") 
.then(()=>{console.log("DB Connected")}) 
.catch(err=>console.log(err)); 
const orderschema=new mongoose.Schema({ 
    Fname:String,
    Address:String,
    City:String,
    State:String,
    Zipcode:Number,
    Contactno:Number,
    image1:{
        data:Buffer,
        contentType:String,
    }
  } 
  ); 
    var ordermodel=mongoose.model("order",orderschema) 
    module.exports=ordermodel