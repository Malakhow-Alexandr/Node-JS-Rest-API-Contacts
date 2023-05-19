const express = require("express");

const controllers = require("../../controllers/contactsControllers");
const { validateBody, isValidId } = require("../../middlewares");
const { addSchema, updateFavoriteSchema } = require("../../joiSchemas");

const router = express.Router();

router.get("/", controllers.getContacts);

router.get("/:id", isValidId, controllers.getContact);

router.post("/", validateBody(addSchema), controllers.addContact);

router.delete("/:id", isValidId, controllers.deleteContact);

router.put(
  "/:id",
  isValidId,
  validateBody(addSchema),
  controllers.updateContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  controllers.updateFavorite
);

module.exports = router;
