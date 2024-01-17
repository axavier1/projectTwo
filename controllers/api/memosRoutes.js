const router = require('express').Router();
const { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category, Profile } = require('../../models');
const isLogged = require('../../utils/isLogged');


router.post("/", async (req, res) => {
    try {
      const createMemos = await Memos.create({...req.body, host_id:req.session.user_id});
      console.log(createMemos);
  
      res.json(createMemos);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  module.exports = router;
  