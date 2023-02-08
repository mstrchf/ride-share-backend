import "dotenv/config";
import env from "./utils/validateEnv.js";
import app from "./app.js";
import mongoose from "mongoose";

const port = env.PORT;

mongoose.set("strictQuery", false);

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Mongoose connect");

    app.listen(port, () => {
      console.log("Server running on port: " + port);
    });
  })
  .catch((error) => {
    console.error(error);
  });
