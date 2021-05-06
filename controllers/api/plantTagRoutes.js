const router = require('express').Router();
const { PlantTag} = require('../../models');
// const withAuth = require('../../utils/auth');


//get all plant tags /api/plants/
router.get('/', async (req, res) => {
try{
    const plantTagData = await PlantTag.findAll();
    res.status(200).json(plantTagData);

} catch (err) {
    res.status(400).json(err);
}
});

// get a plant tag by id  /api/plantTags/:id
router.get('/:id',  async (req, res) => {
    try {
        const plantTagtData = await PlantTag.findByPk(req.params.id);
       
        if (!plantTagtData) {
            res.status(400).json({ message: 'Cannot find this plant' });
            
        }
        res.status(200).json(plantTagtData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Create a new plant tag  /api/plantTags/
router.post('/', async (req, res) => {
    try {
        const plantTagData = await PlantTag.create(req.body)
        res.status(200).json(plantTagData)
    } catch (err) {
        res.status(400).json(err);
    }
});

//edit plant tags /api/plantTags/:id
router.put('/:id', async (req, res) =>{
    try{
        const plantTagData = await PlantTag.update({
            plant_id: req.body.plant_id,
            garden_id: req.body.garden_id
        },
        {
            where: {
                id:req.params.id
            }
        });
        if (!plantTagData){
            res.status(400).json({ message: "There is no plant tag with this ID"})
        }
        res.status(200).json(plantTagData)
    }catch (err) {
        res.status(400).json(err);
    }
})

//delete plantTag  /api/plants/:id
router.delete('/:id',  async (req, res) => {
    try {
        const plantTagData = await PlantTag.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!plantTagData) {
            res.status(400).json({ message: 'There is no plant found with this ID' })
        }
        res.json(plantTagData);
    }catch (err) {
        res.status(400).json(err);
    }
});
module.exports = router;