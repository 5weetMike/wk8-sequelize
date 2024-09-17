const { Router } = require("express");
const bookRouter = Router();

const {addBook} = require("./controllers");
const {getAllBooks} = require("./controllers");
const {getByTitle} = require("./controllers");
const {deleteBookByTitle} = require("./controllers");
const {bookByTitle} = require("./controllers")

bookRouter.post("/books/addbook", addBook);


module.exports = bookRouter;