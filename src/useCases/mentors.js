const Mentor = require('../models/mentors')

async function getAll () {
  const allMentors = await Mentor.find({})
  return allMentors
}

async function create (mentorData) {
  const mentorCreated = await Mentor.create(mentorData)
  return mentorCreated
}

module.exports = {
  getAll,
  create
}
