const Pic = require("./models/Pic")

exports.create = async (req, res) =>{
    try {
        const {name} = req.body;
        const file = req.file;

        const picture = new Pic({
            name,
            src: file.path,
        })

        await picture.save();


        res.json({picture, smg: "Salva com sucesso!"})
    } catch (error) {
        res.json({message: "Erro ao salvar a Imagem!"})
    }
}