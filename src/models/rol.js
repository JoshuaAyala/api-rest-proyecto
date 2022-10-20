const mongoose = require("mongoose");

const rolEsquema  = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  codigo: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Rol', rolEsquema );