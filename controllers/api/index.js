const router = require('express').Router();
const tourRoutes = require('./tourRoutes');
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');


router.use('/toures', tourRoutes);
router.use('/users', userRoutes);
router.use('/profiles', profileRoutes);

module.exports = router;
