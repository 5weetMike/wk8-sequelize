const { Router } = require("express");
const bookRouter = Router();
const {addBook} = require("./controllers");
const {getAllBooks} = require("./controllers");
const {getByTitle} = require("./controllers");
// const {deleteBookByTitle} = require("./controllers");
const {bookByAuthor} = require("./controllers");

bookRouter.post("/books/addbook", addBook);

bookRouter.get("/books/getallbooks", getAllBooks);

bookRouter.put("/books/getByTitle", getByTitle);

// bookRouter.delete("/books/deletebookbytitle", deleteBookByTitle);

bookRouter.get("/books/getbyauthor/:author", bookByAuthor);

module.exports = bookRouter;