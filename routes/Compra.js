const express = require('express')
const router = express.Router()
const Compra = require("../models/Compra")

router.post("/criar", async(req, res)=>{
    try{
        const comprar = new Compra(req.body);
        const compras = await comprar.save();
        res.status(200).json(compras);
    }catch(err){
        res.status(500).json(err);
    }
    
});


router.get("/", async(req, res)=>{
    try {
        const Compras = await Compra.find()
        res.status(200).json(Compras);
    } catch (error) {
        return res.status(404).json(err);
    }

})
router.get("/:id", async(req, res)=>{
    try {
        const Compras = await Compra.findById(req.params.id)
        res.status(200).json(Compras);
    } catch (error) {
        return res.status(404).json(err);
    }

})
router.get("/my/:id", async(req, res)=>{
    try {
        const Compras = await Compra.find({
            iduser: req.params.id,
            estado: "pago" 
        })
        res.status(200).json(Compras);
    } catch (error) {
        return res.status(404).json(err);
    }

})
router.get("/coop/:id", async(req, res)=>{
    try {
        const Compras = await Compra.find({
            idcoop: req.params.id,
            estado: "pago" 
        })
        res.status(200).json(Compras);
    } catch (error) {
        return res.status(404).json(err);
    }

})
router.put("/:id", async(req, res)=>{
    try {
        const product = await Compra.findById(req.params.id)
        if( product.iduser ===  req.body.iduser){
            try {
                const Compras = await Compra.findByIdAndUpdate(req.params.id, {
                    estado: req.body.estado
                })
                res.status(200).json(Compras);
            } catch (error) {
                return res.status(404).json(error);
            }
        }else{
            res.status(200).json("Só podes editar seu Poduto!");
        }
    } catch (error) {
        return res.status(404).json(error);
    }

})
router.delete("/:id", async(req, res)=>{
    try {
        const product = await Compra.findById(req.params.id)
        if( product.iduser ===  req.body.iduser && product.estado === "recebido"){
            try {
                const Compras = await Compra.findByIdAndDelete(req.params.id, req.body)
                res.status(200).json("Deletado com sucesso!");
            } catch (error) {
                return res.status(404).json(error);
            }
        }else{
            if( product.iduser ===  req.body.iduser){
                res.status(200).json("Esta compra Não pode ser deletado Porque ainda não foi recebida Pelo comprador!");
            }else{
                res.status(200).json("Não é tu quem fez essa compra, não podes deleta-lo!");
            }
        }
    } catch (error) {
        return res.status(404).json(error);
    }

})

module.exports = router;