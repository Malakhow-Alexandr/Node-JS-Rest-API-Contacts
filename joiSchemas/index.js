const {
  contactSchemas: { addSchema, updateFavoriteSchema },
} = require("./contactsSchema.js");
const {
  usersSchema: { registerSchema, loginSchema, subscriptionSchema },
} = require("./authSchema.js");

module.exports = {
  addSchema,
  updateFavoriteSchema,
  registerSchema,
  loginSchema,
  subscriptionSchema,
};
