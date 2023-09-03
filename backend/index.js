import express from "express";
import { PORT, mondoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());

// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: "GET,PUT,POST,DELETE",
//     allowedHeaders:['Content-Type'],
// }));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello World!");
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
