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
    foreignKey: 'name'
});

module.exports = { User, Garden };
