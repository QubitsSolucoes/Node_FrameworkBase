// dependências
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// collection
const schema = new Schema({

    nome: {
        type: String,
        required: true,
        trim: true
    },
    data_nascimento: {
        type: Date
    },
    data_cadastro: {
        type: Date
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
        trim: true
    },
    contato: {
        type: Array
    },
    endereco: {
        type: Array
    }

});

module.exports = mongoose.model('Usuarios', schema);
