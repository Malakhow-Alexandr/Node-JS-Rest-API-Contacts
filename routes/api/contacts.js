const express = require("express");

const controllers = require("../../controllers/contactsControllers");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { addSchema, updateFavoriteSchema } = require("../../joiSchemas");

const router = express.Router();

router.get("/", authenticate, controllers.getContacts);

router.get("/:id", authenticate, isValidId, controllers.getContact);

router.post("/", authenticate, validateBody(addSchema), controllers.addContact);

router.delete("/:id", authenticate, isValidId, controllers.deleteContact);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(addSchema),
  controllers.updateContact
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(updateFavoriteSchema),
  controllers.updateFavorite
);

module.exports = router;
