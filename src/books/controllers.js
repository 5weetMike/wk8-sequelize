const Book = require("./model");


//add books to the database
const addBook = async (request, response) => {
            try {
            const book = await Book.create({
                title: request.body.title,
                author: request.body.author,
                genre: request.body.genre
            }) 
                response.status(201).json({message: "success",book: book});
            } catch (error){
                response.status(500).json({message: error.message, error: error});
            }};  

            //get all books
const getAllBooks = async (request, response) => {
            try {
                const getAllBooks = await Book.findAll({});
                response.status(201).json({message: "success", books: getAllBooks});
            } catch (error){
                response.status(500).json({message: error.message, error: error});
            }};
//update author by title
 const getByTitle = async  (request, response) => {
        try {
            const updateBook = await Book.update({author: request.body.author},
            {where: {title: request.body.title}});
            response.status(201).json({message: "author updated", author: updateBook})
        }catch (error){
            response.status(500).json({message: error.message, error: error})
            }};
//delete by title
const deleteBookByTitle = async (request, response) => {
        try{
            const deleteBook = await Book.destroy({where: {title: request.body.title}});
            response.status(201).json({message: "Book deleted", deleteBook: deleteBook});
        } catch (error){
            response.status (500).json ({message: error.message, error: error})
            }};


//find book by author
const bookByAuthor = async (request, response) => {
            try {
                const bookAuthor = await Book.findOne({where: {author: request.params.author}});
                response.status(200).json({message: "Found book!", bookAuthor: bookAuthor});
            } catch (error){
                response.status(500).json({message: error.message, error: error});
                }};

module.exports ={
    addBook: addBook,
    getAllBooks: getAllBooks,
    getByTitle: getByTitle,
    deleteBookByTitle: deleteBookByTitle,
    bookByAuthor: bookByAuthor

}