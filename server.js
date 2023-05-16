const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Alexandr:i6vTKCTWQACdl6Y9@cluster0.dxj720r.mongodb.net/contacts_manager?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    proccess.exit(1);
  });
