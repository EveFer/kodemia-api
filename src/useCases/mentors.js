const Mentor = require('../models/mentors')

function getAll () {
  return Mentor.find({}) // Devuelve una promesa, se recibe con async y await
}

function create (mentorData) {
  return Mentor.create(mentorData)
}

function getById (id) {
  return Mentor.findById(id)
}

function deleteById (id) {
  return Mentor.findByIdAndRemove(id)
}

function updateById (id, newMentorData) {
  return Mentor.findByIdAndUpdate(id, newMentorData, { new: true })
}

module.exports = {
  getAll,
  create,
  getById,
  deleteById,
  updateById
}
