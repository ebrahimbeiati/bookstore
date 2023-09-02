import express from "express";
import { PORT, mondoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(2222).send("Hello World!");
});

// Route for saving a new Book
app.post("/books", async (request, response) => {
  try {
 if (!request.body.title || !request.body.author || !request.body.publishYear) {
   return response.status(400).send({
     message: "Please provide all required fields:title,author,publishYear",
   });
 }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };
    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message,
    });
  }
});
//Route for All Books
app.get("/books", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
        count:books.length,
        data: books

    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message});
    }
});
  // get book by id
  app.get("/books/:id", async (request, response) => {
    try {
        const{id}= request.params;
      const book = await Book.findById(id);
      return response.status(200).json(
        book
      );
    } catch (error) {
      console.log(error.message);
      response.status(500).send({
        message: error.message,
      });
    }
  });
    // update book by id
    app.put("/books/:id", async (request, response) => {
        
      try {
        if(
          !request.body.title ||
          !request.body.author ||
          !request.body.publishYear
        ){
          return response.status(400).send({
            message: "Please provide all required fields:title,author,publishYear",
          });
        }
        
        const{id}= request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);
        if(!result){
          return response.status(404).send({
            message: "Book not found"});
        }
      } catch (error) {
        console.log(error.message);
        response.status(500).send({
          message: error.message,
        });
      }
    })

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
