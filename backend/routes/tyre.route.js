const express = require("express")
const {tyreModel} = require("../models/tyre.model");
const tyreRoute = express.Router();



tyreRoute.get("/",async(req,res)=>{
    try {
        const tyre = await tyreModel.find();
        res.status(200).send(tyre)
    } catch (error) {
        res.status(400).send({msg:"something went wrong"});
    }
})
tyreRoute.post("/add",async(req,res)=>{
    try {
        const tyre = new tyreModel(req.body);
        await tyre.save()
        res.status(200).send({msg:"added"})
    } catch (error) {
        res.status(400).send({msg:"something went wrong"});
    }
})


module.exports = {
    tyreRoute
}