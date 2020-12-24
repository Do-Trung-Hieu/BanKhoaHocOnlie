'use strict';
module.exports = (sequelize, DataTypes) => {
    const Detailwatchlist = sequelize.define('Detailwatchlist', {

    }, {});
    Detailwatchlist.associate = function(models) {
        // associations can be defined here
        Detailwatchlist.belongsTo(models.Watchlist, { foreignKey: 'watchlistId' });
        Detailwatchlist.belongsTo(models.Product, { foreignKey: 'productId' });
    };
    return Detailwatchlist;
};