const router = require('express').Router();
const { Garden } = require('../../models');
const withAuth = require('../../utils/auth');

// create a garden
router.post('/', withAuth, async (req, res) => {
    try {
        const dbGardenData = await Garden.create({
            user_id: req.body.user_id,
            garden_name: req.body.garden_name,
        },
        {
            where: {
                garden_id: req.params.garden_id
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get a garden
router.get('/:id', withAuth, async (req, res) => {
    try {
        const dbGardenData = await Garden.findOne({
            where: {
                garden_id: req.body.garden_id
            }
        });

        if (!dbGardenData) {
            res
                .status(400)
                .json({ message: 'Cannot find this garden' });
            return;
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// delete a garden
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const dbGardenData = await Garden.destroy({
            where: {
                id: req.params.id,
                garden_name: req.session.garden_name,
            },
        });

        if (!dbGardenData) {
            res.status(404).json({ message: 'Cannot find this garden' });
            return;
        }

        res.status(200).json(dbGardenData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;