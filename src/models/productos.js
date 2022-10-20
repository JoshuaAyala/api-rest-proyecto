const mongoose = require("mongoose");

const productoEsquema  = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  sku: {
    type: Number,
    required: true
  },
  stock: {
    type: Boolean,
    required: true
  },
  sucursal: {
    type: String,
    required: true

  },
  precio: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Producto', productoEsquema );