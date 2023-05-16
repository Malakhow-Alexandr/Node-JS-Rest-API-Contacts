const express = require("express");

const controllers = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const { addSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", controllers.getAll);

router.get("/:id", controllers.getOneContact);

router.post("/", validateBody(addSchema), controllers.addContact);

router.delete("/:id", controllers.deleteContact);

router.put("/:id", validateBody(addSchema), controllers.updateContact);

module.exports = router;
