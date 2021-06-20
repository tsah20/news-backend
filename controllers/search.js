var request = require('request');

const getSearchUrl = (language, page, pageSize, filters) => {
  // construct basic query url
  let queryUrl = `${process.env.API_BASE_URL}everything?language=${language}&page=${page}&pageSize=${pageSize}`;

  // add filters as GEt parameters to the query
  for (var f in filters) {
    if (filters[f] != undefined) {
      queryUrl = `${queryUrl}&${f}=${filters[f]}`;
    }
  }

  // add api key to the query url
  queryUrl = `${queryUrl}&apiKey=${process.env.API_KEY}`;

  return queryUrl;
};

exports.searchNews = (req, res, next) => {
  //language
  let language = req.body.language ? req.body.language : 'en';

  //page
  let page = req.body.page ? req.body.page : 1;
  page = parseInt(page);

  //page size
  let pageSize = req.body.pageSize ? req.body.pageSize : 10;
  pageSize = parseInt(pageSize);

  // contructing the filters
  const filters = {
    q: req.body.keyword
  };

  // query the service
  const queryUrl = getSearchUrl(language, page, pageSize, filters);

  //make the request to the news api.
  request(queryUrl, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(`Request to ${queryUrl} Successful!`);
      body = JSON.parse(body);
      data = {
        totalResults: body['totalResults'],
        page: page,
        pageSize: pageSize,
        articles: body['articles']
      };
      res.status(200).json(data);
    } else {
      console.log(`Request to ${queryUrl} failed!`);
      res.status(response.statusCode);
    }
  });
};
