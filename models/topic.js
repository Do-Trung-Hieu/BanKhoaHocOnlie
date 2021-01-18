'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    name: DataTypes.TEXT,
    imagepath: DataTypes.TEXT,
  }, {});
  Topic.associate = function(models) {
    // associations can be defined here
      Topic.belongsTo(models.Category, {foreignKey: 'categoryId'});
      Topic.hasMany(models.Product, { foreignKey: 'topicId' });
  };
  return Topic;
};