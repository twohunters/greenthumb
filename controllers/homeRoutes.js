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
// router.get('/userpage/:id', async (req, res) => {

//   try {
//     // Get all users, sorted by name
//     const gardenData = await Garden.findByPk({
   
//         id: req.params.id
      
   
//           // {
//           //   model: Plant,
//           //   attributes: ['id', 'name', 'time_to_fruit'],
//           // }
//     });
//     // const gardenData = await Garden.findAll({
//     //   where:{
//     //     user_id: userData.id,
//     //   },
//     // })
//     // console.log(userData.id);
//     // if (!userData) {
//     //   res.status(404).json({ message: 'No user found with this id' });
//     // }

//     // const plantTagData = await PlantTag.findAll({
//     //   where:{
//     //     garden_id:req.params.id
//     //   }
//     //  });

//     //  const plantTags = await plantTagData.map(plantTags => plantTags.get({plain: true}))
//     // // Serialize user data so templates can read it
//     const gardens =await gardenData.get({ plain: true});
//     const users = await userData.get({ plain: true });
//     console.log(users)
    
//     // console.log(gardens)
//     // Pass serialized data into Handlebars.js template
//     res.render('userpage', {
//       //  plantTags,
//       users
//       // Pass the logged in flag to the template
//       // loggedIn: req.session.loggedIn
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

//plant information page by id
router.get('/userpage', async (req, res) => {

  try {
    const gardenData = await Garden.findOne({
   
      where: {
        user_id: req.session.user_id},
     })
console.log(req.session.user_id)
    const garden = gardenData.get({ plain: true });
    res.render('user', { garden })
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/plantpage/:name', async (req, res) => {
  try {
 
    const plantData = await Plant.findOne({where: {name:req.params.name}});
    const plant = plantData.get({ plain: true });
    
    res.render('plant', {plant})
  } catch (err) {
    
    res.status(500).json(err);
  }
});

router.get('/creategarden', async (req, res) => {
  try {
    // const plant = plantData.get({ plain: true });
    res.render('createGarden')
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
})

module.exports = router;
