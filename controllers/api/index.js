const router = require('express').Router();
const tourRoutes = require('./tourRoutes');
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');
const memosRoutes = require('./memosRoutes');


router.use('/tours', tourRoutes);
router.use('/users', userRoutes);
router.use('/profiles', profileRoutes);
router.use('/memos',memosRoutes);

module.exports = router;
