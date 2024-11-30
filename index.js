require('dotenv').config()
console.log(process.env.MONGO_URL);
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken")
//const jwt = require("jsonwebtoken");
//const jwt_sec = "hiiIamKamal"
const mongoose = require("mongoose");
const {userRouter}= require("./Routes/user");
const {courseRouter}=require("./Routes/course");
const {adminRouter}=require("./Routes/admin");

const {userModel, adminModel ,courseModel, purchaseModel}= require("./db");
app.use(express.json())
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(params) {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(3000);
  console.log("Listening on port 3000 ")
}

main()