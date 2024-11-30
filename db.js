const {Schema, default: mongoose}=require("mongoose");
// const { object, number } = require("zod");
// console.log("Connected with MongoDb");
// mongoose.connect("mongodb+srv://kamal123:Kamal%40123@cluster0.az4bo.mongodb.net/course-selling-webModel")
const ObjectId=mongoose.ObjectId;
const userSchema =new Schema({
    //_id : ObjectId,
    email :{type: String, unique:true},
    password : String, 
    firstName : String,
    lastName : String


})
const adminSchema =new Schema({
    //_id : ObjectId,
    email :{type: String, unique:true},
    password : String, 
    firstName : String,
    lastName : String
})

const courseSchema = new Schema({
    //_id : ObjectId,
    title : String,
    description : String,
    price : Number, 
    imageUrl : String,
    creatorid : ObjectId

})

const purchaseSchema = new Schema({
    // _id : ObjectId,
    courseId : ObjectId,
    userId : ObjectId
})

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports = {
    userModel : userModel,
    adminModel : adminModel,
    courseModel : courseModel,
    purchaseModel : purchaseModel
}
 