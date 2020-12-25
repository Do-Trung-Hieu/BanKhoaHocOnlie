'use strict';
module.exports = (sequelize, DataTypes) => {
  const Detailwatchlist = sequelize.define('Detailwatchlist', {
    imagepath: DataTypes.TEXT
  }, {});
  Detailwatchlist.associate = function(models) {
    // associations can be defined here
    Detailwatchlist.belongsTo(models.Product, { foreignKey: 'productId' });
    Detailwatchlist.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Detailwatchlist;
};