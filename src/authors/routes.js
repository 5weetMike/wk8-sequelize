const { Router } = require("express");
const authorRouter = Router();
const {addAuthor} = require("./controllers");

//adds author to DB
authorRouter.post("/authors/addauthor", addAuthor);

module.exports = authorRouter;