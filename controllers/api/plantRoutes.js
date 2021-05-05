const router = require('express').Router();
const { Plant } = require('../../models');

// get a plant
router.get('/plants/:id', withAuth, async (req, res) => {
    try {
        const dbPlantData = await Plant.findOne({
            where: {
                name: req.body.name
            },
        });

        if (!dbPlantData) {
            res
                .status(400)
                .json({ message: 'Cannot find this plant' });
            return;
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;