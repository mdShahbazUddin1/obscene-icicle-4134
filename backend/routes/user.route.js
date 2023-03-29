const { UserModel } = require("../models/user");
const express = require("express");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const userRouter = express.Router()


userRouter.post("/register", async (req, res) => {
    const {firstname,lastname,email,password} =  req.body
    try {
        const isEmail = await UserModel.findOne({ email });
        if (isEmail) {
          res.status(400).send({ msg: "User already registered" });
        }
        const hashed = await bcrypt.hash(password, 5);
        const user = new UserModel({
          firstname,
          lastname,
          email,
          password: hashed,
        });
        await user.save(); 
        res.status(200).send({ msg: "User refistered successfully" });
    } catch (error) {
        res.status(400).send(error)
    }
  
});


userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;

    try {
       const user = await UserModel.findOne({email}) 
       if (user) {
         bcrypt.compare(password, user.password, (err, result) => {
           if (result) {
             res.status(200).send({
               msg: "login successful",
               token: jwt.sign({ userID: user._id }, "superman", {
                 expiresIn: "1h",
               }),
             });
           } else {
             res.status(400).send({ msg: "wrong credential" });
           }
         });
       } else {
         res.status(400).send({ err: "user not found" });
       }
    } catch (error) {
        res.status(400).send({ msg: "Something went wrong" });
    }
})

    module.exports = {
      userRouter,
    };