'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    overallreview: DataTypes.DOUBLE,
    reviewCount: DataTypes.INTEGER,
    imagepath: DataTypes.TEXT,
    imagedetail: DataTypes.TEXT
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
        Product.belongsTo(models.Topic, { foreignKey: 'topicId'});
        Product.belongsTo(models.Teacher, { foreignKey: 'teacherId' });
        Product.hasMany(models.Review, { foreignKey: 'productId' });
        Product.hasMany(models.Comment, { foreignKey: 'productId' });
        Product.hasMany(models.Productchild, { foreignKey: 'productId' });
        Product.hasMany(models.Detailpay, { foreignKey: 'productId' });
        Product.hasMany(models.Detailwatchlist, { foreignKey: 'productId' });   
  };
  return Product;
};