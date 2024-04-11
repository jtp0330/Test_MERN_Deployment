import Book from '../models/books.model.js'

async function createBook(req,resp){
    try{
        const newBook = await Book.create(req.body);
        return resp.status(201).json(newBook);
    }catch(error){
        console.log(error);
        resp.status(400).json(error);
    }
};

async function getBook(req,resp){
    try{
        const aBook = await Book.findById(req.params.id);
        return resp.status(200).json(aBook);
    }catch(error){
        console.log(error);
        resp.status(400).json(error);
    }
};

async function getAllBooks(req,resp){
    try{
        const allBook = await Book.find();
        return resp.status(200).json(allBook);
    }catch(error){
        console.log(error);
        resp.status(400).json(error);
    }
};

async function updateBook(req,resp){
    const options = {
        new: true,
        runValidators: true,
    };
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body,options);
        resp.status(200).json(updatedBook);
    }catch(error){
        console.log(error);
        resp.status(400).json(error);
    }
};

async function deleteBook(req,resp){
    try{
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        return resp.status(204).send();
    }catch(error){
        console.log(error);
        resp.status(400).json(error);
    }
};

export{
    createBook,
    getBook,
    getAllBooks,
    updateBook,
    deleteBook,
};