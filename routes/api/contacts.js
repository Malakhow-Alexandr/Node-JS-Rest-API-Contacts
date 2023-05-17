const express = require("express");

const controllers = require("../../controllers/contactsControllers");
const { validateBody, isValidId } = require("../../middlewares");
const {
  joiSchemas: { addSchema, updateFavoriteSchema },
} = require("../../services/contactService");

const router = express.Router();

router.get("/", controllers.getAll);

router.get("/:id", isValidId, controllers.getOneContact);

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
