const router = require('express').Router();
const { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category } = require('../../models');


router.get('/', async (req, res) => {
    // find all products
    // be sure to include its associated Category and Tag data
    try {
        const productData = await Tour.findAll({
            include: [{
                model: User,
                attributes: { exclude: ['password'] }, through: { attributes: [] }
            }, {
                model: Category,
                through: { attributes: [] }
            }
            ]
        });
        res.json(productData);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;