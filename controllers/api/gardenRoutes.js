const router = require('express').Router();
const { Garden, Plant, User } = require('../../models');
const withAuth = require('../../utils/auth');

//get all gardens  /api/gardens/
router.get('/', async (req, res) => {
    try {
        const gardenData = await Garden.findAll();
        res.status(200).json(gardenData)
    } catch (err) {
        res.status(400).json(err);
    }res.render('createGarden');
});

// get a garden /api/gardens/:id
router.get('/:id', async (req, res) => {
    try {
        const dbGardenData = await Garden.findByPk(req.params.id)
        if (!dbGardenData) {
            res.status(400).json({ message: 'Cannot find this garden' });
        }
        res.status(200).json(dbGardenData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// post a garden
router.post('/', async (req, res) => {
    
    try {
        // if(req.session){
            const gardenData = await Garden.create({
                garden_name: req.body.garden_name,
                // user_id: req.session.user_id,
                plant_id: req.body.plant_id
            });
            res.status(200).json(gardenData)
        }
    //} 
     catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
//edit a garden
router.put('/:id', async (req, res) =>{
    try{
        const gardenData = await Garden.update({
            garden_name:req.body.garden_name,
            plant_id: req.body.plant_id
        },
        {
            where:{
                id: req.params.id
            }
        });
        if(!gardenData){
            res.status(400).json({ message: 'There is no garden found with this ID' })
        }
        res.status(200).json(gardenData);
    } catch (err) {
        res.status(400).json(err);
    }
}); 


// delete a garden
router.delete('/:id',  async (req, res) => {
    try {
        const dbGardenData = await Garden.destroy({
            where: {
                id: req.params.id
            }
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