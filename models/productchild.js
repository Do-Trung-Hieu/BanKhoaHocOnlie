'use strict';
module.exports = (sequelize, DataTypes) => {
  const Productchild = sequelize.define('Productchild', {
    name: DataTypes.TEXT,
    content: DataTypes.TEXT,
    clip: DataTypes.TEXT
  }, {});
  Productchild.associate = function(models) {
    // associations can be defined here
    Productchild.belongsTo(models.Product, { foreignKey: 'productId' });
    Productchild.hasMany(models.State, { foreignKey: 'productchildId' });
  };
  return Productchild;
};