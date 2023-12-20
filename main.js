const express = require('express')
const cors = require('cors')
const compression = require('compression')
const router = require('./router')

async function main () {
  const app = express()
  const port = 3000

  // apply middleware
  app.use(
    cors({
      origin: ['*'],
      credentials: true
    })
  )
  app.use(express.json())
  app.use(express.text())
  app.use(express.urlencoded({ extended: true }))
  app.use(compression())

  // add routes
  app.use(router)

  app.listen(port, function () {
    console.log(`Listening on ${port}`)
  })
}

main()
