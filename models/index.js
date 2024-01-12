const User = require("./User");
const Tour = require('./tour.js')
const Memos = require("./Memos");
const MemosComment = require("./MemosComment");
const TourComment = require("./TourComment");
const TourCategory = require("./TourCategory.js");
const TourMembers = require('./TourMembers.js');
const Category = require('./Category.js');


User.belongsToMany(Tour, {
    through: 'tour_members'
});

Tour.belongsToMany(User, {
    through: 'tour_members'
});

Category.belongsToMany(Tour, {
    through: 'tour_categories'
});

Tour.belongsToMany(Category, {
    through: 'tour_categories'
});

User.hasMany(Memos, {
    foreignKey: 'user_id'
});

Memos.belongsTo(User, {
    foreignKey: 'user_id'
});

Memos.hasMany(MemosComment, {
    foreignKey: 'memo_id'
});

MemosComment.belongsTo(Memos, {
    foreignKey: 'memo_id'
});

Tour.hasMany(TourComment, {
    foreignKey: 'tour_id'
});

TourComment.belongsTo(Tour, {
    foreignKey: 'tour_id'
})



module.exports = { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category };
