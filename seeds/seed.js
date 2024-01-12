const sequelize = require('../config/connection');
const { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category } = require('../models');

const userData = require('./userData.json');
const tourData = require('./tourData.json');
const tourCategoryData = require('./tourCategory.json');
const membersData = require('./tourMembers.json');
const categoryData = require('./categoryData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Tour.bulkCreate(tourData, {
        individualHooks: true,
        returning: true,
    });
    await Category.bulkCreate(categoryData, {
        individualHooks: true,
        returning: true,
    });


    await TourMembers.bulkCreate(membersData, {
        individualHooks: true,
        returning: true,
    });
    await TourCategory.bulkCreate(tourCategoryData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();
