import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true

        },
        author:{
            type: String,
            required: true
        },
        publishYear:{
            type: Number,
            required: true
        },
        pages:{
            type: Number,
            required: true
        },
    },
    {
        timeStamps:true
    }
)
// Create schema for user data

export const Book = mongoose.model("Cat", bookSchema);
