const { query } = require('express-validator');

module.exports = {
  ValidationRule: [
    query('page').optional().isInt()
      .withMessage('page has to be a number'),
    query('pageSize').optional().isInt()
      .withMessage('pageSize has to be a number'),
  ],
};
