const mongoose =require ("mongoose")
const detailsSchema = new mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:String
    }
})
const Details = mongoose.model("work",detailsSchema)
module.exports = Details