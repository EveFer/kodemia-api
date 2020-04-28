const server = require('./src/server')
const db = require('./src/lib/db')

async function main () {
  await db.connect()
  console.log('-DB Connected-')
  server.listen(8082, () => {
    console.log('Server is Running')
  })
}

main()
  .then(() => {
    console.log('Server Ready')
  })
  .catch(error => console.error('Error: ', error))
