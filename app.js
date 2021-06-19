// Import statements
require('dotenv').config()
const express = require('express')
const topRecentNewsRouter = require('./routes/topnews')
const searchRouter = require('./routes/search')
const metadataRouter = require('./routes/metadata')

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
// Endpoints routing
app.use('/top-recent-news', topRecentNewsRouter)
app.use('/search', searchRouter)
app.use('/metadata', metadataRouter)

// Starting the server
app.listen(process.env.PORT)
