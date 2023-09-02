import express from "express";
import { PORT, mondoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoutes.js"

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(2222).send("Hello World!");
});
app.use('/books',booksRoute);

// Route for saving a new Book

// MongoDB connection
mongoose
  .connect(mondoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB");
  });
