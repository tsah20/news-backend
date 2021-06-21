const topNewController = require('../controllers/topnews');

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Check Top News Controller', () => {
  let req = jest.fn();
  let next = jest.fn();
  let res = mockResponse();

  beforeAll(() => {
    jest.spyOn(global.console, 'error').mockImplementation(() => {});
  });

  beforeEach(() => {
    req = jest.fn();
    next = jest.fn();
    res = mockResponse();
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

  test('Status code 200 on correct request', async () => {
    await topNewController(req, res, next);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('Status code 200 on empty Query Parameters', async () => {
    req.query = {};
    await topNewController(req, res, next);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
