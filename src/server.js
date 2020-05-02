const express = require('express')

const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const authRouter = require('./routes/auth')
// const authMiddleware = require('./middlewares/auth')

const app = express() // creando la linea de produccion (servidor)

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

// middleware
// parsea cada request a json, solo en caso  de que contenga
//  el header content-type con valor "application/json"
// toma el body y lo trandorma en un json que nos lo entrega en el objeto request.body
app.use(express.json())

// middleware global (afecta a toda la aplicacion)
app.use((request, response, next) => {
  console.log(`> [${request.method}] ${request.url} body: ${JSON.stringify(request.body)}`)
  console.log('> Middleware in app')
  next()
})

// app.use(authMiddleware)

// montamps router de koders
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.use('/auth', authRouter)

module.exports = app
