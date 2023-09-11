const mongoose=require('mongoose')

const PlayerSchema= new mongoose.Schema({
    playerName:{
        type:String,
        required:[true,"This field is required"],
        minlength:[2,"Player name should contain at least 2 characters"]
    },
    prefPos:{
        type:String
    }
},{timestamps:true})

module.exports=mongoose.model('player',PlayerSchema)