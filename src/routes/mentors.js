const express = require('express')
const mentors = require('../useCases/mentors')

const router = express.Router()

router.get('/', async (req, res) => {
  const allMentors = await mentors.getAll()
  res.json({
    message: 'All Mentors',
    data: {
      mentors: allMentors
    }
  })
})

router.post('/', async (req, res) => {
  const mentorCreated = await mentors.create(req.body)
  res.json({
    message: 'Mentor Created',
    data: {
      mentor: mentorCreated
    }
  })
})

module.exports = router
