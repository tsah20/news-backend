require('dotenv').config()
const request = require('supertest')
const express = require('express')
const searchRoute = require('../routes/search')

// Express application
const app = express()

// Enabling json support and encoding the url.
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use('/search', searchRoute)

describe('Search Endpoint Route Test Suite', () => {
  const req = jest.fn()

  beforeAll(() => {
    jest.spyOn(global.console, 'error').mockImplementation(() => {})

    req.query = {
      q: ''
    }
  })

  afterAll(() => {
    global.console.error.mockRestore()
  })

  test('Search Query can be empty', async () => {
    const { status } = await request(app).get('/search').query(req.query).set('Accept', 'application/json').expect('Content-Type', /json/)

    expect(status).toBe(200)
  })
})
