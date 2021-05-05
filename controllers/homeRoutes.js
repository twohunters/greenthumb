const router = require('express').Router();
const { User, Plant, Garden, PlantTag } = require('../models');
const withAuth = require('../utils/auth');


//The homepage is the login page, if the user is already logged in, they will be redirected to their userpage
router.get('/', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.loggedIn) {
    res.redirect('/userpage');
    return;
  }

  res.render('homepage');
});

// use withAuth middleware to prevent access
router.get('/userpage', withAuth, async (req, res) => {

  try {
    // Get all users, sorted by name
    const userData = await User.findAll({
      attributes: ['name'],
      include: [{
        model: Garden,
        attributes: ['id', 'garden_name', 'user_id', 'plant_id'],
        include: {
          model: PlantTag,
          attributes: ['id', 'plant_id', 'garden_id'],
        },
        include: {
          model: Plant,
          attributes: ['id', 'name', 'time_to_fruit']
        }
      }]
    });

    // Serialize user data so templates can read it
    const users = userData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('userpage', {
      users,
      // Pass the logged in flag to the template
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//plant information page by id
router.get('/plantpage/:id', withAuth, async (req, res) => {
  try {
    const plantData = await Plant.findByPk(req.params.id);
    const plant = plantData.get({ plain: true });
    res.render('plantpage', { plant, loggedIn: req.session.loggedIn })
  } catch (err) {
    res.status(500).json(err);
  }
});
//We should only need plant data on this page
router.get('/creategarden', withAuth, async (req, res) =>{
  try{
    const plantData = await Plant.findAll();

    const plant = plantData.get({ plain: true });
    res.render('creategarden', { plant, loggedIn: req.session.loggedIn })
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
