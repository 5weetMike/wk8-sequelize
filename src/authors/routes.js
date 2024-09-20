const { Router } = require("express");
const authorRouter = Router();
const {addAuthor} = require("./controllers");
const {getAuthor} = require("./controllers")

//adds author to DB
authorRouter.post("/authors/addauthor", addAuthor);

//get all books by getting author
authorRouter.get("/authors/getauthor/:name", getAuthor)

module.exports = authorRouter;