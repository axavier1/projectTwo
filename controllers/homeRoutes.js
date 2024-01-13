const router = require('express').Router();
const { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category } = require('../models');

router.get('/', async (req, res) => {
    res.render('homepage');
});


// router.get('/dashboard', async (req, res) => {
//     res.render('dashboard');
// })


router.get('/dashboard/', async (req, res) => {
    try {
        req.session.user_id = 1;
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Tour, include: { model: User, through: { attributes: [] } }, through: { attributes: [] } }]
        });

        const user = userData.get({ plain: true });
        console.log(user);
        console.log(user.tours[0].users);

        req.session.save(() => {
            req.session.user_id = 1;
            req.session.logged_in = true;

            res.render('dashboard', {
                user,
                logged_in: req.session.logged_in
            })
        })
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;