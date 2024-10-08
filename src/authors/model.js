const {DataTypes} = require("sequelize");

const sequelize = require("../db/connection");

const Author = sequelize.define("author", {
        name: {
            type: DataTypes.STRING,
            unquie: true,
            allowNull: false,
            }
        },
        { timestamps: false }
        );
        
module.exports = Author;