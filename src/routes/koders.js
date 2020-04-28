const express = require('express')
const koders = require('../useCases/koders')
const router = express.Router()

// GET /koders/
router.get('/', async (req, res) => {
  const allKoders = await koders.getAll()
  res.json({
    message: 'All koders',
    data: {
      koders: allKoders
    }
  })
})

router.post('/', async (req, res) => {
  const koderCreated = await koders.create(req.body)
  res.json({
    message: 'Koder Created',
    data: {
      koder: koderCreated
    }
  })
})

module.exports = router
