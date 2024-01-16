const router = require('express').Router();
const { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category, Profile } = require('../../models');


router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const userData = await User.findAll({
      include: [{
        model: Profile,

      }],
      attributes: { exclude: ['password'] }
    });
    res.json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});



module.exports = router;