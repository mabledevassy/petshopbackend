const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://mabledevassy:mabledevassy@cluster0.gbmrfr9.mongodb.net/Pets?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let log=mongoose.Schema;
const loginschema=new log(
    {
    Name:String,
    Email:String,
    Password:String,
    Confirmpassword:String
    
    }
);
var signupmodel=mongoose.model("signup",loginschema)
module.exports=signupmodel;