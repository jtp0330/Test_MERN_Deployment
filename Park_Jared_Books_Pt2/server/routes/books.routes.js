import{
    createBook,
    getBook,
    getAllBooks,
    updateBook,
    deleteBook,
} from '../controllers/books.controller.js';

import {Router} from 'express';

const router = Router()

router.route('/books')
    .get(getAllBooks)
    .post(createBook);

router.route('/books/:id')
    .get(getBook)
    .put(updateBook)
    .delete(deleteBook);

export default router;