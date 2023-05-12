const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    usuario: String,
    nombre: String,
    contraseña: String,
    telefono: Number,
    email: String
})

//crear modelo
const User = mongoose.model('Usuario', userSchema);

module.exports = User; 