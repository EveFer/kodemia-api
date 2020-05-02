const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt')

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

// 1. validar si ya existe el koder
// 2. crear el hash encriptado del password
// 3. creamos el koder en la bd
async function signup (newKoderData) {
  const { email, password } = newKoderData
  if (!email) throw new Error('Email is required')
  if (!password) throw new Error('Password is required')

  const koderAlreadyExists = await Koder.findOne({ email }) // regresa un objeto

  if (koderAlreadyExists) throw new Error('Email is already registered')
  if (password.length < 6) throw new Error('Password must be 6 letter minium')

  const hash = await bcrypt.hash(password, 10)

  // se redefine el password por el hash
  return Koder.create({ ...newKoderData, password: hash })
}

async function login (email, password) {
  const koder = await Koder.findOne({ email })
  if (!koder) throw new Error('Invalid credentials')
  const isPasswordCorrect = await bcrypt.compare(password, koder.password)
  if (!isPasswordCorrect) throw new Error('Invalid Credentials')

  return jwt.sign({ id: koder._id }) // retorna un token
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
  getById,
  signup,
  login
}

// en la ruta
// const koders = require('...koders')
// koders.getAll()
