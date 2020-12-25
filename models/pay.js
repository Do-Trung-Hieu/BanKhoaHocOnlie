'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pay = sequelize.define('Pay', {
    total: DataTypes.DECIMAL
  }, {});
  Pay.associate = function(models) {
    // associations can be defined here
      Pay.belongsTo(models.User, { foreignKey: 'userId'});
      Pay.hasMany(models.Detailpay, { foreignKey: 'payId' });
  };
  return Pay;
};