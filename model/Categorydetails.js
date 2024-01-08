const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://mabledevassy:mabledevassy@cluster0.gbmrfr9.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let ca=mongoose.Schema;
const cateschema=new ca(
    {
        Cname:String,
        Status:String
    }
);
var catemodel=mongoose.model("cat",cateschema)
module.exports=catemodel;