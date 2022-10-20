const mongoose = require("mongoose");

const sucursalEsquema  = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  codigo: {
    type: Number,
    required: true
  },
  telefono: {
    type: Number,
    required: true
  },
  direccion: {
    type: String,
    required: true

  },
  status: {
    type: String,
    required: true
  },
  created:{
    type: Date,
    required: true,
    default: Date.now()

  }
});

module.exports = mongoose.model('Sucursal', sucursalEsquema );