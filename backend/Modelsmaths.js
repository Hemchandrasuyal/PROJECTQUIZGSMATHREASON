const mongoose=require('mongoose')
const feedback=new mongoose.Schema({
    namem:{
        type:String, 
        
    },scorem:{
  type:String,
    }
})
const feed=mongoose.model("finalmaths",feedback)
module.exports=feed