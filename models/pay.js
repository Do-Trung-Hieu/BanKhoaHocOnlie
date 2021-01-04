'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pay = sequelize.define('Pay', {
    price: DataTypes.DECIMAL
  }, {});
  Pay.associate = function(models) {
    // associations can be defined here
      Pay.belongsTo(models.User, { foreignKey: 'userId'});
      Pay.belongsTo(models.Product, { foreignKey: 'productId'});
  };
  return Pay;
};