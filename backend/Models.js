const mongoose=require('mongoose')
const feedback=new mongoose.Schema({
    name:{
        type:String, 
        
    },score:{
  type:String,
    }
})
const feed=mongoose.model("final",feedback)
module.exports=feed