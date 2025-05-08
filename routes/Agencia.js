const express = require('express')
const router = express.Router()
// const Coop = require("../models/Cooperativa")
const Agencia = require("../models/Agencia")
const bcrypt = require("bcrypt")
const _ = require("underscore")

router.post("/criar", async(req, res)=>{
    try{
        //usando bcrypt para incriptar a senha
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.senha, salt)
        const nerUser = new Agencia({
            nome: req.body.nome,
            cnpj: req.body.cnpj,
            senha: hashedPass,
        });

        const user = await nerUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
    
});

router.post("/login", async(req, res)=>{
    try{
        const user = await Agencia.findOne({ nome: req.body.nome});
        !user && res.status(400).json("credencial errada");

        const validated = await bcrypt.compare(req.body.senha, user.senha);
        !validated && res.status(400).json("credencial errada");

        const {senha, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        return res.status(404).json(err);
        
    }
    
});

router.get("/", async(req, res)=>{
    try {
        const users = await Agencia.find()
        let data = _.shuffle(users);
        res.status(200).json(data);
    } catch (error) {
        return res.status(404).json(err);
    }

})
router.get("/:id", async(req, res)=>{
    try {
        const users = await Agencia.findById(req.params.id)
        res.status(200).json(users);
    } catch (error) {
        return res.status(404).json(err);
    }

})
router.put("/:id", async(req, res)=>{
    try {
        const coops = await Agencia.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true});
        res.status(200).json(coops);
    } catch (error) {
        return res.status(404).json(err);
    }

})

module.exports = router;