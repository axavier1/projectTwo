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

router.delete('/:id', isLogged, async (req, res) => {
    try {
        const memberData = await TourMembers.destroy({
            where: {
                user_id: req.session.user_id,
                tour_id: req.params.id
            },
        });

        if (!memberData) {
            res.status(404).json({ message: 'No data found with this id!' });
            return;
        }

        res.status(200).json(memberData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
