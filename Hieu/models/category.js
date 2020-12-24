'use strict';
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: DataTypes.STRING,
        imagepath: DataTypes.TEXT
    }, {});
    Category.associate = function(models) {
        // associations can be defined here
        Category.hasMany(models.Topic, { foreignKey: 'categoryId' });
    };
    return Category;
};