const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Profile extends Model { }

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        profile_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        fav_place: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        tips: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        story: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "profiles",
    }
);

module.exports = Profile;
