const Author = require("./model");


//add books to the database
const addAuthor = async (request, response) => {
            try {
            const author = await Author.create({name: request.body.name}); 
                response.status(201).json({message: "success", name: author});
            } catch (error){
                response.status(500).json({message: error.message, error: error});
            }};  


module.exports ={
addAuthor: addAuthor,
}
