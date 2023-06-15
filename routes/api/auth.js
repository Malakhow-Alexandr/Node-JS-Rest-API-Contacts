const express = require("express");
const controllers = require("../../controllers/authControllers");
const router = express.Router();

const { validateBody, authenticate, upload } = require("../../middlewares");

const {
  registerSchema,
  loginSchema,
  subscriptionSchema,
  emailSchema,
} = require("../../joiSchemas");

router.post(
  "/register",
  validateBody(registerSchema),
  controllers.registerUser
);

router.get("/verify/:verificationCode", controllers.verifyEmail);

router.post(
  "/verify",
  validateBody(emailSchema),
  controllers.resendVerifyEmail
);

router.post("/login", validateBody(loginSchema), controllers.loginUser);

router.get("/current", authenticate, controllers.getCurrent);

router.post("/logout", authenticate, controllers.logout);

router.patch(
  "/subscription",
  authenticate,
  validateBody(subscriptionSchema),
  controllers.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllers.updateAvatar
);

module.exports = router;
