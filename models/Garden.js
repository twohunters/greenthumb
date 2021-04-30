const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Garden extends Model {}

Garden.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        garden_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
        plant_a:{
            type: DataTypes.STRING,
            references:{
                model: 'plant',
                key: 'name'
            },
        },
        plant_b:{
            type: DataTypes.STRING,
            references:{
                model: 'plant',
                key: 'name'
            },
        },
        plant_c:{
            type: DataTypes.STRING,
            references:{
                model: 'plant',
                key: 'name'
            },
        },
        plant_d:{
            type: DataTypes.STRING,
            references:{
                model: 'plant',
                key: 'name'
            },
        },
        plant_e:{
            type: DataTypes.STRING,
            references:{
                model: 'plant',
                key: 'name'
            },
        },
        plant_f:{
            type: DataTypes.STRING,
            references:{
                model: 'plant',
                key: 'name'
            },
        },
        plant_g:{
            type: DataTypes.STRING,
            references:{
                model: 'plant',
                key: 'name'
            },
        },
        plant_h:{
            type: DataTypes.STRING,
            references:{
                model: 'plant',
                key: 'name'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project',
      }
);

module.exports = Garden;