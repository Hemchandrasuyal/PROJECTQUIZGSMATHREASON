const mongoose=require('mongoose')
const feedback=new mongoose.Schema({
    namer:{
        type:String, 
        
    },scorer:{
  type:String,
    }
})
const feed=mongoose.model("finalreason",feedback)
module.exports=feed