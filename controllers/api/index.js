const router = require('express').Router();
const tourRoutes = require('./tourRoutes');
// const productRoutes = require('./product-routes');
// const tagRoutes = require('./tag-routes');


router.use('/toures', tourRoutes);
// router.use('/products', productRoutes);
// router.use('/tags', tagRoutes);

module.exports = router;
