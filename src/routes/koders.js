const express = require('express')
const koders = require('../useCases/koders')
const errHandling = require('../lib/errorHandling')
const router = express.Router()

// GET /koders/
router.get('/', async (req, res) => {
  try {
    const allKoders = await koders.getAll()
    res.json({
      message: 'All koders',
      data: {
        koders: allKoders
      }
    })
  } catch (error) {
    res.json({
      success: false,
      error: errHandling.errorsHandling(error)
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const koder = await koders.getById(id)
    res.json({
      success: true,
      message: 'Get a Koder',
      data: {
        koder
      }
    })
  } catch (error) {
    const errors = { errors: { id_uri: { message: error.message } } }
    console.log(errors)
    res.status(400)
    res.json({
      success: false,
      error: errHandling.errorsHandling(errors)
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const koderCreated = await koders.create(req.body)
    res.json({
      success: true,
      message: 'Koder Created',
      data: {
        koder: koderCreated
      }
    })
  } catch (error) {
    // console.log(error)
    res.status(400)
    res.json({
      success: false,
      error: error.errors,
      errorsArray: errHandling.errorsHandling(error)
    })
  }
})

// trow para lanzar errores
// stack trace
// error handling

// try-catch
// try {
// intento
// } catch (error) {

// }

// DELETE /koders/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const koderDeleted = await koders.deleteById(id)
    res.status()
    res.json({
      success: true,
      message: `Koder with id ${id} Deleted`,
      data: {
        koder: koderDeleted
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
// PATCH /koders/:id
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const koderUpdated = await koders.updateById(id, req.body)
    res.json({
      success: true,
      message: `Koder with id ${id} updated`,
      data: {
        koder: koderUpdated
      }
    })
  } catch (error) {
    const errors = { errors: { id_uri: { message: error.message } } }
    res.status(400)
    res.json({
      success: false,
      errors: errHandling.errorsHandling(errors)
    })
  }
})

module.exports = router
