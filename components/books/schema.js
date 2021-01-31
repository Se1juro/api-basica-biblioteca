const mongoose = require("mongoose");
const {Schema} = mongoose;

const BooksSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        description:{
            type:String,
            required:true
        }
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("books", BooksSchema);
