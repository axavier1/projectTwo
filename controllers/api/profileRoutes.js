const router = require('express').Router();
const { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category, Profile } = require('../../models');
const isLogged = require('../../utils/isLogged');

router.put('/:id', isLogged, async (req, res) => {
    try {
        console.log(req.body);
        const updateProfile = await Profile.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (!updateProfile) {
            res.status(404).json({
                message: `No tag found with this id!`
            });
            return;
        }

        res.json(updateProfile);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;