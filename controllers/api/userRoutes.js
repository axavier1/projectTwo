const router = require("express").Router();
const { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category } = require("../../models");


  router.post("/login", async (req, res) => {
    try {
      const loggedIn = await User.create(req.body);
      res.status(200).json(loggedIn);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  
  
  router.post("/signup", async (req, res) => {
    try {
      const newUser= await User.create(req.body);
      res.status(200).json(newUser);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  
  module.exports = router;