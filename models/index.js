const User = require("./User");
const Tour = require("./tour");
const Memos = require("./Memos");
const MemosComment = require("./MemosComment");
const TourComment = require("./TourComment");
const TourCategory = require("./TourCategory");

User.hasMany(Tour,{
    foreignKey: 'user_id'
});
Tour.belongsTo(User,{
    foreignKey: 'user_id'
});
Memos.hasMany(MemosComment,{
    foreignKey: 'memo_id'
});




module.exports = { User, Tour, TourComment, Memos, MemosComment };
