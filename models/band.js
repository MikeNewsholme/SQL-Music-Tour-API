"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ meet_greets, set_time }) {
      // define association here
      Bands.hasMany(meet_greets, {
        foreignKey: "band_id",
        as: "meet_greets",
      });
      Bands.hasMany(set_time, {
        foreignKey: "band_id",
        as: "set_times",
      });
    }
  }
  Bands.init(
    {
      band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      available_start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Bands",
      tableName: "band",
      timestamps: false,
    }
  );
  return Bands;
};
