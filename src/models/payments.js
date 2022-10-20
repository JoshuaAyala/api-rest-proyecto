const mongoose = require("mongoose");

const payEsquema  = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  codigo: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Pago', payEsquema );