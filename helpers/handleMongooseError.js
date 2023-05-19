const { HttpError } = require("./HttpError");

const handleMongooseError = (error, data, next) => {
  if (error.name === "MongoServerError" && error.code === 11000) {
    return next(new HttpError(409, error.message));
  }
  if (error.name !== "MongoServerError" && error.code !== 11000) {
    return next(new HttpError(400, error.message));
  }

  next();
};

module.exports = handleMongooseError;
