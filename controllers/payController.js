let controller = {};
let models = require('../models');
let Pay = models.Pay;


controller.getPayByUser = (userId)=>{
    return new Promise((resolve,reject)=>{
        Pay
            .findAll({
               where: {
                   userId: userId 
               }
            })
            .then(data=>resolve(data))
            .catch(error=>reject(new Error(error)));
    });
};

controller.createPay = (price,userId,productId)=>{
    return new Promise((resolve,reject)=>{
        Pay
            .create({
                price,
                userId,
                productId
            })
            .then(data=>resolve(data))
            .catch(error=>reject(new Error(error)));
    });
};


module.exports = controller;