const express = require('express')
const router = express.Router()
const User = require("../models/Usuario")
const bcrypt = require("bcrypt")

router.post("/criar", async(req, res)=>{
    try{
        //usando bcrypt para incriptar a senha
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const nerUser = new User({
            username: req.body.username,
            email: Date.now(),
            cpf: req.body.cpf,
            password: hashedPass,
        });

        const user = await nerUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
    
});

router.post("/login", async(req, res)=>{
    try{
        const user = await User.findOne({ username: req.body.username});
        !user && res.status(400).json("credencial errada");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("credencial errada");

        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        return res.status(404).json(err);
        
    }
    
});

router.get("/", async(req, res)=>{
    try {
        const users = await User.find()
        res.status(200).json(users);
    } catch (error) {
        return res.status(404).json(err);
    }

})
router.get("/:id", async(req, res)=>{
    try {
        const users = await User.findById(req.params.id)
        res.status(200).json(users);
    } catch (error) {
        return res.status(404).json(err);
    }

})
router.put("/:id", async(req, res)=>{
    try {
        const users = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true});
        res.status(200).json(users);
    } catch (error) {
        return res.status(404).json(err);
    }

})

module.exports = router;