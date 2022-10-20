const mongoose = require("mongoose");

const userSchema  = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  contraseña: {
    type: String,
    required: true
  },
  rol: [{
    type: String,
    required: true

  }],
  sucursal: {
    type: String,
    required: true

  },
  created: {
    type: Date,
    timestamp: true,
    required: true,
    default: Date.now()
  }
});

module.exports = mongoose.model('User', userSchema );