/*const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  usuario: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  contraseña: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  telefono: {
    type: Number,
    required: true,
    unique: true
  }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;*/

const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: String, 
  name: String,
  passwordHash: String,
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'Note'
  }]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => { 
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v

      delete returnedObject.passwordHash
  }
})

const User = module('User', userSchema);

module.exports = User;