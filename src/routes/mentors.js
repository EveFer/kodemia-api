const express = require('express')
const mentors = require('../useCases/mentors')
const errHandling = require('../lib/errorHandling')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const allMentors = await mentors.getAll()
    res.json({
      success: true,
      message: 'All Mentors',
      data: {
        mentors: allMentors
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: errHandling.errorsHandling(error)
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const mentor = await mentors.getById(id)
    res.json({
      success: true,
      message: 'Get a Mentor',
      data: {
        mentor: mentor
      }
    })
  } catch (error) {
    const errors = { errors: { id_uri: { message: error.message } } }
    res.status(400)
    res.json({
      success: false,
      error: errHandling.errorsHandling(errors)
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const mentorCreated = await mentors.create(req.body)
    res.json({
      message: 'Mentor Created',
      data: {
        mentor: mentorCreated
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      error: errHandling.errorsHandling(error)
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const mentorDeleted = await mentors.deleteById(id)
    res.json({
      success: true,
      message: `Mentor with id ${id} deleted`,
      data: {
        mentor: mentorDeleted
      }
    })
  } catch (error) {
    const errors = { errors: { id_uri: { message: error.message } } }
    res.status(400)
    res.json({
      success: false,
      error: errHandling.errorsHandling(errors)
    })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const mentorUpdated = await mentors.updateById(id, req.body)
    res.json({
      success: true,
      message: `Mentor with id ${id} updated`,
      data: {
        mentor: mentorUpdated
      }
    })
  } catch (error) {
    const errors = { errors: { id_uri: { message: error.message } } }
    res.status(400)
    res.json({
      success: false,
      error: errHandling.errorsHandling(errors)
    })
  }
})

module.exports = router
