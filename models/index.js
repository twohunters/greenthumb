const User = require('./User');
const Garden = require('./Garden');
const Plant = require('./Plant');

User.hasMany(Garden,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Garden.belongsTo(User, {
    foreignKey:'user_id'
});

Garden.hasMany(Plant,{
    foreignKey: 'id'
});

<<<<<<< HEAD
module.exports = { User, Garden };
=======
Plant.belongsToMany(Garden,{
    foreignKey:'plant_id'
})

module.exports = { User, Garden, Plant };

>>>>>>> 0498a457dd52f2d84f4e7409ee81479bb83222f5
