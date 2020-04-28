const Koder = require('../models/koders')

// Casos de uso: son las acciones que puede ejercer un usuario en el sistema

async function getAll () {
  // esto no seberia hacer
//   let todos = null
//   Koder.find()
//     .then(koders => {
//       todos = koders
//     })
//     .catch()
//   return todos
  const allKoders = await Koder.find({})
  return allKoders
}

async function create (koderData) {
  const koderCreated = await Koder.create(koderData)
  return koderCreated
}

// async function create(koderData) {
//     const newKoder = new Koder(koderData)
//     const koderCreated = await newKoder.save()
//     return koderCreated
// }

module.exports = {
  getAll,
  create
}

// en la ruta
// const koders = require('...koders')
// koders.getAll()
