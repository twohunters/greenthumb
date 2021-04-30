const User = require('./User');
<<<<<<< HEAD
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
=======

module.exports = { User };
>>>>>>> 9b61799a34f9b60a737804a8dbaa8ec521d79b79
