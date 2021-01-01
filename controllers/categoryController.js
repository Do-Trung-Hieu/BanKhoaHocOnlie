let controller = {};
let models = require('../models');
let Category = models.Category;
let db = require('../utils/db')
let Sequelize = require('sequelize');
let Op = Sequelize.Op;

controller.getAll = (query)=>{
    return new Promise((resolve,reject)=>{
        let options = {
            attributes: ['id','name','imagepath'],
            include: [{
                model: models.Product,
                where: {}
            }]
        };
        if(query && query.search != ''){
            options.include[0].where.name = {
                [Op.iLike]: `%${query.search}%`
            }
        }
        Category
            .findAll(options)
            .then(data=>resolve(data))
            .catch(error=>reject(new Error(error)));
    });
};


module.exports = controller;