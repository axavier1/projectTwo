const router = require('express').Router();
const { User, Tour, TourComment, Memos, MemosComment, TourCategory, TourMembers, Category, Profile } = require('../../models');


router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const userData = await User.findAll({
      include: [{
        model: Profile,

      }],
      attributes: { exclude: ['password'] }
    });
    res.json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// POST method  for http://localhost:3001/api/users/signup (adding user to db and creating seesion info)
router.post('/signup', async (req, res) => {
  try {
    const creatProfile = await Profile.create();
    console.log(creatProfile);
    const profileId = creatProfile.id
    const createUser = await User.create({
      user_name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profile_id: profileId
    });
    req.session.save(() => {
      req.session.user_id = createUser.id;
      req.session.logged_in = true;
      req.session.user_name = createUser.user_name;
      req.session.profile_id = profileId;
      req.session.img_src = creatProfile.img_src;
      res.json(createUser);
    });


  } catch (error) {
    res.status(400).json(error);
  }
})

// POST method  for http://localhost:3001/api/users/login (checking user if he is in db and creating seesion info)
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email }, include: [{ model: Profile }] });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.user_name = userData.user_name;
      req.session.profile_id = userData.profile.id;
      req.session.img_src = userData.profile.img_src;

      res.json({ user: userData, ses: req.session, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// POST method  for http://localhost:3001/api/users/logut (romove users session info from db)
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;