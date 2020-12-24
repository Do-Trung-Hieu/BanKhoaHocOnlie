'use strict';
module.exports = (sequelize, DataTypes) => {
    const Detailpay = sequelize.define('Detailpay', {
        
    }, {});
    Detailpay.associate = function(models) {
        // associations can be defined here
        Detailpay.belongsTo(models.Product, { foreignKey: 'productId' });
        Detailpay.belongsTo(models.Pay, { foreignKey: 'payId' });
    };
    return Detailpay;
};