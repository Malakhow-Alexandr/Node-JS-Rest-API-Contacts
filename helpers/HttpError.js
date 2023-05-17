class HttpError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

const throwNotFoundError = (result) => {
  if (!result) {
    throw new HttpError(404, "Not Found");
  }
};

module.exports = {
  HttpError,
  throwNotFoundError,
};
