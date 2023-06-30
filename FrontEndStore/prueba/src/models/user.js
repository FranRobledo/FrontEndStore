const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newUserSchema = new Schema({
    usuario: {
        type: String,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    contraseña: {
        type: String,
        require: true
    },
    telefono: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    }
})

// //crear modelo
// const User = mongoose.model('Usuario', userSchema);

// module.exports = User; 

module.exports = mongoose.model('User', newUserSchema);