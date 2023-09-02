import express from "express";
import { PORT, mondoDBURL } from "./config.js";
import mongoose from "mongoose";




const app = express();
app.get('/', (req, res) => {
res.send('Hello World!');
});

mongoose.connect(mondoDBURL)
.then(() => {
console.log('Connected to MongoDB');
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`);
});
})
.catch((error)=>{
console.log('Error connecting to MongoDB');
})
