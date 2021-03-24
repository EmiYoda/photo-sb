import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/photosb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("Database connected"))
  .catch((error) => console.log(error));
