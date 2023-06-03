const { default: mongoose, Schema } = require("mongoose");



const testSchema =new Schema({
    name:{type:String},
    age:{type:Number,default:0}
})

const testModel =mongoose.model('TestModal',testSchema);

module.exports=testModel;