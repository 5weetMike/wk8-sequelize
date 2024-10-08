const Author = require("./model");

const Book = require("../books/model")


//add books to the database
const addAuthor = async (request, response) => {
            try {
            const author = await Author.create({name: request.body.name}); 
                response.status(201).json({message: "success", name: author});
            } catch (error){
                response.status(500).json({message: error.message, error: error});
            }};  

const getAuthor = async (request, response) => {
    try {
        const author = await Author.findOne({where:{name: request.params.name}, include: [{model:Book}]});
        response.status(201).json({message: "success", author: author});
    } catch (error){
        response.status(500).json({message: error.message, error: error});
    }};



module.exports ={
addAuthor: addAuthor,
getAuthor: getAuthor,
}
