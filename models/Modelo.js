const mongoose = require('mongoose');

const ModeloSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    preco: String,
    email: {
        type: String,
        unique: false,
    },
    altura: String,
    nome_completo: String,
    cor_pele: String,
    cor_cabelo: String,
    cor_olhos: String,
    tipo_cabelo: String,
    tipo_corpo: String,
    peso: String,
    sexo: String,
    genero: String,
    orientacao_sexual: String,
    profilePic: String,
    banner: String,
    whatsapp: String,
    album_id: String,
    agencia_id: String,
    agencia_name: String,
    categoria: String,
},
    { timestamps: true }
);

module.exports = mongoose.model("Modelo", ModeloSchema);