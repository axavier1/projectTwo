const sequelize = require('../config/connection');
const { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category, Profile, Icon } = require('../models');

const userData = require('./userData.json');
const tourData = require('./tourData.json');
const tourCategoryData = require('./tourCategory.json');
const membersData = require('./tourMembers.json');
const categoryData = require('./categoryData.json');
const memoData = require('./memoData.json');
const memCommentData = require('./memoComment.json');
const profileData = require('./profileData.json');
const iconData = require('./iconData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await Profile.bulkCreate(profileData, {
        individualHooks: true,
        returning: true
    });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });

    await Memos.bulkCreate(memoData, {
        individualHooks: true,
        returning: true
    });
    await Tour.bulkCreate(tourData, {
        individualHooks: true,
        returning: true
    });
    await Category.bulkCreate(categoryData, {
        individualHooks: true,
        returning: true
    });

    await MemosComment.bulkCreate(memCommentData, {
        individualHooks: true,
        returning: true
    });

    await TourMembers.bulkCreate(membersData, {
        individualHooks: true,
        returning: true
    });
    await TourCategory.bulkCreate(tourCategoryData, {
        individualHooks: true,
        returning: true
    });
    await Icon.bulkCreate(iconData, {
        individualHooks: true,
        returning: true
    });

    process.exit(0);
};

seedDatabase();
