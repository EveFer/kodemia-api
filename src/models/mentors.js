const mongoose = require('mongoose')

const mentorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['alpha', 'betha'],
    required: true
  },
  module: {
    type: String,
    required: true
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

module.exports = mongoose.model('Mentors', mentorsSchema)
