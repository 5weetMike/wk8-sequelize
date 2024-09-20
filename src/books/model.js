const {DataTypes} = require("sequelize");

const sequelize = require("../db/connection");

const Book = sequelize.define("book", {
         id: {
            type: DataTypes.INTEGER,  
            primaryKey: true
            },
    
        title: {
            type: DataTypes.STRING,
            unquie: true,
            allowNull: false,
            },
        author_name: {
            type: DataTypes.STRING,
            defaultValue: "written by some author",
        },
        genre_name: {
            type: DataTypes.STRING, 
            defaultValue: "some genre",
        }
    },
{ timestamps: false }
);

module.exports = Book;