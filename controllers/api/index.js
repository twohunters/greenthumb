const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gardenRoutes = require('./gardenRoutes');
const plantRoutes = require('./plantRoutes');
const plantTagRoutes = require('./plantTagRoutes')

router.use('/users', userRoutes);
router.use('/gardens', gardenRoutes);
router.use('/plants', plantRoutes);
router.use('/planttags', plantTagRoutes);

module.exports = router;