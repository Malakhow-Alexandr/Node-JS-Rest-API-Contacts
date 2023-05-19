const {
  contactSchemas: { addSchema, updateFavoriteSchema },
} = require("./contactsSchema.js");
const {
  usersSchema: { registerSchema, loginSchema },
} = require("./authSchema.js");

module.exports = {
  addSchema,
  updateFavoriteSchema,
  registerSchema,
  loginSchema,
};
