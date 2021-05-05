const router = require('express').Router();
const { Plant } = require('../../models');
// const withAuth = require('../../utils/auth');


//get all plants /api/plants/
router.get('/', async (req, res) => {
try{
    const plantData = await Plant.findAll();
    res.status(200).json(plantData);

} catch (err) {
    res.status(400).json(err);
}
});



// get a plant by id  /api/plants/:id
router.get('/:id',  async (req, res) => {
    try {
        const dbPlantData = await Plant.findByPk(req.params.id);
       
        if (!dbPlantData) {
            res.status(400).json({ message: 'Cannot find this plant' });
            
        }
        res.status(200).json(dbPlantData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
//Create a new plant  /api/plants/
router.post('/', async (req, res) => {
    try {
        const plantData = await Plant.create(req.body)
        res.status(200).json(plantData)
    } catch (err) {
        res.status(400).json(err);
    }
});
//edit plant /api/plants/:id
router.put('/:id', async (req, res) => {
    try {
        const plantData = await Plant.update({
            name: req.body.name,
            description: req.body.description,
            plant_habit: req.body.plant_habit,
            life_cyle: req.body.life_cycle,
            sun_req: req.body.sun_req,
            water_req: req.body.water_req,
            uses: req.body.uses,
            edible_parts: req.body.edible_parts,
            time_to_fruit: req.body.time_to_fruit      
        },
            {
                where: {
                    id: req.params.id
                }
            });
        if (!plantData) {
            res.status(400).json({ message: 'There is no plant found with this ID' })
        }
        res.status(200).json(plantData);
    } catch (err) {
        res.status(400).json(err);
    }
});
//delete plant /api/plants/:id
router.delete('/:id',  async (req, res) => {
    try {
        const plantData = await Plant.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!plantData) {
            res.status(400).json({ message: 'There is no plant found with this ID' })
        }
        res.json(plantData);
    }catch (err) {
        res.status(400).json(err);
    }
});
module.exports = router;