const express = require('express')
const router = express.Router()
const Card = require("../models/Cartao")
const bcrypt = require("bcrypt")
const _ = require("underscore")

router.post("/", async(req, res)=>{
    try{
        //usando bcrypt para incriptar a senha
        const Newcard = new Card(req.body);
        const resCard = await Newcard.save();
        res.status(200).json(resCard);
    }catch(err){
        res.status(500).json(err);
    }
    
});

router.get("/", async(req, res)=>{
    try {
        const users = await Card.find()
        let data = _.shuffle(users);
        res.status(200).json(data);
    } catch (error) {
        return res.status(404).json(err);
    }

})
router.get("/:id", async(req, res)=>{
    try {
        const users = await Card.find({coopid:req.params.id})
        res.status(200).json(users);
    } catch (error) {
        return res.status(404).json(err);
    }
})
router.put("/:id", async(req, res)=>{
    try {
        const Cards = await Card.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true});
        res.status(200).json(Cards);
    } catch (error) {
        return res.status(404).json(error);
    }

})

module.exports = router;