const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://mabledevassy:mabledevassy@cluster0.gbmrfr9.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let sa=mongoose.Schema;
const subcateschema=new sa(
    {
        Sname:String,
        Category:String
    }
);
var subcatemodel=mongoose.model("subcat",subcateschema)
module.exports=subcatemodel;