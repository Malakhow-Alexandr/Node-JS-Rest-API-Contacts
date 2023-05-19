const express = require("express");
const controllers = require("../../controllers/authControllers");
const router = express.Router();

const { validateBody } = require("../../middlewares");
const { registerSchema, loginSchema } = require("../../joiSchemas");

router.post(
  "/register",
  validateBody(registerSchema),
  controllers.registerUser
);

router.post("/login", validateBody(loginSchema), controllers.loginUser);

module.exports = router;
