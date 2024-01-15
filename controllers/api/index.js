const router = require('express').Router();
const tourRoutes = require('./tourRoutes');
const userRoutes = require('./userRoutes');
// const productRoutes = require('./product-routes');
// const tagRoutes = require('./tag-routes');

router.use('/user', userRoutes);
router.use('/tour', tourRoutes);

// router.use('/products', productRoutes);
// router.use('/tags', tagRoutes);

module.exports = router;
