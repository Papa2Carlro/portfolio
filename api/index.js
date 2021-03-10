const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

// Url
const api = require('./src/routes/api')

// Create express instance
const app = express()

app.use(require('cors')())
app.use(require('morgan')('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Connect MongoDB
require('./helpers/dbconnect.js')()

// Routes
app.use('/api', api)
app.use('/uploads', express.static(path.resolve(process.cwd() + '/uploads')))

// Start standalone server if directly running+
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

// Export express app
module.exports = app
