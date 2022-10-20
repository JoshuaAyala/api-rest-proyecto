const mongoose = require("mongoose");

const ventasEsquema  = mongoose.Schema({
  productos: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true
  },
  sucursal: {
    type: String,
    required: true
  },
  usuario: {
    type: String,
    required: true

  },
  payment: {
    type: String,
    required: true

  }
});

module.exports = mongoose.model('Ventas', ventasEsquema );