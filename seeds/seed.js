const sequelize = require('../config/connection');
const { Plant, User, Garden} = require('../models');

const userData = require('./userData.json');
const plantData = require('./plantData.json');
const gardenData = require('./gardenData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Plant.bulkCreate(plantData)

  await Garden.bulkCreate(gardenData)

  process.exit(0);
};

seedDatabase();
