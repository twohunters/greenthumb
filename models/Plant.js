const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}

Plant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
        },
        plant_habit:{
            type: DataTypes.STRING,
        },
        life_cycle:{
            type: DataTypes.STRING,
        },
        sun_req:{
            type: DataTypes.STRING,
        },
        water_req:{
            type: DataTypes.STRING,
        },
        uses:{
            type: DataTypes.STRING,
        },
        edible_parts:{
            type: DataTypes.STRING,
        },
        time_to_fruit:{
            type: DataTypes.INTEGER,
        },
        garden_id: {
        type: DataTypes.INTEGER,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'plant',
    }
);

module.exports = Plant;