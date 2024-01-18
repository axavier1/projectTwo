const router = require('express').Router();
const tourRoutes = require('./tourRoutes');
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');
const memosRoutes = require('./memosRoutes');
const tourMembers = require('./tourMembersRoutes');

router.use('/tours', tourRoutes);
router.use('/users', userRoutes);
router.use('/profiles', profileRoutes);
router.use('/memos', memosRoutes);
router.use('/members', tourMembers)
module.exports = router;
