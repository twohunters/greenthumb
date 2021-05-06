const router = require('express').Router();
const { User, Garden } = require('../../models');
const withAuth = require('../../utils/auth');
//View users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] }
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//Get user by ID
router.get('/:id', async (req, res) => {
    try {
        const userData = User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Garden,
                    attributes: ['id', 'garden_name']
                },
            ]
        });
        if (!userData) {
            res.status(400).json({ message: 'No user found with this ID' })
        }
        res.status(200).json(userData)
        
    } catch (err) {
        res.status(400).json(err);
    }
});


// CREATE new user POST REQUEST /api/users/
router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })
          //  req.session.loggedIn = true;

            res.status(200).json(userData);
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        // Find the user who matches the posted e-mail address
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
        }

        // Verify the posted password with the password store in the database
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
        }

        // Create session variables based on the logged in user
        // req.session.save(() => {
        //     req.session.user_id = dbUserData.id;
        //     req.session.name = dbUserData.name
        //     req.session.loggedIn = true;

            res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in!' });
        // });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        // Remove the session variables
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


//UPDATE USER
router.put('/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.update(req.body, {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        });
        if (!userData) {
            res.status(400).json({ message: 'No user found with this id' })
        }
        res.status(200).json(userData)
    } catch (err) {
        res.status(400).json(err);
    }
});
//Delete User
router.delete('/:id', withAuth, async (req, res) =>{
    try{
        const userData = await User.destroy({
            where: {
                id: req.params.id
            }
        });
        if(!userData){
            res.status(400).json({ message: 'No user found with this id' })
        }
        res.status(200).json(userData)
    }catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
