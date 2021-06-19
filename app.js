// Import statements
require('dotenv').config()
const express = require('express')

// Express application
const app = express()

// Enabling json support and encoding the url.
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

// Starting the server
app.listen(process.env.PORT)
