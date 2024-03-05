
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://mabledevassy:mabledevassy@cluster0.gbmrfr9.mongodb.net/Pets?retryWrites=true&w=majority")
.then(()=>{console.log("Item connected")})
.catch(err=>console.log(err));

let it=mongoose.Schema;
const itemschema=new it(
    {

       sid:{type:mongoose.Schema.Types.ObjectId,ref:"subcats"},
        Description:String,
        Price:Number,
         image1:{
            data:Buffer,
            contentType:String,
        }
    }
);
var itemmodel=mongoose.model("item",itemschema)
module.exports=itemmodel;