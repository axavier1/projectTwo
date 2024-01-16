const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Tour extends Model { }

Tour.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    img_src: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '/assets/images/tour-img/pic2.jpeg'
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    host_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "tours",
  }
);

module.exports = Tour;
