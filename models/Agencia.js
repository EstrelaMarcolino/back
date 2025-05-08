const mongoose = require('mongoose');

const AgenciaSchema = new mongoose.Schema({
    nome: {
        type: String,
    },
    cnpj: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        unique: false,
    },
    senha: {
        type: String,
    },
    profilePic: {
        type: String,
    },
    ende_bairro: {
        type: String,
        default: ""
    },
    ende_cidade: {
        type: String,
        default: ""
    },
    ende_estado: {
        type: String,
        default: ""
    },
    ende_rua: {
        type: String,
        default: ""
    },
    ende_numero_casa: {
        type: String,
        default: ""
    },
    cep: {
        type: String,
        default: ""
    },
    logo: {
        type: String,
        default: "uploads/ag.png"
    },
    banner: {
        type: String,
        default: "uploads/ag.png"
    },
    whatsapp: {
        type: String,
        default: "",
    },
    slogan: {
        type: String,
        default: null,
    },
    hora_abrir: {
        type: String,
        default: null,
    },
    hora_feichar: {
        type: String,
        default: null,
    },
    gerente_name: {
        type: String,
        default: null,
    },
    razao_social: {
        type: String,
        default: null,
    },
    link_sit: {
        type: String,
        default: null,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("Agencia", AgenciaSchema);