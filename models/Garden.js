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
       boxA:{
        type: DataTypes.STRING,
        references: {
          model: 'plant',
          key: 'id',
        }
      },
      boxB:{
        type: DataTypes.STRING,
        references: {
          model: 'plant',
          key: 'id',
        }
      },
      boxC:{
        type: DataTypes.STRING,
        references: {
          model: 'plant',
          key: 'id',
        }
      },
      boxD:{
        type: DataTypes.STRING,
        references: {
          model: 'plant',
          key: 'id',
        }
      },
      boxE:{
        type: DataTypes.STRING,
        references: {
          model: 'plant',
          key: 'id',
        }
      },
      boxF:{
        type: DataTypes.STRING,
        references: {
          model: 'plant',
          key: 'id',
        }
      },
      boxG:{
        type: DataTypes.STRING,
        references: {
          model: 'plant',
          key: 'id',
        }
      },
      boxH:{
        type: DataTypes.STRING,
        references: {
          model: 'plant',
          key: 'id',
        }
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