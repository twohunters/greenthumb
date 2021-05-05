const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PlantTag extends Model {}

PlantTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: trueq
    },
    plant_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'plant',
        key: 'id',
       
      }
    },
    garden_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'garden',
        key: 'id',
       
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'plant_tag',
  }
);

module.exports = PlantTag;
