# news-backend

first steps:

```
npm install
npm start
```

How to run test cases and print test coverage:

```
npm test
npm run coverage
```

Endpoints:

```
/search - to search the news. http://localhost:5000/search?page=1&pageSize=5&language=en&q=politics

/top-recent-news - to get the top recent news in general, for a specific country, for a specific category.
http://localhost:5000/top-recent-news?pageSize=5&language=en&page=3&country=us&category=technology

/metadata/countries: to get the countries data for dropdown. http://localhost:5000/metadata/countries

/metadata/categories: to get the categories data for dropdown. http://localhost:5000/metadata/categories
```
