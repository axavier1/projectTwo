const router = require('express').Router();
const { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category, Profile } = require('../../models');
const isLogged = require('../../utils/isLogged');

router.put('/:id', isLogged, async (req, res) => {
    try {
        // console.log(req.body);
        const updateProfile = await Profile.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        const updateUser = await User.update(req.body, {
            where: {
                profile_id: req.params.id
            }
        });
        if (!updateProfile || !updateUser) {
            res.status(404).json({
                message: `No tag found with this id!`
            });
            return;
        }
        req.session.save(() => {
            req.session.img_src = req.body.img_src;
            res.json(updateProfile);
        })
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;