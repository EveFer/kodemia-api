const express = require('express')
const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const app = express()

// todos los recursos se escriben en plural
// async -> a una funcion
// app.get('/koders', async (req, res) => {
//   const allKoders = await koders.getAll()
//   res.json({
//     message: 'All koders',
//     data: {
//       koders: allKoders
//     }
//   })
// })

// mismo recurso
// router '/koders'
// GET '/koders'
// POST '/koders'
// PATCH '/koders/:id'
// DELETE '/koders/:id'

// router se puede montar en la ruta que quiera
// router se montara -> /koders
// GET /

app.use(express.json())
// montamps router de koders
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)

module.exports = app
