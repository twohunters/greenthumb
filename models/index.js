const User = require('./User');
const Garden = require('./Garden');
const Plant = require('./Plant');
const PlantTag = require('./PlantTag')

Garden.belongsTo(User, {
    foreignKey:'user_id'
});

User.hasMany(Garden,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


Garden.belongsToMany(Plant,{
    through: PlantTag,
    foreignKey:'garden_id'
});

Plant.belongsToMany(Garden,{
    through: PlantTag,
    foreignKey:'plant_id'
});




module.exports = { User, Garden, Plant, PlantTag };

