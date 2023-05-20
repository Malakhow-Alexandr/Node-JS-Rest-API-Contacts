const express = require("express");
const controllers = require("../../controllers/authControllers");
const router = express.Router();

const { validateBody, authenticate } = require("../../middlewares");
const { registerSchema, loginSchema } = require("../../joiSchemas");

router.post(
  "/register",
  validateBody(registerSchema),
  controllers.registerUser
);

router.post("/login", validateBody(loginSchema), controllers.loginUser);

router.get("/current", authenticate, controllers.getCurrent);

router.post("/logout", authenticate, controllers.logout);

module.exports = router;
