var request = require('request')

const getTopNewsUrl = (language, page, pageSize, filters) => {
  // construct basic query url
  let queryUrl = `${process.env.API_BASE_URL}top-headlines?language=${language}&page=${page}&pageSize=${pageSize}`

  // add filters as GEt parameters to the query
  for (var f in filters) {
    if (filters[f] != undefined) {
      queryUrl = `${queryUrl}&${f}=${filters[f]}`
    }
  }

  // add api key to the query url
  queryUrl = `${queryUrl}&apiKey=${process.env.API_KEY}`

  return queryUrl
}

exports.getTopNews = (req, res, next) => {
  //language
  let language = req.body.language ? req.body.language : 'en'

  //page
  let page = req.body.page ? req.body.page : 1
  page = parseInt(page)

  //page size
  let pageSize = req.body.pageSize ? req.body.pageSize : 10
  pageSize = parseInt(pageSize)

  // contructing the filters
  const filters = {
    country: req.body.category,
    category: req.body.country,
    source: req.body.source
  }

  // query the service
  const queryUrl = getTopNewsUrl(language, page, pageSize, filters)

  request(queryUrl, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(`Request to ${queryUrl} Successful!`)
      body = JSON.parse(body)
      data = {
        totalResults: body['totalResults'],
        page: page,
        pageSize: pageSize,
        articles: body['articles']
      }
      res.status(200).json(data)
    } else {
      console.log(`Request to ${queryUrl} failed!`)
      res.status(response.statusCode)
    }
  })
}
