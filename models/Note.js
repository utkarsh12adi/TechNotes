const mongoose=require('mongoose')
const AutoIncrement= require('mongoose-sequence')(mongoose)

const noteSchema=new mongoose.Schema({
   
    user:{
        type:mongoose.Schema.Types.onbjectId,
        required:true,
        ref:'User'
    },
    title:{
        type:String,
        required:true
    },
    completed:{
        type:String,
        default:"Employee"
    }
},
{
    timestamps:true
}
)
  
noteSchema.plugin(AutoIncrement,{
    inc_field:'ticlet',
    id:'ticketNums',
    start_seq:500
})
module.exports=mongoose.model('Note',noteSchema)