const axios = require('axios')

const { API_BASE_URL, API_KEY } = process.env

const getTopNews = async (req, res, next) => {
  const { language = 'en', page = 1, pageSize = 10, country, category } = req.query

  const qs = {
    params: {
      language,
      page,
      pageSize,
      country,
      category
    }
  }

  // query the service
  const url = `${API_BASE_URL}top-headlines?apiKey=${API_KEY}`

  // make the request to the news api.
  try {
    const response = await axios.get(url, qs)
    const { totalResults, articles } = response.data

    return res.status(200).json({
      totalResults,
      page,
      pageSize,
      articles
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'something went wrong!' })
  }
}

module.exports = getTopNews
