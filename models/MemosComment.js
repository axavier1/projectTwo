const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MemosComment extends Model { }

MemosComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    memo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "memos",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "memo_comments",
  }
);

module.exports = MemosComment;
