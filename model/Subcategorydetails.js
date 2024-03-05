const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://mabledevassy:mabledevassy@cluster0.gbmrfr9.mongodb.net/Pets?retryWrites=true&w=majority")
.then(()=>{console.log("Subca connected")})
.catch(err=>console.log(err));

let sa=mongoose.Schema;
const subcateschema=new sa(
    {
        cid:{type:mongoose.Schema.Types.ObjectId,ref:"cats"},
        Sname:String,
        
    }
);
var subcatemodel=mongoose.model("subcat",subcateschema)
module.exports=subcatemodel;