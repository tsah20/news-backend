exports.getCountries = (req, res, next) => {
  // return all countries from the mongoDB
  let countries = { UAE: 'ae', Australia: 'au', USA: 'us', India: 'in', China: 'cn' }

  res.status(200).json({ countries: countries })
}

exports.getCategories = (req, res, next) => {
  // return all categories from the mongoDB
  let categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

  res.status(200).json({ categories: categories })
}
