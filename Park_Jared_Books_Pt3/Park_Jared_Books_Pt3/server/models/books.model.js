import {model, Schema} from 'mongoose'

//define Book Schema
const BookSchema = new Schema(
    {
        title:{
            type: String,
            required: [true, "Title is required!"],
            minlength: [2, "Title must be at least 2 characters!"],
            maxlength: [255, "title must be at most 255 characters!"]
        },
        author:{
            type: String,
            required: [true, "Book must have an author!"],
            minlength: [5, "Author name must be at least 5 characters!"],
            maxlength: [255, "Author name must be at most 255 characters!"]
        },
        pages:{
            type: Number,
            required: [true, "Number of Pages must be specified!"],
            minlength: [1, "Each book must have at least 1 page!"]
        },
        isAvailable:{
            type:Boolean,
            default:false
        }
    },
    {timestamps: true}
);

//initalize schema and make accessible
const Book = model("Book", BookSchema);
export default Book;