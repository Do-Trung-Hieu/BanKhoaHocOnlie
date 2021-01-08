'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    watched: DataTypes.BOOLEAN
  }, {});
  State.associate = function(models) {
    // associations can be defined here
    State.belongsTo(models.Product, { foreignKey: 'productId' });
    State.belongsTo(models.Productchild, { foreignKey: 'productchildId' });
    State.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return State;
};