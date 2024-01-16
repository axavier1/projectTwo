const router = require("express").Router();
const { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category, Profile, Icon } = require("../models");
const isLogged = require('../utils/isLogged');

router.get("/", async (req, res) => {
    try {
        res.render("homepage", {
            logged_in: req.session.logged_in,
            profile_id: req.session.profile_id,
            img_src: req.session.img_src
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    try {
        res.render("login", {
            logged_in: req.session.logged_in,
            profile_id: req.session.profile_id,
            img_src: req.session.img_src
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', (req, res) => {
    try {
        res.render("signup", {
            logged_in: req.session.logged_in,
            profile_id: req.session.profile_id,
            img_src: req.session.img_src
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/dashboard', isLogged, async (req, res) => {
    try {
        // req.session.user_id = 1;
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Tour, include: { model: User, attributes: { exclude: ['password'] }, through: { attributes: [] } }, through: { attributes: [] } }]
        });

        const user = userData.get({ plain: true });
        const tourData = await Tour.findAll({
            where: { host_id: req.session.user_id },
            include: [{ model: User, attributes: { exclude: ['password'] }, through: { attributes: [] } }],
        });
        const toursArr = tourData.map(tour => tour.get({ plain: true }))
        res.render('dashboard', {
            user, toursArr,
            logged_in: req.session.logged_in,
            profile_id: req.session.profile_id,
            img_src: req.session.img_src
        })

    } catch (error) {
        res.status(500).json(error);
    }
})

// connection with profile/update endpoint
router.get('/update/profile', isLogged, async (req, res) => {
    const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Profile }]
    })

    const user = userData.get({ plain: true });
    console.log(user);
    res.render('updateProfile', {
        user,
        logged_in: req.session.logged_in,
        img_src: req.session.img_src,
        profile_id: req.session.profile_id
    });
})

router.get('/profile/:id', async (req, res) => {
    const profileData = await Profile.findByPk(req.params.id);
    const profile = profileData.get({ plain: true });
    res.render('profile', {
        profile,
        logged_in: req.session.logged_in,
        profile_id: req.session.profile_id,
        img_src: req.session.img_src
    })
});

router.get('/update/profile/ico', isLogged, async (req, res) => {
    const iconData = await Icon.findAll();
    const icons = iconData.map(icon => icon.get({ plain: true }));
    // res.json(iconData)
    res.render('icoList', {
        icons,
        logged_in: req.session.logged_in,
        profile_id: req.session.profile_id,
        img_src: req.session.img_src
    });
})

router.get("/info", async (req, res) => {
    try {
        res.render("infopage", {
            logged_in: req.session.logged_in,
            profile_id: req.session.profile_id,
            img_src: req.session.img_src
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:error', async (req, res) => {
    res.render('error')
})
module.exports = router;





