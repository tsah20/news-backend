const request = require('supertest');
require('dotenv').config();
const express = require('express');
const topNewsRoute = require('../routes/topnews');

// Express application
const app = express();

// Enabling json support and encoding the url.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/top-recent-news', topNewsRoute);

describe('Top News API Route Test Suite', () => {
  const req = jest.fn();

  beforeAll(() => {
    jest.spyOn(global.console, 'error').mockImplementation(() => {});

    req.query = {
      language: 'en',
      page: '1',
      pageSize: '10',
      country: 'us',
      category: 'technology',
    };
  });

  afterAll(() => {
    global.console.error.mockRestore();
  });

  test('Check Integrated Response Structure', async () => {
    const { body, status } = await request(app)
      .get('/top-recent-news')
      .query(req.query)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);

    expect(status).toBe(200);
    expect(body).toEqual({
      totalResults: expect.any(Number),
      page: expect.any(String),
      pageSize: expect.any(String),
      articles: expect.any(Array),
    });
  });

  test('Data length 0 on Invalid Country test', async () => {
    const { body, status } = await request(app)
      .get('/top-recent-news')
      .query({
        ...req.query,
        country: 'random',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);
    expect(status).toBe(200);
    expect(body.articles.length).toEqual(0);
  });

  test('Data length 0 on Invalid Category test', async () => {
    const { body, status } = await request(app)
      .get('/top-recent-news')
      .query({
        ...req.query,
        category: 'random',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);
    expect(status).toBe(200);
    expect(body.articles.length).toEqual(0);
  });

  test('status code 400 on Invalid page', async () => {
    const { status } = await request(app)
      .get('/top-recent-news')
      .query({
        ...req.query,
        page: 'random',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);
    expect(status).toBe(400);
  });

  test('status code 400 on Invalid pageSize', async () => {
    const { status } = await request(app)
      .get('/top-recent-news')
      .query({
        ...req.query,
        pageSize: 'random',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);
    expect(status).toBe(400);
  });
});
