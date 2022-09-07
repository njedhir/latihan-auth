require('dotenv').config()

const express = require('express')
const PORT = process.env.PORT

// MODELS
const db = require('./models')
db.seq.sync({force: true}).then(() => {
  console.log('Database synchronized')
}).catch(err => console.log(err.message))

const app = express()

// PLUGINS
app.use(express.json())
  .use(express.urlencoded({ extended: false }))

// ROUTE
require('./routes/auth.routes')(app)

// Start App
app.listen(PORT)
console.log('App running on port', PORT)
