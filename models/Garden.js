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
      references: {
        model: 'plant',
        key: 'id',
      }
    },
    plant_b: {
      type: DataTypes.STRING,
      references: {
        model: 'plant',
        key: 'id',
      }
    },
    plant_c: {
      type: DataTypes.STRING,
      references: {
        model: 'plant',
        key: 'id',
      }
    },
    plant_d: {
      type: DataTypes.STRING,
      references: {
        model: 'plant',
        key: 'id',
      }
    },
    plant_e: {
      type: DataTypes.STRING,
      references: {
        model: 'plant',
        key: 'id',
      }
    },
    plant_f: {
      type: DataTypes.STRING,
      references: {
        model: 'plant',
        key: 'id',
      }
    },
    plant_g: {
      type: DataTypes.STRING,
      references: {
        model: 'plant',
        key: 'id',
      }
    },
    plant_h: {
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
    modelName: 'garden',

  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'garden',
  }
);

module.exports = Garden;