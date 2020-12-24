'use strict';
module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define('Teacher', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        fullname: DataTypes.TEXT,
        imagepath: DataTypes.TEXT
    }, {});
    Teacher.associate = function(models) {
        // associations can be defined here
        Teacher.hasMany(models.Product, { foreignKey: 'teacherId' });
    };
    return Teacher;
};