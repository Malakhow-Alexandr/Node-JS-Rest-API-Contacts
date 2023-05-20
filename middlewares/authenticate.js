const { HttpError } = require("../helpers");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;
const { User } = require("../services/userModelService");

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    return next(new HttpError(401, "Unauthorized"));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      return next(new HttpError(401, "Unauthorized"));
    }
    req.user = user;
    next();
  } catch (error) {
    return next(new HttpError(401, error.message));
  }
};

module.exports = authenticate;
