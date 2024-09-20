const { Router } = require("express");
const authorRouter = Router();
const {addAuthor} = require("./controllers");
const {getAuthor} = require("./controllers")

//adds author to DB
authorRouter.post("/authors/addauthor", addAuthor);

//
authorRouter.get("/authors/getauthor", getAuthor)

module.exports = authorRouter;