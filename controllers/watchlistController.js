let controller = {};
let models = require('../models');
let Detailwatchlist = models.Detailwatchlist;

controller.getAllById = (id)=>{
    return new Promise((resolve,reject)=>{
        let options = {
            where: {
                userId: id
            },
            attributes: ['productId'],
            include : [{
                model: models.Product
            }]
        };
        Detailwatchlist
            .findAll(options)
            .then(data=>resolve(data))
            .catch(error=>reject(new Error(error)));
    });
};

controller.Add = (productId,userId)=>{
    return new Promise((resolve,reject)=>{
        let options = {
            productId,
            userId
        };
        Detailwatchlist
            .create(options)
            .then(data=>resolve(data))
            .catch(error=>reject(new Error(error)));
    });
};

controller.getById = (productId,userId) => {
    return new Promise((resolve,reject)=>{
        let options = {
            where: {
                productId,
                userId
            }
        };
        Detailwatchlist
            .findOne(options)
            .then(data=>resolve(data))
            .catch(error=>reject(new Error(error)));
    });
};

controller.DeleteById = (productId,userId)=>{
    return new Promise((resolve,reject)=>{
        let options = {
            where: {
                productId,
                userId
            }
        };
        Detailwatchlist
            .destroy(options)
            .then(data=>resolve(data))
            .catch(error=>reject(new Error(error)));
    });
};

module.exports = controller;

