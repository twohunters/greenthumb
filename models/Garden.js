const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Garden extends Model { }

Garden.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    garden_name: {
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
    plant_a: {
      type: DataTypes.STRING,
    },
    plant_b: {
      type: DataTypes.STRING,
    },

    plant_c: {
      type: DataTypes.STRING,
    },

    plant_d: {
      type: DataTypes.STRING,
    },

    plant_e: {
      type: DataTypes.STRING,
    },

    plant_f: {
      type: DataTypes.STRING,
    },

    plant_g: {
      type: DataTypes.STRING,
    },

    plant_h: {
      type: DataTypes.STRING,
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'garden',

  },

);

module.exports = Garden;