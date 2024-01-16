const router = require("express").Router();
const {
  User,
  Tour,
  TourComment,
  Memos,
  MemosComment,
  TourCategory,
  TourMembers,
  Category,
  Profile,
  Icon,
} = require("../models");
const { findAll } = require("../models/User");
const isLogged = require("../utils/isLogged");

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    req.session.user_id = 1;
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Tour,
          include: {
            model: User,
            attributes: { exclude: ["password"] },
            through: { attributes: [] },
          },
          through: { attributes: [] },
        },
      ],
    });

    const user = userData.get({ plain: true });
    const tourData = await Tour.findAll({
      where: { host_id: req.session.user_id },
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
          through: { attributes: [] },
        },
      ],
    });
    const toursArr = tourData.map((tour) => tour.get({ plain: true }));
    req.session.save(() => {
      req.session.user_id = 1;
      req.session.logged_in = true;
      req.session.profile_id = user.profile_id;
      res.render("dashboard", {
        user,
        toursArr,
        logged_in: req.session.logged_in,
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// connection with profile/update endpoint
router.get("/update/profile", isLogged, async (req, res) => {
  const userData = await User.findByPk(req.session.user_id, {
    attributes: { exclude: ["password"] },
    include: [{ model: Profile }],
  });

  const user = userData.get({ plain: true });
  console.log(user);
  res.render("updateProfile", {
    user,
    logged_in: req.session.logged_in,
    u_id: req.session.user_id,
  });
});

router.get("/profile/:id", async (req, res) => {
  res.render("profile");
});

router.get("/update/profile/ico", async (req, res) => {
  const iconData = await Icon.findAll();
  const icons = iconData.map((icon) => icon.get({ plain: true }));
  console.log(icons);
  const profileID = req.session.profile_id;
  console.log(profileID);
  // res.json(iconData)
  res.render("icoList", {
    icons,
    profileID,
  });
});

router.get("/info", async (req, res) => {
  try {
    res.render("infopage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/tours", async (req, res) => {
  const tourData = await Tour.findAll();
  const tours = tourData.map((tour) => tour.get({ plain: true }));
  const memosData = await Memos.findAll();
  const memos = memosData.map((memo) => memo.get({ plain: true }));

  try {
    res.render("tours", {
      tours,
      memos,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
