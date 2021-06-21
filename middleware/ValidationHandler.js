const { validationResult } = require('express-validator');

const ValidationHandler = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const extractedErrors = {};
    // errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
    errors.array().forEach((err) => { extractedErrors[err.param] = err.msg; });

    return res.status(400).json({ errors: extractedErrors });
  } catch (err) {
    return res.status(500).json({ message: 'something went wrong!!!!' });
  }
};

module.exports = ValidationHandler;
