var request = require('request');

const getTopNewsUrl = (language, page, pageSize, filters) => {
    const queryUrl = `${process.env.API_BASE_URL}top-headlines?language=${language}&page=${page}&pageSize=${pageSize}&apiKey=${process.env.API_KEY}`;
    return queryUrl;
}

exports.getTopNews = (req, res, next) => {
    //language
    let language = req.body.language ? req.body.language : 'en';

    //page
    let page = req.body.page ? req.body.page : 1;
    page = parseInt(page);

    //page size
    let pageSize = req.body.pageSize ? req.body.pageSize : 10;
    pageSize = parseInt(pageSize);
    
    // query the service
    const queryUrl = getTopNewsUrl(language, page, pageSize);

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(`Request to ${queryUrl} Successful!`);
            body = JSON.parse(body);
            data = {
                'totalResults': body['totalResults'], 
                'page': page, 
                'pageSize':pageSize, 
                'articles': body['articles']
            }
            res.status(200).json(data);
        }
        else {
            console.log(`Request to ${queryUrl} failed!`);
            res.status(response.statusCode);
        }
    });    
}

exports.getCategoryTopNews = (req, res, next) => {
    const category = req.body.category;

    //language
    let language = req.body.language ? req.body.language : 'en';

    //page number
    let page = req.body.page ? req.body.page : 1;
    page = parseInt(page);

    //page size
    let pageSize = req.body.pageSize ? req.body.pageSize : 10;
    pageSize = parseInt(pageSize);

    // query the service
    let articles = []

    res.status(200).json({'articles': []});
}

exports.getCountryTopNews = (req, res, next) => {
    const country = req.body.country;
    
    //language
    let language = req.body.language ? req.body.language : 'en';
    
    //page number
    let page = req.body.page ? req.body.page : 1;
    page = parseInt(page);

    //page size
    let pageSize = req.body.pageSize ? req.body.pageSize : 10;
    pageSize = parseInt(pageSize);

    // query the service
    let articles = []
    

    res.status(200).json({'articles': articles});
}

exports.getSourceTopNews = (req, res, next) => {
    const source = req.body.source;

    //language
    let language = req.body.language ? req.body.language : 'en';
    
    //page number
    let page = req.body.page ? req.body.page : 1;
    page = parseInt(page);

    //page size
    let pageSize = req.body.pageSize ? req.body.pageSize : 10;
    pageSize = parseInt(pageSize);

    // query the service
    let articles = []

    res.status(200).json({'articles': articles});
}
