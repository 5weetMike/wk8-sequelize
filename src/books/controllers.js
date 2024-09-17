const Book = require("./model");

const addBook = async (request, response) => {
    try {
        const book = await Book.create({
            title: request.body.title,
            author: request.body.author,
            genre: request.body.genre
        }) 
        response.status(201).json({message: "success",book: book});
    } catch (error){
        response.status(500).json({message: error.message, error: error})
    }
};  


//     console.log("request.body: ", request.body.title)
// const book = await Book.create({
//    title: request.body.title,
//    author: request.body.author,
//    genre: request.body.genre,
// });
//     response.send({message: "success", book: book});
// };

module.exports ={
    addBook: addBook,

}