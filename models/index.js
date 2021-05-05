const User = require('./User');
const Garden = require('./Garden');
const Plant = require('./Plant');
const PlantTag = require('/PlantTag')

User.hasMany(Garden,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Garden.belongsTo(User, {
    foreignKey:'user_id'
});

Garden.hasMany(Plant,{
    foreignKey: 'plant_id'
});

Plant.belongsToMany(Garden,{
    through: PlantTag,
    foreignKey:'plant_id'
});



module.exports = { User, Garden, Plant, PlantTag };

