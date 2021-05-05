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
=======

>>>>>>> ad92ddb118768ec521b9fbd19f958d7290e0c913
Plant.belongsToMany(Garden,{
    foreignKey:'plant_id'
})

module.exports = { User, Garden, Plant };

<<<<<<< HEAD
=======

>>>>>>> ad92ddb118768ec521b9fbd19f958d7290e0c913
