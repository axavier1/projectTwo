const User = require("./User");
const Tour = require('./tour.js')
const Memos = require("./Memos");
const MemosComment = require("./MemosComment");
const TourComment = require("./TourComment.js");
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




module.exports = { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category };
