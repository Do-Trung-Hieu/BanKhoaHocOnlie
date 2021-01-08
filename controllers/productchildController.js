let controller = {};
let models = require('../models');
let child = models.Productchild;

controller.getProductIdByChildId = (id) => {
    return new Promise((resolve,reject) => {
        child
            .findOne({
                where:{
                    id: id
                }
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

module.exports = controller;