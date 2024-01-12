const User = require("./User");
const Tour = require('./tour.js')
const Memos = require("./Memos");
const MemosComment = require("./MemosComment");
const TourComment = require("./TourComment");
const TourCategory = require("./TourCategory");
const TourMembers = require('./TourMembers.js');
const Category = require('./Category.js');
// User.hasMany(Tour, {
//     foreignKey: 'host_id'
// });
// Tour.belongsTo(User, {
//     foreignKey: 'host_id'
// });


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

// Tour.hasMany(TourCategory, {
//     foreignKey: 'tour_id'
// });

// TourCategory.hasMany(Tour, {
//     foreignKey: 'tour_id'
// });

// Memos.hasMany(MemosComment, {
//     foreignKey: 'memo_id'
// });




module.exports = { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category };
