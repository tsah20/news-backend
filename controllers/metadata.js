exports.getCountries = (req, res, next) => {
    // return all countries from the mongoDB
    let countries = [];

    res.status(200).json({'countries': countries});
}

exports.getCategories = (req, res, next) => {
    // return all categories from the mongoDB
    let categories = [];

    res.status(200).json({'categories': categories});
}

exports.getSources = (req, res, next) => {
    // return all sources from the mongoDB
    let sources = [];

    res.status(200).json({'sources': sources});
}