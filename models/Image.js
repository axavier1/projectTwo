const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Image extends Model { }

Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        img_src: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tour_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "tours",
                key: "id"
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "images",
    }
);

module.exports = Image;
