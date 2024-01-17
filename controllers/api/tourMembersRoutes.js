const router = require('express').Router();
const { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category, Profile } = require('../../models');
const isLogged = require('../../utils/isLogged');


router.post("/", async (req, res) => {
    try {
        const createMember = await TourMembers.create({
            user_id: req.session.user_id,
            tour_id: req.body.id
        });
        console.log(createMember);
        res.json(createMember);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

module.exports = router;
