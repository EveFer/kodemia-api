const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true
  },
  generation: {
    type: Number,
    required: true,
    min: 1
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// module.export -> para decir lo que queremon que el script exporte
// solo se puede exportar una sola cosa

module.exports = mongoose.model('Koders', koderSchema)
