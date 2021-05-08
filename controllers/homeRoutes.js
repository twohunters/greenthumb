const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Plant, Garden, PlantTag } = require('../models');
const withAuth = require('../utils/auth');


//The homepage is the login page, if the user is already logged in, they will be redirected to their userpage
router.get('/', (req, res) => {
  // If a session exists, redirect the request to the homepage
  // if (req.session.loggedIn) {
  //   res.redirect('/userpage');
  //   return; }

  res.render('homepage');
});

// use withAuth middleware to prevent access
router.get('/userpage/:id', async (req, res) => {

  try {
    // Get all users, sorted by name
    const userData = await User.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'name'],
      include: [
        {
          model: Garden,
          attributes: ['id', 'garden_name', 'user_id', 'plant_a','plant_b','plant_c','plant_d','plant_e','plant_f','plant_g','plant_h'],
          include: 
          // {
          //   model: PlantTag,
          //   attributes: ['id', 'plant_id', 'garden_id'],
          // },
          {
            model: Plant,
            attributes: ['id', 'name', 'time_to_fruit'],
          }
         
        },
      ]

    });
    console.log(userData);
    if (!userData) {
      res.status(404).json({ message: 'No user found with this id' });
    }

    const plantTagData = await PlantTag.findAll({
      where:{
        garden_id:req.params.id
      }
     });

     const plantTags = await plantTagData.map(plantTags => plantTags.get({plain: true}))
    // Serialize user data so templates can read it
    const users = await userData.get({ plain: true });

    // Pass serialized data into Handlebars.js template
    res.render('userpage', {
      users, plantTags,
      // Pass the logged in flag to the template
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//plant information page by id
router.get('/plantpage/:id', async (req, res) => {
  try {
    const plantData = await Plant.findByPk(req.params.id);
    const plant = plantData.get({ plain: true });
    res.render('plantpage', { plant, })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/creategarden', async (req, res) => {
  res.render('createGarden')
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes:{exclude:['password']}
//     });
// // const user = userData.get({plain: true});
// //     // const plant = plantData.get({ plain: true });
// //     res.render('createGarden', { ...user, 
// //     loggedIn: true});
//   } catch (err) {
//     console.log(err)
//     res.status(500).json(err);
//   }
})

module.exports = router;
