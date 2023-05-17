const app = require("./app");
const { DB_HOST } = process.env;
const mongoose = require("mongoose");

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
  })
  .then(() => {
    app.listen(3030, () => {
      console.log("Server running. Use our API on port: 3030");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
