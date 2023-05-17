const { HttpError } = require("./HttpError");

const handleMongooseError = (error, data, next) => {
  if (error) {
    next(new HttpError(400, error.message));
  }
  next();
};

module.exports = handleMongooseError;
