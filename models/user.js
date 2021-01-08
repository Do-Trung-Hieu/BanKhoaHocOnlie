'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.TEXT,
    imagepath: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN,
    secrettoken: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
        User.hasMany(models.Detailwatchlist, { foreignKey: 'userId' });
        User.hasMany(models.Pay, { foreignKey: 'userId' });
        User.hasMany(models.Review, { foreignKey: 'userId' });
        User.hasMany(models.Comment, { foreignKey: 'userId' });
        User.hasMany(models.State, { foreignKey: 'userId' });
  };
  return User;
};