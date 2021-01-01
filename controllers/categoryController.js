let controller = {};
let models = require('../models');
let Category = models.Category;
let db = require('../utils/db')

controller.getAll = ()=>{
    return new Promise((resolve,reject)=>{
        Category
            .findAll({
                attributes: ['id','name','imagepath'],
                include: [{
                    model: models.Product,
                    attributes: ['id']
                    /*include: [{ 
                        model: models.Product,
                        attributes: ['id']
                    }]*/
                }]
            })
            .then(data=>resolve(data))
            .catch(error=>reject(new Error(error)));
    });
};


module.exports = controller;