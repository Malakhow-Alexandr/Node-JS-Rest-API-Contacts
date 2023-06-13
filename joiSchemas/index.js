const {
  contactSchemas: { addSchema, updateFavoriteSchema },
} = require("./contactsSchema.js");
const {
  usersSchema: { registerSchema, loginSchema, subscriptionSchema, emailSchema },
} = require("./authSchema.js");

module.exports = {
  addSchema,
  updateFavoriteSchema,
  registerSchema,
  loginSchema,
  subscriptionSchema,
  emailSchema,
};
