const Koder = require('../models/koders')

// Casos de uso: son las acciones que puede ejercer un usuario en el sistema

// async function getAll () {

// esto no seberia hacer
//   let todos = null
//   Koder.find()
//     .then(koders => {
//       todos = koders
//     })
//     .catch()
//   return todos

//   const allKoders = await Koder.find({})
//   return allKoders
// }

// async function getAll () {
//   const allKoders = await Koder.find({})
//   return allKoders
// }

function getAll () {
  return Koder.find({})
}

// async function create (koderData) {
//   const koderCreated = await Koder.create(koderData)
//   return koderCreated
// }

function create (koderData) {
  return Koder.create(koderData)
}

// async function create(koderData) {
//     const newKoder = new Koder(koderData)
//     const koderCreated = await newKoder.save()
//     return koderCreated
// }

function deleteById (id) {
  return Koder.findByIdAndRemove(id)
}

function updateById (id, newKoderData) {
  return Koder.findByIdAndUpdate(id, newKoderData, { new: true })
}

function getById (id) {
  return Koder.findById(id)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
  getById
}

// en la ruta
// const koders = require('...koders')
// koders.getAll()
