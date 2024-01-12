const router = require("express").Router();
const { User } = require("../models");

<<<<<<< HEAD
router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
=======

router.get('/', async (req, res) => {
    res.render('homepage');
>>>>>>> main
});

router.get("/login", async (req, res) => {
    try {
      res.render("login");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/signup", async (req, res) => {
    try {
      res.render("signup");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;